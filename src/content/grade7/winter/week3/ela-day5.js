// Grade 7 ELA/Writing — Winter Expedition, Week 3 (Forces & Motion),
// Day 5. Grade 7 counterpart of g6.winter.ela.w3.d5. Same topic —
// procedural / how-it-works writing about a simple machine — pitched
// one level up: technical explanatory writing with an explicit cause-
// and-effect chain (the science of WHY), precise transitions, and
// audience-tuned word choice. Capstone of the Forces & Motion week.

export const winterG7ElaW3D5 = {
  id: "g7.winter.ela.w3.d5",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Technical procedural writing: explain how a simple machine works with cause-and-effect",
  topicTag: "procedural-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.2", "CCSS.W.7.2.C"],
  hook: "This week you built a machine and proved it trades force for distance. Now the real test: can your writing make a stranger not just REBUILD it, but UNDERSTAND why it works? Today you write technical instructions that chain each step to its scientific cause — precise, ordered, and tuned to your reader.",
  miniLesson: [
    "Technical procedural writing goes beyond ordered steps: it explains the CAUSE-AND-EFFECT behind each step so the reader understands the mechanism, not just the motions. Each 'do this' is paired with a 'because this happens.'",
    "Precise transitions do more than sequence. Beyond first/next/then, use cause-effect and relationship transitions — because, as a result, which means, so that, in order to — to show HOW steps connect.",
    "Tune word choice to your audience. Define or simplify technical terms (fulcrum, mechanical advantage) for a younger reader; use them directly for an expert one. Precise verbs and named parts always beat vague ones (attach, pivot, rest — not do, put)."
  ],
  workedExample: {
    prompt: "Upgrade this Grade-6-level step into technical writing with a cause-and-effect chain: 'First, rest the ruler across the pencil, then push down on one end to lift the load.'",
    steps: [
      "Keep the clear parts and order (ruler, pencil, push down).",
      "Name the mechanism: the pencil is the fulcrum, the ruler is the lever arm.",
      "Add a cause-effect transition that explains WHY it works.",
      "Result: 'First, rest the ruler across the pencil so that the pencil becomes the fulcrum — the fixed pivot point. Then push down on the long end; because the effort travels a greater distance than the load rises, the lever multiplies your force, which lifts the load with less effort.'"
    ],
    answer: "First, rest the ruler across the pencil so that the pencil becomes the fulcrum — the fixed pivot point. Then push down on the long end; because the effort travels a greater distance than the load rises, the lever multiplies your force, which lifts the load with less effort."
  },
  items: [
    {
      id: "g7.winter.ela.w3.d5.q1",
      type: "multiple_choice",
      stem: "What makes writing TECHNICAL procedural writing, beyond just listing steps in order?",
      choices: [
        "It uses as many big words as possible",
        "It leaves out the science so it stays short",
        "It tells an exciting fictional story about the machine",
        "It pairs each step with the cause-and-effect reasoning that explains WHY the step works"
      ],
      answerIndex: 3,
      explanation: "Technical procedural writing explains the mechanism — each step is tied to the cause-and-effect that makes it work, so the reader understands, not just copies.",
      hintLadder: [
        "What does a reader gain if you explain WHY, not just WHAT?",
        "Think 'do this BECAUSE this happens.'",
        "It ties each step to its cause-and-effect reasoning."
      ]
    },
    {
      id: "g7.winter.ela.w3.d5.q2",
      type: "multiple_choice",
      stem: "Which sentence best uses a CAUSE-AND-EFFECT transition to explain a ramp, not just sequence the steps?",
      choices: [
        "Next, push the crate up the ramp. After that, you are done.",
        "Push the crate up the long ramp; because the slope spreads the lift over a greater distance, you need less force than lifting it straight up.",
        "First push the crate. Then it is on the truck.",
        "Put the crate somewhere up high using the ramp thing."
      ],
      answerIndex: 1,
      explanation: "It uses 'because' to link the action to its scientific cause (distance spread → less force), explaining the mechanism rather than only ordering steps.",
      hintLadder: [
        "Which sentence explains WHY the ramp helps, not just WHAT to do?",
        "Look for a cause-effect word like 'because' tied to the science.",
        "The 'because the slope spreads the lift...' sentence explains the cause."
      ],
      misconceptionsTargeted: ["sequence-without-cause"]
    },
    {
      id: "g7.winter.ela.w3.d5.q3",
      type: "multiple_choice",
      stem: "You are writing pulley instructions for a 7-year-old reader. Which is the BEST audience-tuned choice?",
      choices: [
        "Use a simple term and briefly define it: 'the pulley is a wheel with a groove that the rope rides in, so pulling down lifts the box up'",
        "Say 'do the pulley stuff' to keep it simple",
        "Use 'mechanical advantage' and 'tension vector' with no explanation",
        "Leave out how it works entirely so the reader isn't confused"
      ],
      answerIndex: 0,
      explanation: "For a young reader, keep terms simple and define them in plain words while still explaining the mechanism — clear AND accurate, tuned to the audience.",
      hintLadder: [
        "Who is the reader, and what words will they know?",
        "The best choice keeps it simple but still explains and defines.",
        "Define the pulley simply and say why pulling down lifts the box."
      ]
    },
    {
      id: "g7.winter.ela.w3.d5.q4",
      type: "short_answer",
      stem: "Rewrite this vague instruction into ONE clear technical sentence for a wheel-and-axle (like a wheelbarrow), including a cause-and-effect transition that explains why it helps: 'Roll the thing with the wheel to move the heavy stuff.'",
      rubric: {
        level3: "Rewrites with specific named parts (wheel, axle, handles, load), a precise verb, AND a cause-and-effect transition (because/so that/which means) explaining why the wheel-and-axle reduces the effort to move the load.",
        level2: "Adds specificity and order but the cause-and-effect link or a key part name is weak or missing.",
        level1: "Stays vague or does not explain the mechanism."
      },
      exemplar: "Load the bricks into the tray over the wheel, then lift the handles and push forward; because the wheel turns freely on its axle instead of dragging on the ground, far less friction resists you, which means you move the heavy load with much less effort.",
      hintLadder: [
        "Name the real parts: wheel, axle, handles, load.",
        "Add a cause-effect transition like 'because' or 'which means.'",
        "Explain WHY the turning wheel reduces the effort (less friction than dragging)."
      ]
    },
    {
      id: "g7.winter.ela.w3.d5.q5",
      type: "short_answer",
      stem: "Write clear, ordered technical how-it-works instructions (4-5 steps) explaining how ONE simple machine — ramp, lever, pulley, or wheel-and-axle — helps a person do a job. Use precise transitions AND weave in a cause-and-effect chain that explains the science (how the force is made easier). Name your intended audience in one phrase.",
      rubric: {
        level3: "Names an audience; presents 4-5 correctly ordered steps with precise verbs and varied transitions (including a cause-effect one), AND builds a clear cause-and-effect chain explaining accurately how the chosen machine trades force for distance (or reduces friction) to make the job easier — with word choice suited to the stated audience.",
        level2: "Steps are ordered and mostly clear, but the cause-and-effect science, a transition, or audience-tuning is weak or partly missing.",
        level1: "Steps are vague, out of order, or do not explain the mechanism / cause-and-effect."
      },
      exemplar: "For a fellow 7th-grader learning to load firewood: First, lean a long, sturdy board from the ground to the truck bed so that it forms a ramp — an inclined plane. Next, set the heavy log at the base. Then push the log steadily up the slope; because the ramp spreads the lifting over a longer distance, the force you need at each moment is smaller than lifting straight up, which is the ramp's mechanical advantage. As a result, you trade a longer path for an easier push. Finally, guide the log onto the truck bed at the top. The total work stays the same, but the ramp makes the force manageable.",
      hintLadder: [
        "State your audience, then pick one machine and the job it helps with.",
        "Order 4-5 steps with precise verbs and at least one cause-effect transition (because/as a result).",
        "Chain the science: less force BECAUSE the distance is longer — that's the trade-off."
      ]
    }
  ],
  reflectionPrompt: "Think of a time technical instructions confused you. Was the problem the ORDER of the steps, a missing WHY, or words aimed at the wrong audience? How would you fix it?",
  misconceptionBank: [
    {
      id: "sequence-without-cause",
      label: "Thinks ordered steps alone make writing 'technical'",
      description: "Sequences steps correctly (first/next/then) but never explains the cause-and-effect that makes each step work, so the reader can copy but not understand.",
      coachMove: "Have the student add a 'because...' clause to at least two steps, linking the action to the science. Sequence tells WHAT; cause-and-effect tells WHY."
    },
    {
      id: "audience-blind-jargon",
      label: "Uses technical jargon without tuning it to the reader",
      description: "Drops terms like 'mechanical advantage' or 'fulcrum' with no definition for a younger or non-expert reader, or over-simplifies for an expert one.",
      coachMove: "Ask 'who is reading this, and what words do they already know?' Then define or swap terms to match — clear for the young reader, precise for the expert."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Follow It or Understand It?",
      prompt:
        "Two lever cards: (A) 'Rest the ruler across the pencil, then press down on one end.' (B) 'Rest the ruler across the pencil so the pencil is the fulcrum; then press one end down, because the long arm multiplies your force to lift the load.' Both can be FOLLOWED — but which one also lets the reader UNDERSTAND, and what did card B add?",
      answer:
        "Both are followable, but card B lets the reader UNDERSTAND — it adds the cause-and-effect science ('because the long arm multiplies your force') and names the fulcrum. That 'why' is what turns plain steps into technical writing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Technical How-It-Works Card",
      challenge:
        "Write and illustrate a technical 'How It Works' card for a simple machine you tested this week. Pick a specific audience, then make the steps so clear — and the cause-and-effect science so well explained — that your reader could rebuild it AND explain why it works.",
      materials: ["Paper & markers, OR a document/drawing app"],
      steps: [
        "Choose your machine and name your audience (e.g., 'a younger sibling' or 'a classmate').",
        "Write a one-line goal, then list materials and 4-5 ordered steps using precise verbs and varied transitions.",
        "Add a cause-and-effect chain: for at least two steps, explain WHY it works ('because...', 'which means...').",
        "Draw or label a diagram, and tune your word choice (define terms) to match your chosen audience."
      ],
      deliverable: "An illustrated technical How-It-Works card with a stated audience, ordered steps, cause-and-effect science, and a labeled diagram.",
      choiceBoard: [
        "Make an illustrated card with cause-and-effect callouts beside the steps.",
        "Record a 45-second narrated 'how AND why it works' explainer reading your card aloud.",
        "Write the card twice — once for a 7-year-old, once for an engineer — and note what you changed for each audience."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: How-It-Works Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w3.d5.arena1",
          type: "multiple_choice",
          stem: "A student's how-it-works paragraph has the steps in the right order and clear verbs, but a reader still doesn't understand WHY the machine helps. What is the best revision?",
          choices: [
            "Add more adjectives describing how the machine looks",
            "Delete steps to make it shorter",
            "Add cause-and-effect explanations (because, as a result, which means) that link each key step to the science of the mechanism",
            "Rewrite it as a persuasive essay"
          ],
          answerIndex: 2,
          explanation: "The steps are ordered but the mechanism is unexplained. Adding cause-and-effect reasoning tells the reader WHY each step works, turning a step list into true technical writing.",
          hintLadder: [
            "The order is fine — what's missing is the WHY.",
            "Which revision explains the mechanism, not the looks?",
            "Add cause-and-effect explanations linking steps to the science."
          ]
        },
        {
          id: "g7.winter.ela.w3.d5.arena2",
          type: "short_answer",
          stem: "Take this step and rewrite it as ONE technical sentence for a pulley, tuned for a curious 8-year-old: 'Put the rope over the thing and pull to lift the box.' Include a cause-and-effect explanation and define any tricky term simply.",
          rubric: {
            level3: "Names the pulley (defined simply, e.g., a grooved wheel the rope rides in), uses a precise verb and order, AND includes a cause-and-effect clause explaining that pulling DOWN lifts the box because the pulley changes the direction of the force — all in language an 8-year-old can follow.",
            level2: "Adds specificity and some cause-effect, but leaves a vague word, skips the definition, or the audience-tuning is off.",
            level1: "Stays vague or omits the cause-and-effect / definition."
          },
          exemplar: "First, loop the rope over the pulley — a little wheel with a groove that the rope rides in — at the top. Then pull straight down on the loose end, because the pulley flips the direction of your pull, which means pulling down makes the box go up.",
          hintLadder: [
            "Name and simply define the pulley for a young reader.",
            "Add a cause-effect clause: pulling down lifts the box BECAUSE...",
            "The pulley changes the DIRECTION of the force — say that plainly."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Cause-and-Effect Breathing",
      prompt:
        "Run a calm 'because' procedure for your body: FIRST, sit tall SO THAT your lungs have room. NEXT, breathe in for 4 counts, WHICH MEANS more oxygen reaches your blood. THEN hold for 2. FINALLY, breathe out for 6, AS A RESULT your heart rate slows. Repeat the chain 3 times, noticing each cause and effect.",
      scienceTieIn: "Slow, ordered breathing signals your nervous system to relax and lowers your heart rate — a real cause-and-effect chain, just like the ones that make your technical writing explain WHY, not only WHAT.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You explained how a machine works AND why. Which was harder — ordering the steps, chaining the cause-and-effect science, or tuning the words to your audience? What did you do to get it right?",
      badge: { id: "g7-winter-technical-writer", name: "Technical Explainer", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
