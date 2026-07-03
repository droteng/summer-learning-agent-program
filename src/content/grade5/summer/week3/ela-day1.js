// Grade 5 Summer ELA / Writing — Week 3 (Story Builders), Day 1.
// Grade-5 counterpart of g6.ela.w3.d1 (narrative structure), pitched down:
// shorter passages, vocab support, paragraph frames, step-by-step.

export const summerG5ElaW3D1 = {
  id: "g5.summer.ela.w3.d1",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Narrative structure",
  topicTag: "narrative-structure",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.3", "CCSS.ELA-LITERACY.RL.5.3"],
  hook: "Every good story has a shape. Today you find a story's beginning, middle, and end -- then plan a short one of your own.",
  keyTerms: [
    { term: "Setup", definition: "The start of a story that tells who, where, and when." },
    { term: "Conflict", definition: "The problem or thing that gets in the way of what the character wants." },
    { term: "Resolution", definition: "The end, where the problem gets solved or something changes." }
  ],
  miniLesson: [
    "Most short stories go in three steps: setup (who, where, when), then conflict (the problem), then resolution (what changes).",
    "The conflict is the engine. If nothing is a problem, there is nothing to solve, so there is no real story.",
    "The ending does not have to be happy. It just has to make sense with what happened before."
  ],
  workedExample: {
    prompt: "Map this short story into setup, conflict, and resolution: Maya forgot her lines on stage. She froze. Then she remembered her teacher's tip and made up a line -- the audience laughed.",
    steps: [
      "Setup: Maya is on stage in a play.",
      "Conflict: She forgets her lines and freezes.",
      "Resolution: She uses her teacher's tip to make up a line, and the audience likes it.",
      "All three parts fit in three short sentences -- short but complete."
    ],
    answer: "Setup, then conflict, then resolution -- each one named."
  },
  items: [
    {
      id: "g5.summer.ela.w3.d1.q1",
      type: "multiple_choice",
      stem: "What is the conflict in: Sam wanted to bake cookies, but the oven was broken?",
      choices: [
        "Sam wanted cookies",
        "The oven was broken",
        "There were no cookies",
        "Sam liked baking"
      ],
      answerIndex: 1,
      explanation: "The conflict is the problem in the way -- the broken oven. Wanting cookies is just the goal.",
      hintLadder: [
        "What does Sam want? What is stopping it?",
        "The thing in the way is the conflict.",
        "Broken oven means conflict."
      ],
      misconceptionsTargeted: ["confuses-goal-with-conflict"]
    },
    {
      id: "g5.summer.ela.w3.d1.q2",
      type: "multiple_choice",
      stem: "Which sentence is part of the SETUP of a story?",
      choices: [
        "Then the storm hit and the lights went out.",
        "Liam smiled -- finally, the bike was fixed.",
        "It was a quiet Saturday morning in the park.",
        "Suddenly, a dog ran across the field."
      ],
      answerIndex: 2,
      explanation: "The setup tells who, where, and when. A quiet Saturday morning in the park does that.",
      hintLadder: [
        "The setup tells you who, where, and when.",
        "Skip sentences that show a problem or an ending.",
        "Only one option just describes the calm scene."
      ]
    },
    {
      id: "g5.summer.ela.w3.d1.q3",
      type: "short_answer",
      stem: "Maya forgot her lines on stage and froze. Write ONE sentence that would be a strong RESOLUTION for this story -- show what Maya does to fix the problem.",
      rubric: {
        level3: "One sentence that shows Maya taking an action that clearly solves the freeze (the problem), so the ending makes sense.",
        level2: "A sentence that ends the story but only partly connects to the problem, or does not show a clear action.",
        level1: "Restates the problem, or gives no real solution."
      },
      exemplar: "Maya took a slow breath, made up a new line, and the audience laughed along with her.",
      hintLadder: [
        "A resolution should show a change.",
        "Show what Maya DOES about forgetting her lines.",
        "End with the problem solved -- she keeps going and the scene works out."
      ]
    },
    {
      id: "g5.summer.ela.w3.d1.q4",
      type: "multiple_choice",
      stem: "A story with no conflict usually feels:",
      choices: ["Exciting", "Boring or flat", "Mysterious", "Long"],
      answerIndex: 1,
      explanation: "Conflict is what makes a story move. With no problem, nothing changes and the reader loses interest.",
      hintLadder: [
        "What does conflict do for a story?",
        "Without it, what is missing?",
        "The story feels flat."
      ]
    },
    {
      id: "g5.summer.ela.w3.d1.q5",
      type: "short_answer",
      stem: "Plan a 3-sentence story about a character who wants something they cannot have at first. Write one sentence for the setup, one for the conflict, and one for the resolution. You can use this frame: Setup: ___. Conflict: ___. Resolution: ___.",
      rubric: {
        level3: "Three sentences that clearly map to setup, conflict, and resolution, and the resolution connects to the conflict.",
        level2: "Three sentences, but one part is unclear or the resolution does not connect to the problem.",
        level1: "Only one or two sentences, or there is no clear conflict."
      },
      exemplar: "Setup: Jordan wanted to join the soccer team. Conflict: Tryouts were the same day as his sister's recital. Resolution: He asked the coach and set up a make-up tryout the next morning.",
      hintLadder: [
        "Sentence 1: who wants what (setup).",
        "Sentence 2: what is stopping them (conflict).",
        "Sentence 3: what they do or what changes (resolution)."
      ]
    }
  ],
  reflectionPrompt: "Today you mapped a story's shape. What is a real moment from your week that has a clear setup, conflict, and resolution?",
  misconceptionBank: [
    {
      id: "confuses-goal-with-conflict",
      label: "Confuses goal with conflict",
      description: "Names the character's goal as the conflict instead of the thing in the way.",
      coachMove: "Ask: what does the character WANT? Then ask: what is STOPPING them? The second answer is the conflict."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Pick Your Plot",
      prompt: "Would you rather read a story where everything goes perfectly and nothing goes wrong, OR a story where the hero faces a big problem? Why does one of these sound way more boring?",
      answer: "The perfect story is boring -- with no problem, nothing has to change, so there is no real story. The trouble is what keeps us reading.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Story Mountain Map",
      challenge: "Invent a brand-new short story and map its three parts. Make the conflict a real problem the character cannot fix right away, and make sure the resolution grows out of what happened in the middle.",
      steps: [
        "Draw a mountain shape: setup at the bottom, conflict at the top, resolution coming back down.",
        "Label the setup: who, where, and when.",
        "Label the conflict: the problem in the way of what they want.",
        "Label the resolution: what the character does so the ending makes sense."
      ],
      deliverable: "A labeled story mountain map showing the setup, conflict, and resolution of your invented story.",
      choiceBoard: [
        "Draw the story mountain with all three parts labeled.",
        "Write the story as exactly three sentences (one per part).",
        "Tell your story out loud in about 60 seconds."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Story Shape Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.ela.w3.d1.arena1",
          type: "multiple_choice",
          stem: "Read: Priya trained all summer for the race. On race day, her shoe strap snapped at the starting line. She tied it with her hair ribbon and ran anyway, finishing third. Which sentence is the RESOLUTION?",
          choices: [
            "Priya trained all summer for the race.",
            "On race day, her shoe strap snapped at the starting line.",
            "She tied it with her hair ribbon and ran anyway, finishing third.",
            "It was race day."
          ],
          answerIndex: 2,
          explanation: "The resolution shows what the character does about the problem and how it turns out. Tying the strap and finishing third solves the snapped-strap problem.",
          hintLadder: [
            "The resolution comes after the problem and shows a change.",
            "The problem is the snapped strap -- what fixes it?",
            "It is the sentence where she ties the strap and finishes the race."
          ]
        },
        {
          id: "g5.summer.ela.w3.d1.arena2",
          type: "short_answer",
          stem: "Write a 3-sentence story where the ending is NOT happy but still makes sense with the problem. Include a setup, a conflict, and that not-happy-but-fitting resolution.",
          rubric: {
            level3: "Three sentences clearly showing setup, conflict, and an ending that is not happy but clearly follows from the conflict.",
            level2: "Three parts are there, but the ending feels random, or it is actually a happy ending instead of a fitting sad one.",
            level1: "A part is missing, or it is just a list of events with no clear problem."
          },
          exemplar: "Setup: Leo entered the science fair sure his volcano would win. Conflict: A judge noticed he had copied the design from a kit. Resolution: He did not place, but he finally understood why doing his own work matters.",
          hintLadder: [
            "Start with a character who wants something (setup).",
            "Add the problem they face (conflict).",
            "End with a result that is not a win but clearly comes from that problem."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Beat-by-Beat Freeze",
      prompt: "Stand up and act out a tiny story with your body: freeze in a calm setup pose, then a tense conflict pose, then a relieved resolution pose. Hold each freeze for three breaths.",
      scienceTieIn: "Moving your body to match an idea helps your brain store it -- motion and memory are wired together, something you will explore in this program's science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt: "Think of a moment from your week. What was the setup, the conflict, and how did it end -- and did the ending make sense?",
      badge: { id: "g5-summer-story-architect", name: "Story Architect", emoji: "🏗️" },
      estimatedMinutes: 7
    }
  }
};
