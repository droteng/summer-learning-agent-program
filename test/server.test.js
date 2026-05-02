import assert from "node:assert/strict";
import test from "node:test";
import { server } from "../src/server.js";

test("program plan endpoint returns a summarized 40-mission plan", async () => {
  const baseUrl = await startTestServer();

  try {
    const response = await fetch(`${baseUrl}/api/program-plan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentProfile: {
          id: "server-test-student",
          firstName: "Avery",
          gradeLevel: 6,
          interests: ["coding"],
          selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
          activityPreferences: {
            outdoorAllowed: true
          }
        },
        parentPolicy: {
          allowedRewards: ["device", "park"],
          friendInvitesEnabled: true,
          teacherSharingEnabled: true
        }
      })
    });

    const payload = await response.json();

    assert.equal(response.status, 200);
    assert.equal(payload.parentSummary.totalPlannedMissions, 40);
    assert.equal(payload.firstDailyMission.lessons.length, 3);
    assert.equal(payload.weeklyThemes.length, 8);
  } finally {
    await stopTestServer();
  }
});

function startTestServer() {
  return new Promise((resolve) => {
    server.listen(0, () => {
      const address = server.address();
      resolve(`http://127.0.0.1:${address.port}`);
    });
  });
}

function stopTestServer() {
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

