// Grade 7 Science — Winter Expedition, Week 6 (Inventors & Engineers), Day 1.
// Topic: the engineering design process, pitched up to Grade 7 — defining
// weighted criteria and constraints, evaluating competing solutions with a
// decision matrix / trade-offs, and optimizing across iterations.

export const winterG7ScienceW6D1 = {
  id: "g7.winter.sci.w6.d1",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 1,
  subject: "Science",
  topic: "The engineering design process: criteria, constraints, and trade-offs",
  topicTag: "engineering-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ETS1-2", "NGSS.MS-ETS1-3"],
  hook: "A blizzard buries the town and every team pitches a different rescue sled. They can't all be built — so how does an engineer choose? At Grade 7 the design loop gets sharper: you define measurable criteria, weigh them against hard constraints, and use a decision matrix to compare competing solutions and their trade-offs. This week you'll invent for a frozen world and defend WHY your design wins.",
  miniLesson: [
    "The design process is still a loop — define, brainstorm, build, test, improve — but engineers make it rigorous by writing CRITERIA as measurable targets (\"keeps water above 0°C for 15 min\") and CONSTRAINTS as hard limits (\"under $15, under 500 g\").",
    "When several designs compete, engineers use a DECISION MATRIX: score each design against each criterion, WEIGHT the criteria by importance, and total the weighted scores. The highest total is the strongest overall solution, even if it doesn't win every single category.",
    "Almost every design involves a TRADE-OFF: improving one criterion (more insulation) often worsens another (more weight, higher cost). Optimizing means finding the balance that best meets the weighted criteria within the constraints, then iterating to push that balance further."
  ],
  workedExample: {
    prompt: "Two boot designs are tested. Warmth matters twice as much as weight. Boot A scores 5 for warmth and 2 for lightness; Boot B scores 3 for warmth and 5 for lightness. Using warmth weight 2 and lightness weight 1, which boot wins the weighted decision matrix?",
    steps: [
      "Weighted score = (warmth score × 2) + (lightness score × 1).",
      "Boot A: (5 × 2) + (2 × 1) = 10 + 2 = 12.",
      "Boot B: (3 × 2) + (5 × 1) = 6 + 5 = 11.",
      "Boot A totals 12 vs Boot B's 11, so Boot A wins even though Boot B is lighter — because warmth was weighted more heavily."
    ],
    answer: "Boot A wins with a weighted total of 12 versus Boot B's 11, because warmth was weighted twice as heavily as lightness."
  },
  items: [
    {
      id: "g7.winter.sci.w6.d1.q1",
      type: "multiple_choice",
      stem: "Why do engineers use a WEIGHTED decision matrix instead of just picking the design that wins the most categories?",
      choices: [
        "Because more categories always means a better design",
        "Because some criteria matter more than others, so they should count for more in the total",
        "Because weighting makes the math take longer",
        "Because the first design listed should always win"
      ],
      answerIndex: 1,
      explanation: "Weighting lets the most important criteria influence the final score more, so a design can win overall even if it loses a less important category.",
      hintLadder: [
        "Do all criteria matter equally in a real design?",
        "What does 'weighting' let you do to the important criteria?",
        "It makes important criteria count for more in the total."
      ]
    },
    {
      id: "g7.winter.sci.w6.d1.q2",
      type: "multiple_choice",
      stem: "A team adds thick insulation to a glove, which makes it much warmer but also heavier and less flexible. This is a clear example of a...",
      choices: [
        "Constraint being removed",
        "Trade-off, where improving one criterion worsens another",
        "Criterion with no cost",
        "Failed brainstorm"
      ],
      answerIndex: 1,
      explanation: "Gaining warmth at the cost of weight and flexibility is a trade-off — one criterion improves while others get worse.",
      hintLadder: [
        "One thing got better and two things got worse.",
        "What do engineers call gaining on one criterion by losing on another?",
        "That is a trade-off."
      ],
      misconceptionsTargeted: ["ignores-trade-offs"]
    },
    {
      id: "g7.winter.sci.w6.d1.q3",
      type: "multiple_choice",
      stem: "Which statement is a well-written CRITERION (measurable goal) rather than a constraint?",
      choices: [
        "The prototype must cost under $20",
        "The prototype must be finished by Friday",
        "The prototype must keep a cup of water above 0°C for at least 15 minutes",
        "The prototype may use only cardboard and tape"
      ],
      answerIndex: 2,
      explanation: "A criterion is a measurable performance goal the solution should achieve; the others are limits (cost, time, materials) — those are constraints.",
      hintLadder: [
        "A criterion describes how WELL it must perform; a constraint is a LIMIT.",
        "Which option states a measurable performance goal?",
        "'Keeps water above 0°C for 15 minutes' is the measurable criterion."
      ]
    },
    {
      id: "g7.winter.sci.w6.d1.q4",
      type: "short_answer",
      stem: "You are choosing between two winter-shelter prototypes. Define TWO measurable criteria and assign each a weight (how important it is). Then explain how a design could score lower on one criterion but still be the best overall choice.",
      rubric: {
        level3: "Gives two measurable criteria with sensible weights AND explains that a higher weight on one criterion can let a design win overall despite losing a lower-weighted criterion.",
        level2: "Gives two criteria and weights but the explanation of overall winning is thin or partly unclear.",
        level1: "Criteria are not measurable, weights are missing, or there is no explanation of weighted totals."
      },
      exemplar: "Criterion 1: keeps inside air above freezing for 20 minutes (weight 3). Criterion 2: sets up in under 5 minutes (weight 1). A shelter that is a little slower to set up but far warmer can still win, because the warmth criterion is weighted 3 times as heavily, so its high warmth score dominates the weighted total.",
      hintLadder: [
        "Each criterion needs a number you could measure and a weight.",
        "How can a bigger weight make one criterion decide the winner?",
        "Explain how the weighted total can favor the warmer design."
      ]
    },
    {
      id: "g7.winter.sci.w6.d1.q5",
      type: "short_answer",
      stem: "Explain why engineers ITERATE the design loop using test data, and describe how a trade-off might change the design between one iteration and the next. Use the words 'test' and 'trade-off.'",
      rubric: {
        level3: "Explains that testing produces data revealing which criteria are unmet, and describes a specific trade-off decision made in the next iteration to rebalance criteria within constraints.",
        level2: "Mentions testing and iterating but the trade-off between iterations is vague.",
        level1: "No clear link between test data and iterating, or no trade-off described."
      },
      exemplar: "When engineers test a prototype, the data shows which criteria fell short — maybe the shelter was warm enough but too heavy. In the next iteration they make a trade-off, swapping some insulation for lighter material, accepting slightly less warmth to meet the weight constraint. Iterating with test data lets them rebalance the trade-off until the weighted criteria are met.",
      hintLadder: [
        "What does test data reveal about your criteria?",
        "When you fix one criterion, what often happens to another?",
        "Link the test data to a trade-off decision in the next version."
      ]
    }
  ],
  reflectionPrompt: "Think of a winter tool you use — a scraper, a sled, a heated glove. Name two criteria you'd weigh against each other in a redesign, and say which one you'd weight more heavily and why.",
  misconceptionBank: [
    {
      id: "ignores-trade-offs",
      label: "Ignores trade-offs — assumes a design can maximize everything at once",
      description: "Believes the best design wins every criterion, missing that improving one often worsens another.",
      coachMove: "Ask 'what did this improvement cost you elsewhere?' Have them name the criterion that got worse, then decide if the trade is worth it given the weights."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Impossible Perfect Sled",
      prompt:
        "An inventor promises a rescue sled that is the fastest, the warmest, the lightest, the cheapest, AND the strongest — all at once, better than every other sled on every measure. Why should an engineer be suspicious of that claim? Name at least two criteria that usually fight against each other.",
      answer:
        "Real designs involve trade-offs, so winning EVERY criterion at once is almost impossible. Lighter usually means less strong or less insulated; cheaper usually means lower-quality materials; more insulation usually means more weight. A design that claims to beat everything on everything is ignoring the trade-offs every real engineer has to balance.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Decision-Matrix Design Duel",
      challenge:
        "Invent TWO competing solutions to one winter problem, then use a weighted decision matrix to pick the winner. You must define measurable criteria, assign weights, score both designs, total the weighted scores, and justify the result — including the trade-off you accepted.",
      materials: ["Paper & markers, OR a spreadsheet/slides app"],
      steps: [
        "Pick one winter problem and sketch TWO different designs that solve it.",
        "Write 3 measurable criteria and give each a weight (e.g., 1–3) based on importance.",
        "Score each design 1–5 on each criterion, multiply by the weights, and total each design.",
        "Announce the winner and write one sentence naming the trade-off you accepted to get there."
      ],
      deliverable: "A completed weighted decision matrix comparing two designs, with weighted totals, a declared winner, and a stated trade-off.",
      choiceBoard: [
        "Build the decision matrix as a labeled table with a weighted-total row.",
        "Write a 'design court' script where the two designs argue their scores before a judge.",
        "Make a poster comparing the two designs side by side with their weighted scores and the trade-off called out."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Design Trade-Off Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w6.d1.arena1",
          type: "numeric",
          stem: "Two heater designs are scored. Criteria and weights: warmth (weight 3), safety (weight 2), cost (weight 1). Design X scores warmth 4, safety 5, cost 2. Compute Design X's total WEIGHTED score.",
          answer: 24,
          tolerance: 0,
          unit: "points",
          hintLadder: [
            "Weighted total = (warmth × 3) + (safety × 2) + (cost × 1).",
            "Plug in: (4 × 3) + (5 × 2) + (2 × 1).",
            "12 + 10 + 2 = 24 points."
          ],
          explanation: "(4 × 3) + (5 × 2) + (2 × 1) = 12 + 10 + 2 = 24 points."
        },
        {
          id: "g7.winter.sci.w6.d1.arena2",
          type: "short_answer",
          stem: "Design Y scores warmth 5, safety 2, cost 5 with the same weights (warmth 3, safety 2, cost 1). Compute Y's weighted total, compare it to Design X's 24 from the last question, and explain what trade-off the matrix is capturing.",
          rubric: {
            level3: "Correctly computes Y = (5×3)+(2×2)+(5×1) = 24, notes the tie with X at 24, AND explains the trade-off (Y is warmer and cheaper but less safe; X is safer but pricier).",
            level2: "Computes Y's total correctly but the trade-off explanation is vague, OR explains the trade-off but with a small arithmetic slip.",
            level1: "Wrong total and no clear trade-off explanation."
          },
          exemplar: "Design Y = (5×3) + (2×2) + (5×1) = 15 + 4 + 5 = 24, which ties Design X at 24. The matrix captures a trade-off: Y is warmer and cheaper but scores low on safety, while X is very safe but costs more. Since they tie, the team would break the tie by re-checking which criterion matters most.",
          hintLadder: [
            "Compute (5×3) + (2×2) + (5×1) first.",
            "Compare that total to X's 24.",
            "Explain where Y gains and where it loses versus X."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Balance the Trade-Off",
      prompt:
        "Stand on one foot and stretch both arms wide like a scale. Tilt slowly left for 'more warmth,' then right for 'more lightness,' holding each tilt for 3 breaths without falling. Do 4 slow tilts each way, finding your steadiest balance point in the middle.",
      scienceTieIn: "Balancing your body between two extremes mirrors optimizing a design between competing criteria — both require constant small corrections to hold the best middle point, and the movement resets your focus for careful comparison.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a real choice you made where you couldn't have everything and had to trade one good thing for another. What criteria were you weighing, and looking back, did you weight the right one most heavily?",
      badge: { id: "g7-winter-trade-off-strategist", name: "Trade-Off Strategist", emoji: "⚖️" },
      estimatedMinutes: 7
    }
  }
};
