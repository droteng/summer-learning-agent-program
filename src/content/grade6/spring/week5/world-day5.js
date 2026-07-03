// Grade 6 World/Current Affairs — Spring Expedition, Week 5 (Measuring Change),
// Day 5. Topic: reading data in the news — interpreting environmental-change
// graphs and spotting misleading ones.

export const springG6WorldW5D5 = {
  id: "g6.spring.world.w5.d5",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Reading data in the news",
  topicTag: "reading-data-news",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.8", "CCSS.RI.6.7"],
  hook: "Every spring the news fills with graphs — melting ice, returning birds, pollen counts, rising temperatures. Some of those graphs tell the truth clearly, and some are drawn to fool you. Today you learn to read an environmental-change graph AND spot when one is misleading.",
  miniLesson: [
    "Read the graph before the headline. Check the title, both axis labels, and the units. A line going up only means growth if the y-axis actually measures more of something and the x-axis is time.",
    "Watch the y-axis zero point. A truthful bar or line graph usually starts the y-axis at 0. If it starts higher (a 'truncated' axis), a tiny real change can be drawn to look huge.",
    "Question the source and the framing. Ask: where did this data come from, what time span is shown, and is a short, unusual stretch being used to suggest a big trend? Real change is easier to judge over a longer, clearly labeled period."
  ],
  workedExample: {
    prompt: "A news graph shows a bar for last year's average temperature (50°) and this year's (52°), but the y-axis starts at 49° instead of 0. This year's bar looks about THREE times taller than last year's. Is the temperature really three times higher?",
    steps: [
      "Read the actual numbers: 50° last year, 52° this year — a real change of just 2°.",
      "Check the y-axis: it starts at 49°, not 0, so only the sliver above 49° is shown.",
      "That truncated axis stretches a tiny 2° difference into a bar that looks about three times taller.",
      "So no — the temperature rose by only 2°, not to three times as much. The GRAPH is misleading, not the change."
    ],
    answer: "No — it only rose 2°; the y-axis starting at 49 instead of 0 makes a small change look huge."
  },
  items: [
    {
      id: "g6.spring.world.w5.d5.q1",
      type: "multiple_choice",
      stem: "You see a line graph titled 'Sea Ice Over Time' in the news. What should you check FIRST to understand it?",
      choices: [
        "The color of the line",
        "The title, both axis labels, and the units",
        "How many people shared it",
        "Whether it looks nice"
      ],
      answerIndex: 1,
      explanation: "The title, axis labels, and units tell you what is actually being measured and over what — without them you can't judge what the line means.",
      hintLadder: [
        "What tells you WHAT the graph is measuring?",
        "Look at the words and numbers on the axes, not the style.",
        "Title + axis labels + units come first."
      ]
    },
    {
      id: "g6.spring.world.w5.d5.q2",
      type: "multiple_choice",
      stem: "A bar graph of yearly rainfall starts its y-axis at 40 cm instead of 0. Two bars are 42 cm and 44 cm, but one looks about three times taller than the other. Why is this misleading?",
      choices: [
        "The colors are too bright",
        "Cutting off the bottom of the axis makes a small 2 cm difference look like a huge one",
        "Rainfall can't be graphed",
        "The bars should be circles"
      ],
      answerIndex: 1,
      explanation: "Starting the y-axis at 40 instead of 0 hides most of each bar, so a real 2 cm difference gets exaggerated into a giant-looking gap.",
      hintLadder: [
        "What's the real difference between 42 and 44?",
        "Where does the y-axis start, and what does that hide?",
        "A truncated (cut-off) axis blows up tiny differences."
      ],
      misconceptionsTargeted: ["taller-bar-means-huge-change"]
    },
    {
      id: "g6.spring.world.w5.d5.q3",
      type: "numeric",
      stem: "In that rainfall graph, the two bars represent 42 cm and 44 cm. What is the ACTUAL difference in rainfall between the two years, in centimeters?",
      answer: 2,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Ignore how tall the bars LOOK — use the real numbers.",
        "Subtract the smaller value from the larger.",
        "44 − 42 = 2 cm."
      ],
      explanation: "The real difference is 44 − 42 = 2 cm, even though the bar heights make it look far larger."
    },
    {
      id: "g6.spring.world.w5.d5.q4",
      type: "multiple_choice",
      stem: "A headline says 'Bird Numbers Crash!' but the graph only shows data from one unusually cold month. What's the smartest response?",
      choices: [
        "Believe the headline — graphs never lie",
        "Ask whether one short, unusual month can really show a long-term trend",
        "Ignore all graphs about birds",
        "Assume the birds are fine no matter what"
      ],
      answerIndex: 1,
      explanation: "A single unusual month is too short to prove a real trend; you'd want a longer, clearly labeled time span before trusting a dramatic claim.",
      hintLadder: [
        "Is one month enough to show a lasting trend?",
        "Think about how the short time span could mislead.",
        "Ask for a longer, fairer period of data."
      ]
    },
    {
      id: "g6.spring.world.w5.d5.q5",
      type: "short_answer",
      stem: "A news post shares a scary-looking environmental graph with no source, no axis labels, and only one week of data. List TWO questions you'd ask before trusting it, and why each matters.",
      rubric: {
        level3: "Asks two solid questions (e.g., where's the source/data from? what do the axes measure and in what units? is one week long enough to show a trend?) AND explains why each protects you from being misled.",
        level2: "Asks two questions but the reasoning for one is weak, or one question is off-target.",
        level1: "Vague, or gives questions without explaining why they matter."
      },
      exemplar: "First: 'Where did this data come from?' — a trustworthy source with real data matters, since anyone can make a graph. Second: 'What do the axes measure and is one week really enough?' — without labels I can't tell what's being shown, and one week is too short to prove a real environmental trend.",
      hintLadder: [
        "Think about what's MISSING from this graph.",
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
      description: "Judges the size of a change by how tall the bar looks, without checking whether the y-axis starts at zero.",
      coachMove: "Always read the y-axis numbers and check its starting point. Compare the ACTUAL values, not just the picture of the bars."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Graph Is Honest?",
      prompt:
        "Two news graphs show the SAME 2°C temperature rise. Graph A's y-axis starts at 0 and the change looks small. Graph B's y-axis starts at 15°C and the change looks enormous. Same real data — which graph is showing it more HONESTLY, and which one is trying to alarm you?",
      answer:
        "Graph A (y-axis at 0) shows the 2°C change honestly and to scale. Graph B (y-axis starting high) exaggerates the exact same 2°C into a scary-looking spike. Always check where the y-axis starts!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Make an Honest Graph and a Misleading One",
      challenge:
        "Take ONE true environmental change (like 'this town's average spring temperature rose from 12°C to 14°C') and draw the SAME data two ways: one honest graph (y-axis at 0) and one misleading graph (truncated y-axis) — then label how the misleading one tricks the eye.",
      steps: [
        "Pick one real or invented environmental change with two numbers (before and after).",
        "Draw the HONEST version with the y-axis starting at 0 so the change is shown to scale.",
        "Draw the MISLEADING version with the y-axis starting high, so the same change looks dramatic.",
        "Label each graph and write one sentence explaining the trick in the misleading one."
      ],
      deliverable: "Two graphs of the same data — one honest, one misleading — with a note explaining how the misleading one fools the viewer.",
      choiceBoard: [
        "Draw both bar graphs side by side and annotate the trick.",
        "Make a 'spot the misleading graph' quiz card for a friend.",
        "Write a short 'fact-check' paragraph debunking the misleading version."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Detective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.world.w5.d5.arena1",
          type: "multiple_choice",
          stem: "A graph claims pollen levels 'skyrocketed.' The y-axis starts at 95 and the two bars read 96 and 100. What's really going on?",
          choices: [
            "Pollen truly skyrocketed — the bars prove it",
            "The real change is only 4, but the y-axis starting at 95 makes it look enormous",
            "The graph has no problem",
            "Pollen can't be measured"
          ],
          answerIndex: 1,
          explanation: "The actual change is 100 − 96 = 4. Because the y-axis starts at 95 (not 0), that small change is stretched to look like a huge spike.",
          hintLadder: [
            "Use the real numbers: 96 and 100.",
            "What's 100 − 96, and where does the axis start?",
            "A truncated axis exaggerates a small change of 4."
          ]
        },
        {
          id: "g6.spring.world.w5.d5.arena2",
          type: "short_answer",
          stem: "A viral post shows a steep 'temperature spike' graph using only 5 days of data and no source. Explain why this graph is weak evidence for a claim about long-term climate change.",
          rubric: {
            level3: "Explains that 5 days is far too short to show a long-term trend (weather varies day to day) AND that a missing source means the data can't be verified, so it can't support a climate claim.",
            level2: "Raises one solid issue (too short OR no source) with clear reasoning.",
            level1: "Vague or doesn't connect the flaws to why the evidence is weak."
          },
          exemplar: "Five days is weather, not climate — temperatures naturally bounce around day to day, so a short spike proves nothing about a long-term trend. And with no source, there's no way to check if the data is even real. To claim long-term climate change you'd need many years of data from a trustworthy source.",
          hintLadder: [
            "Is 5 days enough to show a long-term trend?",
            "What does a missing source mean for trusting the data?",
            "Connect both flaws to why the claim isn't supported."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Reset the Lens",
      prompt:
        "Scary graphs can spike your stress. Stand up, look away from any screen, and focus on the farthest thing you can see for 10 seconds. Roll your shoulders back 5 times, take one slow breath, and say 'I check the data first.'",
      scienceTieIn:
        "Looking into the distance relaxes the eye muscles strained by screens, and a slow breath lowers stress so you can evaluate a claim calmly instead of reacting to the scariest-looking bar.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You're now a data detective. Describe one graph or statistic you've seen in the news or online — did it check out, or would you now question how it was drawn? What would you look at first?",
      badge: { id: "spring-data-detective", name: "Data Detective", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
