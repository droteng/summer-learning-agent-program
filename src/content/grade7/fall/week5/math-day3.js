// Grade 7 Math — Fall Expedition, Week 5 (Persuasive Voices), Day 3.
// Topic: persuading with data honestly — spotting misleading graphs AND drawing
// inferences from samples. Grade 7 depth: percent change, using a sample to infer
// about a population, and judging when an inference is valid.

export const fallG7MathW5D3 = {
  id: "g7.fall.math.w5.d3",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Math",
  topic: "Persuading with data — inference, percent change, and spotting tricks",
  topicTag: "data-statistics",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.SP.A.2", "CCSS.7.RP.A.3"],
  hook: "Numbers can make an argument powerful — or sneaky. Today you go beyond reading a graph: you use a random sample to INFER what's true of a whole group, compute honest percent changes, and catch the tricks a dishonest persuader hides in the data.",
  miniLesson: [
    "A random, representative sample lets you INFER about a larger population — but only if it's random and big enough. A biased or tiny sample can't be trusted to represent everyone.",
    "Percent change = (new − old) ÷ old × 100. A 'doubling' is a 100% increase; watch for ads that dress up a small change as a huge percent.",
    "Misleading graphs trick the eye: a y-axis that doesn't start at zero exaggerates small gaps, and cherry-picked samples hide the real picture. Honest persuaders show the full scale and the true sample size."
  ],
  workedExample: {
    prompt: "A random sample of 50 students found 30 want a later lunch. If the school has 600 students, about how many would you INFER want a later lunch — and what makes this inference valid?",
    steps: [
      "Find the sample proportion: 30 ÷ 50 = 0.6, so 60%.",
      "Apply it to the whole population: 0.6 × 600 = 360 students.",
      "Check validity: the sample was random and a decent size (50), so it can represent the 600.",
      "Answer: about 360 students — a valid inference because the sample was random and large enough."
    ],
    answer: "About 360 students. The inference is valid because the sample was random and large enough to represent the population."
  },
  items: [
    {
      id: "g7.fall.math.w5.d3.q1",
      type: "multiple_choice",
      stem: "Which sample lets you most VALIDLY infer what all 800 students in a school think?",
      choices: [
        "The 8 students sitting at your lunch table",
        "The first 5 students who walk in the door",
        "The 25 members of the debate club only",
        "80 students chosen at random from the whole school"
      ],
      answerIndex: 3,
      explanation: "A large, RANDOM sample from the whole population is representative. The others are too small or biased toward one group.",
      hintLadder: [
        "A valid inference needs a random AND reasonably large sample.",
        "Which option isn't tied to one clique or a tiny handful?",
        "80 randomly chosen students represent the school best."
      ]
    },
    {
      id: "g7.fall.math.w5.d3.q2",
      type: "numeric",
      stem: "A club grew from 8 members to 20 members. What is the PERCENT INCREASE? (Use percent change = (new − old) ÷ old × 100.)",
      answer: 150,
      tolerance: 0,
      unit: "%",
      hintLadder: [
        "Percent change = (new − old) ÷ old × 100.",
        "(20 − 8) = 12, and 12 ÷ 8 = 1.5.",
        "1.5 × 100 = 150%."
      ],
      explanation: "(20 − 8) ÷ 8 = 12 ÷ 8 = 1.5 = 150% increase."
    },
    {
      id: "g7.fall.math.w5.d3.q3",
      type: "multiple_choice",
      stem: "An ad says '9 out of 10 kids prefer our snack!' — but they only asked 10 kids, all from one class. Why is the inference untrustworthy?",
      choices: [
        "10 kids is more than enough to speak for everyone",
        "Percentages can never be trusted",
        "The sample is both too small AND not random, so it can't represent all kids",
        "The snack must be unhealthy"
      ],
      answerIndex: 2,
      explanation: "A tiny, non-random sample (10 kids, one class) can't fairly stand in for a whole population — the result likely won't hold for a bigger, fairer group.",
      hintLadder: [
        "How many kids, and from where, were actually asked?",
        "Is 10 from one class random or big enough for 'all kids'?",
        "Too small AND biased means the inference fails."
      ],
      misconceptionsTargeted: ["small-sample-trust"]
    },
    {
      id: "g7.fall.math.w5.d3.q4",
      type: "numeric",
      stem: "A random survey of 200 students found 150 want a longer lunch. Based on this sample, about how many of the school's 1,000 students would you INFER want a longer lunch?",
      answer: 750,
      tolerance: 0,
      unit: "students",
      hintLadder: [
        "Find the sample proportion: 150 ÷ 200.",
        "150 ÷ 200 = 0.75 (75%).",
        "Apply it to 1,000: 0.75 × 1,000 = 750."
      ],
      explanation: "150 ÷ 200 = 0.75, and 0.75 × 1,000 = 750 students."
    },
    {
      id: "g7.fall.math.w5.d3.q5",
      type: "short_answer",
      stem: "You want to use data to argue for more library hours. Describe ONE honest way to present your numbers (including how you'd sample) and ONE trick you'd avoid — and explain why each is honest or misleading.",
      rubric: {
        level3: "Names an honest practice (random/adequate sample, full-scale graph, clear labels) AND a specific trick to avoid (biased/tiny sample, truncated axis, cherry-picking), each with a brief WHY.",
        level2: "Names one honest practice and one trick, but the reasoning is thin.",
        level1: "Vague, or doesn't distinguish honest vs. misleading."
      },
      exemplar: "Honest: survey a random sample of students across all grades and show a bar graph with the y-axis starting at zero — random sampling and a zero baseline make the result representative and undistorted. Avoid: only asking the after-school study group (a biased sample) and cutting the axis to exaggerate the need — that hides who I asked and inflates the gap.",
      hintLadder: [
        "What makes data honest? (random sample, zero axis, labels)",
        "What tricks mislead? (biased/tiny sample, truncated axis, cherry-picking)",
        "Give one of each and say WHY it helps or hurts."
      ]
    }
  ],
  reflectionPrompt: "Next time you see a flashy statistic in an ad, what two questions will you ask — one about the sample, one about the graph — to check if it's honest?",
  misconceptionBank: [
    {
      id: "small-sample-trust",
      label: "Trusts an inference from a tiny or biased sample",
      description: "Believes '9 out of 10' represents everyone even when only 10 non-random people were asked.",
      coachMove: "Ask 'out of how many, and were they chosen randomly?' A larger, random sample is what makes an inference trustworthy."
    },
    {
      id: "percent-of-vs-change",
      label: "Confuses percent change with a raw percent",
      description: "Computes new ÷ old instead of (new − old) ÷ old when finding percent increase.",
      coachMove: "Remind them percent CHANGE uses the DIFFERENCE over the original: (new − old) ÷ old × 100."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Sneaky Pumpkin Graph",
      prompt:
        "A poster brags 'PUMPKIN SALES SOARED 300%!' The bars TOWER over last year's. But it turns out sales went from 480 pumpkins to 500. Two things are fishy here — the percent claim AND the bar heights. What's wrong with each?",
      answer: "The percent is fake: (500 − 480) ÷ 480 ≈ 4%, not 300% — nowhere near it. And the bars only look like a mountain because the y-axis doesn't start at zero (it probably starts near 470). Honest version: a ~4% rise on a zero-baseline graph looks like a tiny bump.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Honest vs. Sneaky Harvest Graph",
      challenge:
        "Use this real data: a fall food drive collected 60 cans in Week 1 and 75 cans in Week 2. First compute the honest percent increase. Then draw the data twice — once honestly (y-axis at 0) and once 'sneakily' (y-axis at 55) — and explain which a fair persuader should use.",
      steps: [
        "Compute the percent increase: (75 − 60) ÷ 60 × 100. Write it down (it's 25%).",
        "Plot both weeks (60 and 75) on a graph whose y-axis starts at 0 — the honest version.",
        "Plot the same numbers on a graph whose y-axis starts at 55 — the exaggerated version.",
        "Write one or two sentences on how different the graphs feel and which is fair to show, and why."
      ],
      deliverable: "The 25% calculation plus two graphs of the same can-drive data (honest and exaggerated) and a sentence choosing the fair one.",
      choiceBoard: [
        "Hand-draw both graphs on grid paper and label the percent increase.",
        "Make a 'spot the trick' poster circling the truncated axis and the honest percent.",
        "Write a short caption a newspaper could print honestly under the real graph."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.math.w5.d3.arena1",
          type: "numeric",
          stem: "A random sample of 40 pumpkin-stand customers showed 12 bought cider too. If 300 customers visit the stand this week, about how many would you INFER also buy cider?",
          answer: 90,
          tolerance: 0,
          unit: "customers",
          hintLadder: [
            "Find the sample proportion: 12 ÷ 40.",
            "12 ÷ 40 = 0.3 (30%).",
            "Apply it to 300: 0.3 × 300 = 90."
          ],
          explanation: "12 ÷ 40 = 0.3, and 0.3 × 300 = 90 customers."
        },
        {
          id: "g7.fall.math.w5.d3.arena2",
          type: "short_answer",
          stem: "An ad says: 'Cider sales JUMPED 200% — 8 out of 8 people we asked loved it!' Explain TWO things a careful reader should question here (one about the percent, one about the sample).",
          rubric: {
            level3: "Questions the percent claim (200% is huge / unverifiable without the old and new numbers) AND the sample (only 8 people, 8/8 suggests non-random or cherry-picked), each clearly explained.",
            level2: "Raises one sound concern with clear reasoning.",
            level1: "Vague, or doesn't explain why either is questionable."
          },
          exemplar: "First, a '200% jump' means sales tripled — but without the actual old and new numbers I can't verify it, and even a tiny raw increase can be dressed up as a big percent. Second, only 8 people were asked and all 8 loved it, which suggests they weren't random (maybe friends), so that result can't represent all customers.",
          hintLadder: [
            "What would you need to check whether '200%' is real?",
            "How many people were asked, and does 8/8 sound random?",
            "Give one concern about the percent and one about the sample."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Bar-Graph Body",
      prompt:
        "Make your body into bar graphs: crouch low for a 'small bar,' stretch up tall for a 'big bar.' Call out 'honest!' for a slow controlled rise and 'sneaky!' for an exaggerated jump. Do 6 bars, alternating.",
      scienceTieIn: "Switching between crouching and stretching gets your blood flowing and resets your focus, just like standing up to stretch during a long data-analysis task.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Next time you see a flashy statistic in a fall ad, what's the first question you'll ask about the SAMPLE, and the first question about the GRAPH, to check if it's honest?",
      badge: { id: "g7-fall-inference-investigator", name: "Inference Investigator", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
