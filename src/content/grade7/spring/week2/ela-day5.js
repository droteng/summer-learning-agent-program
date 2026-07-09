// Grade 7 ELA/Writing — Spring Expedition, Week 2 (Plants & Growth), Day 5.
// Topic: multi-paragraph informational writing — a structured lab report with
// analysis (method, observations, results/analysis) and transitions.

export const springG7ElaW2D5 = {
  id: "g7.spring.ela.w2.d5",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Multi-paragraph informational writing — a lab report with analysis",
  topicTag: "informational-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.2", "CCSS.W.7.2.C"],
  hook: "You ran a seed-growth experiment all week. Now you write like a real science communicator: a multi-paragraph report that not only records what happened, but ANALYZES what the data means — connected with smooth transitions so a reader follows your thinking.",
  miniLesson: [
    "A strong lab report is organized into linked paragraphs: an introduction with a clear thesis (what you tested), a Method paragraph, an Observations paragraph, and a Results/Analysis paragraph that interprets the data and draws a conclusion.",
    "Grade-7 reports don't just RECORD data — they ANALYZE it. Analysis explains WHY the results turned out as they did and what they mean, using evidence from the observations to support the claim.",
    "Transitions and precise language hold the paragraphs together: words like 'first,' 'as a result,' 'in contrast,' and 'therefore' guide the reader. Use a formal, objective tone and text features (headings, a data table) to organize information."
  ],
  workedExample: {
    prompt: "Turn this raw idea into an analysis sentence with evidence: 'Sunny seed 9 cm, dark seed 2 cm.' What does the data mean, and how do you show your reasoning?",
    steps: [
      "State the claim (what the data shows): light affected growth.",
      "Add the evidence (specific numbers): the sunny seed reached 9 cm while the dark one reached only 2 cm.",
      "Explain WHY (the reasoning/analysis): light powers photosynthesis, so more light meant more food and faster growth.",
      "Link it with a transition and formal tone: 'These results indicate that light strongly influences growth, because...'"
    ],
    answer: "Analysis = claim + specific evidence + reasoning: 'These results indicate that light drives growth: the sunny seed reached 9 cm while the dark one reached only 2 cm, likely because light powers the photosynthesis that fuels growth.'"
  },
  items: [
    {
      id: "g7.spring.ela.w2.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence belongs in the RESULTS/ANALYSIS paragraph (not just Observations) of a Grade-7 lab report?",
      choices: [
        "On Day 4, the sprout measured 3 cm.",
        "I planted one seed 2 cm deep in each cup.",
        "Because the watered seeds grew twice as tall as the dry ones, the data suggest water strongly affects growth rate.",
        "The plant was really pretty and green."
      ],
      answerIndex: 2,
      explanation: "Results/analysis interprets the data — it makes a claim ('water affects growth'), cites the comparison as evidence, and explains what it means, unlike a raw observation or a step.",
      hintLadder: [
        "Analysis explains what the data MEANS, not just what happened.",
        "Which sentence draws a conclusion AND uses evidence?",
        "The 'because... the data suggest...' sentence interprets the results."
      ]
    },
    {
      id: "g7.spring.ela.w2.d5.q2",
      type: "multiple_choice",
      stem: "Which revision best replaces the vague sentence 'The plant grew a lot' with precise, evidence-based language for a report?",
      choices: [
        "The plant increased from 2 cm on Day 1 to 11 cm on Day 6, a gain of 9 cm.",
        "The plant grew a whole bunch, honestly.",
        "The plant was the best grower of all time.",
        "The plant grew and it was cool to watch."
      ],
      answerIndex: 0,
      explanation: "Precise informational writing uses specific measurements and a clear comparison instead of vague or opinion-based words.",
      hintLadder: [
        "Which choice gives exact numbers instead of vague words?",
        "Look for specific measurements and a stated change.",
        "The '2 cm to 11 cm, a gain of 9 cm' sentence is precise."
      ],
      misconceptionsTargeted: ["vague-not-precise"]
    },
    {
      id: "g7.spring.ela.w2.d5.q3",
      type: "multiple_choice",
      stem: "Why does a multi-paragraph report use transition words like 'as a result,' 'in contrast,' and 'therefore'?",
      choices: [
        "To make the report sound fancier for no reason",
        "To guide the reader through the logic and show how ideas connect",
        "Because opinions require transition words",
        "To make each paragraph longer"
      ],
      answerIndex: 1,
      explanation: "Transitions clarify the relationships between ideas — cause, contrast, conclusion — so the reader can follow the writer's reasoning across paragraphs.",
      hintLadder: [
        "Transitions signal HOW two ideas relate.",
        "Words like 'therefore' and 'in contrast' show cause or difference.",
        "They guide the reader through the writer's logic."
      ]
    },
    {
      id: "g7.spring.ela.w2.d5.q4",
      type: "short_answer",
      stem: "Write a RESULTS/ANALYSIS paragraph (2-3 sentences) for this data: seeds given fertilizer grew to 14 cm, while unfertilized seeds grew to 8 cm in the same week. Make a claim, cite the evidence, and explain what it means. Use one transition word.",
      rubric: {
        level3: "States a clear claim (fertilizer aided growth) supported by the specific numbers as evidence AND explains the reasoning/meaning, using at least one transition word and a formal tone.",
        level2: "Makes a claim with some evidence but weak reasoning or no transition word.",
        level1: "Restates data only, gives opinion, or draws no conclusion."
      },
      exemplar: "The data show that fertilizer increased plant growth. Specifically, the fertilized seeds reached 14 cm while the unfertilized seeds reached only 8 cm in the same week. As a result, we can conclude that the extra nutrients from the fertilizer supported faster, healthier growth.",
      hintLadder: [
        "Start with a claim about what the data shows.",
        "Back it with the two specific heights as evidence.",
        "Add a transition word and explain WHY the difference happened."
      ]
    },
    {
      id: "g7.spring.ela.w2.d5.q5",
      type: "short_answer",
      stem: "Write a short introduction paragraph (2-3 sentences) for a seed-growth lab report. Include the purpose of the experiment and a clear thesis about what you tested, in a formal, objective tone.",
      rubric: {
        level3: "Provides an introduction that states the experiment's purpose AND a clear thesis (the specific question/variable tested), in precise, formal, informational language.",
        level2: "Introduces the topic but the purpose or thesis is vague, or the tone slips into opinion.",
        level1: "Off-topic, opinion-based, or missing a clear purpose/thesis."
      },
      exemplar: "This experiment investigated how the amount of sunlight affects the growth rate of bean seeds. Over one week, identical seeds were grown in different light conditions and measured daily. The purpose was to determine whether increased sunlight leads to measurably faster growth.",
      hintLadder: [
        "State what the experiment was trying to find out.",
        "Add a thesis naming the exact variable you tested.",
        "Keep the tone formal and factual, not personal."
      ]
    }
  ],
  reflectionPrompt: "Analysis is harder than recording. Which was tougher for you this week — describing WHAT happened, or explaining WHY it happened — and what made it challenging?",
  misconceptionBank: [
    {
      id: "vague-not-precise",
      label: "Uses vague language instead of precise evidence",
      description: "Writes 'grew a lot' or 'did great' where specific measurements and comparisons belong.",
      coachMove: "Ask: 'Exactly how much, and compared to what?' Push for a number and a comparison so the reader can picture the result."
    },
    {
      id: "records-without-analyzing",
      label: "Records data but never analyzes it",
      description: "Stops at listing observations without explaining what the data means or why.",
      coachMove: "Prompt the writer to finish the sentence 'This data shows ___ because ___,' turning a record into an analysis."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Record or Analyze?",
      prompt:
        "Two lines from a lab report: (A) 'The fertilized seed reached 14 cm and the plain seed reached 8 cm.' (B) 'Because the fertilized seed grew 6 cm taller, the nutrients likely boosted growth.' Which line RECORDS data, and which line ANALYZES it?",
      answer:
        "(A) records the data — it just reports the measurements. (B) analyzes it — it makes a claim about WHY, using the numbers as evidence. A Grade-7 report needs both, but the analysis is what turns data into a conclusion.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write a Multi-Paragraph Lab Report",
      challenge:
        "Turn your week's seed experiment into a four-paragraph informational report: Introduction (purpose + thesis), Method, Observations (with a data table), and Results/Analysis (claim + evidence + reasoning). Use transitions to link the paragraphs.",
      materials: ["Paper & pencil, OR a writing/drawing app"],
      steps: [
        "Write an Introduction paragraph stating the purpose and a clear thesis.",
        "Write a Method paragraph with ordered, repeatable steps.",
        "Write an Observations paragraph and add a data table of heights by day.",
        "Write a Results/Analysis paragraph: make a claim, cite the numbers, and explain what they mean — using at least two transition words."
      ],
      deliverable: "A four-paragraph lab report (Introduction, Method, Observations with a data table, Results/Analysis) connected with transitions.",
      choiceBoard: [
        "Write the full four-paragraph report with a data table.",
        "Design an illustrated 'field journal' spread with headings, a diagram, and the four sections.",
        "Record a 2-minute spoken report that moves through introduction, method, observations, and analysis with clear transitions."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Science Writer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w2.d5.arena1",
          type: "multiple_choice",
          stem: "A writer has this sentence: 'Day 1: 0 cm. Day 3: 4 cm. Day 5: 10 cm. Therefore, the seed grew faster in the second half of the week.' Why is this a strong Results/Analysis sentence?",
          choices: [
            "It only lists data with no conclusion",
            "It belongs in the Method because it lists steps",
            "It is an opinion about how pretty the plant is",
            "It cites the specific data AND draws a reasoned conclusion (faster growth later) connected with a transition"
          ],
          answerIndex: 3,
          explanation: "It combines evidence (the measured heights) with an interpretation (growth accelerated) and links them with the transition 'therefore' — exactly what analysis should do.",
          hintLadder: [
            "Does the sentence just list data, or explain what it means?",
            "It uses the numbers AND makes a claim with 'therefore.'",
            "Evidence + reasoned conclusion + transition = strong analysis."
          ]
        },
        {
          id: "g7.spring.ela.w2.d5.arena2",
          type: "short_answer",
          stem: "Revise this weak, opinion-filled passage into TWO sentences of formal Results/Analysis for a report: 'My plant did super amazing and got huge, way better than the other one!'",
          rubric: {
            level3: "Produces two formal sentences: a measurable, evidence-based comparison (specific heights/days) AND a reasoned conclusion about what the data means, with no opinion words.",
            level2: "Removes most opinion and adds some measurement, but the reasoning or a specific number is missing.",
            level1: "Keeps opinion language or adds no measurable evidence or conclusion."
          },
          exemplar: "By Day 6, the experimental plant reached 15 cm, while the control plant reached only 9 cm. These results suggest that the experimental condition promoted faster growth, since the plant gained 6 cm more over the same period.",
          hintLadder: [
            "Replace 'super amazing' with specific heights and a day.",
            "Add a comparison between the two plants using numbers.",
            "Finish with a reasoned conclusion about what the numbers mean."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Claim, Evidence, Reasoning Breath",
      prompt:
        "Sit tall and take three slow breaths. On breath one, silently think of a CLAIM about your day. On breath two, recall one piece of EVIDENCE for it. On breath three, the REASONING that links them. Then stretch your arms up and relax — you just breathed the shape of an analysis.",
      scienceTieIn: "Structured thinking — claim, evidence, reasoning — is the same calm, logical pattern scientists use to turn observations into trustworthy conclusions.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Analysis turns facts into meaning. Describe one thing you observed this week and then push past the observation to explain WHY you think it happened.",
      badge: { id: "g7-spring-lab-analyst", name: "Lab Analyst", emoji: "📓" },
      estimatedMinutes: 7
    }
  }
};
