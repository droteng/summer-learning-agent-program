// Grade 6 History/Civics — Winter Expedition, Week 1 (Winter Warm-Up), Day 4.
// Topic: the winter solstice and how civilizations tracked the calendar/seasons.

export const winterG6HistoryW1D4 = {
  id: "g6.winter.hist.w1.d4",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "The winter solstice and tracking the calendar across civilizations",
  topicTag: "winter-solstice-calendars",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1", "C3.D2.Geo.2"],
  hook: "The winter solstice is the shortest day of the year — and for thousands of years it was a turning point people watched for. Ancient builders lined up giant stones to catch its sunrise. Today you learn how civilizations used the sky to keep time.",
  miniLesson: [
    "The winter solstice (around December 21 in the Northern Hemisphere) is the day with the fewest hours of daylight. After it, the days slowly grow longer again.",
    "Long before printed calendars, people tracked the seasons by watching the Sun, Moon, and stars — where the Sun rose, how long shadows fell, and which stars appeared.",
    "Civilizations built monuments and calendars to mark these cycles: Stonehenge in Britain aligns to the solstice sun, the Maya kept detailed astronomical calendars, and many cultures held festivals at the solstice to celebrate the return of the light."
  ],
  workedExample: {
    prompt: "Why would ancient farmers care about knowing when the winter solstice happened?",
    steps: [
      "Farmers needed to know when the seasons would turn to plant and harvest at the right time.",
      "The solstice is a fixed, repeating marker in the sky they could observe every year.",
      "After the solstice, days grow longer — a signal that spring and planting season are coming.",
      "So tracking the solstice helped them plan the farming year even without a written calendar."
    ],
    answer: "The solstice was a reliable yearly sky-marker that told farmers the seasons were turning, helping them plan planting and harvest."
  },
  items: [
    {
      id: "g6.winter.hist.w1.d4.q1",
      type: "multiple_choice",
      stem: "What makes the winter solstice special?",
      choices: [
        "It is the hottest day of the year",
        "It is the day with the FEWEST hours of daylight",
        "It has exactly equal day and night",
        "It is the day the Moon disappears"
      ],
      answerIndex: 1,
      explanation: "The winter solstice is the shortest day — the fewest hours of daylight. After it, the days grow longer again.",
      hintLadder: [
        "'Winter' and 'shortest day' go together.",
        "It's about hours of daylight, not temperature.",
        "The solstice has the FEWEST daylight hours."
      ]
    },
    {
      id: "g6.winter.hist.w1.d4.q2",
      type: "multiple_choice",
      stem: "Before printed calendars, how did many ancient people track the seasons?",
      choices: [
        "They guessed randomly",
        "They didn't track seasons at all",
        "They used clocks with batteries",
        "By watching the Sun, Moon, and stars in the sky"
      ],
      answerIndex: 3,
      explanation: "Ancient people observed where the Sun rose, how shadows fell, and which stars appeared to keep track of the seasons and time.",
      hintLadder: [
        "There were no printed calendars or electronic clocks yet.",
        "Think about what's visible in the sky every day and night.",
        "The Sun, Moon, and stars were their calendar."
      ],
      misconceptionsTargeted: ["calendars-always-existed"]
    },
    {
      id: "g6.winter.hist.w1.d4.q3",
      type: "multiple_choice",
      stem: "The monument Stonehenge in Britain is famous partly because it aligns with what event?",
      choices: [
        "The sunrise or sunset at the solstices",
        "The landing of airplanes",
        "The changing of ocean tides only",
        "Nothing in the sky"
      ],
      answerIndex: 0,
      explanation: "Stonehenge's giant stones line up with the Sun at the solstices, showing its builders carefully tracked the Sun's yearly cycle.",
      hintLadder: [
        "Stonehenge is lined up with something in the sky.",
        "The lesson connected it to the solstice.",
        "Its stones catch the solstice sunrise/sunset."
      ]
    },
    {
      id: "g6.winter.hist.w1.d4.q4",
      type: "short_answer",
      stem: "Explain how watching the sky could work as a 'calendar' for a civilization that had no printed calendars. Give one specific thing they could watch.",
      rubric: {
        level3: "Explains that repeating sky patterns (Sun's rising position, Moon phases, star appearances) mark the passage of time AND names one specific observable thing.",
        level2: "Says they watched the sky but gives a vague or no specific example.",
        level1: "No clear explanation of how the sky tracks time."
      },
      exemplar: "The sky repeats in patterns, so people could count time by them. For example, they watched where the Sun rose on the horizon — when it reached its most southern rising point, they knew the winter solstice had come and the year was turning.",
      hintLadder: [
        "The sky repeats the same patterns every year.",
        "Name one thing that changes in a predictable cycle.",
        "For example, the Sun's rising spot, the Moon's phases, or certain stars."
      ]
    },
    {
      id: "g6.winter.hist.w1.d4.q5",
      type: "short_answer",
      stem: "Many cultures held festivals right at the winter solstice. Give one reason people might CELEBRATE the shortest, darkest day of the year.",
      rubric: {
        level3: "Gives a logical reason tied to the solstice — e.g., after it the days grow longer, so it marks the 'return of the light'/hope, or the turning point toward spring and warmth.",
        level2: "Gives a reason to celebrate but the link to the solstice's meaning is weak.",
        level1: "No clear reason connected to the solstice."
      },
      exemplar: "Even though it's the darkest day, the solstice means the days will start getting longer again. People celebrated the return of the light and the promise that spring and warmth were on the way.",
      hintLadder: [
        "What happens to the daylight AFTER the solstice?",
        "The days start getting longer again.",
        "That turning point toward light was worth celebrating."
      ]
    }
  ],
  reflectionPrompt: "You check a phone or wall calendar without thinking. If you had none, what could you watch in the sky to know winter had turned toward spring?",
  misconceptionBank: [
    {
      id: "calendars-always-existed",
      label: "Thinks printed calendars always existed",
      description: "Assumes people have always had modern calendars instead of tracking time by observing the sky.",
      coachMove: "Point out that calendars were invented; before them, people read the Sun, Moon, and stars as their timekeeper."
    },
    {
      id: "solstice-is-coldest",
      label: "Confuses shortest day with coldest day",
      description: "Assumes the solstice must be the coldest day, when it's really the day with the least daylight.",
      coachMove: "Clarify that the solstice is defined by daylight hours, not temperature; the coldest weather often comes weeks later."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Longest Night",
      prompt:
        "Imagine you live 5,000 years ago with no calendar. You notice the Sun rises a little farther south each morning and the days keep getting shorter — then one day it stops and starts creeping back. What did you just discover, and why would it matter?",
      answer:
        "You discovered the winter solstice — the shortest day, when the Sun 'turns around.' It matters because it's a reliable sky-marker: after it, days lengthen toward spring, so you know when to prepare for planting and warmer weather.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Sky Calendar",
      challenge:
        "Invent a way for an ancient people with no printed calendar to mark the winter solstice using the sky or the land. Design a monument, marker, or observation method and explain how it signals the shortest day.",
      steps: [
        "Choose what your people will watch: the Sun's rising spot, shadows, the Moon, or certain stars.",
        "Design a marker, monument, or method that lines up with the solstice.",
        "Explain how someone would KNOW the solstice had arrived using your design.",
        "Give your monument or method a name and one line about the festival held there."
      ],
      deliverable: "A labeled design or description of a solstice-tracking monument or method with an explanation of how it works.",
      choiceBoard: [
        "Draw and label your solstice monument or marker.",
        "Write a short 'ancient astronomer's guide' explaining how to read your marker.",
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
          id: "g6.winter.hist.w1.d4.arena1",
          type: "multiple_choice",
          stem: "Put these in the correct time order as an ancient sky-watcher would experience them across the year: (1) days start getting LONGER again, (2) the winter solstice — shortest day, (3) days get SHORTER heading into winter.",
          choices: [
            "1 → 2 → 3",
            "2 → 1 → 3",
            "3 → 2 → 1",
            "3 → 1 → 2"
          ],
          answerIndex: 2,
          explanation: "First the days shorten heading into winter (3), then the solstice is the shortest day (2), then the days lengthen again afterward (1): 3 → 2 → 1.",
          hintLadder: [
            "Which comes first — shortening days or the shortest day itself?",
            "The solstice is the turning point in the middle.",
            "Order: shortening (3) → solstice (2) → lengthening (1)."
          ]
        },
        {
          id: "g6.winter.hist.w1.d4.arena2",
          type: "short_answer",
          stem: "Two different civilizations — say, the builders of Stonehenge and the Maya — both carefully tracked the sky. Give one reason WHY so many separate cultures independently studied the solstices and seasons.",
          rubric: {
            level3: "Gives a solid universal reason — e.g., all farming societies needed to time planting/harvest, or all people wanted to predict seasons and hold festivals — AND ties it to why it appeared independently.",
            level2: "Gives a reasonable reason but the link to WHY it happened in many places is thin.",
            level1: "No clear reason or unrelated answer."
          },
          exemplar: "Nearly every ancient society depended on farming, and farming depends on the seasons. Since the Sun and stars are visible everywhere on Earth, people all over independently learned to read the sky to know when to plant, harvest, and celebrate.",
          hintLadder: [
            "What did most ancient societies need to survive?",
            "How is farming connected to the seasons?",
            "The sky is visible everywhere, so many cultures found the same solution."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Sun's Yearly Arc",
      prompt:
        "Stand and be the Sun. Trace a low arc with your arm for the 'short winter day,' then a high sweeping arc for the 'long summer day.' Alternate low and high arcs 6 times, feeling how much the daylight changes across the year.",
      scienceTieIn: "Big arm movements get blood and oxygen flowing to your brain, and acting out the Sun's arc helps your memory anchor the idea of changing daylight through the seasons.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "People have watched the winter solstice for thousands of years to feel hope that light is returning. What is one thing YOU look forward to as winter turns toward spring?",
      badge: { id: "solstice-skywatcher", name: "Solstice Skywatcher", emoji: "🌅" },
      estimatedMinutes: 7
    }
  }
};
