// Grade 7 Coding/CS/AI — Spring Expedition, Week 5 (Measuring Change), Day 4.
// Grade-7 counterpart of springG6CodingW5D4 (loop a list for total/max/avg),
// pitched one level up: package the analysis into a reusable FUNCTION with a
// parameter and a return value, and work with a DICTIONARY (key–value data
// structure) mapping days to heights.

export const springG7CodingW5D4 = {
  id: "g7.spring.code.w5.d4",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Functions and data structures to analyze a growth dataset",
  topicTag: "loop-analyze-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-16"],
  hook: "Last year you wrote one loop to crunch one list. This year you package that logic into a reusable FUNCTION — give it any list of heights and it returns the total, max, and average change — and you store your data in a DICTIONARY that maps each day to its height. Write it once, call it on any plant.",
  miniLesson: [
    "A FUNCTION is reusable code with a name, a parameter (input), and a return value (output). growthRate(heights) can take ANY list and return a result, so you never rewrite the loop — you just call growthRate(plantA) or growthRate(plantB).",
    "A DICTIONARY (also called a map or object) stores KEY–VALUE pairs, like {day1: 3, day2: 7, day3: 12}. You look up a value by its key: data['day3'] returns 12. This is handier than a plain list when each measurement needs a label (its day).",
    "Functions compose: a summarize(heights) function can call helper functions like totalChange(heights) and averageChange(heights) inside it and RETURN a package of results. Number of day-to-day steps is still (length − 1), and average change = total change ÷ steps — but now the function computes and returns it for any input."
  ],
  workedExample: {
    prompt: "A function averageChange(heights) returns (last − first) ÷ (number of heights − 1). What does averageChange([3, 7, 12, 20]) return?",
    steps: [
      "The parameter heights receives the list [3, 7, 12, 20].",
      "Total change = last − first = 20 − 3 = 17.",
      "Number of steps = length − 1 = 4 − 1 = 3.",
      "Return total ÷ steps = 17 ÷ 3 ≈ 5.67, so the function returns about 5.67 cm per step."
    ],
    answer: "It returns 17 ÷ 3 ≈ 5.67 cm per step."
  },
  items: [
    {
      id: "g7.spring.code.w5.d4.q1",
      type: "numeric",
      stem: "A function totalChange(heights) returns (last value − first value). What does totalChange([5, 9, 14, 22, 30]) return, in cm?",
      answer: 25,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "The function returns last − first.",
        "Last = 30, first = 5.",
        "30 − 5 = 25."
      ],
      explanation: "totalChange returns 30 − 5 = 25 cm."
    },
    {
      id: "g7.spring.code.w5.d4.q2",
      type: "numeric",
      stem: "A function averageChange(heights) returns (last − first) ÷ (length − 1). What does averageChange([4, 10, 13, 25]) return, in cm per step?",
      answer: 7,
      tolerance: 0,
      unit: "cm per step",
      hintLadder: [
        "Total change = last − first = 25 − 4 = 21.",
        "Steps = length − 1 = 4 − 1 = 3.",
        "21 ÷ 3 = 7 cm per step."
      ],
      explanation: "averageChange returns (25 − 4) ÷ (4 − 1) = 21 ÷ 3 = 7 cm per step.",
      misconceptionsTargeted: ["divide-by-length-not-steps"]
    },
    {
      id: "g7.spring.code.w5.d4.q3",
      type: "numeric",
      stem: "A dictionary stores heights = {'day1': 5, 'day2': 8, 'day3': 14, 'day4': 20}. Your code computes heights['day4'] − heights['day2']. What value does it return, in cm?",
      answer: 12,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Look up each key's value in the dictionary.",
        "heights['day4'] = 20 and heights['day2'] = 8.",
        "20 − 8 = 12."
      ],
      explanation: "Dictionary lookups give heights['day4'] = 20 and heights['day2'] = 8; 20 − 8 = 12 cm."
    },
    {
      id: "g7.spring.code.w5.d4.q4",
      type: "multiple_choice",
      stem: "Why write the growth analysis as a FUNCTION growthRate(heights) instead of copying the same loop for each plant?",
      choices: [
        "Functions make the numbers bigger",
        "You write the logic once and reuse it by calling growthRate on any list, so it's shorter and less error-prone",
        "Functions can only run one time",
        "A dictionary can't be used with a loop"
      ],
      answerIndex: 1,
      explanation: "A function packages the logic once; calling it with different arguments (growthRate(plantA), growthRate(plantB)) reuses that code, avoiding copy-paste bugs and keeping the program short.",
      hintLadder: [
        "What problem does copy-pasting the same loop cause?",
        "What does a function let you do with one piece of logic?",
        "Reuse: write once, call many times with different inputs."
      ]
    },
    {
      id: "g7.spring.code.w5.d4.q5",
      type: "short_answer",
      stem: "In plain words, describe how you'd write a function summarize(heights) that RETURNS the total change, the biggest single change, and the average change — mentioning its parameter and what it returns.",
      rubric: {
        level3: "Describes a function with a parameter (the list), a loop over neighboring pairs to get differences, tracking a running total and a 'biggest so far,' computing average as total ÷ (length − 1), and RETURNING all three values as a package (list/dictionary).",
        level2: "Describes the loop and computations but is vague about the parameter or the return value (how results get back out).",
        level1: "No clear parameter/return structure, or missing the key computations."
      },
      exemplar: "Define summarize(heights) where heights is the parameter — any list of numbers. Set total to last − first and biggest to 0. Loop through neighboring pairs computing each next − current difference; whenever a difference is bigger than 'biggest,' update it. Compute average as total ÷ (length − 1). Finally, RETURN all three — for example as a dictionary {'total': total, 'max': biggest, 'average': average} — so the caller gets the whole summary from one call.",
      hintLadder: [
        "What goes in as the parameter, and what comes back as the return value?",
        "How does the loop find each difference and keep the biggest?",
        "How do you send all three results back out together?"
      ]
    }
  ],
  reflectionPrompt: "If you had growth data for 50 plants, how would writing ONE growthRate function (instead of 50 loops) change how much code you write — and how many places a bug could hide?",
  misconceptionBank: [
    {
      id: "divide-by-length-not-steps",
      label: "Divides by the list length instead of the number of steps",
      description: "Computes average change by dividing by how many heights there are, instead of by (length − 1), the number of gaps between them.",
      coachMove: "Average CHANGE divides by the number of changes. A list of 4 heights has only 3 steps, so the function must divide by length − 1, not length."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "What Does the Function Return?",
      prompt:
        "A function averageChange(heights) returns (last − first) ÷ (length − 1). You call averageChange([2, 5, 8, 11]). Trace it: what number comes back?",
      answer:
        "Total change = 11 − 2 = 9. Steps = length − 1 = 4 − 1 = 3. Return 9 ÷ 3 = 3. The function returns 3 cm per step.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Reusable Growth Function",
      challenge:
        "Write pseudocode for a function summarize(heights) that takes a list (or dictionary of day→height) and RETURNS the total change, biggest change, and average change — then call your function on two different plants to prove it's reusable.",
      materials: ["Paper or a device", "Two small lists of heights to test on"],
      steps: [
        "Write the function header with a clear parameter name, like summarize(heights).",
        "Inside, loop through neighboring pairs to get differences; track a running total and a 'biggest so far.'",
        "Compute average = total ÷ (length − 1), then RETURN all three results together (a list or dictionary).",
        "Below the function, CALL it twice on two different plant lists and hand-trace both returns to check it works."
      ],
      deliverable: "Pseudocode for a summarize(heights) function plus two example calls with hand-traced return values.",
      choiceBoard: [
        "Write the function as labeled pseudocode with a header, body, and return line.",
        "Draw a flowchart showing the input parameter flowing to the returned output.",
        "Write it in real code (Python or blocks) with two function calls if you're ready."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Function Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.code.w5.d4.arena1",
          type: "numeric",
          stem: "Function averageChange(heights) returns (last − first) ÷ (length − 1). What does averageChange([6, 9, 12, 15, 26]) return, in cm per step?",
          answer: 5,
          tolerance: 0,
          unit: "cm per step",
          hintLadder: [
            "Total change = last − first = 26 − 6 = 20.",
            "Steps = length − 1 = 5 − 1 = 4.",
            "20 ÷ 4 = 5 cm per step."
          ],
          explanation: "averageChange returns (26 − 6) ÷ (5 − 1) = 20 ÷ 4 = 5 cm per step."
        },
        {
          id: "g7.spring.code.w5.d4.arena2",
          type: "numeric",
          stem: "A dictionary heights = {'d1': 3, 'd2': 7, 'd3': 16, 'd4': 22}. A function maxChange loops neighboring days and returns the biggest (next − current) difference. What does it return, in cm?",
          answer: 9,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Compute each neighboring difference: 7−3, 16−7, 22−16.",
            "That gives changes of 4, 9, and 6.",
            "The biggest is 9."
          ],
          explanation: "Day-to-day changes are 7−3=4, 16−7=9, 22−16=6; the max is 9 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Call the Function",
      prompt:
        "Be a function! 'Input' by cupping your hands to catch a list, do 3 quick 'processing' arm-crunches, then 'return' by pushing both hands forward to hand back the answer. Now 'call' yourself again with a new input and repeat. Do 4 calls total.",
      scienceTieIn:
        "Repeating the same input–process–return motion mirrors how a function reuses one routine — and the movement bursts refresh the focus you need to trace code accurately.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Functions let you name a piece of logic and reuse it anywhere. What everyday task do you repeat so often that you'd love to package it into a 'function' and just call it? What would its input and output be?",
      badge: { id: "g7-spring-function-forge", name: "Function Forger", emoji: "🛠️" },
      estimatedMinutes: 7
    }
  }
};
