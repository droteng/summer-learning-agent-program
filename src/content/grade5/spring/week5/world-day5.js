// Grade 5 World/Current Affairs — Spring Expedition, Week 5 (Measuring Change),
// Day 5. Grade 5 counterpart of g6.spring.world.w5.d5. Same topic (reading
// data in the news) pitched down to Grade 5: shorter passages, vocab support,
// and simple whole-number differences.

export const springG5WorldW5D5 = {
  id: "g5.spring.world.w5.d5",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Reading data in the news",
  topicTag: "reading-data-news",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.6.3-5", "C3.D2.Civ.8.3-5"],
  hook: "Every spring the news fills with graphs — melting ice, returning birds, pollen counts, rising temperatures. Some of those graphs tell the truth clearly, and some are drawn to fool you. Today you learn to read a change-over-time graph AND spot when one is tricking your eyes.",
  miniLesson: [
    "Read the graph before the headline. Check the title, both axis labels, and the units. (An AXIS is one of the two sides of a graph; a UNIT tells you what the numbers count, like cm or °.) A line going up only means growth if the side axis measures MORE of something and the bottom axis is time.",
    "Watch where the side axis starts. An honest bar graph usually starts the side axis at 0. If it starts higher (this is called a CUT-OFF axis), a tiny real change can be drawn to look huge.",
    "Ask about the source and the time span. Where did the data come from? How long a time does the graph cover? A short, unusual stretch of time can make a change look bigger than it really is. Real change is easier to judge over a longer, clearly labeled time."
  ],
  workedExample: {
    prompt: "A news graph shows a bar for last year's average temperature (50°) and this year's (52°), but the side axis starts at 49° instead of 0. This year's bar looks about THREE times taller. Is the temperature really three times higher?",
    steps: [
      "Read the real numbers: 50° last year, 52° this year — a real change of just 2°.",
      "Check the side axis: it starts at 49°, not 0, so only the little bit above 49° is shown.",
      "That cut-off axis stretches a tiny 2° difference into a bar that looks about three times taller.",
      "So no — the temperature went up only 2°, not to three times as much. The GRAPH is tricking you, not the change."
    ],
    answer: "No — it only rose 2°; the side axis starting at 49 instead of 0 makes a small change look huge."
  },
  items: [
    {
      id: "g5.spring.world.w5.d5.q1",
      type: "multiple_choice",
      stem: "You see a line graph titled 'Sea Ice Over Time' in the news. What should you check FIRST to understand it?",
      choices: [
        "The color of the line",
        "The title, both axis labels, and the units",
        "How many people shared it",
        "Whether it looks nice"
      ],
      answerIndex: 1,
      explanation: "The title, axis labels, and units tell you what is actually being measured and over what time — without them you can't tell what the line means.",
      hintLadder: [
        "What tells you WHAT the graph is measuring?",
        "Look at the words and numbers on the axes, not the style.",
        "Title, axis labels, and units come first."
      ]
    },
    {
      id: "g5.spring.world.w5.d5.q2",
      type: "multiple_choice",
      stem: "A bar graph of yearly rainfall starts its side axis at 40 cm instead of 0. Two bars are 42 cm and 44 cm, but one looks about three times taller than the other. Why is this misleading?",
      choices: [
        "The colors are too bright",
        "Cutting off the bottom of the axis makes a small 2 cm difference look like a huge one",
        "Rainfall can't be graphed",
        "The bars should be circles"
      ],
      answerIndex: 1,
      explanation: "Starting the side axis at 40 instead of 0 hides most of each bar, so a real 2 cm difference gets stretched into a giant-looking gap.",
      hintLadder: [
        "What is the real difference between 42 and 44?",
        "Where does the side axis start, and what does that hide?",
        "A cut-off axis blows up tiny differences."
      ],
      misconceptionsTargeted: ["taller-bar-means-huge-change"]
    },
    {
      id: "g5.spring.world.w5.d5.q3",
      type: "numeric",
      stem: "In that rainfall graph, the two bars stand for 42 cm and 44 cm. What is the ACTUAL difference in rainfall between the two years, in centimeters?",
      answer: 2,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Ignore how tall the bars LOOK — use the real numbers.",
        "Subtract the smaller number from the larger.",
        "44 − 42 = 2 cm."
      ],
      explanation: "The real difference is 44 − 42 = 2 cm, even though the bar heights make it look much bigger."
    },
    {
      id: "g5.spring.world.w5.d5.q4",
      type: "multiple_choice",
      stem: "A headline says 'Bird Numbers Crash!' but the graph only shows data from one unusually cold week. What is the smartest response?",
      choices: [
        "Believe the headline — graphs never lie",
        "Ask whether one short, unusual week can really show a long-term change",
        "Ignore all graphs about birds",
        "Assume the birds are fine no matter what"
      ],
      answerIndex: 1,
      explanation: "One unusual week is too short to show a real, lasting change; you'd want a longer, clearly labeled time before trusting a dramatic claim.",
      hintLadder: [
        "Is one week enough to show a lasting change?",
        "Think about how a short time can trick you.",
        "Ask for a longer, fairer stretch of data."
      ]
    },
    {
      id: "g5.spring.world.w5.d5.q5",
      type: "short_answer",
      stem: "A news post shares a scary-looking environmental graph with no source, no axis labels, and only one week of data. List TWO questions you'd ask before trusting it, and why each one matters.",
      rubric: {
        level3: "Asks two solid questions (e.g., where did the data come from? what do the axes measure and in what units? is one week long enough to show a real change?) AND explains why each protects you from being fooled.",
        level2: "Asks two questions but the reasoning for one is weak, or one question is off-target.",
        level1: "Vague, or gives questions without explaining why they matter."
      },
      exemplar: "First: 'Where did this data come from?' — a trustworthy source matters, because anyone can make a graph. Second: 'What do the axes measure, and is one week really enough?' — without labels I can't tell what is being shown, and one week is too short to show a real change.",
      hintLadder: [
        "Think about what is MISSING from this graph.",
        "Source, axis labels, and time span are all suspicious here.",
        "For each question, say why it protects you from being fooled."
      ]
    }
  ],
  reflectionPrompt: "Next time you see a dramatic graph in the news or online, what is the FIRST thing you'll check before you believe or share it?",
  misconceptionBank: [
    {
      id: "taller-bar-means-huge-change",
      label: "Believes a taller bar always means a much bigger real change",
      description: "Judges the size of a change by how tall the bar looks, without checking whether the side axis starts at zero.",
      coachMove: "Always read the side-axis numbers and check where it starts. Compare the ACTUAL values, not just the picture of the bars."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Graph Is Honest?",
      prompt:
        "Two news graphs show the SAME 2° temperature rise. Graph A's side axis starts at 0 and the change looks small. Graph B's side axis starts at 15° and the change looks enormous. Same real data — which graph is showing it more HONESTLY, and which one is trying to alarm you?",
      answer:
        "Graph A (side axis at 0) shows the 2° change honestly and to scale. Graph B (side axis starting high) blows up the exact same 2° into a scary-looking spike. Always check where the side axis starts!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Make an Honest Graph and a Misleading One",
      challenge:
        "Take ONE true change (like 'this town's average spring temperature rose from 12° to 14°') and draw the SAME data two ways: one honest graph (side axis at 0) and one misleading graph (cut-off side axis) — then label how the misleading one tricks the eye.",
      materials: ["Graph paper or a drawing app", "A ruler for straight axes"],
      steps: [
        "Pick one real or made-up change with two numbers (before and after).",
        "Draw the HONEST version with the side axis starting at 0 so the change is shown to scale.",
        "Draw the MISLEADING version with the side axis starting high, so the same change looks dramatic.",
        "Label each graph and write one sentence explaining the trick in the misleading one."
      ],
      deliverable: "Two graphs of the same data — one honest, one misleading — with a note explaining how the misleading one fools the viewer.",
      choiceBoard: [
        "Draw both bar graphs side by side and label the trick.",
        "Make a 'spot the misleading graph' quiz card for a friend.",
        "Write a short 'fact-check' paragraph about the misleading version."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Detective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.world.w5.d5.arena1",
          type: "multiple_choice",
          stem: "A graph claims pollen levels 'skyrocketed.' The side axis starts at 95 and the two bars read 96 and 100. What is really going on?",
          choices: [
            "Pollen truly skyrocketed — the bars prove it",
            "The real change is only 4, but the side axis starting at 95 makes it look enormous",
            "The graph has no problem",
            "Pollen can't be measured"
          ],
          answerIndex: 1,
          explanation: "The actual change is 100 − 96 = 4. Because the side axis starts at 95 (not 0), that small change is stretched to look like a huge spike.",
          hintLadder: [
            "Use the real numbers: 96 and 100.",
            "What is 100 − 96, and where does the axis start?",
            "A cut-off axis blows up a small change of 4."
          ]
        },
        {
          id: "g5.spring.world.w5.d5.arena2",
          type: "short_answer",
          stem: "A post shows a steep 'temperature spike' graph using only 5 days of data and no source. Explain why this graph is weak evidence for a claim about a big, long-term change in climate.",
          rubric: {
            level3: "Explains that 5 days is far too short to show a long-term change (weather bounces around day to day) AND that a missing source means the data can't be checked, so it can't support a big climate claim.",
            level2: "Raises one solid issue (too short OR no source) with clear reasoning.",
            level1: "Vague, or doesn't connect the flaws to why the evidence is weak."
          },
          exemplar: "Five days is just weather, not a long-term change — temperatures naturally bounce around day to day, so a short spike proves nothing. And with no source, there's no way to check if the data is even real. To claim a big long-term change you'd need many years of data from a trustworthy source.",
          hintLadder: [
            "Is 5 days enough to show a long-term change?",
            "What does a missing source mean for trusting the data?",
            "Connect both flaws to why the claim is weak."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Reset the Lens",
      prompt:
        "Scary graphs can make you tense. Stand up, look away from any screen, and focus on the farthest thing you can see for 10 seconds. Roll your shoulders back 5 times, take one slow breath, and say 'I check the data first.'",
      scienceTieIn:
        "Looking into the distance relaxes eye muscles tired from screens, and a slow breath lowers stress so you can judge a claim calmly instead of reacting to the scariest-looking bar.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You're now a data detective. Describe one graph or number you've seen in the news or online — did it check out, or would you now question how it was drawn? What would you look at first?",
      badge: { id: "g5-spring-news-data-detective", name: "News Data Detective", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
