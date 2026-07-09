// Grade 6 World — Week 6, Day 4.
// Topic: perspectives and bias.

export const grade6WorldWeek6Day4 = {
  id: "g6.world.w6.d4",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Perspectives and bias",
  topicTag: "perspectives",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.10.6-8", "C3.D2.His.6.6-8"],
  hook: "Two people can watch the same event and tell different stories. Today you spot perspective and bias — without picking sides.",
  miniLesson: [
    "Perspective: where someone is standing — what they care about, who they speak for. Everyone has one.",
    "Bias: a leaning that shapes which facts get told, in which order, and which get left out.",
    "Reading multiple perspectives doesn't mean 'both sides are equal' — it means you see the picture more fully."
  ],
  workedExample: {
    prompt:
      "A new road is being built. The construction company says 'jobs!' Local families say 'noise!' Are these views opposites or partial?",
    steps: [
      "Each view names a real concern.",
      "Jobs and noise both happen — neither view is fake.",
      "Each is partial: jobs ignores noise; noise ignores jobs.",
      "A full picture combines both, and adds new questions (e.g., will the jobs go to local families?)."
    ],
    answer: "Both perspectives are real and partial. Combining them gives a fuller picture."
  },
  items: [
    {
      id: "g6.world.w6.d4.q1",
      type: "multiple_choice",
      stem: "What does 'perspective' mean in a news context?",
      choices: [
        "The viewpoint someone speaks from — what they see and care about.",
        "An opinion is always wrong.",
        "A type of camera lens.",
        "A fake story."
      ],
      answerIndex: 0,
      explanation: "Perspective is the viewpoint someone speaks from. It's not the same as 'wrong'; it's just partial.",
      hintLadder: [
        "Think 'where someone's standing.'",
        "It shapes what they notice.",
        "Perspective = viewpoint."
      ]
    },
    {
      id: "g6.world.w6.d4.q2",
      type: "multiple_choice",
      stem:
        "A news article quotes only a company spokesperson about a factory's effects on the river. What's missing?",
      choices: [
        "Nothing — one source is enough.",
        "Bigger fonts.",
        "The factory's logo.",
        "The perspective of people who live near or use the river."
      ],
      answerIndex: 3,
      explanation: "One perspective is partial. People affected by the river should be heard too.",
      hintLadder: [
        "Who else is affected?",
        "Whose voice is not in the article?",
        "Neighbors / river users."
      ],
      misconceptionsTargeted: ["one-voice-is-full-story"]
    },
    {
      id: "g6.world.w6.d4.q3",
      type: "multiple_choice",
      stem: "Bias is BEST described as:",
      choices: [
        "A neutral fact.",
        "A leaning that shapes what's reported and what's left out.",
        "A type of error message.",
        "Always intentional lying."
      ],
      answerIndex: 1,
      explanation: "Bias is a leaning, conscious or not. It shapes selection (what gets in), order, and framing.",
      hintLadder: [
        "Bias affects which facts make it in.",
        "Not always intentional.",
        "A leaning."
      ]
    },
    {
      id: "g6.world.w6.d4.q4",
      type: "multiple_choice",
      stem:
        "Two students disagree about whether a school rule is fair. What's a respectful way to keep the conversation going?",
      choices: [
        "Yell over each other.",
        "Stop talking to each other.",
        "Each names what they see and what they value, then ask one specific question of the other.",
        "Vote and end it."
      ],
      answerIndex: 2,
      explanation: "Naming values and asking specific questions turns disagreement into shared problem-solving.",
      hintLadder: [
        "How do you keep listening when you disagree?",
        "Name your view, then ask theirs.",
        "Specific questions."
      ]
    },
    {
      id: "g6.world.w6.d4.q5",
      type: "short_answer",
      stem:
        "Pick a topic where you've heard two views (homework, screen time, school lunches). Write each view in one sentence, without judging either.",
      rubric: {
        level3: "Two sentences, each fairly representing a real perspective without dismissive language. No 'they say' / 'we say' framing.",
        level2: "Two sentences but one is judged or dismissed.",
        level1: "One view only or both judged."
      },
      exemplar:
        "View 1: Kids learn discipline and skills from homework practice. View 2: Long homework cuts into family time and sleep, which also matter for learning.",
      hintLadder: [
        "Pick a topic with real disagreement.",
        "Write each side's strongest case.",
        "Skip dismissive words."
      ]
    }
  ],
  reflectionPrompt: "Today you held two perspectives at once. Where in your life could you practice this more?",
  misconceptionBank: [
    {
      id: "one-voice-is-full-story",
      label: "Treats a single source's perspective as the full story",
      description: "Reads one company's statement or one resident's view as the complete picture.",
      coachMove: "Ask: whose voice am I not hearing? Add a second perspective before deciding."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Eyes on One Event",
      prompt:
        "A school cancels the test scheduled for tomorrow. Would you rather hear that news from a student or from the teacher? Whoever you pick, name one thing they'd notice that the OTHER person might not.",
      answer: "Each notices different things from their perspective: a student might focus on relief or lost study time; a teacher might focus on rescheduling or whether the class is ready. Both views are real and partial.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Two-Sided Story",
      challenge:
        "Pick one small event (a new school rule, a closed playground, a cafeteria menu change). Tell it twice — once from each of two different perspectives — fairly, without making either side the 'bad guy'.",
      steps: [
        "Choose an event two groups would see differently.",
        "Write version A from the first perspective.",
        "Write version B from the second perspective.",
        "Add one question each side might fairly ask the other."
      ],
      deliverable: "Two short accounts of the same event from two perspectives, each fair, plus one question per side.",
      choiceBoard: [
        "Write the two accounts as short paragraphs.",
        "Draw a split comic: same event, two viewpoints.",
        "Record a mock 'interview' with both sides."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Perspective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.world.w6.d4.arena1",
          type: "multiple_choice",
          stem: "A news report on a new skatepark quotes only the city mayor praising it. What is the BEST way to describe this report?",
          choices: [
            "Complete and balanced — one official source is enough.",
            "Partial — it's missing perspectives like neighbors, skaters, or nearby businesses.",
            "Biased toward lying about the skatepark.",
            "Useless and should be ignored entirely."
          ],
          answerIndex: 1,
          explanation: "One source isn't necessarily lying, but the report is partial: it leaves out other affected perspectives like neighbors, skaters, and local businesses.",
          hintLadder: [
            "Is one voice the whole picture?",
            "It's not lying, but something is left out — what's the word for that?",
            "Partial — missing other perspectives."
          ]
        },
        {
          id: "g6.world.w6.d4.arena2",
          type: "short_answer",
          stem: "Pick a real disagreement you know (screen-time limits, a sports rule, homework). Write BOTH sides fairly in one sentence each, without dismissing either.",
          rubric: {
            level3: "Two sentences, each fairly representing a real perspective with no dismissive or mocking language toward either side.",
            level2: "Two sentences but one side is judged, weakened, or written less fairly than the other.",
            level1: "Only one side given, or both sides written dismissively."
          },
          exemplar: "View 1: Screen-time limits help kids sleep better and focus on schoolwork. View 2: Screens are how many kids learn, create, and stay connected to friends, so limits can cut off real benefits.",
          hintLadder: [
            "Pick a topic where people genuinely disagree.",
            "Write each side's STRONGEST fair case.",
            "Cut any words that mock or dismiss a side."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Change Your View",
      prompt:
        "Slowly turn your head left and look at the room, then right and look again. Notice you literally see different things from each angle. Take three calm breaths as you face forward again.",
      scienceTieIn: "Shifting your gaze and breathing slowly relaxes the brain's tension response, making it easier to consider another person's point of view instead of reacting.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a disagreement you saw or had today. What did the OTHER person see or value that you might have missed at first?",
      badge: { id: "perspective-holder", name: "Perspective Holder", emoji: "👓" },
      estimatedMinutes: 7
    }
  }
};
