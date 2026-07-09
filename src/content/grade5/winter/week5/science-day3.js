// Grade 5 Science — Winter Expedition, Week 5 (Data in the Cold), Day 3.
// Topic: weather vs. climate — the difference and how we measure each.
// Pitched DOWN from Grade 6: shorter passages, simpler examples, vocab support.

export const winterG5ScienceW5D3 = {
  id: "g5.winter.sci.w5.d3",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Science",
  topic: "Weather vs. climate — the difference and how we measure each",
  topicTag: "weather-vs-climate",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-ESS2-1", "NGSS.3-5-ETS1-1"],
  hook: "Today it might be freezing and snowing hard — that is WEATHER. But whether your town is snowy EVERY winter, year after year — that is CLIMATE. Mixing up the two leads to a common mistake: 'It's cold today, so warming can't be real.' Today you learn to tell them apart and how scientists measure each.",
  miniLesson: [
    "WEATHER is what the sky and air are doing right now or over a few days in one place: temperature, snow or rain, wind. It can change from hour to hour. (Vocab: weather = right now.)",
    "CLIMATE is the usual PATTERN of weather over a long time — many years — for a place. A quick saying: 'Climate is what you expect; weather is what you get.' (Vocab: climate = the usual pattern.)",
    "We measure WEATHER with tools day by day: a thermometer for temperature, a rain gauge for rain or snow, a wind vane for wind. We learn about CLIMATE by collecting those readings for many years and finding the usual average."
  ],
  workedExample: {
    prompt: "Sort each statement as WEATHER or CLIMATE: (a) 'It is snowing hard right now.' (b) 'This town gets a lot of snow every winter.'",
    steps: [
      "Look at statement (a): 'right now' means it is happening at this moment — a short time.",
      "A short-term, happening-now condition is WEATHER.",
      "Look at statement (b): 'every winter' describes a pattern that repeats over many years.",
      "A long-term, usual pattern is CLIMATE."
    ],
    answer: "(a) is weather (happening now); (b) is climate (the usual long-term pattern)."
  },
  items: [
    {
      id: "g5.winter.sci.w5.d3.q1",
      type: "multiple_choice",
      stem: "Which statement describes CLIMATE rather than weather?",
      choices: [
        "Winters here are usually cold and snowy every year.",
        "The wind is strong right now.",
        "A snowstorm is happening this afternoon.",
        "It is 3°C outside at lunchtime today."
      ],
      answerIndex: 0,
      explanation: "'Usually cold and snowy every year' is a long-term pattern — that is climate. The others are single, short-term events (weather).",
      hintLadder: [
        "Climate is a pattern over many years, not one event.",
        "Which choice talks about what happens 'every year'?",
        "The 'usually every year' snow pattern is climate."
      ]
    },
    {
      id: "g5.winter.sci.w5.d3.q2",
      type: "multiple_choice",
      stem: "Which tool would a scientist use to measure a piece of today's WEATHER?",
      choices: [
        "A calculator averaging many years of data",
        "A history book about past winters",
        "A thermometer reading the temperature right now",
        "A globe"
      ],
      answerIndex: 2,
      explanation: "A thermometer measures the temperature happening now — a weather reading. Averaging many years of data is how we learn about climate.",
      hintLadder: [
        "Weather is measured with tools in the moment.",
        "Which tool reads something happening right now?",
        "A thermometer reads the current temperature."
      ]
    },
    {
      id: "g5.winter.sci.w5.d3.q3",
      type: "multiple_choice",
      stem: "A friend says: 'It is freezing today, so warming can't be real.' What is the mistake in this thinking?",
      choices: [
        "There is no mistake — one cold day proves it.",
        "They are using a single day of WEATHER to judge a long-term CLIMATE pattern.",
        "Thermometers are never correct.",
        "Climate only means summer."
      ],
      answerIndex: 1,
      explanation: "One cold day is weather. Climate patterns are found over many years of data, so a single day cannot prove or disprove them.",
      hintLadder: [
        "Is one day weather or climate?",
        "Can a single day show a pattern that takes many years?",
        "They mixed up one day of weather with a long-term climate pattern."
      ],
      misconceptionsTargeted: ["cold-day-disproves-climate"]
    },
    {
      id: "g5.winter.sci.w5.d3.q4",
      type: "short_answer",
      stem: "In your own words, explain the difference between weather and climate, and give one winter example of each.",
      rubric: {
        level3: "Clearly states weather = what the air is doing right now (short term) in a place, climate = the usual pattern over many years, AND gives a correct winter example of each.",
        level2: "Gets the core difference but an example is missing, vague, or slightly mislabeled.",
        level1: "Confuses the two or gives no valid examples."
      },
      exemplar: "Weather is what the sky and air are doing right now or over a few days — like a snowstorm hitting my town this morning. Climate is the usual pattern over many years — like the fact that my town has cold, snowy winters every year.",
      hintLadder: [
        "Think 'right now / a few days' versus 'the usual pattern over many years.'",
        "Give one short-term example (weather) and one long-term one (climate).",
        "Say which example is which and why."
      ]
    },
    {
      id: "g5.winter.sci.w5.d3.q5",
      type: "short_answer",
      stem: "Why do scientists need MANY YEARS of data — not just one winter — to describe a place's climate? What could one unusual winter trick them into thinking?",
      rubric: {
        level3: "Explains that one winter can be unusual (an odd year), so many years are needed to find the true usual pattern, AND notes that a single strange winter could trick them into a wrong idea about what is normal.",
        level2: "States that more years give a better picture but does not clearly explain the 'one odd year' risk.",
        level1: "No clear reasoning about why one year is not enough."
      },
      exemplar: "Any single winter could be unusually warm or unusually snowy just by chance. If scientists looked at only that one year, they might think it is the normal pattern when it is not. Looking at many years smooths out the odd years and shows the real, usual climate.",
      hintLadder: [
        "Could one winter be a fluke that is not typical?",
        "How does looking at many years fix that problem?",
        "Say what one weird winter alone could trick you into believing."
      ]
    }
  ],
  reflectionPrompt: "Have you ever heard someone mix up weather and climate — in a talk, a show, or online? What did they say, and how would you kindly explain the difference?",
  misconceptionBank: [
    {
      id: "cold-day-disproves-climate",
      label: "Uses one day's weather to judge climate",
      description: "Believes a single cold day (or warm day) proves or disproves a long-term climate pattern.",
      coachMove: "Zoom out in time: 'One roll of a die isn't the average of many rolls.' Climate is the usual pattern over many years; one day is a single roll."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Weather or Climate?",
      prompt:
        "Would you rather be a WEATHER reporter (you describe what is happening today: 'Snow at noon, cold, windy') or a CLIMATE scientist (you describe the usual pattern: 'This place usually has cold, snowy winters')? Say which one covers a SHORT time and which covers a LONG time before you choose.",
      answer:
        "The weather reporter describes a SHORT time — today, right now. The climate scientist describes a LONG time — the usual pattern over many years. Same place, two very different time scales!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Weather-vs-Climate Sorting Studio",
      challenge:
        "Create a sorting poster with two columns — WEATHER and CLIMATE. Write at least 6 winter statements (a mix of both) and place each in the right column, then add a one-line rule at the bottom explaining how you decided.",
      steps: [
        "Draw two columns and label them WEATHER and CLIMATE.",
        "Write at least 6 winter statements — some short-term ('sleet this evening'), some long-term ('this city is snowy most winters').",
        "Sort each statement into the correct column.",
        "At the bottom, write your own rule for telling them apart (hint: how long a time?)."
      ],
      deliverable: "A two-column sorting poster with 6+ correctly sorted statements and a written rule for telling weather from climate.",
      choiceBoard: [
        "Make a paper or digital two-column sorting poster.",
        "Turn it into a card game: shuffle statement cards and sort them under the right header.",
        "Write a short comic where a character mixes them up and a friend explains the difference."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Weather-vs-Climate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.sci.w5.d3.arena1",
          type: "multiple_choice",
          stem: "Which of these is part of studying CLIMATE, not just today's weather?",
          choices: [
            "Reading the temperature off a thermometer right now",
            "Measuring today's wind with a wind vane",
            "Checking if it is snowing right now",
            "Finding the usual winter temperature by looking at many years of records"
          ],
          answerIndex: 3,
          explanation: "Looking at many years of records shows the usual pattern — that is climate. The others are single, in-the-moment weather readings.",
          hintLadder: [
            "Climate needs data over many years.",
            "Which option uses many years of records?",
            "The 'many years' average is climate work."
          ]
        },
        {
          id: "g5.winter.sci.w5.d3.arena2",
          type: "short_answer",
          stem: "A news host says, 'This is the snowiest week in years, so our climate must be getting colder.' Explain what is wrong with jumping from this one week to a claim about climate.",
          rubric: {
            level3: "Explains that one snowy week is a short-term WEATHER event, that climate claims need many years of data, AND that a single week (even a record one) cannot show a colder climate.",
            level2: "Identifies the weather-vs-climate mix-up but with weak or partial reasoning.",
            level1: "No clear explanation of the error."
          },
          exemplar: "One snowy week is weather — a short-term event that can happen even in a warming climate. To say the climate is getting colder, you would need to look at temperatures over many years and show they are dropping. A single week, even a record one, is not enough data.",
          hintLadder: [
            "Is one week weather or climate?",
            "What kind of data does a real climate claim need?",
            "Explain why one week cannot show a long-term pattern."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Zoom Out Breathing",
      prompt:
        "Sit tall. Take 3 quick breaths (that is the fast-changing 'weather' of your body), then slow down to 5 long, steady breaths (that is the calm long-term 'climate'). Notice how zooming out to the slow rhythm feels more settled.",
      scienceTieIn:
        "Slow, steady breathing calms your nervous system — and it mirrors today's big idea: the long-term pattern (climate) is steadier and more telling than the fast, jumpy moment (weather).",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Climate is 'what you expect' and weather is 'what you get.' Write about a day when the weather you GOT was very different from the climate you would EXPECT for your area.",
      badge: { id: "g5-winter-climate-decoder", name: "Climate vs. Weather Decoder", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
