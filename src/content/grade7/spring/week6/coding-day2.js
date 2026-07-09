// Grade 7 Coding/CS/AI — Spring Expedition, Week 6 (Code That Grows), Day 2.
// Topic: conditionals for spread/branching, raised to Grade 7 — compound
// conditions (AND/OR), chained IF/ELIF/ELSE ladders, and how the condition
// controls branching in a growth or spread simulation.

export const springG7CodingW6D2 = {
  id: "g7.spring.code.w6.d2",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 2,
  subject: "Coding/Computer Science/AI",
  topic: "Conditionals for spread and branching (compound & chained)",
  topicTag: "growth-conditionals",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-14"],
  hook: "A real plant grows only if it has enough water AND enough light — two conditions at once. At Grade 7 your simulations use compound conditions (AND/OR) and chained IF/ELIF/ELSE ladders, so growth branches in more than two directions. Today you trace exactly which branch runs.",
  miniLesson: [
    "A COMPOUND condition joins tests: 'water >= 3 AND light >= 5' is true only if BOTH are true; 'water >= 3 OR light >= 5' is true if EITHER is true.",
    "A CHAINED conditional (IF / ELIF / ELSE) checks tests in order and runs the FIRST branch whose condition is true — then it skips the rest.",
    "In a growth simulation, the condition decides the branch: strong growth, weak growth, or none — the same input can take different paths depending on which test passes first."
  ],
  workedExample: {
    prompt: "Rule: IF water >= 3 AND light >= 4, THEN height = height + 5; ELSE height stays. A plant has height 10, water = 3, light = 2. What is its height after the rule runs?",
    steps: [
      "Check the compound condition: water >= 3? 3 >= 3 is TRUE.",
      "Check the second test: light >= 4? 2 >= 4 is FALSE.",
      "AND needs BOTH true; one is false, so the whole condition is FALSE.",
      "The ELSE runs: height stays 10."
    ],
    answer: "10"
  },
  items: [
    {
      id: "g7.spring.code.w6.d2.q1",
      type: "numeric",
      stem: "Rule: IF water >= 3 AND light >= 4, THEN height = height + 6. A plant has height 10, water = 5, light = 4. What is its height after the rule runs once?",
      answer: 16,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Check both tests: is 5 >= 3? Is 4 >= 4?",
        "Both are true, so the AND condition is true — run the THEN.",
        "10 + 6 = 16."
      ],
      explanation: "5 >= 3 is true AND 4 >= 4 is true, so both pass and the plant grows: 10 + 6 = 16 cm."
    },
    {
      id: "g7.spring.code.w6.d2.q2",
      type: "multiple_choice",
      stem: "Rule: IF water >= 3 OR light >= 5, THEN the plant grows; ELSE it stays. A plant has water = 1 and light = 6. What happens?",
      choices: [
        "It grows, because OR only needs ONE test true — light = 6 passes 'light >= 5'",
        "It stays the same, because water is below 3",
        "It grows twice because two tests exist",
        "The rule errors because water failed"
      ],
      answerIndex: 0,
      explanation: "OR is true if EITHER test passes. Water fails (1 < 3) but light passes (6 >= 5), so the condition is true and the plant grows.",
      hintLadder: [
        "OR needs only one test to be true.",
        "Water fails, but check light: is 6 >= 5?",
        "Light passes, so the OR condition is true — it grows."
      ],
      misconceptionsTargeted: ["and-or-confused"]
    },
    {
      id: "g7.spring.code.w6.d2.q3",
      type: "numeric",
      stem: "Chained rule each step: IF water >= 5 THEN height = height + 6; ELIF water >= 2 THEN height = height + 2; ELSE height stays. A plant starts at height 4. Day 1 water = 6, Day 2 water = 3, Day 3 water = 1. What is the height after all 3 days?",
      answer: 12,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Day 1: water 6 >= 5, take the first branch +6: 4 → 10.",
        "Day 2: water 3 fails >=5 but passes >=2, take ELIF +2: 10 → 12.",
        "Day 3: water 1 fails both, ELSE runs: stays 12."
      ],
      explanation: "Day 1 +6 (6>=5): 4→10. Day 2 +2 (3>=2, not >=5): 10→12. Day 3 ELSE (1<2): stays 12 cm."
    },
    {
      id: "g7.spring.code.w6.d2.q4",
      type: "multiple_choice",
      stem: "In a SPREAD simulation the rule is 'IF a square has 2 OR MORE infected neighbors, THEN it becomes infected next step.' A healthy square has exactly 1 infected neighbor. What happens?",
      choices: [
        "It becomes infected, because it has an infected neighbor",
        "It stays healthy, because the condition needs 2 or more and it has only 1",
        "It becomes infected on the step after next automatically",
        "Every square becomes infected at once"
      ],
      answerIndex: 1,
      explanation: "The threshold is '2 or more'. With only 1 infected neighbor the condition is false, so the square stays healthy this step.",
      hintLadder: [
        "What number of infected neighbors does the condition require?",
        "Is 1 'two or more'?",
        "1 fails the threshold, so the square stays healthy."
      ]
    },
    {
      id: "g7.spring.code.w6.d2.q5",
      type: "short_answer",
      stem: "Write a CHAINED IF/ELIF/ELSE rule (in words) for how fast a seed sprouts, using a compound condition somewhere. Say which branch runs for a warm, moist seed and why only ONE branch runs.",
      rubric: {
        level3: "Gives an IF/ELIF/ELSE with at least one compound (AND/OR) test AND correctly states which single branch a warm, moist seed takes AND explains that a chain runs only the FIRST true branch.",
        level2: "Gives a chain and identifies a branch, but the compound test or the 'only-first-branch' reasoning is unclear.",
        level1: "No chain, no compound condition, or wrong branching logic."
      },
      exemplar: "IF temperature >= 20 AND moisture >= 5, THEN it sprouts fast; ELIF temperature >= 12, THEN it sprouts slowly; ELSE it stays dormant. A warm, moist seed passes the first compound test, so it takes the 'sprouts fast' branch — and because a chain runs only the FIRST true branch, the ELIF and ELSE are skipped.",
      hintLadder: [
        "Use AND or OR in your first test (e.g. warm AND moist).",
        "Add an ELIF for a weaker case and an ELSE for dormant.",
        "Explain that the chain stops at the first branch that is true."
      ]
    }
  ],
  reflectionPrompt: "Compound conditions let growth depend on several things at once. What is a real situation where something happens only if TWO conditions are both true?",
  misconceptionBank: [
    {
      id: "and-or-confused",
      label: "Confuses AND with OR",
      description: "Treats OR like AND (needing both true) or AND like OR (needing only one), so compound conditions are evaluated wrong.",
      coachMove: "Say it aloud as 'both' for AND and 'either' for OR, then test a case where exactly one part is true."
    },
    {
      id: "chain-runs-many-branches",
      label: "Thinks a chain runs every true branch",
      description: "Believes an IF/ELIF/ELSE ladder can run more than one branch, instead of stopping at the first true test.",
      coachMove: "Walk the ladder top to bottom and stop the pencil at the first true test — show the rest are skipped."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Plant Grows Fastest?",
      prompt:
        "Chain: IF water >= 4 AND light >= 4 THEN grow +5; ELIF water >= 2 THEN grow +2; ELSE stay. Plant A: water 4, light 3. Plant B: water 4, light 5. Both start at 10. Work out both — which ends taller?",
      answer:
        "Plant A: 4>=4 AND 3>=4? The AND fails (light too low), but water 4 >= 2 passes the ELIF: +2 → 12. Plant B: 4>=4 AND 5>=4 both true: +5 → 15. Plant B is taller.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Threshold Spread Grid",
      challenge:
        "On a small grid (like 5×5), simulate spread using a COMPOUND or THRESHOLD condition. Mark one or two starting 'active' squares. Each step, apply a rule like 'IF a square has 2 or more active neighbors, THEN it becomes active,' and color the new squares.",
      materials: ["Grid paper or a hand-drawn grid, plus a pencil or markers"],
      steps: [
        "Draw a 5×5 grid and color one or two starting active squares.",
        "Write your spread condition with a threshold or AND/OR (e.g. '2+ active neighbors').",
        "Step 1: color every square whose condition is true.",
        "Repeat for 2–3 steps and compare how the threshold changes the spread shape."
      ],
      deliverable: "A grid showing the threshold spread after 2–3 steps, with the compound condition written beside it.",
      choiceBoard: [
        "Color the grid step-by-step to show the threshold spread.",
        "Write the IF/ELIF/ELSE rule as pseudocode and label each spread step.",
        "Run the SAME grid twice with two different thresholds and compare the patterns."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Conditional Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.code.w6.d2.arena1",
          type: "numeric",
          stem: "Chained rule each day: IF water >= 5 THEN height = height + 6; ELIF water >= 2 THEN height = height + 3; ELSE height stays. A plant starts at 5. Water is: Day 1 = 6, Day 2 = 2, Day 3 = 1, Day 4 = 5. What is the height after all 4 days? Trace each day.",
          answer: 20,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Day 1: 6 >= 5 true, +6: 5 → 11.",
            "Day 2: 2 fails >=5 but passes >=2, +3: 11 → 14. Day 3: 1 fails both, stays 14.",
            "Day 4: 5 >= 5 true, +6: 14 → 20."
          ],
          explanation: "Day 1 +6 (5→11), Day 2 +3 (11→14), Day 3 ELSE (stays 14), Day 4 +6 (14→20). Final = 20 cm."
        },
        {
          id: "g7.spring.code.w6.d2.arena2",
          type: "multiple_choice",
          stem: "Rule: 'IF water >= 5 OR fertilizer >= 3, THEN grow.' A plant has water = 4 and fertilizer = 3. Does it grow?",
          choices: [
            "No — water is below 5 so it cannot grow",
            "It grows twice because two tests are listed",
            "Yes — OR needs only one test true, and fertilizer 3 >= 3 passes",
            "Only if BOTH tests pass"
          ],
          answerIndex: 2,
          explanation: "OR is true if EITHER test passes. Water fails (4 < 5) but fertilizer passes (3 >= 3), so the OR condition is true and the plant grows.",
          hintLadder: [
            "OR needs only ONE test true.",
            "Water fails, but check fertilizer: is 3 >= 3?",
            "Fertilizer passes, so the OR is true — it grows."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: And/Or Freeze",
      prompt:
        "Play a compound body conditional: grow tall ONLY IF the caller says BOTH 'sun' AND 'rain'; if they say only one, freeze small. Have someone call 5 rounds mixing the words — your body runs the AND each time.",
      scienceTieIn: "Waiting for BOTH signals before you move trains your brain to evaluate compound conditions, and the movement pumps oxygen to help you focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You used AND, OR, and chained branches to decide when things grow or spread. Describe one real decision today that needed TWO conditions to both be true.",
      badge: { id: "g7-spring-branch-master", name: "Branch Master", emoji: "🌦️" },
      estimatedMinutes: 7
    }
  }
};
