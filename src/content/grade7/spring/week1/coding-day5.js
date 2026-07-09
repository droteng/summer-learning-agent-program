// Grade 7 Coding/CS/AI — Spring Expedition, Week 1 (Spring Awakening), Day 5.
// Topic: sequencing & algorithms pitched up to Grade 7 — writing a growth
// experiment as a reusable FUNCTION with parameters and variables, then tracing
// and debugging it.

export const springG7CodingW1D5 = {
  id: "g7.spring.code.w1.d5",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Sequencing and algorithms for a growth experiment",
  topicTag: "sequencing-algorithms",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-14"],
  hook: "Writing the same steps over and over is what computers save you from. This year you package your growth algorithm into a reusable FUNCTION — feed it different starting heights and rates, and it predicts any plant. Then you'll trace it like a computer and hunt down a bug.",
  miniLesson: [
    "A FUNCTION is a named, reusable block of steps. It can take PARAMETERS (inputs) so the same function works for many cases: predictHeight(start, rate, days) reuses one algorithm for any plant.",
    "A VARIABLE stores a value that can change as the program runs — the STATE. Tracing means stepping through the code in order and updating each variable's value after every line, exactly as a computer does.",
    "DEBUGGING is finding and fixing a mistake by tracing. When the output is wrong, you follow the code line by line, compare the actual variable values to what you expected, and locate the step where they first diverge."
  ],
  workedExample: {
    prompt: "Trace this function. predictHeight(start, rate, days): set height = start; repeat 'days' times: height = height + rate; return height. What does predictHeight(4, 3, 3) return?",
    steps: [
      "Bind the parameters: start = 4, rate = 3, days = 3.",
      "Initialize the variable: height = start = 4.",
      "Loop pass 1 (day 1): height = 4 + 3 = 7.",
      "Loop pass 2 (day 2): height = 7 + 3 = 10.",
      "Loop pass 3 (day 3): height = 10 + 3 = 13. Return 13."
    ],
    answer: "13 cm"
  },
  items: [
    {
      id: "g7.spring.code.w1.d5.q1",
      type: "multiple_choice",
      stem: "What is the main advantage of writing your growth algorithm as a FUNCTION with parameters instead of retyping the steps each time?",
      choices: [
        "It makes the program run without any steps at all",
        "You can reuse the same logic for many different plants by passing in different inputs",
        "It removes the need for the plant to have light or water",
        "Functions can only ever be used one single time"
      ],
      answerIndex: 1,
      explanation: "A function packages logic once; its parameters let you reuse it with different inputs (start height, rate, days) instead of rewriting the steps for every plant.",
      hintLadder: [
        "Think about why you'd give a function inputs (parameters).",
        "Parameters let ONE function handle many different cases.",
        "You reuse the same logic by passing in different values."
      ]
    },
    {
      id: "g7.spring.code.w1.d5.q2",
      type: "multiple_choice",
      stem: "In predictHeight(start, rate, days), which are the PARAMETERS?",
      choices: [
        "start, rate, and days",
        "predictHeight only",
        "The word 'return'",
        "The number 13"
      ],
      answerIndex: 0,
      explanation: "Parameters are the named inputs a function receives: start, rate, and days. 'predictHeight' is the function's name, not a parameter.",
      hintLadder: [
        "Parameters are the inputs listed inside the parentheses.",
        "Which items are the values you pass IN to the function?",
        "start, rate, and days are the parameters."
      ],
      misconceptionsTargeted: ["params-vs-name"]
    },
    {
      id: "g7.spring.code.w1.d5.q3",
      type: "numeric",
      stem: "Trace this function. predictHeight(start, rate, days): height = start; repeat 'days' times: height = height + rate; return height. What does predictHeight(5, 4, 3) return, in cm?",
      answer: 17,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Start height = 5, and add rate = 4 once per day for 3 days.",
        "5 → 9 → 13 → 17.",
        "5 + 4 + 4 + 4 = 17 cm."
      ],
      explanation: "height starts at 5; three loop passes add 4 each: 5 + 4 = 9, 9 + 4 = 13, 13 + 4 = 17 cm."
    },
    {
      id: "g7.spring.code.w1.d5.q4",
      type: "numeric",
      stem: "Trace this function that DOUBLES growth midway. growPlant(start): h = start; h = h + 5; h = h * 2; h = h + 1; return h. What does growPlant(2) return, in cm?",
      answer: 15,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Run the lines strictly in order, updating h each time.",
        "h = 2 + 5 = 7, then h = 7 * 2 = 14.",
        "h = 14 + 1 = 15 cm."
      ],
      explanation: "h = 2; h = 2 + 5 = 7; h = 7 * 2 = 14; h = 14 + 1 = 15. Order matters — doubling before the +1 gives 15, not 16."
    },
    {
      id: "g7.spring.code.w1.d5.q5",
      type: "short_answer",
      stem: "A classmate's function should add the daily rate each day but returns a plant that never grows. The code reads: growPlant(start, rate, days): height = start; repeat 'days' times: height = start + rate; return height. Identify the bug and rewrite the buggy line correctly.",
      rubric: {
        level3: "Identifies that the loop line uses 'start' instead of 'height' (so it never accumulates and just keeps overwriting), AND rewrites it as height = height + rate.",
        level2: "Notices growth doesn't accumulate but the fix is incomplete or slightly off.",
        level1: "Doesn't locate the bug or gives no valid corrected line."
      },
      exemplar: "The bug is in the loop: 'height = start + rate' resets from start every pass instead of building on the running total, so height never accumulates past start + rate. It should be 'height = height + rate' so each day adds to the current height.",
      hintLadder: [
        "Trace it: after each pass, what value does height hold?",
        "The line reuses 'start' every time instead of the running 'height'.",
        "Change it to height = height + rate so growth accumulates."
      ]
    }
  ],
  reflectionPrompt: "Think of a task you repeat with small changes each time (packing a lunch, a warm-up routine). If you wrote it as a function, what would its PARAMETERS be — the parts that change each time?",
  misconceptionBank: [
    {
      id: "order-doesnt-matter",
      label: "Thinks step (and line) order doesn't matter",
      description: "Believes lines in a function can run in any order and still give the same result.",
      coachMove: "Have the student trace the same lines in two orders (e.g., double-then-add vs. add-then-double) and compare the final variable value so they SEE the outputs differ."
    },
    {
      id: "params-vs-name",
      label: "Confuses a function's name with its parameters",
      description: "Treats the function name as an input, or doesn't recognize the parenthesized inputs as the parameters.",
      coachMove: "Point to the parentheses: the name is the label, and only the values inside the parentheses are the parameters the function receives."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Function",
      prompt:
        "A function starts a sprout: grow(start): h = start; h = h + 3; h = h * 2; return h. What does grow(4) return? Trace it line by line before you peek!",
      answer:
        "h = 4, then h = 4 + 3 = 7, then h = 7 * 2 = 14. It returns 14. Tracing means updating the variable after every line, exactly like a computer running your function.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Reusable Growth Function",
      challenge:
        "Design a function that predicts a spring plant's height, then TEST it by tracing it with a table for several inputs to prove it's reusable.",
      materials: ["Paper & pencil, OR a device to type on"],
      steps: [
        "Write a function predictHeight(start, rate, days) in numbered steps or simple pseudocode, using a loop that adds the rate each day.",
        "Pick three different sets of inputs (e.g., (0, 2, 5), (3, 4, 4), (5, 1, 6)).",
        "Trace each call in a table with columns Day and Height, updating height each pass.",
        "Write the returned height for each set of inputs and confirm the same function handled all three."
      ],
      deliverable: "A written function plus a trace table showing at least three different input sets and their returned heights.",
      choiceBoard: [
        "Write the function and fill in trace tables for three inputs.",
        "Draw a flowchart of the function showing the loop and the return.",
        "Draw a line graph of height vs. day for one of your traced calls."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Function Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.code.w1.d5.arena1",
          type: "numeric",
          stem: "Trace this function carefully. mystery(a, b): x = a; x = x + b; x = x * 3; x = x - 2; return x. What does mystery(2, 4) return?",
          answer: 16,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Bind a = 2, b = 4, then run each line in order.",
            "x = 2 + 4 = 6, then x = 6 * 3 = 18.",
            "x = 18 - 2 = 16."
          ],
          explanation: "x = 2; x = 2 + 4 = 6; x = 6 * 3 = 18; x = 18 - 2 = 16. Following the lines in order gives 16."
        },
        {
          id: "g7.spring.code.w1.d5.arena2",
          type: "short_answer",
          stem: "This function should return a plant's height after 'days' of growth but always returns just the starting height. growPlant(start, rate, days): height = start; repeat 'days' times: height + rate; return height. Explain the bug and rewrite the broken line.",
          rubric: {
            level3: "Identifies that 'height + rate' computes a value but never STORES it back into height (no assignment), so height never changes, AND rewrites the line as height = height + rate.",
            level2: "Notices height doesn't change but the explanation or fix is incomplete.",
            level1: "Doesn't locate the missing assignment or gives no valid fix."
          },
          exemplar: "The line 'height + rate' calculates a new value but throws it away because it isn't assigned to anything, so height stays equal to start. It should be 'height = height + rate' so the result is stored back into height each pass.",
          hintLadder: [
            "Trace it: does 'height' ever get a new value assigned?",
            "'height + rate' computes but doesn't save the result.",
            "Add the assignment: height = height + rate."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Function-Call Sequence",
      prompt:
        "Run a 'function' with your body, in order: Step 1 stomp twice, Step 2 clap three times, Step 3 reach up and grow tall, Step 4 spin once, then 'return' by standing still. Now 'call it again' with a twist — double the claps. Perform both calls in exact order, no skipping!",
      scienceTieIn: "Repeating an ordered sequence with a small change is exactly what a reusable function does — and the burst of movement sends fresh oxygen to your brain to sharpen focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Functions let you reuse one set of steps for many inputs, and debugging means tracing until you find where things go wrong. What is one everyday routine you could write as a function with parameters — and what bug might sneak into it?",
      badge: { id: "g7-spring-function-sprout", name: "Function Sprout", emoji: "🌿" },
      estimatedMinutes: 7
    }
  }
};
