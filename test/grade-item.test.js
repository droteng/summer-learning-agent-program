import assert from "node:assert/strict";
import test from "node:test";
import { gradeItem } from "../src/agents/assessmentAgent.js";
import { createLlm } from "../src/agents/llm/index.js";
import { createTelemetry } from "../src/agents/llm/telemetry.js";
import { grade6MathWeek1Day1 } from "../src/content/grade6/week1/math-day1.js";

const mcqItem = grade6MathWeek1Day1.items.find((i) => i.type === "multiple_choice");
const numericItem = grade6MathWeek1Day1.items.find((i) => i.type === "numeric");
const shortAnswerItem = grade6MathWeek1Day1.items.find((i) => i.type === "short_answer");

test("multiple-choice grades correctly and gives the explanation", async () => {
  const grade = await gradeItem({
    item: mcqItem,
    response: { choiceIndex: mcqItem.answerIndex }
  });
  assert.equal(grade.correct, true);
  assert.equal(grade.score, 1);
  assert.ok(grade.feedback.startsWith("Correct"));
  assert.equal(grade.misconceptionId, null);
  assert.equal(grade.nextHintIndex, -1);
});

test("multiple-choice grades wrong answer with hint progression", async () => {
  const wrongIndex = mcqItem.answerIndex === 0 ? 1 : 0;
  const first = await gradeItem({
    item: mcqItem,
    response: { choiceIndex: wrongIndex, attempts: 1 }
  });
  const second = await gradeItem({
    item: mcqItem,
    response: { choiceIndex: wrongIndex, attempts: 2 }
  });
  assert.equal(first.correct, false);
  assert.equal(first.score, 0);
  assert.equal(first.nextHintIndex, 0);
  assert.equal(second.nextHintIndex, 1);
  assert.ok(first.misconceptionId, "expected misconception id surfaced from item");
});

test("numeric grading respects tolerance and unit", async () => {
  const correct = await gradeItem({
    item: numericItem,
    response: { value: numericItem.answer }
  });
  const off = await gradeItem({
    item: numericItem,
    response: { value: numericItem.answer + 0.5 }
  });
  assert.equal(correct.correct, true);
  assert.match(correct.feedback, new RegExp(`${numericItem.answer}`));
  if (numericItem.tolerance === 0) {
    assert.equal(off.correct, false);
  }
});

test("numeric grading rejects non-numeric input", async () => {
  const grade = await gradeItem({ item: numericItem, response: { value: "not a number" } });
  assert.equal(grade.correct, false);
  assert.equal(grade.score, 0);
});

test("short-answer falls back to heuristic when no llm is supplied", async () => {
  const strong = await gradeItem({
    item: shortAnswerItem,
    response: {
      text: "Both 6 and 9 are divisible by 3. Dividing each gives 2 and 3, so 6:9 simplifies to 2:3 because they share the same factor."
    }
  });
  const weak = await gradeItem({
    item: shortAnswerItem,
    response: { text: "Yes." }
  });
  assert.equal(strong.rubricLevel, 3);
  assert.equal(strong.correct, true);
  assert.ok(strong.score >= 0.99);
  assert.equal(weak.rubricLevel, 1);
  assert.equal(weak.correct, false);
});

test("short-answer uses LLM rubric path when provider returns parseable JSON", async () => {
  const events = [];
  const recordingProvider = {
    name: "anthropic",
    async complete(req, hint) {
      return {
        text: '{"level":3,"feedback":"Strong reasoning — you named the common factor.","misconceptionId":null}',
        usage: { inputTokens: 120, outputTokens: 40, cachedInputTokens: 0 },
        model: hint.model,
        provider: "anthropic",
        latencyMs: 5,
        fallback: false
      };
    }
  };
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: createTelemetry({ sink: (e) => events.push(e) }),
    providers: {
      mock: { name: "mock", async complete() { throw new Error("mock should not be hit"); } },
      anthropic: recordingProvider
    }
  });
  const grade = await gradeItem({
    item: shortAnswerItem,
    response: { text: "Both numbers share 3 as a factor, so 6:9 simplifies to 2:3." },
    llm,
    studentId: "child-rubric"
  });
  assert.equal(grade.rubricLevel, 3);
  assert.equal(grade.score, 1);
  assert.equal(grade.model.provider, "anthropic");
  assert.equal(grade.model.fallback, false);
});

test("short-answer LLM path falls back to heuristic when JSON is malformed", async () => {
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: createTelemetry({ sink: () => {} }),
    providers: {
      mock: { name: "mock", async complete(req, hint) {
        return {
          text: "no json here",
          usage: { inputTokens: 0, outputTokens: 0, cachedInputTokens: 0 },
          model: "mock",
          provider: "mock",
          latencyMs: 0,
          fallback: true
        };
      } },
      anthropic: { name: "anthropic", async complete() {
        return {
          text: "this is plain prose with no JSON object",
          usage: { inputTokens: 50, outputTokens: 30, cachedInputTokens: 0 },
          model: "claude-haiku-4-5",
          provider: "anthropic",
          latencyMs: 5,
          fallback: false
        };
      } }
    }
  });
  const strongResponse = "Both 6 and 9 are divisible by 3 so the simplified ratio is 2:3 because both share the same factor.";
  const grade = await gradeItem({
    item: shortAnswerItem,
    response: { text: strongResponse },
    llm
  });
  assert.equal(grade.rubricLevel, 3);
  assert.equal(grade.model.fallback, true, "fallback flag should be set when JSON cannot be parsed");
});

test("short-answer LLM path tolerates a provider error and uses heuristic", async () => {
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: createTelemetry({ sink: () => {} }),
    providers: {
      mock: { name: "mock", async complete() {
        return {
          text: "mock",
          usage: { inputTokens: 0, outputTokens: 0, cachedInputTokens: 0 },
          model: "mock",
          provider: "mock",
          latencyMs: 0,
          fallback: true
        };
      } },
      anthropic: { name: "anthropic", async complete() { throw new Error("upstream timeout"); } }
    }
  });
  const grade = await gradeItem({
    item: shortAnswerItem,
    response: { text: "I divided both numbers by 3 to get 2:3 because the ratio simplifies." },
    llm
  });
  assert.ok([2, 3].includes(grade.rubricLevel));
});
