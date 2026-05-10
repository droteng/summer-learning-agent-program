// Grade 6 ELA — Week 3 (Story Builders), Day 1.
// Topic: narrative structure.

export const grade6ElaWeek3Day1 = {
  id: "g6.ela.w3.d1",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Narrative structure",
  topicTag: "narrative-structure",
  estimatedMinutes: 18,
  standardsRefs: ["CCSS.6.W.3.A", "CCSS.6.RL.3"],
  hook: "Every good story has shape. Today you map a story's beginning, middle, and end — then plan one of your own.",
  miniLesson: [
    "Most short stories follow: setup (who, where, when) → conflict (what's wrong) → resolution (what changes).",
    "The conflict is the engine. Without something at stake, there's nothing to resolve.",
    "The resolution doesn't have to be happy — it just has to feel earned by what came before."
  ],
  workedExample: {
    prompt: "Map this story to setup, conflict, resolution: 'Maya forgot her lines on stage. She froze. Then she remembered her teacher's tip and improvised — the audience laughed.'",
    steps: [
      "Setup: Maya is on stage in a play.",
      "Conflict: She forgets her lines and freezes.",
      "Resolution: She uses her teacher's tip to improvise; the audience approves.",
      "All three parts in three sentences — tight but complete."
    ],
    answer: "Setup → conflict → resolution, all named."
  },
  items: [
    {
      id: "g6.ela.w3.d1.q1",
      type: "multiple_choice",
      stem: "What is the conflict in: 'Sam wanted to bake cookies but the oven was broken'?",
      choices: [
        "Sam wanted cookies",
        "The oven was broken",
        "There were no cookies",
        "Sam liked baking"
      ],
      answerIndex: 1,
      explanation: "The conflict is the obstacle: the broken oven. Wanting cookies is just the goal.",
      hintLadder: [
        "What's the goal? What's stopping it?",
        "The thing in the way is the conflict.",
        "Broken oven = conflict."
      ],
      misconceptionsTargeted: ["confuses-goal-with-conflict"]
    },
    {
      id: "g6.ela.w3.d1.q2",
      type: "multiple_choice",
      stem: "Which sentence is part of the SETUP of a story?",
      choices: [
        "Then the storm hit and the lights went out.",
        "Liam smiled — finally, the bike was fixed.",
        "It was a quiet Saturday morning in the park.",
        "Suddenly, a dog bolted across the field."
      ],
      answerIndex: 2,
      explanation: "Setup establishes who/where/when. 'Quiet Saturday morning in the park' does that.",
      hintLadder: [
        "Setup tells you who, where, and when.",
        "Skip sentences that introduce conflict or resolution.",
        "Only one option just describes the scene."
      ]
    },
    {
      id: "g6.ela.w3.d1.q3",
      type: "multiple_choice",
      stem: "Which is the strongest resolution sentence?",
      choices: [
        "Maya was on stage.",
        "Maya forgot her lines.",
        "Maya took a breath, made up a new line, and the audience laughed.",
        "Maya was nervous."
      ],
      answerIndex: 2,
      explanation: "A resolution shows the change and ties it back to the conflict. Maya's improvisation resolves the freeze.",
      hintLadder: [
        "A resolution should show change.",
        "Pick the one that shows what Maya did to fix it.",
        "It's the one with the breath, new line, and audience reaction."
      ]
    },
    {
      id: "g6.ela.w3.d1.q4",
      type: "multiple_choice",
      stem: "A story without a conflict feels:",
      choices: ["Exciting", "Boring or flat", "Mysterious", "Long"],
      answerIndex: 1,
      explanation: "Conflict is what makes stories move. Without it, nothing changes and the reader loses interest.",
      hintLadder: [
        "What does conflict do for a story?",
        "Without it, what's missing?",
        "The story feels flat."
      ]
    },
    {
      id: "g6.ela.w3.d1.q5",
      type: "short_answer",
      stem:
        "Plan a 3-sentence story about a character who wants something they can't have at first. Write the setup, the conflict, and the resolution as three short sentences.",
      rubric: {
        level3: "Three sentences each clearly mapping to setup / conflict / resolution, with the resolution earned by something in the conflict.",
        level2: "Three sentences but one part is unclear or the resolution doesn't connect.",
        level1: "Just one or two sentences, or no clear conflict."
      },
      exemplar:
        "Setup: Jordan wanted to join the soccer team. Conflict: Tryouts were the same day as his sister's recital. Resolution: He talked to the coach and arranged a make-up tryout the next morning.",
      hintLadder: [
        "Sentence 1: who wants what (setup).",
        "Sentence 2: what's stopping them (conflict).",
        "Sentence 3: what they do or what changes (resolution)."
      ]
    }
  ],
  reflectionPrompt: "Today you mapped story shape. What's a real moment from your week that has a clear setup, conflict, and resolution?",
  misconceptionBank: [
    {
      id: "confuses-goal-with-conflict",
      label: "Confuses goal with conflict",
      description: "Names the character's goal as the conflict instead of the obstacle in the way.",
      coachMove: "Ask: what does the character WANT? Then ask: what's STOPPING them? The second answer is the conflict."
    }
  ]
};
