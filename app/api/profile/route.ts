import { NextResponse } from "next/server";
import { loadProfileSnapshot, saveProfileSnapshot } from "../../../src/data/localDb.js";
import { authorizeStudentAccess } from "../../lib/auth-server";

export const runtime = "nodejs";

const defaultProfile = {
  id: "mvp-preview-student",
  firstName: "Avery",
  gradeLevel: 6,
  interests: ["games", "sports", "projects"],
  selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
  faithSetting: "parent-controlled",
  activityPreferences: {
    outdoorAllowed: true
  }
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const profileId = url.searchParams.get("profileId") ?? "mvp-preview-profile";
  // Real profiles are keyed by the child id, so student authorization applies.
  const access = await authorizeStudentAccess(profileId);
  if (!access.ok) {
    return NextResponse.json({ error: access.error }, { status: access.status });
  }
  const profile = (await loadProfileSnapshot(profileId)) ?? defaultProfile;

  return NextResponse.json({ profile });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const profileId = payload.profileId ?? "mvp-preview-profile";
  const access = await authorizeStudentAccess(profileId);
  if (!access.ok) {
    return NextResponse.json({ error: access.error }, { status: access.status });
  }
  const saved = await saveProfileSnapshot({
    profileId,
    profile: {
      ...defaultProfile,
      ...payload.profile,
      activityPreferences: {
        ...defaultProfile.activityPreferences,
        ...payload.profile?.activityPreferences
      }
    }
  });

  return NextResponse.json(saved);
}
