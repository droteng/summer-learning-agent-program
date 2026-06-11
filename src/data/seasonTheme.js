// Seasonal palette tokens. The whole product re-skins by season so each
// stack (Summer, Fall, Winter, Spring) feels distinct to kids and parents
// while sharing the same component system. Mirrors the structure of
// subjectTheme.js but operates one layer up: subjects keep their identity
// colors, seasons set the page mood (backgrounds, hero gradients, accents).
//
// Keep dependency-free: the same tokens power CSS variables on the web,
// printable reports, and any future native wrapper.

export const SEASONS = Object.freeze({
  SUMMER: "summer",
  FALL: "fall",
  WINTER: "winter",
  SPRING: "spring"
});

// Each season exposes the same shape so callers can switch palettes with a
// single lookup. `cssVars` maps directly onto the --ls-* custom properties
// used by app/landing.css, so a season swap is a one-object change.
export const SEASON_THEMES = Object.freeze({
  [SEASONS.SUMMER]: {
    season: SEASONS.SUMMER,
    label: "Summer",
    tagline: "Adventure, energy, and the science of a healthy body.",
    emoji: "☀️",
    knowledgeThemes: ["Health & body systems", "Outdoor adventure", "Movement & balance"],
    accent: "#f97316",
    accentDeep: "#ea580c",
    secondary: "#0e9aa7",
    rose: "#ec4899",
    bgWarm: "#fef3c7",
    bg: "#fff7ed",
    ink: "#1f2937",
    cssVars: {
      "--ls-bg": "#fff7ed",
      "--ls-bg-warm": "#fef3c7",
      "--ls-accent": "#f97316",
      "--ls-accent-deep": "#ea580c",
      "--ls-teal": "#0e9aa7",
      "--ls-rose": "#ec4899"
    }
  },
  [SEASONS.FALL]: {
    season: SEASONS.FALL,
    label: "Fall",
    tagline: "Harvest, ecosystems, and the stories that shaped us.",
    emoji: "🍂",
    knowledgeThemes: ["Ecosystems & harvest", "History & civilizations", "Cause & effect"],
    accent: "#d97706",
    accentDeep: "#b45309",
    secondary: "#b91c1c",
    rose: "#c2410c",
    bgWarm: "#fde68a",
    bg: "#fffbeb",
    ink: "#3b2316",
    cssVars: {
      "--ls-bg": "#fffbeb",
      "--ls-bg-warm": "#fde68a",
      "--ls-accent": "#d97706",
      "--ls-accent-deep": "#b45309",
      "--ls-teal": "#9a3412",
      "--ls-rose": "#c2410c"
    }
  },
  [SEASONS.WINTER]: {
    season: SEASONS.WINTER,
    label: "Winter",
    tagline: "Energy, space, and the physics of a frozen world.",
    emoji: "❄️",
    knowledgeThemes: ["Physics & energy", "Space & astronomy", "Systems & invention"],
    accent: "#2563eb",
    accentDeep: "#1d4ed8",
    secondary: "#0891b2",
    rose: "#7c3aed",
    bgWarm: "#dbeafe",
    bg: "#f8fafc",
    ink: "#0f172a",
    cssVars: {
      "--ls-bg": "#f8fafc",
      "--ls-bg-warm": "#dbeafe",
      "--ls-accent": "#2563eb",
      "--ls-accent-deep": "#1d4ed8",
      "--ls-teal": "#0891b2",
      "--ls-rose": "#7c3aed"
    }
  },
  [SEASONS.SPRING]: {
    season: SEASONS.SPRING,
    label: "Spring",
    tagline: "Growth, biology, and the renewal of living things.",
    emoji: "🌱",
    knowledgeThemes: ["Biology & growth", "Plants & genetics", "Renewal & change"],
    accent: "#16a34a",
    accentDeep: "#15803d",
    secondary: "#0d9488",
    rose: "#db2777",
    bgWarm: "#dcfce7",
    bg: "#f0fdf4",
    ink: "#14532d",
    cssVars: {
      "--ls-bg": "#f0fdf4",
      "--ls-bg-warm": "#dcfce7",
      "--ls-accent": "#16a34a",
      "--ls-accent-deep": "#15803d",
      "--ls-teal": "#0d9488",
      "--ls-rose": "#db2777"
    }
  }
});

export function themeForSeason(season) {
  return SEASON_THEMES[season] ?? SEASON_THEMES[SEASONS.SUMMER];
}

// Returns the season whose program is "current" for a given date. Northern-
// hemisphere academic seasons; pass a Date to keep it testable (no implicit
// new Date() so callers control time).
export function currentSeasonForDate(date) {
  const month = date.getMonth(); // 0-11
  if (month >= 5 && month <= 7) return SEASONS.SUMMER; // Jun–Aug
  if (month >= 8 && month <= 10) return SEASONS.FALL; // Sep–Nov
  if (month === 11 || month <= 1) return SEASONS.WINTER; // Dec–Feb
  return SEASONS.SPRING; // Mar–May
}

// Inline CSS string for a <style> tag or style attribute, e.g. to re-skin a
// page wrapper by season without a stylesheet swap.
export function seasonCssVarString(season) {
  const theme = themeForSeason(season);
  return Object.entries(theme.cssVars)
    .map(([k, v]) => `${k}: ${v};`)
    .join(" ");
}
