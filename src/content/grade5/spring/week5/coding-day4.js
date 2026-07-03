// Grade 5 Coding/CS/AI — Spring Expedition, Week 5 (Measuring Change), Day 4.
// Grade 5 counterpart of g6.spring.code.w5.d4. Same topic (analyze a growth
// dataset with code) pitched down to Grade 5: everyday/block-style pseudocode
// and simple whole-number totals and averages — NO rate-of-change formula.

export const springG5CodingW5D4 = {
  id: "g5.spring.code.w5.d4",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Analyze a growth dataset with code",
  topicTag: "loop-analyze-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-08"],
  hook: "You measured a plant every day and now you have a list of numbers. Instead of doing the math by hand, you can build a loop that walks through the whole list and tells you how much the plant grew and the biggest jump. Today you follow that loop step by step.",
  miniLesson: [
    "A DATASET is just a list of measurements, like heights = [2, 4, 7, 10] (each number is a day's height in cm). A LOOP is a set of steps a computer repeats — it visits each number in the list, one at a time.",
    "To find the CHANGE from one day to the next, you subtract: 4 − 2, 7 − 4, and so on. A loop can do all of these subtractions for you, in order.",
    "Two easy summaries: the TOTAL growth = last number − first number. The BIGGEST jump = the largest single day-to-day change. A loop makes both simple, even on a very long list."
  ],
  workedExample: {
    prompt: "heights = [2, 4, 7, 10]. A loop finds each day-to-day change. What are the changes, and what is the total growth?",
    steps: [
      "Subtract each number from the next: 4 − 2 = 2, 7 − 4 = 3, 10 − 7 = 3.",
      "The list of day-to-day changes is [2, 3, 3].",
      "Total growth = last − first = 10 − 2 = 8 (this also equals 2 + 3 + 3 = 8).",
      "So the loop reports day-to-day changes [2, 3, 3] and a total growth of 8 cm."
    ],
    answer: "Day-to-day changes are [2, 3, 3]; total growth is 8 cm."
  },
  items: [
    {
      id: "g5.spring.code.w5.d4.q1",
      type: "numeric",
      stem: "heights = [2, 4, 7, 10]. A loop finds total growth = (last number − first number). What total growth does it print, in cm?",
      answer: 8,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Total growth = last number − first number.",
        "The last number is 10 and the first is 2.",
        "10 − 2 = 8."
      ],
      explanation: "Total growth = 10 − 2 = 8 cm."
    },
    {
      id: "g5.spring.code.w5.d4.q2",
      type: "numeric",
      stem: "For heights = [2, 4, 7, 10], the loop builds a list of day-to-day changes [2, 3, 3]. What is the BIGGEST single day-to-day change?",
      answer: 3,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Look at the list of changes [2, 3, 3].",
        "The biggest is the largest number in that list.",
        "The largest is 3."
      ],
      explanation: "The biggest single change in [2, 3, 3] is 3 cm."
    },
    {
      id: "g5.spring.code.w5.d4.q3",
      type: "numeric",
      stem: "heights = [5, 5, 10, 20]. A loop adds up all the numbers to find the total. What total does it print, in cm?",
      answer: 40,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add every number in the list together.",
        "5 + 5 + 10 + 20.",
        "5 + 5 + 10 + 20 = 40."
      ],
      explanation: "The loop keeps a running total: 5 + 5 + 10 + 20 = 40 cm.",
      misconceptionsTargeted: ["total-vs-growth"]
    },
    {
      id: "g5.spring.code.w5.d4.q4",
      type: "multiple_choice",
      stem: "A list of 5 daily heights has how many day-to-day CHANGES (jumps between neighboring days)?",
      choices: ["5 changes", "4 changes", "6 changes", "1 change"],
      answerIndex: 1,
      explanation: "Each change compares two neighboring days, so a list of 5 numbers has 5 − 1 = 4 gaps between them, which makes 4 changes.",
      hintLadder: [
        "A change compares one day to the next.",
        "Count the GAPS between numbers, not the numbers themselves.",
        "5 numbers have 4 gaps, so 4 changes."
      ]
    },
    {
      id: "g5.spring.code.w5.d4.q5",
      type: "short_answer",
      stem: "In plain words, describe the steps a loop would take to find the BIGGEST single day-to-day change in a list of plant heights.",
      rubric: {
        level3: "Describes looping through the list comparing each day to the next, subtracting to get each change, and keeping track of the largest change seen so far (updating a 'biggest' as it goes).",
        level2: "Mentions looping and subtracting to get changes but the 'keep the biggest' step is vague or missing.",
        level1: "No clear loop or no way of finding the biggest."
      },
      exemplar: "Start with a box called 'biggest' set to 0. Loop through the list and, for each pair of neighboring days, do next − current to get the change. Each time a change is larger than 'biggest,' put that change in 'biggest.' When the loop ends, 'biggest' holds the largest single day-to-day change.",
      hintLadder: [
        "How does the loop get each day-to-day change?",
        "How do you remember the largest one as you go?",
        "Describe updating a 'biggest so far' box."
      ]
    }
  ],
  reflectionPrompt: "If your dataset had 1,000 daily measurements instead of 4, why would a loop be so much better than doing all the subtractions by hand?",
  misconceptionBank: [
    {
      id: "total-vs-growth",
      label: "Mixes up the total of the numbers with the total growth",
      description: "Adds up all the heights when the question asks how much the plant GREW (which is last − first), or subtracts when the question asks for the sum.",
      coachMove: "Read the word carefully: 'total growth' means last − first (how much taller it got), while 'total' or 'sum' means add every number. They are different jobs for the loop."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Follow the Loop",
      prompt:
        "A loop walks through heights = [3, 6, 8] and prints each day-to-day change (next − current). What two numbers does it print, and what is the total growth? Try it before you peek!",
      answer:
        "It prints 6 − 3 = 3, then 8 − 6 = 2. The changes are 3 and 2. Total growth = last − first = 8 − 3 = 5 (which also equals 3 + 2 = 5).",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write Growth-Finder Steps",
      challenge:
        "Write your own step-by-step 'code steps' (pseudocode in plain words) for a program that takes a list of plant heights and prints the total growth and the biggest jump — then test it by hand on a short list of 4 numbers.",
      materials: ["Paper or a device", "A short list of 4 numbers to test with"],
      steps: [
        "Write a line that stores your list of heights.",
        "Write a loop that goes through neighboring days and finds each next − current change.",
        "Add steps to keep a 'biggest' box and update it whenever a change is larger.",
        "At the end, print the total growth (last − first) and the biggest jump — then follow your steps by hand on your test list to check it works."
      ],
      deliverable: "Plain-word code steps for a growth finder plus a hand-trace on a 4-number list showing the total growth and the biggest jump.",
      choiceBoard: [
        "Write the code steps as a numbered list.",
        "Draw a flowchart of the loop with a 'total' box and a 'biggest' box.",
        "Build it in Scratch or blocks if you are ready."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.code.w5.d4.arena1",
          type: "numeric",
          stem: "heights = [3, 6, 6, 12]. A loop finds total growth = (last number − first number). What total growth does it print, in cm?",
          answer: 9,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Total growth = last − first.",
            "The last number is 12 and the first is 3.",
            "12 − 3 = 9."
          ],
          explanation: "Total growth = 12 − 3 = 9 cm."
        },
        {
          id: "g5.spring.code.w5.d4.arena2",
          type: "numeric",
          stem: "For heights = [3, 6, 6, 12], the day-to-day changes are [3, 0, 6]. What is the BIGGEST single change the loop reports, in cm?",
          answer: 6,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "First find each change: 6 − 3, 6 − 6, 12 − 6.",
            "That gives the list [3, 0, 6].",
            "The largest number in [3, 0, 6] is 6."
          ],
          explanation: "Changes are [3, 0, 6]; the biggest single change is 6 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop the Data",
      prompt:
        "Be the loop! Line up 4 spots on the floor. 'Step' from spot to spot, and at each move call out how much you 'grew' with a bigger arm-raise each time. After the last spot, throw your arms up for the 'biggest jump.' Repeat twice.",
      scienceTieIn:
        "Repeating a simple movement in a set pattern is exactly what a loop does with data — and the quick burst of activity refreshes your focus for the next trace.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Loops let a computer handle huge lists of measurements in a blink. What real list of numbers would you love a program to analyze for you — steps, game scores, or minutes read? What would you ask it to find?",
      badge: { id: "g5-spring-growth-loop-tracer", name: "Growth Loop Tracer", emoji: "🔁" },
      estimatedMinutes: 7
    }
  }
};
