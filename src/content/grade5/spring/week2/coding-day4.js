// Grade 5 Coding/CS/AI — Spring Expedition, Week 2 (Plants & Growth), Day 4.
// Topic: model plant growth with a loop (height grows by a rate each day).
// Grade 5 counterpart of g6.spring.code.w2.d4: same topic, but simpler numbers
// and everyday/block-style pseudocode for ages 10–11.

export const springG5CodingW2D4 = {
  id: "g5.spring.code.w2.d4",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Model plant growth with a loop",
  topicTag: "growth-loop",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "Your seedling grows a little every day. Doing the same step over and over is exactly what a LOOP does in code. Today you follow a program that grows a pretend plant day by day.",
  miniLesson: [
    "A LOOP means 'do this again and again.' To grow a plant, we repeat one step: 'new height = height + rate' once for each day.",
    "A VARIABLE is a box that holds a number that can change. Here the box called 'height' starts at the seedling's size and gets bigger each time the loop runs.",
    "Running the loop 5 times is like 5 days: each time through, the plant's height goes up by the growth rate."
  ],
  workedExample: {
    prompt: "Follow this loop. Start: height = 2. Each day: height = height + 3. Run it 3 times (3 days). What is the final height?",
    steps: [
      "Day 1: height = 2 + 3 = 5.",
      "Day 2: height = 5 + 3 = 8.",
      "Day 3: height = 8 + 3 = 11.",
      "After 3 times through the loop, the height is 11."
    ],
    answer: "height = 11"
  },
  items: [
    {
      id: "g5.spring.code.w2.d4.q1",
      type: "numeric",
      stem: "Start: height = 3. Each loop: height = height + 4. After the loop runs 3 times, what is height?",
      answer: 15,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Loop 1: 3 + 4.",
        "Keep adding 4 each time: 7, then 11, then...",
        "3 → 7 → 11 → 15 after three loops."
      ],
      explanation: "3 + 4 = 7, + 4 = 11, + 4 = 15 after three loops."
    },
    {
      id: "g5.spring.code.w2.d4.q2",
      type: "multiple_choice",
      stem: "In the step 'height = height + rate', what does this line DO each time it runs?",
      choices: [
        "Sets height back to zero",
        "Takes the height now, adds the growth rate, and saves the new number in height",
        "Prints the word 'height'",
        "Doubles the height"
      ],
      answerIndex: 1,
      explanation: "It takes the current height, adds the rate, and stores the answer back in the height box — one day of growth.",
      hintLadder: [
        "Look at the right side first: height + rate.",
        "That answer gets put back into height.",
        "So height goes up by 'rate' each time."
      ],
      misconceptionsTargeted: ["assignment-is-equation"]
    },
    {
      id: "g5.spring.code.w2.d4.q3",
      type: "numeric",
      stem: "A loop runs once per day for 5 days. Start: height = 0. Each day: height = height + 2. What is the final height after 5 days?",
      answer: 10,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Each of the 5 days adds 2.",
        "Total added = 5 × 2.",
        "0 + 10 = 10 cm."
      ],
      explanation: "Five days of +2 from a start of 0 gives 5 × 2 = 10 cm."
    },
    {
      id: "g5.spring.code.w2.d4.q4",
      type: "multiple_choice",
      stem: "Why do programmers use a LOOP to grow a plant for 20 days instead of writing the grow step 20 times?",
      choices: [
        "Loops make the plant grow faster",
        "A loop repeats one step many times, so the code is shorter and easy to change",
        "Loops are the only way to add numbers",
        "There is no reason — writing it 20 times is better"
      ],
      answerIndex: 1,
      explanation: "A loop lets you repeat the same step as many times as you want with one short block, and you can change the number of days easily.",
      hintLadder: [
        "What does a loop let you avoid copying?",
        "Think about changing 20 days to 100 days.",
        "One reusable block beats 20 copied lines."
      ]
    },
    {
      id: "g5.spring.code.w2.d4.q5",
      type: "short_answer",
      stem: "In plain words, describe the steps a loop takes to grow a plant 2 cm every day for 4 days, starting at 1 cm. What is the final height?",
      rubric: {
        level3: "Describes a variable starting at 1, a repeat-4-times loop adding 2 each time, AND gives the correct final height of 9 cm.",
        level2: "Describes the loop idea but the final height is a little off or a step is missing.",
        level1: "No clear loop description or wrong reasoning."
      },
      exemplar: "Start a box called height at 1. Repeat 4 times: each time do height = height + 2. That gives 3, 5, 7, 9. After 4 days the height is 9 cm.",
      hintLadder: [
        "What number does height start at?",
        "What one step repeats each day?",
        "Run it 4 times: 1 → 3 → 5 → 7 → 9."
      ]
    }
  ],
  reflectionPrompt: "Real plants don't grow the exact same amount forever. What is one rule you could add to your loop to make the growth more like a real plant?",
  misconceptionBank: [
    {
      id: "assignment-is-equation",
      label: "Reads 'height = height + rate' as an impossible math equation",
      description: "Thinks the line is a math equation instead of an instruction to update the box.",
      coachMove: "Read it right to left: 'take height + rate, then put that new number back into height.' It's an action, not a claim that both sides are equal."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Follow the Loop",
      prompt:
        "A program starts with height = 2 and runs a loop 4 times. Each time it does height = height + 3. What is the final height? Follow it step by step before you peek!",
      answer:
        "2 → 5 → 8 → 11 → 14. After 4 loops, height = 14. Each time just adds 3 to whatever height already is.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write a Plant-Growth Program",
      challenge:
        "Write out (in words, blocks, or real code) a program that grows a plant. Use a starting height, a growth rate, and a loop that runs once per day. Then fill in a table to watch the plant get taller.",
      materials: ["Paper & pencil, OR a block-coding tool, OR any code editor"],
      steps: [
        "Pick a starting height and a growth rate for each day.",
        "Write the loop: repeat some number of days, each time height = height + rate.",
        "Make a table with two columns: Day and Height.",
        "Fill in the table by running your loop by hand for at least 5 days."
      ],
      deliverable: "A short growth program (words/blocks/code) plus a table showing the height rising each day.",
      choiceBoard: [
        "Write the program as numbered steps and fill in the table.",
        "Build it in a block-coding tool and take a screenshot.",
        "Draw a flowchart showing the loop and the 'height = height + rate' step."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.code.w2.d4.arena1",
          type: "numeric",
          stem: "Start: height = 2. A loop runs 5 times, and each time it does height = height + 3. What is the final height after 5 loops?",
          answer: 17,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Each of the 5 loops adds 3.",
            "Total added = 5 × 3 = 15.",
            "2 + 15 = 17 cm."
          ],
          explanation: "5 loops of +3 add 15 to the start: 2 + 15 = 17 cm."
        },
        {
          id: "g5.spring.code.w2.d4.arena2",
          type: "multiple_choice",
          stem: "Two loops grow a plant. Loop A: height = height + 2, run 5 times. Loop B: height = height + 5, run 2 times. Both start at 0. Which plant is taller after the loops finish?",
          choices: [
            "Loop A's plant (it grew to 10)",
            "Loop B's plant (it grew to 10)",
            "They tie at 10 cm each",
            "Loop A's plant, at 15 cm"
          ],
          answerIndex: 2,
          explanation: "Loop A: 2 × 5 = 10. Loop B: 5 × 2 = 10. Both reach 10 cm, so they tie.",
          hintLadder: [
            "For each loop, multiply the rate by the number of times it runs.",
            "Loop A: 2 × 5. Loop B: 5 × 2.",
            "Both equal 10 — it's a tie."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop the Grow-Step",
      prompt:
        "Be the loop! Each 'day,' rise one hand-width taller and clap once. Count out loud: Day 1 clap, Day 2 clap, up to Day 5, reaching a bit higher each clap. Then reset to a crouch and shake it out.",
      scienceTieIn: "Doing the same small step over and over adds up to a big result — the same reason a loop of tiny daily steps grows a whole plant, and daily exercise builds your fitness.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A loop turns one repeated step into a big change over time. What is a daily habit that, repeated like a 'loop,' could add up to something big for you?",
      badge: { id: "g5-spring-loop-grower", name: "Loop Grower", emoji: "🔁" },
      estimatedMinutes: 7
    }
  }
};
