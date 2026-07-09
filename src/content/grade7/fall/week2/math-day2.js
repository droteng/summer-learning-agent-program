// Grade 7 Math — Fall Expedition, Week 2 (Ecosystems & Food Webs), Day 2.
// Topic: the energy pyramid and the ~10% rule — proportional reasoning, percent
// as a repeated multiplier, and working backward to find an unknown level.

export const fallG7MathW2D2 = {
  id: "g7.fall.math.w2.d2",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Math",
  topic: "The energy pyramid and the 10% rule",
  topicTag: "ratios-energy-pyramid",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.3", "CCSS.7.RP.A.2"],
  hook: "Only about 10% of energy passes up each level of a food chain — a constant proportional relationship. Today you treat that 10% as a repeated multiplier, compute what fraction survives across several levels, and even work BACKWARD to find how much a producer must capture to feed a top predator.",
  miniLesson: [
    "The 10% rule is a proportional relationship: each level up is 0.10 times the level below. Going up n levels multiplies by 0.10 exactly n times, or (0.10)ⁿ.",
    "So after 1 step 10% survives, after 2 steps 0.10 × 0.10 = 0.01 = 1%, after 3 steps 0.001 = 0.1%. Each level loses about 90% of the energy that reached it.",
    "To work BACKWARD (find the level below from the level above), you reverse the operation: divide by 0.10, i.e. multiply by 10, once for each level you go down."
  ],
  workedExample: {
    prompt: "A fox (a secondary consumer, two levels above the producers) receives 240 kJ of energy. Using the 10% rule, how much energy did the producers originally capture?",
    steps: [
      "The fox is two levels above producers, so its energy is (0.10)² = 0.01 of the producers' energy.",
      "Work backward: to go DOWN a level, divide by 0.10 (multiply by 10).",
      "Fox → primary consumers: 240 ÷ 0.10 = 2,400 kJ.",
      "Primary consumers → producers: 2,400 ÷ 0.10 = 24,000 kJ. Check: 24,000 × 0.01 = 240 ✓."
    ],
    answer: "The producers captured 24,000 kJ (since 240 is 1% of 24,000)."
  },
  items: [
    {
      id: "g7.fall.math.w2.d2.q1",
      type: "numeric",
      stem: "Producers capture 100,000 kJ. What PERCENT of that energy reaches the secondary consumers (two levels up)? Enter the percent as a number.",
      answer: 1,
      tolerance: 0,
      unit: "%",
      hintLadder: [
        "Two levels up means multiplying by 0.10 twice.",
        "0.10 × 0.10 = 0.01.",
        "0.01 written as a percent is 1%."
      ],
      explanation: "Each level keeps 10%, so two levels keep 0.10 × 0.10 = 0.01 = 1%. (100,000 × 0.01 = 1,000 kJ reaches the secondary consumers.)"
    },
    {
      id: "g7.fall.math.w2.d2.q2",
      type: "numeric",
      stem: "A hawk that is TWO trophic levels above the producers needs 350 kJ of energy. Working backward with the 10% rule, how many kilojoules must the producers capture to supply it?",
      answer: 35000,
      tolerance: 0,
      unit: "kJ",
      hintLadder: [
        "To go DOWN a level, divide by 0.10 (that's the same as ×10).",
        "Do it once to reach the primary consumers, again to reach the producers.",
        "350 ÷ 0.10 = 3,500, then 3,500 ÷ 0.10 = 35,000 kJ."
      ],
      explanation: "350 is 1% of the producer energy, so producers = 350 ÷ 0.01 = 35,000 kJ."
    },
    {
      id: "g7.fall.math.w2.d2.q3",
      type: "multiple_choice",
      stem: "Which expression correctly gives the fraction of producer energy that reaches an organism FOUR trophic levels above the producers?",
      choices: [
        "(0.10)⁴",
        "0.10 × 4",
        "4 ÷ 0.10",
        "0.10 + 0.10 + 0.10 + 0.10"
      ],
      answerIndex: 0,
      explanation: "Each level multiplies by 0.10, so four levels is 0.10 raised to the 4th power = (0.10)⁴ = 0.0001, or 0.01%. The 10% rule is repeated multiplication, not addition.",
      hintLadder: [
        "Going up a level MULTIPLIES by 0.10 — it doesn't add.",
        "Four levels means multiplying by 0.10 four times.",
        "Repeated multiplication is written as a power: (0.10)⁴."
      ],
      misconceptionsTargeted: ["percent-steps-add-not-multiply"]
    },
    {
      id: "g7.fall.math.w2.d2.q4",
      type: "multiple_choice",
      stem: "Ecosystem A transfers 10% of energy between levels; Ecosystem B transfers 20%. For the SAME producer energy, how does the energy reaching the third level (two steps up) compare?",
      choices: [
        "B delivers twice as much as A",
        "B delivers four times as much as A",
        "They deliver the same amount",
        "A delivers more because 10% is more efficient"
      ],
      answerIndex: 1,
      explanation: "A keeps (0.10)² = 0.01; B keeps (0.20)² = 0.04. 0.04 ÷ 0.01 = 4, so B delivers four times as much — because the efficiency is squared over two steps, doubling it quadruples the result.",
      hintLadder: [
        "Two steps up means squaring the per-step fraction.",
        "A: (0.10)² = 0.01. B: (0.20)² = 0.04.",
        "Compare 0.04 to 0.01 — it's 4×, not 2×."
      ]
    },
    {
      id: "g7.fall.math.w2.d2.q5",
      type: "short_answer",
      stem: "A garden's producers capture 90,000 kJ. Trace the energy through THREE levels using the 10% rule, then state what fraction (as a percent) of the original reaches the third level. Show your steps.",
      rubric: {
        level3: "Shows 90,000 → 9,000 → 900 → 90 with all three ×0.10 steps AND correctly states the third level is (0.10)³ = 0.1% of the original.",
        level2: "Correct chain of numbers but wrong/missing percent, OR correct percent with one arithmetic slip.",
        level1: "Does not apply the 10% rule correctly across three levels."
      },
      exemplar: "Producers: 90,000 kJ. Level 2: 90,000 × 0.10 = 9,000. Level 3: 9,000 × 0.10 = 900. Level 4 (third step up): 900 × 0.10 = 90 kJ. That's (0.10)³ = 0.001 = 0.1% of the original energy.",
      hintLadder: [
        "Start at 90,000 and multiply by 0.10 for each level up.",
        "Do three steps and keep each result.",
        "The final fraction is 0.10 × 0.10 × 0.10 — convert it to a percent."
      ]
    }
  ],
  reflectionPrompt: "Because each level keeps only 10%, eating a plant directly gives you about 10× the energy of eating an animal that ate the plant. How might the math of the 10% rule shape a real decision about food or farming?",
  misconceptionBank: [
    {
      id: "percent-steps-add-not-multiply",
      label: "Adds the percent steps instead of multiplying them",
      description: "Thinks two 10% steps means 20% survives, treating the repeated proportion as addition rather than multiplication.",
      coachMove: "Walk one concrete number through two steps: 1,000 → 100 → 10. Only 1% (not 20%) survived, because each step multiplies by 0.10."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Same forest, two rules. Would you rather be a top predator in an ecosystem where 10% of energy passes up each level, or one where 20% passes up? Assume you're three levels above the producers — and think about the exponent before you answer.",
      answer:
        "The 20% ecosystem — by a lot. Three levels up you keep (0.20)³ = 0.008 versus (0.10)³ = 0.001. That's 8× as much energy reaching you, because the per-step efficiency gets cubed over three transfers.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Proportional Energy Pyramid",
      challenge:
        "Pick a real or invented fall ecosystem and build a 4-level energy pyramid. Start the producers with a round number of kJ, apply the 10% rule at each level, AND label each level with the PERCENT of the original energy that survives to it.",
      materials: ["Paper & markers, OR a device to draw/type on"],
      steps: [
        "Name a producer, a primary consumer, a secondary consumer, and a top predator.",
        "Give the producers a starting energy (like 500,000 kJ) and apply ×0.10 up each level.",
        "Next to each level, write the surviving percent: 100%, 10%, 1%, 0.1%.",
        "Draw the pyramid so each level's WIDTH is proportional to its energy, and add a caption on why it narrows so fast."
      ],
      deliverable: "A 4-level energy pyramid labeled with both kJ and the surviving percent at each level.",
      choiceBoard: [
        "Draw the proportional energy pyramid with kJ and percent labels.",
        "Make a table with columns Level, Energy (kJ), and Percent of original.",
        "Write a 'work-backward' word problem for a partner: give the top-level energy and ask for the producer energy."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Energy Pyramid Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.math.w2.d2.arena1",
          type: "numeric",
          stem: "An oak forest's producers capture 480,000 kJ. Using the 10% rule, how many kilojoules reach a top predator THREE trophic levels above the producers?",
          answer: 480,
          tolerance: 0,
          unit: "kJ",
          hintLadder: [
            "Three levels up means multiplying by 0.10 three times, or by (0.10)³ = 0.001.",
            "You can also step it: 480,000 → 48,000 → 4,800 → 480.",
            "480,000 × 0.001 = 480 kJ."
          ],
          explanation: "480,000 × 0.10 = 48,000 → × 0.10 = 4,800 → × 0.10 = 480 kJ. Equivalently 480,000 × (0.10)³ = 480 kJ."
        },
        {
          id: "g7.fall.math.w2.d2.arena2",
          type: "short_answer",
          stem: "A top predator two levels above the producers must receive 500 kJ to survive. Work BACKWARD with the 10% rule to find how much energy the producers must capture, showing each step, then explain why the producer number is so much larger.",
          rubric: {
            level3: "Divides by 0.10 twice (500 → 5,000 → 50,000 kJ) with steps shown AND explains that because only 1% survives two levels, the base must be 100× the top.",
            level2: "Reaches 50,000 with a small slip or gives the answer without explaining the 100× relationship.",
            level1: "Does not reverse the 10% rule correctly."
          },
          exemplar: "Go down one level: 500 ÷ 0.10 = 5,000 kJ at the primary consumers. Down again: 5,000 ÷ 0.10 = 50,000 kJ at the producers. The producer number is 100× the top because only (0.10)² = 1% of producer energy survives two transfers, so the base has to be a hundred times bigger to leave 500 kJ up top.",
          hintLadder: [
            "To go DOWN a level, divide by 0.10 (multiply by 10).",
            "Do that twice to get from the top predator to the producers.",
            "Explain the size gap using the 1% that survives two levels."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shrinking Pyramid",
      prompt:
        "Reach wide with 10 big arm circles for the producers (100%), then 6 circles crouching lower for level 2 (10%), 3 for level 3 (1%), and a single tiny circle for the top predator (0.1%). Feel the energy shrink by a factor of 10 each time.",
      scienceTieIn: "Your muscles release heat as they work — the same energy loss that makes each level of the pyramid only a tenth of the one below it.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The 10% rule is repeated multiplication, so energy shrinks fast. Where in your own day did a small repeated loss (or gain) add up to a big change over several steps?",
      badge: { id: "g7-fall-pyramid-proportionist", name: "Pyramid Proportionist", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
