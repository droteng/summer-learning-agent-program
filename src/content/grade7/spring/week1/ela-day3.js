// Grade 7 ELA/Writing — Spring Expedition, Week 1 (Spring Awakening), Day 3.
// Topic: goal-setting writing pitched up to Grade 7 — a testable hypothesis with
// a controlled variable, plus a multi-paragraph proposal that anticipates a
// counterpoint.

export const springG7ElaW1D3 = {
  id: "g7.spring.ela.w1.d3",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Goal-setting writing: a testable question",
  topicTag: "testable-question-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1", "CCSS.ELA-LITERACY.W.7.2"],
  hook: "A sharp question is only the start. This spring you'll write a proposal a skeptic couldn't wave away: a testable hypothesis with a clear prediction, a controlled variable, and an answer to the objection someone WILL raise. Today you turn a curiosity into an argument worth funding.",
  miniLesson: [
    "A testable hypothesis is more than a question — it makes a predicted claim you can measure: 'If bean plants get more sunlight, then they will grow taller, because light powers the food they build.' It names the independent variable (what you change), the dependent variable (what you measure), and a because-reason.",
    "A fair test controls other variables: to isolate sunlight, keep water, soil, pot size, and seed type the SAME across groups. Naming your controlled variables makes your claim credible.",
    "Strong Grade 7 proposals are multi-paragraph and anticipate a counterpoint: state your claim, support it with reasoning, then acknowledge and answer an objection ('Someone might argue temperature, not light, caused the difference — I control for that by keeping all plants in the same room')."
  ],
  workedExample: {
    prompt: "Turn this vague idea into a testable hypothesis with a controlled variable and a because-reason: 'I want to know about plants and water.'",
    steps: [
      "Choose the independent variable (what you change): the amount of water per day.",
      "Choose the dependent variable (what you measure): plant height after two weeks.",
      "Name variables to control (keep the same): light, soil, pot size, and seed type.",
      "Combine into an if/then/because claim that names the controlled setup.",
      "Result: 'If bean plants get more water each day, then they will grow taller in two weeks, because water is a raw material for growth — as long as light, soil, and seed type are kept the same.'"
    ],
    answer: "If bean plants get more water each day, then they will grow taller in two weeks, because water is a raw material for growth — with light, soil, and seed type kept the same."
  },
  items: [
    {
      id: "g7.spring.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which statement is the strongest testable HYPOTHESIS for a growth experiment?",
      choices: [
        "Flowers are the best part of spring.",
        "If bean plants get more sunlight, then they will grow taller in three weeks, because light powers the food they make — with water and soil kept the same.",
        "I wonder whether gardening is fun for most people.",
        "Sunflowers are prettier than tulips in the spring."
      ],
      answerIndex: 1,
      explanation: "It makes an if/then predicted claim, names the variable changed (sunlight) and measured (height), gives a because-reason, and controls other variables — everything a testable hypothesis needs.",
      hintLadder: [
        "A hypothesis predicts a measurable result, not an opinion.",
        "Look for if/then, a reason, and controlled variables.",
        "The sunlight-and-height statement has all of these."
      ]
    },
    {
      id: "g7.spring.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "In the hypothesis 'If radish seeds are kept warmer, then they will sprout sooner, because warmth speeds sprouting,' which is the INDEPENDENT variable (the thing changed on purpose)?",
      choices: [
        "How many days until the seeds sprout",
        "The type of seed used",
        "The temperature the seeds are kept at",
        "The size of the pot"
      ],
      answerIndex: 2,
      explanation: "The independent variable is what the experimenter changes on purpose — here, the temperature. Days-to-sprout is the dependent variable (what is measured).",
      hintLadder: [
        "The independent variable is the cause you deliberately change.",
        "Which factor does the experimenter set — temperature or the result?",
        "Temperature is changed on purpose; sprouting time is the measured result."
      ],
      misconceptionsTargeted: ["independent-dependent-swap"]
    },
    {
      id: "g7.spring.ela.w1.d3.q3",
      type: "multiple_choice",
      stem: "A student's proposal claims more sunlight made plants taller. Which sentence BEST strengthens the argument by anticipating a counterpoint?",
      choices: [
        "Someone might argue the sunny plants just got warmer, so I kept all plants in the same room to hold temperature constant and isolate light.",
        "Sunlight is my favorite variable to study.",
        "Everyone already knows sunlight helps plants grow.",
        "I really hope my hypothesis turns out to be correct."
      ],
      answerIndex: 0,
      explanation: "A strong Grade 7 argument names a likely objection (warmth, not light) and answers it by explaining how that variable was controlled — this makes the claim credible.",
      hintLadder: [
        "Which sentence raises an objection AND answers it?",
        "Look for 'someone might argue...' followed by how it's handled.",
        "The temperature-controlled sentence anticipates and defeats a counterpoint."
      ]
    },
    {
      id: "g7.spring.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Write your own testable hypothesis for a spring growth experiment. It must be an if/then claim that names the independent variable, the dependent variable, and a because-reason.",
      rubric: {
        level3: "Writes an if/then hypothesis that clearly names the variable changed, the result measured, AND a because-reason for the predicted effect.",
        level2: "Writes a testable prediction but leaves the reason vague, or one of the two variables unclear.",
        level1: "Writes an opinion, a non-predictive question, or something that can't be measured."
      },
      exemplar: "If marigold seeds are soaked in water overnight before planting, then they will sprout in fewer days than dry seeds, because pre-soaking softens the seed coat so water reaches the embryo faster.",
      hintLadder: [
        "Start with 'If [what you change], then [what you measure]...'",
        "Add 'because...' and give the reason you expect that result.",
        "Check that both the changed variable and the measured result are clear."
      ]
    },
    {
      id: "g7.spring.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Write a short multi-paragraph proposal (2 short paragraphs) for your spring growth experiment. Paragraph 1: state your hypothesis and why it matters. Paragraph 2: name one likely counterpoint and explain how you'll control for it.",
      rubric: {
        level3: "Two focused paragraphs: the first states a testable hypothesis and its purpose; the second names a real counterpoint (a confounding variable) AND explains how it will be controlled.",
        level2: "Includes a hypothesis and some structure but the counterpoint or its control is thin, or the paragraphs blur together.",
        level1: "No clear hypothesis, or no genuine counterpoint addressed."
      },
      exemplar: "I want to test whether bean seeds sprout faster on a warm windowsill than in a cool basement. This matters because if warmth speeds sprouting, I can start my spring garden earlier and get an earlier harvest. My hypothesis is that if seeds are kept warmer, then they will sprout in fewer days, because warmth speeds the chemical reactions of germination.\n\nSomeone might argue that the windowsill seeds sprouted faster only because they got more light, not more warmth. To control for that, I will cover both groups so they receive the same amount of light and differ only in temperature. That way, any difference in sprouting time can be linked to warmth rather than light.",
      hintLadder: [
        "Paragraph 1: state your if/then hypothesis and one reason it matters to you.",
        "Paragraph 2: name a variable someone might blame instead of yours.",
        "Explain how you'll keep that variable the same across groups so it can't be the cause."
      ]
    }
  ],
  reflectionPrompt: "Beyond plants, name one claim about YOURSELF you could test this spring (like 'Reading before bed helps me fall asleep faster'). What variable would you have to control to make it a fair test?",
  misconceptionBank: [
    {
      id: "opinion-as-testable",
      label: "Confuses an opinion claim with a testable hypothesis",
      description: "Thinks a claim about taste or feelings ('Tulips are prettier than roses') can serve as a testable hypothesis.",
      coachMove: "Ask: 'Could two people measure this and get the same number?' If it rests on personal taste, guide them to swap in a measurable dependent variable like height, count, or days-to-sprout."
    },
    {
      id: "independent-dependent-swap",
      label: "Swaps the independent and dependent variables",
      description: "Mislabels the result being measured as the thing being changed, or vice versa.",
      coachMove: "Have the student finish two sentences: 'I change the ___' (independent) and 'I measure the ___' (dependent). The cause you set is independent; the outcome you record is dependent."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Hypothesis or Just an Opinion?",
      prompt:
        "Two spring statements: (A) 'Springtime is the happiest season.' (B) 'If bean plants sit near a sunny window, then they will grow taller than shaded ones in two weeks, because light powers their growth.' Which one is a testable hypothesis you could support with measurements — and which is just an opinion?",
      answer:
        "(B) is a testable hypothesis — it predicts a measurable result, names what changes and what's measured, and gives a reason. (A) rests on personal feelings, so no experiment can settle it. A hypothesis gives everyone the same measurable evidence.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: My Experiment Proposal Card",
      challenge:
        "Create a 'proposal card' that could convince a skeptical reviewer to approve your spring growth experiment. It must headline your hypothesis, name your controlled variables, and answer one counterpoint.",
      steps: [
        "Write your if/then/because hypothesis as the headline.",
        "List your independent variable, dependent variable, and at least two controlled variables.",
        "Add a 'They might say... / I answer...' box that names one objection and how you control for it.",
        "Finish with a one-sentence prediction and why the result would matter."
      ],
      deliverable: "A proposal card with a headlined hypothesis, labeled variables, a counterpoint answered, and a prediction.",
      choiceBoard: [
        "Design the proposal card as a poster (drawn or typed).",
        "Record a 45-second 'proposal pitch' reading your hypothesis and answering the counterpoint aloud.",
        "Write a short persuasive letter to a 'grant reviewer' arguing your experiment deserves approval."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Testable Hypothesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Which experiment is NOT a fair test of the hypothesis 'More sunlight makes bean plants grow taller'?",
          choices: [
            "Two groups differ only in sunlight; water, soil, and seed type are identical.",
            "All plants sit in the same warm room, differing only in hours of light.",
            "Both groups use the same seeds and pots, changing only light exposure.",
            "The sunny group also gets more water and richer soil than the shaded group."
          ],
          answerIndex: 3,
          explanation: "If the sunny group also gets more water and richer soil, those uncontrolled variables could cause the difference — so it isn't a fair test of sunlight alone.",
          hintLadder: [
            "A fair test changes only ONE variable.",
            "Which option lets more than just sunlight differ between groups?",
            "Extra water and soil are confounding variables — that's the unfair one."
          ]
        },
        {
          id: "g7.spring.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Take this weak idea — 'I want to do something with seeds this spring' — and rewrite it as a testable hypothesis that names the independent variable, the dependent variable, and one variable you'd control.",
          rubric: {
            level3: "Produces an if/then hypothesis naming the variable changed, the result measured, AND at least one controlled variable to keep the test fair.",
            level2: "Produces a testable prediction but leaves the reason or a controlled variable unclear.",
            level1: "Stays vague or writes an opinion instead of a hypothesis."
          },
          exemplar: "If bean seeds are planted 1 cm deep versus 4 cm deep, then the shallow seeds will sprout in fewer days, because they reach the surface sooner — while I keep water, light, and soil type the same for both groups.",
          hintLadder: [
            "Choose ONE thing about the seeds to change (depth, soaking, spacing...).",
            "Choose ONE result to measure and give a because-reason.",
            "Name at least one variable you'll hold constant to keep it fair."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Question the Breeze",
      prompt:
        "Sit or stand tall. Breathe in slowly for 4 counts imagining a fresh spring breeze, hold for 2, and breathe out for 4. On each slow exhale, silently frame one curiosity as an 'If... then...' claim. Repeat for 4 gentle breaths.",
      scienceTieIn: "Slow breathing calms your nervous system and sharpens working memory, which helps you build tighter claims and spot the counterpoints someone else might raise.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write the testable hypothesis you're most excited to explore this spring as an 'If... then... because...' claim. Then name the one counterpoint a skeptic would raise — and how you'd answer it.",
      badge: { id: "g7-spring-hypothesis-sprout", name: "Hypothesis Sprout", emoji: "🌸" },
      estimatedMinutes: 7
    }
  }
};
