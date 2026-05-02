import { createProgramPlan } from "./agents/principalAgent.js";

const studentProfile = {
  id: "student-demo-001",
  firstName: "Demo Student",
  gradeLevel: 6,
  interests: ["games", "basketball", "building projects"],
  selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
  faithSetting: "parent-controlled",
  activityPreferences: {
    outdoorAllowed: true
  }
};

const parentPolicy = {
  allowedRewards: ["device", "park", "movie", "friend"],
  friendInvitesEnabled: true,
  progressSharingEnabled: true,
  externalMessagingEnabled: false,
  liveSessionsEnabled: false,
  teacherSharingEnabled: true,
  faithContentLevel: "none",
  physicalActivityRestrictions: []
};

const programPlan = createProgramPlan(studentProfile, parentPolicy);

console.log(JSON.stringify(programPlan, null, 2));

