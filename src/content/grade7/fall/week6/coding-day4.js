// Grade 7 Coding/CS/AI — Fall Expedition, Week 6 (Patterns in Nature), Day 4.
// Topic: build a pattern generator — pitched up to loops that BUILD a list
// (data structure) by appending values, plus accumulator variables. Week
// capstone toward the leaf/seed pattern-generator project.

export const fallG7CodingW6D4 = {
  id: "g7.fall.code.w6.d4",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build a pattern generator",
  topicTag: "loops-variables",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-11"],
  hook: "Today you build the brain of a pattern generator that REMEMBERS its work: a loop that appends each new value to a list and keeps a running total, so a short rule blooms into a whole spiral of stored sizes.",
  miniLesson: [
    "A list (an ordered data structure) can hold every value a loop produces: start with an empty list [], then APPEND a value each repeat.",
    "An accumulator is a variable that carries a running result across repeats, like total = total + size. Order matters: draw/record BEFORE you update, or every value shifts by one.",
    "Plan a generator by naming four things: what repeats, how many times, what value CHANGES each loop, and what you STORE (the list or the running total)."
  ],
  workedExample: {
    prompt: "start sizes = []; start size = 4; repeat 3 times: append 'size' to sizes, then size = size + 3. What list is 'sizes' at the end?",
    steps: [
      "Repeat 1: append 4 → sizes = [4], then size becomes 7.",
      "Repeat 2: append 7 → sizes = [4, 7], then size becomes 10.",
      "Repeat 3: append 10 → sizes = [4, 7, 10], then size becomes 13.",
      "The stored list is [4, 7, 10] (13 was computed but never appended)."
    ],
    answer: "sizes = [4, 7, 10]."
  },
  items: [
    {
      id: "g7.fall.code.w6.d4.q1",
      type: "numeric",
      stem: "start total = 0; repeat 5 times: total = total + 4. What is total at the end?",
      answer: 20,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add 4 five times to a start of 0.",
        "4, 8, 12, 16, 20.",
        "= 20."
      ],
      explanation: "An accumulator adding 4 five times: 0 + 4×5 = 20."
    },
    {
      id: "g7.fall.code.w6.d4.q2",
      type: "numeric",
      stem: "start size = 3; repeat 4 times: draw size, then size = size × 2. What is the LAST size DRAWN?",
      answer: 24,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Draw first, then double — list the drawn values.",
        "Draw 3 → size 6; draw 6 → size 12; draw 12 → size 24; draw 24 → size 48.",
        "The last value DRAWN is 24."
      ],
      explanation: "Drawn values are 3, 6, 12, 24 (size doubles AFTER each draw). The last drawn is 24; size becomes 48 only after and is never drawn.",
      misconceptionsTargeted: ["update-before-store"]
    },
    {
      id: "g7.fall.code.w6.d4.q3",
      type: "numeric",
      stem: "start count = 0; start step = 1; repeat 5 times: count = count + step, then step = step + 1. What is count at the end? (This sums 1+2+3+4+5.)",
      answer: 15,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "step is 1, then 2, 3, 4, 5 across the repeats.",
        "count adds each step: 1, then 3, then 6, then 10, then 15.",
        "= 15."
      ],
      explanation: "step increases each loop (1,2,3,4,5) and count accumulates them: 1+2+3+4+5 = 15."
    },
    {
      id: "g7.fall.code.w6.d4.q4",
      type: "multiple_choice",
      stem: "You want your generator to REMEMBER every leaf size it drew, in order. Which tool fits best?",
      choices: [
        "A single number variable that gets overwritten each loop",
        "Nothing — you can't store more than one value",
        "The turn angle",
        "A list that you append each new size to"
      ],
      answerIndex: 3,
      explanation: "A list is an ordered data structure; appending each value preserves every size in the order produced.",
      hintLadder: [
        "A plain variable holds only the latest value.",
        "What structure keeps many values in order?",
        "A list you append to each loop."
      ],
      misconceptionsTargeted: ["variable-holds-all"]
    },
    {
      id: "g7.fall.code.w6.d4.q5",
      type: "short_answer",
      stem: "Design a pattern generator in words that builds a LIST of leaf lengths. State what repeats, the count, what changes each loop, and how the list grows.",
      rubric: {
        level3: "Clearly states a repeated action, a count, a per-loop change to a value, AND that each value is APPENDED to a list — describing an ordered stored result.",
        level2: "Has the loop and changing value but the list/appending step is unclear or missing.",
        level1: "No loop structure, no changing value, or no stored list."
      },
      exemplar: "Start with an empty list lengths = []. Repeat 6 times: append the current length to lengths, then increase length by 2 and turn 60°. After the loop, lengths holds [start, start+2, start+4, ...] — every leaf size in order, fanned into a ring.",
      hintLadder: [
        "What shape/value repeats, and how many times?",
        "What increases each loop (length, turn)?",
        "Where do you APPEND each value so the list remembers them all?"
      ]
    }
  ],
  reflectionPrompt: "Your generator now REMEMBERS its pattern in a list — like a plant recording each ring of growth. What pattern would you most want to generate and store, and what would each stored value represent?",
  misconceptionBank: [
    {
      id: "update-before-store",
      label: "Updates the variable before recording it",
      description: "Changes size/length before the draw or append step, so every stored value is off by one update.",
      coachMove: "Trace line by line in order: the draw/append uses the CURRENT value FIRST, then the update changes it for next time."
    },
    {
      id: "variable-holds-all",
      label: "Thinks one variable can store every value",
      description: "Believes a single number variable keeps the whole history instead of only the latest value.",
      coachMove: "Show that assigning a new value overwrites the old one; to keep every value in order you must APPEND to a list."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Growing List",
      prompt:
        "start sizes = []; start size = 2; repeat 3 times: append 'size' to sizes, then size = size + 5. What is the list 'sizes' at the end? Remember — append happens BEFORE the update!",
      answer: "Append 2 → [2] (size→7); append 7 → [2, 7] (size→12); append 12 → [2, 7, 12] (size→17). Final list: [2, 7, 12]. The 17 is computed but never appended.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a List-Backed Generator",
      challenge:
        "Design a pattern generator that STORES its output. Spell out what repeats, the count, what changes each loop, and the list it appends to — then hand-trace the first 4 repeats, writing the list AND any running total at each step.",
      materials: ["Paper & markers OR a device to type/draw on"],
      steps: [
        "Name the repeated action and start an empty list (e.g., sizes = []).",
        "Pick the repeat count and what changes each loop (size + 2, turn + 10°).",
        "Decide the record step: what value you append each repeat (before or after the update?).",
        "Hand-trace 4 repeats in a table with columns: repeat #, value appended, list so far, running total."
      ],
      deliverable: "A generator plan (action, count, per-loop change, stored list) plus a 4-row trace table showing the growing list and running total.",
      choiceBoard: [
        "Write the plan and the 4-row trace table.",
        "Draw the first few shapes your generator would produce from the stored list.",
        "Make a comic where a robot appends each value and the list grows on screen."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Generator Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.code.w6.d4.arena1",
          type: "numeric",
          stem: "start total = 0; start val = 1; repeat 5 times: total = total + val, then val = val + 2. What is total at the end? (This sums the odd numbers.)",
          answer: 25,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "val takes values 1, 3, 5, 7, 9 across the repeats.",
            "total adds them: 1, 4, 9, 16, 25.",
            "= 25."
          ],
          explanation: "val is 1,3,5,7,9 and total accumulates them: 1+3+5+7+9 = 25 (the sum of the first five odd numbers)."
        },
        {
          id: "g7.fall.code.w6.d4.arena2",
          type: "short_answer",
          stem: "A generator should store petal lengths in a list AND fan the petals into a full circle. Describe what repeats, the count, the TWO things that change each loop, and what gets appended to the list.",
          rubric: {
            level3: "States the repeated action (draw a petal), a repeat count, TWO per-loop changes (length increases AND the turn advances around the circle), AND that the current length is appended to a list each loop.",
            level2: "Has the action, count, and list but names only one changing value, or the turning is vague.",
            level1: "Missing the loop structure, the list, or the changing values."
          },
          exemplar: "Start lengths = []. Repeat 12 times: append the current length to lengths, draw a petal that long, make the next length 3 units longer, and turn 30° (360 ÷ 12). The length grows and the turn spreads the petals evenly, while lengths ends up storing all 12 petal sizes in order.",
          hintLadder: [
            "What action repeats and how many times?",
            "One change lengthens the petals; the other turns them around the circle.",
            "Where do you append the current length so the list remembers every petal?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Accumulate-the-Reps Loop",
      prompt:
        "Be an accumulator: keep a running count out loud. Repeat 4 times, adding one more arm circle each loop (1, then 2, then 3, then 4) and announce the RUNNING TOTAL each time (1, 3, 6, 10). Your body is building a list of reps!",
      scienceTieIn:
        "Gradually increasing the reps warms your muscles and sends more oxygen-rich blood to your brain for sharper focus on the next trace.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your generator now stores its pattern in a list, like growth rings recording each year. Write about the pattern you'd most want to generate, what would change each loop, and what each stored value would represent.",
      badge: { id: "g7-fall-list-architect", name: "List Architect", emoji: "🌀" },
      estimatedMinutes: 7
    }
  }
};
