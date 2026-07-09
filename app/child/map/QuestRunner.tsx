"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./quest-runner.css";
import { STATIC_IMAGE_FALLBACKS } from "../../../src/data/staticImageCatalog.js";

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

interface DailyHour {
  warmUp: {
    type: string;
    title: string;
    prompt: string;
    answer?: string;
    estimatedMinutes?: number;
  };
  creativeLab: {
    title: string;
    challenge: string;
    materials?: string[];
    steps?: string[];
    deliverable: string;
    choiceBoard?: string[];
    estimatedMinutes?: number;
  };
  challengeArena: {
    title: string;
    items: AuthoredItem[];
    bonusXp: number;
    estimatedMinutes?: number;
  };
  moveAndReset: {
    type: string;
    title: string;
    prompt: string;
    scienceTieIn?: string;
    estimatedMinutes?: number;
  };
  reflectAndReward: {
    journalPrompt: string;
    badge: { id: string; name: string; emoji: string };
    estimatedMinutes?: number;
  };
}

interface AuthoredMission {
  id: string;
  topic: string;
  hook: string;
  miniLesson: string[];
  keyTerms?: { term: string; definition: string }[] | null;
  workedExample: { prompt: string; steps: string[]; answer: string };
  items: AuthoredItem[];
  estimatedMinutes: number;
  reflectionPrompt: string;
  dailyHour?: DailyHour | null;
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
  conceptDiagramUrl?: string;
  vocabCardUrls?: Record<string, string | null>;
}

type Stage =
  | { kind: "warmup" }
  | { kind: "intro" }
  | { kind: "item"; index: number }
  | { kind: "lab" }
  | { kind: "arena"; index: number }
  | { kind: "reset" }
  | { kind: "done" };

// The Daily Hour segment order, for the journey timeline.
const SEGMENTS = [
  { key: "warmup", label: "Warm-Up", emoji: "⚡" },
  { key: "core", label: "Mission", emoji: "🎯" },
  { key: "lab", label: "Creative Lab", emoji: "🎨" },
  { key: "arena", label: "Arena", emoji: "🏆" },
  { key: "reset", label: "Move", emoji: "🤸" },
  { key: "done", label: "Reward", emoji: "⭐" }
] as const;

function segmentForStage(kind: Stage["kind"]): string {
  if (kind === "intro" || kind === "item") return "core";
  return kind;
}

export function QuestRunner(props: QuestRunnerProps) {
  const router = useRouter();
  const dh = props.mission.dailyHour ?? null;
  const hasDH = !!dh;
  const [stage, setStage] = useState<Stage>(hasDH ? { kind: "warmup" } : { kind: "intro" });
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [grades, setGrades] = useState<Record<string, GradeResult>>({});
  const [hintIndices, setHintIndices] = useState<Record<string, number>>({});
  const [attempts, setAttempts] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [labDone, setLabDone] = useState(false);

  const total = props.mission.items.length;
  const answered = Object.keys(grades).length;
  const arenaItems = dh?.challengeArena.items ?? [];
  const arenaTotal = arenaItems.length;

  function startQuest() {
    setStage({ kind: "item", index: 0 });
  }

  function gotoItem(index: number) {
    if (index < 0) return;
    if (index >= total) {
      // Core items done. If there's a Daily Hour, continue to the Creative
      // Lab; otherwise finish.
      if (hasDH) {
        setStage({ kind: "lab" });
      } else {
        setStage({ kind: "done" });
        router.refresh();
      }
      return;
    }
    setStage({ kind: "item", index });
  }

  function gotoArena(index: number) {
    if (index < 0) return;
    if (index >= arenaTotal) {
      setStage({ kind: "reset" });
      return;
    }
    setStage({ kind: "arena", index });
  }

  function finishQuest() {
    setStage({ kind: "done" });
    router.refresh();
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

      {hasDH ? (
        <JourneyTimeline current={segmentForStage(stage.kind)} />
      ) : (
        <ProgressBar answered={answered} total={total} />
      )}

      {stage.kind === "warmup" && dh ? (
        <WarmUpStage warmUp={dh.warmUp} studentName={props.studentName} onStart={() => setStage({ kind: "intro" })} />
      ) : stage.kind === "intro" ? (
        <IntroStage
          mission={props.mission}
          studentName={props.studentName}
          onStart={startQuest}
          illustrationUrl={props.illustrationUrl}
          conceptDiagramUrl={props.conceptDiagramUrl}
          subjectLabel={props.subjectLabel}
        />
      ) : stage.kind === "item" ? (
        <>
          <ProgressBar answered={answered} total={total} />
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
            lastLabel={hasDH ? "On to the Creative Lab →" : "Finish quest"}
          />
        </>
      ) : stage.kind === "lab" && dh ? (
        <CreativeLabStage
          lab={dh.creativeLab}
          done={labDone}
          onToggleDone={() => setLabDone((d) => !d)}
          onContinue={() => (arenaTotal > 0 ? gotoArena(0) : setStage({ kind: "reset" }))}
        />
      ) : stage.kind === "arena" && dh ? (
        <ArenaStage
          arenaTitle={dh.challengeArena.title}
          bonusXp={dh.challengeArena.bonusXp}
          item={arenaItems[stage.index]}
          index={stage.index}
          total={arenaTotal}
          response={responses[arenaItems[stage.index].id]}
          onChange={(value) =>
            setResponses((prev) => ({ ...prev, [arenaItems[stage.index].id]: value }))
          }
          grade={grades[arenaItems[stage.index].id]}
          hintIndex={hintIndices[arenaItems[stage.index].id] ?? -1}
          attemptCount={attempts[arenaItems[stage.index].id] ?? 0}
          onSubmit={() => submitAnswer(arenaItems[stage.index])}
          onNext={() => gotoArena(stage.index + 1)}
          submitting={submitting}
          error={error}
        />
      ) : stage.kind === "reset" && dh ? (
        <MoveResetStage moveAndReset={dh.moveAndReset} onContinue={finishQuest} />
      ) : (
        <DoneStage
          mission={props.mission}
          grades={grades}
          backHref={props.backHref}
          vocabCardUrls={props.vocabCardUrls}
          badge={dh?.reflectAndReward.badge}
          journalPrompt={dh?.reflectAndReward.journalPrompt}
        />
      )}
    </section>
  );
}

