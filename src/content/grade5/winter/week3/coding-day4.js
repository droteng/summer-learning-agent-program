// Grade 5 Coding/CS/AI — Winter Expedition, Week 3 (Forces & Motion),
// Day 4. Grade 5 counterpart of g6.winter.code.w3.d4, pitched down:
// block-style everyday pseudocode, smaller whole-number traces, more
// step-by-step. Topic: simulate motion with a loop — a sled's position
// grows by its speed each second.

export const winterG5CodingW3D4 = {
  id: "g5.winter.code.w3.d4",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Simulate motion with a loop",
  topicTag: "motion-loop",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "Video games move a character by nudging it a tiny bit over and over. Today YOU are the game engine: you will trace a loop that moves a sled forward by its speed, one second at a time.",
  miniLesson: [
    "A LOOP repeats the same step over and over. Here, the loop repeats once for every second the sled moves.",
    "To move the sled, each second we do: position = position + speed. That just means 'add one second of distance to where the sled already is.'",
    "A VARIABLE holds a number that changes as the loop runs. We start position at 0 and watch it grow by the speed each time the loop repeats."
  ],
  workedExample: {
    prompt: "A sled starts at position 0 and moves 4 meters each second. Rule: position = position + 4, repeated for 3 seconds. Where is the sled after 3 seconds?",
    steps: [
      "Start: position = 0.",
      "After second 1: 0 + 4 = 4.",
      "After second 2: 4 + 4 = 8.",
      "After second 3: 8 + 4 = 12. The sled is at position 12 meters."
    ],
    answer: "Position 12 meters"
  },
  items: [
    {
      id: "g5.winter.code.w3.d4.q1",
      type: "numeric",
      stem: "A sled starts at position 0 and moves 5 meters each second. Using position = position + 5, what is its position after 4 seconds?",
      answer: 20,
      tolerance: 0,
      unit: "meters",
      hintLadder: [
        "Add 5 once each second, starting from 0.",
        "0 → 5 → 10 → 15 → 20.",
        "Four loops of +5 from 0 = 20 meters."
      ],
      explanation: "Add 5 four times from 0: 5, 10, 15, 20. After 4 seconds the sled is at 20 meters."
    },
    {
      id: "g5.winter.code.w3.d4.q2",
      type: "numeric",
      stem: "A sled STARTS at position 6 meters and moves 3 meters each second (position = position + 3). What is its position after 2 seconds?",
      answer: 12,
      tolerance: 0,
      unit: "meters",
      hintLadder: [
        "Begin at 6, not 0.",
        "After 1 second: 6 + 3 = 9.",
        "After 2 seconds: 9 + 3 = 12 meters."
      ],
      explanation: "Starting at 6: 6 + 3 = 9, then 9 + 3 = 12 meters after 2 seconds.",
      misconceptionsTargeted: ["forgets-starting-value"]
    },
    {
      id: "g5.winter.code.w3.d4.q3",
      type: "multiple_choice",
      stem: "In the loop 'repeat 5 times: position = position + speed', what does the loop do each time it repeats?",
      choices: [
        "It adds one more 'speed' of distance to the sled's position",
        "It sets position back to 0",
        "It doubles the position",
        "It stops the sled"
      ],
      answerIndex: 0,
      explanation: "Each repeat adds the sled's speed to its position, moving it forward by one second of distance.",
      hintLadder: [
        "Read the line: position = position + speed.",
        "Each loop, what happens to position?",
        "It grows by 'speed' every time."
      ]
    },
    {
      id: "g5.winter.code.w3.d4.q4",
      type: "multiple_choice",
      stem: "Two sleds run the SAME number of loop steps. Sled A adds 2 each step. Sled B adds 6 each step. After the loop finishes, what is true?",
      choices: [
        "Both sleds are at the same position",
        "Neither sled moved",
        "Sled A is farther ahead",
        "Sled B is farther ahead because it adds more distance each second (higher speed)"
      ],
      answerIndex: 3,
      explanation: "Adding more each step means a higher speed, so over the same number of seconds Sled B goes farther.",
      hintLadder: [
        "The amount added each step is the sled's speed.",
        "Which sled adds more each second?",
        "Higher speed over the same time = farther ahead."
      ]
    },
    {
      id: "g5.winter.code.w3.d4.q5",
      type: "short_answer",
      stem: "In plain words (pseudocode), write a loop that starts a sled at position 0 and moves it forward by a speed of 7 each second for 3 seconds. Then say the final position.",
      rubric: {
        level3: "Writes clear pseudocode that sets position = 0 and a loop that runs 3 times doing position = position + 7, AND correctly says the final position is 21.",
        level2: "Loop idea is mostly right but the start value, repeat count, or final value (21) has a small error.",
        level1: "No working loop or a wrong final position with no reasoning."
      },
      exemplar: "SET position = 0. REPEAT 3 times: position = position + 7. After the loop, position = 0 + 7 + 7 + 7 = 21 meters.",
      hintLadder: [
        "Start by setting position = 0.",
        "Repeat the step 'position = position + 7' three times.",
        "Add 7 three times from 0 to get the final position."
      ]
    }
  ],
  reflectionPrompt: "Loops let a computer repeat a simple motion super fast. What is one moving thing (a game character, an elevator, a car) you could model by updating its position in a loop?",
  misconceptionBank: [
    {
      id: "forgets-starting-value",
      label: "Ignores the sled's starting position",
      description: "Starts adding from 0 even when the sled begins partway along, instead of using the given start number.",
      coachMove: "Ask 'where does the sled BEGIN?' before running the loop. The first addition builds on the starting value, not on 0."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Sled",
      prompt:
        "A sled starts at position 0 and a loop runs 'position = position + 8' for 3 seconds. Trace it in your head — where does the sled end up? Guess before you check!",
      answer:
        "0 + 8 = 8, then 8 + 8 = 16, then 16 + 8 = 24. After 3 seconds the sled is at position 24 meters.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Paper Motion Simulator",
      challenge:
        "Build a hand-run 'motion simulator' on paper. Pick a starting position and a speed, then run the loop 'position = position + speed' for several seconds, filling a trace table and marking the sled's spot each second.",
      materials: ["Paper & pencil, OR a spreadsheet", "A ruler to draw a number line"],
      steps: [
        "Choose a starting position and a speed (distance added each second).",
        "Make a table with two columns: Second and Position.",
        "Run the loop by hand — each row adds your speed to the row before it.",
        "Draw a number line and mark the sled's position at each second."
      ],
      deliverable: "A completed trace table plus a number line showing the sled's position each second.",
      choiceBoard: [
        "Fill in the trace table and mark the number line.",
        "Draw the loop as flowchart boxes with arrows showing the repeat.",
        "Draw a comic strip where each panel is one loop step and the sled moves forward."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Motion Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.code.w3.d4.arena1",
          type: "numeric",
          stem: "A sled starts at position 10 meters and a loop runs 'position = position + 6' for 5 seconds. What is the final position? Trace each step.",
          answer: 40,
          tolerance: 0,
          unit: "meters",
          hintLadder: [
            "Start at 10, then add 6 five times.",
            "10 → 16 → 22 → 28 → 34 → 40.",
            "Five loops of +6 from 10 lands on 40 meters."
          ],
          explanation: "Start 10; add 6 five times: 16, 22, 28, 34, 40. Final position = 40 meters."
        },
        {
          id: "g5.winter.code.w3.d4.arena2",
          type: "multiple_choice",
          stem: "You want a sled to speed UP as it goes downhill. Which change to the loop best shows it getting faster each second?",
          choices: [
            "Keep adding the same speed every loop",
            "Set position back to 0 each loop",
            "Make the speed a little bigger each loop before adding it (like: speed = speed + 1, then position = position + speed)",
            "Stop the loop after one step"
          ],
          answerIndex: 2,
          explanation: "Speeding up means the SPEED itself grows over time. Bumping the speed up each loop before moving shows a sled getting faster downhill.",
          hintLadder: [
            "Speeding up means the SPEED number must change, not just the position.",
            "What if each loop you raised the speed before adding it?",
            "speed = speed + 1, then position = position + speed shows speeding up."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Step-Per-Second",
      prompt:
        "Be the sled: take one big step forward each time you say 'loop!' out loud — 'loop' (step), 'loop' (step), 'loop' (step) — 6 steps total, keeping each step the same size. Then take 3 slow breaths as you 'stop the loop.'",
      scienceTieIn: "Each equal step is exactly what a loop does — repeating the same motion update over and over to move something across space.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A loop moves a sled by repeating one small step. Describe something in real life you could program by repeating a tiny action many times.",
      badge: { id: "g5-winter-motion-coder", name: "Motion Loop Coder", emoji: "💻" },
      estimatedMinutes: 7
    }
  }
};
