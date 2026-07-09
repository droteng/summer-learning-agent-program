// Grade 6 Science — Winter Expedition, Week 4 (Space & the Solar System), Day 3.
// Topic: Moon phases and why we have seasons (Earth's axial tilt) — the science
// behind winter itself.

export const winterG6ScienceW4D3 = {
  id: "g6.winter.sci.w4.d3",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Science",
  topic: "Moon phases and why we have seasons (Earth's tilt)",
  topicTag: "moon-phases-seasons",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ESS1-1", "NGSS.MS-ESS1-2"],
  hook: "Why is it dark and cold outside right now? It's not because Earth is far from the Sun — it's because of a tilt. Today you crack the code behind winter and the changing shapes of the Moon.",
  miniLesson: [
    "The Moon doesn't make its own light — it reflects sunlight. As the Moon orbits Earth (about every 29–30 days), we see different amounts of its lit half. That cycle is the phases: new, crescent, quarter, gibbous, full, and back.",
    "Earth's axis is tilted about 23.5°. As Earth orbits the Sun, this tilt stays pointed the same way, so different parts of Earth lean toward or away from the Sun at different times of year.",
    "When your hemisphere tilts AWAY from the Sun, sunlight hits at a low, spread-out angle and days are short — that's winter. When it tilts TOWARD the Sun, sunlight is direct and days are long — that's summer. Seasons are caused by TILT, not by distance from the Sun."
  ],
  workedExample: {
    prompt: "It's winter in the Northern Hemisphere. Explain, using tilt, why it's cold — and what season it is in Australia (Southern Hemisphere) at the same time.",
    steps: [
      "In Northern winter, the Northern Hemisphere is tilted AWAY from the Sun.",
      "Tilted away means sunlight arrives at a low, spread-out angle and days are short, so it's cold.",
      "The Southern Hemisphere, on the opposite side of the tilt, is leaning TOWARD the Sun at that same time.",
      "So while the north has winter, Australia is having summer."
    ],
    answer: "The north is cold because it tilts away from the Sun (low, spread-out sunlight); at the same time Australia tilts toward the Sun, so it's summer there."
  },
  items: [
    {
      id: "g6.winter.sci.w4.d3.q1",
      type: "multiple_choice",
      stem: "Why does the Moon shine in the night sky?",
      choices: [
        "It makes its own light like a small star.",
        "City lights bounce off it.",
        "It glows from heat inside it.",
        "It reflects light from the Sun."
      ],
      answerIndex: 3,
      explanation: "The Moon produces no light of its own; we see it because it reflects sunlight.",
      hintLadder: [
        "Is the Moon a star? No.",
        "Where does ALL the light in our solar system originally come from?",
        "The Moon reflects the Sun's light."
      ],
      misconceptionsTargeted: ["moon-makes-light"]
    },
    {
      id: "g6.winter.sci.w4.d3.q2",
      type: "multiple_choice",
      stem: "What actually causes Earth's seasons?",
      choices: [
        "Earth getting closer to and farther from the Sun.",
        "The tilt of Earth's axis as Earth orbits the Sun.",
        "The Moon blocking sunlight.",
        "The Sun getting hotter and cooler."
      ],
      answerIndex: 1,
      explanation: "Seasons come from Earth's 23.5° axial tilt, which changes the angle and length of sunlight a hemisphere receives.",
      hintLadder: [
        "It's a common myth that distance causes seasons — but both hemispheres would then have winter together.",
        "Think about what makes one hemisphere lean toward the Sun.",
        "It's the tilt of Earth's axis."
      ],
      misconceptionsTargeted: ["seasons-caused-by-distance"]
    },
    {
      id: "g6.winter.sci.w4.d3.q3",
      type: "multiple_choice",
      stem: "During a FULL moon, where is the Moon relative to Earth and the Sun?",
      choices: [
        "Between Earth and the Sun, so we see its dark side.",
        "Directly behind the Sun.",
        "On the opposite side of Earth from the Sun, so we see its fully lit side.",
        "Below Earth where sunlight can't reach it."
      ],
      answerIndex: 2,
      explanation: "At full moon the Moon is on the far side of Earth from the Sun, so the entire sunlit half faces us.",
      hintLadder: [
        "A full moon means we see the WHOLE lit half.",
        "For us to see all the lit side, the Sun must be behind us.",
        "The Moon is opposite the Sun, with Earth in the middle."
      ]
    },
    {
      id: "g6.winter.sci.w4.d3.q4",
      type: "numeric",
      stem: "Earth's axis is tilted about how many degrees from straight up-and-down? (Give the number to the nearest half-degree the lesson used.)",
      answer: 23.5,
      tolerance: 0.5,
      unit: "degrees",
      hintLadder: [
        "The lesson gave a specific tilt angle.",
        "It's a bit more than 23 degrees.",
        "Earth's axial tilt is about 23.5 degrees."
      ],
      explanation: "Earth's axis is tilted about 23.5°, and that tilt is what drives the seasons."
    },
    {
      id: "g6.winter.sci.w4.d3.q5",
      type: "short_answer",
      stem: "A friend says, 'It's winter because Earth is far from the Sun right now.' Explain why that's wrong and give the real reason.",
      rubric: {
        level3: "Rejects the distance idea (noting both hemispheres would share a season if distance caused it) AND explains that Earth's tilt makes a hemisphere lean away from the Sun, giving low-angle, short-day sunlight.",
        level2: "Says tilt causes seasons but doesn't clearly explain why the distance idea fails.",
        level1: "Agrees with the friend or gives no correct reasoning."
      },
      exemplar: "If distance caused winter, the whole Earth would have winter at once — but Australia has summer when we have winter. The real reason is Earth's tilt: right now our hemisphere leans away from the Sun, so sunlight is weak and days are short.",
      hintLadder: [
        "If distance were the cause, would both hemispheres have the same season?",
        "Think about what Australia is doing while we're cold.",
        "Bring it back to Earth's tilt and the angle of sunlight."
      ]
    }
  ],
  reflectionPrompt: "Tonight, look for the Moon. What phase is it in — how much of it is lit? Sketch its shape and note the date.",
  misconceptionBank: [
    {
      id: "seasons-caused-by-distance",
      label: "Thinks seasons are caused by Earth's distance from the Sun",
      description: "Believes winter happens when Earth is far from the Sun rather than from axial tilt.",
      coachMove: "Point out that both hemispheres would then be cold at once — but they have OPPOSITE seasons. The tilt, not distance, is the cause."
    },
    {
      id: "moon-makes-light",
      label: "Thinks the Moon produces its own light",
      description: "Treats the Moon like a star instead of a reflector of sunlight.",
      coachMove: "Shine a flashlight on a ball in a dark room — the ball only 'glows' on the lit side, exactly like the Moon reflecting the Sun."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Same Sun, Opposite Seasons",
      prompt:
        "Right now it's cold winter here, but in Australia kids are at the beach in summer. You're both orbiting the exact same Sun at the same time. How can one Earth have two opposite seasons at once?",
      answer:
        "Because of Earth's TILT. One hemisphere leans toward the Sun (summer) while the other leans away (winter). Distance from the Sun can't explain it — the whole planet is the same distance at any moment.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Model the Phases and the Tilt",
      challenge:
        "Use a light source (lamp or flashlight as the Sun) and a ball (as the Moon or Earth) to model something you learned. Show either the Moon's phases OR why a tilted Earth gets seasons.",
      materials: ["A flashlight or lamp", "A ball, orange, or crumpled-paper sphere"],
      steps: [
        "Set your light as the Sun in a dimmed room.",
        "For phases: hold the 'Moon' ball at different spots around your head and observe how much lit side you see.",
        "For seasons: tilt a 'planet' ball 23.5° and carry it around the light, watching which half leans toward the lamp.",
        "Write 2–3 sentences explaining what your model showed."
      ],
      deliverable: "A short write-up (with a sketch or photo) of your model and what it demonstrated about phases or seasons.",
      choiceBoard: [
        "Model and explain the Moon's phases with a ball and light.",
        "Model and explain why tilt causes seasons.",
        "Draw a labeled diagram of the phase cycle OR the tilt-and-seasons setup instead of building it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Phases & Seasons Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.sci.w4.d3.arena1",
          type: "multiple_choice",
          stem: "It is June and the Northern Hemisphere is having summer. What season is it in the Southern Hemisphere, and why?",
          choices: [
            "Winter — the Southern Hemisphere is tilted away from the Sun then.",
            "Summer too — the whole Earth shares one season.",
            "Fall — because the Moon blocks the Sun.",
            "It depends on how close Earth is to the Sun."
          ],
          answerIndex: 0,
          explanation: "When the north tilts toward the Sun (summer), the south tilts away, so it's winter there.",
          hintLadder: [
            "The hemispheres always have OPPOSITE seasons.",
            "If it's summer in the north, the south leans away from the Sun.",
            "That means winter in the Southern Hemisphere."
          ]
        },
        {
          id: "g6.winter.sci.w4.d3.arena2",
          type: "short_answer",
          stem: "Explain why a hemisphere tilted AWAY from the Sun is colder, even though Earth's distance from the Sun barely changes. Mention the angle of sunlight and day length.",
          rubric: {
            level3: "Explains that tilting away makes sunlight strike at a low, spread-out angle AND makes days shorter, so less energy reaches the ground — hence colder.",
            level2: "Mentions either the low angle or short days, but not both, or the link to cold is unclear.",
            level1: "No correct mechanism given."
          },
          exemplar: "Tilted away, the Sun stays low in the sky, so its light spreads over a wider area and each spot gets less energy. Days are also shorter, so there's less time to warm up. Together that makes it cold.",
          hintLadder: [
            "Think about sunlight hitting straight down vs. at a low slant.",
            "Spread-out light delivers less energy per patch of ground.",
            "Add in short winter days and explain the cold."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Tilt & Orbit",
      prompt:
        "Stand and lean your whole body slightly to one side to be 'tilted Earth.' Keeping that same lean, walk a slow circle around a spot on the floor (the Sun). Notice how sometimes your tilt leans toward the center and sometimes away — just like the seasons. Straighten up and stretch tall.",
      scienceTieIn: "Your tilt stayed pointed the same way the whole trip — that's exactly why real Earth's fixed tilt gives us winter and summer as it orbits.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Now that you know winter comes from Earth's tilt, does the cold season feel different to you? Write what you'd tell someone who thinks winter means 'the Sun moved away.'",
      badge: { id: "phase-and-season-sage", name: "Phase & Season Sage", emoji: "🌙" },
      estimatedMinutes: 7
    }
  }
};
