// Subject identity tokens. Every visual touchpoint that has a subject
// reads from this single file:
//   - color, accent: solid hex pairs (WCAG-AA accessible against white)
//   - soft, deep: tinted backgrounds for cards and full-bleed panels
//   - monogram: 1-letter fallback when illustrations would be too small
//   - iconSvg: inline SVG path snippet (uses currentColor) for headers,
//     mastery rows, quest cards, and printable reports
//   - patternSvg: decorative tiled background, used at low opacity behind
//     subject-themed panels to give each subject a "biome"
//
// Keep this dependency-free so the same module powers PDF reports, the
// child map, the parent dashboard, and any future native wrapper.

export const SUBJECT_THEMES = Object.freeze({
  Math: {
    token: "math",
    label: "Math",
    monogram: "M",
    color: "#0e9aa7",
    accent: "#0a6f78",
    soft: "#ccf4f7",
    deep: "#073d44",
    description: "Numbers, ratios, data, and reasoning.",
    keyword: "Numbers Quest",
    iconSvg:
      '<g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><circle cx="12" cy="7" r="1.6" fill="currentColor"/><circle cx="12" cy="17" r="1.6" fill="currentColor"/></g>',
    patternSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="currentColor" opacity="0.18"><text x="6" y="22" font-family="ui-rounded,system-ui,sans-serif" font-size="14" font-weight="700">7</text><text x="32" y="14" font-family="ui-rounded,system-ui,sans-serif" font-size="11" font-weight="700">+</text><text x="44" y="34" font-family="ui-rounded,system-ui,sans-serif" font-size="14" font-weight="700">π</text><text x="14" y="48" font-family="ui-rounded,system-ui,sans-serif" font-size="11" font-weight="700">×</text><text x="38" y="54" font-family="ui-rounded,system-ui,sans-serif" font-size="13" font-weight="700">3</text></g></svg>'
  },
  "ELA/Writing": {
    token: "ela",
    label: "ELA & Writing",
    monogram: "E",
    color: "#ef6c00",
    accent: "#b34700",
    soft: "#ffe2c2",
    deep: "#5b2300",
    description: "Reading, writing, voice, and revision.",
    keyword: "Story Builders",
    iconSvg:
      '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 0 1 2-2h6v17H5a2 2 0 0 0-2 2V5Z"/><path d="M21 5a2 2 0 0 0-2-2h-6v17h6a2 2 0 0 1 2 2V5Z"/><path d="M6 8h3M6 11h3M15 8h3M15 11h3"/></g>',
    patternSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.22"><line x1="6" y1="12" x2="22" y2="12"/><line x1="6" y1="18" x2="18" y2="18"/><line x1="32" y1="32" x2="50" y2="32"/><line x1="32" y1="38" x2="46" y2="38"/><circle cx="48" cy="14" r="3"/><circle cx="14" cy="48" r="3"/></g></svg>'
  },
  "Coding/Computer Science/AI": {
    token: "code",
    label: "Coding & AI",
    monogram: "C",
    color: "#7c3aed",
    accent: "#5b21b6",
    soft: "#e9defe",
    deep: "#3a126a",
    description: "Algorithms, debugging, and responsible AI.",
    keyword: "Code Crew",
    iconSvg:
      '<g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 8l-4 4 4 4"/><path d="M15 8l4 4-4 4"/></g>',
    patternSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="currentColor" opacity="0.2"><circle cx="10" cy="10" r="2"/><circle cx="30" cy="10" r="2"/><circle cx="50" cy="10" r="2"/><circle cx="20" cy="30" r="2"/><circle cx="40" cy="30" r="2"/><circle cx="10" cy="50" r="2"/><circle cx="30" cy="50" r="2"/><circle cx="50" cy="50" r="2"/></g><g fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.18"><path d="M10 10 L 50 50"/><path d="M50 10 L 10 50"/></g></svg>'
  },
  Science: {
    token: "sci",
    label: "Science",
    monogram: "S",
    color: "#16a34a",
    accent: "#0f7a36",
    soft: "#cdf2d8",
    deep: "#0a431f",
    description: "Inquiry, evidence, and engineering.",
    keyword: "Lab Crew",
    iconSvg:
      '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(-60 12 12)"/></g>',
    patternSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.22"><circle cx="14" cy="14" r="2.2" fill="currentColor"/><ellipse cx="14" cy="14" rx="8" ry="3" transform="rotate(45 14 14)"/><ellipse cx="14" cy="14" rx="8" ry="3" transform="rotate(-45 14 14)"/><circle cx="46" cy="46" r="2.2" fill="currentColor"/><ellipse cx="46" cy="46" rx="8" ry="3" transform="rotate(45 46 46)"/></g></svg>'
  },
  "History/Civics": {
    token: "hist",
    label: "History & Civics",
    monogram: "H",
    color: "#d97706",
    accent: "#9a5408",
    soft: "#ffe4b8",
    deep: "#5a2d04",
    description: "Timelines, leadership, and citizenship.",
    keyword: "Time Voyagers",
    iconSvg:
      '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"/><path d="M5 6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h12"/><path d="M9 12h6M9 15h4"/></g>',
    patternSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="none" stroke="currentColor" stroke-width="1.6" opacity="0.22" stroke-linecap="round"><path d="M8 14 q 8 -8 16 0 t 16 0 t 16 0"/><path d="M8 30 q 8 -8 16 0 t 16 0 t 16 0"/><path d="M8 46 q 8 -8 16 0 t 16 0 t 16 0"/></g></svg>'
  },
  "World/Current Affairs": {
    token: "world",
    label: "World Affairs",
    monogram: "W",
    color: "#2563eb",
    accent: "#1d4ed8",
    soft: "#d2e0ff",
    deep: "#1e2f6e",
    description: "Maps, news literacy, and civil discussion.",
    keyword: "Globe Trotters",
    iconSvg:
      '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><line x1="3" y1="12" x2="21" y2="12"/></g>',
    patternSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.22"><circle cx="20" cy="20" r="10"/><ellipse cx="20" cy="20" rx="4" ry="10"/><line x1="10" y1="20" x2="30" y2="20"/><circle cx="48" cy="46" r="2" fill="currentColor"/></g></svg>'
  },
  "Financial Literacy": {
    token: "fin",
    label: "Financial Literacy",
    monogram: "$",
    color: "#059669",
    accent: "#065f46",
    soft: "#d1fae5",
    deep: "#064e3b",
    description: "Needs vs wants, saving, smart spending, and small business.",
    keyword: "Money Smart",
    enrichment: true,
    iconSvg:
      '<g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 4 V20"/><path d="M16 8 a4 3 0 1 0 -4 -3 v14 a4 3 0 1 0 -4 -3"/></g>',
    patternSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="currentColor" opacity="0.2" font-family="ui-rounded,system-ui,sans-serif" font-size="14" font-weight="700"><text x="8" y="22">$</text><text x="36" y="18">$</text><text x="22" y="44">$</text><text x="44" y="48">$</text></g></svg>'
  },
  "Media Literacy": {
    token: "media",
    label: "Media Literacy",
    monogram: "M",
    color: "#db2777",
    accent: "#9d174d",
    soft: "#fce7f3",
    deep: "#500724",
    description: "Sources, AI-generated content, ads, misinformation, and online safety.",
    keyword: "Signal Spotters",
    enrichment: true,
    iconSvg:
      '<g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12 l2 2 l4 -4"/></g>',
    patternSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.22"><circle cx="16" cy="16" r="6"/><path d="M14 16 l2 2 l4 -4"/><circle cx="44" cy="44" r="6"/><path d="M42 44 l2 2 l4 -4"/></g></svg>'
  },
  "Study Skills": {
    token: "study",
    label: "Study Skills",
    monogram: "S",
    color: "#4338ca",
    accent: "#312e81",
    soft: "#e0e7ff",
    deep: "#1e1b4b",
    description: "Focus, notes, memory, planning, and goal-setting.",
    keyword: "Mind Lab",
    enrichment: true,
    iconSvg:
      '<g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7 H20 V19 H4 Z"/><path d="M12 4 V7"/><path d="M8 11 H16"/><path d="M8 15 H13"/></g>',
    patternSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.22"><rect x="8" y="10" width="14" height="18" rx="2"/><line x1="12" y1="16" x2="20" y2="16"/><line x1="12" y1="20" x2="18" y2="20"/><rect x="38" y="36" width="14" height="14" rx="2"/><line x1="42" y1="42" x2="50" y2="42"/></g></svg>'
  }
});

export const SUBJECT_ORDER = [
  "Math",
  "ELA/Writing",
  "Coding/Computer Science/AI",
  "Science",
  "History/Civics",
  "World/Current Affairs"
];

export function themeForSubject(subject) {
  return SUBJECT_THEMES[subject] ?? null;
}

export function tokenForSubject(subject) {
  return SUBJECT_THEMES[subject]?.token ?? "default";
}
