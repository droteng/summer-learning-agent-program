// Grade 5 World/Current Affairs — Winter Expedition, Week 7 (Winter Tales),
// Day 5. Topic: winter folktales and traditions around the world — how
// different cultures tell winter stories and celebrate the season (Grade 5).

export const winterG5WorldW7D5 = {
  id: "g5.winter.world.w7.d5",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Winter folktales and traditions around the world",
  topicTag: "winter-folktales-traditions",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.2.3-5", "CCSS.ELA-LITERACY.RL.5.9"],
  hook: "Long before movies, people gathered in the dark of winter to tell stories about frost spirits, festivals of light, and long nights waiting for the sun to come back. Today you explore how different cultures turn winter into tales and traditions.",
  miniLesson: [
    "A FOLKTALE is a story that is passed down by word of mouth from grown-ups to children over many years. Folktales often explain nature or teach a lesson. Many are set in winter because the cold and darkness feel mysterious.",
    "Many winter traditions use LIGHT and GATHERING to push back the long, dark nights. Festivals like Diwali (India), Hanukkah (a Jewish tradition), and St. Lucia's Day (Sweden) all mark the dark season with light, food, or family.",
    "Where you live shapes the stories you tell. Cultures in far-northern lands with long, dark winters, like the Sami of northern Scandinavia, tell many tales about frost, snow spirits, and the return of the sun, because winter fills so much of their year."
  ],
  workedExample: {
    prompt: "Why do so many winter traditions around the world use LIGHT, like candles, lamps, and bonfires?",
    steps: [
      "Notice what winter is like: the shortest days and the longest, darkest nights.",
      "Ask what people want most during all that darkness: warmth and light.",
      "See the pattern: festivals add light with candles, lamps, and fires.",
      "Find the meaning: the light stands for hope and for the sun coming back."
    ],
    answer: "Because winter has the longest, darkest nights, many cultures use light, like candles, lamps, and bonfires, as a symbol of hope, warmth, and the sun coming back."
  },
  items: [
    {
      id: "g5.winter.world.w7.d5.q1",
      type: "multiple_choice",
      stem: "What is a FOLKTALE?",
      choices: [
        "A news report written by a journalist",
        "A story passed down by word of mouth over many years, often teaching a lesson or explaining nature",
        "A science paper about the weather",
        "A brand-new story invented for a movie last year"
      ],
      answerIndex: 1,
      explanation: "Folktales are old stories handed down by word of mouth over many years, often explaining nature or teaching a lesson.",
      hintLadder: [
        "The key idea is that it is OLD and passed down, not brand new.",
        "How were these stories first shared before books?",
        "Passed down by word of mouth over many years."
      ]
    },
    {
      id: "g5.winter.world.w7.d5.q2",
      type: "multiple_choice",
      stem: "Many winter festivals around the world, like Diwali, Hanukkah, and St. Lucia's Day, share one common symbol. What is it?",
      choices: ["Rain", "Light (candles, lamps, or fire)", "Sand", "Thunder"],
      answerIndex: 1,
      explanation: "These festivals all use light to push back against the darkness of the long winter nights.",
      hintLadder: [
        "Think about what winter has the most of: darkness.",
        "What would people add to brighten long, dark nights?",
        "Candles, lamps, and fire all give light."
      ]
    },
    {
      id: "g5.winter.world.w7.d5.q3",
      type: "multiple_choice",
      stem: "Why do cultures in far-northern places (like the Sami of northern Scandinavia) often have many winter stories?",
      choices: [
        "They have no summer at all",
        "Their long, dark winters fill much of the year there, so winter naturally fills their stories and traditions",
        "Other countries told them to make the stories",
        "Winter is exactly the same everywhere on Earth"
      ],
      answerIndex: 1,
      explanation: "Where winters are long and dark, winter fills a big part of daily life, so it shows up in the culture's stories and celebrations.",
      hintLadder: [
        "Think about how much of the year is winter in the far north.",
        "People tell stories about what surrounds their daily lives.",
        "Long winters lead to many winter tales."
      ],
      misconceptionsTargeted: ["winter-is-universal-sameness"]
    },
    {
      id: "g5.winter.world.w7.d5.q4",
      type: "short_answer",
      stem: "Describe ONE winter tradition, festival, or folktale you know (from your own culture or another), and explain what it helps people feel or remember during winter.",
      rubric: {
        level3: "Names a real winter tradition, festival, or folktale AND clearly explains its meaning or the feeling it gives people during winter.",
        level2: "Names a tradition but the explanation of its meaning is vague or thin.",
        level1: "Names nothing specific, or the example is not actually a winter tradition or story."
      },
      exemplar: "In my family we light candles and share a big meal on one of the longest, darkest nights. It helps us feel warm and close together, and it reminds us that the days will soon start getting longer again.",
      hintLadder: [
        "Pick any winter celebration or story you have heard of.",
        "Ask: what does it help people feel, like hope, togetherness, or warmth?",
        "Explain the meaning, not just the activity."
      ]
    },
    {
      id: "g5.winter.world.w7.d5.q5",
      type: "short_answer",
      stem: "Winter folktales from very different places often share ideas like surviving the cold, the sun coming back, or being kind to strangers. Why might faraway cultures make such SIMILAR winter stories?",
      rubric: {
        level3: "Explains that people everywhere face the same winter challenges (cold, darkness, needing each other), so their stories share the same needs and hopes.",
        level2: "Gives a partial reason (e.g., 'everyone has winter') without connecting it to shared human experiences or needs.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "Even far apart, people all face cold, dark winters and need each other to get through them. So their stories naturally share the same hopes, like the sun coming back and people helping one another survive.",
      hintLadder: [
        "What challenges does EVERY culture face in winter?",
        "How might shared problems lead to shared story ideas?",
        "Connect 'same needs' to 'similar stories.'"
      ]
    }
  ],
  reflectionPrompt: "Which winter tradition or folktale from another culture surprised you the most, and how could its ideas inspire the frozen-world story you are writing this week?",
  misconceptionBank: [
    {
      id: "winter-is-universal-sameness",
      label: "Assumes winter is the same everywhere",
      description: "Believes winter and its traditions look identical all over the world, ignoring how place and climate shape different cultures' stories.",
      coachMove: "Compare a place with months of darkness to one with mild winters: 'How might that difference change the stories people tell?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Festivals of Light",
      prompt:
        "Across the world, from India's Diwali to the Jewish Hanukkah to Sweden's St. Lucia's Day, winter festivals keep lighting candles and lamps. What do you think LIGHT is meant to stand for in the middle of the darkest season?",
      answer: "Light usually stands for hope, warmth, and the sun coming back, a way of pushing back against the long, dark winter nights.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Winter Folktale Tradition",
      challenge:
        "Invent a winter folktale or tradition for a frozen world of your own. Give it a story, a symbol, and a reason people keep it alive, the way real cultures do.",
      steps: [
        "Choose your frozen world and what its people hope for or fear most in winter.",
        "Write a short folktale (4 to 5 sentences) that explains something about winter there.",
        "Invent a tradition tied to the tale: a light, a food, a gathering, or a symbol.",
        "Write one sentence about what feeling or lesson the tradition gives the people."
      ],
      deliverable: "A short invented winter folktale plus a tradition, with a note on the meaning or lesson it carries.",
      choiceBoard: [
        "Write the folktale and describe its tradition.",
        "Draw a poster or symbol for your invented winter festival with a caption explaining it.",
        "Record a 45-second 'storyteller by the fire' telling of your folktale."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Winter Traditions Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.world.w7.d5.arena1",
          type: "multiple_choice",
          stem: "A folktale explains WHY the days slowly get longer after midwinter by telling of a sun that is 'born again' each winter. What is this kind of story mainly doing?",
          choices: [
            "Reporting the exact science of the seasons",
            "Using a story to explain a natural event and give people hope",
            "Advertising a product",
            "Recording last week's weather"
          ],
          answerIndex: 1,
          explanation: "Folktales often explain natural events (like the days getting longer) through a story, giving meaning and hope instead of a science report.",
          hintLadder: [
            "Is this a science report or a traditional story?",
            "What does the 'sun born again' idea give people during dark winter?",
            "It explains a natural event and gives hope."
          ]
        },
        {
          id: "g5.winter.world.w7.d5.arena2",
          type: "short_answer",
          stem: "Two winter folktales, one from northern Scandinavia and one from northern Japan, both have a spirit of the snow. Name TWO reasons such faraway cultures might invent similar snow-spirit stories.",
          rubric: {
            level3: "Gives two solid reasons, such as both places having long, snowy winters AND people everywhere using stories to explain and cope with powerful, dangerous cold.",
            level2: "Gives one clear reason and a second that is weak or vague.",
            level1: "Gives no real reason or misunderstands the question."
          },
          exemplar: "Both places have long, snowy winters, so snow is a big part of daily life worth telling stories about. And people everywhere use stories to make sense of something as powerful and scary as a blizzard, so both imagined a spirit behind the snow.",
          hintLadder: [
            "What do both places have a lot of in winter?",
            "Why do people turn powerful, scary forces into characters in stories?",
            "Give two reasons, not one."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Around the World Winter Stretch",
      prompt:
        "Take a 'trip' around the winter world: reach up high like the northern lights (stretch tall), sweep down low like falling snow (touch your toes), then huddle and 'warm your hands' over a pretend fire. Do the loop twice.",
      scienceTieIn: "Gentle stretching brings more blood to your muscles and warms them up, a small reminder of why people in cold places move, gather, and share warmth in winter.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Of all the winter traditions and folktales you explored today, which one would you most want to experience yourself, and why? How might it inspire your frozen-world story?",
      badge: { id: "g5-winter-folktale-voyager", name: "Folktale Voyager", emoji: "🕯️" },
      estimatedMinutes: 7
    }
  }
};
