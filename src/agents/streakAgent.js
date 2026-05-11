// Daily streak tracking. Streaks are the single highest-leverage retention
// mechanic for kids — they show up in the hero, they earn parent-approved
// rewards, and they make missing a day feel like a real choice instead of
// a non-event.
//
// Implementation rules:
//   - "A day" is the date in the local user timezone. The agent works in
//     ISO date strings (`YYYY-MM-DD`) so storage stays portable.
//   - Streak increments only when the child completes at least one mission
//     on a calendar day that's exactly one day after the last activity.
//   - Streak resets to 1 if a day is missed (no completions yesterday).
//   - Streak freezes are parent-granted; consuming one is silent and only
//     happens when computing the streak — we never mutate "yesterday".
//   - Same-day completions don't grow the streak — they extend XP but not
//     consistency.
//
// completionLog shape: array of { missionId, completedAt: ISO string }
// (ordered oldest-first; tolerant of duplicates).

export const STREAK_MILESTONES = Object.freeze([3, 5, 7, 10, 14, 21, 30, 40]);

/**
 * @param {{ missionId: string, completedAt?: string }} entry
 * @param {{ now?: () => Date }} [opts]
 */
export function buildCompletionEntry(entry, opts) {
  const now = opts?.now ?? (() => new Date());
  return Object.freeze({
    missionId: String(entry.missionId),
    completedAt: entry.completedAt ?? now().toISOString()
  });
}

export function appendCompletion(progress, entry, opts) {
  if (!progress) return progress;
  const baseLog = Array.isArray(progress.completionLog) ? progress.completionLog : [];
  const built = buildCompletionEntry(entry, opts);
  if (baseLog.some((e) => e.missionId === built.missionId)) return progress;
  return {
    ...progress,
    completionLog: [...baseLog, built]
  };
}

/**
 * @param {{
 *   completionLog?: Array<{ missionId: string, completedAt: string }>,
 *   streakFreezesAvailable?: number,
 *   now?: () => Date
 * }} args
 */
export function computeStreak(args) {
  const { completionLog = [], streakFreezesAvailable = 0, now = () => new Date() } = args ?? {};
  if (!Array.isArray(completionLog) || completionLog.length === 0) {
    return defaultStreak();
  }

  const days = new Set();
  let latest = 0;
  for (const entry of completionLog) {
    const ts = Date.parse(entry?.completedAt ?? "");
    if (!Number.isFinite(ts)) continue;
    days.add(toLocalDateKey(new Date(ts)));
    if (ts > latest) latest = ts;
  }
  if (days.size === 0) return defaultStreak();

  const today = toLocalDateKey(now());
  const yesterday = toLocalDateKey(addDays(now(), -1));

  // If the most recent activity wasn't today or yesterday, the streak is broken.
  // Streak freezes can cover one missed day inside the run, but they can't
  // resurrect a streak whose tail is more than one day stale.
  let currentDays = 0;
  let cursor = today;
  let freezesLeft = Math.max(0, Math.floor(streakFreezesAvailable));
  let usedFreezes = 0;

  // Walk back day-by-day from today until we hit a missing day with no
  // freezes left. Today counts only if the child has actually completed
  // something today.
  if (!days.has(today)) {
    if (!days.has(yesterday)) {
      return {
        currentDays: 0,
        longestDays: longestRun(days),
        lastActivityIso: new Date(latest).toISOString(),
        lastActivityDateKey: toLocalDateKey(new Date(latest)),
        nextMilestone: STREAK_MILESTONES[0],
        atMilestone: false,
        freezesUsed: 0,
        freezesAvailable: freezesLeft
      };
    }
    cursor = yesterday;
  }

  while (true) {
    if (days.has(cursor)) {
      currentDays += 1;
      cursor = toLocalDateKey(addDays(parseDateKey(cursor), -1));
      continue;
    }
    if (freezesLeft > 0) {
      freezesLeft -= 1;
      usedFreezes += 1;
      currentDays += 1; // freeze keeps the streak going as a continuation day
      cursor = toLocalDateKey(addDays(parseDateKey(cursor), -1));
      continue;
    }
    break;
  }

  const longest = Math.max(longestRun(days), currentDays);
  const nextMilestone =
    STREAK_MILESTONES.find((m) => m > currentDays) ?? STREAK_MILESTONES[STREAK_MILESTONES.length - 1];
  const atMilestone = STREAK_MILESTONES.includes(currentDays);

  return {
    currentDays,
    longestDays: longest,
    lastActivityIso: new Date(latest).toISOString(),
    lastActivityDateKey: toLocalDateKey(new Date(latest)),
    nextMilestone,
    atMilestone,
    freezesUsed: usedFreezes,
    freezesAvailable: freezesLeft
  };
}

function defaultStreak() {
  return {
    currentDays: 0,
    longestDays: 0,
    lastActivityIso: null,
    lastActivityDateKey: null,
    nextMilestone: STREAK_MILESTONES[0],
    atMilestone: false,
    freezesUsed: 0,
    freezesAvailable: 0
  };
}

function longestRun(daySet) {
  if (daySet.size === 0) return 0;
  const sorted = [...daySet].map(parseDateKey).sort((a, b) => a - b);
  let best = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    const diff = (sorted[i] - sorted[i - 1]) / 86_400_000;
    if (diff === 1) {
      run += 1;
      best = Math.max(best, run);
    } else if (diff === 0) {
      // duplicate same-day entries — ignore
    } else {
      run = 1;
    }
  }
  return best;
}

function toLocalDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseDateKey(key) {
  const [y, m, d] = key.split("-").map((n) => Number(n));
  return new Date(y, m - 1, d).getTime();
}

function addDays(date, delta) {
  const next = new Date(date);
  next.setDate(next.getDate() + delta);
  return next;
}

export function streakMessage(streak) {
  if (!streak || streak.currentDays === 0) {
    return "Start your streak: complete one quest today.";
  }
  if (streak.atMilestone) {
    return `${streak.currentDays}-day streak! Big milestone — ask a parent to celebrate.`;
  }
  const togo = streak.nextMilestone - streak.currentDays;
  if (togo <= 1) return `${streak.currentDays} days strong — one more for ${streak.nextMilestone}!`;
  return `${streak.currentDays} days strong — ${togo} more to hit ${streak.nextMilestone}.`;
}
