// Grade 7 Coding/CS/AI — Winter Expedition, Week 5 (Data in the Cold),
// Day 4. Topic: analyze a temperature dataset with FUNCTIONS and richer DATA
// STRUCTURES — write reusable functions (average, max, min), filter a list,
// and read values out of a list of records (dictionaries). Grade-7 counterpart
// of the Grade 6 loop/data-analysis mission, pitched up from a single loop to
// reusable functions plus structured data.

export const winterG7CodingW5D4 = {
  id: "g7.winter.code.w5.d4",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Analyze a temperature dataset with reusable functions and data structures",
  topicTag: "loops-data-analysis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-16"],
  hook: "Last year you taught ONE loop to crunch a winter of temperatures. This year you package that logic into reusable FUNCTIONS you can call again and again, and you store data in richer STRUCTURES — lists of daily records, each with a date and a temperature. Today you trace functions, filter data, and pull values out of structured records like a real data programmer.",
  miniLesson: [
    "A FUNCTION is a named, reusable block of steps. average(list) does the summing-and-dividing once, and you can CALL it on any list. Functions RETURN a value you can store or reuse, so you don't rewrite the loop each time.",
    "A DATA STRUCTURE holds many values together. A LIST holds items in order (temps[0] is the first). A RECORD (dictionary) holds labeled fields, like {date: 'Mon', low: -6}; you read a field by its name, e.g. record['low'].",
    "FILTERING keeps only the items that pass a test — like 'keep temps below 0°C.' You loop through, and each value that passes the condition goes into a new list. Building a helper function once, then calling it, keeps code short and reliable."
  ],
  workedExample: {
    prompt: "A function average(nums) returns the sum divided by the count. Given temps = [-4, 0, 6, 10, 3], trace what average(temps) returns.",
    steps: [
      "Inside the function, sum the list: −4 + 0 + 6 + 10 + 3 = 15.",
      "Count the items: there are 5 values.",
      "The function computes sum ÷ count = 15 ÷ 5 = 3.",
      "average(temps) RETURNS 3, which the caller can store in a variable or print."
    ],
    answer: "average(temps) returns 3."
  },
  items: [
    {
      id: "g7.winter.code.w5.d4.q1",
      type: "numeric",
      stem: "A function total(nums) returns the sum of a list. What does total([-5, -2, 4, 9, -1]) return?",
      answer: 5,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Add the values one at a time, watching the negatives.",
        "−5 − 2 = −7, + 4 = −3, + 9 = 6, − 1 = 5.",
        "The function returns 5."
      ],
      explanation: "−5 + (−2) + 4 + 9 + (−1) = 5, so total returns 5."
    },
    {
      id: "g7.winter.code.w5.d4.q2",
      type: "numeric",
      stem: "A function coldest(nums) returns the MINIMUM of a list by keeping a 'lowest' variable that updates whenever a value is smaller. What does coldest([2, -3, -3, 5, -8, 0]) return?",
      answer: -8,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Start lowest = 2, then compare each next value.",
        "−3 < 2 so lowest = −3; −8 < −3 so lowest = −8.",
        "Nothing is smaller than −8, so it returns −8."
      ],
      explanation: "The smallest value in the list is −8, so coldest returns −8.",
      misconceptionsTargeted: ["min-keeps-first-not-smallest"]
    },
    {
      id: "g7.winter.code.w5.d4.q3",
      type: "numeric",
      stem: "A function belowFreezing(temps) RETURNS a new list of only the values less than 0, then the code prints its LENGTH (count). For temps = [-2, 0, -5, 3, -1, -4, 6], what length is printed?",
      answer: 4,
      tolerance: 0,
      unit: "days",
      hintLadder: [
        "Keep only values LESS than 0. Is 0 below freezing? No.",
        "Below-zero values: −2, −5, −1, −4.",
        "That's 4 values, so the length is 4."
      ],
      explanation: "The filtered list is [−2, −5, −1, −4] — four values (0 does not pass) — so its length is 4.",
      misconceptionsTargeted: ["zero-counts-as-below"]
    },
    {
      id: "g7.winter.code.w5.d4.q4",
      type: "numeric",
      stem: "A dataset is a list of records: days = [{date:'Mon', low:-6}, {date:'Tue', low:-1}, {date:'Wed', low:4}]. A loop adds up each record's 'low' field. What total does it produce?",
      answer: -3,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Read the 'low' field out of each record: −6, −1, 4.",
        "Add them: −6 + (−1) + 4.",
        "−6 − 1 + 4 = −3."
      ],
      explanation: "Reading each record's low field gives −6, −1, 4; their sum is −6 − 1 + 4 = −3.",
      misconceptionsTargeted: ["wrong-field-from-record"]
    },
    {
      id: "g7.winter.code.w5.d4.q5",
      type: "short_answer",
      stem: "You've written average(nums), warmest(nums), and coldest(nums) as separate functions. Explain WHY packaging these as reusable functions is better than rewriting the loop each time you need one — and give one example of calling the same function on two different lists.",
      rubric: {
        level3: "Explains that functions avoid repeated/duplicated code, are easier to fix in one place, and can be REUSED (called) on many different inputs — AND gives a concrete example of calling one function (e.g., average) on two different lists, showing it works for both.",
        level2: "Gives a reasonable benefit of functions but the reasoning is thin OR the reuse example is missing/vague.",
        level1: "No clear benefit stated or shows misunderstanding of what a function does."
      },
      exemplar: "Writing the logic once as a function means I don't copy-paste the same loop everywhere — if there's a bug, I fix it in one place and every call gets the fix. Functions also RETURN a value, so I can reuse them on any input: average(cityA_temps) gives one city's mean, and average(cityB_temps) gives another city's mean using the exact same code. That's cleaner and more reliable than rewriting the loop twice.",
      hintLadder: [
        "What happens if you copy the same loop in five places and one has a bug?",
        "How does a function let you avoid rewriting logic?",
        "Show the same function called on two different lists."
      ]
    }
  ],
  reflectionPrompt: "You bundled winter data logic into reusable functions. What's a task in your life you do the same way over and over that could be its own 'function' you just call when needed?",
  misconceptionBank: [
    {
      id: "min-keeps-first-not-smallest",
      label: "Thinks the min is just the first (or last) value visited",
      description: "Assumes the starting or final value is the minimum instead of comparing and keeping the smallest across the whole list.",
      coachMove: "Trace a list where a small value appears in the middle (like ...−8...0): show 'lowest' must be compared and updated, not left at the first or overwritten by the last."
    },
    {
      id: "zero-counts-as-below",
      label: "Counts 0 as a below-freezing value when filtering",
      description: "Includes 0 in a 'less than 0' filter, treating the condition as 'less than or equal to 0.'",
      coachMove: "Read the condition literally: 'less than 0' excludes 0 itself. Ask 'is 0 strictly less than 0?' — no, so it doesn't pass."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Function",
      prompt:
        "A function average(nums) returns sum ÷ count. Trace average([-4, -4, 6, 8, 4]) step by step — sum first, then divide — before you peek at the answer.",
      answer:
        "Sum = −4 − 4 + 6 + 8 + 4 = 10. Count = 5. average = 10 ÷ 5 = 2. The function returns 2.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pseudocode a Weather Analyzer Toolkit",
      challenge:
        "Write pseudocode for THREE reusable functions — average(temps), warmest(temps), and belowFreezing(temps) (which returns a filtered list) — then store a week of data as a list of records (each with a date and a low), call your functions on it, and hand-trace the outputs.",
      steps: [
        "Write each function as a named block that RETURNS a value: average, warmest, and belowFreezing.",
        "Store a 7-day dataset as a list of records, e.g. {date:'Mon', low:-6}.",
        "Write CALL lines that pass the list of lows into each function and print the returns.",
        "Hand-trace all three calls on your dataset and record what each returns."
      ],
      deliverable: "Pseudocode for three reusable functions, a list-of-records dataset, and a hand-trace showing the average, warmest, and below-freezing results.",
      choiceBoard: [
        "Write the pseudocode and trace table on paper.",
        "Type it as real functions in Python or a block editor (Scratch) and run all three.",
        "Draw a diagram showing the dataset feeding into each function box and the value each returns."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Function Toolkit Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.code.w5.d4.arena1",
          type: "numeric",
          stem: "A function range_of(nums) returns warmest(nums) − coldest(nums). What does range_of([-9, -2, 0, 5, 8, -9]) return?",
          answer: 17,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "Find warmest and coldest of the list.",
            "warmest = 8, coldest = −9.",
            "range_of = 8 − (−9) = 8 + 9 = 17."
          ],
          explanation: "warmest = 8, coldest = −9, so range_of returns 8 − (−9) = 17."
        },
        {
          id: "g7.winter.code.w5.d4.arena2",
          type: "numeric",
          stem: "days = [{d:'M', low:-3}, {d:'T', low:2}, {d:'W', low:-5}, {d:'Th', low:-1}, {d:'F', low:0}]. A function countBelowFreezing(days) loops through and adds 1 for each record whose low is less than 0. What does it return?",
          answer: 3,
          tolerance: 0,
          unit: "days",
          hintLadder: [
            "Read each record's low: −3, 2, −5, −1, 0.",
            "Which are strictly less than 0? −3, −5, −1 (0 does not count).",
            "That's 3 records, so it returns 3."
          ],
          explanation: "Lows below 0 are −3, −5, and −1 (2 and 0 don't pass), so the function returns 3."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Call the Function",
      prompt:
        "Define your own movement 'function' called stretch(): 'reach up, twist left, twist right, roll shoulders.' Now CALL stretch() three times, saying 'call one, call two, call three' out loud — same block, reused each time, just like a real function.",
      scienceTieIn:
        "Repeating one named routine on command mirrors how a function is defined once and CALLED many times, and the movement boosts blood flow to your brain so the next trace is sharper.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You turned repeated data logic into reusable functions you can call anytime. How does breaking a big problem into small named functions make it easier to build AND easier to fix?",
      badge: { id: "g7-winter-function-architect", name: "Winter Function Architect", emoji: "🔧" },
      estimatedMinutes: 7
    }
  }
};
