// Grade 7 Coding/Computer Science/AI — Summer Program, Week 8 (Capstone Week),
// Day 4. Topic: build & demo your tool — assemble functions, trace execution,
// and debug. Celebratory capstone that synthesizes the summer's coding.

export const summerG7CodingW8D4 = {
  id: "g7.summer.code.w8.d4",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build & demo your tool — assemble functions, trace, and debug",
  topicTag: "functions-debugging",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-17"],
  hook: "Demo day. Your capstone tool is real code now — a few functions working together. A pro doesn't just hope it works; they TRACE it line by line and DEBUG the one step that's off. Today you assemble your functions and hunt the bug before the audience does.",
  miniLesson: [
    "A FUNCTION takes inputs (parameters), runs steps, and RETURNS an output. Assembling a tool means calling one function's output as another's input — like double(add(3, 2)) which first adds, then doubles.",
    "TRACING means playing computer: step through each line in order, writing down every variable's value as it changes. The bug is almost always at the exact step where your traced value stops matching what you expected.",
    "Two classic bugs: an OFF-BY-ONE error (a loop runs one time too many or too few) and a WRONG-RETURN bug (a function computes the right value but returns the wrong variable). Trace the return line carefully — that's where tools quietly lie."
  ],
  workedExample: {
    prompt: "Trace this: function score(x) { return x * 2 + 1; }  What does score(4) return?",
    steps: [
      "Substitute the input: x = 4.",
      "Apply multiplication first (order of operations): 4 * 2 = 8.",
      "Then add 1: 8 + 1 = 9.",
      "The function returns 9."
    ],
    answer: "9"
  },
  items: [
    {
      id: "g7.summer.code.w8.d4.q1",
      type: "numeric",
      stem: "A function is defined as f(n) = n * 3 - 2. What does f(5) return? (Trace it step by step.)",
      answer: 13,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Substitute n = 5 into n * 3 - 2.",
        "Multiply first: 5 * 3 = 15.",
        "Then subtract 2: 15 - 2 = 13."
      ],
      explanation: "5 * 3 = 15, then 15 - 2 = 13."
    },
    {
      id: "g7.summer.code.w8.d4.q2",
      type: "numeric",
      stem: "Two functions: add(a, b) returns a + b, and triple(x) returns x * 3. What does triple(add(2, 4)) return? (Work inside-out.)",
      answer: 18,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Evaluate the inner call first: add(2, 4).",
        "add(2, 4) = 6, so now you have triple(6).",
        "triple(6) = 6 * 3 = 18."
      ],
      explanation: "Inner first: add(2, 4) = 6; then triple(6) = 18."
    },
    {
      id: "g7.summer.code.w8.d4.q3",
      type: "numeric",
      stem: "A loop starts with total = 0 and runs 'total = total + 2' exactly 4 times. What is total after the loop? (Trace each pass.)",
      answer: 8,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Pass 1: 0 + 2 = 2. Pass 2: 2 + 2 = 4.",
        "Pass 3: 4 + 2 = 6. Pass 4: 6 + 2 = 8.",
        "Four additions of 2 starting from 0 gives 8."
      ],
      explanation: "0 → 2 → 4 → 6 → 8 after four passes."
    },
    {
      id: "g7.summer.code.w8.d4.q4",
      type: "multiple_choice",
      stem: "A function should return the LARGER of two numbers, but max2(3, 9) returns 3. The code is: 'if (a > b) return b; else return a;'. What is the bug?",
      choices: [
        "The function has no parameters.",
        "The return values are swapped — it returns the SMALLER value; it should return a when a > b, else b.",
        "The if condition should never be used.",
        "There is no bug; 3 is correct."
      ],
      answerIndex: 1,
      explanation: "When a > b the code returns b (the smaller). The returns are swapped: it should return a when a > b, otherwise b — a classic wrong-return bug.",
      hintLadder: [
        "Trace max2(3, 9): is 3 > 9 true or false?",
        "3 > 9 is false, so it hits 'else return a' and returns... check which value that is.",
        "The branches return the wrong variables — they're swapped."
      ],
      misconceptionsTargeted: ["return-branch-swap"]
    },
    {
      id: "g7.summer.code.w8.d4.q5",
      type: "short_answer",
      stem: "You demo your tool and it outputs 5 when you expected 6. Describe the step-by-step process you'd use to TRACE and find the bug.",
      rubric: {
        level3: "Describes playing computer line by line, recording each variable's value, and locating the FIRST step where the traced value diverges from the expected value (naming off-by-one or wrong-return as a likely culprit).",
        level2: "Mentions tracing or checking values but the process is vague or skips the 'find where it diverges' step.",
        level1: "Guesses randomly, or says 'rewrite it' with no tracing process."
      },
      exemplar: "I'd play computer: start at the top, write down every variable's value after each line, and compare to what I expect. The first line where my traced value doesn't match the expected one is where the bug lives — here, being off by 1 (5 vs 6) points to an off-by-one loop or a subtraction that's too big.",
      hintLadder: [
        "How do you 'play computer' through the code?",
        "Track each variable's value line by line.",
        "Find the first step where your value stops matching the expected one."
      ]
    }
  ],
  reflectionPrompt: "Every tool has a bug you haven't found yet. What's the ONE input you're most nervous to test on your capstone tool during the demo — and why not test it now?",
  misconceptionBank: [
    {
      id: "return-branch-swap",
      label: "Overlooks swapped return values in branches",
      description: "Assumes an if/else is correct because it 'looks right,' without tracing which value each branch actually returns.",
      coachMove: "Trace one concrete example through BOTH branches and check the returned value against the expected result."
    },
    {
      id: "off-by-one",
      label: "Loop runs one time too many or too few",
      description: "Miscounts loop passes, so a total or index ends up off by exactly one.",
      coachMove: "Count the passes explicitly on paper, listing the value after each pass, and compare the pass count to the intended count."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Play Computer",
      prompt:
        "A function is g(x) = x * x - x. Play computer and trace g(4) step by step. What does it return? No calculator — think like the machine!",
      answer:
        "x = 4. First x * x = 4 * 4 = 16. Then subtract x: 16 - 4 = 12. So g(4) returns 12.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Assemble & Trace Your Tool",
      challenge:
        "Assemble your capstone tool from at least two functions where one's output feeds the next. Then write a TRACE table for one real input, and deliberately plant one bug for a partner (or your future self) to hunt.",
      steps: [
        "Sketch two functions and how one's output becomes the other's input.",
        "Pick a sample input and build a trace table (columns: line/step, variable, value).",
        "Run the trace to the final output and confirm it matches what you expect.",
        "Plant one small bug (off-by-one or a swapped return) and note how the trace would catch it."
      ],
      deliverable: "A two-function tool sketch plus a trace table, with one planted bug and the trace step that would reveal it.",
      choiceBoard: [
        "Write the functions and full trace table on paper or a device.",
        "Record a 60-second 'live debug' narrating how your trace finds the planted bug.",
        "Draw a flowchart of your two functions with the data flowing between them."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Debug Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.code.w8.d4.arena1",
          type: "numeric",
          stem: "Trace nested calls. half(x) returns x / 2, and addOne(y) returns y + 1. What does half(addOne(15)) return? (Work inside-out.)",
          answer: 8,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Evaluate the inner call first: addOne(15).",
            "addOne(15) = 15 + 1 = 16, so now you have half(16).",
            "half(16) = 16 / 2 = 8."
          ],
          explanation: "Inner first: addOne(15) = 16; then half(16) = 8."
        },
        {
          id: "g7.summer.code.w8.d4.arena2",
          type: "short_answer",
          stem: "A loop is meant to sum the numbers 1 through 5 (should total 15) but returns 10. The loop runs from 1 up to but NOT including 5. What is the bug and how do you fix it?",
          rubric: {
            level3: "Identifies an off-by-one error (the loop stops before adding 5, giving 1+2+3+4 = 10) AND fixes it by including 5 (e.g., loop up to AND including 5, or change the boundary to 6/<= 5).",
            level2: "Names off-by-one but the fix is vague, OR describes the missing 5 without the term.",
            level1: "Misdiagnoses the bug or offers no working fix."
          },
          exemplar: "It's an off-by-one bug: 'up to but not including 5' adds only 1+2+3+4 = 10, leaving out 5. Fix it so the loop includes 5 (loop while i <= 5, or run up to 6 exclusive), so it sums 1+2+3+4+5 = 15.",
          hintLadder: [
            "Add the numbers the loop ACTUALLY includes: 1+2+3+4 = ?",
            "Which number got left out?",
            "Adjust the boundary so 5 is included."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Step Through It",
      prompt:
        "Take 4 slow, deliberate steps forward, saying a 'line number' with each one (line 1, line 2, line 3, line 4) — like tracing code one step at a time. Then take one step back to 'fix the bug,' shake out your arms, and breathe.",
      scienceTieIn: "Slowing down and moving in deliberate steps mirrors careful tracing — and physically slowing your pace lowers stress, which is exactly when your brain spots bugs it rushed past before.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your tool runs! Describe the moment your functions first worked together — and name one bug you squashed by tracing instead of guessing.",
      badge: { id: "g7-tool-builder", name: "Tool Builder", emoji: "🛠️" },
      estimatedMinutes: 7
    }
  }
};
