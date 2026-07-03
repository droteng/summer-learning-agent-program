// Grade 5 ELA/Writing — Fall Expedition, Week 7 (Cause & Effect in History),
// Day 4. Grade 5 counterpart of g6.fall.ela.w7.d4. Same topic (writing
// cause-and-effect explanations) pitched down to Grade 5: shorter sentences,
// concrete autumn examples, and extra vocabulary support.

export const fallG5ElaW7D4 = {
  id: "g5.fall.ela.w7.d4",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Write cause-and-effect explanations",
  topicTag: "cause-effect-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.2", "CCSS.ELA-LITERACY.W.5.2.C"],
  hook: "Knowing a cause-and-effect chain is one thing. Writing it so a reader can follow every link is another. Today you turn a chain into clear sentences.",
  miniLesson: [
    "Cause-and-effect writing uses LINKING WORDS to show how ideas connect: because, so, led to, as a result.",
    "Keep the events in order, and make each link clear. Don't make the reader guess why one thing led to the next.",
    "Watch out: just because two things happened at the same time does not mean one caused the other. Show WHY one led to the other."
  ],
  workedExample: {
    prompt: "Join these into one cause-effect sentence: 'The frost came early.' 'The apples were picked in a hurry.'",
    steps: [
      "Find the cause: the early frost.",
      "Find the effect: the apples were picked in a hurry.",
      "Add a linking word that shows the connection.",
      "Result: 'Because the frost came early, the apples were picked in a hurry.'"
    ],
    answer: "Because the frost came early, the apples were picked in a hurry."
  },
  items: [
    {
      id: "g5.fall.ela.w7.d4.q1",
      type: "multiple_choice",
      stem: "Which sentence clearly shows CAUSE and EFFECT?",
      choices: [
        "The market grew. It was Tuesday.",
        "Because more farmers came to sell, the market grew bigger.",
        "The market is big and old.",
        "Markets sell food."
      ],
      answerIndex: 1,
      explanation: "'Because more farmers came' gives the cause; 'the market grew bigger' is the effect — clearly linked.",
      hintLadder: [
        "Which sentence connects a cause to a result?",
        "Look for the word 'because' joining two events.",
        "The farmers/market sentence."
      ]
    },
    {
      id: "g5.fall.ela.w7.d4.q2",
      type: "multiple_choice",
      stem: "If two things happen at the same TIME, does that prove one caused the other?",
      choices: [
        "Yes — same time is enough",
        "No — you must show WHY one led to the other",
        "Yes, if they are famous",
        "No, only in math"
      ],
      answerIndex: 1,
      explanation: "Happening together does not prove cause and effect. You must show the reason one led to the other.",
      hintLadder: [
        "Does same time always mean one caused the other?",
        "Think of two things that just happen on the same day.",
        "You have to show the WHY."
      ],
      misconceptionsTargeted: ["same-time-means-cause"]
    },
    {
      id: "g5.fall.ela.w7.d4.q3",
      type: "multiple_choice",
      stem: "Which linking phrase best introduces an EFFECT (the result)?",
      choices: ["because of", "as a result", "since", "due to"],
      answerIndex: 1,
      explanation: "'As a result' points to the effect. The others usually point to the cause.",
      hintLadder: [
        "Which one comes right before the result?",
        "It points forward to what happened.",
        "'As a result.'"
      ]
    },
    {
      id: "g5.fall.ela.w7.d4.q4",
      type: "short_answer",
      stem: "Write a short cause-and-effect paragraph (3 sentences) about how a big fall harvest led to a village festival. Use at least two linking words.",
      rubric: {
        level3: "A clear chain in order (big harvest → extra food → festival) with at least two linking words and clear connections.",
        level2: "Mostly clear but only one linking word or a weak connection.",
        level1: "Lists facts with no linking words."
      },
      exemplar: "Because the harvest was very big this fall, the village had extra food to share. As a result, the people decided to hold a festival. So everyone gathered to celebrate the good year.",
      hintLadder: [
        "Start with the cause: the big harvest.",
        "What did it lead to? (extra food, then a festival)",
        "Use words like 'because,' 'as a result,' and 'so.'"
      ]
    },
    {
      id: "g5.fall.ela.w7.d4.q5",
      type: "short_answer",
      stem: "Rewrite this weak pair as ONE sentence that shows the cause and effect: 'There was no rain. The crops dried up.'",
      rubric: {
        level3: "One sentence with a linking word that clearly shows the lack of rain caused the crops to dry up.",
        level2: "Links them but the connection is still a little loose.",
        level1: "Leaves them as two separate sentences."
      },
      exemplar: "Because there was no rain for weeks, the crops dried up in the fields.",
      hintLadder: [
        "Which part is the cause? (no rain)",
        "Join them with 'because' or 'so.'",
        "Make the WHY clear."
      ]
    }
  ],
  reflectionPrompt: "Cause-and-effect writing shows up in science, the news, and your own explanations. Where did you have to explain 'why something happened' recently?",
  misconceptionBank: [
    {
      id: "same-time-means-cause",
      label: "Thinks same time proves cause",
      description: "Assumes that because two things happened together, one caused the other.",
      coachMove: "Ask 'how did one lead to the other?' If you can't explain how, it may just be a coincidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Because vs. And",
      prompt:
        "Read these two: (A) 'The leaves fell and the days got colder.' (B) 'The days got colder, so the trees dropped their leaves.' Only ONE really explains a cause. Which one, and which word gives it away?",
      answer:
        "(B) explains a cause. The word 'so' shows the cold made the leaves drop. (A) only lists two things with 'and'; it doesn't say one led to the other.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: The 'Because' Paragraph",
      challenge:
        "Turn a real autumn cause-and-effect chain (like big harvest → extra food → festival) into a smooth paragraph where every link is joined by a linking word, so the reader never has to guess.",
      steps: [
        "Pick or make up a 3-link cause-and-effect chain.",
        "Write one sentence for each link, joined with linking words (because, so, as a result).",
        "Read it out loud and circle every linking word — you should have at least two.",
        "Fix any spot where the reader would have to guess WHY one event led to the next."
      ],
      deliverable: "A 3-sentence cause-and-effect paragraph with at least two linking words and every connection made clear.",
      choiceBoard: [
        "Write the paragraph about a fall harvest chain.",
        "Write it about a chain from your own day.",
        "Write it as a short news report that explains why something happened."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Linking-Words Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.ela.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Which sentence shows real cause-and-effect WITHOUT pretending 'same time' proves it?",
          choices: [
            "The festival was the same week the leaves turned red, so the leaves caused the festival.",
            "Because the harvest was large, the village held a bigger festival than usual.",
            "It was autumn and there was a festival.",
            "The festival and the cold weather both happened in October."
          ],
          answerIndex: 1,
          explanation: "Only option B shows a real reason (a large harvest led to a bigger festival). The others confuse timing with cause, or just list events.",
          hintLadder: [
            "Avoid sentences that say 'happened together, so one caused the other.'",
            "Look for a sentence with a real WHY.",
            "The large-harvest sentence explains the true cause."
          ]
        },
        {
          id: "g5.fall.ela.w7.d4.arena2",
          type: "short_answer",
          stem: "Rewrite this weak pair as ONE cause-and-effect sentence with a linking word: 'The first frost came early. Farmers rushed to bring in the pumpkins.'",
          rubric: {
            level3: "One sentence with a linking word that clearly shows the early frost CAUSED the rush to harvest.",
            level2: "Links them but the connection is still a little loose.",
            level1: "Leaves them as two separate sentences with no clear link."
          },
          exemplar: "Because the first frost came early, farmers rushed to bring in the pumpkins before they were ruined.",
          hintLadder: [
            "Which sentence is the cause? (the early frost)",
            "Join them with 'because' or 'so.'",
            "Make it clear WHY the farmers rushed."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Shake It Out",
      prompt:
        "Stand and shake out each body part in a chain: shake your hands (10 seconds) → arms → shoulders → whole body, then take 3 slow breaths. One movement leads into the next, just like a cause-effect chain.",
      scienceTieIn: "Shaking out your muscles lets go of built-up tension and gets your blood moving, helping your brain feel awake and ready to write again.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write one cause-and-effect sentence about your day using a linking word like 'because' or 'so.' Did making the link clear help?",
      badge: { id: "g5-fall-linking-word-writer", name: "Linking-Word Writer", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
