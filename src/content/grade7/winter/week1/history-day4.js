// Grade 7 History/Civics — Winter Expedition, Week 1 (Winter Warm-Up), Day 4.
// Topic: the winter solstice and sky-tracking, deepened into comparing how and
// why different civilizations built calendars, weighing sources, and reasoning
// about cause (the Grade 7 level-up of Grade 6's solstice/calendar work).

export const winterG7HistoryW1D4 = {
  id: "g7.winter.hist.w1.d4",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Comparing how and why civilizations tracked the winter solstice and built calendars",
  topicTag: "solstice-calendars-comparison",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1.6-8", "C3.D2.His.14.6-8"],
  hook: "Stonehenge's builders in Britain and the Maya in Mesoamerica never met, yet both aligned their world to the winter solstice. Why did cultures oceans apart land on the same idea? Today you compare their calendars as evidence — and reason about the causes behind a shared human habit.",
  miniLesson: [
    "The winter solstice (around December 21 in the Northern Hemisphere) is the day with the fewest daylight hours; after it, days lengthen again. It's a reliable, repeating sky-marker any culture could observe.",
    "Historians COMPARE societies: Stonehenge is a stone monument aligned to the solstice sunrise/sunset, while the Maya kept written astronomical calendars (like the Haab' and Long Count) tracking cycles with striking precision. Same sky, very different tools.",
    "To explain WHY the same practice arose independently, historians look for common CAUSES — nearly all these societies farmed, farming depends on the seasons, and the sky is visible everywhere — and they weigh evidence by asking how directly a source shows the practice."
  ],
  workedExample: {
    prompt: "Stonehenge (a stone monument) and a Maya codex (a written calendar) both show solstice-tracking. Which is more DIRECT evidence that a culture predicted the solstice, and how would a historian reason about it?",
    steps: [
      "Identify what each source is: Stonehenge is a physical structure aligned to the solstice sun; the Maya codex is a written record of astronomical cycles.",
      "Ask how directly each shows PREDICTION, not just observation: an alignment shows they marked the day, but a written calendar records dates and cycles ahead of time.",
      "Weigh it: the codex is more direct evidence of PREDICTING the solstice because it captures the calculation in writing; the monument strongly implies tracking but leaves the reasoning unwritten.",
      "Conclude by noting both are valid evidence, but a historian ranks the written calendar higher for showing deliberate prediction."
    ],
    answer: "The written Maya calendar is more direct evidence of predicting the solstice because it records the cycles in writing, while Stonehenge's alignment shows tracking but leaves the reasoning unwritten — both count, but they carry different evidentiary weight."
  },
  items: [
    {
      id: "g7.winter.hist.w1.d4.q1",
      type: "multiple_choice",
      stem: "What makes the winter solstice a useful marker for ANY ancient culture to track, regardless of where they lived?",
      choices: [
        "It is the hottest day of the year everywhere",
        "It only happens in Britain",
        "It is a reliable, repeating sky event — the fewest daylight hours — visible from anywhere on Earth",
        "It requires a written calendar to notice"
      ],
      answerIndex: 2,
      explanation: "The solstice is a predictable, repeating astronomical event visible worldwide, which is exactly why cultures with no contact could each track it.",
      hintLadder: [
        "Think about why cultures on different continents could BOTH notice it.",
        "It's about daylight and the sky, not temperature or one location.",
        "A repeating sky event visible everywhere works as a marker anywhere."
      ]
    },
    {
      id: "g7.winter.hist.w1.d4.q2",
      type: "multiple_choice",
      stem: "A historian has two sources on solstice-tracking: (S1) the physical alignment of Stonehenge's stones to the solstice sun, and (S2) a Maya written calendar recording solar cycles. Which claim about the sources is MOST accurate?",
      choices: [
        "S2 is more direct evidence of deliberately PREDICTING the solstice, while S1 strongly shows the day was marked",
        "S1 is worthless because it has no writing",
        "The two sources cannot be compared at all",
        "S1 and S2 prove exactly the same thing in exactly the same way"
      ],
      answerIndex: 0,
      explanation: "Both are evidence, but they differ in what they show most directly: the written calendar records prediction of cycles, while the monument shows the solstice was physically marked. A historian weighs that difference rather than treating them as identical or dismissing one.",
      hintLadder: [
        "Both count as evidence — don't throw either out.",
        "Ask which one records the culture PREDICTING cycles in writing.",
        "The written calendar shows prediction most directly; the monument shows marking."
      ],
      misconceptionsTargeted: ["all-sources-equal"]
    },
    {
      id: "g7.winter.hist.w1.d4.q3",
      type: "multiple_choice",
      stem: "Stonehenge's builders and the Maya had no contact, yet both tracked the solstice. What is the BEST historical explanation for this independent match?",
      choices: [
        "They must have secretly traded ideas across the ocean",
        "It was pure coincidence with no cause",
        "Only Europeans could track the sky, so the Maya copied them",
        "Both were farming societies that needed to time the seasons, and the same sky was observable to each — so similar needs plus a shared sky led to similar solutions"
      ],
      answerIndex: 3,
      explanation: "Historians explain independent parallels through common causes: shared reliance on farming (which depends on seasons) plus a sky visible to everyone drove separate cultures to the same solution — no contact required.",
      hintLadder: [
        "They never met, so 'copying' or 'trading ideas' doesn't fit.",
        "What did nearly all these societies depend on to survive?",
        "Shared farming needs + a shared, visible sky = the same independent solution."
      ]
    },
    {
      id: "g7.winter.hist.w1.d4.q4",
      type: "short_answer",
      stem: "Compare a stone monument (like Stonehenge) and a written calendar (like the Maya's) as ways to track the solstice. Give one ADVANTAGE of each, and say which gives historians more direct evidence of predicting the seasons.",
      rubric: {
        level3: "Gives a real advantage of BOTH (e.g., a monument is durable/public and works without literacy; a written calendar records exact cycles and can predict ahead) AND judges that the written calendar is more direct evidence of prediction, with a reason.",
        level2: "Gives an advantage of each but the judgment about which is more direct evidence is missing or weakly reasoned.",
        level1: "Describes only one, or gives no comparison or judgment."
      },
      exemplar: "A stone monument like Stonehenge is durable and public — anyone can watch the solstice sun line up, and it works even without writing. A written calendar like the Maya's can record exact cycles and predict future solstices with numbers. For a historian, the written calendar is more direct evidence of PREDICTING the seasons, because it captures the actual calculation, while the monument shows the day was marked but leaves the reasoning unwritten.",
      hintLadder: [
        "What is one strength of a physical monument anyone can see?",
        "What can a written calendar do that stones alone can't — like record and predict?",
        "Then decide which more directly shows the culture PREDICTING, and why."
      ]
    },
    {
      id: "g7.winter.hist.w1.d4.q5",
      type: "short_answer",
      stem: "Many separate cultures built solstice festivals and monuments. Make an argument: what was the MAIN cause that drove so many unconnected civilizations to track the solstice? Support your claim with at least one specific reason.",
      rubric: {
        level3: "States a clear claim about the main cause (e.g., agricultural societies needing to time planting/harvest) AND supports it with a specific reason tied to survival or the observable sky, showing WHY it recurred independently.",
        level2: "States a reasonable cause but the supporting reason is vague or doesn't explain the independent recurrence.",
        level1: "No clear claim, or an unsupported guess."
      },
      exemplar: "My claim is that the main cause was farming. Nearly every ancient civilization depended on agriculture, and agriculture depends on planting and harvesting at the right time in the seasonal cycle. Since the solstice is a fixed sky-marker that signals the seasons turning, and the sky is visible everywhere, farming societies all over the world independently learned to track it — the shared survival need, not shared contact, is what drove the pattern.",
      hintLadder: [
        "Pick ONE main cause and state it as a claim.",
        "Ask what nearly all these societies needed to survive.",
        "Explain why that need would push UNCONNECTED cultures to the same solution."
      ]
    }
  ],
  reflectionPrompt: "Historians trust some evidence more than others. If you found a carved stone and a written record that seemed to disagree about an ancient solstice, which would you weigh more heavily, and what would you want to check first?",
  misconceptionBank: [
    {
      id: "all-sources-equal",
      label: "Thinks every source counts equally",
      description: "Treats a monument, a written record, and a legend as equally strong evidence without weighing how directly each shows the claim.",
      coachMove: "Have the student ask of each source: 'How directly does this show what I'm claiming, and who made it?' — then rank sources by directness and reliability rather than treating them as interchangeable."
    },
    {
      id: "similar-means-contact",
      label: "Assumes similar practices prove cultures were in contact",
      description: "Believes two cultures with the same practice must have copied each other, ignoring that shared needs and a shared environment can cause independent parallels.",
      coachMove: "Introduce the idea of independent invention: similar problems (farming, seasons) plus a shared sky can produce similar solutions with no contact at all."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Two Calendars, One Sky",
      prompt:
        "Picture two ancient astronomers who will never meet: one in Britain stacking massive stones, one in the Maya world inking a calendar on bark paper. Both are chasing the exact same solstice. If they could compare notes, what would they most agree on — and what would look totally different about their methods?",
      answer:
        "They'd agree on the SKY: the solstice is the shortest day, a turning point they both wait for. Their METHODS differ sharply — one encodes it in a permanent stone alignment you read by watching the sunrise, the other in written numbers and cycles you can calculate ahead. Same target, very different tools.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Compare-the-Calendars Case File",
      challenge:
        "Build a 'case file' that compares TWO ways of tracking the solstice — for example, a stone monument versus a written calendar (real or invented). Lay them side by side as a historian would, weighing what each proves.",
      steps: [
        "Pick or invent two solstice-tracking methods: one physical/monument, one written/recorded.",
        "For each, note what it IS and one advantage it has as evidence.",
        "Add a 'historian's verdict' line: which gives more direct evidence of predicting the solstice, and why.",
        "End with one sentence on the shared CAUSE that likely led both cultures to bother tracking the solstice at all."
      ],
      deliverable: "A side-by-side case file comparing two solstice-tracking methods, with an advantage for each, a reasoned verdict on evidence, and a note on the shared cause.",
      choiceBoard: [
        "Draw a two-column comparison chart with the historian's verdict at the bottom.",
        "Write a short 'museum placard' pair explaining each method and which is stronger evidence.",
        "Script a two-minute debate between a monument-builder and a calendar-keeper defending their method."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Source Comparison Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.hist.w1.d4.arena1",
          type: "multiple_choice",
          stem: "A historian is arguing that an ancient people PREDICTED the solstice in advance (not just noticed it). Which piece of evidence would BEST support that specific claim?",
          choices: [
            "A folk story that mentions 'the cold season'",
            "A written calendar that lists the dates of future solstices calculated ahead of time",
            "A single arrowhead found near a hill",
            "A modern tourist's photo of a sunset"
          ],
          answerIndex: 1,
          explanation: "The claim is about PREDICTION. A written calendar of future solstice dates directly shows the culture calculated ahead — far stronger for that specific claim than a vague story, an unrelated artifact, or a modern photo.",
          hintLadder: [
            "Match the evidence to the exact claim: predicting AHEAD of time.",
            "Which source shows future dates worked out in advance?",
            "A written calendar of upcoming solstices is the most direct support."
          ]
        },
        {
          id: "g7.winter.hist.w1.d4.arena2",
          type: "short_answer",
          stem: "Some people claim that because Stonehenge and Maya calendars are both solstice-aligned, the two cultures must have been in contact. Write a counterargument explaining a more likely reason for the similarity.",
          rubric: {
            level3: "Rejects the contact claim AND gives a solid alternative — independent invention driven by shared needs (farming/seasons) and a shared, universally visible sky — explaining why no contact is required.",
            level2: "Disagrees with the contact claim and gestures at shared needs or the sky, but the reasoning is thin.",
            level1: "Accepts the contact claim or gives no reasoned alternative."
          },
          exemplar: "Contact isn't the likeliest reason. The two cultures were separated by an ocean with no known link, yet both faced the same problem: they were farming societies that had to time planting and harvest to the seasons. The solstice is a clear sky-marker visible from anywhere on Earth, so it makes sense that separate peoples independently invented ways to track it. Shared needs and a shared sky explain the match far better than secret contact.",
          hintLadder: [
            "Was there any known way these two cultures could have met?",
            "What problem did both need to solve to survive?",
            "Explain how the SAME sky plus the SAME need leads to independent invention."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Sun's Yearly Arc",
      prompt:
        "Stand and be the Sun. Trace a low arc with your arm for the 'short winter day,' then a high sweeping arc for the 'long summer day.' On each low arc, imagine a Stonehenge stone lining up; on each high arc, imagine a calendar page turning. Alternate low and high 6 times.",
      scienceTieIn: "Big arm movements get blood and oxygen flowing to your brain, and pairing the motion with two different cultures' methods helps your memory anchor how varied tools tracked the same changing daylight.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Two cultures oceans apart solved the same puzzle in different ways. Write about a time you and someone else reached the same answer by totally different routes — what did comparing your methods teach you?",
      badge: { id: "g7-winter-solstice-historian", name: "Solstice Source Historian", emoji: "🌅" },
      estimatedMinutes: 7
    }
  }
};
