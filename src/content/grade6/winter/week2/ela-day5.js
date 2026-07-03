// Grade 6 ELA/Writing — Winter Expedition, Week 2 (Energy & Matter), Day 5.
// Topic: informational writing — explain an experiment's steps and results clearly.

export const winterG6ElaW2D5 = {
  id: "g6.winter.ela.w2.d5",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Informational writing: explain an experiment's steps and results",
  topicTag: "explain-experiment",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.2", "CCSS.W.6.2.C"],
  hook: "You ran a heat-and-cold investigation this week — now the world needs to understand it. Today you turn your experiment into clear informational writing that ANY reader could follow and repeat.",
  miniLesson: [
    "Informational writing explains, it does not persuade. Your goal is a reader who understands your experiment's steps and results, not who agrees with an opinion.",
    "Order matters: use a clear structure — Question, Materials, Steps (in sequence), Results, and Conclusion — so nothing is confusing or out of order.",
    "Transition words like FIRST, NEXT, THEN, and FINALLY signal the order of steps, and precise words (measurements, temperatures, times) make results clear instead of vague."
  ],
  workedExample: {
    prompt: "Rewrite this vague result so it is clear and precise: 'The cocoa got colder after a while.'",
    steps: [
      "Ask what a reader needs: how much colder, and over how long?",
      "Add the starting and ending measurements.",
      "Add the time it took.",
      "Result: 'The cocoa cooled from 80 degrees C to 55 degrees C over 10 minutes — a drop of 25 degrees.'"
    ],
    answer: "The cocoa cooled from 80 degrees C to 55 degrees C over 10 minutes — a drop of 25 degrees."
  },
  items: [
    {
      id: "g6.winter.ela.w2.d5.q1",
      type: "multiple_choice",
      stem: "What is the main GOAL of informational writing about an experiment?",
      choices: [
        "To convince the reader your opinion is right",
        "To help the reader clearly understand what you did and what happened",
        "To entertain with a made-up story",
        "To hide your results so no one can copy them"
      ],
      answerIndex: 1,
      explanation: "Informational writing explains clearly so a reader understands and could even repeat your experiment — it is not about persuading or entertaining.",
      hintLadder: [
        "Is the writer trying to argue a side, or to explain?",
        "Informational writing informs.",
        "The goal is clear understanding."
      ],
      misconceptionsTargeted: ["explain-vs-persuade"]
    },
    {
      id: "g6.winter.ela.w2.d5.q2",
      type: "multiple_choice",
      stem: "Which sentence uses transition words to make the ORDER of steps clear?",
      choices: [
        "Stuff happened with the water and ice.",
        "First I poured the water, then I added ice, and finally I measured the temperature.",
        "The water was in a cup somewhere.",
        "I like doing experiments in winter."
      ],
      answerIndex: 1,
      explanation: "'First,' 'then,' and 'finally' are transition words that signal the sequence of steps clearly.",
      hintLadder: [
        "Look for words that show sequence.",
        "Which sentence tells you what came first, next, and last?",
        "'First... then... finally' shows the order."
      ]
    },
    {
      id: "g6.winter.ela.w2.d5.q3",
      type: "multiple_choice",
      stem: "Which RESULT statement is the clearest for an informational report?",
      choices: [
        "The temperature changed a bunch.",
        "It was kind of different at the end.",
        "The water dropped from 20 degrees C to 4 degrees C in 15 minutes.",
        "Something cold happened."
      ],
      answerIndex: 2,
      explanation: "Precise numbers (temperatures and time) make the result clear and repeatable; the others are vague.",
      hintLadder: [
        "Which one includes exact measurements?",
        "Vague words like 'a bunch' do not help a reader.",
        "The one with degrees and minutes is clearest."
      ],
      misconceptionsTargeted: ["vague-results"]
    },
    {
      id: "g6.winter.ela.w2.d5.q4",
      type: "short_answer",
      stem: "Write a clear, ordered set of 3 steps (using transition words) explaining how to do a simple heat-or-cold experiment, such as melting an ice cube or cooling a warm drink.",
      rubric: {
        level3: "Gives three logically ordered steps that use transition words (first/next/then/finally) and are specific enough to actually follow.",
        level2: "Gives three steps but order or transitions are weak, or steps are vague.",
        level1: "Steps are out of order, missing, or not followable."
      },
      exemplar: "First, place one ice cube on a plate and record the start time. Next, set the plate on a warm windowsill in the sun. Finally, check every 5 minutes and record how long it takes the ice to fully melt.",
      hintLadder: [
        "Pick a simple experiment you could really do.",
        "Number your actions in the order they happen.",
        "Add 'first,' 'next,' and 'finally' to signal the sequence."
      ]
    },
    {
      id: "g6.winter.ela.w2.d5.q5",
      type: "short_answer",
      stem: "Explain the difference between informational writing and persuasive writing, and give one example sentence of each about a winter experiment.",
      rubric: {
        level3: "Clearly distinguishes (informational explains/informs; persuasive argues a position) AND gives a correct example sentence of each.",
        level2: "Distinguishes them but one example is off or the distinction is fuzzy.",
        level1: "Confuses the two or gives no clear examples."
      },
      exemplar: "Informational writing explains facts, like 'The water froze solid after 30 minutes in the freezer.' Persuasive writing argues a position, like 'Everyone should try freezing experiments because they are the best way to learn.'",
      hintLadder: [
        "Does one aim to explain and the other to convince?",
        "Informational = inform; persuasive = argue a side.",
        "Give one example sentence of each."
      ]
    }
  ],
  reflectionPrompt: "Reread one result you wrote this week. Could a stranger repeat your experiment from your words alone? What one detail would make it clearer?",
  misconceptionBank: [
    {
      id: "explain-vs-persuade",
      label: "Confuses informational writing with persuasive writing",
      description: "Tries to argue an opinion when the task is to clearly explain what happened.",
      coachMove: "Ask: 'Are you telling the reader what HAPPENED, or trying to convince them of an opinion?' Informational writing sticks to explaining."
    },
    {
      id: "vague-results",
      label: "Writes vague, unmeasured results",
      description: "Uses fuzzy words like 'a lot' or 'a while' instead of numbers, times, or measurements.",
      coachMove: "Ask 'how much?' and 'how long?' for every result, and have the student add the actual numbers."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Instructions Would You Follow?",
      prompt:
        "You want to repeat a friend's ice-melting experiment. Would you rather have (A) 'I put ice somewhere and it melted eventually' or (B) 'I placed one ice cube on a sunny sill and it fully melted in 22 minutes'? Which could you actually copy — and why?",
      answer:
        "(B) — it names the exact setup, the amount, and the time, so you could repeat it precisely. (A) is too vague: how much ice, where, and how long are all missing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write the Frozen Investigation Report",
      challenge:
        "Turn this week's heat-and-cold investigation into a one-page informational report a younger student could follow. Use the sections Question, Materials, Steps, Results, and Conclusion, with transition words and precise measurements.",
      steps: [
        "Write your Question and list your Materials.",
        "Write your Steps in order using first, next, then, finally.",
        "Write your Results with exact temperatures and times (no vague words).",
        "Finish with a Conclusion sentence stating what you learned."
      ],
      deliverable: "A one-page informational report with all five sections, ordered steps, and precise results.",
      choiceBoard: [
        "Write the full five-section report on paper or a device.",
        "Design it as a labeled poster with a section for each part.",
        "Record yourself reading the report aloud as a 60-second 'science news' segment."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Clear Writing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.ela.w2.d5.arena1",
          type: "multiple_choice",
          stem: "A report says: 'We did some things and the ice was gone.' What is the BIGGEST problem for a reader trying to repeat it?",
          choices: [
            "It is too long",
            "It gives no specific steps, materials, or measurements, so it cannot be repeated",
            "It uses too many numbers",
            "It is written in the past tense"
          ],
          answerIndex: 1,
          explanation: "Good informational writing must be specific and ordered. 'Some things' and 'was gone' give no steps, materials, or measurements, so no one could follow it.",
          hintLadder: [
            "Could you actually redo the experiment from this sentence?",
            "What information is missing?",
            "It lacks specific steps and measurements."
          ]
        },
        {
          id: "g6.winter.ela.w2.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this vague result to be clear and precise: 'The drink cooled off quite a bit after some time.'",
          rubric: {
            level3: "Rewrites with specific measurements and a time span (e.g., starting and ending temperature over a stated number of minutes).",
            level2: "Adds some specifics but still leaves the amount or time vague.",
            level1: "Stays vague or does not improve clarity."
          },
          exemplar: "The drink cooled from 75 degrees C to 45 degrees C over 12 minutes — a drop of 30 degrees.",
          hintLadder: [
            "Ask: cooled by how much?",
            "Ask: over how long?",
            "Add the exact temperatures and the time."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Step-by-Step Breathing",
      prompt:
        "Explain a breath to yourself in clear steps, like an experiment. First, breathe in slowly for 4 counts. Next, hold gently for 4 counts. Then, breathe out for 4 counts. Finally, rest. Repeat the sequence 3 times.",
      scienceTieIn: "Naming each step in order calms your mind the same way clear writing calms a confused reader — and slow breathing lowers your heart rate.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Clear writing lets a stranger repeat exactly what you did. Where else in life do clear, ordered instructions really matter — a recipe, game rules, directions? Write one example.",
      badge: { id: "clear-report-writer", name: "Clear Report Writer", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
