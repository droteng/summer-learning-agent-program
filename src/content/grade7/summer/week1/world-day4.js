// Grade 7 World/Current Affairs — Summer Voyage, Week 1 (Explorer Mode), Day 4.
// Topic: reading maps & geography + evaluating whether a source is reliable.

export const summerG7WorldW1D4 = {
  id: "g7.summer.world.w1.d4",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Reading maps & geography + evaluating source reliability",
  topicTag: "maps-and-sources",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.2.6-8", "C3.D3.Civ.13"],
  hook: "No explorer travels without a map — and no smart explorer trusts a map without checking who made it. Today you learn to read the tools of geography AND to judge whether a source is one you can rely on.",
  miniLesson: [
    "Maps use tools to be read accurately: a compass rose shows direction (N, S, E, W), a scale bar converts map distance to real distance, and a legend (key) explains what the symbols mean.",
    "Latitude lines run east-west and measure how far north or south of the equator you are; longitude lines run north-south and measure east or west of the prime meridian.",
    "A reliable source is current, has a named author or trusted organization, cites evidence, and isn't just trying to sell you something. Ask: who made this, when, why, and can I verify it elsewhere?"
  ],
  workedExample: {
    prompt: "A map's scale bar shows that 2 centimeters equals 50 kilometers. Two towns are 6 centimeters apart on the map. How far apart are they in real life?",
    steps: [
      "Find the unit: 2 cm = 50 km, so 1 cm = 25 km.",
      "The towns are 6 cm apart on the map.",
      "Multiply: 6 cm × 25 km per cm = 150 km.",
      "Real distance between the towns: 150 kilometers."
    ],
    answer: "150 kilometers apart."
  },
  items: [
    {
      id: "g7.summer.world.w1.d4.q1",
      type: "multiple_choice",
      stem: "On a map, which tool tells you what the symbols and colors mean?",
      choices: ["The compass rose", "The legend (key)", "The scale bar", "The latitude lines"],
      answerIndex: 1,
      explanation: "The legend, or key, explains what each symbol and color on the map represents.",
      hintLadder: [
        "One tool is a little box that 'decodes' the map's symbols.",
        "It's not about direction or distance.",
        "The legend (key) explains the symbols."
      ]
    },
    {
      id: "g7.summer.world.w1.d4.q2",
      type: "multiple_choice",
      stem: "Lines that run east-west and measure how far NORTH or SOUTH of the equator a place is are called...",
      choices: ["Longitude lines", "Latitude lines", "Scale bars", "Compass roses"],
      answerIndex: 1,
      explanation: "Latitude lines run east-west and measure distance north or south of the equator (which is 0° latitude).",
      hintLadder: [
        "One set measures north-south position; the other measures east-west position.",
        "The equator is the 0° line of this type.",
        "Latitude runs east-west and measures north/south."
      ],
      misconceptionsTargeted: ["lat-long-swap"]
    },
    {
      id: "g7.summer.world.w1.d4.q3",
      type: "numeric",
      stem: "A map scale reads: 1 centimeter = 20 kilometers. A river on the map is 7 centimeters long. How long is the real river in kilometers?",
      answer: 140,
      tolerance: 0,
      unit: "kilometers",
      hintLadder: [
        "Each centimeter stands for 20 real kilometers.",
        "Multiply the map length by 20.",
        "7 × 20 = 140."
      ],
      explanation: "7 cm × 20 km per cm = 140 kilometers."
    },
    {
      id: "g7.summer.world.w1.d4.q4",
      type: "multiple_choice",
      stem: "You find two websites about a river's length. Which is the MORE reliable source?",
      choices: [
        "A blog post from 2009 with no author and lots of ads, ending in 'BUY OUR RAFTING TOUR!'",
        "A 2024 page from a national geographic survey agency, with an author and cited measurements",
        "A social media post with no date that says 'trust me, I've been there'",
        "A meme image someone shared with the number written on it"
      ],
      answerIndex: 1,
      explanation: "It's current, has a named author and a trusted organization, and cites evidence — the marks of a reliable source. The others lack authorship, dates, or evidence, or are trying to sell something.",
      hintLadder: [
        "Ask: who made it, when, and can you verify it?",
        "Which one has an author, a recent date, AND cited evidence?",
        "The survey-agency page checks every reliability box."
      ]
    },
    {
      id: "g7.summer.world.w1.d4.q5",
      type: "short_answer",
      stem: "You're researching whether a national park is safe to visit this summer. List THREE questions you'd ask to decide if a website is a reliable source, and explain why each matters.",
      rubric: {
        level3: "Names three valid reliability questions (e.g., who is the author/organization? when was it published? does it cite evidence or is it trying to sell something?) AND explains why each matters.",
        level2: "Names three questions but explanations are thin, OR names two solid ones with good reasons.",
        level1: "Names fewer than two valid questions or gives no reasoning."
      },
      exemplar: "1) Who wrote it? A named expert or the park's official service is more trustworthy than an anonymous post. 2) When was it published? Safety info must be current, not from years ago. 3) Does it cite evidence or is it selling a tour? Cited facts are more reliable than an ad trying to make money off my visit.",
      hintLadder: [
        "Think: author, date, and purpose.",
        "For each, ask why it would make a source more or less trustworthy.",
        "Explain how each question protects you from bad information."
      ]
    }
  ],
  reflectionPrompt: "Next time you look something up online, which ONE reliability question will you always ask first — and why that one?",
  misconceptionBank: [
    {
      id: "lat-long-swap",
      label: "Swaps latitude and longitude",
      description: "Confuses which lines measure north-south position versus east-west position.",
      coachMove: "Anchor it: 'latitude' sounds like 'ladder' — the rungs go across (east-west) and you climb up/down (north-south). Longitude lines are the 'long' ones running pole to pole."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Source Would You Trust?",
      prompt:
        "You need a river's real length for your expedition. Source (A): a 2024 government survey page with an author and cited measurements. Source (B): a random undated post that ends 'BUY OUR RAFTING GEAR!' Which would you trust — and what three clues gave it away?",
      answer: "Trust (A). Clues: it's recent (2024), it has a named author/organization, and it cites real measurements. (B) has no date, no author, and is trying to sell you something.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Draw an Explorer's Map",
      challenge:
        "Create a map of a real or imagined place for your summer expedition. Include the three key map tools — a compass rose, a scale bar, and a legend — so another explorer could actually use it to navigate.",
      steps: [
        "Sketch your territory (your neighborhood, a park, or an imagined island).",
        "Add a compass rose showing N, S, E, and W.",
        "Add a scale bar (decide how much real distance one unit represents).",
        "Add a legend explaining at least three symbols you used (trail, water, campsite)."
      ],
      deliverable: "A hand-drawn or digital map with a working compass rose, scale bar, and legend.",
      choiceBoard: [
        "Draw a full map with all three tools labeled.",
        "Make a 'map-reading cheat sheet' explaining what each tool does.",
        "Write directions from one point to another on your map using compass directions and the scale."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Geography Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.world.w1.d4.arena1",
          type: "numeric",
          stem: "A trail map's scale reads: 3 centimeters = 15 kilometers. The full loop trail measures 12 centimeters on the map. How long is the real trail in kilometers?",
          answer: 60,
          tolerance: 0,
          unit: "kilometers",
          hintLadder: [
            "Find the unit first: 3 cm = 15 km, so 1 cm = ? km.",
            "1 cm = 15 ÷ 3 = 5 km.",
            "Multiply the map length by 5: 12 × 5 = 60."
          ],
          explanation: "3 cm = 15 km means 1 cm = 5 km. The trail is 12 cm, so 12 × 5 = 60 kilometers."
        },
        {
          id: "g7.summer.world.w1.d4.arena2",
          type: "short_answer",
          stem: "An explorer says: 'This map MUST be right — it looked really professional and had cool colors.' Explain why 'it looks professional' is NOT enough to call a source reliable, and name two things you'd check instead.",
          rubric: {
            level3: "Explains that appearance can be faked/doesn't prove accuracy AND names two real reliability checks (author/organization, date, cited evidence, verifiable elsewhere).",
            level2: "Explains the flaw OR names two checks, but not both clearly.",
            level1: "Agrees that looks are enough or gives no valid checks."
          },
          exemplar: "Looking professional doesn't make a map accurate — anyone can add nice colors and fonts. Instead I'd check who made it (a trusted mapping agency or a random person?) and when it was published, and whether the information can be verified on another reliable map.",
          hintLadder: [
            "Can a wrong map still look polished? Why?",
            "Appearance isn't evidence of accuracy.",
            "Name two things that actually signal reliability (author, date, verification)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Compass Rose Stretch",
      prompt:
        "Stand up and become a human compass. Reach NORTH (arms up high), lunge EAST (right), reach SOUTH (touch toes), lunge WEST (left). Move through all four directions slowly, then repeat faster. Do two full rounds.",
      scienceTieIn:
        "Cross-body movements like reaching side to side get both halves of your brain working together, which can boost focus and memory.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You learned to read maps AND to judge sources today. Write about one time knowing whether to trust a source would have changed a decision you made.",
      badge: { id: "g7-map-navigator", name: "Map Navigator", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
