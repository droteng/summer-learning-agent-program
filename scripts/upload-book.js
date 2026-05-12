#!/usr/bin/env node
// One-shot upload of the Founder's Book PDF to Vercel Blob.
//
// Usage:
//   1. Get a Read/Write token from Vercel:
//      https://vercel.com/genak/learning-squad/stores → Create Blob store
//      → connect to project → copy the BLOB_READ_WRITE_TOKEN value
//   2. Export it locally:
//      export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."
//   3. Run:
//      node scripts/upload-book.js "/absolute/path/to/Leo And The Game Squad.pdf"
//   4. Copy the printed URL and set it as BOOK_PDF_BLOB_URL in Vercel
//      project env vars (Production).
//
// Re-running with a new file replaces the existing book.

import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import { put } from "@vercel/blob";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/upload-book.js <path-to-pdf>");
  process.exit(1);
}
if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error(
    "Missing BLOB_READ_WRITE_TOKEN. Get one from Vercel → Storage → your Blob store → connect to project."
  );
  process.exit(1);
}

const data = await readFile(file);
const name = basename(file);
const result = await put(`books/${name}`, data, {
  access: "public",
  contentType: "application/pdf",
  addRandomSuffix: false,
  allowOverwrite: true
});

console.log("\n✓ Uploaded.");
console.log(`  URL: ${result.url}`);
console.log("\nNext: set this as BOOK_PDF_BLOB_URL in Vercel:");
console.log(`  vercel env add BOOK_PDF_BLOB_URL production`);
console.log(`  (paste the URL above)`);
