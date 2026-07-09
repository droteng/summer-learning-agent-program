// Grade 5 Summer ELA/Writing — Week 8 (Capstone Week), Day 3.
// Grade-5 counterpart of g6.ela.w8.d3 (first draft / prototype), pitched down one
// level: simpler "done beats perfect" idea, vocab support, concrete placeholder
// examples, celebratory capstone tone.

export const summerG5ElaW8D3 = {
  id: "g5.summer.ela.w8.d3",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "First draft and prototype",
  topicTag: "capstone-draft",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.4", "CCSS.ELA-LITERACY.W.5.5"],
  hook: "Today you make a rough version of your whole project. On Day 3, DONE beats perfect — perfect comes tomorrow!",
  keyTerms: [
    { term: "Draft", definition: "A rough first try. It doesn't have to be neat or perfect yet." },
    { term: "Placeholder", definition: "A note in [brackets] that says 'fix this later,' so you can keep going." },
    { term: "Section", definition: "One part of your project, like the intro, the middle, and the ending." }
  ],
  miniLesson: [
    "A first draft should be quick AND complete. Skip the polish. Get every section in, even if it's rough.",
    "Use placeholders. If you don't have the perfect example yet, write [example needed] and keep going.",
    "Read it once. Don't fix anything yet — just SEE what's there. Fixes happen tomorrow."
  ],
  workedExample: {
    prompt:
      "Maya is making a poster about how bees help gardens. What does her Day-3 rough draft look like?",
    steps: [
      "Title box: 'Bees Are Garden Helpers.'",
      "Section 1: what bees do — [add a fact about pollen].",
      "Section 2: why gardens need bees — [need a picture of a flower].",
      "Ending: one quick tip — 'plant flowers bees like!'",
      "Every section is there. The [brackets] show what tomorrow needs to fix."
    ],
    answer: "A rough, complete draft with placeholders — every section sketched in."
  },
  items: [
    {
      id: "g5.summer.ela.w8.d3.q1",
      type: "multiple_choice",
      stem: "What is the FIRST goal of a first draft?",
      choices: [
        "Perfect spelling.",
        "Getting every section in, even if it's rough — polish comes later.",
        "Picking pretty colors and fonts.",
        "Reading it to a friend."
      ],
      answerIndex: 1,
      explanation: "Get the whole thing down first; polish later. Polishing an unfinished draft wastes work because the parts might still change.",
      hintLadder: [
        "What's the risk of polishing too early?",
        "The parts might still change.",
        "Get the whole thing in first."
      ],
      misconceptionsTargeted: ["polishes-too-early"]
    },
    {
      id: "g5.summer.ela.w8.d3.q2",
      type: "multiple_choice",
      stem: "Why use placeholders like [picture needed]?",
      choices: [
        "To make the draft look messy.",
        "Because computers like brackets.",
        "To fill up the page.",
        "So you can keep going without stopping to fix each piece."
      ],
      answerIndex: 3,
      explanation: "Stopping to perfect each missing piece breaks your flow. Placeholders let you finish the whole shape first.",
      hintLadder: [
        "What breaks your writing flow?",
        "Stopping to look things up or fix things.",
        "Placeholders let you keep going."
      ]
    },
    {
      id: "g5.summer.ela.w8.d3.q3",
      type: "multiple_choice",
      stem: "Your poster is missing one fact. It's still Day 3. Best move:",
      choices: [
        "Stop everything and search until you find it.",
        "Make up a fact so it looks finished.",
        "Write [fact needed] and keep working — fix it tomorrow.",
        "Give up on the poster."
      ],
      answerIndex: 2,
      explanation: "A placeholder keeps you moving so you finish the whole shape today. Tomorrow you fill it with a real, true fact — never make one up.",
      hintLadder: [
        "Day 3 is about finishing the shape.",
        "What lets you keep going without losing the spot?",
        "Write a [placeholder] and come back tomorrow."
      ]
    },
    {
      id: "g5.summer.ela.w8.d3.q4",
      type: "short_answer",
      stem:
        "You just finished your rough draft. Write what you should do NEXT, and explain WHY that's the smart move.",
      rubric: {
        level3: "Says to read it once WITHOUT changing anything yet, and explains that fresh eyes tomorrow catch more than fixing right away.",
        level2: "Names a reasonable next step but the reason is vague.",
        level1: "Says to fix every word now, delete it, or start over."
      },
      exemplar:
        "I should read it once without fixing anything. That lets me SEE what I have. If I fix it right away, I might lock in mistakes — fresh eyes tomorrow will catch more.",
      hintLadder: [
        "What gives you the freshest eyes?",
        "A break helps before you start fixing.",
        "Read today, fix tomorrow — then say why."
      ]
    },
    {
      id: "g5.summer.ela.w8.d3.q5",
      type: "short_answer",
      stem:
        "Write the OUTLINE of your capstone draft: list your sections in order with one line about each. Mark any placeholders in [brackets].",
      rubric: {
        level3: "Clear sections in order, each with a one-line note, and placeholders marked where parts are missing.",
        level2: "Has sections, but the order or the notes are unclear.",
        level1: "One block of text with no sections or order."
      },
      exemplar:
        "1. Title: Bees Are Garden Helpers. 2. What bees do: [add a pollen fact]. 3. Why gardens need bees. 4. Tip + ending: plant flowers bees like.",
      hintLadder: [
        "List your section names in order.",
        "Add one line about each.",
        "Put [brackets] where you still need a fact or picture."
      ]
    }
  ],
  reflectionPrompt: "Today you got the shape down! Which section are you most excited to polish tomorrow?",
  misconceptionBank: [
    {
      id: "polishes-too-early",
      label: "Polishes before finishing the draft",
      description: "Spends all of Day 3 making the title perfect and never reaches the last section.",
      coachMove: "First draft = the whole shape, rough. Making it perfect is for Day 4."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Why 'Done' Beats 'Perfect' Today",
      prompt:
        "Two builders: one finishes a whole rough house, the other perfects one beautiful door and runs out of time. On Day 3 of a five-day project, which builder is in better shape — and why?",
      answer: "The rough-whole-house builder! You can only fix and polish something that already exists. A perfect door with no house leaves you with nothing to show.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Speed-Draft Storyboard",
      challenge:
        "Sketch your whole capstone as a fast storyboard — one box for each section. Don't polish; just get every section on the page so you can SEE the shape.",
      steps: [
        "Draw one box for each section of your project, in order.",
        "Write a one-line label inside each box.",
        "Mark any box that still needs work with a [bracket] note.",
        "Step back and check: does every part of your project have a box?"
      ],
      deliverable: "A storyboard with one labeled box per section, placeholders marked.",
      choiceBoard: [
        "Draw a comic-strip style storyboard.",
        "Make a numbered list with [brackets] for the gaps.",
        "Record a 60-second 'walk-through' saying each section out loud."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: First-Draft Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.ela.w8.d3.arena1",
          type: "multiple_choice",
          stem: "Halfway through your draft you notice you're missing a key fact. Best Day-3 move?",
          choices: [
            "Write [fact needed] and keep drafting the other sections.",
            "Stop everything and search until you find the exact fact.",
            "Make up a fact so it looks done.",
            "Delete the whole section."
          ],
          answerIndex: 0,
          explanation: "A placeholder keeps you moving so you finish the whole shape today. You fill it with a real, true fact tomorrow — never invent one.",
          hintLadder: [
            "Day 3 is about finishing the shape, not perfecting parts.",
            "What lets you keep going without losing the fact?",
            "Use a [placeholder] and come back tomorrow."
          ]
        },
        {
          id: "g5.summer.ela.w8.d3.arena2",
          type: "short_answer",
          stem: "List the sections of your capstone draft IN ORDER, with one line each, and mark at least one [placeholder] where you still need something.",
          rubric: {
            level3: "Sections listed in a clear order, each with a one-line note, and at least one placeholder marked for a missing part.",
            level2: "Sections there, but the order is unclear or no placeholder is marked.",
            level1: "One block with no clear sections or order."
          },
          exemplar: "1. Title: Bees Are Garden Helpers. 2. What bees do: [add a pollen fact]. 3. Why gardens need bees. 4. Tip + ending.",
          hintLadder: [
            "Name your sections in the order your audience meets them.",
            "Add one line about each.",
            "Mark a [placeholder] anywhere you still need a fact or picture."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shake-It-Out Break",
      prompt:
        "Stand up and shake out your hands, arms, then legs for 20 seconds, like flicking off water. Roll your shoulders back 5 times. Then sit and take one big breath.",
      scienceTieIn: "Quick whole-body movement sends more blood to your brain, which can clear away mental fog after a stretch of focused drafting.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You got the whole shape down today! Which section are you most excited to polish tomorrow, and what would make it shine?",
      badge: { id: "g5-summer-rough-draft-rocket", name: "Rough Draft Rocket", emoji: "✏️" },
      estimatedMinutes: 7
    }
  }
};
