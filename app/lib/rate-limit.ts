// Fixed-window, in-memory rate limiter for auth endpoints.
//
// State lives per serverless instance, so this is not a global guarantee —
// a distributed attacker across many instances can exceed the nominal limit.
// It still blunts the common case (single-IP credential stuffing / PIN
// brute force), which matters here because child PINs are 4–8 digits.
// Swap the Map for Upstash/Vercel KV if a shared store becomes available.

const buckets = new Map<string, { count: number; resetAt: number }>();

// Keep the map from growing unbounded on long-lived instances.
const SWEEP_THRESHOLD = 10_000;

function sweep(now: number) {
  if (buckets.size < SWEEP_THRESHOLD) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

// Single shape (not a discriminated union): this project compiles with
// strict:false, where TS does not narrow `!result.ok`.
export type RateLimitResult = { ok: boolean; retryAfterSeconds?: number };

export function rateLimit({
  key,
  limit,
  windowMs
}: {
  key: string;
  limit: number;
  windowMs: number;
}): RateLimitResult {
  const now = Date.now();
  sweep(now);
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }
  bucket.count += 1;
  if (bucket.count > limit) {
    return { ok: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  return { ok: true };
}

// First hop of x-forwarded-for is the client on Vercel; x-real-ip is the
// fallback for other proxies. "unknown" still rate-limits (one shared
// bucket) rather than failing open per-request.
export function clientIpFrom(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function tooManyRequests(retryAfterSeconds: number = 60) {
  return {
    body: {
      error: "too_many_requests",
      message: "Too many attempts. Please wait and try again.",
      retryAfterSeconds
    },
    init: {
      status: 429,
      headers: { "Retry-After": String(retryAfterSeconds) }
    }
  };
}

// Test seam.
export function resetRateLimiter() {
  buckets.clear();
}
