// Grade 5 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 1.
// Topic: narrative structure — beginning, middle (problem grows), climax, ending.
// Project kickoff: plan a story set in a frozen world (Grade 5 depth).

export const winterG5ElaW7D1 = {
  id: "g5.winter.ela.w7.d1",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Story structure — plan a frozen-world story",
  topicTag: "narrative-structure",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.3", "CCSS.ELA-LITERACY.W.5.3.A"],
  hook: "Every winter tale has a shape. It has a BEGINNING (we meet the characters and their icy world), a MIDDLE where the PROBLEM GROWS, a BIG MOMENT called the CLIMAX where everything changes, and an ENDING where things settle down. This week you write your own frozen-world story. Today you plan its shape.",
  miniLesson: [
    "A story has four parts. BEGINNING: we meet the characters and the setting. MIDDLE: a problem gets bigger and bigger. CLIMAX: the biggest, most exciting moment, when things must change. ENDING: how the problem is solved and how things settle.",
    "The CLIMAX is not just any exciting part. It is the ONE moment the whole story has been building toward. After the climax, the story cannot go back to how it started.",
    "You can plan a story with a simple frame. Try: 'In the beginning, ___. Then the problem grows when ___. The biggest moment is when ___. In the end, ___.' Fill in the blanks and you have a plan."
  ],
  workedExample: {
    prompt: "Use the story frame to plan this idea: 'A boy must carry a lantern across a frozen valley before the last flame goes out.'",
    steps: [
      "Beginning: introduce the boy, his snowed-in village, and the tiny flame he is guarding.",
      "Middle (problem grows): the wind rises, the path turns to ice, and the flame gets smaller and smaller.",
      "Climax: at the edge of the frozen river, the boy must choose to cross the cracking ice or turn back.",
      "Ending: he crosses, relights the village fire, and feels braver than before."
    ],
    answer: "Beginning (boy + snowed-in village + tiny flame) then the problem grows (storm gets worse, flame shrinks), the biggest moment is when he chooses to cross the cracking ice (climax), and in the end he relights the fire and feels braver (ending)."
  },
  items: [
    {
      id: "g5.winter.ela.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which part of a story is where we FIRST meet the characters and the setting?",
      choices: ["The climax", "The beginning", "The middle", "The ending"],
      answerIndex: 1,
      explanation: "The beginning introduces the characters and the setting before the problem grows.",
      hintLadder: [
        "Which part comes FIRST?",
        "It is where we learn who the story is about and where it happens.",
        "That is the beginning."
      ]
    },
    {
      id: "g5.winter.ela.w7.d1.q2",
      type: "multiple_choice",
      stem: "The CLIMAX of a story is best described as:",
      choices: [
        "Any exciting scene with lots of action",
        "The one biggest moment the whole story builds toward, after which things must change",
        "The first time we meet the main character",
        "The calm ending that ties up loose ends"
      ],
      answerIndex: 1,
      explanation: "The climax is the single biggest moment the story builds toward, not just any exciting scene.",
      hintLadder: [
        "There is usually only ONE climax in a story.",
        "It is the biggest, most important turning moment.",
        "After it, the story can only settle down, not build up more."
      ],
      misconceptionsTargeted: ["climax-equals-any-action"]
    },
    {
      id: "g5.winter.ela.w7.d1.q3",
      type: "multiple_choice",
      stem: "In a frozen-world story, which event best fits the MIDDLE, where the problem GROWS?",
      choices: [
        "The traveler is safely home by the fire at the end.",
        "We learn the traveler lives alone in a snowy cabin.",
        "The blizzard gets worse, the trail disappears, and the traveler's food runs low.",
        "The traveler finally decides whether to cross the frozen river."
      ],
      answerIndex: 2,
      explanation: "The middle is where the problem keeps growing, event after event, and the worsening blizzard shows that.",
      hintLadder: [
        "The middle is where trouble keeps GROWING, not the ending or the one big moment.",
        "Look for the problem getting worse step by step.",
        "The worsening blizzard fits best."
      ]
    },
    {
      id: "g5.winter.ela.w7.d1.q4",
      type: "short_answer",
      stem: "Write ONE sentence with an idea for a story set in a frozen world. Then name what its CLIMAX (biggest moment) might be.",
      rubric: {
        level3: "Gives a clear frozen-world story idea AND names a climax that is a real biggest moment or turning point (not just any exciting action).",
        level2: "Gives a story idea and a climax, but the climax is vague or is just 'an exciting part.'",
        level1: "Missing the story idea or the climax, or the two do not connect."
      },
      exemplar: "Idea: Two friends are stuck when their ice-fishing shack drifts loose on a frozen lake. Climax: the moment the ice cracks under them and they must decide who steps toward shore first.",
      hintLadder: [
        "Start with a frozen setting and a problem.",
        "Ask: what is the single most exciting or scary moment?",
        "That biggest moment is your climax."
      ]
    },
    {
      id: "g5.winter.ela.w7.d1.q5",
      type: "short_answer",
      stem: "Why does a story usually need a BEGINNING before the problem grows? Explain in your own words.",
      rubric: {
        level3: "Explains that the beginning shows the characters and setting so readers understand and care, which makes the problem later feel important.",
        level2: "Gives a partial reason (e.g., 'so we know the characters') without connecting it to why the problem then matters.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "The beginning shows us who the characters are and what their frozen world is like, so when the storm comes we understand what they could lose and we care what happens to them.",
      hintLadder: [
        "What does the reader need to know before the trouble starts?",
        "How does knowing the characters make the danger feel bigger?",
        "Connect 'we understand them' to 'we care what happens.'"
      ]
    }
  ],
  reflectionPrompt: "Draw the four parts of the frozen-world story you will write this week. Which part feels hardest to plan, and why?",
  misconceptionBank: [
    {
      id: "climax-equals-any-action",
      label: "Thinks any exciting scene is the climax",
      description: "Believes every action-packed moment is 'the climax' instead of the one biggest turning moment.",
      coachMove: "Ask: 'Is this THE one moment the whole story builds toward, or just one exciting scene along the way?' A story has only one true climax."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Where's the Big Moment?",
      prompt:
        "Picture this frozen tale: a fox crosses a snowfield, hears the ice groan, keeps going, then steps onto a thin patch that starts to crack. Of everything that happens, which ONE moment is the biggest turning point of the story?",
      answer: "The moment the ice starts to crack under the fox. That is the climax, the biggest moment where everything could change.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Frozen-World Story Map",
      challenge:
        "Build a story map for the frozen-world tale you will write this week. Fill in all four parts so your whole story has a shape before you write a single scene. Use the frame sentences to help.",
      steps: [
        "Draw a mountain shape: a flat bottom rising to a peak, then sloping down.",
        "Label the bottom BEGINNING and write your frozen setting, main character, and their normal world.",
        "Label the rising slope MIDDLE and list 3 events that make the problem worse.",
        "Mark the peak as the CLIMAX (the biggest moment) and the down-slope as the ENDING (how it settles)."
      ],
      deliverable: "A labeled story-map mountain with notes at each of the four parts of your frozen-world story.",
      choiceBoard: [
        "Draw the mountain story map with a small sketch at each part.",
        "Make a 4-card storyboard, one card per part of the story.",
        "Write a 4-line 'movie trailer,' one sentence teasing each part of your story."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Story Shape Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w7.d1.arena1",
          type: "multiple_choice",
          stem: "A frozen-world story ends: 'The ice bridge holds. Mara reaches the far shore, lights the beacon, and finally breathes easy.' Which part of the story is this?",
          choices: ["Beginning", "Middle", "Climax", "Ending"],
          answerIndex: 3,
          explanation: "The danger is over and things settle as the character reaches safety, so this is the ending.",
          hintLadder: [
            "Is the problem still growing, or is it winding down?",
            "The problem has just been solved and things are settling.",
            "A settling, wrap-up part is the ending."
          ]
        },
        {
          id: "g5.winter.ela.w7.d1.arena2",
          type: "short_answer",
          stem: "Take this bare idea — 'a snow leopard guards the last warm spring in a frozen mountain' — and write all FOUR parts (beginning, middle, climax, ending) in one sentence each.",
          rubric: {
            level3: "All four parts are present, in order, and connected: a setup, a growing problem, a clear biggest-moment climax, and a settling ending.",
            level2: "Three of the four parts are clear, or all four appear but one is vague or out of order.",
            level1: "Two or fewer parts are clear, or the parts do not form a connected story."
          },
          exemplar: "Beginning: a snow leopard guards the last warm spring in a valley locked in endless winter. Middle: hungry animals arrive and the freeze creeps closer to the water. Climax: the leopard must decide whether to share the spring or keep it alone as the ice reaches the edge. Ending: it chooses to share, and the animals keep the spring alive together.",
          hintLadder: [
            "One sentence to set the scene (beginning).",
            "One sentence where the problem grows (middle).",
            "One biggest moment (climax), then one settling sentence (ending)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Climb the Story Mountain",
      prompt:
        "Stand up and 'climb the story mountain': march in place slowly for the beginning, faster for the middle, jump up at the top for the climax, then slowly lower down and stretch tall for the ending. Do it twice.",
      scienceTieIn: "Matching ideas to body movement helps you remember them better. You are feeling the shape of a story, which helps it stick.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which part of your frozen-world story are you most excited to write, and which feels hardest to plan? Write a sentence about each.",
      badge: { id: "g5-winter-story-architect", name: "Story Builder", emoji: "🏔️" },
      estimatedMinutes: 7
    }
  }
};
