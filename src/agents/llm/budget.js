const DEFAULT_MONTHLY_TOKEN_CAP = 250_000;

function monthKey(date = new Date()) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

export function createBudget({ monthlyTokenCap = DEFAULT_MONTHLY_TOKEN_CAP, now = () => new Date() } = {}) {
  const usage = new Map();

  function entryFor(studentId) {
    const key = `${studentId}|${monthKey(now())}`;
    let entry = usage.get(key);
    if (!entry) {
      entry = { tokens: 0, calls: 0 };
      usage.set(key, entry);
    }
    return entry;
  }

  return {
    monthlyTokenCap,
    canSpend(studentId, estimatedTokens = 0) {
      if (!studentId) return true;
      const entry = entryFor(studentId);
      return entry.tokens + estimatedTokens <= monthlyTokenCap;
    },
    record(studentId, tokens = 0) {
      if (!studentId) return;
      const entry = entryFor(studentId);
      entry.tokens += Math.max(0, tokens);
      entry.calls += 1;
    },
    snapshot(studentId) {
      if (!studentId) {
        return { used: 0, remaining: monthlyTokenCap, calls: 0, cap: monthlyTokenCap };
      }
      const entry = entryFor(studentId);
      return {
        used: entry.tokens,
        remaining: Math.max(0, monthlyTokenCap - entry.tokens),
        calls: entry.calls,
        cap: monthlyTokenCap
      };
    },
    reset() {
      usage.clear();
    }
  };
}
