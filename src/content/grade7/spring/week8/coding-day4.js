// Grade 7 Coding/CS/AI — Spring Expedition, Week 8 (Spring Showcase), Day 4.
// Topic: build & demo your growth tool — this Grade 7 version pitches ONE LEVEL
// UP from Grade 6: organize the tool into FUNCTIONS (reusable parameterized
// blocks), trace calls and nested/compound updates, and debug by isolating the
// faulty function. The engineering skills that make a capstone demo shine.

export const springG7CodingW8D4 = {
  id: "g7.spring.code.w8.d4",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build & demo your growth tool",
  topicTag: "functions-trace-debug",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-16"],
  hook: "Your capstone deserves a tool that's not just working, but well-built. Today you organize your growth model into FUNCTIONS you can reuse, trace calls and compound updates line by line to prove it's right, and debug by isolating the exact function that's off — the engineering that makes a demo undeniable.",
  miniLesson: [
    "FUNCTIONS are reusable, named blocks that take inputs (parameters) and return an output. Instead of repeating the growth rule, you write grow(h) once and CALL it whenever you need it — this makes the tool shorter, clearer, and easier to fix.",
    "TRACE calls carefully: when you call a function, substitute the argument for the parameter, run the body, and use the RETURNED value. Track variables outside and inside the function separately, and apply compound updates (like h * 2 - 1) in the exact written order.",
    "DEBUG by ISOLATION: when the output is wrong, test each function on a known input. The function whose returned value first disagrees with your hand trace is where the bug lives — you don't need to search the whole program, just the faulty block."
  ],
  workedExample: {
    prompt: "Trace: define grow(h) returns h + 2. Start height = 3. Call height = grow(height) three times. What is the final height?",
    steps: [
      "Start: height = 3.",
      "Call 1: grow(3) returns 3 + 2 = 5, so height = 5.",
      "Call 2: grow(5) returns 5 + 2 = 7, so height = 7.",
      "Call 3: grow(7) returns 7 + 2 = 9, so height = 9. Final height = 9."
    ],
    answer: "9"
  },
  items: [
    {
      id: "g7.spring.code.w8.d4.q1",
      type: "numeric",
      stem: "A growth tool starts at height = 6. It loops 4 times, and each loop does height = height × 2 − 1. What is the final height?",
      answer: 81,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Each loop is ×2 then −1, in that order.",
        "Loop 1: 6 × 2 − 1 = 11. Loop 2: 11 × 2 − 1 = 21.",
        "Loop 3: 21 × 2 − 1 = 41. Now do Loop 4 the same way."
      ],
      explanation: "Loop 1: 6×2−1=11. Loop 2: 11×2−1=21. Loop 3: 21×2−1=41. Loop 4: 41×2−1=81. Final = 81 cm."
    },
    {
      id: "g7.spring.code.w8.d4.q2",
      type: "numeric",
      stem: "Define a function grow(h) that returns h + 3. Start height = 4. Do: height = grow(height), then height = grow(height), then height = height × 2. What is the final height?",
      answer: 20,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Substitute the argument into grow(h) = h + 3 each time it's called.",
        "First call: grow(4) = 7. Second call: grow(7) = 10.",
        "Then the last line doubles it: 10 × 2 = 20."
      ],
      explanation: "grow(4) returns 7; grow(7) returns 10; then height × 2 = 10 × 2 = 20 cm."
    },
    {
      id: "g7.spring.code.w8.d4.q3",
      type: "multiple_choice",
      stem: "Your tool calls grow(h) in three places, and ALL three give a wrong result. What is the smartest first debugging move?",
      choices: [
        "Rewrite the entire program from scratch.",
        "Test the grow(h) function alone on a known input — if the same block is wrong everywhere, the bug is inside that one function.",
        "Only inspect the final print line.",
        "Assume the bug is random and just rerun it."
      ],
      answerIndex: 1,
      explanation: "When one reused function misbehaves everywhere it's called, isolating and testing that single function on a known input pinpoints the bug fast — that's debugging by isolation.",
      hintLadder: [
        "The SAME function is wrong in all three spots — what does that suggest?",
        "Where should you look if one reused block fails everywhere?",
        "Test grow(h) alone on a known input to isolate the bug."
      ],
      misconceptionsTargeted: ["bug-must-be-in-caller"]
    },
    {
      id: "g7.spring.code.w8.d4.q4",
      type: "multiple_choice",
      stem: "Why is organizing your growth tool into FUNCTIONS an upgrade over repeating the same rule line by line?",
      choices: [
        "It makes the program run at a higher voltage.",
        "It lets you write the rule ONCE, reuse it by calling it, and fix a bug in a single place instead of many.",
        "Functions always make programs longer and slower.",
        "It only helps if the program never changes."
      ],
      answerIndex: 1,
      explanation: "A function captures the rule once; calling it reuses that logic, so the code is shorter, clearer, and a fix in the function propagates everywhere it's called.",
      hintLadder: [
        "What happens to the rule if you write it as a function instead of repeating it?",
        "Think about fixing a bug: one place or many?",
        "Write once, call many, fix in a single place."
      ]
    },
    {
      id: "g7.spring.code.w8.d4.q5",
      type: "short_answer",
      stem: "Describe your growth tool as functions: name ONE function it defines (with its input and what it returns), how the main program CALLS it, and ONE way you'd test that function in isolation.",
      rubric: {
        level3: "Names a function with a clear parameter and return value, explains how the main program calls it to build the result, AND gives a concrete isolation test (e.g., call it on a known input and compare to a hand trace).",
        level2: "Describes a function and its use but the input/return or the isolation test is vague.",
        level1: "Misses the function structure or gives no test."
      },
      exemplar: "I define grow(h) that takes a height h and returns h + 2. The main program sets height = 0, then loops 5 times doing height = grow(height), then prints height. I'd test grow alone by calling grow(0) and checking it returns 2, and grow(10) returns 12 — matching my hand trace before I trust the whole tool.",
      hintLadder: [
        "Name the function, its input, and what it returns.",
        "Say how the main program CALLS it to build the result.",
        "Give one test on a known input you can check by hand."
      ]
    }
  ],
  reflectionPrompt: "Good engineering is about building things you can reuse and trust. What's one idea you learned to 'package up' this year — in code or in life — so you could use it again and again?",
  misconceptionBank: [
    {
      id: "bug-must-be-in-caller",
      label: "Hunts the bug in every call site instead of the function",
      description: "When a reused function fails everywhere, searches each caller separately rather than isolating and testing the shared function itself.",
      coachMove: "If the same function is wrong in every spot, the shared block is the suspect. Test it alone on a known input before touching the callers."
    },
    {
      id: "ignores-return-value",
      label: "Forgets a function's returned value must be used",
      description: "Calls a function but doesn't save or use what it RETURNS, so the update silently does nothing.",
      coachMove: "Check that every function call's result is stored or used (e.g., height = grow(height), not just grow(height)); an unused return is a common freeze-the-value bug."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Function",
      prompt:
        "Define double(x) returns x × 2. Start value = 3. Call value = double(value) three times, tracing by hand. What is the final value? No peeking until you've written each call!",
      answer:
        "Call 1: double(3) = 6. Call 2: double(6) = 12. Call 3: double(12) = 24. Final value = 24. Calling double three times from 3 triples-doubles it to 24.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build Your Growth Tool With Functions",
      challenge:
        "On paper (or in any coding app), organize your growth tool around a FUNCTION: define grow(h) with its rule, set a starting value, loop by calling grow, and show the result. Then trace the calls for 4 steps AND write one isolation test to prove the function works.",
      steps: [
        "Define a function grow(h) that returns your growth rule (e.g., return h + 3).",
        "Write the main program: set height, loop calling height = grow(height), then output the result.",
        "Make a trace table showing height after each call.",
        "Add one isolation test: call grow on a known input and show the expected returned value."
      ],
      deliverable: "A function-based growth tool (defined function + calling main program) with a trace table and one isolation test proving it works.",
      choiceBoard: [
        "Write the pseudocode with a defined function and a hand-trace table.",
        "Build it in a coding app with a real function and screenshot the output.",
        "Draw a diagram showing the main program CALLING the function and the value returned."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Debug Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.code.w8.d4.arena1",
          type: "numeric",
          stem: "Trace: height = 2 and count = 0. Loop runs 3 times; each loop does FIRST height = height + count, THEN count = count + 2. What is the final height?",
          answer: 8,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Do both steps each loop in order: add count to height, THEN grow count by 2.",
            "Loop 1: height = 2 + 0 = 2, then count = 2. Loop 2: height = 2 + 2 = 4, then count = 4.",
            "Loop 3: height = 4 + 4 = 8, then count = 6."
          ],
          explanation: "Loop 1: height=2+0=2, count=2. Loop 2: height=2+2=4, count=4. Loop 3: height=4+4=8, count=6. Final height = 8 cm."
        },
        {
          id: "g7.spring.code.w8.d4.arena2",
          type: "short_answer",
          stem: "A tool calls grow(h) inside a loop to raise a plant's height, but the height NEVER changes. Explain how you'd debug this by isolating the function, and name TWO likely causes.",
          rubric: {
            level3: "Describes testing grow(h) alone on a known input to check its return AND names two plausible causes (e.g., the call ignores the return value like 'grow(height)' instead of 'height = grow(height)', OR the function returns h unchanged / adds 0 / updates a local copy).",
            level2: "Mentions isolation OR names causes, but not both clearly, or gives only one cause.",
            level1: "No isolation strategy and fewer than two plausible causes."
          },
          exemplar: "I'd test grow(h) alone: call grow(5) and see what it returns. If it returns 5 unchanged, the bug is inside the function (maybe it adds 0 or returns h without updating). If grow works but height still freezes, the caller probably says grow(height) without saving it back — it should be height = grow(height). Two likely causes: (1) the return value isn't stored, (2) the function returns h unchanged.",
          hintLadder: [
            "Test the function ALONE first — what does grow(5) return?",
            "If the function is fine, look at whether the call SAVES the returned value.",
            "Common causes: ignoring the return value, or the function adding nothing."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Call the Function",
      prompt:
        "Define a body 'function': one combo of reach up, twist left, twist right. Now 'call' it 4 times, saying 'call!' before each round like invoking a function. Then shake out — you reused one block four times, just like calling code.",
      scienceTieIn: "Repeating a defined movement 'function' builds muscle memory the same way calling a function reuses code — and the burst of activity sends fresh oxygen to your brain for sharper focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You built, organized, and debugged a real tool this year. What's the most satisfying part of isolating a bug down to one function and watching your whole program finally work as designed?",
      badge: { id: "g7-spring-tool-engineer", name: "Tool Engineer", emoji: "🛠️" },
      estimatedMinutes: 7
    }
  }
};
