// Grade 5 History/Civics — Winter Expedition, Week 4 (Space & the Solar System),
// Day 4. Topic: the history of astronomy — early astronomers, the telescope, and
// how the model of the solar system changed over time.
// Grade 5 counterpart of g6.winter.hist.w4.d4: same topic and people, simpler
// wording, shorter passages, more scaffolding.

export const winterG5HistoryW4D4 = {
  id: "g5.winter.hist.w4.d4",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "The history of astronomy: changing models of the solar system",
  topicTag: "history-of-astronomy",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2.3-5", "C3.D2.His.14.3-5"],
  hook: "For most of history, people were SURE the Sun went around the Earth. Today you follow the sky detectives — astronomers over 2,000 years — who used careful watching and new tools to change what everyone thought they knew.",
  miniLesson: [
    "Long ago, an astronomer named Ptolemy (about the year 150) taught the GEOCENTRIC model: Earth sat still in the center, and the Sun, Moon, and planets went around it. 'Geo' means Earth. People believed this for over 1,000 years.",
    "In 1543, Copernicus said something new: the HELIOCENTRIC model, with the Sun in the center and Earth and the planets going around it. 'Helio' means Sun. This idea surprised people because it moved Earth out of the center.",
    "In 1609, Galileo pointed a new invention — the telescope — at the sky. He saw moons going around Jupiter and changing shapes of Venus. This new evidence supported the Sun-centered idea and helped change people's minds."
  ],
  workedExample: {
    prompt: "Put these three ideas in the order they happened in history: (a) the telescope shows moons around Jupiter, (b) Ptolemy's Earth-centered model, (c) Copernicus's Sun-centered model.",
    steps: [
      "Ptolemy's Earth-centered model came first, about the year 150.",
      "Copernicus's Sun-centered idea came much later, in 1543.",
      "Galileo's telescope came soon after, in 1609.",
      "So the order is: (b) Ptolemy → (c) Copernicus → (a) Galileo's telescope."
    ],
    answer: "b → c → a (Ptolemy's Earth-centered model, then Copernicus's Sun-centered model, then Galileo's telescope evidence)."
  },
  items: [
    {
      id: "g5.winter.hist.w4.d4.q1",
      type: "multiple_choice",
      stem: "The GEOCENTRIC model said WHAT was at the center of everything?",
      choices: ["The Sun", "The Moon", "Earth", "Jupiter"],
      answerIndex: 2,
      explanation: "'Geo' means Earth. The geocentric model put a still Earth at the center with everything going around it.",
      hintLadder: [
        "The word part 'geo-' means Earth (like in geography).",
        "This was the old idea people believed for over 1,000 years.",
        "Earth was put at the center."
      ],
      misconceptionsTargeted: ["old-ideas-were-foolish"]
    },
    {
      id: "g5.winter.hist.w4.d4.q2",
      type: "multiple_choice",
      stem: "Who shared the HELIOCENTRIC (Sun-centered) model in 1543?",
      choices: ["Ptolemy", "Copernicus", "Isaac Newton", "Neil Armstrong"],
      answerIndex: 1,
      explanation: "Copernicus shared the Sun-centered model in 1543, challenging over a thousand years of Earth-centered belief.",
      hintLadder: [
        "'Helio' means Sun.",
        "This astronomer lived in the 1500s.",
        "It was Copernicus."
      ]
    },
    {
      id: "g5.winter.hist.w4.d4.q3",
      type: "multiple_choice",
      stem: "What NEW TOOL did Galileo use in 1609 to study the sky?",
      choices: [
        "A spaceship",
        "A radio dish",
        "A computer",
        "A telescope"
      ],
      answerIndex: 3,
      explanation: "Galileo used the newly improved telescope to see Jupiter's moons and the changing shapes of Venus, which supported the Sun-centered model.",
      hintLadder: [
        "It was a tool for seeing far-off things more clearly.",
        "It let him spot moons around Jupiter.",
        "It was the telescope."
      ]
    },
    {
      id: "g5.winter.hist.w4.d4.q4",
      type: "short_answer",
      stem: "Explain how the new TOOL (the telescope) changed what astronomers could learn. Name one thing Galileo saw that helped change the model.",
      rubric: {
        level3: "Explains that the telescope let astronomers see things too far or too faint for the eyes alone AND names one real observation (Jupiter's moons OR the changing shapes of Venus) that supported the Sun-centered model.",
        level2: "Says the telescope helped them see more, but gives no specific observation, or names an observation without saying why it mattered.",
        level1: "No clear link between the tool and new learning."
      },
      exemplar: "The telescope let Galileo see things too faint for the eyes alone. He saw four moons going around Jupiter, which showed that not everything goes around Earth — this supported the idea that Earth is not the center.",
      hintLadder: [
        "What can a telescope show that eyes alone cannot?",
        "Think about the moons Galileo found around another planet.",
        "Explain why seeing moons go around Jupiter mattered."
      ]
    },
    {
      id: "g5.winter.hist.w4.d4.q5",
      type: "short_answer",
      stem: "Why did it take so long for people to believe the Sun-centered model? Write one cause-and-effect sentence using 'because' or 'so.'",
      rubric: {
        level3: "Gives a clear cause→effect linking a real reason (the old model matched what people saw every day, or had been taught for a very long time) to slow acceptance, using because or so.",
        level2: "Has a cause and effect but the link is vague or only partly correct.",
        level1: "Lists facts with no cause-effect link, or an incorrect reason."
      },
      exemplar: "The Earth-centered idea had been taught for over a thousand years and matched what people saw each day, so many people were slow to believe the Sun was really in the center.",
      hintLadder: [
        "How long had the old model been believed?",
        "From the ground, it really LOOKS like the Sun moves around us.",
        "Join a cause to the slow acceptance with 'so' or 'because.'"
      ]
    }
  ],
  reflectionPrompt: "Astronomers changed their minds when new evidence appeared. When was a time YOU changed your mind about something because you learned something new?",
  misconceptionBank: [
    {
      id: "old-ideas-were-foolish",
      label: "Thinks past astronomers were silly for believing the Earth-centered model",
      description: "Judges old thinkers as foolish instead of seeing that they reasoned carefully from what they could observe.",
      coachMove: "Point out that from the ground the Sun really does look like it moves across the sky — the old model matched what people saw until better tools (the telescope) gave new evidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Trust Your Eyes or the Math?",
      prompt:
        "Every day you SEE the Sun rise in the east, cross the sky, and set in the west. It really looks like the Sun circles a still Earth. Would you rather trust what your eyes show you, or believe a scientist who says Earth is the one spinning? What evidence would change your mind?",
      answer:
        "Our eyes fooled people for over 1,000 years! It took new evidence — Galileo's telescope showing moons going around Jupiter — to convince people that Earth moves. Good science means updating your mind when better evidence appears.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Astronomy Timeline",
      challenge:
        "Build a timeline showing how our model of the solar system changed. Include at least three milestones: Ptolemy's Earth-centered model, Copernicus's Sun-centered model (1543), and Galileo's telescope (1609). Add one more discovery if you can.",
      steps: [
        "Draw a straight line and mark it with the dates in order.",
        "Add each milestone with the person, the year, and one sentence about what changed.",
        "Draw an arrow showing the change from an Earth-centered to a Sun-centered view.",
        "If you can, add one modern space discovery to show astronomy is still going."
      ],
      deliverable: "A labeled timeline with at least three dated milestones in the history of astronomy.",
      choiceBoard: [
        "Draw or type the illustrated timeline.",
        "Write short 'diary entries' from two different astronomers about their discovery.",
        "Make a 'before and after' poster comparing the Earth-centered and Sun-centered models."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: History of Astronomy Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.hist.w4.d4.arena1",
          type: "multiple_choice",
          stem: "Put these in the correct time order: (1) Galileo's telescope (1609), (2) Ptolemy's Earth-centered model (about the year 150), (3) Copernicus's Sun-centered model (1543).",
          choices: [
            "2 → 3 → 1",
            "1 → 2 → 3",
            "3 → 2 → 1",
            "2 → 1 → 3"
          ],
          answerIndex: 0,
          explanation: "Ptolemy (about 150) came first, then Copernicus (1543), then Galileo's telescope (1609): 2 → 3 → 1.",
          hintLadder: [
            "Which one happened in ancient times (about the year 150)?",
            "Copernicus (1543) came before Galileo (1609).",
            "Order: Ptolemy → Copernicus → Galileo."
          ]
        },
        {
          id: "g5.winter.hist.w4.d4.arena2",
          type: "short_answer",
          stem: "Scientists changed their model of the solar system when new evidence appeared. What does this tell us about how science works? Use the telescope as your example.",
          rubric: {
            level3: "Explains that science changes its ideas when new evidence (like telescope observations) does not fit the old model — showing that science keeps fixing and improving itself.",
            level2: "Says science changes with evidence but the telescope example or the 'science improves' idea is thin.",
            level1: "No clear idea about how evidence changes science."
          },
          exemplar: "It shows science isn't just a fixed list of facts. When Galileo's telescope showed moons going around Jupiter, that new evidence didn't fit the old Earth-centered model, so scientists changed their thinking. Science keeps improving as we get better evidence.",
          hintLadder: [
            "Did scientists keep the old model, or change it?",
            "What made them change — new evidence from the telescope.",
            "Explain that science fixes itself with better evidence."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Sky-Watcher Stretch",
      prompt:
        "Pretend to be an old sky-watcher on a cold, clear night. Slowly sweep your gaze and one pointing arm from the eastern side, up overhead, and down to the west — tracking the 'Sun's path.' Do it twice each way, then rub your hands warm and roll your shoulders.",
      scienceTieIn: "Early astronomers watched the sky with only their eyes for thousands of years — patient watching was their most powerful tool before the telescope existed.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Astronomers changed their beliefs when new evidence appeared. Write about a time you changed your mind because you learned something new — and how it felt.",
      badge: { id: "g5-winter-sky-detective", name: "Sky Detective", emoji: "🔭" },
      estimatedMinutes: 7
    }
  }
};
