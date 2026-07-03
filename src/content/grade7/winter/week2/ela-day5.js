// Grade 7 ELA/Writing — Winter Expedition, Week 2 (Energy & Matter), Day 5.
// Topic: informational writing — grade-7 depth: multi-paragraph explanatory report
// with a controlling idea, cited data as evidence, analysis, and cohesive transitions.

export const winterG7ElaW2D5 = {
  id: "g7.winter.ela.w2.d5",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Informational writing: a multi-paragraph explanatory report of an experiment",
  topicTag: "explain-experiment",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.2", "CCSS.W.7.2.B"],
  hook: "You ran a heat-and-cold investigation this week. A grade-7 report does more than list steps — it opens with a controlling idea, uses your data as EVIDENCE, and explains what the numbers MEAN. Today you turn raw results into an analytical, multi-paragraph explanation any reader could follow and interpret.",
  miniLesson: [
    "A strong informational report is organized around a CONTROLLING IDEA (a thesis about what your investigation shows), then develops it across multiple paragraphs — introduction, methods, results, and analysis — so the reader follows one clear line of reasoning, not a random list.",
    "Data become EVIDENCE only when you cite them precisely AND analyze them. Don't just state 'the cocoa cooled 25 degrees'; explain what it reveals: it cooled fastest in the first two minutes, which suggests the largest temperature gap drives the fastest heat loss.",
    "Cohesion comes from transitions that show relationships — not just sequence (first, next) but cause and contrast (as a result, however, in contrast, this suggests). Precise measurements plus these analytical transitions make writing both clear and insightful."
  ],
  workedExample: {
    prompt: "Turn this flat sentence into an analytical result-with-evidence sentence: 'The cocoa got colder.'",
    steps: [
      "Add the precise data: from 82 degrees C to 57 degrees C over 10 minutes.",
      "State the pattern in the data: most of the drop happened early.",
      "Add analysis of what it means, with an analytical transition.",
      "Result: 'The cocoa cooled from 82 degrees C to 57 degrees C over 10 minutes; because most of that 25-degree drop occurred in the first three minutes, the data suggest that the larger the temperature gap, the faster heat is lost.'"
    ],
    answer: "The cocoa cooled from 82 degrees C to 57 degrees C over 10 minutes; because most of that 25-degree drop occurred in the first three minutes, the data suggest that a larger temperature gap drives faster heat loss."
  },
  items: [
    {
      id: "g7.winter.ela.w2.d5.q1",
      type: "multiple_choice",
      stem: "What is the role of a CONTROLLING IDEA in a multi-paragraph informational report?",
      choices: [
        "It argues an opinion the reader should adopt",
        "It states the main point the report develops, so every paragraph supports one clear line of reasoning",
        "It is a fun fact placed at the very end",
        "It lists the materials used in the experiment"
      ],
      answerIndex: 1,
      explanation: "The controlling idea is the central point (thesis) an informational report develops; each paragraph should connect back to it, keeping the whole piece focused and coherent.",
      hintLadder: [
        "What holds a multi-paragraph report together?",
        "Informational writing informs around one central point.",
        "The controlling idea is the main point every paragraph supports."
      ],
      misconceptionsTargeted: ["no-controlling-idea"]
    },
    {
      id: "g7.winter.ela.w2.d5.q2",
      type: "multiple_choice",
      stem: "Which sentence best turns DATA into EVIDENCE by adding analysis?",
      choices: [
        "The water changed temperature during the test.",
        "The water dropped from 20 degrees C to 4 degrees C in 15 minutes, and because the fastest cooling came early, the data suggest the biggest temperature gap caused the fastest heat loss.",
        "The water got pretty cold after a while, honestly.",
        "I measured the water a few times and wrote it down."
      ],
      answerIndex: 1,
      explanation: "Evidence pairs precise data with analysis of what it means. Option B cites exact numbers AND interprets the pattern, while the others are vague or purely procedural.",
      hintLadder: [
        "Which sentence includes both exact numbers AND what they mean?",
        "Data alone is not evidence until you interpret it.",
        "The one that cites numbers and explains the pattern."
      ],
      misconceptionsTargeted: ["data-without-analysis"]
    },
    {
      id: "g7.winter.ela.w2.d5.q3",
      type: "multiple_choice",
      stem: "Which transition word best signals a CAUSE-AND-EFFECT or interpretive relationship (not just sequence) in an analytical report?",
      choices: [
        "First",
        "Next",
        "As a result",
        "Meanwhile"
      ],
      answerIndex: 2,
      explanation: "'As a result' signals cause and effect, linking evidence to a conclusion. 'First,' 'next,' and 'meanwhile' only signal time order, not analysis.",
      hintLadder: [
        "Which word shows one thing CAUSING another?",
        "Sequence words only tell the order of steps.",
        "'As a result' links a cause to its effect."
      ]
    },
    {
      id: "g7.winter.ela.w2.d5.q4",
      type: "short_answer",
      stem: "Write a short analytical RESULTS paragraph (3-4 sentences) for a cooling experiment. Include precise data (starting and ending temperature, time), a pattern you noticed, and one sentence of analysis using a cause/interpretation transition (such as 'this suggests' or 'as a result').",
      rubric: {
        level3: "A coherent 3-4 sentence paragraph with precise data (start/end temp + time), a stated pattern, AND analysis introduced by a cause/interpretation transition — reads as one connected idea.",
        level2: "Includes data and some analysis but the pattern or the interpretive transition is weak or missing.",
        level1: "Vague, lacks precise data, or is a bare list with no analysis."
      },
      exemplar: "The cocoa cooled from 80 degrees C to 52 degrees C over 12 minutes, a drop of 28 degrees. Most of that decline — about 18 degrees — occurred in the first four minutes, then the cooling slowed. This suggests that heat is lost fastest when the gap between the drink and the cold room is largest, and slows as the two temperatures move closer.",
      hintLadder: [
        "Open with exact start and end temperatures and the time.",
        "Point out a pattern (was cooling faster early or late?).",
        "Add one sentence of analysis using 'this suggests' or 'as a result.'"
      ]
    },
    {
      id: "g7.winter.ela.w2.d5.q5",
      type: "short_answer",
      stem: "Explain how informational writing differs from persuasive writing, then give ONE example sentence of each about a winter experiment AND explain in one sentence why each example fits its category.",
      rubric: {
        level3: "Clearly distinguishes the two (informational explains/analyzes evidence; persuasive argues a position to convince), gives a correct example of each, AND justifies why each example fits its category.",
        level2: "Distinguishes them and gives examples but one justification is weak or one example is off.",
        level1: "Confuses the two, or gives examples without justification."
      },
      exemplar: "Informational writing explains and interprets evidence without taking sides, while persuasive writing argues a position to convince the reader. Informational example: 'The water froze solid in 30 minutes, which suggests the freezer removed energy steadily.' It fits because it reports and interprets data, not an opinion. Persuasive example: 'Everyone should try freezing experiments because they are the best way to learn science.' It fits because it argues a claim and urges action.",
      hintLadder: [
        "One explains and interprets; the other argues to convince.",
        "Write one example sentence of each.",
        "Add a reason each sentence belongs to its category."
      ]
    }
  ],
  reflectionPrompt: "Reread one results sentence you wrote this week. Does it just report a number, or does it explain what the number MEANS? Rewrite it to add one sentence of analysis.",
  misconceptionBank: [
    {
      id: "no-controlling-idea",
      label: "Writes a list of steps with no central point",
      description: "Produces disconnected sentences with no thesis or controlling idea tying the report together.",
      coachMove: "Ask: 'In one sentence, what does your whole investigation SHOW?' That sentence is the controlling idea every paragraph should support."
    },
    {
      id: "data-without-analysis",
      label: "States data but never interprets it",
      description: "Cites numbers but stops short of explaining what the pattern means, so data never becomes evidence.",
      coachMove: "After every number, ask 'So what? What does this tell us?' Push the student to add a 'this suggests...' sentence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Report Would You Trust?",
      prompt:
        "Would you rather rely on Report A ('The drink cooled off and it was interesting') or Report B ('The drink fell from 78 degrees C to 50 degrees C in 10 minutes, cooling fastest early on, which suggests a bigger temperature gap drives faster heat loss')? Which one lets you understand AND draw a conclusion — and why?",
      answer:
        "Report B — it cites exact data and then INTERPRETS the pattern, so you can both repeat the experiment and understand what it means. Report A gives no measurements and no analysis, so it teaches you nothing you could use or verify.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write the Frozen Investigation Report",
      challenge:
        "Turn this week's heat-and-cold investigation into a multi-paragraph informational report built around a controlling idea. Use the sections Introduction (with your controlling idea), Methods, Results (with cited data), and Analysis (what the data mean), tied together with analytical transitions.",
      steps: [
        "Write an Introduction that states your controlling idea — the main thing your investigation shows.",
        "Write a Methods paragraph with ordered steps and precise materials.",
        "Write a Results paragraph citing exact temperatures and times as evidence.",
        "Write an Analysis paragraph explaining what the data mean, using transitions like 'this suggests,' 'as a result,' or 'in contrast.'"
      ],
      deliverable: "A multi-paragraph report with a controlling idea, cited data as evidence, and an analysis paragraph connected by analytical transitions.",
      choiceBoard: [
        "Write the full four-paragraph analytical report on paper or a device.",
        "Design it as a labeled infographic: controlling idea up top, a data chart, and an analysis callout.",
        "Record a 90-second 'science explainer' that states your controlling idea, cites your data, and interprets it aloud."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Analytical Writing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w2.d5.arena1",
          type: "multiple_choice",
          stem: "A report states: 'The ice melted in 22 minutes.' What single addition would most raise it from a bare fact to grade-7 EVIDENCE?",
          choices: [
            "Making the sentence longer with extra adjectives",
            "Adding analysis of what the result means, such as 'which suggests the warm sill transferred energy steadily'",
            "Removing the exact time to keep it simple",
            "Changing it to first person"
          ],
          answerIndex: 1,
          explanation: "The fact is precise but not yet evidence. Adding interpretation — what the result suggests — turns a data point into analytical evidence that supports a controlling idea.",
          hintLadder: [
            "The sentence already has a precise number. What is missing?",
            "Evidence = data PLUS what it means.",
            "Add analysis of what the melting time suggests."
          ]
        },
        {
          id: "g7.winter.ela.w2.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this flat sentence into an analytical evidence sentence with precise data AND interpretation: 'The drink cooled off quite a bit after some time.'",
          rubric: {
            level3: "Rewrites with specific start/end temperatures and a time span AND adds an interpretive clause (e.g., 'this suggests...') explaining what the data mean.",
            level2: "Adds precise data but no interpretation, or interprets without precise data.",
            level1: "Stays vague or does not improve clarity or analysis."
          },
          exemplar: "The drink cooled from 76 degrees C to 44 degrees C over 12 minutes, a 32-degree drop; because most of it happened early, this suggests heat is lost fastest when the drink is far warmer than the room.",
          hintLadder: [
            "Add the exact starting and ending temperatures and the time.",
            "Note whether it cooled faster early or late.",
            "Add a 'this suggests...' clause interpreting the pattern."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Structured Breath Analysis",
      prompt:
        "Treat a breath like a mini-report with a controlling idea: 'a calm breath resets me.' First, inhale for 4 counts (the setup). Next, hold for 4 (the pause). Then exhale for 6 (the release). Finally, notice how you feel — that noticing is your analysis. Repeat the sequence 3 times.",
      scienceTieIn: "Structuring a breath into setup, action, and reflection mirrors how an analytical report moves from evidence to interpretation — and the long exhale lowers your heart rate.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Analytical writing turns facts into meaning. Where else does explaining what data MEAN matter — a coach reviewing game stats, a doctor reading test results, a scientist reporting findings? Write one example and the kind of analysis it would need.",
      badge: { id: "g7-winter-evidence-analyst", name: "Evidence Analyst", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
