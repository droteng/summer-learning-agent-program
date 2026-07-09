// Grade 6 ELA/Writing — Spring Expedition, Week 2 (Plants & Growth), Day 5.
// Topic: informational writing — document your seed-growth experiment
// (method, observations, results).

export const springG6ElaW2D5 = {
  id: "g6.spring.ela.w2.d5",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Informational writing — document a seed-growth experiment",
  topicTag: "informational-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.2", "CCSS.W.6.2.A"],
  hook: "You ran a seed-growth experiment all week. Now you become a science writer: your job is to explain the method, observations, and results so clearly that any reader could repeat and understand it.",
  miniLesson: [
    "Informational (explanatory) writing shares facts clearly. A science report has three key sections: Method (what you did), Observations (what you saw), and Results (what you found out).",
    "The METHOD tells the steps in order so someone could repeat your experiment. OBSERVATIONS record what actually happened, often with measurements — facts, not opinions.",
    "The RESULTS explain what the observations mean. Use precise, specific language and text features like headings, a data table, or labels to organize information."
  ],
  workedExample: {
    prompt: "Sort these three sentences into Method, Observation, or Results: (A) 'I planted 3 bean seeds in cups of soil by a window.' (B) 'By Day 5 the tallest sprout was 6 cm.' (C) 'The seeds near the window grew fastest, so light seems to speed growth.'",
    steps: [
      "(A) describes the steps you took — that's the METHOD.",
      "(B) records a measured fact you saw — that's an OBSERVATION.",
      "(C) explains what the data means — that's a RESULT/conclusion.",
      "Each sentence belongs to a different section of the report."
    ],
    answer: "A = Method, B = Observation, C = Results."
  },
  items: [
    {
      id: "g6.spring.ela.w2.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence belongs in the METHOD section of a seed-growth report?",
      choices: [
        "The plant looked healthy and pretty.",
        "I placed one seed 2 cm deep in each of three cups and watered them daily.",
        "Plants are amazing living things.",
        "I think sunlight is the best."
      ],
      answerIndex: 1,
      explanation: "The method lists the exact, repeatable steps you took — like how deep the seed went and how often you watered.",
      hintLadder: [
        "Method = the steps someone could repeat.",
        "Which sentence tells exactly what you DID?",
        "The one about planting depth and watering."
      ]
    },
    {
      id: "g6.spring.ela.w2.d5.q2",
      type: "multiple_choice",
      stem: "Which of these is an OBSERVATION rather than an opinion?",
      choices: [
        "The sprout was the coolest one.",
        "I loved watching it grow.",
        "On Day 4, the sprout measured 3 cm tall.",
        "This is the best experiment ever."
      ],
      answerIndex: 2,
      explanation: "An observation is a measurable fact you can record; the others are feelings or opinions.",
      hintLadder: [
        "An observation can be measured or checked.",
        "Which one has a number/fact instead of a feeling?",
        "The Day 4 height measurement."
      ],
      misconceptionsTargeted: ["opinion-in-observations"]
    },
    {
      id: "g6.spring.ela.w2.d5.q3",
      type: "multiple_choice",
      stem: "Why is it important to write the METHOD as clear, ordered steps?",
      choices: [
        "So another person could repeat your experiment the same way",
        "To make the report longer",
        "Because opinions belong in the method",
        "To hide what you did"
      ],
      answerIndex: 0,
      explanation: "A clear, ordered method makes the experiment repeatable — a key part of good science writing.",
      hintLadder: [
        "Science should be repeatable by others.",
        "What do clear steps let a reader do?",
        "They let someone redo the experiment exactly."
      ]
    },
    {
      id: "g6.spring.ela.w2.d5.q4",
      type: "short_answer",
      stem: "Write a clear RESULTS sentence for this data: a seed by a sunny window grew to 9 cm, while a seed in a dark closet grew to only 2 cm in the same week. What does the data show?",
      rubric: {
        level3: "States a clear conclusion drawn FROM the data (e.g., sunlight helped the plant grow taller/faster) AND references the numbers or comparison.",
        level2: "States a conclusion but doesn't tie it to the data, or is vague.",
        level1: "Restates only feelings or gives no conclusion."
      },
      exemplar: "The sunny-window seed grew much taller (9 cm) than the dark-closet seed (2 cm) in the same week, which shows that sunlight helped the plant grow faster.",
      hintLadder: [
        "Compare the two heights first.",
        "What difference between the seeds explains the gap?",
        "State the conclusion and back it with the numbers."
      ]
    },
    {
      id: "g6.spring.ela.w2.d5.q5",
      type: "short_answer",
      stem: "Write a short Method paragraph (2-3 sentences) explaining how someone could grow a bean seed and measure it, clearly enough to repeat.",
      rubric: {
        level3: "Gives clear, ordered, repeatable steps (planting, watering, and how/when to measure) in precise informational language.",
        level2: "Gives steps but some are vague or out of order, or measuring is unclear.",
        level1: "Opinion-based, missing steps, or not repeatable."
      },
      exemplar: "Fill a cup with soil and plant one bean seed about 2 cm deep. Place the cup by a window and water it with the same small amount each day. Every day at the same time, use a ruler to measure the sprout's height in centimeters and record it.",
      hintLadder: [
        "Start with planting: how deep, where?",
        "Add watering and where you put it.",
        "Say how and how often you'd measure it."
      ]
    }
  ],
  reflectionPrompt: "Which section — Method, Observations, or Results — was hardest to write clearly, and what made it tricky?",
  misconceptionBank: [
    {
      id: "opinion-in-observations",
      label: "Mixes opinions into observations",
      description: "Writes feelings ('it was cool') where measurable facts belong.",
      coachMove: "Ask: 'Could someone else check this with a ruler or their eyes?' If not, it's an opinion, not an observation."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Fact or Feeling?",
      prompt:
        "Two lines from a lab report: (A) 'The sprout reached 5 cm by Day 3.' (B) 'The sprout was adorable.' Which one belongs in a science report's OBSERVATIONS section, and which is just a feeling?",
      answer:
        "(A) belongs in Observations — it's a measurable fact. (B) is a feeling/opinion and doesn't belong in the data section of a science report.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build Your Seed-Growth Report",
      challenge:
        "Turn your week's seed experiment into a mini informational report with three headings: Method, Observations, and Results. Include at least one text feature — a data table, a labeled diagram, or a heading for each section.",
      materials: ["Paper & pencil, OR a writing/drawing app"],
      steps: [
        "Write a Method section: the ordered steps you took.",
        "Write an Observations section with at least three measured facts (heights by day).",
        "Add a small data table OR a labeled sprout diagram as a text feature.",
        "Write a Results section explaining what your observations show."
      ],
      deliverable: "A three-section informational report (Method, Observations, Results) with at least one text feature.",
      choiceBoard: [
        "Write the full three-section report with a data table.",
        "Make an illustrated 'field notebook' page with headings and a labeled diagram.",
        "Record a 1-minute spoken report walking through method, observations, and results."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Science Writer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w2.d5.arena1",
          type: "multiple_choice",
          stem: "A report says: 'Day 1: 0 cm. Day 3: 4 cm. Day 5: 8 cm.' Which section of a science report is this, and what text feature would organize it best?",
          choices: [
            "The Results — best shown as an opinion paragraph",
            "The title — best shown as a big font",
            "The Method — best shown as a poem",
            "The Observations — best shown as a data table"
          ],
          answerIndex: 3,
          explanation: "These are measured facts over time (observations), and a data table is the clearest text feature to organize them.",
          hintLadder: [
            "Are these measured facts, steps, or conclusions?",
            "Measured facts belong in Observations.",
            "Rows of days and heights fit a data table."
          ]
        },
        {
          id: "g6.spring.ela.w2.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this weak, opinion-filled sentence into a clear OBSERVATION for a science report: 'My plant did super amazing and got really big!'",
          rubric: {
            level3: "Produces a measurable, fact-based observation (specific height and/or day) with no opinion words.",
            level2: "Removes most opinion but stays a bit vague (e.g., 'it grew a lot').",
            level1: "Keeps opinion language or adds no measurable detail."
          },
          exemplar: "By Day 6, my plant had grown to 11 cm tall.",
          hintLadder: [
            "Swap 'super amazing' for a measurable fact.",
            "Add a specific number and a day.",
            "State only what you could measure with a ruler."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Observe Like a Scientist",
      prompt:
        "Sit tall and take three slow breaths. Now quietly observe your surroundings for 30 seconds — notice five specific, factual details (a color, a shape, a sound) without judging them. Stretch your arms up, then relax.",
      scienceTieIn: "Careful, judgment-free noticing is exactly the skill scientists use to record honest observations instead of opinions.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Good science writing lets a stranger repeat your work. What's one thing you learned this week that you could clearly explain to someone who wasn't there?",
      badge: { id: "spring-science-scribe", name: "Science Scribe", emoji: "📓" },
      estimatedMinutes: 7
    }
  }
};
