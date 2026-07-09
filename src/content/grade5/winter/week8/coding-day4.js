// Grade 5 Coding/CS/AI — Winter Expedition, Week 8 (Winter Showcase), Day 4.
// Grade 5 counterpart of g6.winter.code.w8.d4. Same topic (build & demo your
// tool — trace the logic and debug a small winter program) pitched down to
// Grade 5: everyday pseudocode, smaller loops, addition-based traces (no
// multiplication or negatives in the graded traces), more step-by-step help.

export const winterG5CodingW8D4 = {
  id: "g5.winter.code.w8.d4",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build and demo your tool — trace the logic and debug",
  topicTag: "build-and-debug",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-15", "CSTA.1B-AP-11"],
  hook: "For your capstone, a small program can make your winter idea come alive — a snow tracker, a temperature counter, a countdown to the showcase! Today you PUT the steps together, TRACE them one at a time, and DEBUG (fix) them so your program works when you demo it.",
  miniLesson: [
    "TRACING means walking through the steps one line at a time and writing down the value of each variable after every step — just like a computer would.",
    "A LOOP repeats its inside steps a set number of times. To trace a loop, do one full pass, update the variable, then repeat until the loop is done.",
    "A BUG is a mistake in the steps (like the wrong math or the wrong order). You find bugs by tracing and comparing what the code DOES to what you MEANT it to do."
  ],
  workedExample: {
    prompt: "Trace this: start snow = 0. Loop 3 times: snow = snow + 2. What is snow at the end?",
    steps: [
      "Start: snow = 0.",
      "Pass 1: snow = 0 + 2 = 2.",
      "Pass 2: snow = 2 + 2 = 4.",
      "Pass 3: snow = 4 + 2 = 6. Final snow = 6."
    ],
    answer: "snow = 6"
  },
  items: [
    {
      id: "g5.winter.code.w8.d4.q1",
      type: "numeric",
      stem: "A snow tracker starts with snowCount = 5. A loop runs 4 times, and each pass does: snowCount = snowCount + 3. What is snowCount at the end?",
      answer: 17,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Start at 5 and add 3 once: 5 → 8.",
        "Keep going: 8 → 11 → 14 → 17 across 4 passes.",
        "Four +3 steps from 5 = 5 + 12 = 17."
      ],
      explanation: "5 → 8 → 11 → 14 → 17 after four passes of +3."
    },
    {
      id: "g5.winter.code.w8.d4.q2",
      type: "multiple_choice",
      stem: "You WANT your program to DOUBLE the snow, but you wrote: snow = snow + 2. Starting at snow = 6, what does your code actually give, and is it a bug?",
      choices: [
        "It gives 12 (doubled) — no bug.",
        "It gives 8, because it ADDS 2 instead of doubling — that's the bug.",
        "It gives 3, because it divides.",
        "It crashes."
      ],
      answerIndex: 1,
      explanation: "snow + 2 with snow = 6 gives 8, not 12. To double, you needed snow + snow (which would be 12). Adding 2 instead of doubling is the bug.",
      hintLadder: [
        "Plug in: what is 6 + 2?",
        "Did that DOUBLE the 6, or just add 2?",
        "6 + 2 = 8, so it added instead of doubling — that's the bug."
      ],
      misconceptionsTargeted: ["add-vs-double-bug"]
    },
    {
      id: "g5.winter.code.w8.d4.q3",
      type: "numeric",
      stem: "Trace ONE pass of this code, starting with x = 10, in this exact order: first x = x + x, then x = x - 4. What is x after the pass?",
      answer: 16,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Do the first line: x = 10 + 10.",
        "That gives x = 20.",
        "Then the second line: x = 20 - 4 = 16."
      ],
      explanation: "First x = 10 + 10 = 20, then x = 20 - 4 = 16. Order matters!"
    },
    {
      id: "g5.winter.code.w8.d4.q4",
      type: "multiple_choice",
      stem: "Your countdown program should stop at 0, but it keeps going into negative numbers forever. What is the MOST likely fix?",
      choices: [
        "Add more colors to the screen.",
        "Delete the whole program and give up.",
        "Make the numbers bigger.",
        "Fix the loop's stopping rule so it stops when the counter reaches 0."
      ],
      answerIndex: 3,
      explanation: "A loop that never stops usually has a wrong or missing stopping rule. Fixing it to stop at 0 solves the endless countdown.",
      hintLadder: [
        "Why would a countdown NOT stop?",
        "Something must tell the loop when to end.",
        "Fix the stopping rule to end at 0."
      ]
    },
    {
      id: "g5.winter.code.w8.d4.q5",
      type: "short_answer",
      stem: "Describe the small program you'll demo at your showcase: what it does, one variable it uses, and one step of its logic. Then name one way you'd TEST it for bugs.",
      rubric: {
        level3: "Clearly says what the program does, names a variable that fits, describes one logic step, AND gives a real way to test it (like tracing with a known input).",
        level2: "Describes the program and a variable, but the test or the logic step is fuzzy.",
        level1: "Too fuzzy to picture, or missing the test idea."
      },
      exemplar: "My program counts snowy days. It uses a variable snowyDays that starts at 0 and adds 1 each time I enter a snowy day. To test it, I'd enter 3 snowy days and check that it shows 3, tracing each step.",
      hintLadder: [
        "What does your capstone program actually do?",
        "Name one variable and one step it runs.",
        "How would you check it works — trace it with a number you know."
      ]
    }
  ],
  reflectionPrompt: "Tracing code is like proofreading your own thinking. What bug (or almost-bug) did you catch today by tracing carefully, and how did you fix it?",
  misconceptionBank: [
    {
      id: "add-vs-double-bug",
      label: "Mixes up adding with doubling",
      description: "Writes x + 2 when the goal was to double the value (x + x), a very common logic bug.",
      coachMove: "Test with a real number: 'Did 6 become 12 (doubled) or 8 (added)? Which did you MEAN?'"
    },
    {
      id: "loop-order-ignored",
      label: "Ignores the order of steps in a loop",
      description: "Thinks the order of two lines inside a loop doesn't change the result.",
      coachMove: "Trace both orders with the same start value and compare — the results are usually different."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Snow Loop",
      prompt:
        "A program starts with flakes = 1. A loop runs 3 times, and each pass does: flakes = flakes + flakes. What is flakes at the end? Trace each pass before you peek!",
      answer:
        "Pass 1: 1 + 1 = 2. Pass 2: 2 + 2 = 4. Pass 3: 4 + 4 = 8. Final flakes = 8 — doubling adds up fast!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build & Trace Your Winter Tool",
      challenge:
        "Put together the small program you'll demo at the showcase (in blocks, code, or on paper). Then make a TRACE TABLE that walks through it with one example input and proves it gives the right answer.",
      steps: [
        "Pick your tool: a snow counter, a temperature tracker, or a showcase countdown.",
        "Write its steps in order, including any loop and its stopping rule.",
        "Make a trace table: a column for each variable, a row for each step.",
        "Run one example input through the table and check the final answer is what you meant."
      ],
      deliverable: "Your program plus a trace table proving it works for one example input.",
      choiceBoard: [
        "Build it in a block editor and screenshot the working run.",
        "Write the code or pseudocode plus a full trace table by hand.",
        "Draw a flowchart of the steps with the loop and stopping rule shown."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Debug Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.code.w8.d4.arena1",
          type: "numeric",
          stem: "Trace this: start count = 3. A loop runs 3 times, and each pass does: count = count + count. What is count at the end?",
          answer: 24,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "count = count + count means the value doubles each pass.",
            "Pass 1: 3 + 3 = 6. Pass 2: 6 + 6 = 12.",
            "Pass 3: 12 + 12 = 24."
          ],
          explanation: "Each pass doubles: 3 → 6 → 12 → 24 after three passes."
        },
        {
          id: "g5.winter.code.w8.d4.arena2",
          type: "short_answer",
          stem: "A classmate's snow counter is supposed to add 1 for each snowy day, but it always shows 0 no matter what. Name TWO possible bugs and how you'd test to find which one it is.",
          rubric: {
            level3: "Names two possible bugs (like the +1 step never runs; or the counter is reset to 0 each loop) AND describes a test (trace with a known number of days) to tell them apart.",
            level2: "Names two bugs but the test is fuzzy, or one bug plus a clear test.",
            level1: "Only one fuzzy idea and no test."
          },
          exemplar: "Bug 1: the line that adds 1 is outside the loop, so it never runs. Bug 2: the counter is set back to 0 inside the loop every pass. To test, I'd enter exactly 3 snowy days and trace the counter after each one — if it stays 0, I check whether the +1 runs and whether it gets reset.",
          hintLadder: [
            "Why might a counter never go up?",
            "Think: is the +1 running at all, or is it being reset each time?",
            "Trace with a number you know to see which bug it is."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop It Out",
      prompt:
        "Be a loop! Do this sequence 3 times (that's your loop): 2 jumping jacks, 1 arm stretch up, 1 deep breath. Count your passes out loud — pass 1, pass 2, pass 3 — then STOP, just like a loop hitting its stopping rule.",
      scienceTieIn: "Repeating a set movement a fixed number of times is exactly how a loop works — and the exercise sends oxygen to your brain to keep debugging sharp.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You built, traced, and debugged a real tool for your showcase! What did tracing teach you that just running the code did not? How will you demo it with confidence?",
      badge: { id: "g5-winter-debug-demo-master", name: "Debug & Demo Master", emoji: "🐛" },
      estimatedMinutes: 7
    }
  }
};
