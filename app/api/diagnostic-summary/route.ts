import { NextResponse } from "next/server";
import { createDiagnosticQuest, summarizeDiagnosticResults } from "../../../src/agents/diagnosticAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const quest = payload.quest ?? createDiagnosticQuest(payload.studentProfile);
  const summary = summarizeDiagnosticResults({
    quest,
    answers: payload.answers
  });

  return NextResponse.json(summary);
}
