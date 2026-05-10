"use client";

import { useEffect, useState } from "react";

type PrintablePackage = {
  status: "ready_to_print" | "blocked";
  reason?: string;
  generatedAt?: string;
  title?: string;
  sections?: string[];
  weeklyReport?: any;
  achievementExport?: any;
  squadRoom?: any;
  printInstructions?: string[];
  privacyNotice?: string[];
};

const profileId = "mvp-preview-profile";
const studentId = "mvp-preview-student";

const defaultStudent = {
  id: studentId,
  firstName: "Avery",
  gradeLevel: 6,
  interests: ["games", "sports", "projects"],
  selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
  faithSetting: "parent-controlled",
  activityPreferences: {
    outdoorAllowed: true
  }
};

const defaultProgress = {
  completedMissionIds: [],
  xp: 0,
  masteryStars: 0,
  campCoins: 0,
  reflections: {},
  rewardRequests: [],
  friendInvites: [],
  squadProjectUpdates: []
};

export default function PrintablePackagePage() {
  const [reportPackage, setReportPackage] = useState<PrintablePackage | null>(null);
  const [status, setStatus] = useState("Preparing printable package...");
  const [downloadPayload, setDownloadPayload] = useState<any | null>(null);

  useEffect(() => {
    loadPrintablePackage();
  }, []);

  async function loadPrintablePackage() {
    try {
      const profileResponse = await fetch(`/api/profile?profileId=${profileId}`);
      const profileResult = await profileResponse.json();
      const studentProfile = {
        ...defaultStudent,
        ...(profileResult.profile ?? {})
      };
      const progressResponse = await fetch(`/api/progress?studentId=${studentProfile.id ?? studentId}`);
      const progressResult = await progressResponse.json();
      const progress = {
        ...defaultProgress,
        ...(progressResult.progress ?? {})
      };
      const response = await fetch("/api/printable-package", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          studentProfile,
          parentPolicy: {
            allowedRewards: ["device", "park", "movie", "friend"],
            friendInvitesEnabled: true,
            teacherSharingEnabled: true,
            progressSharingEnabled: true,
            externalMessagingEnabled: false,
            liveSessionsEnabled: false
          },
          progress,
          weekNumber: 1,
          parentApproved: true
        })
      });
      const result = await response.json();

      setReportPackage(result);
      setDownloadPayload({
        studentProfile,
        parentPolicy: {
          allowedRewards: ["device", "park", "movie", "friend"],
          friendInvitesEnabled: true,
          teacherSharingEnabled: true,
          progressSharingEnabled: true,
          externalMessagingEnabled: false,
          liveSessionsEnabled: false
        },
        progress,
        weekNumber: 1,
        parentApproved: true
      });
      setStatus(result.status === "ready_to_print" ? "Ready to print or save as PDF." : result.reason);
    } catch {
      setStatus("Printable package could not be prepared.");
    }
  }

  async function downloadReport(format: "markdown" | "json") {
    if (!downloadPayload) {
      setStatus("Download is not ready yet.");
      return;
    }

    const response = await fetch("/api/report-download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...downloadPayload,
        format
      })
    });
    const result = await response.json();

    if (result.status !== "ready_to_download") {
      setStatus(result.reason ?? "Download could not be prepared.");
      return;
    }

    const blob = new Blob([result.content], { type: result.mimeType });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = result.filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    setStatus(`${result.format.toUpperCase()} download prepared.`);
  }

  if (!reportPackage || reportPackage.status !== "ready_to_print") {
    return (
      <main className="print-shell">
        <section className="print-page">
          <p className="eyebrow">Printable Package</p>
          <h1>Preparing report</h1>
          <p>{status}</p>
        </section>
      </main>
    );
  }

  const weeklyReport = reportPackage.weeklyReport;
  const achievement = reportPackage.achievementExport;
  const transcript = achievement?.transcript;
  const squadRoom = reportPackage.squadRoom;

  return (
    <main className="print-shell">
      <div className="print-toolbar">
        <a href="/">Back to dashboard</a>
        <span>{status}</span>
        <div className="print-actions">
          <button onClick={() => downloadReport("markdown")}>Download Markdown</button>
          <button onClick={() => downloadReport("json")}>Download JSON</button>
          <button onClick={() => window.print()}>Print / Save PDF</button>
        </div>
      </div>

      <article className="print-page">
        <header className="print-hero">
          <p className="eyebrow">learning-squad.ai</p>
          <h1>{reportPackage.title}</h1>
          <p>Generated {reportPackage.generatedAt ? new Date(reportPackage.generatedAt).toLocaleDateString() : "today"}</p>
        </header>

        <section className="print-section section-index">
          <h2>Package contents</h2>
          {reportPackage.sections?.map((section) => <span key={section}>{section}</span>)}
        </section>

        <section className="print-section print-certificate">
          <p className="eyebrow">Certificate</p>
          <h2>{achievement?.certificate?.title}</h2>
          <strong>{achievement?.certificate?.subtitle}</strong>
          <span>{achievement?.certificate?.signatureLine}</span>
        </section>

        <section className="print-section print-metrics">
          <div><strong>{transcript?.completedMissionCount ?? 0}/{transcript?.totalMissionCount ?? 40}</strong><span>Missions</span></div>
          <div><strong>{transcript?.completionPercent ?? 0}%</strong><span>Completion</span></div>
          <div><strong>{transcript?.xp ?? 0}</strong><span>XP</span></div>
          <div><strong>{transcript?.masteryStars ?? 0}</strong><span>Stars</span></div>
          <div><strong>{achievement?.badges?.length ?? 0}</strong><span>Badges</span></div>
        </section>

        <section className="print-section two-column-print">
          <div>
            <h2>Weekly parent report</h2>
            <p>{weeklyReport?.teacherSummary}</p>
            <div className="compact-list">
              {weeklyReport?.parentNextSteps?.map((step: string) => <span key={step}>{step}</span>)}
            </div>
          </div>
          <div>
            <h2>School-share summary</h2>
            <p>{achievement?.schoolShareSummary}</p>
          </div>
        </section>

        <section className="print-section">
          <h2>Attendance transcript</h2>
          <div className="print-table">
            {transcript?.weeklyTranscript?.map((week: any) => (
              <article key={week.weekNumber}>
                <strong>Week {week.weekNumber}: {week.theme}</strong>
                <span>{week.completedMissionCount}/{week.totalMissionCount} missions - {week.completionPercent}%</span>
                <small>{week.subjects?.length ? week.subjects.join(", ") : "No completed subjects yet"}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="print-section two-column-print">
          <div>
            <h2>Shareable badges</h2>
            <div className="compact-list">
              {achievement?.badges?.map((badge: any) => <span key={badge.name}>{badge.name}: {badge.description}</span>)}
            </div>
          </div>
          <div>
            <h2>Portfolio highlights</h2>
            <div className="compact-list">
              {achievement?.portfolioHighlights?.map((highlight: any) => (
                <span key={highlight.title}>{highlight.title}: {highlight.project}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="print-section">
          <h2>Learning Squad project updates</h2>
          <p>{squadRoom?.sharedProject?.project ?? "No shared project room opened yet."}</p>
          <div className="compact-list">
            {squadRoom?.projectUpdates?.length ? squadRoom.projectUpdates.map((update: any) => (
              <span key={update.id}>{update.author}: {update.message}</span>
            )) : <span>No parent-visible project updates yet.</span>}
          </div>
        </section>

        <section className="print-section two-column-print">
          <div>
            <h2>Parent checklist</h2>
            <div className="compact-list">
              {reportPackage.printInstructions?.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div>
            <h2>Kept private by default</h2>
            <div className="compact-list">
              {reportPackage.privacyNotice?.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
