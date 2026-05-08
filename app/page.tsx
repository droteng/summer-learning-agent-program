"use client";

import { useEffect, useMemo, useState } from "react";

type Mission = {
  dayLabel: string;
  dayNumber: number;
  theme: string;
  warmup: string;
  lessons: Array<{
    subject: string;
    task: string;
    masteryCheck: {
      prompt: string;
    };
    adaptive?: {
      mode: "support" | "standard" | "stretch";
      adjustedTask: string;
      coachCue: string;
    };
  }>;
  enrichmentConnections: Array<{
    track: string;
    task: string;
  }>;
  creativeChallenge: string;
  reflectionPrompt: string;
  bodyCheck: string[];
  launchBrief?: string;
  parentReview?: string;
  projectMilestone?: string;
  celebrationPrompt?: string;
  rewardOpportunity: {
    xp: number;
    masteryStars: number;
    campCoins: number;
  };
};

type WeeklyPlan = {
  weekNumber: number;
  theme: string;
  project: string;
  missions: Mission[];
};

type ProgramPlan = {
  parentSummary: {
    headline: string;
    totalPlannedMissions: number;
  };
  gradeTuning?: {
    label: string;
    status: string;
  };
  tunedCoreSubjects?: Array<{
    name: string;
    guidance: string;
  }>;
  rewardPlan: {
    weeklyRewardMenu: string[];
  };
  adaptiveTuning?: {
    difficultyOverride: string;
    summary: string;
  };
  weeklyMissionPlans: WeeklyPlan[];
};

type DiagnosticQuest = {
  title: string;
  purpose: string;
  parentNote: string;
  questions: Array<{
    id: string;
    subject: string;
    prompt: string;
    lookFor: string;
  }>;
  completionRule: string;
};

type DiagnosticSummary = {
  status: string;
  answeredCount: number;
  totalQuestions: number;
  headline: string;
  subjectSummaries: Array<{
    id: string;
    subject: string;
    readiness: "support" | "standard" | "stretch";
    strength: string;
    supportNeed: string;
  }>;
  strengths: string[];
  supportPriorities: string[];
  parentNextSteps: string[];
};

type LessonGuide = {
  title: string;
  openingMove: string;
  miniLessons: Array<{
    subject: string;
    teach: string;
    coachQuestion: string;
    support: string;
    stretch: string;
  }>;
  activityBridge: string;
  closingReflection: string;
  parentTip: string;
};

type Progress = {
  completedMissionIds: string[];
  xp: number;
  masteryStars: number;
  campCoins: number;
  reflections: Record<string, string>;
  diagnosticAnswers: Record<string, string>;
  diagnosticCompleted: boolean;
  rewardRequests: RewardRequest[];
  friendInvites: FriendInvite[];
};

type RewardRequest = {
  id: string;
  status: "pending_parent" | "approved";
  requestedBy: string;
  requestedReward: string;
  parentPrompt: string;
  createdAt: string;
  approvedAt?: string;
  earnedBy: {
    theme: string;
    dayLabel: string;
    xp: number;
    masteryStars: number;
    campCoins: number;
  };
};

type FriendInvite = {
  id: string;
  status: "needs_parent_approval" | "approved" | "blocked";
  requestedBy?: string;
  friendName: string;
  nextStep?: string;
  reason?: string;
  inviteLink?: string;
  parentMessage?: string;
  safetyRules?: string[];
  sharingDefaults?: Record<string, boolean>;
};

type WeeklyParentReport = {
  status: "ready" | "not_found";
  reason?: string;
  headline: string;
  student: {
    firstName: string;
    gradeLevel: number;
  };
  week: {
    weekNumber: number;
    theme: string;
    project: string;
  };
  completion: {
    completedCount: number;
    totalMissions: number;
    completionPercent: number;
  };
  weeklyEarnings: {
    xp: number;
    masteryStars: number;
    campCoins: number;
  };
  subjectCoverage: Array<{
    subject: string;
    completedLessons: number;
  }>;
  completedMissions: Array<{
    missionId: string;
    dayLabel: string;
    theme: string;
    subjects: string[];
    projectMilestone: string;
    reflection: string;
  }>;
  rewards: {
    pendingCount: number;
    approvedCount: number;
    requests: Array<{
      requestedReward: string;
      status: string;
      dayLabel: string;
    }>;
  };
  invitations: {
    pendingCount: number;
    approvedCount: number;
  };
  parentNextSteps: string[];
  teacherSummary: string;
  excludedPrivateData: string[];
};

type UserRole = "parent" | "child";

type StudentProfile = {
  id: string;
  firstName: string;
  gradeLevel: number;
  interests: string[];
  selectedEnrichmentTracks: string[];
  faithSetting: string;
  activityPreferences: {
    outdoorAllowed: boolean;
  };
};

type FamilyAccount = {
  id: string;
  parent: {
    name: string;
    email: string;
  };
  children: Array<{
    id: string;
    firstName: string;
    role: string;
  }>;
  credentialVersion: string;
};

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const profileId = "mvp-preview-profile";
const studentId = "mvp-preview-student";

const trackOptions = [
  ["healthWellness", "Health & Wellness"],
  ["christianLeadership", "Christian Leadership"],
  ["financialLiteracy", "Financial Literacy"],
  ["mediaLiteracy", "Media Literacy"]
];

const interestOptions = ["games", "sports", "projects", "music", "art", "science", "coding", "reading", "entrepreneurship"];

const gradeOptions = [
  { value: 6, label: "Grade 6", enabled: true },
  { value: 5, label: "Grade 5 preview", enabled: true },
  { value: 7, label: "Grade 7 preview", enabled: true },
  { value: 8, label: "Grade 8 preview", enabled: true }
];

const emptyProgress: Progress = {
  completedMissionIds: [],
  xp: 0,
  masteryStars: 0,
  campCoins: 0,
  reflections: {},
  diagnosticAnswers: {},
  diagnosticCompleted: false,
  rewardRequests: [],
  friendInvites: []
};

