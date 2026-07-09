// Grade 5 Science — Winter Expedition, Week 4 (Space & the Solar System), Day 3.
// Topic: Moon phases and why we have seasons (Earth's tilt) — the science
// behind winter itself.
// Grade 5 counterpart of g6.winter.sci.w4.d3: same topic, shorter and simpler
// explanations, whole-number tilt value, more scaffolding.

export const winterG5ScienceW4D3 = {
  id: "g5.winter.sci.w4.d3",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Science",
  topic: "Moon phases and why we have seasons (Earth's tilt)",
  topicTag: "moon-phases-seasons",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-ESS1-2", "NGSS.5-PS2-1"],
  hook: "Why is it dark and cold outside right now? It is NOT because Earth moved far from the Sun — it is because of a tilt. Today you crack the secret behind winter and the changing shapes of the Moon.",
  miniLesson: [
    "The Moon does not make its own light — it reflects sunlight, like a mirror. As the Moon moves around Earth (about once a month), we see different amounts of its lit side. Those changing shapes are the PHASES: new, crescent, quarter, gibbous, and full.",
    "Earth is TILTED a little to one side, about 23 degrees. As Earth travels around the Sun, this tilt always points the same way, so different parts of Earth lean toward or away from the Sun during the year.",
    "When your half of Earth tilts AWAY from the Sun, sunlight hits at a low, slanted angle and days are short — that's winter. When it tilts TOWARD the Sun, sunlight is more direct and days are long — that's summer. Seasons come from the TILT, not from being closer to or farther from the Sun."
  ],
  workedExample: {
    prompt: "It's winter where you live in the Northern Hemisphere. Using tilt, explain why it's cold — and tell what season it is in Australia (Southern Hemisphere) at the same time.",
    steps: [
      "In northern winter, the Northern Hemisphere is tilted AWAY from the Sun.",
      "Tilted away means sunlight comes in at a low, slanted angle and days are short, so it's cold.",
      "The Southern Hemisphere is on the other side of the tilt, so it is leaning TOWARD the Sun at that same time.",
      "So while the north has winter, Australia is having summer."
    ],
    answer: "The north is cold because it tilts away from the Sun (low, slanted sunlight). At the same time Australia tilts toward the Sun, so it's summer there."
  },
  items: [
    {
      id: "g5.winter.sci.w4.d3.q1",
      type: "multiple_choice",
      stem: "Why do we see the Moon shining in the night sky?",
      choices: [
        "It reflects light from the Sun.",
        "It makes its own light like a little star.",
        "It glows from heat inside it.",
        "City lights bounce off it."
      ],
      answerIndex: 0,
      explanation: "The Moon makes no light of its own. We see it because it reflects sunlight, like a mirror.",
      hintLadder: [
        "Is the Moon a star? No.",
        "Where does all the light in our solar system come from?",
        "The Moon reflects the Sun's light."
      ],
      misconceptionsTargeted: ["moon-makes-light"]
    },
    {
      id: "g5.winter.sci.w4.d3.q2",
      type: "multiple_choice",
      stem: "What really causes Earth's seasons?",
      choices: [
        "Earth getting closer to and farther from the Sun.",
        "The Sun getting hotter and cooler.",
        "The Moon blocking sunlight.",
        "The tilt of Earth as it travels around the Sun."
      ],
      answerIndex: 3,
      explanation: "Seasons come from Earth's tilt of about 23 degrees, which changes how much and how directly sunlight hits your part of Earth.",
      hintLadder: [
        "If distance caused seasons, both halves of Earth would have winter at the same time.",
        "Think about what makes one half of Earth lean toward the Sun.",
        "It's the tilt of Earth."
      ],
      misconceptionsTargeted: ["seasons-caused-by-distance"]
    },
    {
      id: "g5.winter.sci.w4.d3.q3",
      type: "multiple_choice",
      stem: "During a FULL moon, where is the Moon compared to Earth and the Sun?",
      choices: [
        "Between Earth and the Sun, so we see its dark side.",
        "Directly behind the Sun.",
        "On the opposite side of Earth from the Sun, so we see its fully lit side.",
        "Below Earth where sunlight can't reach it."
      ],
      answerIndex: 2,
      explanation: "At a full moon the Moon is on the far side of Earth from the Sun, so the whole lit half faces us.",
      hintLadder: [
        "A full moon means we see the WHOLE lit half.",
        "For us to see all the lit side, the Sun must be behind us.",
        "The Moon is opposite the Sun, with Earth in between."
      ]
    },
    {
      id: "g5.winter.sci.w4.d3.q4",
      type: "numeric",
      stem: "About how many degrees is Earth tilted to one side? (Give the whole number the lesson used.)",
      answer: 23,
      tolerance: 1,
      unit: "degrees",
      hintLadder: [
        "The lesson gave a tilt amount.",
        "It's a little more than 20 degrees.",
        "Earth is tilted about 23 degrees."
      ],
      explanation: "Earth is tilted about 23 degrees, and that tilt is what gives us seasons."
    },
    {
      id: "g5.winter.sci.w4.d3.q5",
      type: "short_answer",
      stem: "A friend says, 'It's winter because Earth is far from the Sun right now.' Explain why that's wrong and give the real reason.",
      rubric: {
        level3: "Says the distance idea is wrong (both halves of Earth would have the same season if distance caused it) AND explains that Earth's tilt makes a hemisphere lean away from the Sun, giving low-angle, short-day sunlight.",
        level2: "Says tilt causes seasons but doesn't clearly explain why the distance idea is wrong.",
        level1: "Agrees with the friend or gives no correct reason."
      },
      exemplar: "If distance made winter, the whole Earth would be cold at once — but Australia has summer while we have winter. The real reason is the tilt: right now our half of Earth leans away from the Sun, so sunlight is weak and days are short.",
      hintLadder: [
        "If distance were the cause, would both halves of Earth share the same season?",
        "Think about what Australia is doing while we are cold.",
        "Bring it back to Earth's tilt and the angle of sunlight."
      ]
    }
  ],
  reflectionPrompt: "Tonight, look for the Moon. What phase is it in — how much of it is lit? Draw its shape and write down the date.",
  misconceptionBank: [
    {
      id: "seasons-caused-by-distance",
      label: "Thinks seasons are caused by Earth's distance from the Sun",
      description: "Believes winter happens when Earth is far from the Sun instead of from the tilt.",
      coachMove: "Point out that both halves of Earth would then be cold at once — but they have OPPOSITE seasons. The tilt, not distance, is the cause."
    },
    {
      id: "moon-makes-light",
      label: "Thinks the Moon makes its own light",
      description: "Treats the Moon like a star instead of a mirror that reflects sunlight.",
      coachMove: "Shine a flashlight on a ball in a dark room — the ball only 'glows' on the lit side, exactly like the Moon reflecting the Sun."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Same Sun, Opposite Seasons",
      prompt:
        "Right now it's cold winter here, but in Australia kids are at the beach in summer. You're both going around the exact same Sun at the same time. How can one Earth have two opposite seasons at once?",
      answer:
        "Because of Earth's TILT. One half leans toward the Sun (summer) while the other half leans away (winter). Distance can't explain it — every part of Earth is about the same distance from the Sun at any moment.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Model the Phases and the Tilt",
      challenge:
        "Use a light (lamp or flashlight as the Sun) and a ball (as the Moon or Earth) to model something you learned. Show either the Moon's phases OR why a tilted Earth gets seasons.",
      materials: ["A flashlight or lamp", "A ball, orange, or crumpled-paper sphere"],
      steps: [
        "Set your light as the Sun in a dimmed room.",
        "For phases: hold the 'Moon' ball at different spots around your head and watch how much lit side you see.",
        "For seasons: tilt a 'planet' ball to one side and carry it around the light, watching which half leans toward the lamp.",
        "Write 2–3 sentences about what your model showed."
      ],
      deliverable: "A short write-up (with a drawing or photo) of your model and what it showed about phases or seasons.",
      choiceBoard: [
        "Model and explain the Moon's phases with a ball and light.",
        "Model and explain why tilt causes seasons.",
        "Draw a labeled picture of the phase cycle OR the tilt-and-seasons setup instead of building it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Phases & Seasons Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.sci.w4.d3.arena1",
          type: "multiple_choice",
          stem: "It is June and the Northern Hemisphere is having summer. What season is it in the Southern Hemisphere, and why?",
          choices: [
            "Summer too — the whole Earth shares one season.",
            "Winter — the Southern Hemisphere is tilted away from the Sun then.",
            "Fall — because the Moon blocks the Sun.",
            "It depends on how close Earth is to the Sun."
          ],
          answerIndex: 1,
          explanation: "When the north tilts toward the Sun (summer), the south tilts away, so it's winter there.",
          hintLadder: [
            "The two halves of Earth always have OPPOSITE seasons.",
            "If it's summer in the north, the south leans away from the Sun.",
            "That means winter in the Southern Hemisphere."
          ]
        },
        {
          id: "g5.winter.sci.w4.d3.arena2",
          type: "short_answer",
          stem: "Explain why the half of Earth tilted AWAY from the Sun is colder, even though Earth's distance from the Sun barely changes. Talk about the angle of sunlight and how long the day is.",
          rubric: {
            level3: "Explains that tilting away makes sunlight hit at a low, slanted angle AND makes days shorter, so less warmth reaches the ground — which is why it's cold.",
            level2: "Mentions either the low angle or the short days, but not both, or the link to cold is unclear.",
            level1: "No correct reason given."
          },
          exemplar: "Tilted away, the Sun stays low in the sky, so its light spreads out and each spot gets less warmth. Days are also shorter, so there's less time to warm up. Together that makes it cold.",
          hintLadder: [
            "Think about sunlight coming straight down vs. at a low slant.",
            "Spread-out light gives less warmth to each patch of ground.",
            "Add in short winter days and explain the cold."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Tilt & Orbit",
      prompt:
        "Stand and lean your whole body a little to one side to be 'tilted Earth.' Keeping that same lean, walk a slow circle around a spot on the floor (the Sun). Notice how sometimes your tilt leans toward the center and sometimes away — just like the seasons. Then straighten up and stretch tall.",
      scienceTieIn: "Your tilt stayed pointed the same way the whole trip — that's exactly why real Earth's fixed tilt gives us winter and summer as it goes around the Sun.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Now that you know winter comes from Earth's tilt, does the cold season feel different to you? Write what you'd tell someone who thinks winter means 'the Sun moved away.'",
      badge: { id: "g5-winter-phase-season-scout", name: "Phase & Season Scout", emoji: "🌙" },
      estimatedMinutes: 7
    }
  }
};
