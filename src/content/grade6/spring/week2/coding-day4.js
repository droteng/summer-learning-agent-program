// Grade 6 Coding/CS/AI — Spring Expedition, Week 2 (Plants & Growth), Day 4.
// Topic: model plant growth with a loop (height increases by a rate each day).

export const springG6CodingW2D4 = {
  id: "g6.spring.code.w2.d4",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Model plant growth with a loop",
  topicTag: "growth-loop",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-10"],
  hook: "Your seedling adds a little height every day. That repeated step is exactly what a LOOP does in code. Today you trace a program that grows a virtual plant day by day.",
  miniLesson: [
    "A loop repeats a set of instructions. To model growth, we repeat one step: 'height = height + rate' once per day.",
    "A variable stores a value that can change. Here 'height' starts at the seedling's size and updates each time the loop runs.",
    "Running the loop N times models N days: each pass adds the growth rate to the current height."
  ],
  workedExample: {
    prompt: "Trace this loop. Start: height = 2. Rule each day: height = height + 3. Run it 3 times (3 days). What is the final height?",
    steps: [
      "Day 1: height = 2 + 3 = 5.",
      "Day 2: height = 5 + 3 = 8.",
      "Day 3: height = 8 + 3 = 11.",
      "After 3 loops the height is 11."
    ],
    answer: "height = 11"
  },
  items: [
    {
      id: "g6.spring.code.w2.d4.q1",
      type: "numeric",
      stem: "Start: height = 4. Each loop: height = height + 5. After running the loop 3 times, what is height?",
      answer: 19,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Loop 1: 4 + 5.",
        "Keep adding 5 each pass: 9, then 14, then...",
        "4 → 9 → 14 → 19 after three loops."
      ],
      explanation: "4 + 5 = 9, + 5 = 14, + 5 = 19 after three loops."
    },
    {
      id: "g6.spring.code.w2.d4.q2",
      type: "multiple_choice",
      stem: "In the code 'height = height + rate', what does this single line DO each time it runs?",
      choices: [
        "Sets height back to zero",
        "Adds the growth rate to the current height and stores the new value",
        "Prints the word 'height'",
        "Doubles the height"
      ],
      answerIndex: 1,
      explanation: "It takes the current height, adds the rate, and saves the result back into height — one day of growth.",
      hintLadder: [
        "Read the right side first: height + rate.",
        "That result gets stored back into height.",
        "So height grows by 'rate' each time."
      ],
      misconceptionsTargeted: ["assignment-is-equation"]
    },
    {
      id: "g6.spring.code.w2.d4.q3",
      type: "numeric",
      stem: "A loop runs once per day for 6 days. Start: height = 0. Each day: height = height + 2. What is the final height after 6 days?",
      answer: 12,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Each of the 6 days adds 2.",
        "Total added = 6 × 2.",
        "0 + 12 = 12 cm."
      ],
      explanation: "Six days of +2 from a start of 0 gives 6 × 2 = 12 cm."
    },
    {
      id: "g6.spring.code.w2.d4.q4",
      type: "multiple_choice",
      stem: "Why do programmers use a LOOP to model 20 days of plant growth instead of writing the growth step 20 times?",
      choices: [
        "Loops make the plant grow faster",
        "A loop repeats one instruction many times, so the code is shorter and easy to change",
        "Loops are the only way to add numbers",
        "There is no reason — writing it 20 times is better"
      ],
      answerIndex: 1,
      explanation: "A loop lets you repeat the same step any number of times with one short block, and you can change the day count easily.",
      hintLadder: [
        "What does a loop let you avoid copying?",
        "Think about changing 20 days to 100 days.",
        "One reusable block beats 20 copied lines."
      ]
    },
    {
      id: "g6.spring.code.w2.d4.q5",
      type: "short_answer",
      stem: "In plain words, describe the steps a loop takes to model a plant that grows 3 cm every day for 5 days, starting at 1 cm. What is the final height?",
      rubric: {
        level3: "Describes a variable starting at 1, a repeat-5-times loop adding 3 each pass, AND gives the correct final height of 16 cm.",
        level2: "Describes the loop idea but the final height is slightly off or a step is missing.",
        level1: "No clear loop description or wrong reasoning."
      },
      exemplar: "Start a variable height at 1. Repeat 5 times: each pass do height = height + 3. That gives 4, 7, 10, 13, 16. After 5 days the height is 16 cm.",
      hintLadder: [
        "What value does height start at?",
        "What single step repeats each day?",
        "Run it 5 times: 1 → 4 → 7 → 10 → 13 → 16."
      ]
    }
  ],
  reflectionPrompt: "Real plants don't grow at a perfectly steady rate forever. What's one rule you could add to your loop to make the growth more realistic?",
  misconceptionBank: [
    {
      id: "assignment-is-equation",
      label: "Reads 'height = height + rate' as an impossible equation",
      description: "Thinks the line is a math equation instead of an instruction to update the variable.",
      coachMove: "Read it right-to-left: 'take height + rate, then put that new value back into height.' It's an action, not a claim that both sides are equal."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Loop",
      prompt:
        "A program starts with height = 3 and runs a loop 4 times. Each time it does height = height + 4. What is the final height? Trace it step by step before you peek!",
      answer:
        "3 → 7 → 11 → 15 → 19. After 4 loops, height = 19. Each pass just adds 4 to whatever height already is.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write a Plant-Growth Program",
      challenge:
        "Write out (in words, blocks, or real code) a program that grows a plant. Use a starting height, a growth rate, and a loop that runs once per day. Then trace it in a table to see the plant get taller.",
      materials: ["Paper & pencil, OR a block-coding tool, OR any code editor"],
      steps: [
        "Choose a starting height and a daily growth rate.",
        "Write the loop: repeat N times, each time height = height + rate.",
        "Make a trace table with columns: Day, Height.",
        "Fill the table by running your loop by hand for at least 5 days."
      ],
      deliverable: "A short growth program (words/blocks/code) plus a trace table showing height rising each day.",
      choiceBoard: [
        "Write the program as numbered steps and fill the trace table.",
        "Build it in a block-coding tool and screenshot the output.",
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
          id: "g6.spring.code.w2.d4.arena1",
          type: "numeric",
          stem: "Start: height = 5. A loop runs 7 times, and each pass does height = height + 3. What is the final height after 7 loops?",
          answer: 26,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Each of the 7 loops adds 3.",
            "Total added = 7 × 3 = 21.",
            "5 + 21 = 26 cm."
          ],
          explanation: "7 loops of +3 add 21 to the start: 5 + 21 = 26 cm."
        },
        {
          id: "g6.spring.code.w2.d4.arena2",
          type: "multiple_choice",
          stem: "Two loops model the same plant. Loop A: height = height + 2, run 10 times. Loop B: height = height + 5, run 4 times. Both start at 0. Which plant is taller after the loops finish?",
          choices: [
            "Loop A's plant (it grew to 20)",
            "Loop B's plant (it grew to 20)",
            "They tie at 20 cm each",
            "Loop A's plant, at 25 cm"
          ],
          answerIndex: 2,
          explanation: "Loop A: 2 × 10 = 20. Loop B: 5 × 4 = 20. Both reach 20 cm, so they tie.",
          hintLadder: [
            "For each loop, multiply the rate by the number of runs.",
            "Loop A: 2 × 10. Loop B: 5 × 4.",
            "Both equal 20 — it's a tie."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop the Grow-Step",
      prompt:
        "Be the loop! Each 'day,' rise one hand-width taller and clap once. Count out loud: Day 1 clap, Day 2 clap, up to Day 5, reaching a bit higher each clap. Then reset to a crouch and shake out.",
      scienceTieIn: "Repeating the same small action builds up a big result — the same reason a loop of tiny daily steps grows a whole plant, and daily movement builds your fitness.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A loop turns one repeated step into a big change over time. What's a daily habit that, repeated in a 'loop,' could add up to something big for you?",
      badge: { id: "spring-growth-loop-coder", name: "Growth Loop Coder", emoji: "🔁" },
      estimatedMinutes: 7
    }
  }
};
