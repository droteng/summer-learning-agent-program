// Grade 6 Coding/CS/AI — Spring Expedition, Week 5 (Measuring Change), Day 4.
// Topic: analyze a growth dataset with code — loop a list of measurements to
// find total change, biggest change, and average change.

export const springG6CodingW5D4 = {
  id: "g6.spring.code.w5.d4",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Analyze a growth dataset with code",
  topicTag: "loop-analyze-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-DA-08"],
  hook: "You measured a plant every day and now you have a list of numbers. Instead of doing the math by hand, you can write a loop that walks through the whole list and tells you the total growth, the biggest jump, and the average change. Today you trace that code.",
  miniLesson: [
    "A dataset is just a list of measurements, like heights = [2, 5, 9, 14, 20] (each is a day's height in cm). A LOOP visits each value in the list one at a time.",
    "To find the change between days, you subtract each height from the next one: 5 − 2, 9 − 5, and so on. A loop can compute all these day-to-day changes automatically.",
    "Common summaries: TOTAL change = last value − first value; the MAX (biggest) single change = the largest jump between two days; the AVERAGE change = total change ÷ number of steps. Loops make these easy on long lists."
  ],
  workedExample: {
    prompt: "heights = [2, 5, 9, 14, 20]. A loop finds each day-to-day change. What are the changes, and what is the total change?",
    steps: [
      "Subtract each height from the next: 5 − 2 = 3, 9 − 5 = 4, 14 − 9 = 5, 20 − 14 = 6.",
      "The list of daily changes is [3, 4, 5, 6].",
      "Total change = last − first = 20 − 2 = 18 (this also equals 3 + 4 + 5 + 6 = 18).",
      "So the loop reports daily changes [3, 4, 5, 6] and a total change of 18 cm."
    ],
    answer: "Daily changes are [3, 4, 5, 6]; total change is 18 cm."
  },
  items: [
    {
      id: "g6.spring.code.w5.d4.q1",
      type: "numeric",
      stem: "heights = [2, 5, 9, 14, 20]. A loop computes total change as (last value − first value). What total change does it output, in cm?",
      answer: 18,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Total change = last value − first value.",
        "The last value is 20 and the first is 2.",
        "20 − 2 = 18."
      ],
      explanation: "Total change = 20 − 2 = 18 cm."
    },
    {
      id: "g6.spring.code.w5.d4.q2",
      type: "numeric",
      stem: "For heights = [2, 5, 9, 14, 20], the loop builds a list of day-to-day changes [3, 4, 5, 6]. What is the MAX (biggest) single day-to-day change?",
      answer: 6,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Look at the list of changes [3, 4, 5, 6].",
        "The max is the largest number in that list.",
        "The largest is 6."
      ],
      explanation: "The biggest single change in [3, 4, 5, 6] is 6 cm."
    },
    {
      id: "g6.spring.code.w5.d4.q3",
      type: "numeric",
      stem: "Using total change = 18 cm over the 4 day-to-day steps, the loop computes average change = total ÷ number of steps. What is the average change, in cm per step?",
      answer: 4.5,
      tolerance: 0,
      unit: "cm per step",
      hintLadder: [
        "Average change = total change ÷ number of steps.",
        "Total change is 18 and there are 4 steps.",
        "18 ÷ 4 = 4.5."
      ],
      explanation: "Average change = 18 ÷ 4 = 4.5 cm per step.",
      misconceptionsTargeted: ["divide-by-count-not-steps"]
    },
    {
      id: "g6.spring.code.w5.d4.q4",
      type: "multiple_choice",
      stem: "A list of 6 daily heights has how many day-to-day CHANGES (differences between neighboring days)?",
      choices: ["6 changes", "7 changes", "5 changes", "1 change"],
      answerIndex: 2,
      explanation: "Each change compares two neighboring days, so a list of 6 values has 6 − 1 = 5 gaps between them, giving 5 changes.",
      hintLadder: [
        "A change compares one day to the next.",
        "Count the GAPS between values, not the values themselves.",
        "6 values have 5 gaps, so 5 changes."
      ]
    },
    {
      id: "g6.spring.code.w5.d4.q5",
      type: "short_answer",
      stem: "In plain words, describe the steps a loop would take to find the BIGGEST single day-to-day change in a list of plant heights.",
      rubric: {
        level3: "Describes looping through neighboring pairs, computing each next−current difference, and keeping track of the largest one seen (updating a 'biggest so far' as it goes).",
        level2: "Mentions looping and computing differences but the 'keep the largest' step is vague or missing.",
        level1: "No clear loop or no way of finding the biggest."
      },
      exemplar: "Start with a 'biggest' set to 0. Loop through the list comparing each day to the next: compute next − current. Each time that difference is larger than 'biggest,' replace 'biggest' with it. After the loop finishes, 'biggest' holds the largest single day-to-day change.",
      hintLadder: [
        "How does the loop get each day-to-day change?",
        "How do you remember the largest one as you go?",
        "Describe updating a 'biggest so far' variable."
      ]
    }
  ],
  reflectionPrompt: "If your dataset had 1,000 daily measurements instead of 5, why would a loop be so much better than doing the subtractions by hand?",
  misconceptionBank: [
    {
      id: "divide-by-count-not-steps",
      label: "Divides by the number of measurements instead of the number of steps",
      description: "Computes average change by dividing by how many heights there are, instead of by the number of gaps (steps) between them.",
      coachMove: "Remember: average CHANGE divides by the number of changes. A list of 5 heights has only 4 changes, so divide the total change by 4, not 5."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Loop",
      prompt:
        "A loop walks through heights = [3, 7, 10] and prints each day-to-day change (next − current). What two numbers does it print, and what's the total change? Trace it before you peek!",
      answer:
        "It prints 7 − 3 = 4, then 10 − 7 = 3. The changes are 4 and 3. Total change = last − first = 10 − 3 = 7 (which also equals 4 + 3 = 7).",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write Growth-Analyzer Pseudocode",
      challenge:
        "Write pseudocode (plain-language 'code steps') for a program that takes a list of plant heights and reports the total change, the biggest single change, and the average change — then test it by hand on a small list.",
      materials: ["Paper or a device", "A small list of 5 numbers to test with"],
      steps: [
        "Write a line that stores your list of heights.",
        "Write a loop that goes through neighboring pairs and computes each next − current change.",
        "Add steps to keep a running total, track the biggest change, and count the steps.",
        "At the end, print total change, biggest change, and total ÷ steps for the average — then trace it on your test list to check it works."
      ],
      deliverable: "Pseudocode for a growth analyzer plus a hand-trace on a 5-number list showing the total, max, and average change.",
      choiceBoard: [
        "Write the pseudocode as numbered steps.",
        "Draw a flowchart of the loop with the total/max/average boxes.",
        "Write it in real code (Scratch, Python, or blocks) if you're ready."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.code.w5.d4.arena1",
          type: "numeric",
          stem: "heights = [4, 6, 12, 15]. A loop computes each day-to-day change and finds the average change = total change ÷ number of steps. What is the average change, in cm per step?",
          answer: 3.666666667,
          tolerance: 0.05,
          unit: "cm per step",
          hintLadder: [
            "Total change = last − first = 15 − 4 = 11.",
            "Number of steps = 4 heights − 1 = 3 steps.",
            "11 ÷ 3 ≈ 3.67 cm per step."
          ],
          explanation: "Total change = 15 − 4 = 11 cm over 3 steps; average = 11 ÷ 3 ≈ 3.67 cm per step."
        },
        {
          id: "g6.spring.code.w5.d4.arena2",
          type: "numeric",
          stem: "For heights = [4, 6, 12, 15], the day-to-day changes are [2, 6, 3]. What is the MAX single change the loop reports, in cm?",
          answer: 6,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "First find each change: 6 − 4, 12 − 6, 15 − 12.",
            "That gives the list [2, 6, 3].",
            "The largest value in [2, 6, 3] is 6."
          ],
          explanation: "Changes are [2, 6, 3]; the biggest single change is 6 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop the Data",
      prompt:
        "Be the loop! Line up 5 spots on the floor (steps counting up). 'Step' from spot to spot, and at each move call out how much you 'grew' (a bigger arm-raise each time). After the last spot, throw your arms up for the 'biggest change.' Repeat twice.",
      scienceTieIn:
        "Repeating a simple movement in a set pattern is what a loop does with data — and the burst of activity refreshes your focus for the next trace.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Loops let a computer handle huge lists of measurements in a blink. What real dataset would you love to have a program analyze for you — steps, game scores, weather? What would you ask it to find?",
      badge: { id: "spring-data-loop-analyst", name: "Data Loop Analyst", emoji: "🔁" },
      estimatedMinutes: 7
    }
  }
};
