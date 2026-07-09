// Grade 7 Study Skills — Enrichment Day 2.
// Topic: active notes (Cornell method).

export const grade7StudyDay2 = {
  id: "g7.study.e.d2",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 2,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Active notes with the Cornell method",
  topicTag: "cornell-notes",
  estimatedMinutes: 20,
  standardsRefs: ["CASEL.SelfManagement", "CCSS.ELA-LITERACY.W.7.9"],
  hook: "Copying the board word-for-word feels like taking notes, but your brain barely wakes up. Today you learn a system that turns notes into a self-quiz: the Cornell method.",
  miniLesson: [
    "Cornell notes split the page into three zones: a wide NOTES column on the right, a narrow CUES column on the left, and a SUMMARY strip along the bottom.",
    "During class you write in the notes column — but in your OWN words, not word-for-word. Rewording forces your brain to actually process the idea.",
    "After class you fill the cues column with questions or keywords, then cover the notes and answer them from memory. The bottom summary is 2–3 sentences of the whole page in your own words."
  ],
  workedExample: {
    prompt:
      "Priya just took a page of biology notes on photosynthesis. How does she turn a plain page into Cornell notes?",
    steps: [
      "Notes column: she rewrites the key ideas in her own words — 'plants turn sunlight + water + CO2 into sugar and oxygen.'",
      "Cues column: she adds questions that would test those notes — 'What 3 inputs does photosynthesis need?' and 'What are the 2 outputs?'",
      "Self-quiz: she covers the notes column and answers each cue question out loud from memory.",
      "Summary strip: 'Photosynthesis lets plants make their own food from light, using water and CO2 and releasing oxygen.'"
    ],
    answer: "Own-words notes on the right, quiz-style cues on the left, a short summary at the bottom — then self-test with the notes covered."
  },
  items: [
    {
      id: "g7.study.e.d2.q1",
      type: "multiple_choice",
      stem: "In the Cornell method, what goes in the narrow LEFT (cues) column?",
      choices: [
        "A word-for-word copy of the teacher's slides.",
        "Questions or keywords you use to self-quiz later.",
        "Random doodles to stay awake.",
        "The date and your name only."
      ],
      answerIndex: 1,
      explanation: "The cues column holds questions and keywords that let you cover the notes and test yourself — that's what makes Cornell notes 'active.'",
      hintLadder: [
        "The left column is what turns notes into a quiz.",
        "What could you cover the notes and answer FROM?",
        "Questions and keywords."
      ]
    },
    {
      id: "g7.study.e.d2.q2",
      type: "multiple_choice",
      stem: "Why is writing notes in your OWN words better than copying them word-for-word?",
      choices: [
        "Your handwriting looks neater.",
        "It fills the page faster.",
        "Copying is against the rules.",
        "Rewording forces your brain to process the idea, so it sticks better than copying on autopilot."
      ],
      answerIndex: 3,
      explanation: "Putting an idea in your own words requires understanding it first — that processing is what builds memory. Copying can happen with your mind switched off.",
      hintLadder: [
        "What does rewording make your brain do?",
        "It has to understand before it can reword.",
        "Processing the idea is what makes it stick."
      ],
      misconceptionsTargeted: ["copying-is-learning"]
    },
    {
      id: "g7.study.e.d2.q3",
      type: "multiple_choice",
      stem: "What belongs in the SUMMARY strip at the bottom of a Cornell page?",
      choices: [
        "2–3 sentences capturing the whole page's main idea in your own words.",
        "A word-for-word repeat of your longest note.",
        "A list of everything you didn't understand, left blank.",
        "Tomorrow's homework assignment."
      ],
      answerIndex: 0,
      explanation: "The summary strip is a short own-words recap of the whole page — writing it forces you to pull the main idea out of the details.",
      hintLadder: [
        "It's meant to capture the WHOLE page.",
        "Short and in your own words.",
        "2–3 summary sentences."
      ]
    },
    {
      id: "g7.study.e.d2.q4",
      type: "numeric",
      stem: "You wrote 6 pages of Cornell notes this week. For each page you write 4 cue questions. How many self-quiz questions do you now have to test yourself with?",
      answer: 24,
      tolerance: 0,
      unit: "questions",
      explanation: "6 pages × 4 cue questions per page = 24 questions.",
      hintLadder: [
        "Each page gives the same number of questions.",
        "Multiply pages by questions per page.",
        "6 × 4 = 24."
      ]
    },
    {
      id: "g7.study.e.d2.q5",
      type: "short_answer",
      stem:
        "Take any topic you learned recently and turn it into a mini Cornell note. Write one own-words note, two cue questions that would test it, and a one-sentence summary.",
      rubric: {
        level3: "A clear own-words note (not copied), two cue questions that genuinely test the note, and a one-sentence own-words summary.",
        level2: "Has the three parts, but the note is copied word-for-word OR the cues don't match the note.",
        level1: "Missing parts or just a copied sentence with no cues or summary."
      },
      exemplar:
        "Note: The water cycle moves water from oceans to the air (evaporation), to clouds (condensation), and back down (precipitation). Cues: 'What are the 3 main steps?' / 'What powers evaporation?' Summary: The water cycle recycles Earth's water through evaporation, condensation, and precipitation, driven by the sun.",
      hintLadder: [
        "Write one idea in your own words first.",
        "Turn that note into two test questions.",
        "Add a single summary sentence."
      ]
    }
  ],
  reflectionPrompt: "Cornell notes make you test yourself instead of just re-reading. Which class would benefit most from cue questions in the margin — and why that one?",
  misconceptionBank: [
    {
      id: "copying-is-learning",
      label: "Thinks copying = learning",
      description: "Believes that writing down exactly what's on the board means the material is learned, when copying can happen with the mind switched off.",
      coachMove: "Ask the student to close the copied notes and explain one idea aloud. If they can't, the copying didn't build understanding — rewording would have."
    }
  ]
};
