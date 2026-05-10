import { NextResponse } from "next/server";
import { loadProgressSnapshot, saveProgressSnapshot } from "../../../src/data/localDb.js";

export const runtime = "nodejs";

const emptyProgress = {
  completedMissionIds: [],
  xp: 0,
  masteryStars: 0,
  campCoins: 0,
  reflections: {}
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const studentId = url.searchParams.get("studentId") ?? "mvp-preview-student";
  const progress = (await loadProgressSnapshot(studentId)) ?? emptyProgress;

  return NextResponse.json({ progress });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const studentId = payload.studentId ?? "mvp-preview-student";
  const saved = await saveProgressSnapshot({
    studentId,
    progress: {
      ...emptyProgress,
      ...payload.progress
    }
  });

  return NextResponse.json(saved);
}

