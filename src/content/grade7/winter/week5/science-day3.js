// Grade 7 Science — Winter Expedition, Week 5 (Data in the Cold), Day 3.
// Topic: weather vs. climate — the difference, how we measure each, and how
// scientists separate a long-term TREND (signal) from year-to-year VARIABILITY
// (noise). Grade-7 counterpart of the Grade 6 weather-vs-climate mission,
// pitched up to inferring trends from variable multi-year data.

export const winterG7ScienceW5D3 = {
  id: "g7.winter.sci.w5.d3",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Science",
  topic: "Weather vs. climate — separating long-term trend from year-to-year variability",
  topicTag: "weather-vs-climate",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ESS2-5", "NGSS.MS-ESS3-5"],
  hook: "Today it's −10°C and blizzarding — that's weather. Whether your region runs cold winters decade after decade — that's climate. In Grade 6 you learned to tell them apart. This year you go deeper: real climate data is NOISY, jumping up and down year to year, and scientists must separate the long-term TREND (the signal) from that year-to-year VARIABILITY (the noise). Today you learn how a trend can hide inside jumpy data — and how averaging and long records reveal it.",
  miniLesson: [
    "WEATHER is the atmosphere over minutes to days in one place (temperature, precipitation, wind). CLIMATE is the long-term statistical PATTERN — the averages, ranges, and trends — of weather over 30 years or more for a region.",
    "Climate data is full of VARIABILITY (noise): some winters run warm, some cold, purely by chance. A single warm or cold winter is noise, not a trend. The long-term TREND (signal) only shows up when you average many years and look at the direction over decades.",
    "Scientists infer trends by using LONG records and MULTIPLE independent data sources (thermometers, ice cores, satellite data), then averaging to smooth out the noise. A trend line through decades of jumpy points can rise even while individual years bounce up and down."
  ],
  workedExample: {
    prompt: "A region's mean winter temperature over six decades (°C): -6.0, -5.8, -5.9, -5.4, -5.2, -4.9. One decade (-5.9) was slightly colder than the one before it. Does this cooler decade mean the climate is NOT warming? Explain what the data really shows.",
    steps: [
      "List the decade means in order and look at the overall direction: −6.0 → −5.8 → −5.9 → −5.4 → −5.2 → −4.9.",
      "Yes, one step (−5.8 to −5.9) dipped slightly — that's normal year-to-year/decade-to-decade variability (noise).",
      "But across all six decades the trend rises from −6.0°C to −4.9°C, a warming of about 1.1°C overall.",
      "One cooler step is noise inside an overall warming SIGNAL; the long-term trend is what defines the climate change, not a single dip."
    ],
    answer: "No — the single cooler decade is just variability (noise). The overall six-decade trend still warms by about 1.1°C, which is the real climate signal."
  },
  items: [
    {
      id: "g7.winter.sci.w5.d3.q1",
      type: "multiple_choice",
      stem: "Which of these is an example of a long-term CLIMATE TREND rather than year-to-year variability?",
      choices: [
        "This winter was colder than last winter",
        "A blizzard dumped 30 cm of snow overnight",
        "Over 40 years, a region's average winter temperature rose by about 1.5°C",
        "Yesterday the wind chill hit -25°C"
      ],
      answerIndex: 2,
      explanation: "A steady change in the average across 40 years is a long-term trend (the climate signal). The others are single events or one-year comparisons — weather or short-term variability.",
      hintLadder: [
        "A trend is a direction across many years, not one event.",
        "Which choice spans decades and reports an average change?",
        "The 40-year rise in average temperature is a climate trend."
      ]
    },
    {
      id: "g7.winter.sci.w5.d3.q2",
      type: "numeric",
      stem: "A region's mean winter temperature was -6.0°C in the 1960s and -4.2°C in the 2010s. By how many degrees Celsius did the long-term average RISE over that span?",
      answer: 1.8,
      tolerance: 0.05,
      unit: "°C",
      hintLadder: [
        "Find the change: later value − earlier value.",
        "−4.2 − (−6.0) = −4.2 + 6.0.",
        "That equals 1.8°C of warming."
      ],
      explanation: "Change = −4.2 − (−6.0) = 1.8°C, a warming trend across the decades.",
      misconceptionsTargeted: ["subtracting-negatives-in-trend"]
    },
    {
      id: "g7.winter.sci.w5.d3.q3",
      type: "multiple_choice",
      stem: "A friend says: 'This was the coldest winter in 15 years, so the climate must be cooling.' What is the flaw in their reasoning?",
      choices: [
        "No flaw — one record-cold winter proves cooling",
        "They are treating one year of VARIABILITY (noise) as if it were a long-term TREND (signal)",
        "Thermometers can't measure cold accurately",
        "Climate only refers to summer, not winter"
      ],
      answerIndex: 1,
      explanation: "A single cold winter is normal variability (noise). A climate trend is the direction of the average over decades; one cold year — even a record one — can happen inside a warming trend.",
      hintLadder: [
        "Is one winter a trend or a single noisy data point?",
        "Can a cold year happen even while the long-term average rises?",
        "They mistook year-to-year noise for a long-term signal."
      ],
      misconceptionsTargeted: ["cold-year-disproves-trend"]
    },
    {
      id: "g7.winter.sci.w5.d3.q4",
      type: "short_answer",
      stem: "Explain the difference between year-to-year VARIABILITY (noise) and a long-term TREND (signal) in climate data. Use a winter example, and explain why scientists average many years instead of trusting any single winter.",
      rubric: {
        level3: "Clearly distinguishes short-term variability (random year-to-year ups and downs) from a long-term trend (the overall direction of the average over decades), gives a valid winter example, AND explains that averaging many years smooths out the noise so the true signal/trend appears.",
        level2: "Gets the core distinction but the example is weak/missing OR the averaging reasoning is unclear.",
        level1: "Confuses the two ideas or gives no valid reasoning."
      },
      exemplar: "Variability is the random up-and-down from one winter to the next — one year might be unusually mild and the next brutally cold just by chance. A trend is the overall direction of the average across many decades, like winters slowly warming by a degree or two over 40 years. Scientists average many years because any single winter could be a noisy outlier; averaging smooths out that noise so the real long-term signal (the trend) shows through.",
      hintLadder: [
        "Think 'random jumps year to year' versus 'overall direction over decades.'",
        "Give one noisy-year example and describe the multi-decade trend.",
        "Explain how averaging many years removes the noise."
      ]
    },
    {
      id: "g7.winter.sci.w5.d3.q5",
      type: "short_answer",
      stem: "Why do climate scientists use MULTIPLE independent data sources (like thermometers, satellites, and ice cores) instead of just one long temperature record? Explain what having several agreeing sources lets them conclude that one source alone cannot.",
      rubric: {
        level3: "Explains that any single source can have gaps, errors, or biases, and that multiple INDEPENDENT sources agreeing gives stronger, more trustworthy evidence (corroboration), letting scientists be more confident the trend is real and not an artifact of one instrument.",
        level2: "Notes that more sources are better but doesn't clearly explain corroboration or why independence/agreement strengthens the conclusion.",
        level1: "No clear reasoning about why multiple sources matter."
      },
      exemplar: "Any single record can have errors, gaps, or a bias — maybe a station moved or an instrument drifted. If several independent sources like thermometers, satellites, and ice cores all show the same warming trend, that agreement is much stronger evidence, because it's unlikely all of them are wrong in the same way. Multiple agreeing sources let scientists conclude the trend is real, not just a glitch in one instrument, which one record alone could never rule out.",
      hintLadder: [
        "Can one instrument or record have errors or gaps?",
        "What does it mean when several independent sources agree?",
        "Explain how agreement across sources builds confidence a single one can't."
      ]
    }
  ],
  reflectionPrompt: "Climate is 'what you expect' and weather is 'what you get.' Think of a winter that surprised you by being far warmer or colder than usual. Was that noise (one odd year) or would it take decades of data to tell?",
  misconceptionBank: [
    {
      id: "cold-year-disproves-trend",
      label: "Uses one cold year to disprove a warming trend",
      description: "Believes a single record-cold winter (noise) proves the long-term climate is cooling, mistaking variability for a trend.",
      coachMove: "Separate signal from noise: 'One low roll doesn't lower the average of hundreds of rolls.' A cold year is one noisy point inside a decades-long trend."
    },
    {
      id: "subtracting-negatives-in-trend",
      label: "Drops the negative sign when computing a temperature change",
      description: "Computes a trend change as later − earlier but mishandles the negative, getting the wrong size or direction.",
      coachMove: "Write it out: −4.2 − (−6.0) = −4.2 + 6.0 = 1.8. Subtracting a negative adds, so the average rose."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Signal or Noise?",
      prompt:
        "Would you rather judge a region's climate from ONE winter's temperature, or from the AVERAGE of 40 winters? Say which one is mostly 'noise' (random year-to-year jumps) and which one reveals the 'signal' (the real long-term trend) before you choose.",
      answer:
        "The 40-winter average. One winter is mostly noise — it could be a fluke warm or cold year. Averaging 40 winters smooths the noise and reveals the signal: the true long-term trend. More years = clearer signal.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Signal-vs-Noise Trend Studio",
      challenge:
        "Invent (or find) a jumpy 10-year record of a region's mean winter temperature — bouncing up and down but slowly trending in one direction. Plot it, draw a trend line THROUGH the noise, and write a short caption explaining which wiggles are noise and what the trend line reveals.",
      steps: [
        "Write 10 yearly mean winter temperatures that jump up and down but drift one direction overall (include below-zero values).",
        "Plot them as points and connect or scatter them so the year-to-year noise is visible.",
        "Draw a straight TREND LINE through the middle of the noisy points.",
        "Write a caption naming two 'noise' years and stating the overall trend the line reveals."
      ],
      deliverable: "A 10-year plot with a trend line drawn through the noisy data and a caption distinguishing the year-to-year noise from the long-term trend.",
      choiceBoard: [
        "Draw the noisy plot and trend line on paper or in a drawing app.",
        "Build it in a spreadsheet and add a trendline over the jumpy data.",
        "Make a 'zoom out' poster: one panel shows a single noisy year (weather), the next shows the 10-year trend (climate)."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Signal-vs-Noise Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w5.d3.arena1",
          type: "numeric",
          stem: "A region's mean winter temperature was -7.5°C fifty years ago and -5.1°C today. By how many degrees Celsius did the long-term average rise? (One decimal.)",
          answer: 2.4,
          tolerance: 0.05,
          unit: "°C",
          hintLadder: [
            "Change = today − fifty years ago.",
            "−5.1 − (−7.5) = −5.1 + 7.5.",
            "That equals 2.4°C of warming."
          ],
          explanation: "Change = −5.1 − (−7.5) = 2.4°C, the warming trend across 50 years."
        },
        {
          id: "g7.winter.sci.w5.d3.arena2",
          type: "short_answer",
          stem: "A news host says: 'Satellites, ground thermometers, AND ice cores all show winters warming over 50 years — but this year was cold, so it's all wrong.' Explain the TWO errors: one about the single cold year, and one about ignoring the agreement of multiple sources.",
          rubric: {
            level3: "Identifies (1) that one cold year is short-term variability/noise that can't overturn a 50-year trend, AND (2) that three independent sources agreeing is strong corroborating evidence a single year cannot outweigh — with clear reasoning for both.",
            level2: "Correctly explains one of the two errors but the other is weak or missing.",
            level1: "No valid explanation of either error."
          },
          exemplar: "First, this year being cold is just year-to-year variability — one noisy data point that can't overturn a trend measured across 50 years. Second, the host ignores that three INDEPENDENT sources (satellites, thermometers, ice cores) all agree on the warming; that agreement is strong evidence the trend is real, and a single cold year can't outweigh 50 years confirmed by three different methods.",
          hintLadder: [
            "Is one cold year a trend or noise?",
            "What does it mean that three independent sources agree?",
            "Explain why one year can't overturn a corroborated 50-year trend."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Smooth the Noise",
      prompt:
        "Sit tall. Take 3 quick, jerky breaths (that's the noisy 'weather' of a single year), then slow into 5 long, smooth breaths (that's the averaged 'climate' signal). Notice how the smooth rhythm feels steadier and clearer — just like averaging reveals the trend.",
      scienceTieIn:
        "Slow, smooth breathing settles your nervous system, and it mirrors today's core idea: averaging over time smooths out noisy jumps so the true underlying signal — the long-term trend — becomes clear.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Scientists trust a trend more when several independent sources agree. Where else in life do you feel more sure of something because several separate sources point the same way?",
      badge: { id: "g7-winter-trend-decoder", name: "Winter Trend Decoder", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
