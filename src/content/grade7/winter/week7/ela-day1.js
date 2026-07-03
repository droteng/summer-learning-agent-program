// Grade 7 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 1.
// Topic: narrative structure at Grade 7 depth — pacing, subplot, and the
// difference between plot climax and emotional turning point. Project kickoff:
// plan a story set in a frozen world.

export const winterG7ElaW7D1 = {
  id: "g7.winter.ela.w7.d1",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Narrative structure — plan a frozen-world story with intentional pacing",
  topicTag: "narrative-structure",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.3", "CCSS.ELA-LITERACY.W.7.3.A"],
  hook: "Any writer can name the parts of a story arc. This week you'll do more: control HOW FAST tension rises, plant a small subplot, and decide where your character changes on the inside — not just where the action peaks. Today you architect a frozen-world tale you'll build all week.",
  miniLesson: [
    "The five-part arc — EXPOSITION, RISING ACTION, CLIMAX, FALLING ACTION, and RESOLUTION — is the skeleton, but Grade 7 writers control PACING: how much page-space each beat gets. Lingering slows time (dread); short, clipped events speed it up (panic).",
    "Separate the PLOT CLIMAX (the moment of greatest external tension — the crossing, the fight, the choice) from the EMOTIONAL TURNING POINT (the moment the character changes inside). The best stories make these land close together but not identically.",
    "A SUBPLOT is a second, smaller line of tension woven beside the main one — a broken friendship, a hidden secret — that raises the stakes and pays off near the climax, so the ending resolves more than one thread at once."
  ],
  workedExample: {
    prompt: "Map pacing and turning points onto this idea: 'A girl must carry the village's last ember across a frozen valley before it dies — while doubting she is brave enough.'",
    steps: [
      "Exposition (linger): establish the iced-in village, the dying ember, and her private belief that she is a coward.",
      "Rising action (accelerate): the wind rises, the path ices, the flame shrinks — beats get shorter and faster to build panic.",
      "Plot climax: at the cracking frozen river she must cross or turn back — the peak of external danger.",
      "Emotional turning point + resolution: mid-crossing she acts before fear can stop her, realizing courage is moving despite fear; she relights the fire, changed."
    ],
    answer: "Exposition lingers on setting and her self-doubt (subplot); rising action accelerates via shorter beats; the plot climax is the cracking crossing; the emotional turning point (courage is acting despite fear) lands inside the climax, then a brief resolution shows her changed."
  },
  items: [
    {
      id: "g7.winter.ela.w7.d1.q1",
      type: "multiple_choice",
      stem: "A writer wants a scene to feel slow and full of dread as a character waits alone in a frozen cabin. Which PACING choice best creates that effect?",
      choices: [
        "A rapid list of short, clipped actions with little description",
        "Lingering, detailed sentences that stretch out a small span of time",
        "Skipping the scene entirely with a time jump",
        "Summarizing the whole night in a single sentence"
      ],
      answerIndex: 1,
      explanation: "Lingering, detailed sentences slow the reader's sense of time, which builds dread; clipped or summarized prose speeds time up instead.",
      hintLadder: [
        "Dread comes from time feeling STRETCHED, not rushed.",
        "Which option spends MORE words on a SMALL moment?",
        "Detailed, lingering sentences slow the pace."
      ]
    },
    {
      id: "g7.winter.ela.w7.d1.q2",
      type: "multiple_choice",
      stem: "What is the difference between a story's PLOT CLIMAX and its EMOTIONAL TURNING POINT?",
      choices: [
        "They are two names for the exact same moment.",
        "The plot climax is the peak of external tension (an event or choice); the emotional turning point is where the character changes on the inside.",
        "The plot climax always comes at the very end; the emotional turning point always comes first.",
        "The emotional turning point is only found in poems, not stories."
      ],
      answerIndex: 1,
      explanation: "The plot climax is the high point of outward action or conflict; the emotional turning point is the inner shift in the character. Skilled writers place them close together but distinguish them.",
      hintLadder: [
        "One is about OUTSIDE events; the other about INSIDE change.",
        "Which one is about what happens to the character's heart or mind?",
        "Plot climax = external peak; emotional turning point = inner change."
      ],
      misconceptionsTargeted: ["climax-is-only-external"]
    },
    {
      id: "g7.winter.ela.w7.d1.q3",
      type: "multiple_choice",
      stem: "In a frozen-world story about two siblings crossing a glacier, which element best functions as a SUBPLOT?",
      choices: [
        "A detailed description of the glacier's blue ice",
        "The main danger of the glacier cracking beneath them",
        "An old argument between the siblings that slowly resurfaces and must be mended by the end",
        "The single sentence that ends the story"
      ],
      answerIndex: 2,
      explanation: "A subplot is a second, smaller line of tension (the unresolved argument) woven beside the main conflict, resolving near the climax to enrich the ending.",
      hintLadder: [
        "A subplot is a SECOND thread of tension, not the main danger or mere description.",
        "Look for a relationship or secret that develops alongside the main plot.",
        "The resurfacing argument is a separate thread that pays off later."
      ]
    },
    {
      id: "g7.winter.ela.w7.d1.q4",
      type: "short_answer",
      stem: "Write a one-sentence idea for a frozen-world story, then name BOTH its plot climax (the external peak) AND its emotional turning point (the inner change). Explain how the two connect.",
      rubric: {
        level3: "Gives a clear frozen-world idea AND names a genuine external plot climax and a distinct internal emotional turning point, explaining how they relate.",
        level2: "Gives an idea with both a plot climax and an emotional turning point, but one is vague or the connection between them is unclear.",
        level1: "Missing the idea, or names only one turning point, or treats the two as identical with no distinction."
      },
      exemplar: "Idea: A boy who blames himself for his sister's fall must guide her sled across a frozen pass before nightfall. Plot climax: the sled skids toward a crevasse and he must dive to grab the rope. Emotional turning point: in that instant he stops punishing himself and chooses to fight for her — the outer rescue and his inner forgiveness happen in the same breath.",
      hintLadder: [
        "Start with a frozen setting and a problem the character cares about.",
        "Name the most dangerous OUTER moment (plot climax).",
        "Then name the INNER change that happens near it, and link the two."
      ]
    },
    {
      id: "g7.winter.ela.w7.d1.q5",
      type: "short_answer",
      stem: "Explain how a writer can use PACING (the speed at which events unfold) to control a reader's emotions across a story arc. Give at least one specific example.",
      rubric: {
        level3: "Explains that slowing pace (detail, lingering) builds tension/dread while speeding it up (short beats, summary) creates urgency/panic, AND gives a concrete example tied to the effect.",
        level2: "Shows some understanding that pace affects feeling but the example is thin or only one effect is explained.",
        level1: "Restates the question or gives an unrelated answer with no real example."
      },
      exemplar: "A writer slows the pace with long, detailed sentences when a character creeps across thin ice, stretching a few seconds over a whole paragraph so the reader feels the dread. Then, once the ice cracks, short, choppy sentences speed everything up so the escape feels like panic.",
      hintLadder: [
        "What happens to a reader's feelings when time is stretched vs. rushed?",
        "Match slow pace to one emotion and fast pace to another.",
        "Give a specific frozen-world moment for at least one of them."
      ]
    }
  ],
  reflectionPrompt: "Sketch the five-part arc for your frozen-world story, then mark two things: where the pace should slow down and where your character changes on the inside. Which was harder to decide, and why?",
  misconceptionBank: [
    {
      id: "climax-is-only-external",
      label: "Treats the climax as purely an action moment",
      description: "Believes the climax is only the most exciting external event and overlooks the character's internal turning point.",
      coachMove: "Ask: 'What changes INSIDE your character near the big moment? A strong climax peaks the action AND the heart at nearly the same time.'"
    },
    {
      id: "climax-equals-any-action",
      label: "Thinks any exciting scene is the climax",
      description: "Believes every action-packed moment counts as 'the climax' rather than the single decisive turning point.",
      coachMove: "Ask: 'Is this THE moment the whole story builds toward, or just one exciting scene along the way?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Two Peaks in One Moment",
      prompt:
        "Picture a fox racing across a snowfield to reach its den before a hunter. The hunter's shadow falls; the fox freezes — then, instead of fleeing, it turns and leads the hunter AWAY from the den where its cubs hide. Which is the PLOT climax (biggest danger) and which is the EMOTIONAL turning point (inner change), and how close together do they land?",
      answer: "The plot climax is the hunter's shadow falling — peak danger. The emotional turning point is the fox choosing its cubs over its own escape. They land almost simultaneously, which is what makes the moment powerful.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Frozen-World Story Map with Pacing Track",
      challenge:
        "Build a story map for your frozen-world tale that shows not just the five arc stages but ALSO a pacing track (where time slows and speeds), one subplot thread, and a marked emotional turning point — so your story has depth before you write a scene.",
      steps: [
        "Draw a five-point arc: exposition, rising action, climax, falling action, resolution.",
        "Under the arc, draw a 'pacing track' and mark where the story should slow (dread) and speed up (panic).",
        "Add a thin second line for a SUBPLOT (a relationship, secret, or fear) and note where it pays off.",
        "Place a star at the EMOTIONAL turning point and note how it relates to the plot climax."
      ],
      deliverable: "A labeled five-stage story map with a pacing track, one marked subplot thread, and a starred emotional turning point.",
      choiceBoard: [
        "Draw the arc plus pacing track and subplot line with notes at each stage.",
        "Make a 5-card storyboard where two cards show the pacing shift (slow vs. fast).",
        "Write a 5-line 'trailer,' with one line deliberately paced slow and one paced fast to show the shift."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Story Arc Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w7.d1.arena1",
          type: "multiple_choice",
          stem: "A story reads: 'The ice bridge holds. Mara reaches the far shore, lights the beacon, and — for the first time since her brother's death — lets herself cry.' This passage does what at once?",
          choices: [
            "It is pure exposition, introducing the setting.",
            "It combines the falling action/resolution (danger past, beacon lit) with the emotional turning point (finally grieving).",
            "It is only rising action, building tension.",
            "It is the plot climax, the peak of external danger."
          ],
          answerIndex: 1,
          explanation: "The external danger is over (falling action/resolution) while the character's held-back grief finally releases (emotional turning point) — two layers working together.",
          hintLadder: [
            "Is the outer danger still building or winding down?",
            "Notice the inner shift: 'for the first time... lets herself cry.'",
            "It pairs a settling resolution with an emotional turning point."
          ]
        },
        {
          id: "g7.winter.ela.w7.d1.arena2",
          type: "short_answer",
          stem: "Take this bare idea — 'a snow leopard guards the last warm spring in a frozen mountain' — and outline all FIVE arc stages (exposition, rising action, climax, falling action, resolution) in one sentence each, AND weave in ONE subplot thread that pays off by the resolution.",
          rubric: {
            level3: "All five stages present, in order and connected, PLUS a genuine subplot thread introduced early and resolved by the end.",
            level2: "Four or five stages are clear but the subplot is weak or missing, OR the subplot is present but one stage is vague/out of order.",
            level1: "Three or fewer stages are clear, or no coherent subplot, or the outline does not form a connected story."
          },
          exemplar: "Exposition: a snow leopard guards the last warm spring in a valley locked in endless winter, haunted by the cub it once failed to save (subplot). Rising action: hungry animals arrive, the freeze creeps closer, and cracks spread across the spring's edge. Climax: the leopard must choose whether to defend the spring alone or trust a young wolf to help as the ice reaches the water. Falling action: together they hold back the freeze through the night, and the leopard's old guilt begins to thaw. Resolution: the spring survives, and the leopard adopts the wolf, its failure finally redeemed.",
          hintLadder: [
            "One sentence per stage, in order.",
            "Add a second thread — a guilt, a bond, a secret — early on.",
            "Make that thread resolve by the ending."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Pace the Story Mountain",
      prompt:
        "Stand and 'climb the arc' with PACING: march slowly in place for exposition, quicken your steps as rising action speeds up, jump at the climax, then slow to a gentle sway for falling action and a tall, calm stretch for the resolution. Do it twice, exaggerating the speed changes.",
      scienceTieIn: "Changing your movement speed to match story pacing links physical rhythm to narrative rhythm, and pairing ideas with movement strengthens memory.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where in your frozen-world story do you want the reader to feel the most dread, and how will your PACING create it? Write two sentences describing the moment and how you'll slow it down.",
      badge: { id: "g7-winter-arc-architect", name: "Arc Architect", emoji: "🏔️" },
      estimatedMinutes: 7
    }
  }
};
