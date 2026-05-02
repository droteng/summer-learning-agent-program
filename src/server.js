import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { createProgramPlan } from "./agents/principalAgent.js";
import { createRewardApprovalRequest } from "./agents/rewardsAgent.js";
import { createInvitationRequest } from "./agents/socialCoordinatorAgent.js";
import { createTeacherSharePackage } from "./agents/teacherLiaisonAgent.js";

const currentFile = fileURLToPath(import.meta.url);
const rootDir = fileURLToPath(new URL("..", import.meta.url));
const prototypeDir = join(rootDir, "prototype");
const port = Number(process.env.PORT ?? 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

export const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === "POST" && url.pathname === "/api/program-plan") {
      const payload = await readJson(request);
      const plan = createProgramPlan(payload.studentProfile, payload.parentPolicy);
      return sendJson(response, summarizeProgramPlan(plan));
    }

    if (request.method === "POST" && url.pathname === "/api/invite-request") {
      const payload = await readJson(request);
      const result = createInvitationRequest(payload);
      return sendJson(response, result);
    }

    if (request.method === "POST" && url.pathname === "/api/reward-request") {
      const payload = await readJson(request);
      const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);
      const mission = findMission({
        weeklyMissionPlans: programPlan.weeklyMissionPlans,
        weekNumber: payload.weekNumber,
        dayNumber: payload.dayNumber
      });

      if (!mission) {
        return sendJson(response, { error: "Mission not found" }, 404);
      }

      const result = createRewardApprovalRequest({
        student: payload.studentProfile,
        mission,
        requestedReward: payload.requestedReward
      });
      return sendJson(response, result);
    }

    if (request.method === "POST" && url.pathname === "/api/teacher-share") {
      const payload = await readJson(request);
      const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);
      const result = createTeacherSharePackage({
        student: payload.studentProfile,
        programPlan,
        parentApproved: Boolean(payload.parentApproved)
      });
      return sendJson(response, result);
    }

    if (request.method !== "GET") {
      return sendJson(response, { error: "Method not allowed" }, 405);
    }

    return serveStatic(url.pathname, response);
  } catch (error) {
    console.error(error);
    return sendJson(response, { error: "Internal server error" }, 500);
  }
});

if (currentFile === process.argv[1]) {
  server.listen(port, () => {
    console.log(`Summer learning prototype running at http://localhost:${port}`);
  });
}

function summarizeProgramPlan(plan) {
  return {
    parentSummary: plan.parentSummary,
    rewardPlan: plan.rewardPlan,
    firstWeekSummary: plan.weeklyMissionPlans[0].weeklyProgressSummary,
    firstDailyMission: plan.dailyMissionPreview,
    weeklyThemes: plan.curriculum.weeks.map((week) => ({
      weekNumber: week.weekNumber,
      theme: week.theme,
      project: week.project
    })),
    weeklyMissionPlans: plan.weeklyMissionPlans.map((weeklyPlan) => ({
      weekNumber: weeklyPlan.week.weekNumber,
      theme: weeklyPlan.week.theme,
      project: weeklyPlan.week.project,
      weeklyProgressSummary: weeklyPlan.weeklyProgressSummary,
      missions: weeklyPlan.missions
    }))
  };
}

function findMission({ weeklyMissionPlans, weekNumber, dayNumber }) {
  const weeklyPlan = weeklyMissionPlans.find((plan) => plan.week.weekNumber === Number(weekNumber));
  return weeklyPlan?.missions.find((mission) => mission.dayNumber === Number(dayNumber));
}

async function readJson(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const body = Buffer.concat(chunks).toString("utf8");
  return body ? JSON.parse(body) : {};
}

async function serveStatic(pathname, response) {
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const safePath = normalize(requestedPath).replace(/^(\.\.(\/|\\|$))+/, "");
  const filePath = join(prototypeDir, safePath);

  if (!filePath.startsWith(prototypeDir)) {
    return sendJson(response, { error: "Forbidden" }, 403);
  }

  try {
    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream"
    });
    response.end(file);
  } catch {
    sendJson(response, { error: "Not found" }, 404);
  }
}

function sendJson(response, payload, statusCode = 200) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload, null, 2));
}
