// Grade 7 ELA/Writing — Fall Expedition, Week 8 (Harvest Showcase), Day 5.
// Topic: deliver and reflect — the season capstone. Grade 7: thesis-driven
// delivery, synthesis across subjects, and metacognitive goal-setting.

export const fallG7ElaW8D5 = {
  id: "g7.fall.ela.w8.d5",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Deliver and reflect — season capstone",
  topicTag: "capstone-reflection",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.SL.7.4", "CCSS.ELA-LITERACY.W.7.10"],
  hook: "This is it — your Fall Expedition capstone. Today you deliver a thesis-driven showcase that synthesizes every subject, adapt on your feet to your audience, and reflect with the honesty of someone who knows exactly how they grew.",
  miniLesson: [
    "Deliver the thesis, not just the pieces: open by stating your controlling idea, and after each piece say one sentence tying it back to that idea so the argument stays visible.",
    "Read the room and adapt: if faces look lost, slow down and re-explain a term; if they're nodding, move to your strongest evidence — great presenters adjust live.",
    "Reflect with evidence: don't just say 'I improved'; name the specific skill, the proof, and a concrete, measurable goal for next season."
  ],
  workedExample: {
    prompt: "Write a strong thesis-driven CLOSING for a fall showcase whose thesis is 'reliable claims come from evidence, not confidence.'",
    steps: [
      "Restate the thesis, now earned by the pieces you showed.",
      "Synthesize: name how two or three subjects each proved it.",
      "Lift it beyond the project into a bigger takeaway.",
      "Result: 'From mapping food webs to sizing up survey samples to sourcing an argument, this fall taught me the same lesson three times: a claim is only as strong as its evidence. I'll carry that skepticism into everything I read. Thank you for exploring the season with me.'"
    ],
    answer: "Restate the earned thesis, synthesize how subjects proved it, lift it bigger, then thank the audience."
  },
  items: [
    {
      id: "g7.fall.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "In a thesis-driven capstone, what should you do after presenting each featured piece?",
      choices: [
        "Move on silently to the next piece",
        "Introduce a brand-new unrelated topic",
        "Say one sentence tying that piece back to your controlling idea",
        "Apologize for the piece"
      ],
      answerIndex: 2,
      explanation: "Linking each piece back to the thesis keeps the argument visible so the showcase reads as one unified case, not a list.",
      hintLadder: [
        "How does the audience keep track of your big idea?",
        "Each piece should point back to something.",
        "Tie each piece back to your thesis in one sentence."
      ]
    },
    {
      id: "g7.fall.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "Mid-presentation, you notice several audience members look confused. The best ADAPTIVE move is to...",
      choices: [
        "Slow down and re-explain the term or point in simpler words",
        "Speed up to finish sooner",
        "Ignore them and keep reading",
        "Skip to the closing"
      ],
      answerIndex: 0,
      explanation: "Reading the room and adjusting live — slowing down, re-explaining — is a hallmark of skilled delivery.",
      hintLadder: [
        "What do confused faces tell you?",
        "Rushing makes confusion worse.",
        "Slow down and re-explain."
      ],
      misconceptionsTargeted: ["scripted-no-adapting"]
    },
    {
      id: "g7.fall.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "Which is the strongest evidence-based REFLECTION?",
      choices: [
        "I got better at stuff this fall.",
        "I got better at judging sources: I can now spot a biased sample, like when I caught my own 10-friend survey was too small. Next season I'll practice citing a source for every claim.",
        "The fall was fun.",
        "I did a lot of work."
      ],
      answerIndex: 1,
      explanation: "It names a specific skill, gives concrete proof, and sets a measurable next-season goal — reflection with evidence.",
      hintLadder: [
        "Which one names a SPECIFIC skill and proof?",
        "Vague praise isn't reflection.",
        "The detailed 'judging sources' answer is strongest."
      ]
    },
    {
      id: "g7.fall.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write the thesis-driven CLOSING for YOUR fall showcase: restate your controlling idea as now-proven, synthesize how at least two subjects supported it, and thank the audience.",
      rubric: {
        level3: "Restates a clear thesis AND synthesizes 2+ subjects as proof AND thanks the audience — reads as one unified argument.",
        level2: "Has a closing that restates the idea but synthesizes weakly or names only one subject.",
        level1: "Flat, missing the thesis, or just a list with no synthesis."
      },
      exemplar: "From tracing energy through a food web to testing whether my survey sample was fair, this fall proved my thesis over and over: good thinking follows the evidence, wherever it leads. I'll carry that into every claim I meet. Thank you for exploring the season with me.",
      hintLadder: [
        "Start by restating your controlling idea as proven.",
        "Name how two subjects each supported it.",
        "End with a genuine thank-you."
      ]
    },
    {
      id: "g7.fall.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Season reflection with evidence: name ONE skill you grew (with proof), ONE thing that genuinely challenged you (and why), and ONE measurable goal for next season.",
      rubric: {
        level3: "Specific growth WITH concrete proof + a genuine challenge WITH a reason + a measurable next-season goal — all three present.",
        level2: "Two of the three clearly stated, or all three but one lacks the proof/reason/measurability.",
        level1: "Vague or fewer than two elements."
      },
      exemplar: "I grew at separating correlation from causation — I caught myself claiming screen time 'caused' bad grades and fixed it to 'linked to.' The hardest part was systems thinking, because tracing 3+ effects means holding many links in mind at once. Next season my goal is to read and correctly label the type of every graph I meet within 30 seconds.",
      hintLadder: [
        "What improved — and what's your proof?",
        "What challenged you, and WHY was it hard?",
        "Set a goal you could actually measure."
      ]
    }
  ],
  reflectionPrompt: "You've completed the Fall Expedition capstone! Look back at your Week 1 goals — which did you reach, and which one is worth carrying forward? Save your strongest piece to compare with next season.",
  misconceptionBank: [
    {
      id: "scripted-no-adapting",
      label: "Delivers a rigid script without reading the audience",
      description: "Powers through a memorized talk even when the audience is clearly lost.",
      coachMove: "Have them plan two 'adapt points' where they'll check faces and either slow down or speed up."
    },
    {
      id: "vague-reflection",
      label: "Reflects without evidence",
      description: "Says 'I got better' with no specific skill, proof, or measurable goal.",
      coachMove: "Require the pattern: skill + proof + measurable next-season goal for every reflection."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Ways to End a Capstone",
      prompt:
        "Would you rather end your showcase with 'Um, that's all I have' OR with 'Across three subjects, the evidence kept pointing the same way: follow the evidence, not the confidence. Thank you for exploring fall with me'? Which leaves the audience with a unified idea — and why?",
      answer:
        "The second. It restates the thesis, synthesizes across subjects, and thanks the audience, so people leave with one earned takeaway — far stronger than trailing off with 'that's all,' which throws away the whole argument you built.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Expedition Time Capsule",
      challenge:
        "Make a capstone 'time capsule' of your whole Fall Expedition: choose your proudest piece and say how it proves your thesis, write an evidence-based note to your next-season self, and design a one-line motto that captures your controlling idea.",
      steps: [
        "Choose your proudest fall piece and write one line on how it proves your thesis.",
        "Write a note to next-season you: one skill you grew (with proof), one challenge, one measurable goal.",
        "Invent a one-line motto that captures your season's controlling idea.",
        "Add a harvest/autumn touch so it feels like a real celebration of the capstone."
      ],
      deliverable: "A capstone time-capsule page: proudest piece tied to your thesis, an evidence-based note to your future self, and a one-line motto.",
      choiceBoard: [
        "Make a decorated time-capsule page.",
        "Record or write a 60-second 'evidence-based letter to next-season me.'",
        "Design an autumn 'capstone badge' with your thesis-motto on it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Capstone Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "Which is the BEST way to close a thesis-driven capstone showcase?",
          choices: [
            "Introduce a brand-new fact you forgot earlier.",
            "Just stop talking and sit down.",
            "Apologize for any mistakes you made.",
            "Restate your thesis as proven, synthesize how your subjects supported it, and thank the audience."
          ],
          answerIndex: 3,
          explanation: "A capstone closing lands the thesis and shows how the pieces proved it — it doesn't add new info, apologize, or trail off.",
          hintLadder: [
            "What should the audience remember as you finish?",
            "A capstone ties the pieces back to one idea.",
            "Restate the thesis as proven, synthesize, and thank them."
          ]
        },
        {
          id: "g7.fall.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a full capstone closing: restate your thesis as proven, synthesize how at least TWO subjects supported it, and thank your audience.",
          rubric: {
            level3: "Restates a clear thesis as proven AND synthesizes 2+ subjects AND thanks the audience — one unified argument.",
            level2: "Restates the idea but synthesis is weak or names only one subject.",
            level1: "Flat, missing the thesis, or adds new information instead of closing."
          },
          exemplar: "From food webs to survey samples to sourcing an argument, this fall proved one thing three times: a claim is only as strong as its evidence. I'll question every 'trust me' I hear from now on. Thank you for exploring the season with me.",
          hintLadder: [
            "Restate your controlling idea as now-proven.",
            "Name how two subjects each backed it up.",
            "End with a genuine thank-you."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Proud Breath",
      prompt:
        "Sit or stand tall. Breathe in for 4 counts while thinking of one specific thing you're proud of this fall, hold for 4, and breathe out for 4 letting any nerves go. Repeat 3 times.",
      scienceTieIn: "Slow, steady breathing calms your body's stress response, helping you feel grounded and proud as you finish the capstone.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The Fall Expedition capstone is complete! Look back at where you started in Week 1 — what's the biggest, most specific way you've grown, and what measurable goal are you setting for next season?",
      badge: { id: "g7-fall-capstone-graduate", name: "Fall Capstone Graduate", emoji: "🍁" },
      estimatedMinutes: 7
    }
  }
};