function JourneyTimeline({ current }: { current: string }) {
  const currentIdx = SEGMENTS.findIndex((s) => s.key === current);
  return (
    <ol className="qr-journey" aria-label="Today's hour">
      {SEGMENTS.map((s, i) => (
        <li
          key={s.key}
          className="qr-journey-step"
          data-state={i < currentIdx ? "done" : i === currentIdx ? "current" : "upcoming"}
        >
          <span className="qr-journey-emoji" aria-hidden="true">{s.emoji}</span>
          <span className="qr-journey-label">{s.label}</span>
        </li>
      ))}
    </ol>
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
  conceptDiagramUrl,
  subjectLabel
}: {
  mission: AuthoredMission;
  studentName: string;
  onStart: () => void;
  illustrationUrl?: string;
  conceptDiagramUrl?: string;
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
      <div className="qr-mini-lesson" data-has-diagram={conceptDiagramUrl ? "true" : "false"}>
        <span className="qr-eyebrow">Quick recap</span>
        <div className="qr-mini-lesson-body">
          <ul>
            {mission.miniLesson.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          {conceptDiagramUrl && (
            <img
              className="qr-concept-diagram"
              src={conceptDiagramUrl}
              alt={`Concept diagram for ${mission.topic}`}
            />
          )}
        </div>
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
        <span className="qr-meta">
          {mission.dailyHour
            ? `Core mission · ${mission.items.length} questions`
            : `${mission.estimatedMinutes} min · ${mission.items.length} questions`}
        </span>
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
  error,
  lastLabel = "Finish quest"
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
  lastLabel?: string;
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
            {index + 1 === total ? lastLabel : "Next question"}
            {index + 1 !== total && <span aria-hidden="true">→</span>}
          </button>
        )}
      </div>
    </div>
  );
}

