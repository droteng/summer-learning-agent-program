"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./quest-runner.css";

type ItemType = "multiple_choice" | "numeric" | "short_answer";

interface AuthoredItem {
  id: string;
  type: ItemType;
  stem: string;
  choices?: string[];
  unit?: string;
  hintLadder?: string[];
  // server-only fields (answers) are stripped before sending to client
}

interface AuthoredMission {
  id: string;
  topic: string;
  hook: string;
  miniLesson: string[];
  workedExample: { prompt: string; steps: string[]; answer: string };
  items: AuthoredItem[];
  estimatedMinutes: number;
  reflectionPrompt: string;
}

interface GradeResult {
  itemId: string;
  correct: boolean | null;
  score: number;
  rubricLevel: number | null;
  feedback: string;
  nextHintIndex: number;
  attempts: number;
  misconceptionId: string | null;
  model?: { provider: string; model: string; fallback: boolean } | null;
}

interface QuestRunnerProps {
  mission: AuthoredMission;
  studentId: string;
  studentName: string;
  subjectToken: string;
  subjectLabel: string;
  iconSvg: string;
  backHref: string;
  illustrationUrl?: string;
}

type Stage = { kind: "intro" } | { kind: "item"; index: number } | { kind: "done" };

export function QuestRunner(props: QuestRunnerProps) {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>({ kind: "intro" });
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [grades, setGrades] = useState<Record<string, GradeResult>>({});
  const [hintIndices, setHintIndices] = useState<Record<string, number>>({});
  const [attempts, setAttempts] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = props.mission.items.length;
  const answered = Object.keys(grades).length;

  function startQuest() {
    setStage({ kind: "item", index: 0 });
  }

  function gotoItem(index: number) {
    if (index < 0) return;
    if (index >= total) {
      setStage({ kind: "done" });
      router.refresh();
      return;
    }
    setStage({ kind: "item", index });
  }

  async function submitAnswer(item: AuthoredItem) {
    const response = responses[item.id];
    if (response === undefined || response === "" || response === null) {
      setError("Pick or type an answer first.");
      return;
    }
    setSubmitting(true);
    setError(null);
    const attemptNumber = (attempts[item.id] ?? 0) + 1;
    try {
      const payload = {
        studentId: props.studentId,
        persist: true,
        useLlm: true,
        item,
        response: { ...buildResponseShape(item.type, response), attempts: attemptNumber }
      };
      const res = await fetch("/api/grade-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        throw new Error(`grader_${res.status}`);
      }
      const data = await res.json();
      const grade = data.grade as GradeResult;
      setGrades((prev) => ({ ...prev, [item.id]: grade }));
      setAttempts((prev) => ({ ...prev, [item.id]: attemptNumber }));
      if (!grade.correct && grade.nextHintIndex >= 0) {
        setHintIndices((prev) => ({ ...prev, [item.id]: grade.nextHintIndex }));
      }
    } catch (err) {
      setError("We couldn't check that answer. Try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="qr-panel" data-subject={props.subjectToken} aria-label="Quest runner">
      <header className="qr-head">
        <div className="qr-head-icon" dangerouslySetInnerHTML={{ __html: wrapIconSvg(props.iconSvg) }} />
        <div className="qr-head-body">
          <span className="qr-eyebrow">{props.subjectLabel} quest</span>
          <h2 className="qr-title">{props.mission.topic}</h2>
        </div>
        <a className="qr-close" href={props.backHref} aria-label="Close quest and return to map">
          ✕
        </a>
      </header>

      <ProgressBar answered={answered} total={total} />

      {stage.kind === "intro" ? (
        <IntroStage
          mission={props.mission}
          studentName={props.studentName}
          onStart={startQuest}
          illustrationUrl={props.illustrationUrl}
          subjectLabel={props.subjectLabel}
        />
      ) : stage.kind === "item" ? (
        <ItemStage
          item={props.mission.items[stage.index]}
          index={stage.index}
          total={total}
          response={responses[props.mission.items[stage.index].id]}
          onChange={(value) =>
            setResponses((prev) => ({ ...prev, [props.mission.items[stage.index].id]: value }))
          }
          grade={grades[props.mission.items[stage.index].id]}
          hintIndex={hintIndices[props.mission.items[stage.index].id] ?? -1}
          attemptCount={attempts[props.mission.items[stage.index].id] ?? 0}
          onSubmit={() => submitAnswer(props.mission.items[stage.index])}
          onNext={() => gotoItem(stage.index + 1)}
          onPrev={() => gotoItem(stage.index - 1)}
          submitting={submitting}
          error={error}
        />
      ) : (
        <DoneStage mission={props.mission} grades={grades} backHref={props.backHref} />
      )}
    </section>
  );
}

function ProgressBar({ answered, total }: { answered: number; total: number }) {
  const pct = total === 0 ? 0 : Math.round((answered / total) * 100);
  return (
    <div className="qr-progress">
      <div className="qr-progress-track">
        <div className="qr-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="qr-progress-label">
        {answered}/{total} answered
      </span>
    </div>
  );
}

function IntroStage({
  mission,
  studentName,
  onStart,
  illustrationUrl,
  subjectLabel
}: {
  mission: AuthoredMission;
  studentName: string;
  onStart: () => void;
  illustrationUrl?: string;
  subjectLabel: string;
}) {
  return (
    <div className="qr-intro">
      {illustrationUrl && (
        <img
          className="qr-illustration"
          src={illustrationUrl}
          alt={`${subjectLabel} illustration for ${mission.topic}`}
        />
      )}
      <p className="qr-hook">{mission.hook}</p>
      <div className="qr-mini-lesson">
        <span className="qr-eyebrow">Quick recap</span>
        <ul>
          {mission.miniLesson.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="qr-worked">
        <span className="qr-eyebrow">Worked example</span>
        <p className="qr-worked-prompt">{mission.workedExample.prompt}</p>
        <ol>
          {mission.workedExample.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <p className="qr-worked-answer">
          <strong>Answer:</strong> {mission.workedExample.answer}
        </p>
      </div>
      <div className="qr-cta-row">
        <button type="button" className="qr-primary" onClick={onStart}>
          Start the quest, {studentName}
          <span aria-hidden="true">→</span>
        </button>
        <span className="qr-meta">{mission.estimatedMinutes} min · {mission.items.length} questions</span>
      </div>
    </div>
  );
}

function ItemStage({
  item,
  index,
  total,
  response,
  onChange,
  grade,
  hintIndex,
  attemptCount,
  onSubmit,
  onNext,
  onPrev,
  submitting,
  error
}: {
  item: AuthoredItem;
  index: number;
  total: number;
  response: any;
  onChange: (value: any) => void;
  grade: GradeResult | undefined;
  hintIndex: number;
  attemptCount: number;
  onSubmit: () => void;
  onNext: () => void;
  onPrev: () => void;
  submitting: boolean;
  error: string | null;
}) {
  const showCorrect = grade?.correct === true;
  const showWrong = grade && grade.correct === false;
  const lockedIn = showCorrect || (grade && grade.rubricLevel != null && grade.rubricLevel >= 2);

  return (
    <div className="qr-item">
      <div className="qr-item-head">
        <span className="qr-eyebrow">Question {index + 1} of {total}</span>
        {grade && grade.rubricLevel != null && (
          <span className="qr-rubric" data-level={grade.rubricLevel}>Rubric level {grade.rubricLevel}/3</span>
        )}
      </div>
      <p className="qr-stem">{item.stem}</p>

      {item.type === "multiple_choice" && (
        <div className="qr-choices" role="radiogroup">
          {item.choices?.map((choice, i) => {
            const checked = response === i;
            return (
              <label key={i} className="qr-choice" data-checked={checked} data-disabled={lockedIn}>
                <input
                  type="radio"
                  name={item.id}
                  value={i}
                  checked={checked}
                  onChange={() => onChange(i)}
                  disabled={lockedIn}
                />
                <span className="qr-choice-letter">{String.fromCharCode(65 + i)}</span>
                <span className="qr-choice-text">{choice}</span>
              </label>
            );
          })}
        </div>
      )}

      {item.type === "numeric" && (
        <div className="qr-numeric">
          <input
            type="number"
            inputMode="decimal"
            className="qr-numeric-input"
            value={response ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Your answer"
            disabled={lockedIn}
          />
          {item.unit && <span className="qr-numeric-unit">{item.unit}</span>}
        </div>
      )}

      {item.type === "short_answer" && (
        <textarea
          className="qr-textarea"
          rows={4}
          value={response ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write 1–2 sentences. Explain your thinking."
          disabled={lockedIn}
        />
      )}

      {hintIndex >= 0 && item.hintLadder && item.hintLadder[hintIndex] && (
        <div className="qr-hint" role="note">
          <span className="qr-eyebrow">Hint</span>
          <p>{item.hintLadder[hintIndex]}</p>
        </div>
      )}

      {grade && (
        <div className="qr-feedback" data-correct={showCorrect ? "true" : "false"}>
          <span className="qr-eyebrow">{showCorrect ? "Nice work!" : "Try again"}</span>
          <p>{grade.feedback}</p>
          {grade.model?.fallback && (
            <p className="qr-feedback-meta">Graded in classic mode (no LLM call this turn).</p>
          )}
        </div>
      )}

      {error && <p className="qr-error">{error}</p>}

      <div className="qr-cta-row">
        <button type="button" className="qr-secondary" onClick={onPrev} disabled={index === 0}>
          ← Previous
        </button>
        {!lockedIn ? (
          <button type="button" className="qr-primary" onClick={onSubmit} disabled={submitting}>
            {submitting ? "Checking…" : attemptCount > 0 ? "Check again" : "Check my answer"}
          </button>
        ) : (
          <button type="button" className="qr-primary" onClick={onNext}>
            {index + 1 === total ? "Finish quest" : "Next question"}
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </div>
  );
}

function DoneStage({
  mission,
  grades,
  backHref
}: {
  mission: AuthoredMission;
  grades: Record<string, GradeResult>;
  backHref: string;
}) {
  const totalScore = Object.values(grades).reduce((sum, g) => sum + g.score, 0);
  const max = mission.items.length;
  const pct = max === 0 ? 0 : Math.round((totalScore / max) * 100);
  return (
    <div className="qr-done">
      <div className="qr-done-trophy" aria-hidden="true">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="qr-trophy-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path
            d="M16 12 H48 V22 a10 10 0 0 1 -10 10 H26 a10 10 0 0 1 -10 -10 Z"
            fill="url(#qr-trophy-grad)"
            stroke="#92400e"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M14 16 H8 V22 a6 6 0 0 0 6 6" fill="none" stroke="#92400e" strokeWidth="2" />
          <path d="M50 16 H56 V22 a6 6 0 0 1 -6 6" fill="none" stroke="#92400e" strokeWidth="2" />
          <rect x="26" y="32" width="12" height="10" fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
          <rect x="20" y="42" width="24" height="6" rx="2" fill="#92400e" />
        </svg>
      </div>
      <h2 className="qr-done-title">Quest complete!</h2>
      <p className="qr-done-score">Score: {pct}%</p>
      <p className="qr-done-reflect">{mission.reflectionPrompt}</p>
      <a className="qr-primary" href={backHref}>
        Back to the map
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

function buildResponseShape(type: ItemType, raw: any) {
  if (type === "multiple_choice") return { choiceIndex: Number(raw) };
  if (type === "numeric") return { value: Number(raw) };
  return { text: String(raw ?? "") };
}

function wrapIconSvg(inner: string) {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}
