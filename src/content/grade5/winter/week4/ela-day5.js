// Grade 5 ELA/Writing — Winter Expedition, Week 4 (Space & the Solar System),
// Day 5. Topic: informational writing — research and write a clear explainer
// about a planet or moon.
// Grade 5 counterpart of g6.winter.ela.w4.d5: same topic, simpler wording and
// shorter target writing, more scaffolding.

export const winterG5ElaW4D5 = {
  id: "g5.winter.ela.w4.d5",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Informational writing: explain a planet or moon",
  topicTag: "informational-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.5.2", "CCSS.W.5.2.C"],
  hook: "You've explored the whole solar system this week. Now you become the expert: today you pick one world and write an explainer so clear that a reader who's never heard of it walks away understanding it.",
  miniLesson: [
    "Informational (explanatory) writing teaches a reader about a topic using FACTS, not opinions. Its job is to inform clearly, not to make you agree.",
    "A good explainer starts with a TOPIC SENTENCE that names the subject and the main idea. Then it adds facts, details, and examples to fill it out.",
    "Good informational writing uses clear words and TRANSITIONS (like for example, also, in addition) to connect ideas, and often ends with a closing sentence that sums up the main idea."
  ],
  workedExample: {
    prompt: "Turn these three facts about Mars into the opening of an explainer: it's the fourth planet, it's rocky and red, it has the tallest volcano in the solar system.",
    steps: [
      "Start with a topic sentence that names the subject and the main idea.",
      "Add the supporting facts in an order that flows.",
      "Use one clear detail to make it interesting.",
      "Result: 'Mars, the fourth planet from the Sun, is a rocky world known for its red color. It even has the tallest volcano in the whole solar system.'"
    ],
    answer: "Mars, the fourth planet from the Sun, is a rocky world known for its red color. It even has the tallest volcano in the whole solar system."
  },
  items: [
    {
      id: "g5.winter.ela.w4.d5.q1",
      type: "multiple_choice",
      stem: "What is the main JOB of informational (explanatory) writing?",
      choices: [
        "To make the reader agree with your opinion.",
        "To inform and explain a topic clearly using facts.",
        "To tell an exciting made-up story.",
        "To share only your personal feelings."
      ],
      answerIndex: 1,
      explanation: "Informational writing teaches the reader about a topic using facts and details. Its goal is to inform, not to argue or tell a made-up story.",
      hintLadder: [
        "Is the goal to argue, or to teach?",
        "Think about an article in an encyclopedia.",
        "It informs and explains with facts."
      ],
      misconceptionsTargeted: ["info-writing-is-opinion"]
    },
    {
      id: "g5.winter.ela.w4.d5.q2",
      type: "multiple_choice",
      stem: "Which sentence belongs in an INFORMATIONAL explainer about the Moon?",
      choices: [
        "The Moon is definitely the prettiest thing in the sky.",
        "I think everyone should look at the Moon more.",
        "The Moon is Earth's only natural moon and takes about 27 days to go around Earth.",
        "The Moon makes me feel calm at night."
      ],
      answerIndex: 2,
      explanation: "It gives a fact you can check about the Moon. The others are opinions or feelings, which don't belong in a fact-based explainer.",
      hintLadder: [
        "Which sentence gives a fact you could check?",
        "Avoid 'I think,' 'prettiest,' and feelings.",
        "The orbit sentence is the factual one."
      ]
    },
    {
      id: "g5.winter.ela.w4.d5.q3",
      type: "multiple_choice",
      stem: "Which word or phrase is a TRANSITION that helps connect ideas in an explainer?",
      choices: ["Suddenly the dragon roared", "For example", "The End", "Once upon a time"],
      answerIndex: 1,
      explanation: "'For example' links a big idea to a supporting detail — a common transition in informational writing. The others belong in stories.",
      hintLadder: [
        "A transition connects one idea to the next.",
        "Which phrase introduces a detail that backs up an idea?",
        "'For example' is the transition."
      ]
    },
    {
      id: "g5.winter.ela.w4.d5.q4",
      type: "short_answer",
      stem: "Write a strong TOPIC SENTENCE to open an explainer about a planet or moon you choose. It should name your subject and its main idea.",
      rubric: {
        level3: "Names a specific planet or moon AND states a clear main idea about it in one well-formed sentence (factual, not opinion).",
        level2: "Names the subject but the main idea is vague, or the sentence drifts into opinion.",
        level1: "No clear subject or main idea, or it's just a personal favorite."
      },
      exemplar: "Jupiter, the largest planet in our solar system, is a giant ball of gas known for its huge Great Red Spot storm.",
      hintLadder: [
        "Name the world you'll explain.",
        "Add the main idea a reader should remember.",
        "Keep it factual — no 'I think' or 'best.'"
      ]
    },
    {
      id: "g5.winter.ela.w4.d5.q5",
      type: "short_answer",
      stem: "Explain the difference between a FACT and an OPINION in informational writing, and give one example of each about space.",
      rubric: {
        level3: "Clearly explains the difference (a fact can be checked and is true for everyone; an opinion is a personal view) AND gives a correct space example of each.",
        level2: "Explains the difference but one example is off, or the difference is a little fuzzy.",
        level1: "Mixes up the two or gives no clear examples."
      },
      exemplar: "A fact can be checked and is true for everyone, like 'Saturn has rings.' An opinion is a personal view others might not share, like 'Saturn is the most beautiful planet.' Explainers should use facts.",
      hintLadder: [
        "Can everyone check a fact?",
        "Does an opinion depend on personal feelings?",
        "Give one space fact and one space opinion."
      ]
    }
  ],
  reflectionPrompt: "Which world did you choose to explain, and what is the one fact about it you most want your reader to remember?",
  misconceptionBank: [
    {
      id: "info-writing-is-opinion",
      label: "Fills informational writing with opinions and feelings",
      description: "Treats an explainer like a personal essay, adding 'I think' and 'the best' instead of facts you can check.",
      coachMove: "Have the writer underline each sentence and ask, 'Could a reader check this in a book?' Opinions get cut or rewritten as facts."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Fact or Opinion Blast-Off",
      prompt:
        "Two space sentences: (A) 'Neptune is the eighth planet from the Sun.' (B) 'Neptune is the coolest-looking planet.' Which one is a FACT that belongs in an explainer, and which is an OPINION you'd leave out?",
      answer:
        "(A) is a fact — you can check that Neptune is the eighth planet. (B) is an opinion about looks that others might disagree with, so it doesn't belong in a fact-based explainer.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write a Planet or Moon Explainer",
      challenge:
        "Choose one planet or moon from this week and write a short informational explainer (a few sentences). Start with a topic sentence, add at least three facts, use one transition word, and finish with a closing sentence.",
      steps: [
        "Pick your world and jot down at least three facts about it (size, place, features, or moons).",
        "Write a topic sentence that names the world and its main idea.",
        "Add your facts in an order that makes sense, joined with at least one transition (for example, also, in addition).",
        "End with a closing sentence that sums up the main idea."
      ],
      deliverable: "A short informational explainer with a topic sentence, 3+ facts, a transition, and a closing sentence.",
      choiceBoard: [
        "Write the explainer as a short paragraph.",
        "Design it as a 'fact card' or mini-poster with a headline and bullet facts.",
        "Record it as a 30-second 'space documentary' narration."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Explainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w4.d5.arena1",
          type: "multiple_choice",
          stem: "Which sentence would make the BEST closing sentence for an explainer about Saturn's rings?",
          choices: [
            "And that's why I love Saturn the most.",
            "Made of countless pieces of ice and rock, Saturn's rings make it one of the easiest planets to recognize.",
            "Saturn is a planet.",
            "Once, a space wizard flew through the rings."
          ],
          answerIndex: 1,
          explanation: "It sums up the main idea with a fact and gives the reader a clear takeaway — the job of a closing sentence. The others are opinion, too thin, or made-up.",
          hintLadder: [
            "A closing sentence restates the main idea with a fact.",
            "Avoid opinions ('I love') and made-up stories.",
            "The ice-and-rock summary sentence wraps it up with facts."
          ]
        },
        {
          id: "g5.winter.ela.w4.d5.arena2",
          type: "short_answer",
          stem: "Take this opinion-filled sentence and rewrite it as a clear, factual sentence for an explainer: 'Mars is awesome and probably the best planet ever.'",
          rubric: {
            level3: "Removes the opinion words and writes a checkable, factual sentence about Mars (like its color, place, or a real feature).",
            level2: "Cuts most of the opinion but leaves some judgment words, or the fact is vague.",
            level1: "Keeps it mostly opinion or adds wrong 'facts.'"
          },
          exemplar: "Mars is the fourth planet from the Sun and is called the Red Planet because of the reddish dust on its surface.",
          hintLadder: [
            "Cut opinion words like 'awesome' and 'best.'",
            "Replace them with a fact a reader could check.",
            "State something real about Mars, like its color or place."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shake Out the Draft",
      prompt:
        "Writers get stiff! Stand and 'type' fast in the air for 5 seconds, then reach up and stretch like you're placing a star at the top of your paragraph. Roll your wrists and shoulders, shake out your hands, and take three slow breaths before you revise.",
      scienceTieIn: "Short movement breaks send more blood to your brain, which can help you spot mistakes and find better words when you go back to edit.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What was the hardest part of turning facts into a clear explainer — finding the facts, ordering them, or keeping opinions out? Write one thing you'd do better next time.",
      badge: { id: "g5-winter-cosmic-explainer", name: "Cosmic Explainer", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
