// Deterministic mock image provider.
//
// Returns a child-friendly SVG illustration based on the prompt's subject
// theme. Used when:
//   - no real image-generation API key is configured (free tier)
//   - the monthly image-spend budget is exhausted
//   - all real providers errored
//
// The output is a data URI so the caller can store / render it without
// hitting an external bucket. Real providers return an HTTP URL; the
// imageAgent normalizes both into the same shape.

const SUBJECT_PALETTES = {
  Math: { fg: "#0e9aa7", soft: "#ccf4f7", accent: "#0a6f78", symbol: "Σ" },
  "ELA/Writing": { fg: "#ef6c00", soft: "#ffe2c2", accent: "#b34700", symbol: "A" },
  "Coding/Computer Science/AI": { fg: "#7c3aed", soft: "#e9defe", accent: "#5b21b6", symbol: "{ }" },
  Science: { fg: "#16a34a", soft: "#cdf2d8", accent: "#0f7a36", symbol: "🜨" },
  "History/Civics": { fg: "#d97706", soft: "#ffe4b8", accent: "#9a5408", symbol: "§" },
  "World/Current Affairs": { fg: "#2563eb", soft: "#d2e0ff", accent: "#1d4ed8", symbol: "◐" },
  "Financial Literacy": { fg: "#059669", soft: "#d1fae5", accent: "#065f46", symbol: "$" },
  "Media Literacy": { fg: "#db2777", soft: "#fce7f3", accent: "#9d174d", symbol: "◎" },
  "Study Skills": { fg: "#4338ca", soft: "#e0e7ff", accent: "#312e81", symbol: "✎" },
  default: { fg: "#6366f1", soft: "#e0e7ff", accent: "#4338ca", symbol: "?" }
};

export function createMockImageProvider({ now = () => Date.now() } = {}) {
  return {
    name: "mock",
    async generate(req) {
      const t0 = now();
      const palette = SUBJECT_PALETTES[req.subject] ?? SUBJECT_PALETTES.default;
      const seed = hashString(`${req.prompt}|${req.subject ?? ""}|${req.aspectRatio ?? "1:1"}`);
      const svg = renderPlaceholderSvg({ palette, seed, prompt: req.prompt });
      const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
      return {
        url: dataUri,
        provider: "mock",
        model: "mock:svg",
        widthPx: 1024,
        heightPx: 1024,
        latencyMs: Math.max(0, now() - t0),
        estimatedCostCents: 0,
        fallback: true,
        prompt: req.prompt,
        seed
      };
    }
  };
}

function renderPlaceholderSvg({ palette, seed, prompt }) {
  // Mix in seed-derived offsets so the placeholder isn't identical for
  // every prompt. Subtle enough that the same mission always renders the
  // same image (deterministic caching).
  const ox = (seed % 60) - 30;
  const oy = ((seed >> 8) % 60) - 30;
  const angle = (seed >> 16) % 30;
  const label = (prompt ?? "").slice(0, 40);
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">',
    `<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">`,
    `<stop offset="0%" stop-color="${palette.soft}"/>`,
    `<stop offset="100%" stop-color="#ffffff"/>`,
    "</linearGradient></defs>",
    `<rect width="1024" height="1024" fill="url(#bg)"/>`,
    `<g transform="translate(${512 + ox} ${512 + oy}) rotate(${angle})">`,
    `<circle r="320" fill="${palette.fg}" opacity="0.18"/>`,
    `<circle r="200" fill="${palette.fg}" opacity="0.32"/>`,
    `<circle r="80" fill="${palette.accent}" opacity="0.7"/>`,
    "</g>",
    `<text x="512" y="540" text-anchor="middle" font-family="ui-rounded, system-ui, sans-serif" font-size="260" font-weight="800" fill="${palette.accent}" opacity="0.85">${escapeXml(palette.symbol)}</text>`,
    `<text x="512" y="900" text-anchor="middle" font-family="ui-rounded, system-ui, sans-serif" font-size="36" font-weight="600" fill="${palette.accent}" opacity="0.75">${escapeXml(label)}</text>`,
    "</svg>"
  ].join("");
}

function escapeXml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h >>> 0;
}
