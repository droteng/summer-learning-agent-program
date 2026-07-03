// Grade 5 ELA/Writing — Spring Expedition, Week 2 (Plants & Growth), Day 5.
// Topic: informational writing — document your seed-growth experiment
// (method, observations, results). Grade 5 counterpart of g6.spring.ela.w2.d5:
// same topic, simpler vocabulary, paragraph frames, shorter passages, and more
// scaffolding for ages 10–11.

export const springG5ElaW2D5 = {
  id: "g5.spring.ela.w2.d5",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Informational writing — document a seed-growth experiment",
  topicTag: "informational-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.2", "CCSS.ELA-LITERACY.W.5.2.A"],
  hook: "You grew seeds all week. Now you get to be a science writer! Your job is to explain three things so clearly that a reader who wasn't there could grow the same plant: what you DID, what you SAW, and what it MEANS.",
  miniLesson: [
    "Informational writing shares facts clearly. A science report has three parts. New words: METHOD (what you did), OBSERVATIONS (what you saw), and RESULTS (what you found out).",
    "The METHOD lists your steps in order, so someone could copy your experiment. OBSERVATIONS are facts you can measure, like a height in centimeters — not feelings like 'it was cute.'",
    "The RESULTS tell what your observations mean. To stay organized, use text features like a heading for each part, a data table, or labels on a picture."
  ],
  workedExample: {
    prompt: "Sort these three sentences into Method, Observation, or Results: (A) 'I planted 3 bean seeds in cups of soil by a window.' (B) 'On Day 5 the tallest sprout was 6 cm tall.' (C) 'The seeds near the window grew fastest, so light seems to help them grow.'",
    steps: [
      "(A) tells the steps you took — that is the METHOD.",
      "(B) gives a measured fact you saw — that is an OBSERVATION.",
      "(C) explains what the facts mean — that is a RESULT.",
      "Each sentence goes in a different part of the report."
    ],
    answer: "A = Method, B = Observation, C = Results."
  },
  items: [
    {
      id: "g5.spring.ela.w2.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence belongs in the METHOD part of a seed-growth report?",
      choices: [
        "The plant looked really pretty.",
        "I put one seed 2 cm deep in each of three cups and watered them every day.",
        "Plants are amazing living things.",
        "I think sunlight is the best."
      ],
      answerIndex: 1,
      explanation: "The method lists the exact steps someone could copy — like how deep the seed went and how often you watered.",
      hintLadder: [
        "Method = the steps someone could copy.",
        "Which sentence tells exactly what you DID?",
        "The one about planting depth and watering."
      ]
    },
    {
      id: "g5.spring.ela.w2.d5.q2",
      type: "multiple_choice",
      stem: "Which one of these is an OBSERVATION (a fact you can measure), not an opinion?",
      choices: [
        "The sprout was the coolest one.",
        "On Day 4, the sprout was 3 cm tall.",
        "I loved watching it grow.",
        "This is the best experiment ever."
      ],
      answerIndex: 1,
      explanation: "An observation is a fact you can measure or check. The others are feelings or opinions.",
      hintLadder: [
        "An observation can be measured or checked.",
        "Which one has a number instead of a feeling?",
        "The Day 4 height of 3 cm."
      ],
      misconceptionsTargeted: ["opinion-in-observations"]
    },
    {
      id: "g5.spring.ela.w2.d5.q3",
      type: "multiple_choice",
      stem: "Why is it important to write the METHOD as clear steps in order?",
      choices: [
        "To make the report longer",
        "So another person could copy your experiment the same way",
        "Because opinions belong in the method",
        "To hide what you did"
      ],
      answerIndex: 1,
      explanation: "Clear steps in order make the experiment easy to copy — an important part of good science writing.",
      hintLadder: [
        "Good science can be copied by others.",
        "What do clear steps let a reader do?",
        "They let someone grow the same plant the same way."
      ]
    },
    {
      id: "g5.spring.ela.w2.d5.q4",
      type: "short_answer",
      stem: "Write a clear RESULTS sentence for this data: a seed by a sunny window grew to 9 cm, but a seed in a dark closet grew to only 2 cm in the same week. What does the data show? (Use the numbers.)",
      rubric: {
        level3: "States a clear conclusion drawn FROM the data (for example, sunlight helped the plant grow taller) AND uses the numbers 9 cm and 2 cm or the comparison.",
        level2: "States a conclusion but does not tie it to the numbers, or is vague.",
        level1: "Gives only feelings or no conclusion."
      },
      exemplar: "The sunny-window seed grew to 9 cm, but the dark-closet seed grew to only 2 cm in the same week. This shows that sunlight helped the plant grow taller.",
      hintLadder: [
        "First compare the two heights: 9 cm and 2 cm.",
        "What was different between the two seeds?",
        "Frame: 'The ___ grew taller, which shows that ___.'"
      ]
    },
    {
      id: "g5.spring.ela.w2.d5.q5",
      type: "short_answer",
      stem: "Write a short METHOD paragraph (2-3 sentences) telling how someone could grow a bean seed and measure it, clear enough to copy. You can start: 'First, ... Then, ... Every day, ...'",
      rubric: {
        level3: "Gives clear steps in order (planting, watering, and how/when to measure) using fact-based informational language a reader could copy.",
        level2: "Gives steps but some are vague or out of order, or the measuring step is unclear.",
        level1: "Uses opinions, is missing steps, or could not be copied."
      },
      exemplar: "First, fill a cup with soil and plant one bean seed about 2 cm deep. Then, place the cup by a window and water it with the same small amount each day. Every day at the same time, use a ruler to measure the sprout's height in centimeters and write it down.",
      hintLadder: [
        "Start with planting: how deep, and where?",
        "Add watering and where you put the cup.",
        "End with how and how often you would measure it."
      ]
    }
  ],
  reflectionPrompt: "Which part — Method, Observations, or Results — was hardest to write clearly, and what made it tricky?",
  misconceptionBank: [
    {
      id: "opinion-in-observations",
      label: "Mixes opinions into observations",
      description: "Writes feelings ('it was cool') where measurable facts belong.",
      coachMove: "Ask: 'Could someone else check this with a ruler or their own eyes?' If not, it's an opinion, not an observation."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Fact or Feeling?",
      prompt:
        "Two lines from a plant report: (A) 'The sprout reached 5 cm by Day 3.' (B) 'The sprout was adorable.' Which one belongs in the OBSERVATIONS part of a science report, and which is just a feeling?",
      answer:
        "(A) belongs in Observations — it is a fact you can measure. (B) is a feeling and does not belong in the data part of a science report.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build Your Seed-Growth Report",
      challenge:
        "Turn your week of growing seeds into a mini report with three headings: Method, Observations, and Results. Add at least one text feature — a data table, a labeled picture, or a heading for each part.",
      materials: ["Paper & pencil, OR a writing/drawing app"],
      steps: [
        "Write a Method part: the steps you took, in order.",
        "Write an Observations part with at least three measured facts (heights on different days).",
        "Add a small data table OR a labeled sprout picture as a text feature.",
        "Write a Results part telling what your observations show."
      ],
      deliverable: "A three-part report (Method, Observations, Results) with at least one text feature.",
      choiceBoard: [
        "Write the full three-part report with a data table.",
        "Make an illustrated 'plant notebook' page with headings and a labeled picture.",
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
          id: "g5.spring.ela.w2.d5.arena1",
          type: "multiple_choice",
          stem: "A report says: 'Day 1: 0 cm. Day 3: 4 cm. Day 5: 8 cm.' Which part of a science report is this, and what text feature would organize it best?",
          choices: [
            "The Results — best shown as an opinion paragraph",
            "The Observations — best shown as a data table",
            "The Method — best shown as a poem",
            "The title — best shown in a big font"
          ],
          answerIndex: 1,
          explanation: "These are measured facts on different days (observations), and a data table is the clearest way to organize them.",
          hintLadder: [
            "Are these measured facts, steps, or a conclusion?",
            "Measured facts belong in Observations.",
            "Rows of days and heights fit a data table."
          ]
        },
        {
          id: "g5.spring.ela.w2.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this weak, opinion-filled sentence as a clear OBSERVATION for a science report: 'My plant did super amazing and got really big!'",
          rubric: {
            level3: "Gives a fact-based observation with a specific number (a height and/or a day) and no opinion words.",
            level2: "Removes most opinion words but stays a bit vague (for example, 'it grew a lot').",
            level1: "Keeps opinion words or adds no measurable detail."
          },
          exemplar: "By Day 6, my plant was 11 cm tall.",
          hintLadder: [
            "Swap 'super amazing' for a fact you can measure.",
            "Add a specific number and a day.",
            "Write only what you could check with a ruler."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Observe Like a Scientist",
      prompt:
        "Sit up tall and take three slow breaths. Now quietly look around for 30 seconds and notice five real, factual details (a color, a shape, a sound) without judging them. Then stretch your arms up high and relax.",
      scienceTieIn: "Careful noticing without judging is exactly the skill scientists use to record honest observations instead of opinions.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Good science writing lets a stranger copy your work. What is one thing you learned this week that you could clearly explain to someone who wasn't there?",
      badge: { id: "g5-spring-plant-reporter", name: "Plant Reporter", emoji: "📓" },
      estimatedMinutes: 7
    }
  }
};
