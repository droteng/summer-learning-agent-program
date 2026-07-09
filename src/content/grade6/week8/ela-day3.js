// Grade 6 ELA — Week 8, Day 3.
// Topic: first draft / prototype.

export const grade6ElaWeek8Day3 = {
  id: "g6.ela.w8.d3",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "First draft and prototype",
  topicTag: "capstone-draft",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.W.4", "CCSS.6.W.5"],
  hook: "Today you make a rough version. Done beats perfect on Day 3 — perfect comes on Day 4.",
  miniLesson: [
    "First draft = quick + complete. Skip the polish. Get every section in, even if rough.",
    "Use placeholders. If you don't have the perfect example yet, write [example needed] and keep moving.",
    "Reread once. Don't fix anything yet — just see what's there. Fixes happen tomorrow."
  ],
  workedExample: {
    prompt:
      "Maya is making a 90-second video script about ratios in cooking. What does her Day-3 draft look like?",
    steps: [
      "Intro (5s): 'Today I'm going to show you how ratios live in your kitchen.'",
      "Section 1 (25s): pancake recipe scaling — [example: 1 batch → 3 batches].",
      "Section 2 (40s): one place ratios fail — baking soda. [need exact numbers].",
      "Close (20s): one quick tip + 'so next time you cook, look for the ratios.'",
      "Total: ~90 seconds. Brackets mark what tomorrow needs to fix."
    ],
    answer: "Complete rough draft with placeholders — every section sketched."
  },
  items: [
    {
      id: "g6.ela.w8.d3.q1",
      type: "multiple_choice",
      stem: "What's the FIRST priority of a first draft?",
      choices: [
        "Perfect grammar.",
        "Completeness — every section sketched, polish later.",
        "Picking colors and fonts.",
        "Reading it to a friend."
      ],
      answerIndex: 1,
      explanation: "Completeness first; polish later. Polishing an unfinished draft wastes work because the structure may still shift.",
      hintLadder: [
        "What's the risk of polishing too early?",
        "Structure may still change.",
        "Completeness first."
      ],
      misconceptionsTargeted: ["polishes-too-early"]
    },
    {
      id: "g6.ela.w8.d3.q2",
      type: "multiple_choice",
      stem: "Why use placeholders like [example needed]?",
      choices: [
        "To make the draft look messy.",
        "To pad the word count.",
        "So you can keep the flow going without stopping to research mid-draft.",
        "Because computers like brackets."
      ],
      answerIndex: 2,
      explanation: "Stopping to perfect each missing piece kills draft momentum. Placeholders let you finish the shape first.",
      hintLadder: [
        "What kills writing momentum?",
        "Stopping to look things up.",
        "Placeholders prevent that."
      ]
    },
    {
      id: "g6.ela.w8.d3.q3",
      type: "multiple_choice",
      stem:
        "Your script is 75 seconds long; your goal was 90. Best Day-3 move:",
      choices: [
        "Cut the project to 60 seconds.",
        "Give up.",
        "Add filler to reach 90.",
        "Note '+15s needed' and keep working — fix tomorrow."
      ],
      answerIndex: 3,
      explanation: "Today is shape, not size. Mark the gap and fix it on revision day with real content.",
      hintLadder: [
        "What's the day's goal?",
        "Shape, not exact size.",
        "Note the gap, move on."
      ]
    },
    {
      id: "g6.ela.w8.d3.q4",
      type: "multiple_choice",
      stem: "After finishing the first draft, what's the right NEXT action?",
      choices: [
        "Re-read once without changing anything.",
        "Start polishing word-by-word immediately.",
        "Delete everything and restart.",
        "Show it to no one."
      ],
      answerIndex: 0,
      explanation: "Re-read first to see what you have. Polishing in the same sitting locks in mistakes; a fresh read tomorrow catches more.",
      hintLadder: [
        "What gives the freshest eye?",
        "A break before editing.",
        "Re-read today, edit tomorrow."
      ]
    },
    {
      id: "g6.ela.w8.d3.q5",
      type: "short_answer",
      stem:
        "Write the OUTLINE of your capstone draft: list the sections in order and one line about each. Mark any placeholders in [brackets].",
      rubric: {
        level3: "Clear sections in order, each with one-line description, placeholders marked for missing parts.",
        level2: "Has sections but order or descriptions are unclear.",
        level1: "Single block of text, no structure."
      },
      exemplar:
        "1. Intro (15s): why ratios matter in cooking. 2. Pancake example: [need real measurements]. 3. Baking soda surprise: why doubling doesn't scale linearly. 4. Quick tip + close (15s).",
      hintLadder: [
        "List the section names in order.",
        "Add one line each.",
        "Use [brackets] where you still need research."
      ]
    }
  ],
  reflectionPrompt: "Today you got the shape down. What's the section you're most excited to polish tomorrow?",
  misconceptionBank: [
    {
      id: "polishes-too-early",
      label: "Polishes before completing the draft",
      description: "Spends Day 3 perfecting paragraph 1 and never reaches paragraph 5.",
      coachMove: "First draft = the whole shape, rough. Perfectionism is for Day 4."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Why 'Done' Beats 'Perfect' Today",
      prompt:
        "Imagine two builders: one finishes a rough whole house, the other perfects one beautiful door and runs out of time. On Day 3 of a 5-day project, which builder is in better shape — and why?",
      answer: "The rough-whole-house builder. You can only fix and polish something that exists. A perfect door with no house leaves you with nothing to present.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Speed-Draft Storyboard",
      challenge:
        "Sketch your whole capstone as a fast storyboard — one box per section. Don't polish; just get every section on the page so you can SEE the shape.",
      steps: [
        "Draw one box for each section of your project, in order.",
        "Write a one-line label inside each box.",
        "Mark any box that still needs research with a [bracket] note.",
        "Step back and check: does every part of your project have a box?"
      ],
      deliverable: "A storyboard with one labeled box per section, placeholders marked.",
      choiceBoard: [
        "Draw a comic-strip style storyboard.",
        "Make a numbered outline with [brackets] for gaps.",
        "Record a 60-second 'walk-through' describing each section aloud."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: First-Draft Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.ela.w8.d3.arena1",
          type: "multiple_choice",
          stem: "Halfway through your first draft you realize you're missing a key statistic. Best Day-3 move?",
          choices: [
            "Stop everything and research until you find the exact number.",
            "Delete the whole section.",
            "Make up a number so it looks finished.",
            "Write [stat needed] and keep drafting the rest of the sections."
          ],
          answerIndex: 3,
          explanation: "A placeholder keeps your momentum so you finish the whole shape today. You fill it with a real, sourced number tomorrow — never invent data.",
          hintLadder: [
            "Day 3 is about completing the shape, not perfecting parts.",
            "What lets you keep moving without losing the fact?",
            "Use a [placeholder] and come back tomorrow."
          ]
        },
        {
          id: "g6.ela.w8.d3.arena2",
          type: "short_answer",
          stem: "List the sections of your capstone draft IN ORDER, with one line each, and mark at least one [placeholder] where you still need content.",
          rubric: {
            level3: "Sections listed in a logical order, each with a one-line description, and at least one placeholder marked for missing content.",
            level2: "Sections present but order is unclear or no placeholder is marked.",
            level1: "A single block with no clear sections or order."
          },
          exemplar: "1. Intro (15s): why ratios matter in cooking. 2. Pancake example: [need real measurements]. 3. Baking soda surprise: doubling doesn't scale. 4. Quick tip + close (15s).",
          hintLadder: [
            "Name your sections in the order the audience meets them.",
            "Add one line describing each.",
            "Mark a [placeholder] anywhere you still need a fact or example."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shake-It-Out Break",
      prompt:
        "Stand up and shake out your hands, arms, then legs for 20 seconds, like flicking off water. Roll your shoulders back 5 times. Then sit and take one big breath.",
      scienceTieIn: "Quick whole-body movement boosts blood flow to your brain, which can clear mental fog after a stretch of focused drafting.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You got the whole shape down today. Which section are you most excited to polish tomorrow, and what would make it shine?",
      badge: { id: "rough-draft-rocket", name: "Rough Draft Rocket", emoji: "✏️" },
      estimatedMinutes: 7
    }
  }
};