export default function Home() {
  const [childName, setChildName] = useState("Avery");
  const [gradeLevel, setGradeLevel] = useState(6);
  const [selectedInterests, setSelectedInterests] = useState(["games", "sports", "projects"]);
  const [selectedTracks, setSelectedTracks] = useState(["healthWellness", "financialLiteracy"]);
  const [outdoorAllowed, setOutdoorAllowed] = useState(true);
  const [teacherSharing, setTeacherSharing] = useState(true);
  const [friendInvites, setFriendInvites] = useState(true);
  const [plan, setPlan] = useState<ProgramPlan | null>(null);
  const [diagnosticQuest, setDiagnosticQuest] = useState<DiagnosticQuest | null>(null);
  const [diagnosticDrafts, setDiagnosticDrafts] = useState<Record<string, string>>({});
  const [diagnosticSummary, setDiagnosticSummary] = useState<DiagnosticSummary | null>(null);
  const [difficultyOverride, setDifficultyOverride] = useState("auto");
  const [lessonGuide, setLessonGuide] = useState<LessonGuide | null>(null);
  const [lessonStatus, setLessonStatus] = useState("Loading teacher guide...");
  const [weekNumber, setWeekNumber] = useState(1);
  const [dayNumber, setDayNumber] = useState(1);
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [reflectionDraft, setReflectionDraft] = useState("");
  const [selectedReward, setSelectedReward] = useState("");
  const [rewardStatus, setRewardStatus] = useState("Complete a mission to request a parent-approved reward.");
  const [friendName, setFriendName] = useState("");
  const [inviteStatus, setInviteStatus] = useState("Suggest a friend to start a parent-approved learning squad.");
  const [shareExport, setShareExport] = useState("");
  const [weeklyReport, setWeeklyReport] = useState<WeeklyParentReport | null>(null);
  const [reportStatus, setReportStatus] = useState("Prepare a weekly parent report after missions are completed.");
  const [profileStatus, setProfileStatus] = useState("Loading saved profile...");
  const [profileReady, setProfileReady] = useState(false);
  const [familyAccount, setFamilyAccount] = useState<FamilyAccount | null>(null);
  const [parentName, setParentName] = useState("Parent");
  const [parentEmail, setParentEmail] = useState("");
  const [setupParentPasscode, setSetupParentPasscode] = useState("");
  const [setupChildPasscode, setSetupChildPasscode] = useState("");
  const [accountStatus, setAccountStatus] = useState("Loading family account...");
  const [persistenceStatus, setPersistenceStatus] = useState("Loading saved progress...");
  const [role, setRole] = useState<UserRole>("child");
  const [authRole, setAuthRole] = useState<UserRole>("child");
  const [passcode, setPasscode] = useState("");
  const [authStatus, setAuthStatus] = useState("Signed out.");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [deviceStatus, setDeviceStatus] = useState("Desktop and tablet web app ready.");
  const [isStandalone, setIsStandalone] = useState(false);
  const isParent = isSignedIn && role === "parent";
  const canUseLearning = isSignedIn;

  const payload = useMemo(
    () => ({
      studentProfile: {
        id: studentId,
        firstName: childName || "Student",
        gradeLevel,
        interests: selectedInterests,
        selectedEnrichmentTracks: selectedTracks.slice(0, 2),
        faithSetting: "parent-controlled",
        activityPreferences: {
          outdoorAllowed
        }
      },
      parentPolicy: {
        allowedRewards: ["device", "park", "movie", "friend"],
        friendInvitesEnabled: friendInvites,
        progressSharingEnabled: true,
        externalMessagingEnabled: false,
        liveSessionsEnabled: false,
        teacherSharingEnabled: teacherSharing,
        faithContentLevel: selectedTracks.includes("christianLeadership") ? "christian-character" : "none",
        physicalActivityRestrictions: []
      }
    }),
    [childName, friendInvites, gradeLevel, outdoorAllowed, selectedInterests, selectedTracks, teacherSharing]
  );

  useEffect(() => {
    loadSession();
    loadAccount();
    loadProfile();
    loadProgress();
    setIsStandalone(
      window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    );

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
      setDeviceStatus("Install is available on this device.");
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);

    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (profileReady) {
      generatePlan();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileReady]);

  const selectedWeek = plan?.weeklyMissionPlans.find((week) => week.weekNumber === weekNumber);
  const selectedMission = selectedWeek?.missions.find((mission) => mission.dayNumber === dayNumber);
  const missionId = `week-${weekNumber}-day-${dayNumber}`;
  const isComplete = progress.completedMissionIds.includes(missionId);
  const diagnosticAnsweredCount = diagnosticQuest
    ? diagnosticQuest.questions.filter((question) => (diagnosticDrafts[question.id] ?? "").trim()).length
    : 0;
  const completionPercent = plan
    ? Math.round((progress.completedMissionIds.length / plan.parentSummary.totalPlannedMissions) * 100)
    : 0;
  const pendingRewards = progress.rewardRequests.filter((request) => request.status === "pending_parent");
  const approvedRewards = progress.rewardRequests.filter((request) => request.status === "approved");
  const pendingInvites = progress.friendInvites.filter((invite) => invite.status === "needs_parent_approval");
  const approvedInvites = progress.friendInvites.filter((invite) => invite.status === "approved");

  useEffect(() => {
    setReflectionDraft(progress.reflections[missionId] ?? "");
  }, [missionId, progress.reflections]);

  useEffect(() => {
    setDiagnosticDrafts(progress.diagnosticAnswers ?? {});
  }, [progress.diagnosticAnswers]);

  useEffect(() => {
    if (diagnosticQuest && Object.values(progress.diagnosticAnswers ?? {}).some(Boolean)) {
      generateDiagnosticSummary(progress.diagnosticAnswers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diagnosticQuest?.title, progress.diagnosticAnswers]);

  useEffect(() => {
    if (selectedMission) {
      generateLessonGuide(selectedMission);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMission?.dayNumber, selectedMission?.theme]);

  useEffect(() => {
    if (plan?.rewardPlan.weeklyRewardMenu.length && !selectedReward) {
      setSelectedReward(plan.rewardPlan.weeklyRewardMenu[0]);
    }
  }, [plan, selectedReward]);

  useEffect(() => {
    if (diagnosticSummary) {
      generatePlan(diagnosticSummary);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficultyOverride]);

  async function generatePlan(summaryOverride = diagnosticSummary) {
    if (isParent) {
      await saveProfile(payload.studentProfile);
    }

    const response = await fetch("/api/program-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        diagnosticSummary: summaryOverride,
        difficultyOverride
      })
    });
    const nextPlan = await response.json();
    setPlan(nextPlan);
    setWeekNumber(1);
    setDayNumber(1);
    await generateDiagnostic();
  }

  async function generateDiagnostic() {
    const response = await fetch("/api/diagnostic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const quest = await response.json();
    setDiagnosticQuest(quest);
    setDiagnosticDrafts(progress.diagnosticAnswers);
  }

  async function generateDiagnosticSummary(answers: Record<string, string>) {
    if (!diagnosticQuest) {
      return;
    }

    const response = await fetch("/api/diagnostic-summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentProfile: payload.studentProfile,
        quest: diagnosticQuest,
        answers
      })
    });
    const summary = await response.json();
    setDiagnosticSummary(summary);
    await generatePlan(summary);
  }

  async function generateLessonGuide(mission: Mission) {
    setLessonStatus("Loading teacher guide...");

    try {
      const response = await fetch("/api/lesson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mission,
          studentProfile: payload.studentProfile
        })
      });
      const guide = await response.json();
      setLessonGuide(guide);
      setLessonStatus("Teacher guide ready.");
    } catch {
      setLessonGuide(null);
      setLessonStatus("Teacher guide could not be loaded.");
    }
  }

  async function loadSession() {
    try {
      const response = await fetch("/api/session");
      const result = await response.json();

      if (result.status === "signed_in" && result.session?.role) {
        setRole(result.session.role);
        setAuthRole(result.session.role);
        setIsSignedIn(true);
        setAuthStatus(result.session.role === "parent" ? "Session restored as parent." : "Session restored as child.");
      }
    } catch {
      setAuthStatus("Signed out.");
    }
  }

  async function loadAccount() {
    try {
      const response = await fetch("/api/account");
      const result = await response.json();

      if (result.account) {
        setFamilyAccount(result.account);
        setParentName(result.account.parent?.name ?? "Parent");
        setParentEmail(result.account.parent?.email ?? "");
        setAccountStatus("Family account loaded.");
      } else {
        setAccountStatus("Create a local family account to replace default MVP passcodes.");
      }
    } catch {
      setAccountStatus("Family account service is unavailable.");
    }
  }

  async function saveFamilyAccount() {
    if (!isParent && familyAccount) {
      setAccountStatus("Parent sign-in is required to update the family account.");
      return;
    }

    if (!setupParentPasscode || !setupChildPasscode) {
      setAccountStatus("Set both parent and child passcodes.");
      return;
    }

    const response = await fetch("/api/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        parentName,
        parentEmail,
        childName,
        childId: studentId,
        parentPasscode: setupParentPasscode,
        childPasscode: setupChildPasscode
      })
    });
    const result = await response.json();
    setFamilyAccount(result.account);
    setSetupParentPasscode("");
    setSetupChildPasscode("");
    setRole("child");
    setAuthRole("child");
    setIsSignedIn(false);
    setAccountStatus("Family account saved. Sign in again with the new passcode.");
  }

  async function loadProfile() {
    try {
      const response = await fetch(`/api/profile?profileId=${profileId}`);
      const result = await response.json();
      applyProfile(result.profile);
      setProfileStatus("Profile is saved in local SQLite.");
    } catch {
      const saved = localStorage.getItem("learning-squad-profile-v1");
      if (saved) {
        applyProfile(JSON.parse(saved));
      }
      setProfileStatus("Using browser fallback profile.");
    } finally {
      setProfileReady(true);
    }
  }

  function applyProfile(profile: StudentProfile) {
    setChildName(profile.firstName ?? "Student");
    setGradeLevel(profile.gradeLevel ?? 6);
    setSelectedInterests((profile.interests?.length ? profile.interests : ["games", "sports", "projects"]).slice(0, 4));
    setSelectedTracks((profile.selectedEnrichmentTracks?.length ? profile.selectedEnrichmentTracks : selectedTracks).slice(0, 2));
    setOutdoorAllowed(profile.activityPreferences?.outdoorAllowed ?? true);
  }

  async function saveProfile(profile: StudentProfile) {
    localStorage.setItem("learning-squad-profile-v1", JSON.stringify(profile));

    try {
      await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          profileId,
          profile
        })
      });
      setProfileStatus("Profile saved.");
    } catch {
      setProfileStatus("Profile saved in browser fallback only.");
    }
  }

  function toggleTrack(trackKey: string) {
    setSelectedTracks((tracks) => {
      if (tracks.includes(trackKey)) {
        return tracks.filter((track) => track !== trackKey);
      }

      return [...tracks, trackKey].slice(0, 2);
    });
  }

  function toggleInterest(interest: string) {
    setSelectedInterests((interests) => {
      if (interests.includes(interest)) {
        return interests.filter((item) => item !== interest);
      }

      return [...interests, interest].slice(0, 4);
    });
  }

  async function loadProgress() {
    try {
      const response = await fetch(`/api/progress?studentId=${payload.studentProfile.id}`);
      const result = await response.json();
      setProgress({ ...emptyProgress, ...result.progress });
      setPersistenceStatus("Progress is saved in local SQLite.");
    } catch {
      const saved = localStorage.getItem("learning-squad-progress-v1");
      if (saved) {
        setProgress({ ...emptyProgress, ...JSON.parse(saved) });
      }
      setPersistenceStatus("Using browser fallback progress.");
    }
  }

  async function saveProgress(nextProgress: Progress) {
    setProgress(nextProgress);
    localStorage.setItem("learning-squad-progress-v1", JSON.stringify(nextProgress));

    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          studentId: payload.studentProfile.id,
          progress: nextProgress
        })
      });
      setPersistenceStatus("Progress saved.");
    } catch {
      setPersistenceStatus("Progress saved in browser fallback only.");
    }
  }

  async function saveDiagnostic() {
    if (!canUseLearning) {
      setPersistenceStatus("Sign in to save progress.");
      return;
    }

    if (!diagnosticQuest) {
      return;
    }

    const cleanedAnswers = Object.fromEntries(
      diagnosticQuest.questions.map((question) => [question.id, (diagnosticDrafts[question.id] ?? "").trim()])
    );
    const answeredCount = Object.values(cleanedAnswers).filter(Boolean).length;

    await saveProgress({
      ...progress,
      diagnosticAnswers: cleanedAnswers,
      diagnosticCompleted: answeredCount >= 5
    });
    await generateDiagnosticSummary(cleanedAnswers);
  }

  async function completeMission() {
    if (!canUseLearning) {
      setPersistenceStatus("Sign in to save progress.");
      return;
    }

    if (!selectedMission) {
      return;
    }

    const nextProgress = isComplete
      ? {
          ...progress,
          reflections: {
            ...progress.reflections,
            [missionId]: reflectionDraft.trim()
          }
        }
      : {
          ...progress,
          completedMissionIds: [...progress.completedMissionIds, missionId],
          xp: progress.xp + selectedMission.rewardOpportunity.xp,
          masteryStars: progress.masteryStars + selectedMission.rewardOpportunity.masteryStars,
          campCoins: progress.campCoins + selectedMission.rewardOpportunity.campCoins,
          reflections: {
            ...progress.reflections,
            [missionId]: reflectionDraft.trim()
          }
        };

    await saveProgress(nextProgress);
  }

  async function requestReward() {
    if (!canUseLearning) {
      setRewardStatus("Sign in to request a parent-approved reward.");
      return;
    }

    const response = await fetch("/api/reward-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        weekNumber,
        dayNumber,
        requestedReward: selectedReward
      })
    });
    const result = await response.json();
    const pendingRequest: RewardRequest = {
      id: `reward-${Date.now()}`,
      status: "pending_parent",
      requestedBy: role,
      requestedReward: result.requestedReward,
      parentPrompt: result.parentPrompt,
      earnedBy: result.earnedBy,
      createdAt: new Date().toISOString()
    };

    await saveProgress({
      ...progress,
      rewardRequests: [pendingRequest, ...progress.rewardRequests]
    });
    setRewardStatus("Reward request sent to the parent center.");
  }

  async function approveReward(rewardId: string) {
    if (!isParent) {
      setRewardStatus("Parent sign-in is required to approve rewards.");
      return;
    }

    await saveProgress({
      ...progress,
      rewardRequests: progress.rewardRequests.map((request) =>
        request.id === rewardId
          ? {
              ...request,
              status: "approved",
              approvedAt: new Date().toISOString()
            }
          : request
      )
    });
    setRewardStatus("Reward approved.");
  }

  async function requestFriendInvite() {
    if (!canUseLearning) {
      setInviteStatus("Sign in to suggest a friend.");
      return;
    }

    if (!friendName.trim()) {
      setInviteStatus("Enter a friend's first name.");
      return;
    }

    const response = await fetch("/api/friend-invite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        friendName: friendName.trim()
      })
    });
    const result = await response.json();
    const invite: FriendInvite = {
      id: `invite-${Date.now()}`,
      ...result,
      friendName: friendName.trim()
    };

    await saveProgress({
      ...progress,
      friendInvites: [invite, ...progress.friendInvites]
    });
    setFriendName("");
    setInviteStatus(result.status === "blocked" ? result.reason : "Friend invite sent to parent review.");
  }

  async function approveFriendInvite(inviteId: string) {
    if (!isParent) {
      setInviteStatus("Parent sign-in is required to approve friend invites.");
      return;
    }

    const invite = progress.friendInvites.find((item) => item.id === inviteId);

    if (!invite) {
      return;
    }

    const response = await fetch("/api/friend-invite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        friendName: invite.friendName,
        approve: true,
        baseUrl: "https://learning-squad.ai"
      })
    });
    const result = await response.json();

    await saveProgress({
      ...progress,
      friendInvites: progress.friendInvites.map((item) =>
        item.id === inviteId
          ? {
              ...item,
              ...result,
              id: item.id,
              friendName: item.friendName
            }
          : item
      )
    });
    setInviteStatus("Parent-approved invite link created.");
  }

  async function prepareWeeklyReport() {
    if (!isParent) {
      setReportStatus("Weekly parent reports are parent-controlled. Switch to parent view to prepare one.");
      return;
    }

    const response = await fetch("/api/weekly-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        weekNumber,
        progress
      })
    });
    const result = await response.json();

    if (!response.ok || result.status !== "ready") {
      setWeeklyReport(null);
      setReportStatus(result.reason ?? "Weekly report could not be prepared.");
      return;
    }

    setWeeklyReport(result);
    setReportStatus(`Week ${result.week.weekNumber} report ready for parent review.`);
  }

  async function prepareTeacherShare() {
    if (!isParent) {
      setShareExport("Teacher sharing is parent-controlled. Switch to parent view to prepare a report.");
      return;
    }

    const response = await fetch("/api/teacher-share", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        parentApproved: teacherSharing,
        progress
      })
    });
    const result = await response.json();
    setShareExport(formatTeacherShare(result));
  }

  async function signIn() {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          role: authRole,
          passcode
        })
      });
      const result = await response.json();

      if (!response.ok || result.status !== "signed_in") {
        setIsSignedIn(false);
        setRole("child");
        setAuthStatus(result.reason ?? "Sign-in failed.");
        return;
      }

      setRole(result.role);
      setIsSignedIn(true);
      setPasscode("");
      setAuthStatus(result.role === "parent" ? "Signed in as parent." : "Signed in as child.");
    } catch {
      setIsSignedIn(false);
      setAuthStatus("Sign-in service is unavailable.");
    }
  }

  async function signOut() {
    try {
      await fetch("/api/session", {
        method: "DELETE"
      });
    } catch {
      // Local UI still signs out even if the server cleanup fails.
    }

    setRole("child");
    setAuthRole("child");
    setIsSignedIn(false);
    setPasscode("");
    setAuthStatus("Signed out.");
  }

  async function installApp() {
    if (!installPrompt) {
      setDeviceStatus("Use your browser menu to add this app to the home screen or dock.");
      return;
    }

    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    setInstallPrompt(null);
    setDeviceStatus(choice.outcome === "accepted" ? "Install accepted." : "Install dismissed.");
  }

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span>LS</span>
          <div>
            <strong>learning-squad.ai</strong>
            <small>Grade 6 MVP shell</small>
          </div>
        </div>
        <nav>
          <a href="#device">Device</a>
          <a href="#account">Account</a>
          <a href="#setup">Setup</a>
          <a href="#diagnostic">Diagnostic</a>
          <a href="#mission-mode">Mission</a>
          <a href="#progress">Progress</a>
          <a href="#weekly-report">Report</a>
          <a href="#squad">Squad</a>
          <a href="#share">Share</a>
        </nav>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Principal Agent</p>
            <h1>Summer learning plan</h1>
          </div>
          <div className="metrics">
            <AuthPanel
              authRole={authRole}
              authStatus={authStatus}
              isSignedIn={isSignedIn}
              passcode={passcode}
              role={role}
              setAuthRole={setAuthRole}
              setPasscode={setPasscode}
              signIn={signIn}
              signOut={signOut}
            />
            <span>{progress.xp} XP</span>
            <span>{progress.campCoins} Coins</span>
            <span>{progress.masteryStars} Stars</span>
          </div>
        </header>

        <section className={`role-banner ${role}`}>
          <div>
            <p className="eyebrow">{isParent ? "Parent View" : "Child View"}</p>
            <h2>
              {isParent
                ? "Approvals and setup are available."
                : isSignedIn
                  ? "Focus mode is on. Parent-only actions are locked."
                  : "Sign in to save learning progress."}
            </h2>
          </div>
          <span>
            {isParent
              ? "Rewards, sharing, and setup controls enabled"
              : isSignedIn
                ? "Mission, reflection, and progress enabled"
                : "Viewing is open; saving is locked"}
          </span>
        </section>

        <section id="device" className="panel device-panel">
          <div>
            <p className="eyebrow">Device Readiness</p>
            <h2>{isStandalone ? "Installed app mode" : "Desktop, iPad, and Android tablet ready"}</h2>
            <p className="quiet">{deviceStatus}</p>
          </div>
          <div className="device-grid">
            <div>
              <strong>PWA install</strong>
              <span>Manifest, app icon, shortcuts, and service worker are configured.</span>
            </div>
            <div>
              <strong>Offline fallback</strong>
              <span>Core shell and offline message are cached for connection drops.</span>
            </div>
            <div>
              <strong>Tablet layout</strong>
              <span>Panels collapse cleanly for iPad and Android tablet widths.</span>
            </div>
          </div>
          <div className="actions">
            <button onClick={installApp}>{installPrompt ? "Install app" : "Install help"}</button>
            <span>Best tested in a production build or deployed website.</span>
          </div>
        </section>

        <section id="account" className="panel account-panel">
          <div>
            <p className="eyebrow">Family Account</p>
            <h2>Parent-owned local account</h2>
            <p className="quiet">{accountStatus}</p>
          </div>
          <div className="account-grid">
            <label>
              Parent name
              <input
                disabled={!isParent && !!familyAccount}
                value={parentName}
                onChange={(event) => setParentName(event.target.value)}
              />
            </label>
            <label>
              Parent email
              <input
                disabled={!isParent && !!familyAccount}
                value={parentEmail}
                onChange={(event) => setParentEmail(event.target.value)}
                placeholder="parent@example.com"
              />
            </label>
            <label>
              Parent passcode
              <input
                disabled={!isParent && !!familyAccount}
                type="password"
                value={setupParentPasscode}
                onChange={(event) => setSetupParentPasscode(event.target.value)}
                placeholder={familyAccount ? "New parent passcode" : "Create parent passcode"}
              />
            </label>
            <label>
              Child passcode
              <input
                disabled={!isParent && !!familyAccount}
                type="password"
                value={setupChildPasscode}
                onChange={(event) => setSetupChildPasscode(event.target.value)}
                placeholder={familyAccount ? "New child passcode" : "Create child passcode"}
              />
            </label>
          </div>
          <div className="actions">
            <button disabled={!isParent && !!familyAccount} onClick={saveFamilyAccount}>
              {familyAccount ? "Update account" : "Create account"}
            </button>
            <span>
              {familyAccount
                ? `Account: ${familyAccount.parent.name || "Parent"} / ${familyAccount.children[0]?.firstName || childName}`
                : "Until this is created, the default MVP passcodes still work."}
            </span>
          </div>
        </section>

        <section id="setup" className={`panel setup ${!isParent ? "locked-panel" : ""}`}>
          <div>
            <p className="eyebrow">Parent Setup</p>
            <h2>Profile and controls</h2>
            {!isParent && <p className="quiet">Parent sign-in is required to change setup and permissions.</p>}
            {isParent && <p className="quiet">{profileStatus}</p>}
          </div>
          <div className="setup-form">
            <label>
              Child first name
              <input disabled={!isParent} value={childName} onChange={(event) => setChildName(event.target.value)} />
            </label>
            <label>
              Launch grade
              <select disabled={!isParent} value={gradeLevel} onChange={(event) => setGradeLevel(Number(event.target.value))}>
                {gradeOptions.map((grade) => (
                  <option key={grade.value} value={grade.value} disabled={!grade.enabled}>
                    {grade.label}{grade.enabled ? "" : " - coming soon"}
                  </option>
                ))}
              </select>
            </label>
            {plan?.gradeTuning && (
              <div className="grade-tuning-note">
                <strong>{plan.gradeTuning.label}</strong>
                <span>
                  {plan.gradeTuning.status === "launch"
                    ? "Full Grade 6 launch curriculum is active."
                    : "Preview tuning changes difficulty language while full grade-specific curriculum is still planned."}
                </span>
              </div>
            )}
            <div className="form-group">
              <span>Interests</span>
              <div className="choice-list">
                {interestOptions.map((interest) => (
                  <label key={interest}>
                    <input
                      type="checkbox"
                      disabled={!isParent}
                      checked={selectedInterests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <span>Optional tracks</span>
              <small>Choose up to 2 for the next 3-4 weeks.</small>
              <div className="choice-list">
                {trackOptions.map(([key, label]) => (
                  <label key={key}>
                    <input
                      type="checkbox"
                      disabled={!isParent}
                      checked={selectedTracks.includes(key)}
                      onChange={() => toggleTrack(key)}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <label>
              Mission difficulty
              <select
                disabled={!isParent}
                value={difficultyOverride}
                onChange={(event) => setDifficultyOverride(event.target.value)}
              >
                <option value="auto">Auto from diagnostic</option>
                <option value="support">Support mode</option>
                <option value="standard">Standard mode</option>
                <option value="stretch">Stretch mode</option>
              </select>
            </label>
            <label>
              <input
                type="checkbox"
                disabled={!isParent}
                checked={outdoorAllowed}
                onChange={(event) => setOutdoorAllowed(event.target.checked)}
              />
              Outdoor activity allowed with parent supervision
            </label>
            <label>
              <input
                type="checkbox"
                disabled={!isParent}
                checked={friendInvites}
                onChange={(event) => setFriendInvites(event.target.checked)}
              />
              Friend invitations enabled
            </label>
            <label>
              <input
                type="checkbox"
                disabled={!isParent}
                checked={teacherSharing}
                onChange={(event) => setTeacherSharing(event.target.checked)}
              />
              Teacher sharing enabled
            </label>
            <button disabled={!isParent} onClick={() => generatePlan()}>Generate plan</button>
          </div>
        </section>

        <section id="diagnostic" className="panel diagnostic-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Grade 6 Diagnostic Quest</p>
              <h2>{diagnosticQuest?.title ?? "Loading check-in"}</h2>
            </div>
            <span className="pill">
              {diagnosticAnsweredCount}/{diagnosticQuest?.questions.length ?? 7} answered
            </span>
          </div>
          <p className="quiet">{diagnosticQuest?.purpose}</p>
          <div className="diagnostic-grid">
            {diagnosticQuest?.questions.map((question) => (
              <label key={question.id} className="diagnostic-card">
                <strong>{question.subject}</strong>
                <span>{question.prompt}</span>
                <textarea
                  rows={3}
                  value={diagnosticDrafts[question.id] ?? ""}
                  onChange={(event) =>
                    setDiagnosticDrafts((drafts) => ({
                      ...drafts,
                      [question.id]: event.target.value
                    }))
                  }
                  placeholder="Child response"
                />
                {isParent && <small>{question.lookFor}</small>}
              </label>
            ))}
          </div>
          <div className="actions diagnostic-actions">
            <button disabled={!canUseLearning} onClick={saveDiagnostic}>Save diagnostic</button>
            <span>
              {progress.diagnosticCompleted
                ? "Diagnostic ready for parent review."
                : diagnosticQuest?.completionRule ?? "Answer at least 5 prompts."}
            </span>
          </div>
          {isParent && <p className="quiet">{diagnosticQuest?.parentNote}</p>}
          {diagnosticSummary && (
            <div className="diagnostic-summary">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Diagnostic Analyst</p>
                  <h3>{diagnosticSummary.headline}</h3>
                </div>
                <span className="pill">
                  {diagnosticSummary.answeredCount}/{diagnosticSummary.totalQuestions}
                </span>
              </div>
              <div className="summary-columns">
                <div>
                  <strong>Strengths</strong>
                  {diagnosticSummary.strengths.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div>
                  <strong>Support priorities</strong>
                  {diagnosticSummary.supportPriorities.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="readiness-list">
                {diagnosticSummary.subjectSummaries.map((summary) => (
                  <article key={summary.id} className={`readiness ${summary.readiness}`}>
                    <strong>{summary.subject}</strong>
                    <span>{summary.readiness}</span>
                    {isParent && <small>{summary.supportNeed}</small>}
                  </article>
                ))}
              </div>
              {isParent && (
                <div className="next-steps">
                  <strong>Parent next steps</strong>
                  {diagnosticSummary.parentNextSteps.map((step) => (
                    <span key={step}>{step}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        <section className="grid">
          <article id="mission-mode" className="panel wide mission-mode">
            <div className="section-head">
              <div>
                <p className="eyebrow">Child Mission Mode</p>
                <h2>{selectedMission?.theme ?? "Loading mission"}</h2>
              </div>
              <span className="pill">Week {weekNumber} / Day {dayNumber}</span>
            </div>

            <div className="selectors">
              <label>
                Week
                <select value={weekNumber} onChange={(event) => { setWeekNumber(Number(event.target.value)); setDayNumber(1); }}>
                  {plan?.weeklyMissionPlans.map((week) => (
                    <option key={week.weekNumber} value={week.weekNumber}>
                      Week {week.weekNumber}: {week.theme}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Day
                <select value={dayNumber} onChange={(event) => setDayNumber(Number(event.target.value))}>
                  {selectedWeek?.missions.map((mission) => (
                    <option key={mission.dayNumber} value={mission.dayNumber}>
                      {mission.dayLabel}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {plan?.tunedCoreSubjects && (
              <div className="subject-tuning">
                {plan.tunedCoreSubjects.slice(0, 4).map((subject) => (
                  <article key={subject.name}>
                    <strong>{subject.name}</strong>
                    <span>{subject.guidance}</span>
                  </article>
                ))}
              </div>
            )}

            {selectedMission && (
              <>
                {selectedMission.launchBrief && (
                  <div className="launch-brief">
                    <div>
                      <p className="eyebrow">Week 1 Launch</p>
                      <h3>{selectedMission.launchBrief}</h3>
                    </div>
                    <div className="launch-details">
                      <span>{selectedMission.projectMilestone}</span>
                      {isParent && <span>{selectedMission.parentReview}</span>}
                      <span>{selectedMission.celebrationPrompt}</span>
                    </div>
                  </div>
                )}
                <div className="mission-cards">
                  <TaskCard title="Warm-up" body={selectedMission.warmup} />
                  {selectedMission.lessons.map((lesson) => (
                    <TaskCard
                      key={lesson.subject}
                      title={lesson.subject}
                      body={lesson.adaptive?.adjustedTask ?? lesson.task}
                      mode={lesson.adaptive?.mode}
                      cue={lesson.adaptive?.coachCue}
                    />
                  ))}
                  <TaskCard title="Create" body={selectedMission.creativeChallenge} />
                  <TaskCard title="Move" body={selectedMission.bodyCheck[0]} />
                </div>

                <div className="teacher-guide">
                  <div className="section-head">
                    <div>
                      <p className="eyebrow">Teacher Agents</p>
                      <h3>{lessonGuide?.title ?? "Teacher guide"}</h3>
                    </div>
                    <span className="pill">{lessonStatus}</span>
                  </div>
                  {plan?.adaptiveTuning && (
                    <p className="quiet">Adaptive tuning: {plan.adaptiveTuning.summary}</p>
                  )}
                  {lessonGuide && (
                    <>
                      <p>{lessonGuide.openingMove}</p>
                      <div className="lesson-grid">
                        {lessonGuide.miniLessons.map((lesson) => (
                          <article key={lesson.subject}>
                            <strong>{lesson.subject}</strong>
                            <span>{lesson.teach}</span>
                            <small>Ask: {lesson.coachQuestion}</small>
                            {isParent && <small>Support: {lesson.support}</small>}
                            {isParent && <small>Stretch: {lesson.stretch}</small>}
                          </article>
                        ))}
                      </div>
                      {isParent && <p className="quiet">{lessonGuide.parentTip}</p>}
                    </>
                  )}
                </div>

                <label className="reflection">
                  Child reflection
                  <textarea
                    rows={4}
                    value={reflectionDraft}
                    onChange={(event) => setReflectionDraft(event.target.value)}
                    placeholder="What did you learn or feel proud of today?"
                  />
                </label>

                <div className="actions">
                  <button disabled={!canUseLearning} onClick={completeMission}>{isComplete ? "Save reflection" : "Complete mission"}</button>
                  <span>
                    {!canUseLearning
                      ? "Sign in to save mission progress."
                      : isComplete
                        ? "Mission completed."
                        : "Ready when the mission is done."}
                  </span>
                </div>
              </>
            )}
          </article>

          <article id="progress" className="panel">
            <p className="eyebrow">Parent Dashboard</p>
            <h2>{isParent ? "Progress summary" : "Your progress"}</h2>
            <div className="progress-grid">
              <div><strong>{progress.completedMissionIds.length}/{plan?.parentSummary.totalPlannedMissions ?? 40}</strong><span>Missions</span></div>
              <div><strong>{progress.xp}</strong><span>XP</span></div>
              <div><strong>{progress.campCoins}</strong><span>Coins</span></div>
              <div><strong>{progress.masteryStars}</strong><span>Stars</span></div>
            </div>
            <div className="progress-bar"><span style={{ width: `${completionPercent}%` }} /></div>
            <p className="quiet">{persistenceStatus}</p>
          </article>

          <article className="panel">
            <p className="eyebrow">Rewards Agent</p>
            <h2>Reward request</h2>
            {!isParent && <p className="quiet">Choose a reward idea. Parent approval still happens in the reward center.</p>}
            <label>
              Reward choice
              <select disabled={!canUseLearning} value={selectedReward} onChange={(event) => setSelectedReward(event.target.value)}>
                {plan?.rewardPlan.weeklyRewardMenu.map((reward) => (
                  <option key={reward} value={reward}>{reward}</option>
                ))}
              </select>
            </label>
            <button disabled={!canUseLearning} onClick={requestReward}>Request reward</button>
            <p className="quiet">{rewardStatus}</p>
          </article>

          <article id="weekly-report" className="panel wide weekly-report">
            <div className="section-head">
              <div>
                <p className="eyebrow">Parent Liaison</p>
                <h2>{weeklyReport?.headline ?? "Weekly parent report"}</h2>
              </div>
              <div className="report-actions">
                <span className="pill">Week {weekNumber}</span>
                <button disabled={!isParent} onClick={prepareWeeklyReport}>Prepare report</button>
              </div>
            </div>
            <p className="quiet">{reportStatus}</p>
            {!isParent && <p className="quiet">Weekly reports are hidden from child view until a parent prepares them.</p>}
            {weeklyReport && weeklyReport.status === "ready" && (
              <div className="report-body">
                <div className="report-grid">
                  <div>
                    <strong>{weeklyReport.completion.completedCount}/{weeklyReport.completion.totalMissions}</strong>
                    <span>Missions completed</span>
                  </div>
                  <div>
                    <strong>{weeklyReport.completion.completionPercent}%</strong>
                    <span>Week progress</span>
                  </div>
                  <div>
                    <strong>{weeklyReport.weeklyEarnings.xp}</strong>
                    <span>Week XP</span>
                  </div>
                  <div>
                    <strong>{weeklyReport.weeklyEarnings.campCoins}</strong>
                    <span>Week coins</span>
                  </div>
                  <div>
                    <strong>{weeklyReport.rewards.pendingCount}</strong>
                    <span>Pending rewards</span>
                  </div>
                  <div>
                    <strong>{weeklyReport.invitations.approvedCount}</strong>
                    <span>Approved friends</span>
                  </div>
                </div>

                <div className="report-columns">
                  <section>
                    <h3>{weeklyReport.week.theme}</h3>
                    <p className="quiet">Project: {weeklyReport.week.project}</p>
                    <div className="report-subjects">
                      {weeklyReport.subjectCoverage.length === 0 && <span>No completed subject lessons yet.</span>}
                      {weeklyReport.subjectCoverage.map((item) => (
                        <span key={item.subject}>{item.subject}: {item.completedLessons}</span>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h3>Parent next steps</h3>
                    <div className="report-next-steps">
                      {weeklyReport.parentNextSteps.map((step) => (
                        <span key={step}>{step}</span>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="report-evidence">
                  <h3>Completed mission evidence</h3>
                  {weeklyReport.completedMissions.length === 0 && <p className="quiet">No completed missions for this week yet.</p>}
                  {weeklyReport.completedMissions.map((mission) => (
                    <article key={mission.missionId}>
                      <strong>{mission.dayLabel}: {mission.theme}</strong>
                      <span>{mission.subjects.join(", ")}</span>
                      <small>{mission.projectMilestone}</small>
                      {mission.reflection && <em>{mission.reflection}</em>}
                    </article>
                  ))}
                </div>

                <label className="teacher-summary">
                  School-friendly summary
                  <textarea readOnly rows={4} value={weeklyReport.teacherSummary} />
                </label>

                <div className="privacy-list">
                  <strong>Kept private by default</strong>
                  {weeklyReport.excludedPrivateData.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            )}
          </article>

          <article className="panel reward-center">
            <p className="eyebrow">Parent Reward Center</p>
            <h2>{pendingRewards.length} pending / {approvedRewards.length} approved</h2>
            <div className="reward-list">
              {pendingRewards.length === 0 && <p className="quiet">No pending reward requests yet.</p>}
              {pendingRewards.map((request) => (
                <article key={request.id}>
                  <strong>{request.requestedReward}</strong>
                  <span>{request.parentPrompt}</span>
                  <small>{request.earnedBy.theme} - {request.earnedBy.dayLabel}</small>
                  <button disabled={!isParent} onClick={() => approveReward(request.id)}>Approve</button>
                </article>
              ))}
            </div>
            <div className="reward-suggestions">
              <strong>Non-screen ideas</strong>
              <span>Family walk, park, sports, bike, or swimming time</span>
              <span>Cook a favorite healthy snack together</span>
              <span>Board game, movie night, or project showcase call</span>
            </div>
          </article>

          <article id="squad" className="panel wide squad-panel">
            <div className="section-head">
              <div>
                <p className="eyebrow">Social Coordinator</p>
                <h2>Friend invite MVP</h2>
              </div>
              <span className="pill">{pendingInvites.length} pending / {approvedInvites.length} approved</span>
            </div>
            <div className="squad-grid">
              <div className="invite-form">
                <label>
                  Friend first name
                  <input
                    disabled={!canUseLearning}
                    value={friendName}
                    onChange={(event) => setFriendName(event.target.value)}
                    placeholder="Jordan"
                  />
                </label>
                <button disabled={!canUseLearning} onClick={requestFriendInvite}>Suggest friend</button>
                <p className="quiet">{inviteStatus}</p>
              </div>
              <div className="invite-list">
                {progress.friendInvites.length === 0 && <p className="quiet">No friend invites yet.</p>}
                {progress.friendInvites.map((invite) => (
                  <article key={invite.id}>
                    <strong>{invite.friendName}</strong>
                    <span>{invite.status === "approved" ? invite.parentMessage : invite.nextStep ?? invite.reason}</span>
                    {invite.inviteLink && <code>{invite.inviteLink}</code>}
                    {invite.status === "needs_parent_approval" && (
                      <button disabled={!isParent} onClick={() => approveFriendInvite(invite.id)}>Approve invite</button>
                    )}
                  </article>
                ))}
              </div>
            </div>
            <div className="squad-visibility">
              <strong>Default squad visibility</strong>
              <span>Shows badges and completed missions.</span>
              <span>Hides exact scores, private reflections, health answers, and faith reflections.</span>
            </div>
          </article>

          <article id="share" className="panel wide">
            <div className="section-head">
              <div>
                <p className="eyebrow">Teacher Liaison</p>
                <h2>Teacher share export</h2>
              </div>
              <button disabled={!isParent} onClick={prepareTeacherShare}>Prepare share</button>
            </div>
            {!isParent && <p className="quiet">Teacher sharing is hidden from child view until a parent prepares it.</p>}
            <textarea value={shareExport} readOnly rows={12} placeholder="Prepare a share package to preview the report." />
          </article>
        </section>
      </section>
    </main>
  );
}

function AuthPanel({
  authRole,
  authStatus,
  isSignedIn,
  passcode,
  role,
  setAuthRole,
  setPasscode,
  signIn,
  signOut
}: {
  authRole: UserRole;
  authStatus: string;
  isSignedIn: boolean;
  passcode: string;
  role: UserRole;
  setAuthRole: (role: UserRole) => void;
  setPasscode: (passcode: string) => void;
  signIn: () => void;
  signOut: () => void;
}) {
  return (
    <div className="auth-panel" aria-label="Role sign-in">
      <div className="auth-fields">
        <select disabled={isSignedIn} value={authRole} onChange={(event) => setAuthRole(event.target.value as UserRole)}>
          <option value="child">Child</option>
          <option value="parent">Parent</option>
        </select>
        <input
          disabled={isSignedIn}
          type="password"
          value={passcode}
          onChange={(event) => setPasscode(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              signIn();
            }
          }}
          placeholder="Passcode"
        />
      </div>
      <div className="auth-actions">
        {isSignedIn ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signIn}>Sign in</button>
        )}
        <span className={isSignedIn ? `signed-in ${role}` : ""}>{authStatus}</span>
      </div>
    </div>
  );
}

function TaskCard({ title, body, mode, cue }: { title: string; body: string; mode?: string; cue?: string }) {
  return (
    <div className={`task-card ${mode ?? ""}`}>
      <strong>
        {title}
        {mode && <small>{mode}</small>}
      </strong>
      <span>{body}</span>
      {cue && <em>{cue}</em>}
    </div>
  );
}

function formatTeacherShare(packageData: any) {
  if (packageData.status === "blocked") {
    return packageData.reason;
  }

  const progress = packageData.progressSummary;
  const lines = [
    `${packageData.student.firstName} - Grade ${packageData.student.gradeLevel} Summer Learning Report`,
    "",
    packageData.summary,
    "",
    `Completed missions: ${progress.completedMissionCount}/${progress.totalMissionCount}`,
    `XP: ${progress.xp}`,
    `Mastery stars: ${progress.masteryStars}`,
    `Camp coins: ${progress.campCoins}`,
    "",
    "Mission evidence:"
  ];

  progress.completedMissions.slice(0, 8).forEach((mission: any) => {
    lines.push(`- Week ${mission.weekNumber}, ${mission.dayLabel}: ${mission.theme}`);
    lines.push(`  Subjects: ${mission.subjects.join(", ")}`);
    if (mission.reflection) {
      lines.push(`  Reflection: ${mission.reflection}`);
    }
  });

  return lines.join("\n");
}
