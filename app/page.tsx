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
  }>;
  enrichmentConnections: Array<{
    track: string;
    task: string;
  }>;
  creativeChallenge: string;
  reflectionPrompt: string;
  bodyCheck: string[];
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
  rewardPlan: {
    weeklyRewardMenu: string[];
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
  { value: 5, label: "Grade 5", enabled: false },
  { value: 7, label: "Grade 7", enabled: false },
  { value: 8, label: "Grade 8", enabled: false }
];

const emptyProgress: Progress = {
  completedMissionIds: [],
  xp: 0,
  masteryStars: 0,
  campCoins: 0,
  reflections: {},
  diagnosticAnswers: {},
  diagnosticCompleted: false
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
  const [lessonGuide, setLessonGuide] = useState<LessonGuide | null>(null);
  const [lessonStatus, setLessonStatus] = useState("Loading teacher guide...");
  const [weekNumber, setWeekNumber] = useState(1);
  const [dayNumber, setDayNumber] = useState(1);
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [reflectionDraft, setReflectionDraft] = useState("");
  const [selectedReward, setSelectedReward] = useState("");
  const [rewardStatus, setRewardStatus] = useState("Complete a mission to request a parent-approved reward.");
  const [shareExport, setShareExport] = useState("");
  const [profileStatus, setProfileStatus] = useState("Loading saved profile...");
  const [profileReady, setProfileReady] = useState(false);
  const [persistenceStatus, setPersistenceStatus] = useState("Loading saved progress...");
  const [role, setRole] = useState<UserRole>("parent");
  const isParent = role === "parent";

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
    loadProfile();
    loadProgress();
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

  useEffect(() => {
    setReflectionDraft(progress.reflections[missionId] ?? "");
  }, [missionId, progress.reflections]);

  useEffect(() => {
    setDiagnosticDrafts(progress.diagnosticAnswers ?? {});
  }, [progress.diagnosticAnswers]);

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

  async function generatePlan() {
    if (isParent) {
      await saveProfile(payload.studentProfile);
    }

    const response = await fetch("/api/program-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
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
  }

  async function completeMission() {
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
    if (!isParent) {
      setRewardStatus("Ask your parent to review and approve rewards.");
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
    setRewardStatus(result.parentPrompt ?? "Reward request could not be created.");
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
          <a href="#setup">Setup</a>
          <a href="#diagnostic">Diagnostic</a>
          <a href="#mission-mode">Mission</a>
          <a href="#progress">Progress</a>
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
            <RoleSwitch role={role} setRole={setRole} />
            <span>{progress.xp} XP</span>
            <span>{progress.campCoins} Coins</span>
            <span>{progress.masteryStars} Stars</span>
          </div>
        </header>

        <section className={`role-banner ${role}`}>
          <div>
            <p className="eyebrow">{isParent ? "Parent View" : "Child View"}</p>
            <h2>{isParent ? "Approvals and setup are available." : "Focus mode is on. Parent-only actions are locked."}</h2>
          </div>
          <span>{isParent ? "Rewards, sharing, and setup controls enabled" : "Mission, reflection, and progress enabled"}</span>
        </section>

        <section id="setup" className={`panel setup ${!isParent ? "locked-panel" : ""}`}>
          <div>
            <p className="eyebrow">Parent Setup</p>
            <h2>Profile and controls</h2>
            {!isParent && <p className="quiet">Switch to parent view to change setup and permissions.</p>}
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
            <button disabled={!isParent} onClick={generatePlan}>Generate plan</button>
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
            <button onClick={saveDiagnostic}>Save diagnostic</button>
            <span>
              {progress.diagnosticCompleted
                ? "Diagnostic ready for parent review."
                : diagnosticQuest?.completionRule ?? "Answer at least 5 prompts."}
            </span>
          </div>
          {isParent && <p className="quiet">{diagnosticQuest?.parentNote}</p>}
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

            {selectedMission && (
              <>
                <div className="mission-cards">
                  <TaskCard title="Warm-up" body={selectedMission.warmup} />
                  {selectedMission.lessons.map((lesson) => (
                    <TaskCard key={lesson.subject} title={lesson.subject} body={lesson.task} />
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
                  <button onClick={completeMission}>{isComplete ? "Save reflection" : "Complete mission"}</button>
                  <span>{isComplete ? "Mission completed." : "Ready when the mission is done."}</span>
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
            <h2>{isParent ? "Reward approval" : "Reward preview"}</h2>
            {!isParent && <p className="quiet">Rewards are visible here, but approval stays with your parent.</p>}
            <label>
              Reward choice
              <select disabled={!isParent} value={selectedReward} onChange={(event) => setSelectedReward(event.target.value)}>
                {plan?.rewardPlan.weeklyRewardMenu.map((reward) => (
                  <option key={reward} value={reward}>{reward}</option>
                ))}
              </select>
            </label>
            <button disabled={!isParent} onClick={requestReward}>Request reward</button>
            <p className="quiet">{rewardStatus}</p>
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

function RoleSwitch({
  role,
  setRole
}: {
  role: UserRole;
  setRole: (role: UserRole) => void;
}) {
  return (
    <div className="role-switch" aria-label="Demo role switch">
      <button className={role === "parent" ? "active" : ""} onClick={() => setRole("parent")}>
        Parent
      </button>
      <button className={role === "child" ? "active" : ""} onClick={() => setRole("child")}>
        Child
      </button>
    </div>
  );
}

function TaskCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="task-card">
      <strong>{title}</strong>
      <span>{body}</span>
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
