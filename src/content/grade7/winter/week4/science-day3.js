// Grade 7 Science — Winter Expedition, Week 4 (Space & the Solar System), Day 3.
// Topic: Moon phases and why we have seasons (Earth's axial tilt) — with Grade 7
// depth: the geometry of sunlight angle, insolation, and the phase cycle mechanism.

export const winterG7ScienceW4D3 = {
  id: "g7.winter.sci.w4.d3",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Science",
  topic: "Moon phases and why we have seasons (Earth's tilt and sunlight angle)",
  topicTag: "moon-phases-seasons",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ESS1-1", "NGSS.MS-ESS1-2"],
  hook: "Why is it dark and cold outside right now? Counterintuitively, Earth is actually CLOSEST to the Sun in early January. Today you crack the real code behind winter — the geometry of a tilted planet — and the mechanism behind the changing shapes of the Moon.",
  miniLesson: [
    "The Moon produces no light; it reflects sunlight. As it orbits Earth (about every 29.5 days, the synodic month), the angle between Sun, Moon, and Earth changes, so we see different fractions of its lit half: new, crescent, quarter, gibbous, full, and back through the cycle.",
    "Earth's axis is tilted about 23.5° and stays pointed at nearly the same spot in space all year. As Earth orbits, this fixed tilt makes each hemisphere lean toward or away from the Sun at different times — the true cause of seasons.",
    "When a hemisphere tilts AWAY from the Sun, sunlight strikes at a low, glancing angle, spreading the same energy over a larger area (lower insolation) AND daylight is shorter — so less energy reaches each patch of ground. This geometry, not distance, is why winter is cold. Northern winter even coincides with Earth's CLOSEST approach to the Sun (perihelion)."
  ],
  workedExample: {
    prompt: "It's winter in the Northern Hemisphere, yet Earth is nearest the Sun in early January. Explain, using sunlight ANGLE and day length, why the north is still cold — and what season Australia has.",
    steps: [
      "In Northern winter, the Northern Hemisphere tilts AWAY from the Sun.",
      "Tilted away, sunlight arrives at a low, glancing angle, so the same energy spreads over a wider area — each patch of ground gets less (lower insolation).",
      "Days are also shorter, so there is less time to absorb heat — this outweighs the small distance change from being near the Sun.",
      "The Southern Hemisphere tilts TOWARD the Sun at that moment, receiving direct high-angle sunlight and long days — so Australia has summer."
    ],
    answer: "The north is cold because its tilt gives low-angle, spread-out sunlight and short days, which outweigh Earth being slightly closer to the Sun; meanwhile Australia tilts toward the Sun, so it has summer."
  },
  items: [
    {
      id: "g7.winter.sci.w4.d3.q1",
      type: "multiple_choice",
      stem: "Why does the Moon shine in the night sky?",
      choices: [
        "It makes its own light like a small star.",
        "It glows from heat inside it.",
        "It reflects light from the Sun.",
        "City lights bounce off it."
      ],
      answerIndex: 2,
      explanation: "The Moon produces no light of its own; we see the fraction of its surface that is reflecting sunlight toward us.",
      hintLadder: [
        "Is the Moon a star? No.",
        "Where does all the light in our solar system originally come from?",
        "The Moon reflects the Sun's light."
      ],
      misconceptionsTargeted: ["moon-makes-light"]
    },
    {
      id: "g7.winter.sci.w4.d3.q2",
      type: "multiple_choice",
      stem: "Northern winter happens when Earth is actually CLOSEST to the Sun. What does this fact prove about the cause of seasons?",
      choices: [
        "Seasons cannot be caused by distance — they are caused by Earth's axial tilt and the resulting sunlight angle.",
        "Seasons must be caused by Earth's changing distance from the Sun.",
        "The Moon must be blocking the Sun in winter.",
        "The Sun must be cooling down in winter."
      ],
      answerIndex: 0,
      explanation: "If distance caused seasons, being closest to the Sun would make it warmest — but it's winter in the north then. So tilt and sunlight angle, not distance, drive the seasons.",
      hintLadder: [
        "If closer meant warmer, what season should the whole Earth have in January?",
        "The fact that it's winter while closest rules distance out.",
        "The real cause is the tilt and the angle of sunlight."
      ],
      misconceptionsTargeted: ["seasons-caused-by-distance"]
    },
    {
      id: "g7.winter.sci.w4.d3.q3",
      type: "multiple_choice",
      stem: "During a FIRST-QUARTER moon, we see exactly half of the lit side. What does this tell us about the Sun–Earth–Moon geometry?",
      choices: [
        "The Moon is directly between Earth and the Sun.",
        "The Sun, Earth, and Moon form roughly a right angle, with the Moon a quarter of the way through its orbit.",
        "The Moon is exactly opposite the Sun, with Earth in the middle.",
        "The Moon is behind the Sun."
      ],
      answerIndex: 1,
      explanation: "At first quarter the Moon is about 90° from the Sun as seen from Earth (a quarter of the way around its orbit), so we see half its lit hemisphere.",
      hintLadder: [
        "Half-lit means the Sun is lighting the Moon from the side, as we view it.",
        "That side-lighting happens when the angle Sun–Earth–Moon is about 90°.",
        "First quarter = a right-angle geometry, a quarter through the orbit."
      ]
    },
    {
      id: "g7.winter.sci.w4.d3.q4",
      type: "numeric",
      stem: "The Moon's cycle of phases (new moon to new moon) takes about how many days? (Give the value to the nearest half-day the lesson used.)",
      answer: 29.5,
      tolerance: 0.5,
      unit: "days",
      hintLadder: [
        "The lesson called this the synodic month.",
        "It's about a month, a bit under 30 days.",
        "The phase cycle is about 29.5 days."
      ],
      explanation: "The synodic month — new moon back to new moon — is about 29.5 days."
    },
    {
      id: "g7.winter.sci.w4.d3.q5",
      type: "short_answer",
      stem: "A friend says, 'It's winter because Earth is far from the Sun right now.' Using the fact that Earth is actually CLOSEST to the Sun in January, explain why the distance idea is wrong and give the real mechanism.",
      rubric: {
        level3: "Rejects the distance idea using the perihelion fact (Earth is closest in January yet the north has winter) AND explains the real mechanism: tilt makes the hemisphere lean away, giving low-angle, spread-out sunlight and short days.",
        level2: "Says tilt causes seasons but doesn't clearly use the closest-in-January fact to disprove distance, or omits the sunlight-angle mechanism.",
        level1: "Agrees with the friend or gives no correct reasoning."
      },
      exemplar: "Earth is actually nearest the Sun in early January, yet the north has winter then — so distance can't be the cause, or being closest would make it warm. The real reason is tilt: our hemisphere leans away from the Sun, so sunlight comes in at a low angle and spreads thin, and days are short. That geometry makes it cold.",
      hintLadder: [
        "When is Earth actually closest to the Sun?",
        "If closest caused warmth, January should be hot — but it isn't.",
        "Bring it back to tilt, sunlight angle, and day length."
      ]
    }
  ],
  reflectionPrompt: "Tonight, look for the Moon. Estimate what fraction is lit and sketch its shape with the date. Based on the phase, where do you think the Moon is in its orbit relative to the Sun?",
  misconceptionBank: [
    {
      id: "seasons-caused-by-distance",
      label: "Thinks seasons are caused by Earth's distance from the Sun",
      description: "Believes winter happens when Earth is far from the Sun rather than from axial tilt and sunlight angle.",
      coachMove: "Point out that Earth is actually CLOSEST to the Sun in January, yet the north has winter — and both hemispheres would share a season if distance were the cause. Tilt and sunlight angle, not distance, drive seasons."
    },
    {
      id: "moon-makes-light",
      label: "Thinks the Moon produces its own light",
      description: "Treats the Moon like a star instead of a reflector of sunlight.",
      coachMove: "Shine a flashlight on a ball in a dark room — the ball only 'glows' on the lit side, exactly like the Moon reflecting the Sun as the viewing angle changes."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Closest, Yet Coldest",
      prompt:
        "Surprise: Earth is actually CLOSEST to the Sun in early January — right in the middle of Northern winter. If being closer doesn't make us warm, what really controls the seasons?",
      answer:
        "The tilt of Earth's axis. In January the Northern Hemisphere leans AWAY from the Sun, so sunlight strikes at a low, spread-out angle and days are short. That geometry easily outweighs the tiny distance change — so we're cold even while nearest the Sun.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Model the Phases and the Tilt",
      challenge:
        "Use a light source (lamp or flashlight as the Sun) and a ball. Model EITHER the Moon's phase cycle (naming the Sun–Earth–Moon angle at each phase) OR why a 23.5°-tilted Earth gets seasons (showing the sunlight-angle difference).",
      materials: ["A flashlight or lamp", "A ball, orange, or crumpled-paper sphere"],
      steps: [
        "Set your light as the Sun in a dimmed room.",
        "For phases: hold the 'Moon' ball at several spots around your head and note the Sun–Earth–Moon angle and the lit fraction you see (new, quarter, full).",
        "For seasons: tilt a 'planet' ball 23.5° and carry it around the light, watching how the sunlight hits the leaning hemisphere at a steep vs. glancing angle.",
        "Write 3–4 sentences explaining the mechanism your model demonstrated (angle, lit fraction, or insolation)."
      ],
      deliverable: "A short write-up (with a sketch or photo) explaining the mechanism your model showed — phases via geometry, or seasons via sunlight angle.",
      choiceBoard: [
        "Model the phase cycle and label the Sun–Earth–Moon angle at each phase.",
        "Model why tilt changes sunlight angle and causes seasons.",
        "Draw a labeled diagram of the phase geometry OR the tilt-and-insolation setup instead of building it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Phases & Seasons Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w4.d3.arena1",
          type: "multiple_choice",
          stem: "It's June and the Northern Hemisphere has summer. Why does the Southern Hemisphere have winter at the exact same time?",
          choices: [
            "Summer too — the whole Earth shares one season.",
            "It depends on how close Earth is to the Sun that month.",
            "Fall — because the Moon blocks the Sun.",
            "Winter — Earth's fixed tilt means when the north leans toward the Sun, the south leans away, getting low-angle sunlight."
          ],
          answerIndex: 3,
          explanation: "The tilt is fixed, so the hemispheres always lean opposite ways: north toward the Sun (summer) means south away (winter), with weaker, low-angle sunlight.",
          hintLadder: [
            "The two hemispheres always lean opposite ways.",
            "If the north tilts toward the Sun, the south tilts away.",
            "Away means low-angle sunlight and winter in the south."
          ]
        },
        {
          id: "g7.winter.sci.w4.d3.arena2",
          type: "short_answer",
          stem: "Explain quantitatively why a hemisphere tilted AWAY from the Sun is colder, even though Earth's distance barely changes. Refer to the ANGLE of sunlight (energy spread over area) AND day length.",
          rubric: {
            level3: "Explains that low-angle sunlight spreads the same energy over a larger area (lower energy per unit area / insolation) AND that shorter days give less time to absorb heat — combining both to explain the cold.",
            level2: "Mentions either the angle-and-area effect or the short-day effect, but not both, or the link to cold is unclear.",
            level1: "No correct mechanism given."
          },
          exemplar: "When tilted away, the Sun stays low, so a beam of sunlight strikes the ground at a slant and its energy spreads across a wider patch — each square meter receives less energy than direct overhead light would deliver. Days are also short, so there are fewer hours to warm the ground. Less energy per area plus less time equals cold.",
          hintLadder: [
            "Compare a flashlight beam hitting a wall straight-on vs. at a slant.",
            "The slanted beam covers more area, so each spot gets less energy.",
            "Add short winter days and explain the combined cooling."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Tilt & Orbit",
      prompt:
        "Stand and lean your whole body slightly to one side to be 'tilted Earth.' Keeping that same lean, walk a slow circle around a spot on the floor (the Sun). Notice how your tilt leans toward the center on one side of the circle and away on the other — just like the seasons. Straighten up and stretch tall.",
      scienceTieIn: "Your tilt stayed pointed the same way the whole trip — that fixed orientation is exactly why real Earth's tilt gives us opposite seasons on opposite sides of its orbit.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Now that you know winter comes from tilt and sunlight angle — not distance — write what you'd tell someone who insists 'winter means the Sun moved away.' Use the closest-in-January fact in your explanation.",
      badge: { id: "g7-winter-tilt-geometry-sage", name: "Tilt Geometry Sage", emoji: "🌙" },
      estimatedMinutes: 7
    }
  }
};
