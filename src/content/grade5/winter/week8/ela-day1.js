// Grade 5 ELA/Writing — Winter Expedition, Week 8 (Winter Showcase), Day 1.
// Grade 5 counterpart of g6.winter.ela.w8.d1. Same topic (planning your winter
// STEM capstone — scope, audience, success criteria) pitched down to Grade 5:
// friendlier vocabulary, a paragraph/sentence frame, and simpler checklists.
// Celebratory capstone-week tone. Wintry STEM feel. Age 10-11.

export const winterG5ElaW8D1 = {
  id: "g5.winter.ela.w8.d1",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your STEM capstone — scope, audience, and success criteria",
  topicTag: "capstone-planning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.5.5", "CCSS.W.5.4"],
  hook: "It's the LAST week of the Winter Expedition — your big showcase week! Before you build anything, smart creators make a plan. Today you pick your TOPIC, choose who will watch (your AUDIENCE), and write a short CHECKLIST of what a finished project needs. That plan makes the whole week easier.",
  miniLesson: [
    "SCOPE means what your project WILL and WON'T cover. A small, clear topic — like 'why lakes freeze on top first' — is much easier to finish than a giant fuzzy one.",
    "AUDIENCE means who is watching. When you know it's your classmates and family, you know which words to explain and how much to say.",
    "A SUCCESS CHECKLIST is a short list of things a finished project must have — like 'has one picture' and 'takes less than 4 minutes.' You can check each one off with a yes or no."
  ],
  workedExample: {
    prompt: "Turn the fuzzy idea 'do something about winter' into a clear plan with a topic, an audience, and one checklist item.",
    steps: [
      "Pick ONE small winter topic: 'why snow looks white even though ice is clear.'",
      "Name the audience: my classmates and family at the showcase.",
      "Write one checklist item you can check off: 'I explain it in under 3 minutes with a drawing.'",
      "Now you have a plan you can actually finish and check!"
    ],
    answer: "Topic: why snow looks white. Audience: classmates and family. Checklist item: a clear 3-minute talk with a drawing."
  },
  items: [
    {
      id: "g5.winter.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "Which is the BEST small topic for a one-week capstone project?",
      choices: [
        "Explain everything about winter, space, and energy.",
        "Explain why a frozen lake stays liquid at the very bottom.",
        "Winter is cold.",
        "Do a project."
      ],
      answerIndex: 1,
      explanation: "It is ONE clear idea you can explain and finish in a week. The others are too big, just a fact, or not really a topic.",
      hintLadder: [
        "A good topic is small enough to finish in a week.",
        "Which one names ONE clear thing to explain?",
        "The frozen-lake option is small and doable."
      ]
    },
    {
      id: "g5.winter.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Why does knowing your AUDIENCE change how you plan your talk?",
      choices: [
        "It doesn't — you talk the same way to everyone.",
        "It tells you how much to explain and which hard words to spell out.",
        "It only decides the color of your poster.",
        "It only matters for the teacher's grade."
      ],
      answerIndex: 1,
      explanation: "Your audience helps you pick your words and decide how much to explain. Family and classmates may need some science words explained.",
      hintLadder: [
        "Think about who is listening.",
        "Would you explain a science word the same way to a little kid and to a scientist?",
        "Your audience sets how much to explain."
      ],
      misconceptionsTargeted: ["audience-doesnt-matter"]
    },
    {
      id: "g5.winter.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "Which of these is a real CHECKLIST item (something you can check off yes or no)?",
      choices: [
        "Make it good.",
        "Try hard.",
        "Include at least one labeled picture and finish in under 4 minutes.",
        "Winter."
      ],
      answerIndex: 2,
      explanation: "A checklist item is clear — you can look and say yes or no. 'Make it good' and 'try hard' can't be checked off.",
      hintLadder: [
        "A checklist item is something you can mark yes or no.",
        "Which one gives a clear, countable rule?",
        "The 'labeled picture + under 4 minutes' one can be checked."
      ]
    },
    {
      id: "g5.winter.ela.w8.d1.q4",
      type: "short_answer",
      stem: "Write ONE sentence naming the topic of your own winter STEM capstone. Use this frame: 'My capstone will explain ____.'",
      rubric: {
        level3: "Names one small, clear winter topic or question that is realistic to finish and present in a week.",
        level2: "Names a topic but it is too big or fuzzy (like 'space').",
        level1: "Too big to finish, just a fact, or not a topic."
      },
      exemplar: "My capstone will explain why frost forms on windows on cold winter mornings.",
      hintLadder: [
        "Pick ONE winter thing you are curious about.",
        "Make it small enough to finish this week.",
        "Write it in one clear sentence using the frame."
      ]
    },
    {
      id: "g5.winter.ela.w8.d1.q5",
      type: "short_answer",
      stem: "Name your AUDIENCE and write TWO checklist items for your capstone. Make each item something you can check off yes or no.",
      rubric: {
        level3: "Names a clear audience AND gives two checkable items (like 'has one picture'; 'under 4 minutes').",
        level2: "Names an audience and two items, but one item is fuzzy or can't be checked.",
        level1: "Missing the audience or fewer than two real checklist items."
      },
      exemplar: "Audience: my classmates and family. Item 1: I include one labeled picture of my data. Item 2: my talk is under 4 minutes.",
      hintLadder: [
        "First name who will watch your showcase.",
        "Write rules you can mark yes or no on the finished project.",
        "Two checkable items plus your audience."
      ]
    }
  ],
  reflectionPrompt: "Look back at everything you explored this winter — energy, space, forces, matter. Which idea are you most excited to show off? Save your topic, audience, and checklist — you'll use them all week!",
  misconceptionBank: [
    {
      id: "audience-doesnt-matter",
      label: "Forgets the audience when planning",
      description: "Thinks a talk is the same no matter who is watching, so plans without changing how much to explain.",
      coachMove: "Ask: 'Who is in the room? What do they already know, and what would you need to explain to them?'"
    },
    {
      id: "vague-checklist",
      label: "Sets goals that can't be checked",
      description: "Uses fuzzy goals like 'make it good' instead of clear, checkable items.",
      coachMove: "Turn each goal into a yes/no question: 'Does it have a picture?' 'Is it under 4 minutes?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Big Idea or Sharp Idea?",
      prompt:
        "Would you rather do a capstone called 'Everything About Winter' or one called 'Why Snowflakes Have Six Sides'? Which one could you actually finish and explain clearly by Friday — and why?",
      answer:
        "'Why Snowflakes Have Six Sides' — a small, clear topic is easy to finish and explain in a week, while 'Everything About Winter' is way too big. Small and sharp wins!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Blueprint",
      challenge:
        "Make a one-page BLUEPRINT for your winter STEM capstone. It names your topic, your audience, and your checklist — the map you'll follow all week to the showcase.",
      steps: [
        "Write your ONE small winter topic at the top as a title.",
        "Name your audience and one sentence about what they'll need explained.",
        "List 3 checklist items (things a finished project must have).",
        "Sketch a quick plan for the week: data day, coding day, showcase day."
      ],
      deliverable: "A one-page capstone blueprint: a title, an audience, 3 checklist items, and a week plan.",
      choiceBoard: [
        "Draw or type a one-page blueprint poster.",
        "Record a 30-second 'pitch' naming your topic, audience, and goals.",
        "Make a checklist card of your items to tick off all week."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Planning Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "A student's plan says: 'Topic: winter. Audience: people. Goal: be good.' What is the BIGGEST problem with it?",
          choices: [
            "It is way too long.",
            "The topic, audience, and goal are all too fuzzy to guide the work or be checked.",
            "It has no title.",
            "Nothing — it is a great plan."
          ],
          answerIndex: 1,
          explanation: "Every part is fuzzy: 'winter' is too big, 'people' isn't a real audience, and 'be good' can't be checked. A strong plan is clear and checkable.",
          hintLadder: [
            "Check each part: is it clear enough to act on?",
            "Can you check off 'be good'? Is 'people' a real audience?",
            "All three parts are too fuzzy."
          ]
        },
        {
          id: "g5.winter.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Fix this weak plan: 'Topic: space. Audience: people. Goal: do a good job.' Write a small topic, a clear audience, and one checklist item you can check off.",
          rubric: {
            level3: "Gives a small winter/space topic, a clear audience, AND one checkable item.",
            level2: "Clearly improves two of the three parts.",
            level1: "Still fuzzy or improves only one part."
          },
          exemplar: "Topic: why the winter sky shows different stars than summer. Audience: my classmates and family at the showcase. Checklist item: I show a labeled sky drawing and explain it in under 3 minutes.",
          hintLadder: [
            "Make 'space' into one small winter question.",
            "Name exactly who your audience is.",
            "Write one item you can mark yes or no."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Focus Snowflake Breath",
      prompt:
        "Sit up tall. Picture one snowflake drifting down slowly. Breathe in for 4 counts as it lifts, hold for 4, and breathe out for 4 as it lands. Each breath, picture one clear goal for your capstone. Do it 3 times.",
      scienceTieIn: "Slow, calm breathing lowers your heart rate and helps your brain focus — perfect for planning clearly at the start of showcase week.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "It's the last week of the Winter Expedition! Of everything you explored — energy, space, forces, frozen matter — what will YOUR capstone be about, and who can't wait to see it?",
      badge: { id: "g5-winter-capstone-planner", name: "Capstone Planner", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
