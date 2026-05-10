import assert from "node:assert/strict";
import test from "node:test";
import { SUBJECT_ORDER, SUBJECT_THEMES, themeForSubject, tokenForSubject } from "../src/data/subjectTheme.js";
import { coreSubjects } from "../src/data/grade6Curriculum.js";

test("every Grade 6 core subject has a theme entry", () => {
  for (const subject of coreSubjects) {
    const theme = themeForSubject(subject);
    assert.ok(theme, `missing theme for ${subject}`);
    assert.ok(theme.color.startsWith("#"));
    assert.ok(theme.token.length > 0);
    assert.ok(theme.label.length > 0);
    assert.ok(theme.monogram.length === 1);
  }
});

test("subject tokens are unique so CSS data-subject scoping does not collide", () => {
  const tokens = Object.values(SUBJECT_THEMES).map((theme) => theme.token);
  assert.equal(new Set(tokens).size, tokens.length);
});

test("subject order covers every theme", () => {
  assert.equal(SUBJECT_ORDER.length, Object.keys(SUBJECT_THEMES).length);
  for (const subject of SUBJECT_ORDER) {
    assert.ok(SUBJECT_THEMES[subject], `subject ${subject} missing from SUBJECT_THEMES`);
  }
});

test("tokenForSubject returns a default for unknown subjects", () => {
  assert.equal(tokenForSubject("Astrology"), "default");
});

test("hex colors are well-formed", () => {
  for (const theme of Object.values(SUBJECT_THEMES)) {
    assert.match(theme.color, /^#[0-9a-fA-F]{6}$/);
    assert.match(theme.accent, /^#[0-9a-fA-F]{6}$/);
    assert.match(theme.soft, /^#[0-9a-fA-F]{6}$/);
    assert.match(theme.deep, /^#[0-9a-fA-F]{6}$/);
  }
});

test("each theme has an inline SVG icon and a tileable pattern", () => {
  for (const theme of Object.values(SUBJECT_THEMES)) {
    assert.ok(theme.iconSvg.length > 0, `${theme.label} missing iconSvg`);
    assert.ok(theme.iconSvg.includes("currentColor"), `${theme.label} icon must use currentColor for theming`);
    assert.ok(theme.patternSvg.startsWith("<svg"), `${theme.label} patternSvg must be standalone svg`);
    assert.ok(theme.keyword.length > 0, `${theme.label} missing keyword`);
  }
});
