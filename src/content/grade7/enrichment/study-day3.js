// Grade 7 Study Skills — Enrichment Day 3.
// Topic: spaced retrieval + interleaving.

export const grade7StudyDay3 = {
  id: "g7.study.e.d3",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 3,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Spaced retrieval and interleaving",
  topicTag: "spaced-retrieval",
  estimatedMinutes: 21,
  standardsRefs: ["CASEL.SelfManagement"],
  hook: "Cramming the night before feels like it works — right up until you forget it by Monday. Today you learn two techniques that beat cramming almost every time: spaced retrieval and interleaving.",
  miniLesson: [
    "Retrieval practice means testing yourself — pulling an answer OUT of memory — instead of re-reading it back IN. The effort of retrieving is what strengthens the memory.",
    "Spaced retrieval means spreading those self-tests out over time: review on day 1, then day 3, then day 7. Reviewing just as a memory starts to fade makes it stick far longer than massing it all in one night.",
    "Interleaving means mixing different problem types in one session instead of doing 20 of the same in a row (that's 'blocking'). Mixing forces you to figure out WHICH method to use — the exact skill a test demands."
  ],
  workedExample: {
    prompt:
      "Sam has a math unit test in 8 days covering fractions, decimals, and percents. Compare a cramming plan to a spaced, interleaved plan.",
    steps: [
      "Cramming plan: do nothing until day 7, then grind 3 hours the night before. It feels productive but most fades fast.",
      "Spaced plan: short self-tests on day 1, day 3, and day 7 — each one retrieves the material just as it starts fading.",
      "Interleave inside each session: mix a fractions problem, then a percents problem, then a decimals problem — not 15 of one type in a row.",
      "Result: less total time, and the mixed practice trains Sam to pick the right method under test conditions."
    ],
    answer: "Space the self-tests across days 1, 3, and 7, and interleave the problem types within each session."
  },
  items: [
    {
      id: "g7.study.e.d3.q1",
      type: "multiple_choice",
      stem: "What is RETRIEVAL PRACTICE?",
      choices: [
        "Testing yourself by pulling answers out of memory, instead of re-reading them.",
        "Re-reading your notes three times in a row.",
        "Highlighting the textbook in two colors.",
        "Listening to a recording of the lesson while you sleep."
      ],
      answerIndex: 0,
      explanation: "Retrieval practice is the act of pulling information OUT of memory (self-testing). The effort of retrieving is what strengthens the memory — re-reading doesn't require that effort.",
      hintLadder: [
        "'Retrieval' means pulling something OUT.",
        "Which option makes you produce the answer yourself?",
        "Testing yourself from memory."
      ],
      misconceptionsTargeted: ["rereading-equals-studying"]
    },
    {
      id: "g7.study.e.d3.q2",
      type: "multiple_choice",
      stem: "Why does SPACING your reviews (day 1, day 3, day 7) beat doing them all in one night?",
      choices: [
        "It uses fewer sheets of paper.",
        "Your teacher can see you studied more days.",
        "Reviewing just as a memory starts to fade makes retrieving it harder — and harder retrieval builds stronger memory.",
        "Spaced reviews are always shorter in total."
      ],
      answerIndex: 2,
      explanation: "Spacing lets the memory partly fade between reviews, so each retrieval takes more effort. That extra effort is exactly what makes the memory more durable.",
      hintLadder: [
        "Think about what happens to the memory BETWEEN reviews.",
        "It fades a little, making recall harder.",
        "Harder recall = stronger, longer-lasting memory."
      ],
      misconceptionsTargeted: ["cramming-works"]
    },
    {
      id: "g7.study.e.d3.q3",
      type: "multiple_choice",
      stem: "Which practice session uses INTERLEAVING?",
      choices: [
        "20 fraction problems, then 20 decimal problems, then 20 percent problems.",
        "Only the problem type you already find easiest.",
        "Re-copying the worked examples from the book.",
        "A mix: a fraction problem, then a percent, then a decimal, then a fraction again."
      ],
      answerIndex: 3,
      explanation: "Interleaving mixes different problem types together. Doing 20 of one type in a row is 'blocking'; the mixed session forces you to decide which method each problem needs.",
      hintLadder: [
        "Interleaving means MIXING types, not grouping them.",
        "Which option jumps between different problem types?",
        "The one that alternates fraction / percent / decimal."
      ]
    },
    {
      id: "g7.study.e.d3.q4",
      type: "numeric",
      stem: "You do spaced reviews on day 1, day 3, and day 7. How many days pass between your 2nd review and your 3rd review?",
      answer: 4,
      tolerance: 0,
      unit: "days",
      explanation: "The 2nd review is day 3 and the 3rd review is day 7, so 7 − 3 = 4 days pass between them.",
      hintLadder: [
        "The 2nd review is on day 3; the 3rd is on day 7.",
        "Subtract the earlier day from the later day.",
        "7 − 3 = 4."
      ]
    },
    {
      id: "g7.study.e.d3.q5",
      type: "short_answer",
      stem:
        "Pick something you're learning that has more than one type of problem or idea. Write a spaced, interleaved study plan: name the review days AND explain how you'll mix the types.",
      rubric: {
        level3: "Names specific review days that are spaced apart, AND describes mixing at least two different types/topics within a session (true interleaving).",
        level2: "Has spaced days OR interleaving, but not both clearly.",
        level1: "A single cram session, or all one problem type."
      },
      exemplar:
        "Content: Spanish verb tenses (present, past, future). Review on day 1, day 3, and day 6. In each session I'll interleave: conjugate one present-tense verb, then one past, then one future, then loop — not all present tense in a block.",
      hintLadder: [
        "Pick a topic with more than one type of problem.",
        "Choose review days that are spread apart.",
        "Explain how you'll mix the types in each session."
      ]
    }
  ],
  reflectionPrompt: "You learned why cramming feels like it works but doesn't last. What's one test you crammed for and forgot — and how would spaced retrieval have changed that?",
  misconceptionBank: [
    {
      id: "cramming-works",
      label: "Believes cramming is effective",
      description: "Thinks a long night-before session is the best use of study time, because it feels productive and the material feels familiar in the moment.",
      coachMove: "Ask what they remember from last month's crammed test. Familiarity the night before isn't the same as memory a week later — spacing is what makes it last."
    },
    {
      id: "rereading-equals-studying",
      label: "Equates re-reading with studying",
      description: "Counts passive re-reading as real study, even though it doesn't require pulling anything out of memory.",
      coachMove: "Have them close the book and write what they remember. The gap between what they re-read and what they can retrieve is the whole point of retrieval practice."
    }
  ]
};
