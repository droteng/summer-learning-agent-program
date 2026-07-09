// Grade 6 Coding/CS/AI — Spring Expedition, Week 8 (Spring Showcase), Day 4.
// Topic: build & demo your growth tool — assemble, trace, and debug a small
// program for the capstone.

export const springG6CodingW8D4 = {
  id: "g6.spring.code.w8.d4",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build & demo your growth tool",
  topicTag: "assemble-trace-debug",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-17"],
  hook: "Your capstone deserves a working tool. Today you assemble a small program that models growth, trace it line by line to know it's right, and hunt down a bug — the skills that make a demo shine.",
  miniLesson: [
    "ASSEMBLE: a program is built from parts in order — set up variables, then loop or repeat the rule, then show the result.",
    "TRACE: to check a program, run it by hand — write down each variable's value after every step, exactly as the computer would.",
    "DEBUG: when the output is wrong, trace to find the FIRST step where the value goes wrong. That line — not the final line — usually holds the bug."
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
      id: "g6.spring.code.w8.d4.q1",
      type: "numeric",
      stem: "A plant tool starts at height = 5. It loops 4 times, and each loop does height = height + 2. What is the final height?",
      answer: 13,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add 2 once: 5 → 7.",
        "Keep going: 7 → 9 → 11.",
        "Four +2 steps from 5: 5, 7, 9, 11, 13."
      ],
      explanation: "5 → 7 → 9 → 11 → 13 after four loops of +2."
    },
    {
      id: "g6.spring.code.w8.d4.q2",
      type: "numeric",
      stem: "Trace this: height = 4. Loop 3 times: FIRST height = height + 1, THEN height = height × 2. What is the final height?",
      answer: 46,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Do BOTH steps each loop, in order (+1 then ×2).",
        "Loop 1: (4 + 1) = 5, then 5 × 2 = 10.",
        "Loop 2: (10 + 1) = 11, then 11 × 2 = 22. Now do Loop 3 the same way."
      ],
      explanation: "Loop 1: 4+1=5, 5×2=10. Loop 2: 10+1=11, 11×2=22. Loop 3: 22+1=23, 23×2=46. Final = 46 cm."
    },
    {
      id: "g6.spring.code.w8.d4.q3",
      type: "multiple_choice",
      stem: "Your growth tool should ADD 3 each day but prints numbers going DOWN. Which line is most likely the BUG?",
      choices: [
        "The line that prints the result",
        "The line that sets up the starting height",
        "The update line — it probably says height = height − 3 instead of + 3",
        "There is no bug; going down is fine"
      ],
      answerIndex: 2,
      explanation: "If numbers shrink when they should grow, the update rule has the wrong operation — a minus where a plus belongs.",
      hintLadder: [
        "Which line actually CHANGES the height each day?",
        "Going down means it's subtracting, not adding.",
        "The update line has − instead of +."
      ],
      misconceptionsTargeted: ["bug-is-last-line"]
    },
    {
      id: "g6.spring.code.w8.d4.q4",
      type: "multiple_choice",
      stem: "Why is TRACING a program by hand useful before you demo it?",
      choices: [
        "It makes the program run faster",
        "It's only useful for very long programs",
        "It changes the code automatically",
        "It lets you predict each value and catch a wrong result before your audience sees it"
      ],
      answerIndex: 3,
      explanation: "Tracing lets you predict the exact output step by step, so you spot and fix wrong values before the demo.",
      hintLadder: [
        "What do you learn by writing each value down?",
        "You can compare your prediction to the real output.",
        "It catches mistakes before the audience does."
      ]
    },
    {
      id: "g6.spring.code.w8.d4.q5",
      type: "short_answer",
      stem: "Describe the three parts of your growth tool in order (setup, the repeated rule, and showing the result), and name ONE way you'd test it works.",
      rubric: {
        level3: "Names all three parts in order (setup a variable, loop/repeat the rule, output the result) AND gives one concrete test (e.g., trace by hand and compare, or check a known small case).",
        level2: "Names the parts but order is unclear, or the test is vague.",
        level1: "Misses parts or gives no test."
      },
      exemplar: "First I set height = 0 (setup). Then I loop 5 times adding 2 each loop (the repeated rule). Then I print the final height (show result). I'd test it by tracing by hand: 0, 2, 4, 6, 8, 10 — and check the program prints 10.",
      hintLadder: [
        "What has to happen FIRST — before the loop?",
        "What does the loop repeat, and what comes after it?",
        "How could you check the answer is right?"
      ]
    }
  ],
  reflectionPrompt: "Debugging is really problem-solving. What's one bug you fixed this year — in code or in life — by tracing back to find where it first went wrong?",
  misconceptionBank: [
    {
      id: "bug-is-last-line",
      label: "Assumes the bug is on the last line",
      description: "Looks only at the final output line instead of tracing to the FIRST step where a value goes wrong.",
      coachMove: "Trace from the top and mark the earliest step where your value doesn't match — the bug is usually there, not at the end."
    },
    {
      id: "ignores-step-order",
      label: "Ignores the order of steps inside a loop",
      description: "Applies operations in the wrong order (e.g., multiplies before adding when the code adds first).",
      coachMove: "Read the loop body top-to-bottom every iteration; do each operation in the exact written order."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Sprout",
      prompt:
        "A tool sets height = 1, then loops 3 times doing height = height × 2. Trace it by hand: what is the final height? No peeking until you've written each step!",
      answer:
        "Loop 1: 1 × 2 = 2. Loop 2: 2 × 2 = 4. Loop 3: 4 × 2 = 8. Final height = 8. Doubling three times from 1 gives 8.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build Your Growth Tool",
      challenge:
        "On paper (or in any block/coding app), assemble a small growth tool: set a starting value, write a loop that applies your growth rule, and show the result. Then trace it for 4 steps to prove it works.",
      steps: [
        "Write the SETUP line: your starting value (e.g., height = 0).",
        "Write the LOOP with your growth rule inside (e.g., repeat 4 times: height = height + 3).",
        "Write the OUTPUT line that shows the final result.",
        "Make a trace table and fill in the value after each loop to prove it's correct."
      ],
      deliverable: "A 3-part growth-tool program (setup, loop, output) plus a trace table proving its output.",
      choiceBoard: [
        "Write the pseudocode and a hand-trace table.",
        "Build it in a block-coding app and screenshot the result.",
        "Draw a flowchart of the tool with arrows for the loop."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Debug Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.code.w8.d4.arena1",
          type: "numeric",
          stem: "Trace: height = 3. Loop runs 3 times; each loop does height = height + 4, then height = height − 1. What is the final height?",
          answer: 12,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Each loop is +4 then −1, a net +3.",
            "Loop 1: (3 + 4) − 1 = 6. Loop 2: (6 + 4) − 1 = 9.",
            "Loop 3: (9 + 4) − 1 = 12."
          ],
          explanation: "Each loop adds a net +3. Loop 1: 3→6, Loop 2: 6→9, Loop 3: 9→12. Final = 12 cm."
        },
        {
          id: "g6.spring.code.w8.d4.arena2",
          type: "short_answer",
          stem: "A tool should GROW a plant but the height stays exactly the same every loop. Explain how you'd find the bug by tracing, and name a likely cause.",
          rubric: {
            level3: "Describes tracing each loop to find the first unchanged step AND names a plausible cause (e.g., the update line adds 0, or updates a different variable, or forgets to save the result).",
            level2: "Mentions tracing OR a cause, but not both clearly.",
            level1: "No trace strategy and no plausible cause."
          },
          exemplar: "I'd trace the height after each loop. If it never changes, the update line isn't really updating — maybe it says height = height + 0, or it changes a different variable, or it doesn't save the new value back into height.",
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
        "You built and debugged a working tool this year. What's the most satisfying thing about finding a bug and watching your program finally do exactly what you meant?",
      badge: { id: "spring-growth-tool-builder", name: "Growth Tool Builder", emoji: "🛠️" },
      estimatedMinutes: 7
    }
  }
};
