// Grade 5 Coding/CS/AI — Spring Expedition, Week 6 (Code That Grows), Day 1.
// Topic: using loops to grow a value — repeat one rule and track the value.
// Grade 5 depth: block-style "REPEAT" loops, small numbers, simple adding/doubling.

export const springG5CodingW6D1 = {
  id: "g5.spring.code.w6.d1",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 1,
  subject: "Coding/Computer Science/AI",
  topic: "Loops for growth simulation",
  topicTag: "growth-loops",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "A tiny seed does not stay tiny. In code, you write ONE rule and let a loop repeat it over and over. Today YOU become the computer and trace how a number grows, step by step.",
  miniLesson: [
    "A loop repeats the same instruction many times. Each repeat is one 'step' — here, one day of growth.",
    "To grow a number, you change a value each step: 'add 3' makes it climb by 3 every day; 'double it' means times 2 every day.",
    "You TRACK the growth by writing the value after each step. That builds a little table so you can watch the number rise."
  ],
  workedExample: {
    prompt: "A vine starts at 5. Each day the loop says 'add 4'. What is the height after 3 days?",
    steps: [
      "Day 1: 5 + 4 = 9.",
      "Day 2: 9 + 4 = 13.",
      "Day 3: 13 + 4 = 17.",
      "After 3 loop steps the vine is 17 tall."
    ],
    answer: "17"
  },
  items: [
    {
      id: "g5.spring.code.w6.d1.q1",
      type: "numeric",
      stem: "A plant starts at 2. The loop says 'add 5', and it repeats 3 times. What is the final height?",
      answer: 17,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add 5 once each step, starting from 2.",
        "2 → 7 → 12 → 17.",
        "Three +5 steps from 2 gives 2 + 15 = 17."
      ],
      explanation: "Starting at 2, three loops of +5: 2 → 7 → 12 → 17 cm."
    },
    {
      id: "g5.spring.code.w6.d1.q2",
      type: "numeric",
      stem: "A bug count starts at 1. The loop says 'double it' (times 2), and it repeats 3 times. What is the count after 3 steps?",
      answer: 8,
      tolerance: 0,
      unit: "bugs",
      hintLadder: [
        "Double the number each step, starting at 1.",
        "1 → 2 → 4 → 8.",
        "Three doublings of 1 gives 8."
      ],
      explanation: "Doubling three times: 1 → 2 → 4 → 8 bugs."
    },
    {
      id: "g5.spring.code.w6.d1.q3",
      type: "multiple_choice",
      stem: "The loop is 'REPEAT each day: add 3 to the height.' What does the height do as the loop runs?",
      choices: [
        "It stays the same every step",
        "It keeps its new value and grows a little more each step",
        "It goes back to 0 each step",
        "It only changes on the last step"
      ],
      answerIndex: 1,
      explanation: "The value keeps (remembers) its new number, so each loop step builds on the step before it.",
      hintLadder: [
        "What happens to the height after one step of the loop?",
        "Does the next step start from the new value or the old one?",
        "The value carries its new number forward."
      ],
      misconceptionsTargeted: ["variable-resets-each-loop"]
    },
    {
      id: "g5.spring.code.w6.d1.q4",
      type: "multiple_choice",
      stem: "Why do coders use a LOOP to grow a number instead of writing the rule out 50 times?",
      choices: [
        "Loops make the number grow faster",
        "A loop repeats one rule for you, so you write it once and run it many times",
        "Loops erase the value",
        "You cannot grow a number without copying the rule 50 times"
      ],
      answerIndex: 1,
      explanation: "A loop lets you write the rule ONCE and repeat it as many steps as you want — that is the whole point of a loop.",
      hintLadder: [
        "What is the job of a loop?",
        "How many times do you write the rule inside a loop?",
        "Write once, repeat many times."
      ]
    },
    {
      id: "g5.spring.code.w6.d1.q5",
      type: "short_answer",
      stem: "Describe a loop (in words) that grows a coin jar by 3 coins every week. Say what the jar starts at and what the loop does each step.",
      rubric: {
        level3: "Names a starting value AND states a rule that adds 3 each step (like 'add 3 coins') AND says the loop repeats it each week.",
        level2: "Gives a starting value and a growth idea, but the rule or the repeating part is unclear.",
        level1: "No clear starting value or no repeating growth rule."
      },
      exemplar: "The jar starts at 0 coins. Each week the loop says 'add 3 coins', so after week 1 it is 3, week 2 it is 6, week 3 it is 9. The loop repeats the same +3 rule every week.",
      hintLadder: [
        "What does the jar start at?",
        "What one rule adds 3 each step?",
        "Say that the loop repeats that rule every week."
      ]
    }
  ],
  reflectionPrompt: "A loop can add the same amount OR double the number each step. Which kind do you think grows faster after many steps, and why?",
  misconceptionBank: [
    {
      id: "variable-resets-each-loop",
      label: "Thinks the value resets each loop step",
      description: "Believes the growing number starts over each time instead of carrying its new value forward.",
      coachMove: "Trace two steps out loud, writing the value after each — show that step 2 begins from step 1's answer."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Grow the Seedling",
      prompt:
        "A seedling starts at 3. The loop says 'add 6', and it repeats twice. Trace it in your head — how tall is it after both steps? Guess before you check!",
      answer:
        "Step 1: 3 + 6 = 9. Step 2: 9 + 6 = 15. The seedling is 15 tall. Each step builds on the last!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Growth Tracker",
      challenge:
        "Design a growth loop on paper for something that grows (a sunflower, a puppy, a coral). Pick a starting number and a rule for each step, then run your loop for 5 steps and write down every value in a table.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Choose a growing thing and its starting number.",
        "Write ONE rule (add the same amount, or double) for each step.",
        "Make a table with columns: Step, Value.",
        "Run your loop for 5 steps and fill in the value after each step."
      ],
      deliverable: "A labeled growth-tracker table showing the value after each of 5 loop steps.",
      choiceBoard: [
        "Fill in the 5-step growth table with your rule.",
        "Draw a bar graph of your value across the 5 steps.",
        "Write your loop in words: the starting line plus a REPEAT loop with your rule inside."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.code.w6.d1.arena1",
          type: "numeric",
          stem: "A pond of algae starts at 3. The loop says 'double it', and it repeats 3 times. What is the algae count after 3 steps? Trace each doubling.",
          answer: 24,
          tolerance: 0,
          unit: "patches",
          hintLadder: [
            "Double the number each step, starting from 3.",
            "Step 1: 3 × 2 = 6. Step 2: 6 × 2 = 12.",
            "Step 3: 12 × 2 = 24."
          ],
          explanation: "Doubling from 3 three times: 3 → 6 → 12 → 24 patches."
        },
        {
          id: "g5.spring.code.w6.d1.arena2",
          type: "numeric",
          stem: "A loop repeats 4 times. Each step: 'add 7'. The height starts at 10. What is the final height after all 4 steps?",
          answer: 38,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Four steps of +7 means adding 7 four times.",
            "4 × 7 = 28 added to the start.",
            "10 + 28 = 38."
          ],
          explanation: "Four +7 steps add 28: 10 + 28 = 38 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop-and-Grow",
      prompt:
        "Start crouched like a seed. Each 'loop step', rise a little taller and stretch your arms wider — do 5 growth steps until you are stretched fully tall. Then shrink back to a seed and repeat once more.",
      scienceTieIn: "Repeating a movement in steps is just like a loop repeating a rule — and the stretch sends fresh oxygen to your brain for the next challenge.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You wrote one rule and let a loop grow it many times. What is one real thing in your life that grows a little each day, and what would its loop rule be?",
      badge: { id: "g5-spring-growth-looper", name: "Growth Looper", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
