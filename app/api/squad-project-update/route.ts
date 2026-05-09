import { NextResponse } from "next/server";
import { createSquadProjectUpdate } from "../../../src/agents/socialCoordinatorAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json(
    createSquadProjectUpdate({
      student: payload.studentProfile,
      message: payload.message
    })
  );
}
