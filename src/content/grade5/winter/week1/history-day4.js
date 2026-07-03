// Grade 5 History/Civics — Winter Expedition, Week 1 (Winter Warm-Up), Day 4.
// Grade 5 counterpart of g6.winter.hist.w1.d4. Same topic (the winter solstice
// and tracking the calendar across civilizations) pitched down to Grade 5:
// shorter passages, more vocab support, concrete examples. Wintry tone.

export const winterG5HistoryW1D4 = {
  id: "g5.winter.hist.w1.d4",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "The winter solstice and tracking the calendar across civilizations",
  topicTag: "winter-solstice-calendars",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1.3-5", "C3.D2.Geo.2.3-5"],
  hook: "The winter solstice is the shortest day of the year. For thousands of years, people watched for it. Some even lined up giant stones to catch the solstice sunrise. Today you learn how people used the sky to keep time.",
  miniLesson: [
    "The winter solstice (around December 21 north of the equator) is the day with the FEWEST hours of daylight. After it, the days slowly get longer again.",
    "Long before printed calendars, people tracked the seasons by watching the sky — where the Sun rose, how long shadows were, and which stars they could see.",
    "People built markers and calendars to follow these cycles. Stonehenge in Britain lines up with the solstice Sun, the Maya kept careful sky calendars, and many cultures held festivals at the solstice to celebrate the light coming back."
  ],
  workedExample: {
    prompt: "Why would ancient farmers care about knowing when the winter solstice happened?",
    steps: [
      "Farmers needed to know when the seasons would change so they could plant and harvest at the right time.",
      "The solstice is a fixed marker in the sky they could watch for every year.",
      "After the solstice, days get longer — a sign that spring and planting time are coming.",
      "So watching the solstice helped them plan the farming year, even without a written calendar."
    ],
    answer: "The solstice was a reliable yearly sky-marker that told farmers the seasons were turning, helping them plan planting and harvest."
  },
  items: [
    {
      id: "g5.winter.hist.w1.d4.q1",
      type: "multiple_choice",
      stem: "What makes the winter solstice special?",
      choices: [
        "It is the hottest day of the year",
        "It is the day with the FEWEST hours of daylight",
        "It has exactly equal day and night",
        "It is the day the Moon disappears"
      ],
      answerIndex: 1,
      explanation: "The winter solstice is the shortest day — the fewest hours of daylight. After it, the days get longer again.",
      hintLadder: [
        "'Winter' and 'shortest day' go together.",
        "It is about hours of daylight, not temperature.",
        "The solstice has the FEWEST daylight hours."
      ]
    },
    {
      id: "g5.winter.hist.w1.d4.q2",
      type: "multiple_choice",
      stem: "Before printed calendars, how did many ancient people track the seasons?",
      choices: [
        "They guessed randomly",
        "By watching the Sun, Moon, and stars in the sky",
        "They used clocks with batteries",
        "They did not track seasons at all"
      ],
      answerIndex: 1,
      explanation: "Ancient people watched where the Sun rose, how shadows fell, and which stars appeared to keep track of the seasons and time.",
      hintLadder: [
        "There were no printed calendars or electronic clocks yet.",
        "Think about what you can see in the sky every day and night.",
        "The Sun, Moon, and stars were their calendar."
      ],
      misconceptionsTargeted: ["calendars-always-existed"]
    },
    {
      id: "g5.winter.hist.w1.d4.q3",
      type: "multiple_choice",
      stem: "Stonehenge in Britain is famous partly because its giant stones line up with what event?",
      choices: [
        "The sunrise or sunset at the solstices",
        "The landing of airplanes",
        "The ocean tides only",
        "Nothing in the sky"
      ],
      answerIndex: 0,
      explanation: "Stonehenge's stones line up with the Sun at the solstices, which shows its builders carefully watched the Sun's yearly cycle.",
      hintLadder: [
        "Stonehenge is lined up with something in the sky.",
        "The lesson connected it to the solstice.",
        "Its stones catch the solstice sunrise or sunset."
      ]
    },
    {
      id: "g5.winter.hist.w1.d4.q4",
      type: "short_answer",
      stem: "Explain how watching the sky could work like a 'calendar' for people who had no printed calendars. Give one specific thing they could watch.",
      rubric: {
        level3: "Explains that repeating sky patterns (the Sun's rising spot, Moon phases, or star appearances) mark time AND names one specific thing to watch.",
        level2: "Says they watched the sky but gives a vague example or none.",
        level1: "No clear explanation of how the sky can track time."
      },
      exemplar: "The sky repeats the same patterns every year, so people could tell time by them. For example, they watched where the Sun rose on the horizon — when it reached its farthest spot, they knew the winter solstice had come.",
      hintLadder: [
        "The sky repeats the same patterns every year.",
        "Name one thing that changes in a pattern you can count on.",
        "For example, the Sun's rising spot, the Moon's phases, or certain stars."
      ]
    },
    {
      id: "g5.winter.hist.w1.d4.q5",
      type: "short_answer",
      stem: "Many cultures held festivals right at the winter solstice. Give one reason people might CELEBRATE the shortest, darkest day of the year.",
      rubric: {
        level3: "Gives a reason tied to the solstice — for example, after it the days get longer, so it marks the 'return of the light' or the turn toward spring and warmth.",
        level2: "Gives a reason to celebrate but the link to the solstice is weak.",
        level1: "No clear reason connected to the solstice."
      },
      exemplar: "Even though it is the darkest day, the solstice means the days will start getting longer again. People celebrated because it meant the light was coming back and spring was on the way.",
      hintLadder: [
        "What happens to the daylight AFTER the solstice?",
        "The days start getting longer again.",
        "That turn toward more light was worth celebrating."
      ]
    }
  ],
  reflectionPrompt: "You check a phone or wall calendar without thinking. If you had none, what could you watch in the sky to know winter had turned toward spring?",
  misconceptionBank: [
    {
      id: "calendars-always-existed",
      label: "Thinks printed calendars always existed",
      description: "Assumes people have always had modern calendars instead of tracking time by watching the sky.",
      coachMove: "Point out that calendars were invented; before them, people read the Sun, Moon, and stars as their clock and calendar."
    },
    {
      id: "solstice-is-coldest",
      label: "Confuses shortest day with coldest day",
      description: "Assumes the solstice must be the coldest day, when it is really the day with the least daylight.",
      coachMove: "Explain that the solstice is about daylight hours, not temperature; the coldest weather often comes weeks later."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Longest Night",
      prompt:
        "Imagine you live long ago with no calendar. You notice the Sun rises a little farther over each morning and the days keep getting shorter — then one day it stops and starts creeping back. What did you just discover, and why would it matter?",
      answer:
        "You discovered the winter solstice — the shortest day, when the Sun seems to 'turn around.' It matters because it is a reliable sky-marker: after it, the days get longer toward spring, so you know when to get ready for planting and warmer weather.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Sky Calendar",
      challenge:
        "Invent a way for ancient people with no printed calendar to mark the winter solstice using the sky or the land. Design a monument, marker, or way of watching and explain how it signals the shortest day.",
      steps: [
        "Choose what your people will watch: the Sun's rising spot, shadows, the Moon, or certain stars.",
        "Design a marker, monument, or method that lines up with the solstice.",
        "Explain how someone would KNOW the solstice had arrived using your design.",
        "Give your monument or method a name and one line about a festival held there."
      ],
      deliverable: "A labeled design or description of a solstice marker or method with an explanation of how it works.",
      choiceBoard: [
        "Draw and label your solstice monument or marker.",
        "Write a short 'ancient sky-watcher's guide' explaining how to read your marker.",
        "Design a solstice festival poster for the day the marker lights up."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Solstice Calendar Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.hist.w1.d4.arena1",
          type: "multiple_choice",
          stem: "Put these in the correct order as an ancient sky-watcher would experience them across the year: (1) days start getting LONGER again, (2) the winter solstice — the shortest day, (3) days get SHORTER heading into winter.",
          choices: [
            "1 → 2 → 3",
            "3 → 2 → 1",
            "2 → 1 → 3",
            "3 → 1 → 2"
          ],
          answerIndex: 1,
          explanation: "First the days get shorter heading into winter (3), then the solstice is the shortest day (2), then the days get longer again afterward (1): 3 → 2 → 1.",
          hintLadder: [
            "Which comes first — days getting shorter or the shortest day itself?",
            "The solstice is the turning point in the middle.",
            "Order: shortening (3) → solstice (2) → lengthening (1)."
          ]
        },
        {
          id: "g5.winter.hist.w1.d4.arena2",
          type: "short_answer",
          stem: "Two different groups far apart — the builders of Stonehenge and the Maya — both carefully watched the sky. Give one reason WHY so many separate cultures studied the solstices and seasons on their own.",
          rubric: {
            level3: "Gives a solid reason — for example, all farming cultures needed to time planting and harvest, or all people wanted to predict the seasons — AND connects it to why it happened in many places.",
            level2: "Gives a reasonable reason but the link to WHY it happened in many places is thin.",
            level1: "No clear reason or unrelated answer."
          },
          exemplar: "Almost every ancient group depended on farming, and farming depends on the seasons. Since the Sun and stars can be seen everywhere on Earth, people all over learned on their own to read the sky to know when to plant and harvest.",
          hintLadder: [
            "What did most ancient groups need to survive?",
            "How is farming connected to the seasons?",
            "The sky can be seen everywhere, so many cultures found the same idea."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Sun's Yearly Arc",
      prompt:
        "Stand and be the Sun. Trace a low arc with your arm for the 'short winter day,' then a high sweeping arc for the 'long summer day.' Switch between low and high arcs 6 times, feeling how much the daylight changes across the year.",
      scienceTieIn: "Big arm movements get blood and oxygen flowing to your brain, and acting out the Sun's arc helps your memory hold on to the idea of changing daylight through the seasons.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "People have watched the winter solstice for thousands of years to feel hope that light is coming back. What is one thing YOU look forward to as winter turns toward spring?",
      badge: { id: "g5-winter-solstice-skywatcher", name: "Solstice Skywatcher", emoji: "🌅" },
      estimatedMinutes: 7
    }
  }
};
