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
  estimatedMinutes: 60, // full Daily Hour
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
        "Suddenly, a dog bolted across the field.",
        "It was a quiet Saturday morning in the park."
      ],
      answerIndex: 3,
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
        "Maya took a breath, made up a new line, and the audience laughed.",
        "Maya forgot her lines.",
        "Maya was on stage.",
        "Maya was nervous."
      ],
      answerIndex: 0,
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
      choices: ["Exciting", "Mysterious", "Boring or flat", "Long"],
      answerIndex: 2,
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
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Pick Your Plot",
      prompt:
        "Would you rather read a story where everything goes perfectly and nothing goes wrong, OR a story where the hero faces a huge problem? Why does one of these sound way more boring?",
      answer: "The problem-free story is boring — with no conflict, nothing has to change, so there's no story. The trouble is what makes us keep reading.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Story Mountain Map",
      challenge:
        "Invent a brand-new story and map its three beats. Make the conflict something the character truly can't solve at first, and make sure the resolution is earned by what happens in the middle.",
      steps: [
        "Draw a mountain shape: setup at the base, conflict at the peak, resolution coming back down.",
        "Label the setup: who, where, and when.",
        "Label the conflict: the obstacle in the way of what they want.",
        "Label the resolution: what the character does so it feels earned, not lucky."
      ],
      deliverable: "A labeled 'story mountain' map showing setup, conflict, and resolution for your invented story.",
      choiceBoard: [
        "Draw the story mountain with all three beats labeled.",
        "Write the story as exactly three sentences (one per beat).",
        "Record or perform a 60-second out-loud telling of your story."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Story Shape Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.ela.w3.d1.arena1",
          type: "multiple_choice",
          stem: "In: 'Priya trained all summer for the race, but on race day her shoe strap snapped at the starting line. She tied it with her hair ribbon and ran anyway, finishing third.' — which sentence describes the RESOLUTION?",
          choices: [
            "She tied it with her hair ribbon and ran anyway, finishing third.",
            "On race day her shoe strap snapped at the starting line.",
            "Priya trained all summer for the race.",
            "It was race day."
          ],
          answerIndex: 0,
          explanation: "The resolution shows what the character does about the conflict and how it changes things. Tying the strap and finishing third resolves the snapped-strap problem.",
          hintLadder: [
            "The resolution comes after the conflict and shows a change.",
            "The conflict is the snapped strap — what fixes it?",
            "It's the sentence where she ties the strap and finishes the race."
          ]
        },
        {
          id: "g6.ela.w3.d1.arena2",
          type: "short_answer",
          stem: "Write a 3-sentence story where the RESOLUTION is NOT happy but still feels earned by the conflict. Clearly include a setup, a conflict, and that earned-but-unhappy resolution.",
          rubric: {
            level3: "Three sentences clearly mapping to setup, conflict, and a resolution that is unhappy yet logically follows from the conflict.",
            level2: "Three parts present but the resolution feels random, or it's actually a happy ending instead of an earned unhappy one.",
            level1: "Missing a part, or just a string of events with no clear conflict."
          },
          exemplar: "Setup: Leo entered the science fair sure his volcano would win. Conflict: A judge pointed out he'd copied the design from a kit. Resolution: He didn't place, but he finally understood why original work matters.",
          hintLadder: [
            "Start with a character who wants something (setup).",
            "Add the obstacle they face (conflict).",
            "End with a result that isn't a win but clearly grew out of that obstacle."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Beat-by-Beat Freeze",
      prompt:
        "Stand up and act out a tiny story with your body: freeze in a calm 'setup' pose, then a tense 'conflict' pose, then a relieved 'resolution' pose. Hold each freeze for three breaths.",
      scienceTieIn: "Moving your body to match an idea helps your brain store it — motion and memory are wired together, something you'll explore in this program's science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a moment from your week. What was the setup, the conflict, and how did it resolve — and was the resolution earned?",
      badge: { id: "story-architect", name: "Story Architect", emoji: "🏗️" },
      estimatedMinutes: 7
    }
  }
};
