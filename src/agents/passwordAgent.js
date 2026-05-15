// Password hashing using Node's built-in scrypt (no external deps).
//
// scrypt is purpose-built for password hashing — memory-hard, slow on
// purpose, resistant to GPU brute-force. Format: scrypt$N$r$p$salt$hash
// where the cost params are stored alongside the hash so we can tune
// them later without breaking existing passwords.

import { scrypt, randomBytes, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);

// 2^15 work factor, 8x block size, 1x parallelism — OWASP recommended
// minimum for interactive logins. Adjust upward once we have telemetry
// on real signin latency.
const DEFAULT_N = 32768;
const DEFAULT_R = 8;
const DEFAULT_P = 1;
const KEYLEN = 64;

export async function hashPassword(password, params = {}) {
  if (typeof password !== "string" || password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  const N = params.N ?? DEFAULT_N;
  const r = params.r ?? DEFAULT_R;
  const p = params.p ?? DEFAULT_P;
  const salt = randomBytes(16);
  const key = /** @type {Buffer} */ (await scryptAsync(password, salt, KEYLEN, { N, r, p, maxmem: 64 * 1024 * 1024 }));
  return `scrypt$${N}$${r}$${p}$${salt.toString("hex")}$${key.toString("hex")}`;
}

export async function verifyPassword(password, stored) {
  if (typeof password !== "string" || typeof stored !== "string") return false;
  const parts = stored.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;
  const [, NStr, rStr, pStr, saltHex, keyHex] = parts;
  const N = Number(NStr);
  const r = Number(rStr);
  const p = Number(pStr);
  if (!Number.isFinite(N) || !Number.isFinite(r) || !Number.isFinite(p)) return false;
  const salt = Buffer.from(saltHex, "hex");
  const expected = Buffer.from(keyHex, "hex");
  let derived;
  try {
    derived = /** @type {Buffer} */ (await scryptAsync(password, salt, expected.length, { N, r, p, maxmem: 64 * 1024 * 1024 }));
  } catch {
    return false;
  }
  if (derived.length !== expected.length) return false;
  return timingSafeEqual(derived, expected);
}
