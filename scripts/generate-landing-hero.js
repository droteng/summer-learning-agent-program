#!/usr/bin/env node
// One-shot generator for the landing-page hero illustration.
//
// Usage:
//   export $(grep GOOGLE_API_KEY .env.local | xargs)
//   node scripts/generate-landing-hero.js
//
// Writes public/landing-hero.jpg. Re-run any time you want a fresh image.

import { writeFile } from "node:fs/promises";
import { createGoogleImageProvider } from "../src/integrations/imageProviders/google.js";

if (!process.env.GOOGLE_API_KEY) {
  console.error("Missing GOOGLE_API_KEY in env. Pull from Vercel or .env.local first.");
  process.exit(1);
}

const provider = createGoogleImageProvider({ apiKey: process.env.GOOGLE_API_KEY });

const prompt = [
  "Bright, vibrant, age-appropriate cartoon illustration for a kids' education website.",
  "Scene: a smiling parent and two middle-school children (around age 11-12) sitting together at a sunny kitchen table.",
  "They are leaning over a tablet that glows with colorful learning content — graphs, a science diagram, a small storybook.",
  "Around them on the table: a fresh apple, a glass of water, and a notebook with a star sticker.",
  "The parent is pointing at something on the screen; one child laughs, the other thinks hard with a pencil in hand.",
  "Soft warm morning light from a window in the background. A bookshelf with a few colorful book spines is faintly visible behind them.",
  "Style: friendly modern cartoon, warm vibrant colors (teal, amber, coral), clean rounded shapes, no photorealism, no realistic faces, no text or logos in the image.",
  "Diverse and welcoming. Composition: 16:9 wide landscape, characters slightly left of center, plenty of negative space on the right for headline text overlay."
].join(" ");

console.log("Generating landing hero (≈$0.04 via Gemini 2.5 Flash Image)...");
const result = await provider.generate({
  prompt,
  aspectRatio: "16:9"
});

const base64 = result.url.split(",")[1];
const buffer = Buffer.from(base64, "base64");
await writeFile("public/landing-hero.jpg", buffer);
console.log(`\n✓ Wrote public/landing-hero.jpg (${(buffer.length / 1024).toFixed(0)} KB)`);
console.log(`  Provider: ${result.provider}, latency ${result.latencyMs}ms`);
