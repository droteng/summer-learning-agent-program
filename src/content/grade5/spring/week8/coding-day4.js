// Grade 5 Coding/CS/AI — Spring Expedition, Week 8 (Spring Showcase), Day 4.
// Grade 5 counterpart of g6.spring.code.w8.d4. Same topic (build & demo your
// growth tool: assemble, trace, and debug a small program) pitched down to
// Grade 5: everyday pseudocode, whole-number traces with mostly addition, and
// step-by-step vocab support. Capstone/celebratory tone — the last week.

export const springG5CodingW8D4 = {
  id: "g5.spring.code.w8.d4",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build & demo your growth tool",
  topicTag: "assemble-trace-debug",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-15"],
  hook: "Your capstone deserves a working tool! Today you build a small program that models a plant growing, trace it step by step to be sure it's right, and hunt down a sneaky bug — the very skills that make a demo shine.",
  miniLesson: [
    "BUILD: a program is made of parts in order — first SET UP a variable, then REPEAT the rule with a loop, then SHOW the result.",
    "TRACE: to check a program, run it by hand — write down the variable's value after every step, exactly like the computer would.",
    "DEBUG: when the answer is wrong, trace to find the FIRST step where the value goes wrong. That line — not the last line — usually hides the bug."
  ],
  workedExample: {
    prompt: "Trace: start height = 2. Loop 3 times: height = height + 3. What is the final height?",
    steps: [
      "Start: height = 2.",
      "Loop 1: height = 2 + 3 = 5.",
      "Loop 2: height = 5 + 3 = 8.",
      "Loop 3: height = 8 + 3 = 11. Final height = 11."
    ],
    answer: "11"
  },
  items: [
    {
      id: "g5.spring.code.w8.d4.q1",
      type: "numeric",
      stem: "A plant tool starts at height = 5. It loops 4 times, and each loop does height = height + 2. What is the final height?",
      answer: 13,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add 2 one time: 5 → 7.",
        "Keep going: 7 → 9 → 11.",
        "Four +2 steps from 5: 5, 7, 9, 11, 13."
      ],
      explanation: "5 → 7 → 9 → 11 → 13 after four loops of +2."
    },
    {
      id: "g5.spring.code.w8.d4.q2",
      type: "numeric",
      stem: "Trace this: height = 3. Loop 4 times: height = height + 5. What is the final height?",
      answer: 23,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add 5 each loop, starting from 3.",
        "Loop 1: 3 + 5 = 8. Loop 2: 8 + 5 = 13.",
        "Loop 3: 13 + 5 = 18. Now do Loop 4 the same way."
      ],
      explanation: "3 → 8 → 13 → 18 → 23 after four loops of +5. Final = 23 cm."
    },
    {
      id: "g5.spring.code.w8.d4.q3",
      type: "multiple_choice",
      stem: "Your growth tool should ADD 4 each day but it prints numbers going DOWN. Which line is most likely the BUG?",
      choices: [
        "The update line — it probably says height = height − 4 instead of + 4",
        "The line that sets up the starting height",
        "The line that prints the result",
        "There is no bug; going down is fine"
      ],
      answerIndex: 0,
      explanation: "If the numbers shrink when they should grow, the update rule has the wrong sign — a minus where a plus belongs.",
      hintLadder: [
        "Which line actually CHANGES the height each day?",
        "Going down means it is subtracting, not adding.",
        "The update line has − instead of +."
      ],
      misconceptionsTargeted: ["bug-is-last-line"]
    },
    {
      id: "g5.spring.code.w8.d4.q4",
      type: "multiple_choice",
      stem: "Why is TRACING a program by hand helpful before you demo it?",
      choices: [
        "It makes the program run faster",
        "It only helps for very long programs",
        "It changes the code by itself",
        "It lets you predict each value and catch a wrong answer before your audience sees it"
      ],
      answerIndex: 3,
      explanation: "Tracing lets you predict the exact answer step by step, so you spot and fix a wrong value before the demo.",
      hintLadder: [
        "What do you learn by writing each value down?",
        "You can compare your guess to what the program really does.",
        "It catches mistakes before the audience does."
      ]
    },
    {
      id: "g5.spring.code.w8.d4.q5",
      type: "short_answer",
      stem: "Describe the three parts of your growth tool in order (set up, the repeated rule, and show the result), and name ONE way you would test that it works.",
      rubric: {
        level3: "Names all three parts in order (set up a variable, loop/repeat the rule, show the result) AND gives one clear test (like trace by hand and compare, or check a small case you already know).",
        level2: "Names the parts but the order is unclear, or the test is vague.",
        level1: "Misses a part or gives no test."
      },
      exemplar: "First I set height = 0 (set up). Then I loop 5 times adding 2 each loop (the repeated rule). Then I print the final height (show result). I would test it by tracing by hand: 0, 2, 4, 6, 8, 10 — and check the program prints 10.",
      hintLadder: [
        "What has to happen FIRST — before the loop?",
        "What does the loop repeat, and what comes after it?",
        "How could you check the answer is right?"
      ]
    }
  ],
  reflectionPrompt: "Debugging is really just problem-solving. What is one problem you fixed this year — in code or in life — by tracing back to find where it first went wrong?",
  misconceptionBank: [
    {
      id: "bug-is-last-line",
      label: "Assumes the bug is on the last line",
      description: "Looks only at the final line instead of tracing to the FIRST step where a value goes wrong.",
      coachMove: "Trace from the top and mark the earliest step where your value does not match — the bug is usually there, not at the end."
    },
    {
      id: "loop-runs-once",
      label: "Thinks a loop runs only one time",
      description: "Applies the rule a single time instead of once for every loop the program repeats.",
      coachMove: "Count the loops out loud and apply the rule once per loop — a loop of 4 means the rule happens 4 times."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Sprout",
      prompt:
        "A tool sets height = 1, then loops 3 times doing height = height + 2. Trace it by hand: what is the final height? No peeking until you have written each step!",
      answer:
        "Loop 1: 1 + 2 = 3. Loop 2: 3 + 2 = 5. Loop 3: 5 + 2 = 7. Final height = 7. Adding 2 three times from 1 gives 7.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build Your Growth Tool",
      challenge:
        "On paper (or in any block-coding app), build a small growth tool: set a starting value, write a loop that repeats your growth rule, and show the result. Then trace it for 4 steps to prove it works.",
      steps: [
        "Write the SET UP line: your starting value (like height = 0).",
        "Write the LOOP with your growth rule inside (like repeat 4 times: height = height + 3).",
        "Write the SHOW line that prints the final result.",
        "Make a trace table and fill in the value after each loop to prove it is correct."
      ],
      deliverable: "A 3-part growth-tool program (set up, loop, show) plus a trace table proving its answer.",
      choiceBoard: [
        "Write the pseudocode and a hand-trace table.",
        "Build it in a block-coding app and screenshot the result.",
        "Draw a flowchart of the tool with an arrow for the loop."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Debug Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.code.w8.d4.arena1",
          type: "numeric",
          stem: "Trace: height = 2. Loop runs 4 times; each loop does height = height + 3. What is the final height?",
          answer: 14,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Add 3 each loop, starting from 2.",
            "Loop 1: 2 + 3 = 5. Loop 2: 5 + 3 = 8.",
            "Loop 3: 8 + 3 = 11. Loop 4: 11 + 3 = 14."
          ],
          explanation: "2 → 5 → 8 → 11 → 14 after four loops of +3. Final = 14 cm."
        },
        {
          id: "g5.spring.code.w8.d4.arena2",
          type: "short_answer",
          stem: "A tool should GROW a plant but the height stays exactly the same every loop. Explain how you would find the bug by tracing, and name a likely cause.",
          rubric: {
            level3: "Describes tracing each loop to find the first unchanged step AND names a fair cause (like the update line adds 0, or it changes a different variable, or it forgets to save the new value).",
            level2: "Mentions tracing OR a cause, but not both clearly.",
            level1: "No trace plan and no fair cause."
          },
          exemplar: "I would trace the height after each loop. If it never changes, the update line is not really updating — maybe it says height = height + 0, or it changes a different variable, or it does not save the new value back into height.",
          hintLadder: [
            "Trace and watch WHICH step fails to change the value.",
            "The update line is the suspect — what could make it add nothing?",
            "Adding 0, wrong variable, or not saving the result all freeze the value."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop It Out",
      prompt:
        "Run a body 'loop': do the same 3-move combo — reach up, twist left, twist right — and repeat the whole set 4 times, counting each loop out loud like a program counter. Then shake out and rest.",
      scienceTieIn: "Repeating a movement pattern builds muscle memory the same way a loop repeats code — and the burst of activity sends fresh oxygen to your brain for sharper focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You built and debugged a working tool this year! What is the most satisfying thing about finding a bug and watching your program finally do exactly what you meant?",
      badge: { id: "g5-spring-growth-tool-builder", name: "Growth Tool Builder", emoji: "🛠️" },
      estimatedMinutes: 7
    }
  }
};
