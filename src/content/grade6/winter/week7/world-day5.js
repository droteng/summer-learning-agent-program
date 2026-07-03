// Grade 6 World/Current Affairs — Winter Expedition, Week 7 (Winter Tales),
// Day 5. Topic: winter folktales and traditions around the world — how
// different cultures tell winter stories and celebrate the season.

export const winterG6WorldW7D5 = {
  id: "g6.winter.world.w7.d5",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Winter folktales and traditions around the world",
  topicTag: "winter-folktales-traditions",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.6", "CCSS.RL.6.9"],
  hook: "Long before movies, people gathered in the dark of winter to tell stories — of frost spirits, festivals of light, and long nights waiting for the sun. Today you explore how different cultures turn winter into tales and traditions.",
  miniLesson: [
    "A FOLKTALE is a story passed down by word of mouth across generations, often explaining nature or teaching a lesson. Many cultures set folktales in winter because the cold and darkness feel mysterious and full of meaning.",
    "Winter traditions frequently center on LIGHT and GATHERING to push back the long nights: festivals like Diwali (India), Hanukkah (Jewish tradition), St. Lucia's Day (Sweden), and Dongzhi (China) all mark the dark season with light, food, or family.",
    "Geography shapes the stories: cultures in far-northern lands with long, dark winters — like the Sami of northern Scandinavia or communities in Russia and Japan — tell rich tales of frost, snow spirits, and the return of the sun, because winter dominates their world."
  ],
  workedExample: {
    prompt: "Why do so many winter traditions around the world involve LIGHT (candles, lamps, bonfires)?",
    steps: [
      "Notice the shared setting: winter has the shortest days and longest nights.",
      "Ask what people naturally want during long darkness: warmth and light.",
      "See the pattern: festivals add light (candles, lamps, fires) to brighten the dark season.",
      "Conclude the deeper meaning: light stands for hope and the return of the sun."
    ],
    answer: "Because winter has the longest, darkest nights, many cultures use light — candles, lamps, bonfires — as a symbol of hope, warmth, and the sun's return."
  },
  items: [
    {
      id: "g6.winter.world.w7.d5.q1",
      type: "multiple_choice",
      stem: "What is a FOLKTALE?",
      choices: [
        "A news report written by a journalist",
        "A story passed down by word of mouth across generations, often teaching a lesson or explaining nature",
        "A scientific paper about weather",
        "A brand-new story invented for a movie last year"
      ],
      answerIndex: 1,
      explanation: "Folktales are traditional stories handed down orally over generations, frequently explaining the natural world or carrying a lesson.",
      hintLadder: [
        "The key idea is that it's OLD and passed down, not newly written.",
        "How were these stories originally shared before books?",
        "Passed down by word of mouth over generations."
      ]
    },
    {
      id: "g6.winter.world.w7.d5.q2",
      type: "multiple_choice",
      stem: "Many winter festivals around the world — Diwali, Hanukkah, St. Lucia's Day — share a common symbol. What is it?",
      choices: ["Rain", "Light (candles, lamps, or fire)", "Sand", "Thunder"],
      answerIndex: 1,
      explanation: "These festivals all use light to push back against the darkness of the long winter nights.",
      hintLadder: [
        "Think about what winter has the most of — darkness.",
        "What would people add to brighten long, dark nights?",
        "Candles, lamps, and fire all give light."
      ]
    },
    {
      id: "g6.winter.world.w7.d5.q3",
      type: "multiple_choice",
      stem: "Why do cultures in far-northern regions (like the Sami of northern Scandinavia) often have especially rich winter stories?",
      choices: [
        "They have no summer at all",
        "Their long, dark winters dominate life there, so winter naturally fills their tales and traditions",
        "They were told to by other countries",
        "Winter is exactly the same everywhere on Earth"
      ],
      answerIndex: 1,
      explanation: "Geography shapes stories: where winters are long and dark, winter looms large in a culture's imagination, myths, and celebrations.",
      hintLadder: [
        "Think about how much of the year is winter in the far north.",
        "People tell stories about what surrounds their daily lives.",
        "Long, dominant winters lead to rich winter tales."
      ],
      misconceptionsTargeted: ["winter-is-universal-sameness"]
    },
    {
      id: "g6.winter.world.w7.d5.q4",
      type: "short_answer",
      stem: "Describe ONE winter tradition, festival, or folktale you know (from your own culture or another), and explain what it helps people feel or remember during winter.",
      rubric: {
        level3: "Names a real winter tradition/festival/folktale AND clearly explains its meaning or the feeling/value it gives people during winter.",
        level2: "Names a tradition but the explanation of its meaning is vague or thin.",
        level1: "Names nothing specific, or the example is not actually a winter tradition/story."
      },
      exemplar: "In my family we light candles and share a big meal on the longest night of the year. It helps us feel warm and connected, and it reminds us that the days will start getting longer again.",
      hintLadder: [
        "Pick any winter celebration or story you've heard of.",
        "Ask: what does it help people feel — hope, togetherness, warmth?",
        "Explain the meaning, not just the activity."
      ]
    },
    {
      id: "g6.winter.world.w7.d5.q5",
      type: "short_answer",
      stem: "Winter folktales from very different places often share themes like surviving the cold, the return of the sun, or kindness to strangers. Why might faraway cultures create such SIMILAR winter stories?",
      rubric: {
        level3: "Explains that people everywhere face the same winter challenges (cold, darkness, needing each other), so their stories address shared human needs and hopes.",
        level2: "Gives a partial reason (e.g., 'everyone has winter') without connecting it to shared human experiences or needs.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "Even far apart, people all face cold, dark winters and depend on each other to get through them, so their stories naturally share the same hopes — that the sun returns and that people help one another survive.",
      hintLadder: [
        "What challenges does EVERY culture face in winter?",
        "How might shared problems lead to shared story themes?",
        "Connect 'same human needs' to 'similar stories.'"
      ]
    }
  ],
  reflectionPrompt: "Which winter tradition or folktale from another culture surprised you the most, and how could its ideas inspire the frozen-world story you're writing this week?",
  misconceptionBank: [
    {
      id: "winter-is-universal-sameness",
      label: "Assumes winter is the same everywhere",
      description: "Believes winter and its traditions look identical across the world, ignoring how geography and climate shape different cultures' stories.",
      coachMove: "Compare a place with months of darkness to one with mild winters: 'How might that difference change the stories people tell?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Festivals of Light",
      prompt:
        "Across the world — India's Diwali, the Jewish Hanukkah, Sweden's St. Lucia's Day — winter festivals keep lighting candles and lamps. What do you think LIGHT is meant to stand for in the middle of the darkest season?",
      answer: "Light usually stands for hope, warmth, and the return of the sun — a way of pushing back against the long, dark winter nights.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Winter Folktale Tradition",
      challenge:
        "Invent a winter folktale or tradition for a frozen world of your own imagining. Give it a story, a symbol, and a reason people keep it alive — the way real cultures do.",
      steps: [
        "Choose your frozen world and what its people fear or hope for most in winter.",
        "Write a short folktale (4-6 sentences) that explains something about winter there.",
        "Invent a tradition tied to the tale — a light, a food, a gathering, or a symbol.",
        "Explain in one sentence what feeling or lesson the tradition gives the people."
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
          id: "g6.winter.world.w7.d5.arena1",
          type: "multiple_choice",
          stem: "A folktale explains WHY the days slowly grow longer after midwinter by telling of a sun that is 'reborn' each winter. What is this kind of story mainly doing?",
          choices: [
            "Reporting the exact scientific cause of the seasons",
            "Using a story to explain a natural event and give people hope",
            "Advertising a product",
            "Recording last week's weather"
          ],
          answerIndex: 1,
          explanation: "Folktales often explain natural events (like lengthening days) through story, offering meaning and hope rather than a scientific report.",
          hintLadder: [
            "Is this a science report or a traditional story?",
            "What does the 'reborn sun' idea give people during dark winter?",
            "It explains a natural event and offers hope."
          ]
        },
        {
          id: "g6.winter.world.w7.d5.arena2",
          type: "short_answer",
          stem: "Two winter folktales — one from northern Scandinavia and one from northern Japan — both feature a spirit of the snow. Name TWO reasons such distant cultures might invent similar snow-spirit stories.",
          rubric: {
            level3: "Gives two solid reasons, such as both regions having long/harsh snowy winters AND people everywhere using stories to explain and cope with the powerful, dangerous cold.",
            level2: "Gives one clear reason and a second that is weak or vague.",
            level1: "Gives no real reason or misunderstands the question."
          },
          exemplar: "Both places have long, harsh, snowy winters, so snow is a huge part of daily life worth telling stories about. And people everywhere use stories to make sense of something as powerful and dangerous as a blizzard, so both imagined a spirit behind the snow.",
          hintLadder: [
            "What do both regions have a lot of in winter?",
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
        "Take a 'trip' around the winter world: reach up like the northern lights (stretch tall), sweep low like falling snow (touch your toes), then huddle and 'warm your hands' over an imaginary fire. Do the loop twice.",
      scienceTieIn: "Gentle stretching increases blood flow and warms your muscles — a small reminder of why people in cold climates move, gather, and share warmth in winter.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Of all the winter traditions and folktales you explored today, which one would you most want to experience yourself, and why? How might it inspire your frozen-world story?",
      badge: { id: "winter-folktale-voyager", name: "Folktale Voyager", emoji: "🕯️" },
      estimatedMinutes: 7
    }
  }
};
