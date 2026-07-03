// Grade 5 History/Civics — Fall Expedition, Week 7 (Cause & Effect in
// History), Day 2. Grade 5 counterpart of g6.fall.hist.w7.d2. Same topic
// (turning points) pitched down to Grade 5: simpler before/after examples,
// shorter passages, and extra vocabulary support.

export const fallG5HistoryW7D2 = {
  id: "g5.fall.hist.w7.d2",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 2,
  subject: "History/Civics",
  topic: "Turning points in history",
  topicTag: "turning-points",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1.3-5", "C3.D2.His.14.3-5"],
  hook: "Some moments split a story into 'before' and 'after.' Learning to read, getting a new invention, moving to a new home. Today you learn to spot a turning point.",
  miniLesson: [
    "A TURNING POINT is a big moment after which things are never the same. It changes the direction of the story.",
    "Example: when people learned to store food for winter, they could stay in one place. That changed everything — a turning point.",
    "To test a turning point, ask: what was possible AFTER it that was NOT possible before?"
  ],
  workedExample: {
    prompt: "Explain why learning to write was a turning point.",
    steps: [
      "Before: people had to remember everything or tell it out loud.",
      "The change: people made marks to save words and numbers.",
      "After: they could store ideas and share them across long distances and time.",
      "Things were never the same — that's a turning point."
    ],
    answer: "Writing let people save and share ideas, so life was different before and after."
  },
  items: [
    {
      id: "g5.fall.hist.w7.d2.q1",
      type: "multiple_choice",
      stem: "A 'turning point' in history is a moment that...",
      choices: [
        "no one remembers",
        "changes things so the future is different",
        "happens every day",
        "has no effect on anyone"
      ],
      answerIndex: 1,
      explanation: "A turning point changes the direction of the story — there is a clear 'before' and 'after.'",
      hintLadder: [
        "Think 'before and after.'",
        "What makes a moment special enough to be a turning point?",
        "It changes what comes next."
      ]
    },
    {
      id: "g5.fall.hist.w7.d2.q2",
      type: "multiple_choice",
      stem: "What is the BEST question to test if something was a turning point?",
      choices: [
        "Was it fun?",
        "What became possible AFTER it that wasn't before?",
        "Did it happen a long time ago?",
        "Was it on TV?"
      ],
      answerIndex: 1,
      explanation: "A real turning point opens up new possibilities. You compare the world before and after.",
      hintLadder: [
        "Turning points change what people can do.",
        "Compare life before and after the moment.",
        "Ask what became newly possible."
      ]
    },
    {
      id: "g5.fall.hist.w7.d2.q3",
      type: "multiple_choice",
      stem: "Which one is most clearly a turning point?",
      choices: [
        "A store changed its open hours for one day",
        "The invention of the light bulb, which let people work and read after dark",
        "Someone bought a new pencil",
        "A cartoon episode ended"
      ],
      answerIndex: 1,
      explanation: "The light bulb changed daily life for huge numbers of people — a clear before/after shift.",
      hintLadder: [
        "Which one changed life for LOTS of people?",
        "Think about a big, lasting change.",
        "The light bulb."
      ],
      misconceptionsTargeted: ["every-event-is-turning-point"]
    },
    {
      id: "g5.fall.hist.w7.d2.q4",
      type: "short_answer",
      stem: "Pick an invention or event you think was a turning point. Describe the 'before' and the 'after' in your own words.",
      rubric: {
        level3: "Names a real turning point AND clearly shows how things were before vs. after.",
        level2: "Names one, but the before/after is thin.",
        level1: "No clear turning point or no before/after."
      },
      exemplar: "Before cars, people traveled by horse and it took a long time. After cars, families could go far away in a single day — a turning point for travel.",
      hintLadder: [
        "Pick something that changed a lot.",
        "How were things BEFORE it?",
        "How were they AFTER?"
      ]
    },
    {
      id: "g5.fall.hist.w7.d2.q5",
      type: "short_answer",
      stem: "Not every change is a turning point. Explain the difference between a small change and a true turning point. Give one example of each.",
      rubric: {
        level3: "Explains that a turning point lasts and is big AND gives a small-change example plus a turning-point example.",
        level2: "Explains the difference but one example is weak.",
        level1: "Mixes up the two, or has no examples."
      },
      exemplar: "A small change is quick and forgotten, like a toy fad. A turning point lasts and changes life, like electricity coming to homes, which changed light and work forever.",
      hintLadder: [
        "How big and how long-lasting is the change?",
        "Give a small change people forget.",
        "Then give a big change that lasts."
      ]
    }
  ],
  reflectionPrompt: "Has there been a turning point in your own life — a moment after which things were different? What changed?",
  misconceptionBank: [
    {
      id: "every-event-is-turning-point",
      label: "Calls every change a turning point",
      description: "Labels small changes as turning points without checking if they last.",
      coachMove: "Use the test: did it create a lasting 'before and after'? If not, it's just a change."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Before & After",
      prompt:
        "Imagine the very first time someone saved seeds to plant next spring instead of just eating them all. Name one thing that became POSSIBLE after that. Was it a turning point?",
      answer:
        "Saving seeds meant people could grow their own food on purpose, so they could stay in one place and build homes. That 'never the same after' change is exactly what a turning point is.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Turning-Point Museum Plaque",
      challenge:
        "Pick a real turning point (an invention or discovery) and design a museum plaque that shows the 'before,' the moment, and the 'after.'",
      steps: [
        "Pick your turning point and write its name at the top.",
        "Write a short 'Before' line telling how things used to be.",
        "Write an 'After' line telling what became possible.",
        "Add one sentence answering: why did this change so much?"
      ],
      deliverable: "A museum-style plaque with a Before line, an After line, and one 'why it changed so much' sentence.",
      choiceBoard: [
        "Draw the plaque on paper with a picture of the event.",
        "Make it on a computer with before/after columns.",
        "Record a short 'tour guide' talk about your plaque."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Turning-Point Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.hist.w7.d2.arena1",
          type: "multiple_choice",
          stem: "Which is the BEST clue that an event was a real turning point?",
          choices: [
            "Lots of people talked about it that week",
            "Many things stayed different afterward that were not possible before",
            "It happened very long ago",
            "It was in a famous book"
          ],
          answerIndex: 1,
          explanation: "A turning point is judged by lasting before/after change — not by how famous or old it is.",
          hintLadder: [
            "Remember the test for a turning point.",
            "It's about lasting 'before vs. after' change.",
            "Pick the choice about things being different afterward."
          ]
        },
        {
          id: "g5.fall.hist.w7.d2.arena2",
          type: "short_answer",
          stem: "Some people call EVERY new gadget a 'turning point.' Pick one invention and decide if it is really a turning point or just a small change. Use the before/after test.",
          rubric: {
            level3: "Names an invention AND uses the before/after test AND decides if the change was big and lasting.",
            level2: "Uses the test but the before/after or the decision is thin.",
            level1: "Gives an opinion without the before/after test."
          },
          exemplar: "The bicycle is a real turning point: before it, kids walked everywhere and it was slow; after it, they could travel farther on their own. That's a big, lasting change, not just a fad.",
          hintLadder: [
            "Pick an invention.",
            "Tell what life was like before it and after it.",
            "Decide: is the change big and lasting, or small and quick?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: The Pivot Pause",
      prompt:
        "Stand up and slowly turn a quarter-turn as you breathe in. Pause facing a new direction, then breathe out. Do this 4 times. Each turn is a tiny 'turning point' for your body.",
      scienceTieIn: "Breathing slowly lowers your heart rate and tells your brain it's safe to focus, helping you reset before the next task.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a turning point in your own life — a moment after which things were different. What changed, and what became newly possible?",
      badge: { id: "g5-fall-turning-point-spotter", name: "Turning-Point Spotter", emoji: "🔭" },
      estimatedMinutes: 7
    }
  }
};
