// Grade 6 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 1.
// Topic: narrative structure — exposition, rising action, climax, resolution.
// Project kickoff: plan a story set in a frozen world.

export const winterG6ElaW7D1 = {
  id: "g6.winter.ela.w7.d1",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Narrative structure — plan a frozen-world story",
  topicTag: "narrative-structure",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.3", "CCSS.W.6.3.A"],
  hook: "Every great winter tale follows a shape: a calm frozen world (exposition), trouble that grows (rising action), the icy moment of no return (climax), and how things settle (resolution). This week you write your own frozen-world story — today you build its skeleton.",
  miniLesson: [
    "A story arc has four main parts: EXPOSITION (introduce characters, setting, and the ordinary world), RISING ACTION (a problem grows through a series of events), CLIMAX (the turning point of greatest tension), and RESOLUTION (how the problem settles and things change).",
    "The climax is not just 'the exciting part' — it is the single moment the whole story has been building toward, after which nothing can go back to how it was.",
    "In a frozen-world tale, exposition might show a village iced in for the winter; rising action, a blizzard trapping a traveler; climax, the choice to cross a cracking frozen lake; resolution, reaching warmth and safety changed by the ordeal."
  ],
  workedExample: {
    prompt: "Map this idea onto the arc: 'A girl must carry a lantern across a frozen valley before the last ember dies.'",
    steps: [
      "Exposition: introduce the girl, her iced-in village, and the dying ember she guards.",
      "Rising action: the wind rises, the path ices over, and the lantern flame shrinks event by event.",
      "Climax: at the frozen river's edge, she must choose to cross the cracking ice or turn back and let the ember die.",
      "Resolution: she crosses, relights the village fire, and is celebrated — changed by what the crossing cost her."
    ],
    answer: "Exposition (girl + iced village + dying ember) → rising action (worsening storm, shrinking flame) → climax (the choice to cross the cracking ice) → resolution (fire relit, girl changed)."
  },
  items: [
    {
      id: "g6.winter.ela.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which part of a story introduces the characters, the setting, and the ordinary world before the trouble begins?",
      choices: ["Climax", "Resolution", "Rising action", "Exposition"],
      answerIndex: 3,
      explanation: "Exposition sets the stage — who, where, and what life is like — before the conflict grows.",
      hintLadder: [
        "It comes first, before the problem builds.",
        "It 'exposes' the starting situation to the reader.",
        "The word starts with 'expo-'."
      ]
    },
    {
      id: "g6.winter.ela.w7.d1.q2",
      type: "multiple_choice",
      stem: "The CLIMAX of a story is best described as:",
      choices: [
        "The turning point of greatest tension, after which things cannot go back to how they were",
        "Any exciting scene with lots of action",
        "The first time we meet the main character",
        "The calm ending that ties up loose ends"
      ],
      answerIndex: 0,
      explanation: "The climax is the single high point the whole story builds toward — the decisive turning point, not just any thrilling moment.",
      hintLadder: [
        "There is usually only ONE climax per story.",
        "It is the moment of highest tension and the biggest turning point.",
        "After it, the story can only settle, not build higher."
      ],
      misconceptionsTargeted: ["climax-equals-any-action"]
    },
    {
      id: "g6.winter.ela.w7.d1.q3",
      type: "multiple_choice",
      stem: "In a frozen-world story, which event best fits the RISING ACTION?",
      choices: [
        "The traveler is safely home by the fire, telling the tale.",
        "We learn the traveler lives alone in a snowbound cabin.",
        "The blizzard worsens, the trail vanishes, and the traveler's supplies run low, event after event.",
        "The traveler finally decides whether to cross the frozen ravine."
      ],
      answerIndex: 2,
      explanation: "Rising action is the series of events where the problem grows and tension builds toward the climax.",
      hintLadder: [
        "Rising action is a build-up of several events, not the ending or the single turning point.",
        "Look for tension that keeps GROWING.",
        "The worsening blizzard with mounting troubles fits best."
      ]
    },
    {
      id: "g6.winter.ela.w7.d1.q4",
      type: "short_answer",
      stem: "Write a one-sentence idea for a story set in a frozen world, then name what its CLIMAX might be.",
      rubric: {
        level3: "Gives a clear frozen-world story idea AND names a climax that is a real turning point of highest tension (not just any action).",
        level2: "Gives a story idea and a climax, but the climax is vague or is just 'an exciting part' rather than a true turning point.",
        level1: "Missing the story idea or the climax, or the two do not connect."
      },
      exemplar: "Idea: Two friends are trapped when their ice-fishing shack drifts loose on a frozen lake. Climax: the moment the ice beneath them cracks and they must decide who crosses first to reach the shore.",
      hintLadder: [
        "Start with a frozen setting and a problem.",
        "Ask: what is the single most tense choice or moment?",
        "That tense turning point is your climax."
      ]
    },
    {
      id: "g6.winter.ela.w7.d1.q5",
      type: "short_answer",
      stem: "Why does a story usually need EXPOSITION before the rising action? Explain in your own words.",
      rubric: {
        level3: "Explains that exposition establishes characters/setting/normal life so readers understand and care, which makes the later conflict meaningful.",
        level2: "Gives a partial reason (e.g., 'so we know the characters') without connecting it to why the conflict then matters.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "Exposition shows us who the characters are and what their frozen world is normally like, so when the storm hits we understand what they stand to lose and actually care about what happens.",
      hintLadder: [
        "What does the reader need to know before the trouble starts?",
        "How does knowing the characters make the danger feel bigger?",
        "Connect 'we understand them' to 'we care what happens.'"
      ]
    }
  ],
  reflectionPrompt: "Sketch the four-part arc for the frozen-world story you'll write this week. Which part feels hardest to plan — and why?",
  misconceptionBank: [
    {
      id: "climax-equals-any-action",
      label: "Thinks any exciting scene is the climax",
      description: "Believes every action-packed or dramatic moment counts as 'the climax' rather than the single decisive turning point.",
      coachMove: "Ask: 'Is this THE moment the whole story builds toward, or just one exciting scene along the way?' A story has only one true climax."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Where's the Turning Point?",
      prompt:
        "Picture this frozen tale: a fox crosses a snowfield, hears the ice groan, keeps going, then steps onto a thin patch that starts to crack. Of everything that happens, which single moment is the TURNING POINT the whole story hinges on?",
      answer: "The moment the ice starts to crack under the fox — that's the climax, the point of highest tension where everything could change.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Frozen-World Story Map",
      challenge:
        "Build a story map for the frozen-world tale you'll write this week. Fill in all four stops of the arc — exposition, rising action, climax, resolution — so your whole story has a shape before you write a single scene.",
      steps: [
        "Draw a mountain-shaped arc: a flat base rising to a peak, then sloping down.",
        "Label the base EXPOSITION and jot your frozen setting, main character, and their ordinary world.",
        "Label the rising slope RISING ACTION and list 3 events that make the problem worse.",
        "Mark the peak as the CLIMAX (the big turning point) and the down-slope as the RESOLUTION (how it settles)."
      ],
      deliverable: "A labeled story-map arc with notes at each of the four stages for your frozen-world story.",
      choiceBoard: [
        "Draw the mountain-arc story map with sketches at each stage.",
        "Make a 4-card storyboard, one card per stage of the arc.",
        "Write a 4-line 'trailer' — one sentence teasing each stage of your story."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Story Arc Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.ela.w7.d1.arena1",
          type: "multiple_choice",
          stem: "A frozen-world story ends: 'The ice bridge holds. Mara reaches the far shore, lights the beacon, and finally lets herself breathe.' Which part of the arc is this?",
          choices: ["Exposition", "Resolution", "Climax", "Rising action"],
          answerIndex: 1,
          explanation: "The danger is past and things settle as the character reaches safety and changes — that is the resolution.",
          hintLadder: [
            "Is tension still building, or is it winding down?",
            "The problem has just been solved and things are settling.",
            "A settling, tie-up ending is the resolution."
          ]
        },
        {
          id: "g6.winter.ela.w7.d1.arena2",
          type: "short_answer",
          stem: "Take this bare idea — 'a snow leopard guards the last warm spring in a frozen mountain' — and outline all FOUR arc stages (exposition, rising action, climax, resolution) in one sentence each.",
          rubric: {
            level3: "All four stages are present, in order, and connected: setup, a growing problem, a clear turning-point climax, and a settling resolution.",
            level2: "Three of the four stages are clear, or all four appear but one is vague or out of order.",
            level1: "Two or fewer stages are clear, or the stages do not form a connected story."
          },
          exemplar: "Exposition: a snow leopard guards the last warm spring in a valley locked in endless winter. Rising action: hungry animals arrive, the freeze creeps closer, and cracks spread across the spring's edge. Climax: the leopard must decide whether to share the spring or defend it alone as the ice reaches the water. Resolution: it chooses to share, and the gathered animals keep the spring alive together.",
          hintLadder: [
            "One sentence to set the scene (exposition).",
            "One sentence where the problem grows (rising action).",
            "One tense turning point (climax), then one settling sentence (resolution)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Climb the Story Mountain",
      prompt:
        "Stand up and 'climb the story arc': march in place slowly for exposition, faster for rising action, jump up at the top for the climax, then slowly lower back down and stretch tall for the resolution. Do it twice.",
      scienceTieIn: "Mapping ideas onto body movement builds stronger memory — you're literally feeling the shape of a story arc, which helps it stick.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which part of your frozen-world story arc are you most excited to write, and which feels hardest to plan? Write a sentence about each.",
      badge: { id: "winter-story-architect", name: "Story Architect", emoji: "🏔️" },
      estimatedMinutes: 7
    }
  }
};
