// Grade 7 Math — Fall Expedition, Week 8 (Harvest Showcase), Day 2.
// Topic: fall math synthesis — proportional reasoning, data inference,
// rates, and integers (Grade 7: multi-step reasoning + inference from data).

export const fallG7MathW8D2 = {
  id: "g7.fall.math.w8.d2",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Math",
  topic: "Fall math synthesis",
  topicTag: "synthesis-review",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.3", "CCSS.7.SP.A.2"],
  hook: "All season you scaled with proportions, read data, computed rates, and worked with signed change. Today you fuse them into one showcase-grade set — including the Grade 7 move of INFERRING from a sample about a whole population.",
  miniLesson: [
    "Proportional reasoning powers percents, scaling, and unit rates — solve with a proportion or a unit rate, then check the relationship holds.",
    "Percent change and signed values: a drop is negative, a rise is positive; percent change = (new − old) ÷ old × 100.",
    "Inference from a sample: a random, representative sample lets you estimate a population, but the estimate has uncertainty — a bigger, fairer sample tightens it."
  ],
  workedExample: {
    prompt: "A stand's sales fell from 240 crates one week to 180 the next. Find the percent change, then estimate the season total if that new weekly rate held for 8 weeks.",
    steps: [
      "Percent change = (new − old) ÷ old × 100 = (180 − 240) ÷ 240 × 100.",
      "= (−60 ÷ 240) × 100 = −25% (a 25% drop).",
      "At 180 crates/week for 8 weeks: 180 × 8.",
      "= 1440 crates."
    ],
    answer: "−25% change; about 1440 crates over 8 weeks at the new rate."
  },
  items: [
    {
      id: "g7.fall.math.w8.d2.q1",
      type: "numeric",
      stem: "A pumpkin bread recipe uses 3 cups flour to 1 cup pumpkin. To make a batch using 10.5 cups of flour, how many cups of pumpkin are needed?",
      answer: 3.5,
      tolerance: 0,
      unit: "cups",
      hintLadder: [
        "Set up a proportion: 3 flour / 1 pumpkin = 10.5 flour / x.",
        "Scale factor = 10.5 ÷ 3 = 3.5.",
        "Pumpkin = 1 × 3.5 = 3.5 cups."
      ],
      explanation: "Scale factor is 10.5 ÷ 3 = 3.5, so pumpkin = 1 × 3.5 = 3.5 cups."
    },
    {
      id: "g7.fall.math.w8.d2.q2",
      type: "numeric",
      stem: "Attendance at the fall festival dropped from 500 last year to 425 this year. What is the percent change? (Give the number; a drop is negative.)",
      answer: -15,
      tolerance: 0,
      unit: "%",
      hintLadder: [
        "Percent change = (new − old) ÷ old × 100.",
        "(425 − 500) ÷ 500 = −75 ÷ 500 = −0.15.",
        "−0.15 × 100 = −15%."
      ],
      explanation: "(425 − 500) ÷ 500 × 100 = −15%, a 15% decrease."
    },
    {
      id: "g7.fall.math.w8.d2.q3",
      type: "numeric",
      stem: "In a random sample of 40 students, 26 said they walk to school. Based on this sample, about how many of the school's 600 students would you estimate walk to school?",
      answer: 390,
      tolerance: 0,
      unit: "students",
      hintLadder: [
        "Find the sample proportion: 26 ÷ 40.",
        "26 ÷ 40 = 0.65 (65%).",
        "Apply to the population: 0.65 × 600 = 390."
      ],
      explanation: "Sample proportion = 26/40 = 0.65; estimate = 0.65 × 600 = 390 students."
    },
    {
      id: "g7.fall.math.w8.d2.q4",
      type: "numeric",
      stem: "A temperature was 8°C at noon and fell to −5°C by midnight. By how many degrees did the temperature change (the size of the drop)?",
      answer: 13,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "Change = start − end, or count the distance on a number line.",
        "From 8 down to 0 is 8; from 0 down to −5 is 5.",
        "8 + 5 = 13 degrees."
      ],
      explanation: "From 8°C to −5°C is a drop of 8 + 5 = 13 degrees."
    },
    {
      id: "g7.fall.math.w8.d2.q5",
      type: "short_answer",
      stem: "For your showcase you want to claim 'most students at our school prefer the new fall option.' You have two options: (A) ask 15 of your own friends, or (B) randomly sample 100 students across grades. Explain which gives a more trustworthy inference and WHY, using the idea of a representative sample.",
      rubric: {
        level3: "Chooses B AND explains that a larger, RANDOM/representative sample reduces bias and uncertainty, so it supports a population-wide claim; notes friends (A) are a biased, small sample.",
        level2: "Chooses B and gives a partial reason (just 'bigger' OR just 'less biased'), not both.",
        level1: "Chooses A, or gives no real reasoning about representativeness."
      },
      exemplar: "Option B. Fifteen friends are a small, biased sample — friends may share my tastes, so they can't speak for the whole school. A random sample of 100 across grades is larger and representative, so its proportion is a much more trustworthy estimate of what all students prefer, with less uncertainty.",
      hintLadder: [
        "Which sample looks more like the whole school?",
        "Friends may be biased and there are only 15 of them.",
        "Explain why a random, larger sample gives a trustworthy inference."
      ]
    }
  ],
  reflectionPrompt: "Grade 7 math added inference — using a sample to reason about a whole group. Where in real life do people (or ads) draw big conclusions from samples that are too small or biased?",
  misconceptionBank: [
    {
      id: "biased-sample-inference",
      label: "Infers about everyone from a biased sample",
      description: "Treats a small, non-random group (like friends) as if it represents the whole population.",
      coachMove: "Ask 'who did you leave out, and would they answer differently?' to expose sampling bias before trusting the estimate."
    },
    {
      id: "percent-change-base",
      label: "Uses the wrong base for percent change",
      description: "Divides the change by the new value instead of the original value.",
      coachMove: "Reinforce: percent change always divides by the ORIGINAL (old) amount, then track the sign."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Harvest Rate Riddle",
      prompt:
        "A farmer fills crates at a steady rate: in 3 hours she fills 18 crates. Halfway through hour 4 her helper joins and together they now fill crates 50% faster. At the new combined rate, how many crates do they fill in one full hour?",
      answer:
        "Her rate is 18 ÷ 3 = 6 crates/hour. 50% faster is 6 × 1.5 = 9 crates/hour. So in one hour at the new rate they fill 9 crates.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Showcase Inference Card",
      challenge:
        "Take one real fall number of yours — pages read, minutes practiced, pumpkins counted — and build an 'inference card': use a sample or a rate to make a claim about a bigger whole, then honestly state the card's uncertainty.",
      steps: [
        "Pick one real fall number and the sample or rate behind it.",
        "Scale it up with a proportion or unit rate to estimate a larger total (show the math).",
        "Write the claim as an estimate: 'about ___, based on ___.'",
        "Add one honest limit: sample size, bias, or assumption that could make the estimate off."
      ],
      deliverable: "An inference card: a real number, the proportional math that scales it, an estimate claim, and one honest limit.",
      choiceBoard: [
        "Make one illustrated inference card with the uncertainty stated.",
        "Make a 3-stat 'harvest dashboard' (one percent change, one unit rate, one sample-based estimate).",
        "Make a line graph of a fall number across 8 weeks and label a percent-change from week 1 to week 8."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Synthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.math.w8.d2.arena1",
          type: "numeric",
          stem: "In a random sample of 50 shoppers, 35 bought apples. Based on this sample, about how many of the day's 400 shoppers bought apples?",
          answer: 280,
          tolerance: 0,
          unit: "shoppers",
          hintLadder: [
            "Find the sample proportion: 35 ÷ 50.",
            "35 ÷ 50 = 0.70.",
            "0.70 × 400 = 280 shoppers."
          ],
          explanation: "Proportion = 35/50 = 0.70; estimate = 0.70 × 400 = 280 shoppers."
        },
        {
          id: "g7.fall.math.w8.d2.arena2",
          type: "numeric",
          stem: "A stand's weekly sales rose from 320 crates to 400 crates. What is the percent increase?",
          answer: 25,
          tolerance: 0,
          unit: "%",
          hintLadder: [
            "Percent change = (new − old) ÷ old × 100.",
            "(400 − 320) ÷ 320 = 80 ÷ 320 = 0.25.",
            "0.25 × 100 = 25%."
          ],
          explanation: "(400 − 320) ÷ 320 × 100 = 25% increase."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Count Stretch",
      prompt:
        "Pretend you're stacking crates: do 6 slow shoulder rolls, then reach high to 'top off the wagon' and hold for 10 seconds. Shake out your hands, then take one slow breath.",
      scienceTieIn: "Gentle movement boosts blood flow to your brain, which helps you reset and think clearly for the next multi-step problem.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which fall math tool — proportional reasoning, percent change, rates, or sample-based inference — made a number tell a real, honest story today? Write the number and what you concluded from it.",
      badge: { id: "g7-fall-inference-synthesizer", name: "Inference Synthesizer", emoji: "🌽" },
      estimatedMinutes: 7
    }
  }
};
