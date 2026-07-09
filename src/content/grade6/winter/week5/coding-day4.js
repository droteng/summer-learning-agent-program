// Grade 6 Coding/CS/AI — Winter Expedition, Week 5 (Data in the Cold),
// Day 4. Topic: analyze a dataset with code — loop through a list of
// temperatures to find the max, total, and average.

export const winterG6CodingW5D4 = {
  id: "g6.winter.code.w5.d4",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Analyze a temperature dataset with a loop (max, total, average)",
  topicTag: "loops-data-analysis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-13"],
  hook: "A weather station hands you a whole winter of temperature readings. Doing the math by hand would take forever — so you teach a loop to do it. Today you trace code that walks through a list of temperatures and reports the total, the average, and the coldest and warmest days.",
  miniLesson: [
    "A LOOP repeats an action once for each item in a list. To sum a list, start a variable 'total = 0' and add each number as the loop visits it.",
    "To find the MAX (warmest), keep a variable 'biggest' and update it whenever the current value is larger. To find the AVERAGE, divide the total by how many values there are (the count).",
    "Order of steps matters: finish the loop to get the total FIRST, then divide by the count to get the average. Dividing too early gives the wrong answer."
  ],
  workedExample: {
    prompt: "temps = [-3, 0, 5, 8, 2]. A loop adds each to 'total' (starting at 0). What is the total, and what is the average?",
    steps: [
      "Start total = 0. Add each: 0 + (−3) = −3, then −3 + 0 = −3, then −3 + 5 = 2, then 2 + 8 = 10, then 10 + 2 = 12.",
      "After the loop, total = 12.",
      "Count the values: there are 5 temperatures.",
      "Average = total ÷ count = 12 ÷ 5 = 2.4."
    ],
    answer: "Total = 12; average = 2.4."
  },
  items: [
    {
      id: "g6.winter.code.w5.d4.q1",
      type: "numeric",
      stem: "A loop starts with total = 0 and adds each value in temps = [4, 0, -2, 6, 2]. What is total after the loop finishes?",
      answer: 10,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Add the values one at a time, starting from 0.",
        "0 + 4 = 4, + 0 = 4, + (−2) = 2, + 6 = 8, + 2 = 10.",
        "The running total ends at 10."
      ],
      explanation: "4 + 0 + (−2) + 6 + 2 = 10."
    },
    {
      id: "g6.winter.code.w5.d4.q2",
      type: "numeric",
      stem: "This loop finds the MAX: 'biggest' starts at the first value, then updates whenever a later value is larger. For temps = [-3, 0, 5, 8, 2], what is biggest at the end?",
      answer: 8,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Start biggest = −3, then compare each next value.",
        "0 > −3 so biggest = 0; 5 > 0 so biggest = 5; 8 > 5 so biggest = 8.",
        "2 is not greater than 8, so biggest stays 8."
      ],
      explanation: "The largest value in the list is 8, so biggest ends at 8.",
      misconceptionsTargeted: ["loop-keeps-last-not-max"]
    },
    {
      id: "g6.winter.code.w5.d4.q3",
      type: "numeric",
      stem: "After a loop sums temps = [6, 6, 0, 4] into total, the code computes average = total ÷ count. What is the average?",
      answer: 4,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "First finish the total: 6 + 6 + 0 + 4.",
        "Total = 16, and the count is 4 values.",
        "Average = 16 ÷ 4 = 4."
      ],
      explanation: "Total = 16, count = 4, so average = 16 ÷ 4 = 4."
    },
    {
      id: "g6.winter.code.w5.d4.q4",
      type: "multiple_choice",
      stem: "In an averaging program, where must the 'divide by count' step go?",
      choices: [
        "Inside the loop, after every single value is added",
        "It doesn't matter where it goes",
        "Before the loop starts, while total is still 0",
        "After the loop finishes, once the total is complete"
      ],
      answerIndex: 3,
      explanation: "You can only divide by the count once the loop has finished adding every value; dividing inside the loop uses an incomplete total.",
      hintLadder: [
        "The average needs the FULL total first.",
        "Is the total complete before the loop ends?",
        "Divide only after the loop has added everything."
      ],
      misconceptionsTargeted: ["average-inside-loop"]
    },
    {
      id: "g6.winter.code.w5.d4.q5",
      type: "short_answer",
      stem: "Describe, in plain steps, how you would write a loop to find the COLDEST temperature (the minimum) in a list. What variable do you keep, and how does it change?",
      rubric: {
        level3: "Keeps a 'coldest' (min) variable set to the first value, loops through the rest, and updates coldest whenever a value is SMALLER, ending with the minimum — clearly and in order.",
        level2: "Has the right idea but the update rule or starting value is vague or slightly off.",
        level1: "No clear loop/variable logic, or describes the wrong operation."
      },
      exemplar: "I'd make a variable 'coldest' and set it to the first temperature. Then I loop through the rest of the list, and each time a value is SMALLER than coldest, I set coldest to that value. When the loop ends, coldest holds the minimum — the coldest day.",
      hintLadder: [
        "It's like finding the max, but you flip the comparison.",
        "Start 'coldest' at the first value.",
        "Update it whenever a value is SMALLER, not larger."
      ]
    }
  ],
  reflectionPrompt: "A loop let you analyze a whole winter of data in one pass. What's another real list you'd love a loop to crunch for you — and would you want its total, average, max, or min?",
  misconceptionBank: [
    {
      id: "average-inside-loop",
      label: "Divides for the average before the loop finishes",
      description: "Computes total ÷ count inside the loop, using an incomplete total each pass.",
      coachMove: "Separate the two jobs: 'First the loop builds the WHOLE total, THEN — outside the loop — divide once by the count.'"
    },
    {
      id: "loop-keeps-last-not-max",
      label: "Thinks the max is just the last value visited",
      description: "Assumes the final value the loop sees is the biggest, instead of comparing and keeping the largest.",
      coachMove: "Walk through with a value that dips at the end (like ...8, 2): show that 'biggest' must be compared and kept, not overwritten by the last item."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Loop",
      prompt:
        "A loop runs on temps = [2, -4, 6, -4, 6] with total starting at 0, adding each value. What is total at the end? Trace it step by step before you peek!",
      answer:
        "0 + 2 = 2, + (−4) = −2, + 6 = 4, + (−4) = 0, + 6 = 6. The total is 6. The two −4s and one of the 6s cancel, leaving 6.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pseudocode a Weather Analyzer",
      challenge:
        "Write pseudocode (plain-language code steps) for a program that reads a list of daily temperatures and prints the TOTAL, the AVERAGE, and the WARMEST day. Then hand-trace it on a small list of 5 temperatures to prove it works.",
      steps: [
        "Write the setup lines: 'total = 0' and 'biggest = the first temperature.'",
        "Write the loop: 'for each temp in the list: add it to total; if temp > biggest, set biggest = temp.'",
        "After the loop: 'average = total ÷ count' and 'print total, average, biggest.'",
        "Pick 5 temperatures and trace your pseudocode line by line to check the outputs."
      ],
      deliverable: "A pseudocode listing for a temperature analyzer plus a hand-trace table showing total, average, and max for a 5-value test list.",
      choiceBoard: [
        "Write the pseudocode and trace table on paper.",
        "Type it as real code in a block editor (Scratch) or Python and run it.",
        "Draw a flowchart of the loop with the 'add to total' and 'update biggest' steps shown."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.code.w5.d4.arena1",
          type: "numeric",
          stem: "A loop sums temps = [-1, -1, 3, 4, 0] into total (starting at 0), then computes average = total ÷ count. What is the AVERAGE?",
          answer: 1,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "First get the total: −1 − 1 + 3 + 4 + 0.",
            "Total = 5, and there are 5 values.",
            "Average = 5 ÷ 5 = 1."
          ],
          explanation: "Total = −1 − 1 + 3 + 4 + 0 = 5, count = 5, so average = 5 ÷ 5 = 1."
        },
        {
          id: "g6.winter.code.w5.d4.arena2",
          type: "numeric",
          stem: "A loop has a counter that starts at 0 and adds 1 every time it finds a BELOW-ZERO temperature. For temps = [-2, 3, -5, 0, -1, 4], what is the counter at the end?",
          answer: 3,
          tolerance: 0,
          unit: "days",
          hintLadder: [
            "Only count values LESS than 0. Is 0 below zero? No.",
            "Below-zero values: −2, −5, and −1.",
            "That's 3 below-zero temperatures, so the counter ends at 3."
          ],
          explanation: "The below-zero values are −2, −5, and −1 (zero does not count), so the counter reaches 3."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop It Out",
      prompt:
        "Do your own movement loop: 'for 4 rounds, do 3 arm circles, then 1 deep knee bend.' Count each round out loud like a loop counter — round 1, round 2, round 3, round 4 — then stop when the loop is done.",
      scienceTieIn:
        "Counting reps out loud is exactly how a loop counter works, and the movement pumps oxygen-rich blood to your brain so you can trace the next bit of code more clearly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You taught a loop to crunch a whole winter of data in one pass. What is a task you repeat in real life that a 'loop' could handle for you?",
      badge: { id: "winter-loop-analyst", name: "Winter Loop Analyst", emoji: "🔁" },
      estimatedMinutes: 7
    }
  }
};
