// Grade 7 ELA/Writing — Fall Expedition, Week 6 (Patterns in Nature), Day 5.
// Topic: descriptive writing — describe a natural pattern vividly. Pitched up to
// precise diction, extended figurative language (metaphor + simile), and
// deliberate organization. Week capstone (pair with the pattern-generator).

export const fallG7ElaW6D5 = {
  id: "g7.fall.ela.w6.d5",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Describe a pattern — sensory writing",
  topicTag: "descriptive-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.3.D", "CCSS.ELA-LITERACY.L.7.5.A"],
  hook: "A pattern you can see in your head should ignite on the page. Today you go beyond a single vivid sentence: you use precise verbs, an EXTENDED metaphor, and a deliberate order so a reader can walk through a natural pattern the way you did.",
  miniLesson: [
    "Precise diction does the heavy lifting: swap weak verbs and vague nouns for exact ones — 'the bark fissured into a diamond lattice' beats 'the bark had lines.'",
    "Extend a figure of speech instead of dropping it once: an EXTENDED metaphor carries one comparison across several sentences ('the fern was a staircase' → then 'each step narrowed,' 'the railing curled at the top').",
    "Organize on purpose — zoom from whole to detail, or trace a path (base to tip, center outward) — and control pacing so the reader assembles the image in the right order."
  ],
  workedExample: {
    prompt: "Turn 'The fern had a nice pattern' into two sentences using precise diction and an extended metaphor.",
    steps: [
      "Choose one governing comparison: the fern is a spiral staircase.",
      "Sentence 1 — establish it with exact nouns/verbs: the fronds coil like steps.",
      "Sentence 2 — EXTEND the same image: each smaller frond becomes a narrower step higher up.",
      "The one metaphor now spans both sentences, building a walkable picture."
    ],
    answer: "The fern uncurled like a green spiral staircase, each frond a step arcing up from the last. Toward the tip, the steps narrowed and tightened, as if the staircase were winding into its own center."
  },
  items: [
    {
      id: "g7.fall.ela.w6.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence shows the MOST PRECISE diction (exact verbs and nouns, not vague ones)?",
      choices: [
        "The leaf had some nice colors and lines on it.",
        "The maple leaf's crimson veins forked and fanned across a curling amber blade.",
        "The leaf was really pretty and had a good pattern.",
        "There was a colorful leaf with stuff on it."
      ],
      answerIndex: 1,
      explanation: "It replaces vague words with exact nouns (veins, blade) and strong verbs (forked, fanned) plus specific colors — precise diction the reader can picture.",
      hintLadder: [
        "Which sentence uses exact verbs instead of 'had' and 'was'?",
        "Look for specific nouns and colors, not 'nice' or 'stuff.'",
        "The 'crimson veins forked and fanned' sentence."
      ]
    },
    {
      id: "g7.fall.ela.w6.d5.q2",
      type: "multiple_choice",
      stem: "What makes a metaphor EXTENDED rather than a single comparison?",
      choices: [
        "It uses the words 'like' or 'as'",
        "It is very long even if the comparison changes each sentence",
        "It carries ONE comparison across several sentences, developing it",
        "It lists many different comparisons quickly"
      ],
      answerIndex: 2,
      explanation: "An extended metaphor sustains and develops a single comparison over multiple sentences, deepening one image.",
      hintLadder: [
        "'Extended' means one idea is carried onward.",
        "Does it keep the SAME comparison or switch to new ones?",
        "It develops one comparison across several sentences."
      ],
      misconceptionsTargeted: ["extended-means-longer"]
    },
    {
      id: "g7.fall.ela.w6.d5.q3",
      type: "multiple_choice",
      stem: "Why deliberately organize a description (e.g., whole-to-detail or base-to-tip)?",
      choices: [
        "So the reader assembles the image in a controlled, followable order",
        "To make the writing longer",
        "Because there's a rule with no real reason",
        "To hide the most important detail at random"
      ],
      answerIndex: 0,
      explanation: "A deliberate spatial or zooming order controls how the reader builds the picture, so the description stays coherent.",
      hintLadder: [
        "Imagine describing a face in random jumps.",
        "What ordering helps a reader follow along?",
        "A controlled order (whole-to-detail, base-to-tip)."
      ]
    },
    {
      id: "g7.fall.ela.w6.d5.q4",
      type: "short_answer",
      stem: "Rewrite 'The spiderweb was pretty' into TWO sentences that use precise diction AND an extended metaphor (one comparison carried across both sentences).",
      rubric: {
        level3: "Two sentences with exact nouns/verbs AND a SINGLE metaphor developed across both (not two unrelated comparisons), forming a coherent picture.",
        level2: "Has precise diction OR a metaphor, but the metaphor isn't extended across both sentences, or the image is only partly clear.",
        level1: "Still vague ('very pretty') or no sustained comparison."
      },
      exemplar: "The spiderweb hung as a silver loom strung between two branches, its threads pulled taut into perfect spokes. Dawn dew beaded along each line, as if the loom had been threaded overnight with tiny glass buttons.",
      hintLadder: [
        "Pick one governing comparison (a loom, a net, a wheel).",
        "Sentence 1 establishes it with exact nouns and verbs.",
        "Sentence 2 EXTENDS the same comparison instead of starting a new one."
      ]
    },
    {
      id: "g7.fall.ela.w6.d5.q5",
      type: "short_answer",
      stem: "Describe a real natural pattern you've seen (frost, a shell, tree rings, ripples) in 3–4 sentences. Use precise diction, at least one extended metaphor, AND a clear organizing order (whole-to-detail or a traced path).",
      rubric: {
        level3: "3–4 sentences with precise diction, an extended metaphor (one comparison developed), AND an evident organizing order the reader can follow.",
        level2: "Some precise detail and a comparison, but the metaphor isn't sustained or the order is loose.",
        level1: "Generic, hard to picture, or no organizing structure."
      },
      exemplar: "Frost had spread across the window like a forest overtaking the glass overnight. At the base, thick trunks of ice branched upward, splitting again and again into finer twigs. Each twig ended in a feathered leaf of crystal, and where the morning sun struck, the whole frozen woodland flared white, then vanished into water.",
      hintLadder: [
        "Choose a pattern you remember clearly and one governing comparison.",
        "Use exact verbs and nouns, and develop the SAME comparison across sentences.",
        "Order it (whole-to-detail or base-to-tip) so the reader follows the path."
      ]
    }
  ],
  reflectionPrompt: "Pair this with your pattern generator: could you write a caption with an extended metaphor that makes someone SEE what your code drew, without showing them the image?",
  misconceptionBank: [
    {
      id: "extended-means-longer",
      label: "Thinks 'extended metaphor' just means a long sentence",
      description: "Believes length or piling on comparisons makes a metaphor extended, rather than developing ONE comparison across sentences.",
      coachMove: "Point to the single governing image: an extended metaphor keeps returning to the SAME comparison and deepens it, sentence after sentence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "One Image or Many?",
      prompt:
        "Would you rather read a description that keeps developing ONE comparison ('the fern is a spiral staircase... each step narrows... the railing curls') or one that throws out a new comparison every sentence? Pick the one that paints a clearer picture and say why.",
      answer:
        "The sustained one usually wins. An extended metaphor lets the reader settle into a single, deepening image; hopping to a new comparison each sentence scatters the picture. Depth beats variety when you want the reader to truly SEE it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Extended-Metaphor Caption",
      challenge:
        "Pick a real fall pattern — veins on a leaf, ridges on a pinecone, frost on glass — and write a 4-sentence description built on ONE extended metaphor, using precise verbs/nouns and a clear order, so a reader could draw it without seeing it.",
      materials: ["Paper & pencil OR a device to type on", "Something with a pattern to observe (optional)"],
      steps: [
        "Study your pattern and choose ONE governing comparison (a staircase, a river system, a loom).",
        "Sentence 1: establish the metaphor with the overall shape and exact diction.",
        "Sentences 2–3: EXTEND the same comparison with close-up details, keeping the image alive.",
        "Sentence 4: land on one final image, and check your order (whole-to-detail) flows."
      ],
      deliverable: "A 4-sentence description of one fall pattern built on a single extended metaphor, with precise diction and a clear organizing order.",
      choiceBoard: [
        "Write the 4-sentence extended-metaphor description.",
        "Pair a sketch with a caption whose metaphor is developed across two sentences.",
        "Write a riddle that describes the pattern through one sustained comparison without naming it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Description Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w6.d5.arena1",
          type: "multiple_choice",
          stem: "Which passage uses an EXTENDED metaphor (one comparison developed across sentences)?",
          choices: [
            "The pinecone was cool. It was also brown. It sat there.",
            "The pinecone had many parts and existed on the ground.",
            "The pinecone was like a rock, then like a shoe, then like a cloud.",
            "The pinecone was a tiny brown fortress: its scales overlapped like armored plates, and each row climbed the walls in a tightening spiral toward the sealed gate at its tip."
          ],
          answerIndex: 3,
          explanation: "It sustains ONE comparison — the pinecone as a fortress — developing it with plates, walls, and a gate across the sentence, which is what makes a metaphor extended.",
          hintLadder: [
            "Look for a SINGLE comparison that keeps going.",
            "One option builds the same 'fortress' image with plates, walls, and a gate.",
            "That sustained-fortress passage is the extended metaphor."
          ]
        },
        {
          id: "g7.fall.ela.w6.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this dull sentence into TWO sentences about a fall pattern using precise diction AND a SINGLE extended metaphor: 'The leaf pile was big.'",
          rubric: {
            level3: "Two sentences with exact nouns/verbs AND one comparison developed across both (not two separate comparisons), forming a coherent, picture-able image.",
            level2: "Precise diction OR a metaphor present, but the comparison isn't sustained across both sentences.",
            level1: "Still general ('really big') with no sustained image."
          },
          exemplar: "The leaf pile rose like a small mountain at the yard's edge, its slopes shifting from gold at the base to deep rust near the peak. Every gust sent a small avalanche of maple and oak sliding down its sides, reshaping the mountain grain by crackling grain.",
          hintLadder: [
            "Choose one governing image (a mountain, an ocean, a bonfire).",
            "Sentence 1 sets up the comparison with exact color and shape words.",
            "Sentence 2 EXTENDS the same image instead of switching comparisons."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five Senses Pause",
      prompt:
        "Sit still and slowly notice: 5 things you can see, 4 you can hear, 3 you can feel, 2 you can smell, 1 you can taste. For each, silently pick ONE precise word — not 'nice,' but the exact one.",
      scienceTieIn:
        "Tuning into your senses calms your stress response, which frees your brain's working memory to reach for sharper, more precise words.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write two sentences describing the most interesting pattern you noticed today, built on a single extended metaphor so vivid that a reader could picture it without seeing it.",
      badge: { id: "g7-fall-metaphor-weaver", name: "Metaphor Weaver", emoji: "🍁" },
      estimatedMinutes: 7
    }
  }
};
