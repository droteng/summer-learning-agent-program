import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("OpenClaw package metadata defines a sellable education package", async () => {
  const packageMetadata = JSON.parse(await readFile("openclaw/package.json", "utf8"));
  const agents = JSON.parse(await readFile("openclaw/agents.json", "utf8"));
  const safety = JSON.parse(await readFile("openclaw/safety-policy.json", "utf8"));

  assert.equal(packageMetadata.packageId, "dr-spark-academy.grade6-summer");
  assert.equal(packageMetadata.entryAgent, "principal-agent");
  assert.ok(packageMetadata.distribution.clawHub.listingTitle.includes("Grade 6"));
  assert.ok(agents.agents.some((agent) => agent.id === "safety-moderator-agent"));
  assert.ok(safety.parentApprovalRequiredFor.includes("friend invitations"));
});

test("OpenClaw curriculum and reward package include launch essentials", async () => {
  const curriculum = JSON.parse(await readFile("openclaw/curriculum.grade6.json", "utf8"));
  const rewards = JSON.parse(await readFile("openclaw/reward-menu.json", "utf8"));
  const reportTemplate = await readFile("openclaw/teacher-share-template.md", "utf8");

  assert.equal(curriculum.programLengthWeeks, 8);
  assert.ok(curriculum.optionalTracks.includes("Health & Wellness"));
  assert.ok(rewards.defaultRewards.some((reward) => reward.includes("device time")));
  assert.ok(reportTemplate.includes("Parent Approval"));
});
