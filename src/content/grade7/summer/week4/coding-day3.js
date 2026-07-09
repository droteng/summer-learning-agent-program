// Grade 7 Coding/CS/AI — Summer Voyage, Week 4 ("Code Your First Tool"),
// Day 3. Topic: loops + lists (iterate a data structure, accumulate).

export const summerG7CodingW4D3 = {
  id: "g7.summer.code.w4.d3",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Loops + lists (iterate a data structure, accumulate)",
  topicTag: "loops-lists",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-11", "CSTA.2-AP-13"],
  hook: "A quiz has many questions; a game has many scores. You don't write a line for each one — you store them in a LIST and use a LOOP to walk through them. Today you learn to iterate a list and accumulate a result, the engine behind almost every tool.",
  miniLesson: [
    "A list (or array) is an ordered data structure holding many values, like scores = [8, 5, 10, 7]. You reach items by position; the first index is 0.",
    "A loop repeats an action for every item in the list. 'For each score in scores' runs the loop body once per element.",
    "To ACCUMULATE, start a running total at 0, then add each item to it as the loop visits it. After the loop, the total holds the combined result."
  ],
  workedExample: {
    prompt: "scores = [4, 6, 5]. total starts at 0. For each score in scores: total = total + score. What is total after the loop?",
    steps: [
      "Start: total = 0.",
      "Visit 4: total = 0 + 4 = 4.",
      "Visit 6: total = 4 + 6 = 10.",
      "Visit 5: total = 10 + 5 = 15. Loop ends: total = 15."
    ],
    answer: "total = 15"
  },
  items: [
    {
      id: "g7.summer.code.w4.d3.q1",
      type: "numeric",
      stem: "points = [3, 3, 3, 3]. total starts at 0. For each p in points: total = total + p. What is total after the loop?",
      answer: 12,
      tolerance: 0,
      unit: "points",
      hintLadder: [
        "Start total at 0 and add each item.",
        "There are four 3's.",
        "0 + 3 + 3 + 3 + 3 = 12."
      ],
      explanation: "The loop adds each 3 to the running total: 3 + 3 + 3 + 3 = 12."
    },
    {
      id: "g7.summer.code.w4.d3.q2",
      type: "numeric",
      stem: "prices = [10, 20, 5, 15]. Using zero-based indexing, what value is at prices[2]?",
      answer: 5,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Indexing starts at 0, so prices[0] is the first item.",
        "prices[0] = 10, prices[1] = 20, prices[2] = ?",
        "Count to index 2: the third item is 5."
      ],
      explanation: "Index 0 is 10, index 1 is 20, index 2 is 5. Zero-based indexing means the third item has index 2.",
      misconceptionsTargeted: ["index-off-by-one"]
    },
    {
      id: "g7.summer.code.w4.d3.q3",
      type: "numeric",
      stem: "answers = [true, false, true, true, false]. count starts at 0. For each a in answers: IF a == true, count = count + 1. What is count after the loop? (This counts correct answers.)",
      answer: 3,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Only add 1 when the item is true.",
        "Go through: true(+1), false, true(+1), true(+1), false.",
        "Three trues, so count = 3."
      ],
      explanation: "The loop increments count only on true values: there are three trues, so count = 3."
    },
    {
      id: "g7.summer.code.w4.d3.q4",
      type: "multiple_choice",
      stem: "You want the running total of a list to be correct. Where should you set total = 0?",
      choices: [
        "Once, BEFORE the loop starts",
        "Inside the loop, at the top of each pass",
        "After the loop ends",
        "It doesn't matter where"
      ],
      answerIndex: 0,
      explanation: "Setting total = 0 before the loop initializes it once. Putting it inside the loop would reset it to 0 every pass, wiping out the accumulation.",
      hintLadder: [
        "What happens to the total if you reset it every pass of the loop?",
        "You only want to start counting from zero one time.",
        "Initialize before the loop so the loop can build on it."
      ],
      misconceptionsTargeted: ["reset-inside-loop"]
    },
    {
      id: "g7.summer.code.w4.d3.q5",
      type: "short_answer",
      stem: "Describe (in words or pseudocode) how a loop and a list would work together to compute the AVERAGE of a list of quiz scores. Mention how you accumulate and what you do after the loop.",
      rubric: {
        level3: "Sets a total (and optionally a count) before the loop, adds each score inside the loop, then divides total by the number of scores AFTER the loop to get the average.",
        level2: "Accumulates a total correctly but the division step or count is unclear or missing.",
        level1: "No accumulation, or averages incorrectly (e.g., divides inside the loop)."
      },
      exemplar: "Set total = 0. For each score in scores: total = total + score. After the loop, average = total / length of scores. Dividing after the loop uses the full sum and the count of items.",
      hintLadder: [
        "First get the SUM using an accumulator loop.",
        "You also need how many scores there are.",
        "After the loop, divide the total by the count."
      ]
    }
  ],
  reflectionPrompt: "Your tool will hold a collection of something (questions, scores, items). What list will it use, and what will you loop over to compute?",
  misconceptionBank: [
    {
      id: "index-off-by-one",
      label: "Off-by-one with list indexes",
      description: "Thinks the first item is at index 1, so every position is off by one.",
      coachMove: "Repeat the rule: the FIRST item is index 0. Count starting from 0 when locating a position."
    },
    {
      id: "reset-inside-loop",
      label: "Resets the accumulator inside the loop",
      description: "Puts total = 0 inside the loop, wiping the running total on every pass.",
      coachMove: "Ask: 'How many times should the total start at zero?' Once — so it goes BEFORE the loop."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Loop the List",
      prompt:
        "coins = [2, 4, 1, 3]. total starts at 0 and the loop adds each coin. Trace it pass by pass — what is total when the loop finishes?",
      answer:
        "0 + 2 = 2, 2 + 4 = 6, 6 + 1 = 7, 7 + 3 = 10. total = 10 after the loop.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Data List for Your Tool",
      challenge:
        "Create the list your tool will loop over. If it's a quiz, list the questions and answers; if it's a calculator or game, list the numbers or items. Then write the loop (in words or pseudocode) that walks the list and accumulates a result.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Decide what your tool collects and put 4-6 items in a list.",
        "Write the list with its index numbers (starting at 0).",
        "Write a 'for each item' loop that does one job per item.",
        "Add an accumulator (a total or count) and trace it through the list."
      ],
      deliverable: "A labeled list with indexes plus a loop that accumulates a result, traced by hand.",
      choiceBoard: [
        "Write the list and loop as pseudocode with a traced accumulator.",
        "Draw a table with columns Index, Item, Running Total across the whole list.",
        "Make a flowchart of the loop showing the 'more items?' decision and the accumulate step."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.code.w4.d3.arena1",
          type: "numeric",
          stem: "nums = [5, 2, 8, 1]. total starts at 0. For each n in nums: IF n > 3, total = total + n. What is total after the loop? (Only items greater than 3 are added.)",
          answer: 13,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Only add items where n > 3.",
            "Which pass? 5 (yes), 2 (no), 8 (yes), 1 (no).",
            "0 + 5 + 8 = 13."
          ],
          explanation: "Only 5 and 8 are greater than 3, so total = 5 + 8 = 13. The 2 and 1 are skipped."
        },
        {
          id: "g7.summer.code.w4.d3.arena2",
          type: "numeric",
          stem: "scores = [6, 9, 4, 9, 9]. max starts at 0. For each s in scores: IF s > max, max = s. What is max after the loop? (This finds the highest score.)",
          answer: 9,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "max keeps the biggest value seen so far.",
            "Update max only when a score beats the current max.",
            "The largest value in the list is 9."
          ],
          explanation: "max updates to 6, then 9, and never finds anything bigger, so max = 9 after the loop."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Count the Loop",
      prompt:
        "Pick a list of 5 'moves' (jumping jack, toe touch, arm circle, squat, reach-up). Loop through your list ONE time, doing each move for 5 counts. As you finish each, say its index out loud starting from 0.",
      scienceTieIn: "Pairing counting with movement links your working memory to your motor system, and the burst of activity increases blood flow that helps lock in new ideas.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Loops let a computer repeat work thousands of times without getting tired or bored. What repetitive task in your day would you hand to a loop if you could?",
      badge: { id: "g7-loop-voyager", name: "Loop Voyager", emoji: "🔁" },
      estimatedMinutes: 7
    }
  }
};
