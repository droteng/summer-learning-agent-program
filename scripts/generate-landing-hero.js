#!/usr/bin/env node
// One-shot generator for the landing-page hero illustration.
//
// Tries Replicate Flux first (best for photoreal), then Google Gemini as
// fallback. Writes public/landing-hero.jpg. Re-run any time you want a
// fresh image.
//
// Usage (Replicate, recommended — photoreal):
//   REPLICATE_API_TOKEN="r8_..." FLUX_VARIANT=pro \
//     node scripts/generate-landing-hero.js
//
// Usage (Google Gemini, requires paid tier):
//   GOOGLE_API_KEY="AIza..." node scripts/generate-landing-hero.js

import { writeFile } from "node:fs/promises";
import { createFluxImageProvider } from "../src/integrations/imageProviders/flux.js";
import { createGoogleImageProvider } from "../src/integrations/imageProviders/google.js";

const prompt = [
  "Photorealistic editorial photograph for a kids' education website landing page.",
  "Scene: a smiling parent and two middle-school children (around age 11-12) sitting together at a sunny kitchen table.",
  "They are leaning over a tablet that displays colorful learning content — a clean chart, a small science diagram.",
  "On the table: a fresh red apple, a glass of water, and a notebook with a small star sticker.",
  "The parent is gently pointing at something on the screen; the children look engaged — one laughing, one thinking with a pencil in hand.",
  "Soft warm morning light streams through a window in the background. A subtle bookshelf with a few colorful book spines is visible behind them.",
  "Style: photo-realistic, modern editorial photography, warm natural color palette (cream, amber, soft teal), shallow depth of field with the family in focus.",
  "Diverse family — show warmth and connection. No logos, no readable on-screen text on the tablet.",
  "Composition: 16:9 wide landscape, family slightly left of center, plenty of negative space on the right for headline text overlay."
].join(" ");

async function tryProvider(name, factory) {
  try {
    const provider = factory();
    if (!provider) return null;
    console.log(`Trying ${name}...`);
    const result = await provider.generate({ prompt, aspectRatio: "16:9" });
    return result;
  } catch (err) {
    console.log(`  ${name} failed: ${err?.message ?? err}`);
    return null;
  }
}

let result = await tryProvider("Replicate Flux", () => {
  if (!process.env.REPLICATE_API_TOKEN) return null;
  return createFluxImageProvider({
    apiKey: process.env.REPLICATE_API_TOKEN,
    variant: process.env.FLUX_VARIANT || "pro"
  });
});

if (!result) {
  result = await tryProvider("Google Gemini", () => {
    if (!process.env.GOOGLE_API_KEY) return null;
    return createGoogleImageProvider({ apiKey: process.env.GOOGLE_API_KEY });
  });
}

if (!result) {
  console.error("\n✗ No provider produced an image. Set REPLICATE_API_TOKEN or GOOGLE_API_KEY (paid tier).");
  process.exit(1);
}

// Flux returns an HTTPS URL; Google returns a data URI.
let buffer;
if (result.url.startsWith("data:")) {
  const base64 = result.url.split(",")[1];
  buffer = Buffer.from(base64, "base64");
} else {
  const res = await fetch(result.url);
  if (!res.ok) {
    console.error(`Failed to download image from ${result.url}: ${res.status}`);
    process.exit(1);
  }
  buffer = Buffer.from(await res.arrayBuffer());
}

await writeFile("public/landing-hero.jpg", buffer);
console.log(`\n✓ Wrote public/landing-hero.jpg (${(buffer.length / 1024).toFixed(0)} KB)`);
console.log(`  Provider: ${result.provider}, latency ${result.latencyMs}ms`);
