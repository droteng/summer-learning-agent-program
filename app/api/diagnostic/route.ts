import { NextResponse } from "next/server";
import { createDiagnosticQuest } from "../../../src/agents/diagnosticAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const quest = createDiagnosticQuest(payload.studentProfile);

  return NextResponse.json(quest);
}
