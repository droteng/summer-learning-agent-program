// Subject color tokens. The whole product reuses these so a "Math" element
// looks the same in the dashboard, quest map, mastery bar, and printable
// report. Hex colors are paired with WCAG-AA-compatible accent text colors.

export const SUBJECT_THEMES = Object.freeze({
  Math: {
    token: "math",
    label: "Math",
    monogram: "M",
    color: "#0e9aa7",
    accent: "#066872",
    soft: "#e0f7fa",
    description: "Numbers, ratios, data, and reasoning."
  },
  "ELA/Writing": {
    token: "ela",
    label: "ELA & Writing",
    monogram: "E",
    color: "#ef6c00",
    accent: "#b34700",
    soft: "#fff4e6",
    description: "Reading, writing, voice, and revision."
  },
  "Coding/Computer Science/AI": {
    token: "code",
    label: "Coding & AI",
    monogram: "C",
    color: "#7c3aed",
    accent: "#5b21b6",
    soft: "#f3e8ff",
    description: "Algorithms, debugging, and responsible AI."
  },
  Science: {
    token: "sci",
    label: "Science",
    monogram: "S",
    color: "#16a34a",
    accent: "#0f7a36",
    soft: "#e6f7ec",
    description: "Inquiry, evidence, and engineering."
  },
  "History/Civics": {
    token: "hist",
    label: "History & Civics",
    monogram: "H",
    color: "#d97706",
    accent: "#9a5408",
    soft: "#fff3df",
    description: "Timelines, leadership, and citizenship."
  },
  "World/Current Affairs": {
    token: "world",
    label: "World Affairs",
    monogram: "W",
    color: "#2563eb",
    accent: "#1d4ed8",
    soft: "#e6efff",
    description: "Maps, news literacy, and civil discussion."
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
