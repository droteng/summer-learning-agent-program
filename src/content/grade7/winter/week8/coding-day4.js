// Grade 7 Coding/CS/AI — Winter Showcase, Week 8, Day 4.
// Topic: build & demo your tool — assemble a small winter program that uses
// FUNCTIONS (parameters + return values), trace its logic, and debug it.
// Pitched up: functions, nested/conditional loops, and systematic debugging.

export const winterG7CodingW8D4 = {
  id: "g7.winter.code.w8.d4",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build and demo your tool — functions, tracing, and systematic debugging",
  topicTag: "build-and-debug",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-17"],
  hook: "For your capstone, a small program brings your winter idea to life — a snow tracker, a temperature analyzer, a showcase countdown. Grade 7 coders build with FUNCTIONS that take inputs and RETURN results, then TRACE and DEBUG systematically so the demo works flawlessly at the showcase.",
  miniLesson: [
    "A FUNCTION packages logic you can reuse: it takes PARAMETERS (inputs), does work, and RETURNS a value. Calling snowTotal(3, 5) sends 3 and 5 in as parameters and gets one value back.",
    "To TRACE a function, substitute the arguments for the parameters, then walk each line updating variables — including any loop — until you reach the RETURN, which gives the function's output.",
    "Debug SYSTEMATICALLY: reproduce the bug, isolate where the trace first differs from what you meant, form a hypothesis, then test ONE change. A common bug is an off-by-one loop bound or updating a variable in the wrong place."
  ],
  workedExample: {
    prompt: "Trace this function: function chill(start) { total = start; for i from 1 to 3: total = total - 2; return total }. What does chill(10) return?",
    steps: [
      "Substitute the argument: start = 10, so total = 10.",
      "Loop pass i=1: total = 10 - 2 = 8.",
      "Loop pass i=2: total = 8 - 2 = 6. Loop pass i=3: total = 6 - 2 = 4.",
      "Loop ends; return total = 4."
    ],
    answer: "chill(10) returns 4."
  },
  items: [
    {
      id: "g7.winter.code.w8.d4.q1",
      type: "numeric",
      stem: "A function starts snowCount at its parameter value, then a loop runs 4 times adding 3 each pass, and returns snowCount. What does snowTracker(5) return?",
      answer: 17,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Substitute the argument: snowCount = 5.",
        "Add 3 four times: 5 → 8 → 11 → 14 → 17.",
        "The function returns 5 + (4 × 3) = 17."
      ],
      explanation: "snowCount starts at 5; four passes of +3 give 5 → 8 → 11 → 14 → 17, so it returns 17."
    },
    {
      id: "g7.winter.code.w8.d4.q2",
      type: "multiple_choice",
      stem: "You WANT double(n) to return double its input, but you wrote: function double(n) { return n + 2 }. You call double(6). What does it return, and is that the bug?",
      choices: [
        "12 (correctly doubled) — no bug.",
        "3, because it divides.",
        "8, because it ADDS 2 instead of multiplying by 2 — that IS the bug; it should be return n * 2.",
        "It returns nothing / crashes."
      ],
      answerIndex: 2,
      explanation: "double(6) computes 6 + 2 = 8, not 12. Doubling needs return n * 2 (or n + n). Adding 2 instead of multiplying is the bug.",
      hintLadder: [
        "Substitute n = 6 into n + 2.",
        "Did 6 + 2 double the input, or just add 2?",
        "6 + 2 = 8 — it added instead of doubling; fix to n * 2."
      ],
      misconceptionsTargeted: ["add-vs-multiply-bug"]
    },
    {
      id: "g7.winter.code.w8.d4.q3",
      type: "numeric",
      stem: "Trace this function with a conditional inside the loop: function tally(days) { total = 0; for each d in days: if d > 0: total = total + d; return total }. What does tally([3, -1, 4, 0, 2]) return? (Only positive values are added.)",
      answer: 9,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "The if only adds values greater than 0 — skip -1 and 0.",
        "Add the positives: 3 + 4 + 2.",
        "3 + 4 + 2 = 9."
      ],
      explanation: "The condition d > 0 adds only 3, 4, and 2 (skipping -1 and 0): 3 + 4 + 2 = 9."
    },
    {
      id: "g7.winter.code.w8.d4.q4",
      type: "multiple_choice",
      stem: "Your countdown loop is written 'for i from 0 to 5' and prints 6 numbers (0,1,2,3,4,5), but you only wanted 5 numbers (1 through 5). This is a classic bug. What is it and the fix?",
      choices: [
        "It needs more colors; add styling.",
        "An OFF-BY-ONE error in the loop bounds — change the range to 'from 1 to 5' so it runs exactly 5 times.",
        "The variable i is the wrong letter; rename it.",
        "Delete the loop entirely."
      ],
      answerIndex: 1,
      explanation: "Looping 0 to 5 inclusive runs 6 times, one more than intended — an off-by-one error. Fixing the bounds to 1 through 5 makes it run the exact 5 times you meant.",
      hintLadder: [
        "Count how many numbers 0 through 5 actually is.",
        "You got one MORE than you wanted — what kind of error is that?",
        "Off-by-one; correct the loop's start/end bounds."
      ],
      misconceptionsTargeted: ["off-by-one"]
    },
    {
      id: "g7.winter.code.w8.d4.q5",
      type: "short_answer",
      stem: "Describe the FUNCTION at the heart of the tool you'll demo: name its parameter(s), what it returns, and one line of its logic. Then describe a SYSTEMATIC test (with a known input and the expected return) you'd use to catch a bug.",
      rubric: {
        level3: "Names a function with clear parameter(s) and return value, describes one logic step, AND gives a systematic test: a specific input, the expected returned output, and how a mismatch would reveal the bug.",
        level2: "Describes the function and parameter/return but the test lacks a specific expected output or is vague.",
        level1: "Too vague to picture, or missing the return value or the test."
      },
      exemplar: "My function countSnowyDays(days) takes a list of daily conditions and returns how many were snowy. Inside, a loop adds 1 to a counter whenever the day equals 'snow'. To test it, I'd call countSnowyDays(['snow','clear','snow']) and expect it to return 2 — if it returns anything else, I trace the counter to find the bug.",
      hintLadder: [
        "What does your capstone function take IN and give BACK?",
        "Name one parameter, the return value, and one logic step.",
        "Pick an input where you already know the correct output, and state it."
      ]
    }
  ],
  reflectionPrompt: "Tracing a function is proofreading your own logic before anyone runs it. What bug (or almost-bug) did careful tracing catch today, and how did your systematic approach help you fix it fast?",
  misconceptionBank: [
    {
      id: "add-vs-multiply-bug",
      label: "Confuses adding with doubling/multiplying",
      description: "Writes n + 2 when the goal was to double (n * 2) — a very common logic bug in a function's return.",
      coachMove: "Test with a real argument: 'Did double(6) return 12 (doubled) or 8 (added)? Which did you MEAN?'"
    },
    {
      id: "off-by-one",
      label: "Off-by-one loop bounds",
      description: "Sets loop bounds that run one time too many or too few, so the function processes the wrong count of items.",
      coachMove: "Count the iterations by hand for a tiny input: 'How many times does 0 to 5 run? Is that what you wanted?'"
    }
  ],
  stretch: {
    prompt: "Trace a nested loop: function grid(n) { total = 0; for i from 1 to n: for j from 1 to n: total = total + 1; return total }. What does grid(3) return, and why?",
    answer: "It returns 9. The inner loop runs n times for EACH of the n outer passes, so total increases n × n = 3 × 3 = 9 times."
  },
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "What Does the Function Return?",
      prompt:
        "function grow(flakes) { for i from 1 to 3: flakes = flakes * 2; return flakes }. What does grow(2) return? Trace each pass before you peek!",
      answer:
        "Pass 1: 2 * 2 = 4. Pass 2: 4 * 2 = 8. Pass 3: 8 * 2 = 16. It returns 16 — doubling three times multiplies by 8!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build & Trace Your Winter Function",
      challenge:
        "Assemble the tool you'll demo as a FUNCTION with a parameter and a return value (in blocks, code, or on paper). Then write a TRACE TABLE that runs it with one example argument and proves it returns the right answer.",
      steps: [
        "Pick your tool and define it as a function: name it, choose its parameter(s), decide what it returns.",
        "Write its steps in order, including any loop, its bounds, and any if-condition.",
        "Make a trace table: a column for each variable, a row for each step, ending at the return.",
        "Run one example argument through and confirm the returned value is what you meant."
      ],
      deliverable: "Your tool written as a function plus a trace table proving its return value for one example input.",
      choiceBoard: [
        "Build it in a block editor as a function and screenshot the working run.",
        "Write the function code/pseudocode plus a full trace table by hand.",
        "Draw a flowchart of the function showing parameters in, the loop, and the return out."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Debug Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.code.w8.d4.arena1",
          type: "numeric",
          stem: "Trace: function build(count) { for i from 1 to 3: count = count + count; return count }. What does build(3) return?",
          answer: 24,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "count = count + count doubles the value each pass.",
            "Pass 1: 3 + 3 = 6. Pass 2: 6 + 6 = 12.",
            "Pass 3: 12 + 12 = 24, so it returns 24."
          ],
          explanation: "Each pass doubles count: 3 → 6 → 12 → 24, so build(3) returns 24."
        },
        {
          id: "g7.winter.code.w8.d4.arena2",
          type: "short_answer",
          stem: "A classmate's function countSnow(days) is supposed to return the number of snowy days but always returns 0. Name TWO plausible bugs (think about the counter and the loop/return) and describe a SYSTEMATIC test to tell which one it is.",
          rubric: {
            level3: "Names two plausible bugs (e.g., the counter is re-declared/reset to 0 inside the loop; or 'return' sits inside the loop so it returns after the first day; or the if-condition never matches) AND describes a systematic test with a known input to distinguish them.",
            level2: "Names two bugs but the test is vague, or gives one clear bug plus a clear test.",
            level1: "Only one vague idea and no real test."
          },
          exemplar: "Bug 1: the counter is set back to 0 inside the loop every pass, so it never accumulates. Bug 2: the 'return' is inside the loop, so the function exits after the first day with 0. To test, I'd call countSnow with a known list like ['snow','snow','clear'] expecting 2; if it returns 0, I trace the counter after each pass — if it resets each time it's Bug 1, if it exits after pass 1 it's Bug 2.",
          hintLadder: [
            "Why might a counter never grow, or a function quit too early?",
            "Consider: is the counter reset each pass, or does 'return' run inside the loop?",
            "Use a known input (expected return 2) and trace to separate the two bugs."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Call the Function",
      prompt:
        "Be a function call! 'Pass in' an argument by clapping a number of times (say, 3 claps). Then 'run the loop': do that many jumping jacks. Finally 'return' by striking a victory pose and calling out your total. Do 3 different 'calls' with different clap counts.",
      scienceTieIn: "Physically passing in a value, looping, and returning a result mirrors exactly how a function works — and the movement pumps oxygen to your brain to keep your debugging sharp.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You built a real function, traced it, and debugged it systematically for your showcase. What did tracing the function reveal that just running it would have hidden? How will you demo it with confidence?",
      badge: { id: "g7-winter-function-debug-master", name: "Function & Debug Master", emoji: "🐛" },
      estimatedMinutes: 7
    }
  }
};
