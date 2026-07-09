// Grade 7 History/Civics — Spring Expedition, Week 1 (Spring Awakening), Day 4.
// Topic: spring festivals and the history of planting, pitched up to Grade 7 with
// source comparison, corroboration, and multi-cause reasoning.

export const springG7HistoryW1D4 = {
  id: "g7.spring.hist.w1.d4",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Spring festivals and the history of planting",
  topicTag: "spring-festivals-agriculture",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.10", "C3.D3.1"],
  hook: "Historians don't just ask 'what happened' — they ask 'how do we know, and do the sources agree?' Today you weigh evidence from different civilizations to explain why spring planting sparked festivals across cultures that never met — and decide which sources you'd trust most.",
  miniLesson: [
    "History runs on evidence. A PRIMARY source comes from the time (a carved planting calendar, a festival hymn); a SECONDARY source is a later account (a historian's book). Comparing them helps you judge what really happened.",
    "CORROBORATION means checking whether independent sources agree. When Egyptian records, Persian Nowruz traditions, and South Asian Holi customs all tie spring to renewal and planting, agreement across unconnected cultures makes the pattern more convincing.",
    "Big historical patterns usually have MULTIPLE causes. Spring festivals arose from environmental causes (returning warmth and rain), economic causes (the food year began), and social causes (communities needed shared hope and coordination) — not one cause alone."
  ],
  workedExample: {
    prompt: "A carved Egyptian calendar marking flood-and-plant dates and a modern historian's textbook both say spring planting was central to Egyptian life. Which is the primary source, and why does having both strengthen the claim?",
    steps: [
      "Identify each source: the carved calendar was made at the time (primary); the textbook was written much later (secondary).",
      "Note what each offers: the primary gives direct period evidence; the secondary gives context and interpretation.",
      "Check for agreement: both point to spring planting as central — that is corroboration.",
      "Conclude: an at-the-time primary source backed by a later expert account makes the claim far more trustworthy than either alone."
    ],
    answer: "The carved calendar is the primary source; having both means an at-the-time record and a later expert account corroborate each other, strengthening the claim."
  },
  items: [
    {
      id: "g7.spring.hist.w1.d4.q1",
      type: "multiple_choice",
      stem: "Which of these would a historian classify as a PRIMARY source about ancient spring planting?",
      choices: [
        "A textbook chapter written in 2020 summarizing ancient farming",
        "A modern documentary interviewing today's historians",
        "A blog post retelling old festival stories",
        "A stone calendar carved by ancient farmers marking planting dates"
      ],
      answerIndex: 3,
      explanation: "A primary source is created during the time under study. The stone calendar carved by the farmers themselves is from the period; the others are later, secondary accounts.",
      hintLadder: [
        "A primary source comes from the time being studied.",
        "Which item was made BY the people at that time, not written about them later?",
        "The carved calendar is the primary source."
      ]
    },
    {
      id: "g7.spring.hist.w1.d4.q2",
      type: "multiple_choice",
      stem: "Nowruz (Persia/Central Asia), Holi (South Asia), and May Day (Europe) developed in cultures with little contact, yet all tie spring to renewal. Why does this agreement make the 'spring = renewal' pattern MORE convincing to a historian?",
      choices: [
        "Because famous historians said so",
        "Because all three festivals happen on the exact same day",
        "Because independent, unconnected sources corroborate the same pattern, which is stronger than a single source",
        "Because older sources are always automatically correct"
      ],
      answerIndex: 2,
      explanation: "When separate, independent cultures record the same pattern, they corroborate one another — agreement across unconnected sources is stronger evidence than any single account.",
      hintLadder: [
        "Think about what happens when independent witnesses agree.",
        "These cultures didn't copy each other, yet they match.",
        "Corroboration across unconnected sources strengthens the claim."
      ],
      misconceptionsTargeted: ["single-cause-thinking"]
    },
    {
      id: "g7.spring.hist.w1.d4.q3",
      type: "multiple_choice",
      stem: "Which explanation best shows MULTIPLE causes behind ancient spring festivals?",
      choices: [
        "Returning warmth and rain (environmental) let farmers begin the food year (economic), and communities marked this high-stakes moment together (social).",
        "They happened only because rulers ordered them.",
        "They happened only because the weather got warmer.",
        "They happened for no reason historians can identify."
      ],
      answerIndex: 0,
      explanation: "Historical patterns usually have several interacting causes. This option weaves environmental, economic, and social causes together rather than crediting just one.",
      hintLadder: [
        "Look for the option that names more than one KIND of cause.",
        "Environmental + economic + social working together is the goal.",
        "The multi-cause option covers weather, the food year, and community."
      ]
    },
    {
      id: "g7.spring.hist.w1.d4.q4",
      type: "short_answer",
      stem: "Name a spring festival (from the lesson or one you know) and explain how you would CORROBORATE the claim that it is tied to planting or renewal — what kinds of sources would you compare?",
      rubric: {
        level3: "Names a real spring festival AND explains corroboration by comparing two or more source types (e.g., a period record plus a modern account, or two independent cultural traditions) to check they agree.",
        level2: "Names a festival and gives a connection to renewal but the idea of comparing/corroborating sources is thin.",
        level1: "Names no valid festival or shows no source reasoning."
      },
      exemplar: "Nowruz is a spring festival marking the Persian new year. To corroborate that it's tied to renewal, I'd compare an old source — like historical descriptions of Nowruz customs written near the time — with a modern historian's account of the festival. If a period record and a later expert both describe it as a spring renewal celebration, the claim is well supported.",
      hintLadder: [
        "Pick a festival (Nowruz, Holi, May Day, Earth Day) or another you know.",
        "Think of TWO different sources you could check against each other.",
        "Explain that if independent sources agree, the claim is corroborated."
      ]
    },
    {
      id: "g7.spring.hist.w1.d4.q5",
      type: "short_answer",
      stem: "Write a short explanation (2-3 sentences) arguing that ancient spring festivals had more than one cause. Name at least two different KINDS of causes and connect them.",
      rubric: {
        level3: "Clearly identifies at least two distinct causes (e.g., environmental AND economic, or economic AND social) and connects them into a coherent multi-cause explanation.",
        level2: "Names two causes but the connection between them is vague, or leans mostly on one.",
        level1: "Gives only a single cause or lists facts with no causal reasoning."
      },
      exemplar: "Spring festivals had both environmental and economic causes: returning warmth and rain made planting possible, and because planting began the year's food supply, its success decided whether people would eat. Communities then celebrated together for social reasons, turning a high-stakes economic moment into shared hope. The festivals grew from these causes working together, not from any one alone.",
      hintLadder: [
        "Name one cause from nature (weather) and one from the economy (the food year).",
        "Add a social cause: why celebrate together?",
        "Connect them so the festival results from several causes at once."
      ]
    }
  ],
  reflectionPrompt: "Does your family or community have a spring tradition — a cleanup, a planting day, a holiday? If a historian studied it in 500 years, what SOURCES would they use to understand it, and would those sources agree?",
  misconceptionBank: [
    {
      id: "single-cause-thinking",
      label: "Explains big events with only one cause",
      description: "Attributes a broad historical pattern (like widespread spring festivals) to a single cause, ignoring interacting environmental, economic, and social factors.",
      coachMove: "Ask 'what else was true at the same time?' and have the student list a nature cause, a money/food cause, and a people cause — then show how the event needed several of them together."
    },
    {
      id: "festivals-unconnected",
      label: "Thinks spring festivals are random and unrelated",
      description: "Sees festivals like Nowruz, Holi, and May Day as unconnected rather than independently corroborating a shared tie to spring planting and renewal.",
      coachMove: "Line them up on a calendar near spring and note that unconnected cultures landing on the same theme is corroboration — a stronger signal than coincidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "How Would You Know?",
      prompt:
        "Imagine you're a historian 3,000 years from now trying to prove that people in the 2020s did spring cleanups and planting days. You can't ask anyone. What kinds of leftover EVIDENCE would you hunt for, and how would you decide it's trustworthy?",
      answer:
        "You'd gather sources — photos, receipts, calendars, news clips, tool sales — and CORROBORATE them: if several independent sources all point to spring cleanups, the pattern is trustworthy. Historians trust claims that many separate sources confirm.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Source Dossier for a Spring Festival",
      challenge:
        "Invent (or research) a spring renewal festival and build a small 'evidence dossier' a historian could use — mixing primary and secondary sources and showing how they corroborate the festival's tie to planting or renewal.",
      steps: [
        "Name your festival and the spring event it celebrates (planting, first blossoms, a cleanup day...).",
        "List one PRIMARY source (something from the time — a poster, a photo, a carved date) and one SECONDARY source (a later write-up).",
        "Write one sentence for each source explaining what it shows.",
        "Add a 'corroboration note': explain how the two sources agree and why that makes the festival's meaning trustworthy."
      ],
      deliverable: "A source dossier with a named festival, one primary and one secondary source, and a corroboration note connecting them to renewal.",
      choiceBoard: [
        "Design the dossier as a labeled 'evidence board' with the two sources.",
        "Write a short historian's paragraph arguing what the sources prove and how they corroborate.",
        "Make a two-column chart comparing the primary and secondary source (what each shows, how reliable)."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Spring Festivals Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.hist.w1.d4.arena1",
          type: "multiple_choice",
          stem: "A festival hymn from the period says spring planting saved the village, while a modern historian argues the festival mainly served rulers' power. What is the BEST historian's move when two sources disagree?",
          choices: [
            "Believe the older source automatically because it is oldest.",
            "Weigh each source's purpose and evidence, then seek more sources to see which interpretation is better supported.",
            "Believe the modern source automatically because it is newer.",
            "Ignore both sources since they disagree."
          ],
          answerIndex: 1,
          explanation: "When sources conflict, historians don't just pick by age — they consider each source's purpose and evidence and look for additional sources to corroborate one interpretation over the other.",
          hintLadder: [
            "Neither 'oldest wins' nor 'newest wins' is how historians decide.",
            "Think about WHY each source was made and what evidence backs it.",
            "Weigh purpose and evidence, then gather more sources."
          ]
        },
        {
          id: "g7.spring.hist.w1.d4.arena2",
          type: "short_answer",
          stem: "Spring festivals appear in many civilizations that had little contact. Explain this pattern using BOTH the idea of multiple causes AND the idea of corroboration across independent sources.",
          rubric: {
            level3: "Explains that shared environmental/economic causes (spring planting = the food year everywhere farming existed) drove separate cultures to create festivals independently, AND notes that this cross-cultural agreement corroborates the pattern.",
            level2: "Uses either multiple causes OR corroboration well, but not both, or connects them loosely.",
            level1: "Gives a single cause with no source reasoning."
          },
          exemplar: "Almost every farming culture faced the same causes each spring: warmth and rain returned (environmental) and planting began the food year that decided survival (economic), so communities independently marked it with festivals. Because these unconnected cultures each recorded a spring-renewal celebration, their agreement corroborates that the pattern was real and driven by shared causes, not coincidence.",
          hintLadder: [
            "First, name the shared causes every farming culture faced in spring.",
            "Then explain that unconnected cultures agreeing = corroboration.",
            "Combine: shared causes produced the pattern, and cross-cultural agreement confirms it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Planting Dance",
      prompt:
        "Act out a spring planting festival: bend to 'dig' a hole 4 times, 'drop a seed' and pat the soil, reach up to 'call the rain,' then spin once to celebrate. Do the whole sequence slowly 3 times, imagining the many reasons a village would gather to do this.",
      scienceTieIn: "Whole-body movement pumps oxygen-rich blood to your brain and refreshes focus — and ancient festivals used shared dance for the same social reason: to unite people around a common moment.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Historians trust claims that many independent sources confirm. Write about one belief you hold about the past or your community — what sources back it up, and how sure are you they'd corroborate each other?",
      badge: { id: "g7-spring-source-historian", name: "Source Historian", emoji: "🌾" },
      estimatedMinutes: 7
    }
  }
};
