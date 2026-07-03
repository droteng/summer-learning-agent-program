// Grade 6 Science — Winter Expedition, Week 5 (Data in the Cold), Day 3.
// Topic: weather vs. climate — the difference and how we measure each.

export const winterG6ScienceW5D3 = {
  id: "g6.winter.sci.w5.d3",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Science",
  topic: "Weather vs. climate — the difference and how we measure each",
  topicTag: "weather-vs-climate",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ESS2-5", "NGSS.MS-ESS2-6"],
  hook: "Today it might be −10°C and blizzarding — that's weather. But whether your town is snowy EVERY winter, decade after decade — that's climate. Confusing the two leads to famous mistakes ('It's cold today, so where's the warming?'). Today you learn to tell them apart and how scientists measure each.",
  miniLesson: [
    "WEATHER is the atmosphere right now or over a few days in one place: temperature, precipitation, wind, humidity. It can change hour to hour.",
    "CLIMATE is the PATTERN of weather averaged over a long time — usually 30 years or more — for a region. A quick saying: 'Climate is what you expect; weather is what you get.'",
    "We measure WEATHER with instruments (thermometer, rain gauge, barometer, anemometer) day by day. We measure CLIMATE by collecting those readings over many years and finding the long-term averages and trends."
  ],
  workedExample: {
    prompt: "Sort each statement as WEATHER or CLIMATE: (a) 'It's snowing hard right now.' (b) 'This region gets about 150 cm of snow every winter.'",
    steps: [
      "Check statement (a): 'right now' describes the atmosphere at this moment — a short time span.",
      "A short-term, present condition is WEATHER.",
      "Check statement (b): 'every winter' and 'about 150 cm' is a long-term average pattern.",
      "A multi-year average pattern is CLIMATE."
    ],
    answer: "(a) is weather (happening now); (b) is climate (a long-term average pattern)."
  },
  items: [
    {
      id: "g6.winter.sci.w5.d3.q1",
      type: "multiple_choice",
      stem: "Which statement describes CLIMATE rather than weather?",
      choices: [
        "A blizzard is dumping snow this afternoon.",
        "The wind is gusting to 40 km/h right now.",
        "Winters here average about 60 cm of snow over the last 30 years.",
        "It dropped to -8°C last night."
      ],
      answerIndex: 2,
      explanation: "A 30-year average of winter snowfall is a long-term pattern — that's climate. The others are single, short-term events (weather).",
      hintLadder: [
        "Climate is a pattern over many years, not one event.",
        "Which choice mentions a long time span like '30 years'?",
        "The 30-year snowfall average is climate."
      ]
    },
    {
      id: "g6.winter.sci.w5.d3.q2",
      type: "multiple_choice",
      stem: "Which instrument would a scientist use to measure a piece of today's WEATHER?",
      choices: [
        "A calculator averaging 30 years of data",
        "A thermometer reading the current temperature",
        "A history book of past decades",
        "A globe"
      ],
      answerIndex: 1,
      explanation: "A thermometer measures the temperature happening now — a weather observation. Averaging decades of data is how we study climate.",
      hintLadder: [
        "Weather is measured with instruments in the moment.",
        "Which tool reads a condition happening right now?",
        "A thermometer reads the current temperature."
      ]
    },
    {
      id: "g6.winter.sci.w5.d3.q3",
      type: "multiple_choice",
      stem: "A friend says: 'It's freezing today, so climate change can't be real.' What is the mistake in this reasoning?",
      choices: [
        "There is no mistake — one cold day disproves it.",
        "They are using a single day of WEATHER to judge a long-term CLIMATE trend.",
        "Thermometers are never accurate.",
        "Climate only means summer weather."
      ],
      answerIndex: 1,
      explanation: "One cold day is weather. Climate trends are measured over decades of averages, so a single day can't prove or disprove them.",
      hintLadder: [
        "Is one day weather or climate?",
        "Can a single event show a decades-long pattern?",
        "They confused one day of weather with a long-term climate trend."
      ],
      misconceptionsTargeted: ["cold-day-disproves-climate"]
    },
    {
      id: "g6.winter.sci.w5.d3.q4",
      type: "short_answer",
      stem: "In your own words, explain the difference between weather and climate, and give one example of each from a winter setting.",
      rubric: {
        level3: "Clearly states weather = short-term atmospheric conditions in a place, climate = long-term average pattern over many years, AND gives a correct winter example of each.",
        level2: "Gets the core difference but an example is missing, vague, or slightly mislabeled.",
        level1: "Confuses the two or gives no valid examples."
      },
      exemplar: "Weather is what the atmosphere is doing right now or over a few days in one spot — like a snowstorm hitting my town this morning. Climate is the average pattern over many years — like the fact that my region usually has cold, snowy winters every year for decades.",
      hintLadder: [
        "Think 'right now / a few days' versus 'average over many years.'",
        "Give a short-term example (weather) and a long-term one (climate).",
        "Label which example is which and why."
      ]
    },
    {
      id: "g6.winter.sci.w5.d3.q5",
      type: "short_answer",
      stem: "Why do scientists need MANY YEARS of data — not just one winter — to describe a region's climate? Explain what a single unusually mild or harsh winter could mislead them about.",
      rubric: {
        level3: "Explains that one year can be an unusual outlier, so many years are needed to reveal the true average/pattern, AND notes a single odd winter could mislead them into a wrong conclusion about the norm or trend.",
        level2: "States that more years give a better average but doesn't clearly explain the outlier/misleading risk.",
        level1: "No clear reasoning about why one year is not enough."
      },
      exemplar: "Any single winter could be unusually warm or unusually harsh just by chance. If scientists looked at only that one year, they might think it's the normal pattern when it isn't. Averaging many years smooths out the odd years and shows the real, typical climate and any long-term trend.",
      hintLadder: [
        "Could one winter be a fluke that isn't typical?",
        "How does averaging many years fix that problem?",
        "Explain what one weird winter alone could trick you into believing."
      ]
    }
  ],
  reflectionPrompt: "Have you ever heard someone mix up weather and climate — in a conversation, a show, or online? What did they say, and how would you gently correct it?",
  misconceptionBank: [
    {
      id: "cold-day-disproves-climate",
      label: "Uses one day's weather to judge climate",
      description: "Believes a single cold day (or hot day) proves or disproves a long-term climate trend.",
      coachMove: "Zoom out in time: 'One roll of a die isn't the average of many rolls.' Climate is the average of decades; one day is a single roll."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Weather or Climate?",
      prompt:
        "Would you rather be a WEATHER reporter (you describe what's happening today: 'Snow at noon, −6°C, windy') or a CLIMATE scientist (you describe the 30-year pattern: 'This region averages cold, snowy winters')? Say which spans a short time and which spans a long time before you choose.",
      answer:
        "The weather reporter describes a SHORT span — today, right now. The climate scientist describes a LONG span — averages over about 30 years. Same region, two very different time scales!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Weather-vs-Climate Sorting Studio",
      challenge:
        "Create a sorting poster with two columns — WEATHER and CLIMATE. Write at least 8 winter statements (mix of both) and place each in the right column, then add a one-line rule at the bottom explaining how you decided.",
      steps: [
        "Draw two columns and label them WEATHER and CLIMATE.",
        "Write at least 8 winter statements — some short-term ('sleet this evening'), some long-term ('this city averages 40 snow days a year').",
        "Sort each statement into the correct column.",
        "At the bottom, write your own rule for telling them apart (hint: time span!)."
      ],
      deliverable: "A two-column sorting poster with 8+ correctly sorted statements and a written rule for distinguishing weather from climate.",
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
          id: "g6.winter.sci.w5.d3.arena1",
          type: "multiple_choice",
          stem: "Which of these measurements is part of studying CLIMATE, not just today's weather?",
          choices: [
            "Reading the current temperature off a thermometer",
            "Averaging 30 years of winter temperature records for a region",
            "Checking if it's raining right now",
            "Measuring today's wind speed with an anemometer"
          ],
          answerIndex: 1,
          explanation: "Averaging decades of records reveals the long-term pattern — that's climate. The others are single, in-the-moment weather readings.",
          hintLadder: [
            "Climate needs data over many years.",
            "Which option averages decades of records?",
            "The 30-year average is climate work."
          ]
        },
        {
          id: "g6.winter.sci.w5.d3.arena2",
          type: "short_answer",
          stem: "A news host says, 'This is the snowiest week in years, so the whole climate must be getting colder.' Explain what is wrong with jumping from this one week to a claim about climate.",
          rubric: {
            level3: "Explains that one snowy week is a short-term WEATHER event, that climate claims require long-term averaged data over many years, AND that a single week (even a record one) can't establish a cooling trend.",
            level2: "Identifies the weather-vs-climate confusion but with weak or partial reasoning.",
            level1: "No clear explanation of the error."
          },
          exemplar: "One snowy week is weather — a short-term event that can happen even in a warming climate. To claim the climate is getting colder, you'd need to average temperatures over many years and show a downward trend. A single week, even a record one, isn't enough data to say anything about the long-term pattern.",
          hintLadder: [
            "Is one week weather or climate?",
            "What kind of data does a real climate claim need?",
            "Explain why one week can't prove a long-term trend."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Zoom Out Breathing",
      prompt:
        "Sit tall. Take 3 quick breaths (that's the fast-changing 'weather' of your body), then slow down to 5 long, steady breaths (that's the calm long-term 'climate'). Notice how zooming out to the slow rhythm feels more settled.",
      scienceTieIn:
        "Slow, steady breathing calms your nervous system — and it mirrors today's big idea: the long-term average (climate) is steadier and more telling than the fast, jumpy moment (weather).",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Climate is 'what you expect' and weather is 'what you get.' Write about a day when the weather you GOT was very different from the climate you'd EXPECT for your area.",
      badge: { id: "climate-vs-weather-decoder", name: "Climate vs. Weather Decoder", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
