import { NextResponse } from "next/server";
import { createImageAgent, INTENTS } from "../../../../src/agents/imageAgent.js";
import { requireApiUser } from "../../../lib/auth-server";

export const runtime = "nodejs";

let cachedAgent: ReturnType<typeof createImageAgent> | null = null;
function getAgent() {
  if (!cachedAgent) cachedAgent = createImageAgent();
  return cachedAgent;
}

const MAX_TEXT_FIELD = 500;
const MAX_DIMENSION_PX = 2048;

// Free-text fields flow into provider prompts: cap the length and strip
// control characters so a caller can't smuggle multi-line instruction
// blocks past the kid-safe guardrail preamble.
function cleanText(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const cleaned = value.replace(/[\r\n\x00-\x1f\x7f]+/g, " ").trim();
  if (!cleaned) return undefined;
  return cleaned.slice(0, MAX_TEXT_FIELD);
}

function boundedDimension(value: unknown): number | undefined {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return undefined;
  return Math.min(Math.floor(n), MAX_DIMENSION_PX);
}

export async function POST(request: Request) {
  // Image generation spends real budget — signed-in callers only.
  const auth = await requireApiUser();
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const prompt = cleanText(payload?.prompt);
  const scene = cleanText(payload?.scene);
  if (!prompt && !scene) {
    return NextResponse.json({ error: "prompt_or_scene_required" }, { status: 400 });
  }
  if (payload?.intent && !Object.values(INTENTS).includes(payload.intent)) {
    return NextResponse.json({ error: "invalid_intent", allowed: Object.values(INTENTS) }, { status: 400 });
  }

  try {
    const result = await getAgent().generate({
      intent: payload.intent,
      subject: cleanText(payload.subject),
      topic: cleanText(payload.topic),
      scene,
      prompt,
      aspectRatio: cleanText(payload.aspectRatio),
      widthPx: boundedDimension(payload.widthPx),
      heightPx: boundedDimension(payload.heightPx),
      quality: cleanText(payload.quality)
    });
    return NextResponse.json({ ok: true, image: result });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.code ?? "image_generation_failed", message: err?.message ?? String(err) },
      { status: 502 }
    );
  }
}
