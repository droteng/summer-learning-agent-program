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

type Progress = {
  completedMissionIds: string[];
  xp: number;
  masteryStars: number;
  campCoins: number;
  reflections: Record<string, string>;
};

type UserRole = "parent" | "child";

const trackOptions = [
  ["healthWellness", "Health & Wellness"],
  ["christianLeadership", "Christian Leadership"],
  ["financialLiteracy", "Financial Literacy"],
  ["mediaLiteracy", "Media Literacy"]
];

const emptyProgress: Progress = {
  completedMissionIds: [],
  xp: 0,
  masteryStars: 0,
  campCoins: 0,
  reflections: {}
};

export default function Home() {
  const [childName, setChildName] = useState("Avery");
  const [selectedTracks, setSelectedTracks] = useState(["healthWellness", "financialLiteracy"]);
  const [outdoorAllowed, setOutdoorAllowed] = useState(true);
  const [teacherSharing, setTeacherSharing] = useState(true);
  const [friendInvites, setFriendInvites] = useState(true);
  const [plan, setPlan] = useState<ProgramPlan | null>(null);
  const [weekNumber, setWeekNumber] = useState(1);
  const [dayNumber, setDayNumber] = useState(1);
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [reflectionDraft, setReflectionDraft] = useState("");
  const [selectedReward, setSelectedReward] = useState("");
  const [rewardStatus, setRewardStatus] = useState("Complete a mission to request a parent-approved reward.");
  const [shareExport, setShareExport] = useState("");
  const [persistenceStatus, setPersistenceStatus] = useState("Loading saved progress...");
  const [role, setRole] = useState<UserRole>("parent");
  const isParent = role === "parent";

  const payload = useMemo(
    () => ({
      studentProfile: {
        id: "mvp-preview-student",
        firstName: childName || "Student",
        gradeLevel: 6,
        interests: ["games", "sports", "projects"],
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
    [childName, friendInvites, outdoorAllowed, selectedTracks, teacherSharing]
  );

  useEffect(() => {
    loadProgress();
  }, []);

  useEffect(() => {
    generatePlan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedWeek = plan?.weeklyMissionPlans.find((week) => week.weekNumber === weekNumber);
  const selectedMission = selectedWeek?.missions.find((mission) => mission.dayNumber === dayNumber);
  const missionId = `week-${weekNumber}-day-${dayNumber}`;
  const isComplete = progress.completedMissionIds.includes(missionId);
  const completionPercent = plan
    ? Math.round((progress.completedMissionIds.length / plan.parentSummary.totalPlannedMissions) * 100)
    : 0;

  useEffect(() => {
    setReflectionDraft(progress.reflections[missionId] ?? "");
  }, [missionId, progress.reflections]);

  useEffect(() => {
    if (plan?.rewardPlan.weeklyRewardMenu.length && !selectedReward) {
      setSelectedReward(plan.rewardPlan.weeklyRewardMenu[0]);
    }
  }, [plan, selectedReward]);

  async function generatePlan() {
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
  }

  function toggleTrack(trackKey: string) {
    setSelectedTracks((tracks) => {
      if (tracks.includes(trackKey)) {
        return tracks.filter((track) => track !== trackKey);
      }

      return [...tracks, trackKey].slice(0, 2);
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
          </div>
          <div className="setup-form">
            <label>
              Child first name
              <input disabled={!isParent} value={childName} onChange={(event) => setChildName(event.target.value)} />
            </label>
            <div className="track-list">
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
