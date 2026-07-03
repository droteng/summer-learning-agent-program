// Grade 7 ELA/Writing — Summer Story Builders, Week 3, Day 1.
// Topic: narrative arc & complex plot structure — exposition, rising action,
// climax, falling action, resolution, plus subplot and foreshadowing.

export const summerG7ElaW3D1 = {
  id: "g7.summer.ela.w3.d1",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Narrative arc & complex plot structure",
  topicTag: "narrative-arc",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.3", "CCSS.ELA-LITERACY.W.7.3.A"],
  hook: "Every gripping adventure follows a shape you can feel in your chest — a slow build, a breathless peak, and a landing. This week you write your own short adventure, and it starts with mastering the arc that carries a reader from the first line to the last.",
  miniLesson: [
    "A narrative arc has five stages: exposition sets up characters and setting; rising action stacks complications; the climax is the turning point of highest tension; falling action releases that tension; and the resolution settles the story's question.",
    "A strong Grade 7 plot rarely runs in a straight line. A subplot — a smaller, second thread of conflict — weaves alongside the main one and often collides with it near the climax, raising the stakes.",
    "Foreshadowing plants a small clue early (a stormy sky, an offhand warning) that pays off later. Done well, the ending feels both surprising and inevitable — the reader thinks, 'I should have seen that coming.'"
  ],
  workedExample: {
    prompt: "Map an adventure about a hiker who gets lost onto the five-stage arc, and add one piece of foreshadowing.",
    steps: [
      "Exposition: Maya sets out on a familiar trail; she notices the ranger's warning about fog (this is the foreshadowing).",
      "Rising action: the fog rolls in, her map tears, her flashlight flickers — complications stack.",
      "Climax: she must choose between a risky shortcut down a cliff and waiting through the cold night.",
      "Falling action: she signals rescuers with the flickering flashlight she almost threw away.",
      "Resolution: safe at the ranger station, Maya finally understands why the warning mattered."
    ],
    answer: "The fog warning in the exposition foreshadows the crisis, and the fading flashlight — a rising-action problem — becomes the falling-action solution, so the ending feels earned."
  },
  items: [
    {
      id: "g7.summer.ela.w3.d1.q1",
      type: "multiple_choice",
      stem: "In a narrative arc, the CLIMAX is best described as:",
      choices: [
        "The opening that introduces the setting and characters",
        "The turning point of highest tension, where the main conflict comes to a head",
        "The calm ending after the problem is solved",
        "A minor side story that runs alongside the main plot"
      ],
      answerIndex: 1,
      explanation: "The climax is the peak of tension and the story's decisive turning point; the other choices describe exposition, resolution, and subplot.",
      hintLadder: [
        "Think about the moment of greatest suspense.",
        "It is a turning point, not a beginning or an ending.",
        "It is where the main conflict finally comes to a head."
      ]
    },
    {
      id: "g7.summer.ela.w3.d1.q2",
      type: "multiple_choice",
      stem: "A writer mentions early in the story that the boat's radio 'crackled and went dead sometimes.' Later, the characters are stranded because the radio fails. This technique is called:",
      choices: [
        "Resolution",
        "Exposition",
        "Foreshadowing",
        "Falling action"
      ],
      answerIndex: 2,
      explanation: "Planting an early detail that pays off later is foreshadowing — it makes the crisis feel prepared for rather than random.",
      hintLadder: [
        "The early detail hints at a later event.",
        "What do we call a planted clue that pays off?",
        "It begins with 'fore' — it comes before."
      ],
      misconceptionsTargeted: ["climax-equals-end"]
    },
    {
      id: "g7.summer.ela.w3.d1.q3",
      type: "multiple_choice",
      stem: "What is the main job of a SUBPLOT in a Grade 7 adventure story?",
      choices: [
        "To replace the main conflict entirely",
        "To add a second thread of conflict that deepens or complicates the main story",
        "To list facts about the setting",
        "To end the story quickly"
      ],
      answerIndex: 1,
      explanation: "A subplot is a secondary conflict woven beside the main plot; at its best it collides with the main line and raises the stakes.",
      hintLadder: [
        "'Sub' means beneath or secondary.",
        "It runs alongside the main plot, not instead of it.",
        "Its purpose is to deepen or complicate the main story."
      ]
    },
    {
      id: "g7.summer.ela.w3.d1.q4",
      type: "short_answer",
      stem: "Sketch a five-stage arc for a short adventure of your own. Write one sentence for each stage: exposition, rising action, climax, falling action, resolution.",
      rubric: {
        level3: "All five stages are present, clearly labeled, and logically connected, with a genuine climax that turns on the main conflict.",
        level2: "Most stages are present but one is missing, mislabeled, or the climax is weak or unclear.",
        level1: "Stages are jumbled, several are missing, or it reads as a summary without a real arc."
      },
      exemplar: "Exposition: Theo joins a night search for his lost dog in the marsh. Rising action: the path floods, his lantern dims, and he hears something moving. Climax: he must wade into the dark water or turn back. Falling action: he follows the dog's bark to a mudbank. Resolution: soaked but grinning, Theo carries the shivering dog home.",
      hintLadder: [
        "Start by naming your character and the problem (exposition).",
        "Stack two or three complications for the rising action.",
        "Make the climax a real choice or turning point, not just the ending."
      ]
    },
    {
      id: "g7.summer.ela.w3.d1.q5",
      type: "short_answer",
      stem: "Explain how foreshadowing can make a story's ending feel 'both surprising and inevitable.' Use one example of your own.",
      rubric: {
        level3: "Clearly explains that an early planted clue prepares the reader so the payoff feels earned yet unexpected, AND gives a fitting original example linking clue to payoff.",
        level2: "Explains the idea partly or gives an example that only loosely connects clue and payoff.",
        level1: "Restates the term without explanation or gives no working example."
      },
      exemplar: "If a story shows a character nervously checking a frayed rope early on, the reader half-forgets it — so when the rope snaps during the climb, it shocks us and yet feels right, because the clue was always there.",
      hintLadder: [
        "What does an early clue do to the reader's expectations?",
        "Why does a planted clue keep the ending from feeling random?",
        "Pick a clue and name the exact moment it pays off."
      ]
    }
  ],
  reflectionPrompt: "Think of the last book or film that truly gripped you. Where was its climax, and what small early detail turned out to matter? Save one arc idea — you'll grow it into your own story this week.",
  misconceptionBank: [
    {
      id: "climax-equals-end",
      label: "Thinks the climax is the end of the story",
      description: "Confuses the climax (the peak turning point) with the resolution, so stories stop dead at the tensest moment with no landing.",
      coachMove: "Show that after the climax comes falling action and resolution: 'The peak is not the finish line — the reader still needs to land.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Peak or Landing?",
      prompt:
        "Would you rather read a story that ends the instant the hero jumps off the cliff, or one that shows you where they land? Which choice leaves you more satisfied — and which stage of the arc does each one cut off?",
      answer:
        "Most readers want the landing: cutting off at the jump ends on the climax with no falling action or resolution, so the story's question is never answered. The arc needs a landing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Adventure Story Map",
      challenge:
        "Build a visual story map for the adventure you'll write this week. Chart all five arc stages, weave in one subplot thread, and plant one piece of foreshadowing that pays off near the climax.",
      steps: [
        "Draw a mountain-shaped arc and label the five stages along it.",
        "Write one sentence per stage for your main conflict.",
        "Add a second colored line for a subplot and mark where it collides with the main plot.",
        "Circle one early detail as foreshadowing and draw an arrow to where it pays off."
      ],
      deliverable: "A labeled story map showing the five arc stages, one subplot line, and one foreshadowing clue with its payoff.",
      choiceBoard: [
        "Draw the mountain-arc story map with labels and arrows.",
        "Write a bulleted 'writer's blueprint' listing each stage, the subplot, and the planted clue.",
        "Record a 45-second pitch that walks a listener up and over your story's arc."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Plot Architect Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w3.d1.arena1",
          type: "multiple_choice",
          stem: "Put these plot beats in correct arc order: (1) the storm finally breaks and the crew limps to shore, (2) the crew sets sail on a calm morning, (3) the mast cracks in the worst of the storm, (4) safe on the beach, they vow never to ignore a warning again.",
          choices: [
            "2 → 3 → 1 → 4",
            "1 → 2 → 3 → 4",
            "2 → 1 → 3 → 4",
            "3 → 2 → 1 → 4"
          ],
          answerIndex: 0,
          explanation: "Exposition (2, calm launch) → climax (3, the mast cracks at peak danger) → falling action (1, they limp to shore) → resolution (4, the vow). Order: 2 → 3 → 1 → 4.",
          hintLadder: [
            "Which beat sets the scene before any trouble?",
            "Which beat is the moment of greatest danger?",
            "After the peak comes release, then the settled ending."
          ]
        },
        {
          id: "g7.summer.ela.w3.d1.arena2",
          type: "short_answer",
          stem: "Invent one piece of foreshadowing for a story about a kid entering a bike race, and explain what later moment it sets up.",
          rubric: {
            level3: "Gives a concrete early clue AND names a specific later payoff that the clue clearly prepares, so the ending would feel earned.",
            level2: "Gives a clue but the payoff is vague or only loosely connected.",
            level1: "Gives no real clue or no clear payoff."
          },
          exemplar: "Early on, the racer's front brake squeaks and she keeps meaning to fix it. Near the finish, that same brake fails on the final hill, forcing the choice that decides the race.",
          hintLadder: [
            "Plant a small detail the reader will half-forget.",
            "Pick a later moment where that detail suddenly matters.",
            "Make sure the clue points straight at the payoff."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Climb the Arc",
      prompt:
        "Stand up and physically climb your story's arc: march in place for the slow rising action, leap once at the climax, then slowly lower into a stretch for the falling action and a calm breath for the resolution. Run the whole arc twice.",
      scienceTieIn: "Linking ideas to movement uses your body's motor memory, which can help your brain encode and recall abstract concepts like plot structure more firmly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is the adventure you most want to tell this week? Write the one sentence that would sit at the very peak of its arc — the climax you're building toward.",
      badge: { id: "g7-plot-architect", name: "Plot Architect", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
