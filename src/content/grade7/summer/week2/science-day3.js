// Grade 7 Science — Summer Program, Week 2 (Numbers in the Real World), Day 3.
// Topic: precise measurement & data collection — units, precision, repeated
// trials and averaging. Project: build a mini data dashboard.

export const summerG7ScienceW2D3 = {
  id: "g7.summer.sci.w2.d3",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Science",
  topic: "Precise measurement & data collection",
  topicTag: "measurement-precision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ETS1-3", "NGSS.MS-PS1-4"],
  hook: "A dashboard is only as trustworthy as the data behind it. Scientists don't just measure once — they choose the right unit, measure carefully, and repeat trials so a single mistake can't fool them. Today you become a precise data collector.",
  miniLesson: [
    "Every measurement needs a UNIT and the right level of precision. '3' is meaningless; '3.2 cm' tells you the quantity, the unit, and how finely it was measured.",
    "Instruments have a smallest reliable division. A ruler marked in millimeters lets you report to the nearest mm — reporting '3.247 cm' from that ruler claims precision the tool doesn't have.",
    "Repeating a measurement and taking the MEAN (average) reduces the effect of random error. Trials that are close together are called precise; a value close to the true value is called accurate."
  ],
  workedExample: {
    prompt: "A student times a marble rolling down a ramp three times: 2.1 s, 2.3 s, 2.2 s. What is the best single value to report, and why?",
    steps: [
      "Repeated trials guard against a one-off error, so report the mean.",
      "Add the trials: 2.1 + 2.3 + 2.2 = 6.6 s.",
      "Divide by the number of trials: 6.6 ÷ 3 = 2.2 s.",
      "The trials are close (2.1–2.3 s), so they're precise; report 2.2 s with its unit."
    ],
    answer: "Report the mean, 2.2 s — averaging repeated trials reduces random error."
  },
  items: [
    {
      id: "g7.summer.sci.w2.d3.q1",
      type: "numeric",
      stem: "Three trials measure a plant's height: 12.4 cm, 12.8 cm, 12.6 cm. What is the mean height in cm?",
      answer: 12.6,
      tolerance: 0.01,
      unit: "cm",
      hintLadder: [
        "The mean is the sum of the trials divided by how many there are.",
        "Add 12.4 + 12.8 + 12.6, then divide by 3.",
        "37.8 ÷ 3 = 12.6 cm."
      ],
      explanation: "(12.4 + 12.8 + 12.6) ÷ 3 = 37.8 ÷ 3 = 12.6 cm."
    },
    {
      id: "g7.summer.sci.w2.d3.q2",
      type: "multiple_choice",
      stem: "A ruler is marked only in whole centimeters (no millimeter lines). Which reported length claims MORE precision than the tool can support?",
      choices: [
        "About 7 cm",
        "7 cm",
        "7.35 cm",
        "Between 7 and 8 cm"
      ],
      answerIndex: 2,
      explanation: "A ruler marked only in whole centimeters cannot justify hundredths of a centimeter, so '7.35 cm' overstates the tool's precision.",
      hintLadder: [
        "Look at the smallest division the ruler actually shows.",
        "You can only reliably read to about that smallest mark.",
        "Reporting 7.35 cm claims two decimals a whole-cm ruler can't give."
      ],
      misconceptionsTargeted: ["more-decimals-more-precise"]
    },
    {
      id: "g7.summer.sci.w2.d3.q3",
      type: "numeric",
      stem: "A scale reads a rock's mass in four trials: 48 g, 52 g, 50 g, 50 g. What is the mean mass in grams?",
      answer: 50,
      tolerance: 0,
      unit: "g",
      hintLadder: [
        "Add all four trial masses.",
        "48 + 52 + 50 + 50 = 200.",
        "200 ÷ 4 = 50 g."
      ],
      explanation: "(48 + 52 + 50 + 50) ÷ 4 = 200 ÷ 4 = 50 g."
    },
    {
      id: "g7.summer.sci.w2.d3.q4",
      type: "multiple_choice",
      stem: "Two groups measure the SAME 10.0 cm bar. Group A gets 9.9, 10.0, 10.1 cm. Group B gets 8.4, 8.5, 8.4 cm. Which statement is correct?",
      choices: [
        "Group B is more accurate because its values are closer together.",
        "Group A is both accurate (near 10.0) and precise (values close together).",
        "Group A is precise but not accurate.",
        "Both groups are equally accurate."
      ],
      answerIndex: 1,
      explanation: "Group A's values cluster tightly (precise) AND sit near the true 10.0 cm (accurate). Group B is precise but not accurate — its values are close together but far from 10.0.",
      hintLadder: [
        "Accurate = close to the true value (10.0 cm). Precise = trials close to each other.",
        "Check Group A against 10.0, then check how tight its trials are.",
        "Group A is near 10.0 AND tightly grouped, so it is both."
      ]
    },
    {
      id: "g7.summer.sci.w2.d3.q5",
      type: "short_answer",
      stem: "Your dashboard will show one 'reaction time' value for a student, but a single trial could be a fluke. Describe a data-collection plan that gives a trustworthy value, and explain how you'd turn your trials into that one number.",
      rubric: {
        level3: "Proposes multiple trials under the same conditions, records each with its unit, and computes the MEAN, explaining that averaging repeated trials reduces random error.",
        level2: "Mentions repeating trials OR averaging but not both, or omits keeping conditions consistent.",
        level1: "Suggests a single measurement or gives no method for combining trials."
      },
      exemplar: "I'd measure reaction time at least 5 times under the same conditions and record each in seconds. Then I'd add the trials and divide by 5 to get the mean. Averaging repeated trials cancels out random flukes, so the reported number is more trustworthy than any single measurement.",
      hintLadder: [
        "Why is measuring only once risky?",
        "How many trials would help, and what should stay the same across them?",
        "How do you combine several trials into one reported value?"
      ]
    }
  ],
  reflectionPrompt: "Think of a time a single measurement (a scale, a stopwatch, a thermometer) surprised you. How would repeating it have changed how much you trusted the number?",
  misconceptionBank: [
    {
      id: "more-decimals-more-precise",
      label: "Thinks more decimal places always means better data",
      description: "Reports extra decimals the instrument can't actually resolve, confusing written digits with real precision.",
      coachMove: "Anchor precision to the tool: 'What is the smallest mark you can actually read? Report to about that level and no finer.'"
    },
    {
      id: "accuracy-vs-precision-mixup",
      label: "Confuses accuracy with precision",
      description: "Assumes tightly clustered results must be correct, even when they're all far from the true value.",
      coachMove: "Separate the two questions: 'Are the trials close to EACH OTHER?' (precision) vs. 'Are they close to the TRUE value?' (accuracy)."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "One Guess or Ten?",
      prompt:
        "You want to know how many seconds you can hold your breath comfortably. Would you trust a single try, or would you try several times and combine them? What would you DO with the several numbers to get one answer?",
      answer:
        "Trust several tries — a single one could be a fluke (you sneezed, got distracted). Add up the trials and divide by how many there are to get the MEAN. Averaging repeated trials smooths out random error.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Run a Precision Data Table",
      challenge:
        "Pick something you can measure at home — how long it takes to say the alphabet, how far a paper ball flies, your resting count of finger taps in 10 seconds. Measure it 5 times, record each with its UNIT, then compute the mean and note how spread out your trials were.",
      steps: [
        "Choose one measurable action and the right unit (seconds, cm, count).",
        "Run 5 trials, keeping the conditions the SAME each time, and record each value.",
        "Add your trials and divide by 5 to find the mean.",
        "Look at your highest and lowest trial — write one sentence about how precise (spread out) your data was."
      ],
      deliverable: "A data table of 5 trials with units, the computed mean, and a note on how spread out the trials were.",
      choiceBoard: [
        "Fill in a neat data table and circle the mean.",
        "Make a dot-plot of your 5 trials and mark the mean with a star.",
        "Record a 30-second 'lab report' explaining your method and your mean."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Precision Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.sci.w2.d3.arena1",
          type: "numeric",
          stem: "Five temperature trials read: 21.0°C, 21.4°C, 20.8°C, 21.2°C, 21.1°C. What is the mean temperature in °C? Round to one decimal place.",
          answer: 21.1,
          tolerance: 0.05,
          unit: "°C",
          hintLadder: [
            "Add all five readings first.",
            "21.0 + 21.4 + 20.8 + 21.2 + 21.1 = 105.5.",
            "105.5 ÷ 5 = 21.1°C."
          ],
          explanation: "Sum = 105.5°C; 105.5 ÷ 5 = 21.1°C."
        },
        {
          id: "g7.summer.sci.w2.d3.arena2",
          type: "short_answer",
          stem: "A classmate reports a pencil is '15.472 cm' using a ruler marked only in millimeters. What is wrong with this report, and how should it be fixed?",
          rubric: {
            level3: "Explains that a mm-marked ruler can only be read to about the nearest millimeter (0.1 cm), so the extra digits (72) claim false precision, and rewrites it as about 15.5 cm (or 15.4–15.5 cm).",
            level2: "Notes the report is too precise but the corrected value or the reason is vague.",
            level1: "Sees no problem or gives an unrelated fix."
          },
          exemplar: "A millimeter ruler can only be read reliably to the nearest tenth of a centimeter, so '15.472 cm' invents thousandths the tool can't measure. It should be reported as about 15.5 cm, matching the ruler's smallest division.",
          hintLadder: [
            "What is the smallest division on a millimeter ruler, in cm?",
            "Which digits in 15.472 go finer than the tool can read?",
            "Rewrite it to match the ruler's real precision."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Measured Breathing",
      prompt:
        "Run a 'precision' breathing trial: breathe in for a count of 4, hold for 4, out for 4. Do it 4 times, keeping each count steady and equal — like taking careful, repeatable measurements.",
      scienceTieIn:
        "Slow, evenly counted breathing steadies your heart rate and calms the nervous system, mirroring how repeated, consistent trials steady your data.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Good data comes from careful, repeated measuring. Where in your life would taking 'more trials' before deciding lead to a better choice?",
      badge: { id: "g7-precision-collector", name: "Precision Collector", emoji: "📏" },
      estimatedMinutes: 7
    }
  }
};
