// Grade 6 History/Civics — Winter Expedition, Week 4 (Space & the Solar System),
// Day 4. Topic: the history of astronomy — early astronomers, the telescope, and
// how the model of the solar system changed over time.

export const winterG6HistoryW4D4 = {
  id: "g6.winter.hist.w4.d4",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "The history of astronomy: changing models of the solar system",
  topicTag: "history-of-astronomy",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2", "C3.D2.His.14"],
  hook: "For most of history, people were SURE the Sun went around the Earth. Today you follow the detectives — astronomers over 2,000 years — who used observation and new tools to overturn what everyone 'knew.'",
  miniLesson: [
    "Ancient astronomers like Ptolemy (about 150 CE) taught a GEOCENTRIC model: Earth sat still at the center and the Sun, Moon, and planets circled it. It matched what people saw and was believed for over 1,000 years.",
    "In 1543 Copernicus proposed a HELIOCENTRIC model — the Sun at the center, with Earth and the planets orbiting it. It was controversial because it moved Earth out of the center.",
    "In 1609 Galileo pointed a new invention, the telescope, at the sky. He saw moons orbiting Jupiter and phases of Venus — evidence that supported the Sun-centered model. Later Kepler and Newton explained the orbits with math and gravity."
  ],
  workedExample: {
    prompt: "Put these three ideas in the order they appeared in history: (a) the telescope reveals moons of Jupiter, (b) Ptolemy's Earth-centered model, (c) Copernicus proposes a Sun-centered model.",
    steps: [
      "Ptolemy's geocentric model came first, around 150 CE.",
      "Copernicus proposed heliocentrism much later, in 1543.",
      "Galileo's telescope observations came shortly after, in 1609.",
      "So the order is: (b) Ptolemy → (c) Copernicus → (a) Galileo's telescope."
    ],
    answer: "b → c → a (Ptolemy's Earth-centered model, then Copernicus's Sun-centered model, then Galileo's telescope evidence)."
  },
  items: [
    {
      id: "g6.winter.hist.w4.d4.q1",
      type: "multiple_choice",
      stem: "What did the GEOCENTRIC model claim was at the center of everything?",
      choices: ["The Sun", "Earth", "The Moon", "Jupiter"],
      answerIndex: 1,
      explanation: "'Geo' means Earth. The geocentric model put a motionless Earth at the center with everything orbiting it.",
      hintLadder: [
        "The prefix 'geo-' means Earth (as in geography).",
        "This was the old model people believed for over 1,000 years.",
        "Earth was placed at the center."
      ],
      misconceptionsTargeted: ["old-ideas-were-foolish"]
    },
    {
      id: "g6.winter.hist.w4.d4.q2",
      type: "multiple_choice",
      stem: "Who proposed the HELIOCENTRIC (Sun-centered) model in 1543?",
      choices: ["Ptolemy", "Copernicus", "Isaac Newton", "Neil Armstrong"],
      answerIndex: 1,
      explanation: "Copernicus published the Sun-centered model in 1543, challenging over a thousand years of Earth-centered belief.",
      hintLadder: [
        "'Helio' means Sun.",
        "This astronomer worked in the 1500s.",
        "It was Copernicus."
      ]
    },
    {
      id: "g6.winter.hist.w4.d4.q3",
      type: "multiple_choice",
      stem: "What NEW TOOL did Galileo use in 1609 to gather evidence about the solar system?",
      choices: [
        "A spacecraft",
        "A telescope",
        "A computer",
        "A radio dish"
      ],
      answerIndex: 1,
      explanation: "Galileo used the newly improved telescope to see Jupiter's moons and the phases of Venus, supporting the Sun-centered model.",
      hintLadder: [
        "It was an instrument for seeing far-off things more clearly.",
        "It let him spot moons around Jupiter.",
        "It was the telescope."
      ]
    },
    {
      id: "g6.winter.hist.w4.d4.q4",
      type: "short_answer",
      stem: "Explain how a new TOOL (the telescope) changed what astronomers could learn. Give one specific thing Galileo saw that helped change the model.",
      rubric: {
        level3: "Explains that the telescope let astronomers see details invisible to the naked eye AND names a specific observation (Jupiter's moons OR the phases of Venus) that supported the Sun-centered model.",
        level2: "Says the telescope helped them see more but gives no specific observation, or names an observation without explaining its importance.",
        level1: "No clear connection between the tool and new knowledge."
      },
      exemplar: "The telescope let Galileo see things too faint for the naked eye. He spotted four moons circling Jupiter, which proved not everything orbits Earth — supporting the idea that Earth isn't the center of everything.",
      hintLadder: [
        "What can a telescope reveal that eyes alone cannot?",
        "Think about the moons Galileo found around another planet.",
        "Explain why seeing moons orbit Jupiter mattered."
      ]
    },
    {
      id: "g6.winter.hist.w4.d4.q5",
      type: "short_answer",
      stem: "Why did it take so long for people to accept the Sun-centered model? Write one cause-and-effect sentence using 'because' or 'so.'",
      rubric: {
        level3: "Gives a clear cause→effect linking a real reason (the geocentric model matched everyday observation, was long-established, or challenged authority) to slow acceptance, using because/so.",
        level2: "Has a cause and effect but the link is vague or only partly accurate.",
        level1: "Lists facts with no causal link or an incorrect reason."
      },
      exemplar: "The Earth-centered model had been taught for over a thousand years and matched what people saw each day, so many were slow to believe the Sun was really at the center.",
      hintLadder: [
        "How long had the old model been believed?",
        "From the ground, it really LOOKS like the Sun moves around us.",
        "Join a cause to the slow acceptance with 'so' or 'because.'"
      ]
    }
  ],
  reflectionPrompt: "Astronomers changed their minds when new evidence appeared. When was a time YOU changed your mind about something because you learned new information?",
  misconceptionBank: [
    {
      id: "old-ideas-were-foolish",
      label: "Thinks past astronomers were just foolish for believing in a geocentric model",
      description: "Judges historical thinkers as silly instead of seeing they reasoned carefully from the evidence they had.",
      coachMove: "Point out that from the ground the Sun really does appear to move across the sky — the old model matched observation until better tools (the telescope) gave new evidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Trust Your Eyes or the Math?",
      prompt:
        "Every day you SEE the Sun rise in the east, cross the sky, and set in the west. It really looks like the Sun circles a still Earth. Would you rather trust what your eyes show you, or believe a scientist who says it's actually Earth that's spinning? What evidence would change your mind?",
      answer:
        "Our eyes fooled people for over 1,000 years! It took new evidence — Galileo's telescope showing moons orbiting Jupiter and the phases of Venus — to convince people that Earth moves. Good science means updating your view when better evidence appears.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Astronomy Timeline",
      challenge:
        "Build a timeline of how our model of the solar system changed. Include at least four milestones: Ptolemy's geocentric model, Copernicus's heliocentric model (1543), Galileo's telescope (1609), and one more discovery you research or choose (Kepler's orbits, Newton's gravity, or a modern space telescope).",
      steps: [
        "Draw a horizontal line and mark it with dates in order.",
        "Add each milestone with the person, the year, and one sentence on what changed.",
        "Draw an arrow showing the shift from an Earth-centered to a Sun-centered view.",
        "Add one modern milestone to show astronomy is still advancing."
      ],
      deliverable: "A labeled timeline with at least four dated milestones in the history of astronomy.",
      choiceBoard: [
        "Draw or type the illustrated timeline.",
        "Write short 'diary entries' from three different astronomers describing their discovery.",
        "Make a 'before and after' poster comparing the geocentric and heliocentric models."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: History of Astronomy Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.hist.w4.d4.arena1",
          type: "multiple_choice",
          stem: "Put these in the correct chronological order: (1) Galileo's telescope observations (1609), (2) Ptolemy's Earth-centered model (~150 CE), (3) Copernicus's Sun-centered model (1543).",
          choices: [
            "1 → 2 → 3",
            "2 → 3 → 1",
            "3 → 2 → 1",
            "2 → 1 → 3"
          ],
          answerIndex: 1,
          explanation: "Ptolemy (~150 CE) came first, then Copernicus (1543), then Galileo's telescope (1609): 2 → 3 → 1.",
          hintLadder: [
            "Which happened in ancient times (~150 CE)?",
            "Copernicus (1543) came before Galileo (1609).",
            "Order: Ptolemy → Copernicus → Galileo."
          ]
        },
        {
          id: "g6.winter.hist.w4.d4.arena2",
          type: "short_answer",
          stem: "Scientists changed the model of the solar system when new evidence appeared. Explain what this tells us about how science works, using the telescope as your example.",
          rubric: {
            level3: "Explains that science updates its ideas when new evidence (like telescope observations) contradicts old models — showing science is self-correcting, not fixed.",
            level2: "Says science changes with evidence but the telescope connection or the 'self-correcting' idea is thin.",
            level1: "No clear idea about how evidence drives scientific change."
          },
          exemplar: "It shows science isn't a fixed list of facts. When Galileo's telescope revealed moons orbiting Jupiter, that new evidence didn't fit the old Earth-centered model, so scientists updated their thinking. Science keeps improving as better evidence comes in.",
          hintLadder: [
            "Did scientists cling to the old model, or change it?",
            "What made them change — new evidence from the telescope.",
            "Explain that science corrects itself with better evidence."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Sky-Watcher Stretch",
      prompt:
        "Be an old sky-watcher on a cold clear night. Slowly sweep your gaze and one pointing arm from the eastern horizon, up overhead, and down to the west — tracking the 'Sun's path.' Do it twice each direction, then rub your hands warm and roll your shoulders.",
      scienceTieIn: "Early astronomers tracked the sky with only their eyes for thousands of years — patient observation was their most powerful tool before the telescope existed.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Astronomers updated their beliefs when new evidence appeared. Write about a time you changed your mind because you learned something new — and how it felt.",
      badge: { id: "starlight-historian", name: "Starlight Historian", emoji: "🔭" },
      estimatedMinutes: 7
    }
  }
};
