// Grade 6 History / Civics — Week 1 (Explorer Mode), Day 5.
// Topic: cause and effect on a timeline.

export const grade6HistoryWeek1Day5 = {
  id: "g6.hist.w1.d5",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "Cause and effect",
  topicTag: "cause-effect",
  estimatedMinutes: 18,
  standardsRefs: ["C3.D2.His.14.6-8", "C3.D2.His.16.6-8"],
  hook: "One thing leads to another. Today you connect a cause to its effect on a timeline and check the order of events.",
  miniLesson: [
    "A cause is what made something happen. An effect is what changed because of the cause.",
    "Some causes are short-term (something that happened just before) and some are long-term (a slow build-up).",
    "Order matters: an effect always comes after its cause on a timeline. If two events are at the same time, neither caused the other directly."
  ],
  workedExample: {
    prompt: "Use this timeline:\n  - 1764: Britain passes new taxes on American colonies.\n  - 1773: Boston Tea Party.\n  - 1775: American Revolutionary War begins.\nWhat is one cause and one effect of the war beginning in 1775?",
    steps: [
      "Look earlier on the timeline for a cause. The taxes (1764) and Boston Tea Party (1773) both come before 1775.",
      "Pick a cause: rising disagreements over British taxes pressured the colonies.",
      "Look later for an effect: the war beginning leads to American independence in 1776, then the U.S. Constitution in 1787.",
      "One cause: tax disputes leading to colonial protests. One effect: a new country forming in 1776."
    ],
    answer: "Cause: tax disputes and protests like the Tea Party. Effect: independence and a new nation."
  },
  items: [
    {
      id: "g6.hist.w1.d5.q1",
      type: "multiple_choice",
      stem: "Which event came first?",
      choices: [
        "U.S. Civil War (1861)",
        "American Revolution begins (1775)",
        "U.S. Constitution signed (1787)",
        "Declaration of Independence (1776)"
      ],
      answerIndex: 1,
      explanation: "1775 is the earliest of the listed years. Order: 1775, 1776, 1787, 1861.",
      hintLadder: [
        "Compare the years next to each event.",
        "The earliest year comes first.",
        "1775 is the smallest number — that's the Revolution beginning."
      ]
    },
    {
      id: "g6.hist.w1.d5.q2",
      type: "multiple_choice",
      stem:
        "A village built a new well in 1820. By 1830, more children attended school. Which is the most likely cause?",
      choices: [
        "Children loved school more in 1830.",
        "The new well meant children spent less time fetching water and had more time for school.",
        "The school building was painted blue.",
        "1830 happened to be a school-friendly year."
      ],
      answerIndex: 1,
      explanation:
        "The well is a real change that took time off a daily chore — that freed up time for school. The other options don't explain the cause.",
      hintLadder: [
        "Which option connects the well directly to school attendance?",
        "Think about what children did before the well existed.",
        "Less time fetching water → more time for school."
      ],
      misconceptionsTargeted: ["picks-coincidence-as-cause"]
    },
    {
      id: "g6.hist.w1.d5.q3",
      type: "multiple_choice",
      stem:
        "Which is an example of a long-term cause (a slow build-up rather than a sudden event)?",
      choices: [
        "A volcano erupting on a Tuesday",
        "Years of drought slowly drying up a river",
        "A short rainstorm",
        "A bell ringing at the end of class"
      ],
      answerIndex: 1,
      explanation: "Drought over many years is a slow, building cause. The others happen suddenly.",
      hintLadder: [
        "Long-term means it built up over time.",
        "Skip the options that happen in seconds or hours.",
        "Drought across years is the slow change."
      ]
    },
    {
      id: "g6.hist.w1.d5.q4",
      type: "multiple_choice",
      stem:
        "Two events happened on the same day in different countries. Which is true?",
      choices: [
        "One must have caused the other.",
        "Neither directly caused the other if they happened at the same time.",
        "Both effects must come from the same cause.",
        "It doesn't matter when they happened."
      ],
      answerIndex: 1,
      explanation:
        "An effect must come after its cause. If two things happened simultaneously, one cannot have directly caused the other.",
      hintLadder: [
        "On a timeline, where does the effect always sit?",
        "If two events share the same moment, neither is earlier.",
        "Neither directly caused the other."
      ],
      misconceptionsTargeted: ["confuses-correlation-with-cause"]
    },
    {
      id: "g6.hist.w1.d5.q5",
      type: "short_answer",
      stem:
        "Pick a small event from your week (a cause). Name one effect that came from it. Use one sentence.",
      rubric: {
        level3: "Names a specific cause, names a specific effect, and the effect plausibly comes after and from the cause.",
        level2: "Names a cause and effect but the connection is weak or vague.",
        level1: "Lists two unrelated events or restates the same event twice."
      },
      exemplar:
        "On Tuesday I packed my bag the night before, so on Wednesday morning I left for school five minutes earlier and got my favorite seat.",
      hintLadder: [
        "Think of something you did first.",
        "What changed because of that?",
        "Use a linking word like \"so\" or \"because\" to connect the two."
      ]
    }
  ],
  stretch: {
    stem: "Some historians say a single event \"changed everything.\" Why is that usually too simple?",
    answer:
      "Big changes almost always have multiple causes — short-term triggers plus long-term buildups. Saying one event changed everything ignores the slower causes that made the trigger possible.",
    explanation:
      "Historians look for chains of causes. The famous trigger usually rides on top of years of conditions that made it possible."
  },
  reflectionPrompt: "Today you connected causes to effects. What's a cause from history you'd like to learn more about?",
  misconceptionBank: [
    {
      id: "picks-coincidence-as-cause",
      label: "Picks coincidence as cause",
      description: "Says one thing caused another just because they happened around the same time.",
      coachMove: "Ask: how exactly did the first event lead to the second? If you can't tell the story, it might be coincidence."
    },
    {
      id: "confuses-correlation-with-cause",
      label: "Confuses correlation with cause",
      description: "Assumes two simultaneous events must be related when they may not be.",
      coachMove: "Remember: a cause has to come before its effect on the timeline."
    }
  ]
};
