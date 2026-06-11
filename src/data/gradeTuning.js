export const gradeBands = {
  4: {
    label: "Grade 4 preview",
    status: "preview",
    tuning: {
      reading: "Use short, concrete passages with strong picture support and pre-taught vocabulary.",
      math: "Focus on place value, multi-digit operations, simple fractions, and hands-on models.",
      writing: "Use sentence starters, single-paragraph structure, and lots of worked examples.",
      coding: "Use unplugged algorithms, sequencing, and simple block-style logic."
    }
  },
  5: {
    label: "Grade 5 preview",
    status: "preview",
    tuning: {
      reading: "Use shorter passages, concrete examples, and more vocabulary support.",
      math: "Focus on whole numbers, fractions, decimals, visual models, and step-by-step reasoning.",
      writing: "Use paragraph frames, topic sentences, and simple evidence practice.",
      coding: "Use everyday algorithms, patterns, and block-style pseudocode."
    }
  },
  6: {
    label: "Grade 6 launch",
    status: "launch",
    tuning: {
      reading: "Use on-grade informational and narrative prompts with evidence.",
      math: "Use ratios, fractions, decimals, data, expressions, and real-world problem solving.",
      writing: "Build claim, evidence, explanation, revision, and short research habits.",
      coding: "Use algorithms, conditionals, loops, debugging, and responsible AI basics."
    }
  },
  7: {
    label: "Grade 7 preview",
    status: "preview",
    tuning: {
      reading: "Use longer evidence chains, source comparison, and more independent annotation.",
      math: "Introduce proportional relationships, integers, expressions, probability, and data inference.",
      writing: "Expect stronger claims, counterpoints, transitions, and multi-paragraph structure.",
      coding: "Use functions, data structures, debugging traces, and AI evaluation prompts."
    }
  },
  8: {
    label: "Grade 8 preview",
    status: "preview",
    tuning: {
      reading: "Use high-school readiness texts, argument analysis, and source credibility checks.",
      math: "Introduce linear relationships, systems thinking, exponents, geometry, and modeling.",
      writing: "Prepare for thesis-driven writing, synthesis, and polished presentations.",
      coding: "Use project architecture, functions, testing, and ethical AI critique."
    }
  }
};

export function getGradeTuning(gradeLevel = 6) {
  return gradeBands[gradeLevel] ?? gradeBands[6];
}

export function tuneCoreSubjectsForGrade(coreSubjects, gradeLevel = 6) {
  const gradeTuning = getGradeTuning(gradeLevel);

  return coreSubjects.map((subject) => ({
    name: subject,
    gradeLevel,
    gradeBand: gradeTuning.label,
    guidance: chooseSubjectGuidance({ subject, gradeTuning })
  }));
}

function chooseSubjectGuidance({ subject, gradeTuning }) {
  if (subject.includes("Math")) {
    return gradeTuning.tuning.math;
  }

  if (subject.includes("ELA") || subject.includes("Writing")) {
    return gradeTuning.tuning.writing;
  }

  if (subject.includes("Coding") || subject.includes("AI")) {
    return gradeTuning.tuning.coding;
  }

  if (subject.includes("World") || subject.includes("History")) {
    return gradeTuning.tuning.reading;
  }

  return "Use age-appropriate examples, vocabulary support, projects, and parent-visible checks.";
}
