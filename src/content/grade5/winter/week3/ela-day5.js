// Grade 5 ELA/Writing — Winter Expedition, Week 3 (Forces & Motion), Day 5.
// Grade 5 counterpart of g6.winter.ela.w3.d5, pitched down: shorter passages,
// vocab support, more scaffolding. Topic: procedural / how-it-works writing —
// explain how a simple machine works, step by step. Capstone of the week.

export const winterG5ElaW3D5 = {
  id: "g5.winter.ela.w3.d5",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Procedural writing: explain how a simple machine works",
  topicTag: "procedural-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.5.2", "CCSS.W.5.2.C"],
  hook: "You built and tested a simple machine this week — but could a total stranger build it again using only your words? Today you write clear, step-by-step 'how-it-works' instructions that leave nothing to guessing.",
  miniLesson: [
    "PROCEDURAL (how-it-works) writing explains a process in clear, ordered steps so a reader can follow it or understand it.",
    "Good procedural writing uses SEQUENCE WORDS (first, next, then, finally) and EXACT verbs (attach, push, lift) instead of vague ones (do, put).",
    "Start by naming the goal and any materials. Put the steps in the exact order they happen. Then explain the WHY (the science) so the reader really understands."
  ],
  workedExample: {
    prompt: "Fix this weak step so a stranger could follow it: 'Put the thing on the pointy part and push it.'",
    steps: [
      "Name the exact parts instead of 'thing' and 'pointy part.'",
      "Use an exact verb and add the order.",
      "Add the 'why' so the reader understands the science.",
      "Result: 'First, rest the ruler across the pencil so the pencil is the fulcrum. Then push down on one end — the lever multiplies your force to lift the load on the other end.'"
    ],
    answer: "First, rest the ruler across the pencil so the pencil is the fulcrum. Then push down on one end — the lever multiplies your force to lift the load on the other end."
  },
  items: [
    {
      id: "g5.winter.ela.w3.d5.q1",
      type: "multiple_choice",
      stem: "What is the goal of PROCEDURAL (how-it-works) writing?",
      choices: [
        "To talk the reader into agreeing with an opinion",
        "To explain a process in clear, ordered steps a reader can follow or understand",
        "To tell an exciting made-up story",
        "To describe a character's feelings"
      ],
      answerIndex: 1,
      explanation: "Procedural writing walks a reader through a process step by step so they can follow it or understand how it works.",
      hintLadder: [
        "Think about a recipe or an instruction sheet.",
        "What is it trying to help the reader DO or understand?",
        "It explains a process in clear, ordered steps."
      ]
    },
    {
      id: "g5.winter.ela.w3.d5.q2",
      type: "multiple_choice",
      stem: "Which sentence uses the CLEAREST, most exact how-it-works language?",
      choices: [
        "Do the stuff with the ramp thing.",
        "Put it up somehow.",
        "Next, slide the crate slowly up the ramp until it reaches the top of the platform.",
        "Get the crate up there."
      ],
      answerIndex: 2,
      explanation: "It uses a sequence word ('Next'), an exact verb ('slide'), and clear details a reader can actually follow.",
      hintLadder: [
        "Which one tells you exactly what to do and in what order?",
        "Look for an exact verb and a sequence word.",
        "'Next, slide the crate...' is clear and exact."
      ],
      misconceptionsTargeted: ["vague-verbs-ok"]
    },
    {
      id: "g5.winter.ela.w3.d5.q3",
      type: "multiple_choice",
      stem: "Why do sequence words like FIRST, NEXT, THEN, and FINALLY matter in how-it-works writing?",
      choices: [
        "They make the writing longer",
        "They show the reader the correct ORDER of the steps",
        "They add emotion to the story",
        "They are only used in poems"
      ],
      answerIndex: 1,
      explanation: "Sequence words show the order of the steps so the reader does them in the right order.",
      hintLadder: [
        "What would happen if the steps were out of order?",
        "These words tell you what comes first, next, and last.",
        "They show the ORDER of the steps."
      ]
    },
    {
      id: "g5.winter.ela.w3.d5.q4",
      type: "short_answer",
      stem: "Rewrite this vague instruction so a stranger could follow it exactly: 'Put the rope over the thing and pull to lift the box.' (It is describing a pulley.)",
      rubric: {
        level3: "Rewrites with exact parts (rope, pulley wheel), an exact verb, a sequence word, AND ideally why it helps (changes the direction of the pull), so a stranger could follow it.",
        level2: "Adds some exact detail and order but still leaves a vague word or misses a needed detail.",
        level1: "Stays vague or does not make it clearer."
      },
      exemplar: "First, loop the rope over the pulley wheel at the top. Then pull straight down on the free end of the rope — the pulley changes the direction of your pull, so pulling down lifts the box up.",
      hintLadder: [
        "Replace 'the thing' with the exact part (the pulley wheel).",
        "Add a sequence word and an exact verb.",
        "Explain briefly WHY pulling down lifts the box."
      ]
    },
    {
      id: "g5.winter.ela.w3.d5.q5",
      type: "short_answer",
      stem: "Write clear, ordered how-it-works instructions (3-4 steps) explaining how ONE simple machine — a ramp, lever, pulley, or wheel-and-axle — helps a person do a job. Use sequence words and exact verbs.",
      rubric: {
        level3: "Gives 3-4 correctly ordered steps with sequence words and exact verbs that correctly explain how the machine works, including at least a hint of the science (force made easier).",
        level2: "Steps are mostly clear and ordered but a sequence word, exact verb, or the science is weak or missing.",
        level1: "Steps are vague, out of order, or do not explain how the machine works."
      },
      exemplar: "How a ramp helps load a truck: First, lean a strong board from the ground up to the truck bed to make a ramp. Next, put the heavy box at the bottom of the ramp. Then push the box slowly up the slope — because the ramp spreads the lift over a longer distance, you need less force than lifting straight up. Finally, slide the box onto the truck bed at the top.",
      hintLadder: [
        "Pick one machine and name the job it helps with.",
        "Number your steps in the exact order, using first/next/then/finally.",
        "Use exact verbs and add one line on WHY the machine makes it easier."
      ]
    }
  ],
  reflectionPrompt: "Think of the last time a set of instructions confused you. What one detail, if it had been added, would have made it clear?",
  misconceptionBank: [
    {
      id: "vague-verbs-ok",
      label: "Thinks vague words like 'do,' 'put,' or 'thing' are clear enough",
      description: "Thinks the reader will 'just know' what a vague instruction means, instead of naming exact parts and actions.",
      coachMove: "Have the student swap every 'thing/stuff/do/put' for the exact part and an exact verb, then reread it as if they had never seen the machine before."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Clear or Confusing?",
      prompt:
        "Two instruction cards for the same lever: (A) 'Put the stick on the bump and push it down.' (B) 'Rest the ruler across the pencil, then press down firmly on one end.' Which card could a stranger actually follow — and what makes the other one confusing?",
      answer:
        "(B) is followable — it names exact parts (ruler, pencil) and an exact action (press down on one end). (A) is confusing because 'stick,' 'bump,' and 'push it' are vague, so a stranger would not know what to grab or how.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: How-It-Works Instruction Card",
      challenge:
        "Write and illustrate a 'How It Works' card for a simple machine you tested this week. Make the steps so clear that a younger student could follow them and understand WHY the machine makes work easier.",
      materials: ["Paper & markers, OR a document/drawing app"],
      steps: [
        "Choose your machine and write a one-line goal ('How a ramp helps lift a load').",
        "List any materials, then write 3-5 ordered steps using sequence words and exact verbs.",
        "Add one sentence explaining the science (how the force is made easier).",
        "Draw or label a small diagram so the words and picture work together."
      ],
      deliverable: "An illustrated How-It-Works card with a goal, ordered steps, and a science explanation.",
      choiceBoard: [
        "Make an illustrated instruction card with labeled steps.",
        "Record a 30-second 'how-to' narration reading your steps aloud.",
        "Write the steps as a numbered comic where each panel shows one step."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: How-It-Works Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w3.d5.arena1",
          type: "multiple_choice",
          stem: "A student's how-it-works paragraph lists the steps in the WRONG order. What is the best fix?",
          choices: [
            "Add more describing words about the machine",
            "Reorder the steps into the true order and add sequence words (first, next, then, finally)",
            "Make the paragraph shorter by deleting steps",
            "Change it into a persuasive essay"
          ],
          answerIndex: 1,
          explanation: "How-it-works writing must follow the real order of the process, and sequence words help the reader keep track of that order.",
          hintLadder: [
            "The main problem is the ORDER of the steps.",
            "How do you show the reader the correct order?",
            "Reorder them and add sequence words."
          ]
        },
        {
          id: "g5.winter.ela.w3.d5.arena2",
          type: "short_answer",
          stem: "Take this vague step and rewrite it clearly for a wheel-and-axle (like a wheelbarrow): 'Roll the thing with the wheel to move the heavy stuff.'",
          rubric: {
            level3: "Names exact parts (wheel, axle, handles, load), uses an exact verb and order, and hints at why the wheel-and-axle makes moving the load easier.",
            level2: "Adds exact detail and order but leaves a vague word or misses the science.",
            level1: "Stays vague or does not make the step clearer."
          },
          exemplar: "First, load the heavy bricks into the wheelbarrow's tray, over the wheel. Then lift the two handles and push forward — the wheel spinning on its axle rolls the load smoothly, so you move it with much less effort than dragging it.",
          hintLadder: [
            "Name the exact parts: wheel, axle, handles, and the load.",
            "Put the steps in order with exact verbs.",
            "Add why the wheel-and-axle makes the load easier to move."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Step-by-Step Breathing",
      prompt:
        "Do a calm 'procedure' for your body: FIRST, sit up tall. NEXT, breathe in slowly for 4 counts. THEN, hold for 2. FINALLY, breathe out for 4. Repeat the four-step sequence 3 times, noticing how following clear steps feels calm.",
      scienceTieIn: "Slow, ordered breathing tells your body to relax and lowers your heart rate — just like clear ordered steps make a process easy for your brain to follow.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You explained how a machine works step by step. Which was harder — getting the STEPS in order, or explaining the WHY (the science)? What did you do to make it clear?",
      badge: { id: "g5-winter-how-it-works-writer", name: "How-It-Works Writer", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
