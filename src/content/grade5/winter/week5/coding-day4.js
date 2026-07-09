// Grade 5 Coding/CS/AI — Winter Expedition, Week 5 (Data in the Cold),
// Day 4. Topic: analyze a dataset with a loop — walk a list of temperatures
// to find the max, total, and average. Pitched DOWN from Grade 6: everyday
// block-style pseudocode, positive whole-number temps, whole-number averages.

export const winterG5CodingW5D4 = {
  id: "g5.winter.code.w5.d4",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Analyze a temperature dataset with a loop (max, total, average)",
  topicTag: "loops-data-analysis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "A weather station hands you a whole winter of temperature readings. Doing the math by hand would take forever — so you teach a LOOP to do it. Today you trace block-style code that walks through a list of temperatures and reports the total, the average, and the warmest day.",
  miniLesson: [
    "A LOOP repeats an action once for each item in a list. To add up a list, start a box called 'total' at 0, and each time the loop visits a number, add it to total.",
    "To find the MAX (warmest), keep a box called 'biggest' and change it whenever the number you are on is larger. To find the AVERAGE, divide the total by how many numbers there are (the count).",
    "Order matters: finish the loop to get the WHOLE total FIRST, then divide by the count to get the average. Dividing too early gives the wrong answer."
  ],
  workedExample: {
    prompt: "temps = [3, 5, 7, 4, 1]. A loop adds each one to 'total' (starting at 0). What is the total, and what is the average?",
    steps: [
      "Start total = 0. Add each: 0 + 3 = 3, then 3 + 5 = 8, then 8 + 7 = 15, then 15 + 4 = 19, then 19 + 1 = 20.",
      "After the loop, total = 20.",
      "Count the numbers: there are 5 temperatures.",
      "Average = total ÷ count = 20 ÷ 5 = 4."
    ],
    answer: "Total = 20; average = 4."
  },
  items: [
    {
      id: "g5.winter.code.w5.d4.q1",
      type: "numeric",
      stem: "A loop starts with total = 0 and adds each value in temps = [4, 3, 5, 6, 2]. What is total after the loop finishes?",
      answer: 20,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Add the values one at a time, starting from 0.",
        "0 + 4 = 4, + 3 = 7, + 5 = 12, + 6 = 18, + 2 = 20.",
        "The running total ends at 20."
      ],
      explanation: "4 + 3 + 5 + 6 + 2 = 20."
    },
    {
      id: "g5.winter.code.w5.d4.q2",
      type: "numeric",
      stem: "This loop finds the MAX: 'biggest' starts at the first value, then changes whenever a later value is larger. For temps = [3, 7, 5, 9, 2], what is biggest at the end?",
      answer: 9,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Start biggest = 3, then compare each next value.",
        "7 > 3 so biggest = 7; 5 is not bigger; 9 > 7 so biggest = 9.",
        "2 is not greater than 9, so biggest stays 9."
      ],
      explanation: "The largest value in the list is 9, so biggest ends at 9.",
      misconceptionsTargeted: ["loop-keeps-last-not-max"]
    },
    {
      id: "g5.winter.code.w5.d4.q3",
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
      id: "g5.winter.code.w5.d4.q4",
      type: "multiple_choice",
      stem: "In an averaging program, where must the 'divide by count' step go?",
      choices: [
        "Inside the loop, after every single value is added",
        "Before the loop starts, while total is still 0",
        "After the loop finishes, once the total is complete",
        "It does not matter where it goes"
      ],
      answerIndex: 2,
      explanation: "You can only divide by the count once the loop has finished adding every value; dividing inside the loop uses an incomplete total.",
      hintLadder: [
        "The average needs the FULL total first.",
        "Is the total complete before the loop ends?",
        "Divide only after the loop has added everything."
      ],
      misconceptionsTargeted: ["average-inside-loop"]
    },
    {
      id: "g5.winter.code.w5.d4.q5",
      type: "short_answer",
      stem: "Describe, in plain steps, how you would write a loop to find the COLDEST temperature (the smallest) in a list. What box do you keep, and how does it change?",
      rubric: {
        level3: "Keeps a 'coldest' (smallest) box set to the first value, loops through the rest, and changes coldest whenever a value is SMALLER, ending with the smallest — clearly and in order.",
        level2: "Has the right idea but the change rule or starting value is vague or slightly off.",
        level1: "No clear loop/box logic, or describes the wrong operation."
      },
      exemplar: "I would make a box called 'coldest' and set it to the first temperature. Then I loop through the rest of the list, and each time a value is SMALLER than coldest, I set coldest to that value. When the loop ends, coldest holds the smallest number — the coldest day.",
      hintLadder: [
        "It is like finding the max, but you flip the comparison.",
        "Start 'coldest' at the first value.",
        "Change it whenever a value is SMALLER, not larger."
      ]
    }
  ],
  reflectionPrompt: "A loop let you analyze a whole winter of data in one pass. What is another real list you would love a loop to crunch for you — and would you want its total, average, max, or min?",
  misconceptionBank: [
    {
      id: "average-inside-loop",
      label: "Divides for the average before the loop finishes",
      description: "Computes total ÷ count inside the loop, using an incomplete total each time around.",
      coachMove: "Separate the two jobs: 'First the loop builds the WHOLE total, THEN — outside the loop — divide once by the count.'"
    },
    {
      id: "loop-keeps-last-not-max",
      label: "Thinks the max is just the last value visited",
      description: "Assumes the final value the loop sees is the biggest, instead of comparing and keeping the largest.",
      coachMove: "Walk through with a list that dips at the end (like ...9, 2): show that 'biggest' must be compared and kept, not replaced by the last item."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Loop",
      prompt:
        "A loop runs on temps = [2, 4, 6, 4, 4] with total starting at 0, adding each value. What is total at the end? Trace it step by step before you peek!",
      answer:
        "0 + 2 = 2, + 4 = 6, + 6 = 12, + 4 = 16, + 4 = 20. The total is 20.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pseudocode a Weather Analyzer",
      challenge:
        "Write block-style pseudocode (plain-language code steps) for a program that reads a list of daily temperatures and prints the TOTAL, the AVERAGE, and the WARMEST day. Then hand-trace it on a small list of 5 temperatures to prove it works.",
      steps: [
        "Write the setup lines: 'set total to 0' and 'set biggest to the first temperature.'",
        "Write the loop: 'for each temp in the list: add it to total; if temp is bigger than biggest, set biggest to temp.'",
        "After the loop: 'set average to total ÷ count' and 'print total, average, biggest.'",
        "Pick 5 temperatures and trace your pseudocode line by line to check the outputs."
      ],
      deliverable: "A block-style pseudocode listing for a temperature analyzer plus a hand-trace table showing total, average, and max for a 5-value test list.",
      choiceBoard: [
        "Write the pseudocode and trace table on paper.",
        "Build it in a block editor like Scratch and run it.",
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
          id: "g5.winter.code.w5.d4.arena1",
          type: "numeric",
          stem: "A loop sums temps = [5, 3, 2, 4, 6] into total (starting at 0), then computes average = total ÷ count. What is the AVERAGE?",
          answer: 4,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "First get the total: 5 + 3 + 2 + 4 + 6.",
            "Total = 20, and there are 5 values.",
            "Average = 20 ÷ 5 = 4."
          ],
          explanation: "Total = 5 + 3 + 2 + 4 + 6 = 20, count = 5, so average = 20 ÷ 5 = 4."
        },
        {
          id: "g5.winter.code.w5.d4.arena2",
          type: "numeric",
          stem: "A loop has a counter that starts at 0 and adds 1 every time it finds a temperature ABOVE 10. For temps = [12, 8, 15, 6, 11, 4], what is the counter at the end?",
          answer: 3,
          tolerance: 0,
          unit: "days",
          hintLadder: [
            "Only count values GREATER than 10. Is 10 above 10? No.",
            "Above-10 values: 12, 15, and 11.",
            "That is 3 values, so the counter ends at 3."
          ],
          explanation: "The values above 10 are 12, 15, and 11, so the counter reaches 3."
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
      badge: { id: "g5-winter-loop-analyst", name: "Winter Loop Analyst", emoji: "🔁" },
      estimatedMinutes: 7
    }
  }
};
