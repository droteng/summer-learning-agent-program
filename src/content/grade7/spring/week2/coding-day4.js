// Grade 7 Coding/CS/AI — Spring Expedition, Week 2 (Plants & Growth), Day 4.
// Topic: model plant growth with a FUNCTION that loops and stores each day's
// height in a list/array (Grade 7 depth: functions, parameters, return, arrays).

export const springG7CodingW2D4 = {
  id: "g7.spring.code.w2.d4",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Model plant growth with a function and a list of daily heights",
  topicTag: "growth-loop",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-11"],
  hook: "Last time a loop grew one virtual plant. Today you package that loop inside a reusable FUNCTION — give it a start, a rate, and a number of days, and it returns the height. You'll also store each day's height in a list so you can graph the whole growth.",
  miniLesson: [
    "A function is a reusable named block. grow(start, rate, days) takes three PARAMETERS, runs the growth loop inside, and RETURNS the final height — so you can reuse it for any plant.",
    "Inside the function, a loop repeats 'height = height + rate' once per day. The RETURN statement hands the final value back to whoever called the function.",
    "A list (array) stores many values in order. Each day you can append the current height to a list, giving you [day1, day2, ...] — perfect for graphing or checking any day's height by its position (index)."
  ],
  workedExample: {
    prompt: "Trace this function call: grow(start=2, rate=3, days=3). Inside, height starts at 2 and each of the 3 days does height = height + rate, then the function returns height. Also list the daily heights.",
    steps: [
      "Set height = 2 (the start parameter).",
      "Day 1: height = 2 + 3 = 5; list so far [5].",
      "Day 2: height = 5 + 3 = 8; list [5, 8].",
      "Day 3: height = 8 + 3 = 11; list [5, 8, 11]. The function returns 11."
    ],
    answer: "grow(2, 3, 3) returns 11; the daily-height list is [5, 8, 11]."
  },
  items: [
    {
      id: "g7.spring.code.w2.d4.q1",
      type: "numeric",
      stem: "A function grow(start, rate, days) loops 'height = height + rate' once per day and returns the final height. What does grow(4, 5, 3) return?",
      answer: 19,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "start = 4, and each of 3 days adds 5.",
        "4 → 9 → 14 → 19.",
        "It returns 19."
      ],
      explanation: "Starting at 4, three days of +5 give 4 → 9 → 14 → 19, so grow(4, 5, 3) returns 19."
    },
    {
      id: "g7.spring.code.w2.d4.q2",
      type: "multiple_choice",
      stem: "In grow(start, rate, days), what is the purpose of the RETURN statement at the end?",
      choices: [
        "It prints every day's height to the screen",
        "It resets the height to zero",
        "It hands the final computed height back to the code that called the function",
        "It repeats the loop one more time"
      ],
      answerIndex: 2,
      explanation: "A return statement passes the function's result (the final height) back to the caller so it can be stored or used elsewhere.",
      hintLadder: [
        "A function does work, then gives back an answer.",
        "Where does the final height 'go' when the function finishes?",
        "Return hands the value back to the caller."
      ],
      misconceptionsTargeted: ["return-vs-print"]
    },
    {
      id: "g7.spring.code.w2.d4.q3",
      type: "numeric",
      stem: "A program starts height = 0 and, for 6 days, each day appends the new height (after adding 2) to a list. How many numbers are in the list after the 6 days?",
      answer: 6,
      tolerance: 0,
      unit: "items",
      hintLadder: [
        "One height is appended each day.",
        "The loop runs once per day for 6 days.",
        "6 days = 6 items in the list."
      ],
      explanation: "The list gets one value appended per day. Over 6 days that is 6 items: [2, 4, 6, 8, 10, 12]."
    },
    {
      id: "g7.spring.code.w2.d4.q4",
      type: "multiple_choice",
      stem: "Why is writing grow(start, rate, days) as a FUNCTION better than copy-pasting the growth loop each time you model a new plant?",
      choices: [
        "Functions make plants grow faster in real life",
        "You can reuse one tested block for any plant by just changing the arguments, keeping code short and reliable",
        "Functions are the only way a computer can add numbers",
        "There is no benefit — copying the loop is better"
      ],
      answerIndex: 1,
      explanation: "A function lets you reuse one tested block with different inputs (arguments), so you avoid duplicated code and bugs and can model any plant with a single call.",
      hintLadder: [
        "What does a function let you avoid re-writing?",
        "Think about modeling 10 different plants.",
        "One reusable, tested function beats many copied loops."
      ]
    },
    {
      id: "g7.spring.code.w2.d4.q5",
      type: "short_answer",
      stem: "In plain words, describe how grow(1, 3, 5) works step by step (start, the repeated step, and the return), and state the value it returns.",
      rubric: {
        level3: "Describes height starting at 1, a loop running 5 times adding 3 each pass, and a return of the final value, AND gives the correct returned height of 16.",
        level2: "Describes the function idea but the returned value is slightly off or a step (loop or return) is missing.",
        level1: "No clear function/loop description or wrong reasoning."
      },
      exemplar: "The function sets height to the start value 1. It loops 5 times, and each pass does height = height + 3, giving 4, 7, 10, 13, 16. After the loop, it returns height, so grow(1, 3, 5) returns 16.",
      hintLadder: [
        "What value does the start parameter give height?",
        "What single step repeats, and how many times?",
        "Run it: 1 → 4 → 7 → 10 → 13 → 16, then return."
      ]
    }
  ],
  reflectionPrompt: "Real growth slows as a plant matures. What extra PARAMETER could you add to grow() to make the rate change over time instead of staying constant?",
  misconceptionBank: [
    {
      id: "return-vs-print",
      label: "Confuses returning a value with printing it",
      description: "Thinks 'return' displays the result on screen, rather than handing the value back to the caller to store or use.",
      coachMove: "Contrast the two: 'print' shows text to a human; 'return' gives the value back to the program so another line can save it in a variable or a list."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Call the Function",
      prompt:
        "A function grow(start, rate, days) adds 'rate' to the height once per day and returns the final height. Trace grow(3, 4, 4) in your head before you peek — what does it return, and what's the list of daily heights?",
      answer:
        "It returns 19. Height goes 3 → 7 → 11 → 15 → 19, so the daily-height list is [7, 11, 15, 19]. Four days, four appended values.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write a Reusable Growth Function",
      challenge:
        "Write (in words, blocks, or real code) a function grow(start, rate, days) that loops to compute the final height AND builds a list of each day's height. Then 'call' it twice with different arguments and trace both in a table.",
      materials: ["Paper & pencil, OR a block-coding tool, OR any code editor"],
      steps: [
        "Define grow(start, rate, days): set height = start, make an empty list.",
        "Write the loop: repeat 'days' times — height = height + rate, then append height to the list.",
        "Add a return statement that hands back the final height (and/or the list).",
        "Call grow twice with different numbers and fill a trace table (Day, Height) for each call."
      ],
      deliverable: "A grow() function (words/blocks/code) plus trace tables for two different function calls showing the daily-height lists.",
      choiceBoard: [
        "Write the function as numbered steps and fill two trace tables.",
        "Build it in a block-coding tool and screenshot the output list.",
        "Draw a flowchart of the function showing parameters in, the loop, the list append, and the return."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.code.w2.d4.arena1",
          type: "numeric",
          stem: "The function grow(start, rate, days) adds 'rate' once per day for 'days' days and returns the final height. What does grow(5, 3, 7) return?",
          answer: 26,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "start = 5, and 7 days each add 3.",
            "Total added = 7 × 3 = 21.",
            "5 + 21 = 26."
          ],
          explanation: "grow(5, 3, 7) = 5 + (7 × 3) = 5 + 21 = 26."
        },
        {
          id: "g7.spring.code.w2.d4.arena2",
          type: "multiple_choice",
          stem: "Two calls model two plants that both start at 0: grow(0, 2, 10) and grow(0, 5, 4). Which call returns the taller plant?",
          choices: [
            "grow(0, 2, 10) returns 20; grow(0, 5, 4) returns 20 — they tie",
            "grow(0, 2, 10) returns the taller plant at 25",
            "grow(0, 5, 4) returns the taller plant at 25",
            "grow(0, 2, 10) returns 12; grow(0, 5, 4) returns 20"
          ],
          answerIndex: 0,
          explanation: "grow(0, 2, 10) = 2 × 10 = 20 and grow(0, 5, 4) = 5 × 4 = 20. Both return 20, so the two calls tie.",
          hintLadder: [
            "For each call, multiply rate × days (start is 0).",
            "grow(0, 2, 10): 2 × 10. grow(0, 5, 4): 5 × 4.",
            "Both equal 20 — it's a tie."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Append the Height",
      prompt:
        "Be the function! Each 'day' call out the day number, rise a bit taller, and clap once to 'append' that height to your list. Go Day 1 through Day 5, reaching higher each clap. Then 'return' by taking one big breath and relaxing down to a crouch. Repeat once.",
      scienceTieIn: "Storing each result before moving on is how a program keeps a full record — just like your muscles remember and build on each repetition of steady exercise.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A function packages a job so you can reuse it anywhere. What's a task in your daily life you repeat that you could 'turn into a function' to make it faster and more reliable?",
      badge: { id: "g7-spring-function-farmer", name: "Function Farmer", emoji: "🔧" },
      estimatedMinutes: 7
    }
  }
};