function DoneStage({
  mission,
  grades,
  backHref,
  vocabCardUrls,
  badge,
  journalPrompt
}: {
  mission: AuthoredMission;
  grades: Record<string, GradeResult>;
  backHref: string;
  vocabCardUrls?: Record<string, string | null>;
  badge?: { id: string; name: string; emoji: string };
  journalPrompt?: string;
}) {
  const totalScore = Object.values(grades).reduce((sum, g) => sum + g.score, 0);
  // Grades include Arena items, so the denominator must too — otherwise a
  // kid who aces the bonus round sees a score over 100%.
  const arenaCount = mission.dailyHour?.challengeArena?.items?.length ?? 0;
  const max = mission.items.length + arenaCount;
  const pct = max === 0 ? 0 : Math.min(100, Math.round((totalScore / max) * 100));
  const terms = Array.isArray(mission.keyTerms) ? mission.keyTerms : [];
  const doneTitle =
    pct === 100
      ? "Perfect run — every single one!"
      : pct >= 80
        ? badge
          ? "Power-Up complete — strong work!"
          : "Quest complete — strong work!"
        : badge
          ? "Power-Up complete — you stuck with it!"
          : "Quest complete — you stuck with it!";
  return (
    <div className="qr-done">
      {badge && (
        <div className="qr-badge-award" aria-label={`Badge earned: ${badge.name}`}>
          <span className="qr-badge-emoji" aria-hidden="true">{badge.emoji}</span>
          <div>
            <span className="qr-badge-eyebrow">Badge earned!</span>
            <strong className="qr-badge-name">{badge.name}</strong>
          </div>
        </div>
      )}
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
      <h2 className="qr-done-title">{doneTitle}</h2>
      <p className="qr-done-score">Score: {pct}%</p>
      {badge && <p className="qr-done-powerup">🔥 You finished the whole hour — Warm-Up, Mission, Creative Lab, Arena, Move, and Reflect. That's a full Power-Up!</p>}
      <p className="qr-done-reflect">{mission.reflectionPrompt}</p>
      {journalPrompt && (
        <div className="qr-journal" aria-label="Journal">
          <span className="qr-eyebrow">Today's journal</span>
          <p>{journalPrompt}</p>
        </div>
      )}
      {terms.length > 0 && (
        <div className="qr-vocab" aria-label="Key terms to remember">
          <span className="qr-eyebrow">Key terms</span>
          <div className="qr-vocab-grid">
            {terms.map((t) => {
              const url = vocabCardUrls?.[t.term] ?? STATIC_IMAGE_FALLBACKS.vocab_card.url;
              return (
                <figure key={t.term} className="qr-vocab-card">
                  <img className="qr-vocab-image" src={url} alt={`${t.term} illustration`} />
                  <figcaption>
                    <strong>{t.term}</strong>
                    <span>{t.definition}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      )}
      <a className="qr-primary" href={backHref}>
        Back to the map
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

function WarmUpStage({
  warmUp,
  studentName,
  onStart
}: {
  warmUp: DailyHour["warmUp"];
  studentName: string;
  onStart: () => void;
}) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="qr-segment qr-warmup">
      <span className="qr-segment-tag">⚡ Warm-Up Spark · ~{warmUp.estimatedMinutes ?? 5} min</span>
      <h3 className="qr-segment-title">{warmUp.title}</h3>
      <p className="qr-segment-prompt">{warmUp.prompt}</p>
      {warmUp.answer && (
        <div className="qr-reveal">
          {revealed ? (
            <p className="qr-reveal-answer">{warmUp.answer}</p>
          ) : (
            <button type="button" className="qr-secondary" onClick={() => setRevealed(true)}>
              Reveal the answer
            </button>
          )}
        </div>
      )}
      <div className="qr-cta-row">
        <button type="button" className="qr-primary" onClick={onStart}>
          Let's go, {studentName} <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

function CreativeLabStage({
  lab,
  done,
  onToggleDone,
  onContinue
}: {
  lab: DailyHour["creativeLab"];
  done: boolean;
  onToggleDone: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="qr-segment qr-lab">
      <span className="qr-segment-tag">🎨 Creative Lab · ~{lab.estimatedMinutes ?? 15} min</span>
      <h3 className="qr-segment-title">{lab.title}</h3>
      <p className="qr-segment-prompt">{lab.challenge}</p>

      {lab.choiceBoard && lab.choiceBoard.length > 0 && (
        <div className="qr-choiceboard">
          <span className="qr-eyebrow">Pick your style</span>
          <ul>
            {lab.choiceBoard.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {lab.steps && lab.steps.length > 0 && (
        <div className="qr-lab-steps">
          <span className="qr-eyebrow">How to do it</span>
          <ol>
            {lab.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      )}

      {lab.materials && lab.materials.length > 0 && (
        <p className="qr-lab-materials"><strong>You'll need:</strong> {lab.materials.join(", ")}</p>
      )}

      <div className="qr-lab-deliverable">
        <span className="qr-eyebrow">Make this</span>
        <p>{lab.deliverable}</p>
      </div>

      <label className="qr-lab-check">
        <input type="checkbox" checked={done} onChange={onToggleDone} />
        I made it! (Show a grown-up when you can.)
      </label>

      <div className="qr-cta-row">
        <button type="button" className="qr-primary" onClick={onContinue}>
          On to the Arena <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

function ArenaStage(props: {
  arenaTitle: string;
  bonusXp: number;
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
  submitting: boolean;
  error: string | null;
}) {
  return (
    <div className="qr-segment qr-arena">
      <span className="qr-segment-tag">🏆 Challenge Arena · +{props.bonusXp} bonus XP</span>
      <h3 className="qr-segment-title">{props.arenaTitle}</h3>
      <ItemStage
        item={props.item}
        index={props.index}
        total={props.total}
        response={props.response}
        onChange={props.onChange}
        grade={props.grade}
        hintIndex={props.hintIndex}
        attemptCount={props.attemptCount}
        onSubmit={props.onSubmit}
        onNext={props.onNext}
        onPrev={() => {}}
        submitting={props.submitting}
        error={props.error}
        lastLabel="On to Move & Reset →"
      />
    </div>
  );
}

function MoveResetStage({
  moveAndReset,
  onContinue
}: {
  moveAndReset: DailyHour["moveAndReset"];
  onContinue: () => void;
}) {
  return (
    <div className="qr-segment qr-reset">
      <span className="qr-segment-tag">🤸 Move &amp; Reset · ~{moveAndReset.estimatedMinutes ?? 5} min</span>
      <h3 className="qr-segment-title">{moveAndReset.title}</h3>
      <p className="qr-segment-prompt">{moveAndReset.prompt}</p>
      {moveAndReset.scienceTieIn && (
        <div className="qr-sciencetiein">
          <span className="qr-eyebrow">Did you know?</span>
          <p>{moveAndReset.scienceTieIn}</p>
        </div>
      )}
      <div className="qr-cta-row">
        <button type="button" className="qr-primary" onClick={onContinue}>
          Done — I moved! <span aria-hidden="true">→</span>
        </button>
      </div>
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
