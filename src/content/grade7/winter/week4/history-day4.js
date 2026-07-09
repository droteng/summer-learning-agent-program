// Grade 7 History/Civics — Winter Expedition, Week 4 (Space & the Solar System),
// Day 4. Topic: the history of astronomy — changing models of the solar system,
// with Grade 7 depth: analyzing historical sources and evidence, not just sequence.

export const winterG7HistoryW4D4 = {
  id: "g7.winter.hist.w4.d4",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "The history of astronomy: analyzing evidence behind changing models of the solar system",
  topicTag: "history-of-astronomy",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.10", "C3.D3.His.14"],
  hook: "For over 1,400 years, careful, intelligent people were SURE the Sun circled a still Earth — and they had evidence for it. Today you work like a historian: weighing the sources and observations that let a handful of astronomers overturn what 'everyone knew.'",
  miniLesson: [
    "Around 150 CE, Ptolemy's Almagest laid out a GEOCENTRIC model: a motionless Earth at the center with the Sun, Moon, and planets on circles (with added epicycles) around it. It predicted planetary positions well enough to be trusted for over 1,400 years — it was good science for its evidence.",
    "In 1543 Copernicus published On the Revolutions, arguing a HELIOCENTRIC model with the Sun at the center. It simplified some predictions but contradicted both everyday observation and established authority, so acceptance was slow.",
    "In 1609–1610 Galileo turned an improved telescope on the sky. He documented Jupiter's four large moons and the full set of Venus's phases — observations the geocentric model could not explain. Kepler (elliptical orbits) and later Newton (gravity) supplied the mathematics that secured the Sun-centered model. Historians treat these writings and observation logs as PRIMARY SOURCES."
  ],
  workedExample: {
    prompt: "A historian finds two claims: (A) Galileo's 1610 notebook describing 'four star-like bodies moving with Jupiter,' and (B) a modern textbook stating 'Jupiter has moons.' Which is a PRIMARY source, and why does that matter for judging the evidence?",
    steps: [
      "A primary source is a firsthand record created by a participant at the time of the event.",
      "Galileo's own 1610 observation notebook (A) was written by the observer as he watched — that's primary.",
      "The modern textbook (B) reports the conclusion later, drawing on others' work — that's a secondary source.",
      "The primary source (A) shows the actual evidence Galileo gathered, letting a historian judge how the discovery was made, not just what was concluded."
    ],
    answer: "(A) Galileo's 1610 notebook is the primary source; it records the firsthand evidence, so a historian can evaluate how the discovery was made rather than only trusting a later summary."
  },
  items: [
    {
      id: "g7.winter.hist.w4.d4.q1",
      type: "multiple_choice",
      stem: "Ptolemy's geocentric model was trusted for over 1,400 years mainly because:",
      choices: [
        "No one ever looked at the sky before Copernicus.",
        "It matched everyday observation and predicted planetary positions well enough to be useful.",
        "A king ordered everyone to believe it.",
        "It was simpler than every later model in every way."
      ],
      answerIndex: 1,
      explanation: "The geocentric model fit what people saw and made workable predictions, so it counted as good science given the evidence available at the time.",
      hintLadder: [
        "From the ground, it really looks like the Sun circles us.",
        "A model people keep is usually one that predicts and matches observations.",
        "It matched observation and made useful predictions."
      ],
      misconceptionsTargeted: ["old-ideas-were-foolish"]
    },
    {
      id: "g7.winter.hist.w4.d4.q2",
      type: "multiple_choice",
      stem: "Which of these would a historian classify as a PRIMARY SOURCE about the shift to heliocentrism?",
      choices: [
        "A 2020 documentary summarizing the Scientific Revolution.",
        "A recent blog post ranking history's greatest scientists.",
        "A modern encyclopedia entry titled 'Copernicus.'",
        "Copernicus's own 1543 book On the Revolutions of the Celestial Spheres."
      ],
      answerIndex: 3,
      explanation: "Copernicus's 1543 book is a firsthand document created by the participant at the time — a primary source. The others interpret events long afterward, making them secondary.",
      hintLadder: [
        "Primary = firsthand, made at the time by a participant.",
        "Which option was written by Copernicus himself in 1543?",
        "His own 1543 book is the primary source."
      ]
    },
    {
      id: "g7.winter.hist.w4.d4.q3",
      type: "multiple_choice",
      stem: "Galileo's observation of the FULL set of Venus's phases was powerful evidence because:",
      choices: [
        "The complete cycle of phases fit a Sun-centered model but could not be produced by Ptolemy's geocentric arrangement.",
        "It proved the Moon makes its own light.",
        "It showed Venus is larger than the Sun.",
        "It had nothing to do with the debate."
      ],
      answerIndex: 0,
      explanation: "Venus showing a full range of phases (including 'full') requires Venus to orbit the Sun — the geocentric model could not produce that pattern, so it was strong evidence for heliocentrism.",
      hintLadder: [
        "Think about what geometry lets us see Venus go through ALL its phases.",
        "A full phase means Venus can be on the far side of the Sun from us.",
        "That only works if Venus orbits the Sun — supporting heliocentrism."
      ]
    },
    {
      id: "g7.winter.hist.w4.d4.q4",
      type: "short_answer",
      stem: "Explain how a new TOOL (the telescope) changed what counted as EVIDENCE in astronomy. Name one specific observation Galileo recorded and explain why it undermined the geocentric model.",
      rubric: {
        level3: "Explains that the telescope revealed observations invisible to the naked eye, expanding the available evidence, AND names a specific observation (Jupiter's moons OR Venus's full phases) with a correct reason it contradicted geocentrism.",
        level2: "Says the telescope let them see more but gives no specific observation, or names one without explaining why it undermined the old model.",
        level1: "No clear connection between the tool and the evidence."
      },
      exemplar: "The telescope let Galileo record details no eye could see, so new kinds of evidence entered the debate. He documented four moons circling Jupiter — proof that not everything orbits Earth, which directly contradicted the geocentric claim that Earth is the one center of all motion.",
      hintLadder: [
        "What could a telescope reveal that unaided eyes could not?",
        "Recall the moons Galileo found around Jupiter.",
        "Explain why moons orbiting Jupiter broke the 'everything orbits Earth' idea."
      ]
    },
    {
      id: "g7.winter.hist.w4.d4.q5",
      type: "short_answer",
      stem: "Historians ask WHY change was slow. Write a cause-and-effect explanation (using 'because' or 'so') for why the heliocentric model faced resistance, drawing on at least TWO factors (e.g., it matched neither everyday observation nor established authority).",
      rubric: {
        level3: "Builds a clear cause→effect linking at least two genuine factors (matched everyday observation, over a millennium of tradition, conflict with religious/scholarly authority, or the lack of stellar parallax) to slow acceptance, using because/so.",
        level2: "Gives a valid cause→effect but relies on only one factor or states the link loosely.",
        level1: "Lists facts with no causal link, or gives an inaccurate reason."
      },
      exemplar: "The heliocentric model spread slowly because it contradicted both what people saw every day — the Sun clearly appears to move across a still sky — and more than a thousand years of respected authority behind Ptolemy, so many scholars demanded overwhelming proof before abandoning a model that had always worked.",
      hintLadder: [
        "One factor: how the sky LOOKS from the ground.",
        "Another factor: how long the old model had been the trusted authority.",
        "Join two factors to slow acceptance with 'because' or 'so.'"
      ]
    }
  ],
  reflectionPrompt: "Historians weigh evidence before accepting a new idea. Describe a time you needed strong evidence — not just someone's word — before you'd change your mind, and explain what finally convinced you.",
  misconceptionBank: [
    {
      id: "old-ideas-were-foolish",
      label: "Thinks past astronomers were foolish for believing the geocentric model",
      description: "Judges historical thinkers as silly instead of recognizing they reasoned carefully from the evidence and tools they had.",
      coachMove: "Point out that the geocentric model matched observation and made useful predictions for over 1,400 years — it was rational until better tools (the telescope) produced new evidence."
    },
    {
      id: "primary-vs-secondary",
      label: "Confuses primary and secondary sources",
      description: "Treats modern summaries and documentaries as equal in authority to firsthand records made at the time.",
      coachMove: "Ask: 'Who made this, and when?' A record created by a participant at the time (Galileo's notebook) is primary; a later account interpreting it is secondary."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Trust Your Eyes or the Evidence?",
      prompt:
        "Every day you SEE the Sun rise in the east, arc overhead, and set in the west — it really looks like the Sun circles a still Earth. Would you rather trust that firsthand sight, or trust telescope evidence that contradicts it? What kind of proof would it take to change your mind?",
      answer:
        "Our own eyes convinced people for over 1,400 years! It took new firsthand evidence — Galileo's telescope logs of Jupiter's moons and Venus's full phases — to overturn the view. Strong science means updating your belief when better evidence appears, even against your own eyes.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Astronomy Evidence Timeline",
      challenge:
        "Build a timeline of how our model of the solar system changed, labeling the EVIDENCE at each step. Include at least four milestones: Ptolemy's geocentric model (~150 CE), Copernicus's heliocentric model (1543), Galileo's telescope observations (1609–1610), and one more (Kepler's elliptical orbits, Newton's gravity, or a modern space telescope).",
      steps: [
        "Draw a horizontal line and mark it with dates in order.",
        "For each milestone, add the person, the year, and the KEY EVIDENCE or reasoning that drove the change.",
        "Draw an arrow showing the shift from an Earth-centered to a Sun-centered view.",
        "Label each source as primary (a firsthand record) or secondary where you can, and add one modern milestone."
      ],
      deliverable: "A labeled evidence-timeline with 4+ dated milestones, each noting the driving evidence and (where possible) whether the source is primary or secondary.",
      choiceBoard: [
        "Draw or type the illustrated evidence-timeline.",
        "Write short 'observation-log entries' from three astronomers describing the evidence they gathered.",
        "Make a 'before and after' poster comparing the geocentric and heliocentric models and the evidence for each."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: History of Astronomy Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.hist.w4.d4.arena1",
          type: "multiple_choice",
          stem: "Put these in correct chronological order: (1) Galileo's telescope observations (1609–1610), (2) Ptolemy's Almagest and geocentric model (~150 CE), (3) Copernicus's On the Revolutions (1543), (4) Newton's law of gravity (1687).",
          choices: [
            "1 → 2 → 3 → 4",
            "3 → 2 → 1 → 4",
            "2 → 3 → 1 → 4",
            "2 → 1 → 3 → 4"
          ],
          answerIndex: 2,
          explanation: "Ptolemy (~150 CE) → Copernicus (1543) → Galileo (1609–1610) → Newton (1687): order 2 → 3 → 1 → 4.",
          hintLadder: [
            "Which is ancient (~150 CE)? That's first.",
            "Copernicus (1543) precedes Galileo (1609–1610).",
            "Newton's gravity (1687) is last: 2 → 3 → 1 → 4."
          ]
        },
        {
          id: "g7.winter.hist.w4.d4.arena2",
          type: "short_answer",
          stem: "Using the telescope evidence as your example, explain what the history of astronomy reveals about how science works — and why a historian values PRIMARY sources when studying it.",
          rubric: {
            level3: "Explains that science is self-correcting — new evidence (Galileo's telescope observations) that contradicts an old model drives revision — AND explains that primary sources let historians examine the original evidence firsthand rather than trusting later interpretations.",
            level2: "Captures either the self-correcting idea or the value of primary sources, but not both, or one is thinly argued.",
            level1: "No clear idea about evidence-driven change or about primary sources."
          },
          exemplar: "It shows science isn't a fixed list of facts: when Galileo's telescope logs revealed moons orbiting Jupiter, that new evidence didn't fit the geocentric model, so scientists revised their thinking. A historian prizes Galileo's own notebooks — primary sources — because they show the actual evidence, letting us judge the discovery instead of relying on someone else's later summary.",
          hintLadder: [
            "Did scientists cling to the old model, or update it when evidence changed?",
            "Now think about WHY a historian wants Galileo's own notebook, not a modern retelling.",
            "Combine 'science self-corrects with evidence' and 'primary sources show the original evidence.'"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Sky-Watcher Stretch",
      prompt:
        "Be an old sky-watcher on a cold clear night. Slowly sweep your gaze and one pointing arm from the eastern horizon, up overhead, and down to the west, tracking the 'Sun's path.' Do it twice each direction, then rub your hands warm and roll your shoulders.",
      scienceTieIn: "Before the telescope, astronomers tracked the sky with only their eyes for thousands of years — patient, careful observation was their strongest source of evidence.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Astronomers updated their beliefs when strong evidence appeared. Write about a time you changed your mind because of solid evidence — what the evidence was, and how it felt to update your view.",
      badge: { id: "g7-winter-source-sleuth-astronomer", name: "Source Sleuth Astronomer", emoji: "🔭" },
      estimatedMinutes: 7
    }
  }
};
