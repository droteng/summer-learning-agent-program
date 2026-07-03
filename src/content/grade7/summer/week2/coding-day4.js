// Grade 7 Coding/CS/AI — Summer Program, Week 2 (Numbers in the Real World),
// Day 4. Topic: build a data tool with a FUNCTION that computes a statistic
// (the average of a list). Project: build a mini data dashboard.

export const summerG7CodingW2D4 = {
  id: "g7.summer.code.w2.d4",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build a function that computes an average",
  topicTag: "functions-and-lists",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-11"],
  hook: "Your dashboard needs to turn a list of numbers into ONE headline stat. Instead of doing the math by hand every time, you write a reusable function — feed it a list, it hands back the average. Today you design that function.",
  miniLesson: [
    "A function is a named, reusable block of steps. You give it inputs (parameters) and it returns an output — like average(scores) taking a list and returning one number.",
    "A list (array) holds many values in order, like [8, 6, 10, 4]. You can find its length (how many items) and add up all its items with a loop.",
    "To compute an average inside a function: sum the list, then divide the sum by the length. In pseudocode: return sum(list) / length(list). Writing it once means you can reuse it on any list."
  ],
  workedExample: {
    prompt: "Trace this function: average(nums) returns sum(nums) / length(nums). What does average([4, 8, 6, 2]) return?",
    steps: [
      "First find the sum of the list: 4 + 8 + 6 + 2 = 20.",
      "Find the length (how many items): there are 4 items.",
      "Divide: 20 ÷ 4 = 5.",
      "The function returns 5."
    ],
    answer: "average([4, 8, 6, 2]) returns 5."
  },
  items: [
    {
      id: "g7.summer.code.w2.d4.q1",
      type: "numeric",
      stem: "The function average(list) returns sum(list) / length(list). What does average([10, 20, 30]) return?",
      answer: 20,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "First add all the items in the list.",
        "10 + 20 + 30 = 60, and there are 3 items.",
        "60 ÷ 3 = 20."
      ],
      explanation: "sum = 60, length = 3, so 60 ÷ 3 = 20."
    },
    {
      id: "g7.summer.code.w2.d4.q2",
      type: "numeric",
      stem: "A loop adds every item of [7, 3, 9, 5, 6] into a variable named total. What is the value of total after the loop finishes?",
      answer: 30,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "The loop keeps adding each item onto total.",
        "7 + 3 + 9 + 5 + 6.",
        "The running total ends at 30."
      ],
      explanation: "7 + 3 + 9 + 5 + 6 = 30, so total = 30 after the loop."
    },
    {
      id: "g7.summer.code.w2.d4.q3",
      type: "numeric",
      stem: "Using average(list) = sum(list) / length(list), what does average([12, 15, 9, 12]) return?",
      answer: 12,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add the four items to get the sum.",
        "12 + 15 + 9 + 12 = 48, and the length is 4.",
        "48 ÷ 4 = 12."
      ],
      explanation: "sum = 48, length = 4, so 48 ÷ 4 = 12."
    },
    {
      id: "g7.summer.code.w2.d4.q4",
      type: "multiple_choice",
      stem: "A friend's average function divides by 5 no matter what list is passed in. Why is this a bug?",
      choices: [
        "Division is never allowed inside a function.",
        "It should divide by the list's LENGTH, so it breaks for lists that don't have 5 items.",
        "Functions can't take a list as a parameter.",
        "Averages should use multiplication, not division."
      ],
      answerIndex: 1,
      explanation: "The divisor must be the number of items in THIS list (its length). Hard-coding 5 gives wrong answers for any list that isn't exactly 5 items long.",
      hintLadder: [
        "What number should you divide the sum by to get an average?",
        "Does every list passed in have exactly 5 items?",
        "The divisor must be length(list), not a fixed 5."
      ],
      misconceptionsTargeted: ["hardcoded-divisor"]
    },
    {
      id: "g7.summer.code.w2.d4.q5",
      type: "short_answer",
      stem: "In plain steps (pseudocode), describe a function named average that takes a list of numbers as a parameter and returns their average. Name the parameter, describe how you sum the list, and describe what you divide by.",
      rubric: {
        level3: "Defines a function with a list parameter, sums the items (e.g., with a loop into a total), divides the total by the list's LENGTH, and returns that value.",
        level2: "Describes summing and dividing but misses the parameter, the length divisor, or the return step.",
        level1: "No clear function structure or wrong averaging logic."
      },
      exemplar: "FUNCTION average(numbers): set total = 0; FOR each n in numbers: total = total + n; set count = length of numbers; RETURN total / count. It takes the list 'numbers' as its parameter, loops to build the sum, then divides by how many items there are.",
      hintLadder: [
        "Start with FUNCTION average(numbers) — that names the parameter.",
        "How do you build the sum of all items? (a loop and a running total)",
        "What do you divide the total by, and what do you return?"
      ]
    }
  ],
  reflectionPrompt: "Why is writing average() as a reusable FUNCTION better than adding and dividing by hand each time your dashboard gets new data?",
  misconceptionBank: [
    {
      id: "hardcoded-divisor",
      label: "Hard-codes the divisor instead of using list length",
      description: "Divides the sum by a fixed number (like 5) rather than by however many items the list actually has.",
      coachMove: "Ask: 'If I pass a list of 3 items, what should you divide by?' Guide them to use length(list) so the function works for ANY list."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Function",
      prompt:
        "A function average(list) returns sum(list) / length(list). Trace it: what does average([6, 6, 9, 3]) return? Work out the sum and the length before you peek!",
      answer:
        "Sum: 6 + 6 + 9 + 3 = 24. Length: 4 items. 24 ÷ 4 = 6. The function returns 6.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design Your Dashboard's Stat Function",
      challenge:
        "On paper (or in a block/coding tool), design a function for your data dashboard that takes a list and returns one statistic — the average. Give it a name and a parameter, write the steps, then TEST it by hand on two different lists to prove it works for both.",
      steps: [
        "Name your function and its list parameter (e.g., average(scores)).",
        "Write the inside steps: build a running total with a loop, then divide by the length.",
        "Test it by hand on a list of 3 numbers and a list of 5 numbers.",
        "Confirm both tests give the correct average — proving the function is reusable."
      ],
      deliverable: "A written or built average() function with a parameter, its steps, and two worked test cases showing correct results.",
      choiceBoard: [
        "Write the pseudocode/function and both hand-traced test cases.",
        "Build it in a block-coding tool (Scratch/blocks) and screenshot two runs.",
        "Draw a flowchart of the function with the loop and the divide-by-length step."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Function Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.code.w2.d4.arena1",
          type: "numeric",
          stem: "The function average(list) = sum(list) / length(list). What does average([15, 5, 20, 12, 8]) return?",
          answer: 12,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Add all five items to get the sum.",
            "15 + 5 + 20 + 12 + 8 = 60, and the length is 5.",
            "60 ÷ 5 = 12."
          ],
          explanation: "sum = 60, length = 5, so 60 ÷ 5 = 12."
        },
        {
          id: "g7.summer.code.w2.d4.arena2",
          type: "short_answer",
          stem: "You want your dashboard to ALSO show the highest value in a list. Describe, in plain steps, a function named highest(list) that returns the largest number in the list.",
          rubric: {
            level3: "Defines highest(list) that starts a 'max' variable at the first item, loops through the rest comparing each item, updates max when a bigger item is found, and returns max.",
            level2: "Describes comparing items to find the biggest but misses initializing max, the loop, or the return.",
            level1: "No clear method for finding the largest value."
          },
          exemplar: "FUNCTION highest(list): set max = list[0]; FOR each n in list: IF n > max THEN max = n; RETURN max. It starts max at the first item, then updates max whenever it finds a bigger number, and returns the largest at the end.",
          hintLadder: [
            "What value should 'max' start as? (the first item)",
            "As you loop, when do you update max?",
            "Update max whenever the current item is greater, then return max."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop It Out",
      prompt:
        "Run a movement 'loop': do 1 squat, 2 arm circles, 3 toe touches — then LOOP the whole sequence 3 times, counting each rep aloud like a running total. Shake out and breathe.",
      scienceTieIn:
        "Counting reps while you move is exactly what a loop does — repeating steps and tracking a total — and the activity sends fresh oxygen to your brain for the next challenge.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Functions let you reuse a solution instead of redoing work. What's one task in your day you repeat that you'd love to turn into a reusable 'function'?",
      badge: { id: "g7-function-builder", name: "Function Builder", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
