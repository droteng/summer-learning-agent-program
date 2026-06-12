// The "Daily Hour" schema. An optional `dailyHour` block on a mission turns
// the ~18-minute academic core into a full ~60-minute experience by wrapping
// it in creative, game-like, and movement segments. Missions WITHOUT a
// dailyHour still work exactly as before — the field is purely additive.
//
// Segment order in the child experience:
//   1. Warm-Up Spark   (warmUp)        ~5 min  — playful entry
//   2. Core Mission    (existing)      ~18 min — hook/lesson/items (unchanged)
//   3. Creative Lab    (creativeLab)   ~15 min — hands-on make-it challenge
//   4. Challenge Arena (challengeArena)~10 min — gamified bonus stretch items
//   5. Move & Reset    (moveAndReset)  ~5 min  — movement / mindfulness break
//   6. Reflect & Reward(reflectAndReward)~7 min — journal + the day's badge
//
// Design tone: balanced — the academic core stays rigorous; the wrapper is
// genuinely playful, creative, and rewarding.

export const WARMUP_TYPES = Object.freeze(["riddle", "would_you_rather", "movement", "curiosity"]);
export const RESET_TYPES = Object.freeze(["movement", "mindfulness", "wellness"]);

// Validate a dailyHour block. Returns an array of problems (empty = valid).
// Kept dependency-free so tests and any tooling can call it.
export function validateDailyHour(dh, missionId = "?") {
  const problems = [];
  if (dh == null) return problems; // absent is valid (additive field)
  const need = (cond, msg) => {
    if (!cond) problems.push(`${missionId}: ${msg}`);
  };

  // 1. Warm-Up Spark
  const w = dh.warmUp;
  need(w && typeof w === "object", "warmUp missing");
  if (w) {
    need(WARMUP_TYPES.includes(w.type), `warmUp.type must be one of ${WARMUP_TYPES.join("|")}`);
    need(typeof w.title === "string" && w.title.length > 0, "warmUp.title missing");
    need(typeof w.prompt === "string" && w.prompt.length > 0, "warmUp.prompt missing");
  }

  // 2. Creative Lab
  const lab = dh.creativeLab;
  need(lab && typeof lab === "object", "creativeLab missing");
  if (lab) {
    need(typeof lab.title === "string" && lab.title.length > 0, "creativeLab.title missing");
    need(typeof lab.challenge === "string" && lab.challenge.length > 0, "creativeLab.challenge missing");
    need(typeof lab.deliverable === "string" && lab.deliverable.length > 0, "creativeLab.deliverable missing");
    if (lab.choiceBoard != null) {
      need(Array.isArray(lab.choiceBoard) && lab.choiceBoard.length >= 2, "creativeLab.choiceBoard needs 2+ options");
    }
  }

  // 3. Challenge Arena — reuses the core item shape so the grader works on it.
  const arena = dh.challengeArena;
  need(arena && typeof arena === "object", "challengeArena missing");
  if (arena) {
    need(typeof arena.title === "string" && arena.title.length > 0, "challengeArena.title missing");
    need(Array.isArray(arena.items) && arena.items.length >= 1, "challengeArena.items needs 1+ items");
    need(typeof arena.bonusXp === "number" && arena.bonusXp > 0, "challengeArena.bonusXp must be a positive number");
    for (const it of arena.items ?? []) {
      need(typeof it.id === "string" && it.id.length > 0, "arena item missing id");
      need(["multiple_choice", "numeric", "short_answer"].includes(it.type), `arena item ${it.id} bad type`);
      need(Array.isArray(it.hintLadder) && it.hintLadder.length >= 2, `arena item ${it.id} needs hintLadder 2+`);
    }
  }

  // 4. Move & Reset
  const r = dh.moveAndReset;
  need(r && typeof r === "object", "moveAndReset missing");
  if (r) {
    need(RESET_TYPES.includes(r.type), `moveAndReset.type must be one of ${RESET_TYPES.join("|")}`);
    need(typeof r.title === "string" && r.title.length > 0, "moveAndReset.title missing");
    need(typeof r.prompt === "string" && r.prompt.length > 0, "moveAndReset.prompt missing");
  }

  // 5. Reflect & Reward
  const rr = dh.reflectAndReward;
  need(rr && typeof rr === "object", "reflectAndReward missing");
  if (rr) {
    need(typeof rr.journalPrompt === "string" && rr.journalPrompt.length > 0, "reflectAndReward.journalPrompt missing");
    need(rr.badge && typeof rr.badge === "object", "reflectAndReward.badge missing");
    if (rr.badge) {
      need(typeof rr.badge.id === "string" && rr.badge.id.length > 0, "badge.id missing");
      need(typeof rr.badge.name === "string" && rr.badge.name.length > 0, "badge.name missing");
      need(typeof rr.badge.emoji === "string" && rr.badge.emoji.length > 0, "badge.emoji missing");
    }
  }

  return problems;
}

// Sum the timeboxed minutes a dailyHour represents, including the core
// mission minutes passed in. Used to report the real daily total.
export function dailyHourMinutes(dh, coreMinutes = 18) {
  if (!dh) return coreMinutes;
  return (
    (dh.warmUp?.estimatedMinutes ?? 5) +
    coreMinutes +
    (dh.creativeLab?.estimatedMinutes ?? 15) +
    (dh.challengeArena?.estimatedMinutes ?? 10) +
    (dh.moveAndReset?.estimatedMinutes ?? 5) +
    (dh.reflectAndReward?.estimatedMinutes ?? 7)
  );
}
