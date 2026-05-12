import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("PWA manifest exposes installable app metadata", async () => {
  const manifest = JSON.parse(await readFile("public/manifest.webmanifest", "utf8"));

  assert.equal(manifest.name, "Dr. Spark Academy");
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.start_url, "/");
  assert.ok(manifest.icons.some((icon) => icon.purpose === "maskable"));
  assert.ok(manifest.shortcuts.some((shortcut) => shortcut.url === "/#mission-mode"));
});

test("service worker includes app shell and offline fallback", async () => {
  const serviceWorker = await readFile("public/sw.js", "utf8");
  const offlinePage = await readFile("public/offline.html", "utf8");

  assert.ok(serviceWorker.includes("dr-spark-v1"));
  assert.ok(serviceWorker.includes("/offline.html"));
  assert.ok(offlinePage.includes("Dr. Spark Academy is offline"));
});
