import { NextResponse } from "next/server";
import { createImageAgent, INTENTS } from "../../../../src/agents/imageAgent.js";

export const runtime = "nodejs";

let cachedAgent: ReturnType<typeof createImageAgent> | null = null;
function getAgent() {
  if (!cachedAgent) cachedAgent = createImageAgent();
  return cachedAgent;
}

export async function POST(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!payload?.prompt && !payload?.scene) {
    return NextResponse.json({ error: "prompt_or_scene_required" }, { status: 400 });
  }
  if (payload?.intent && !Object.values(INTENTS).includes(payload.intent)) {
    return NextResponse.json({ error: "invalid_intent", allowed: Object.values(INTENTS) }, { status: 400 });
  }

  try {
    const result = await getAgent().generate({
      intent: payload.intent,
      subject: payload.subject,
      topic: payload.topic,
      scene: payload.scene,
      prompt: payload.prompt,
      aspectRatio: payload.aspectRatio,
      widthPx: payload.widthPx,
      heightPx: payload.heightPx,
      quality: payload.quality
    });
    return NextResponse.json({ ok: true, image: result });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.code ?? "image_generation_failed", message: err?.message ?? String(err) },
      { status: 502 }
    );
  }
}
