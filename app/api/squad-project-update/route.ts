import { NextResponse } from "next/server";
import {
  createSquadProjectUpdate,
  createSquadProjectUpdateWithLlm
} from "../../../src/agents/socialCoordinatorAgent.js";
import { createLlm } from "../../../src/agents/llm/index.js";

export const runtime = "nodejs";

let cachedLlm: ReturnType<typeof createLlm> | null = null;
function getLlm() {
  if (!cachedLlm) cachedLlm = createLlm();
  return cachedLlm;
}

export async function POST(request: Request) {
  const payload = await request.json();

  if (payload?.useLlm === false) {
    return NextResponse.json(
      createSquadProjectUpdate({
        student: payload.studentProfile,
        message: payload.message
      })
    );
  }

  const result = await createSquadProjectUpdateWithLlm({
    student: payload.studentProfile,
    message: payload.message,
    llm: getLlm()
  });
  const status = result.severity === "crisis" ? 200 : result.status === "blocked" ? 200 : 200;
  return NextResponse.json(result, { status });
}
