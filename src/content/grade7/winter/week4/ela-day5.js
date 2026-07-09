// Grade 7 ELA/Writing — Winter Expedition, Week 4 (Space & the Solar System),
// Day 5. Topic: informational writing — research and write a clear, well-organized
// explainer about a planet or moon, with Grade 7 depth: cited evidence, cohesion,
// and controlling ideas.

export const winterG7ElaW4D5 = {
  id: "g7.winter.ela.w4.d5",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Informational writing: explain a planet or moon with evidence and cohesion",
  topicTag: "informational-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.2", "CCSS.W.7.2.C"],
  hook: "You've explored the whole solar system this week. Now you become the expert author: today you research one world and craft an explainer so clear and well-organized that a reader who's never heard of it walks away genuinely informed — with evidence, not just facts.",
  miniLesson: [
    "Informational (explanatory) writing develops a topic with relevant facts, definitions, concrete details, and evidence. A Grade 7 explainer states a clear CONTROLLING IDEA (thesis) and organizes support around it — its job is to inform, not to persuade or entertain.",
    "Strong explainers group related ideas and use COHESION devices — transitions and clauses (for example, in contrast, as a result, which means) — to clarify the relationships among ideas, not just to list them.",
    "Precise, domain-specific vocabulary (orbit, atmosphere, satellite, insolation) and a concluding statement that follows from and reinforces the controlling idea signal mature informational writing. Where a fact comes from a source, credible writers attribute it."
  ],
  workedExample: {
    prompt: "Turn these facts about Mars into an explainer opening with a controlling idea: it's the fourth planet, it's rocky and red from iron oxide, and it hosts Olympus Mons, the tallest volcano in the solar system.",
    steps: [
      "Open with a controlling idea that names the subject and the main point the details will support.",
      "Add supporting facts in a logical order, using precise vocabulary (iron oxide, volcano).",
      "Use a cohesion device to show the relationship between ideas (for example, 'which is why').",
      "Result: 'Mars, the fourth planet from the Sun, is a rocky world whose surface has been shaped by extremes. Its reddish color comes from iron oxide, and it hosts Olympus Mons — which, at roughly 22 km high, is the tallest volcano in the solar system.'"
    ],
    answer: "Mars, the fourth planet from the Sun, is a rocky world whose surface has been shaped by extremes. Its reddish color comes from iron oxide, and it hosts Olympus Mons — which, at roughly 22 km high, is the tallest volcano in the solar system."
  },
  items: [
    {
      id: "g7.winter.ela.w4.d5.q1",
      type: "multiple_choice",
      stem: "What is the role of a CONTROLLING IDEA (thesis) in an informational explainer?",
      choices: [
        "To convince the reader to share your opinion.",
        "To state the main point the whole explainer will develop with facts and evidence.",
        "To introduce an exciting fictional plot.",
        "To describe only your personal feelings about the topic."
      ],
      answerIndex: 1,
      explanation: "A controlling idea states the central point that the facts, details, and evidence in the piece all support — it gives the explainer focus.",
      hintLadder: [
        "Is its job to argue, entertain, or focus the whole piece?",
        "Think about the one main point every detail should support.",
        "It states the main point the explainer develops."
      ],
      misconceptionsTargeted: ["info-writing-is-opinion"]
    },
    {
      id: "g7.winter.ela.w4.d5.q2",
      type: "multiple_choice",
      stem: "Which sentence best belongs in an EVIDENCE-BASED explainer about the Moon?",
      choices: [
        "The Moon is definitely the prettiest thing in the sky.",
        "I think everyone should stare at the Moon more.",
        "The Moon makes me feel calm at night.",
        "The Moon, Earth's only natural satellite, completes one orbit about every 27.3 days, which keeps the same face turned toward us."
      ],
      answerIndex: 3,
      explanation: "It states verifiable facts with precise vocabulary (natural satellite, orbit) and links them cohesively. The others are opinions or feelings that don't belong in a fact-based explainer.",
      hintLadder: [
        "Which sentence gives checkable facts, not feelings?",
        "Avoid 'I think,' 'prettiest,' and personal reactions.",
        "The orbit-and-satellite sentence is factual and precise."
      ]
    },
    {
      id: "g7.winter.ela.w4.d5.q3",
      type: "multiple_choice",
      stem: "Which choice is a COHESION device that clarifies the RELATIONSHIP between two ideas in an explainer?",
      choices: [
        "Suddenly the dragon roared",
        "The End",
        "As a result",
        "Once upon a time"
      ],
      answerIndex: 2,
      explanation: "'As a result' signals a cause-and-effect relationship, linking ideas cohesively — exactly the work transitions do in informational writing. The others belong to stories.",
      hintLadder: [
        "A cohesion device shows HOW two ideas relate (cause, contrast, addition).",
        "Which phrase signals that one thing causes another?",
        "'As a result' shows cause and effect."
      ]
    },
    {
      id: "g7.winter.ela.w4.d5.q4",
      type: "short_answer",
      stem: "Write a strong CONTROLLING-IDEA sentence to open an explainer about a planet or moon of your choice. It should name the subject AND preview the main point your details will develop.",
      rubric: {
        level3: "Names a specific planet or moon AND states a focused controlling idea (a main point the piece could develop) in one well-formed, factual sentence.",
        level2: "Names the subject but the controlling idea is vague, or the sentence slips into opinion.",
        level1: "No clear subject or controlling idea, or it's merely a personal preference."
      },
      exemplar: "Jupiter, the largest planet in our solar system, is a giant ball of gas whose immense size and violent storms make it a world of extremes.",
      hintLadder: [
        "Name the world you'll explain.",
        "Add a main point the rest of your explainer could develop.",
        "Keep it factual and focused — no 'I think' or 'best.'"
      ]
    },
    {
      id: "g7.winter.ela.w4.d5.q5",
      type: "short_answer",
      stem: "Explain the difference between a FACT and a well-supported CLAIM WITH EVIDENCE in informational writing, and give one space example of each. Then explain why attributing a source strengthens an explainer.",
      rubric: {
        level3: "Distinguishes a plain fact from a claim developed with supporting evidence, gives a correct space example of each, AND explains that attributing a source builds credibility/lets readers verify.",
        level2: "Distinguishes the two and gives examples, but the point about attribution/credibility is thin or missing.",
        level1: "Confuses the ideas or gives no clear examples."
      },
      exemplar: "A plain fact simply states something checkable, like 'Saturn has rings.' A claim with evidence goes further and backs a point, like 'Saturn's rings are mostly ice, because spacecraft data show they strongly reflect sunlight.' Naming the source (spacecraft data) strengthens the explainer because readers can trust and verify it.",
      hintLadder: [
        "A bare fact just states; a supported claim backs a point with evidence.",
        "Give one plain space fact and one claim-plus-evidence.",
        "Explain why naming where a fact came from builds trust."
      ]
    }
  ],
  reflectionPrompt: "Which world did you choose to explain, what is your controlling idea, and what single piece of evidence best supports it? Explain why that evidence is convincing.",
  misconceptionBank: [
    {
      id: "info-writing-is-opinion",
      label: "Fills informational writing with opinions and feelings",
      description: "Treats an explainer like a personal essay, adding 'I think' and 'the best' instead of verifiable facts and evidence.",
      coachMove: "Have the writer underline every sentence and ask, 'Could a reader verify this in a credible source?' Opinions get cut or rewritten as attributed facts."
    },
    {
      id: "facts-without-cohesion",
      label: "Lists facts without showing how they connect",
      description: "Writes correct facts but stacks them as a disconnected list with no controlling idea or transitions.",
      coachMove: "Ask the writer to add a cohesion device (as a result, in contrast, which means) between each pair of facts and check that all facts support one controlling idea."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Fact, Opinion, or Evidence Blast-Off",
      prompt:
        "Three space sentences: (A) 'Neptune is the eighth planet from the Sun.' (B) 'Neptune is the coolest-looking planet.' (C) 'Neptune's blue color comes from methane in its atmosphere, which absorbs red light.' Which is a plain fact, which is an opinion to cut, and which is a claim WITH EVIDENCE?",
      answer:
        "(A) is a plain fact you can check. (B) is an opinion about looks — cut it from an explainer. (C) is a claim with evidence: it makes a point (why Neptune is blue) and backs it with a mechanism (methane absorbing red light) — the strongest kind of sentence for an explainer.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write an Evidence-Based Planet or Moon Explainer",
      challenge:
        "Choose one planet or moon from this week and write a short informational explainer (one strong paragraph). State a controlling idea, develop it with at least three facts (including one claim backed by evidence), use two cohesion devices, name a source for one fact, and end with a conclusion that reinforces the controlling idea.",
      steps: [
        "Pick your world and gather at least three facts, marking one you can back with evidence or a source.",
        "Write a controlling-idea sentence that names the world and previews your main point.",
        "Develop your facts in a logical order, joined by at least two cohesion devices (as a result, in contrast, which means).",
        "Attribute one fact to a source and end with a concluding sentence that reinforces the controlling idea."
      ],
      deliverable: "A one-paragraph, evidence-based explainer with a controlling idea, 3+ facts (one with evidence), two cohesion devices, one source attribution, and a reinforcing conclusion.",
      choiceBoard: [
        "Write the explainer as a cohesive paragraph.",
        "Design it as an infographic or 'fact card' with a headline, controlling idea, and evidence callouts.",
        "Record it as a 45-second 'space documentary' narration script with attributed evidence."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Explainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w4.d5.arena1",
          type: "multiple_choice",
          stem: "Which sentence makes the BEST concluding statement for an explainer whose controlling idea is that Saturn's rings make it uniquely recognizable?",
          choices: [
            "Composed of countless ice and rock particles that brightly reflect sunlight, Saturn's rings give it a silhouette no other planet shares.",
            "And that's why I love Saturn the most.",
            "Saturn is a planet with some stuff around it.",
            "Once, a space wizard flew through the rings and vanished."
          ],
          answerIndex: 0,
          explanation: "It reinforces the controlling idea (unique recognizability) with precise, evidence-based detail — the job of a strong conclusion. The others are opinion, too vague, or fictional.",
          hintLadder: [
            "A conclusion should reinforce the controlling idea with a fact.",
            "The controlling idea is about Saturn being uniquely recognizable.",
            "The ice-and-rock silhouette sentence ties evidence to that idea."
          ]
        },
        {
          id: "g7.winter.ela.w4.d5.arena2",
          type: "short_answer",
          stem: "Revise this weak, opinion-filled sentence into a clear, evidence-based sentence for an explainer, adding a cohesion device: 'Mars is awesome and probably the best planet ever.'",
          rubric: {
            level3: "Removes the opinion language, produces a verifiable factual sentence about Mars, AND uses a cohesion device (which is why, as a result, because) to link ideas.",
            level2: "Reduces the opinion and states a fact but omits a cohesion device or leaves some judgment words.",
            level1: "Keeps it mostly opinion or adds inaccurate 'facts.'"
          },
          exemplar: "Mars is the fourth planet from the Sun and is called the Red Planet because iron oxide in its dust reflects reddish light.",
          hintLadder: [
            "Cut opinion words like 'awesome' and 'best.'",
            "State a checkable fact about Mars (color, position, or a real feature).",
            "Add a cohesion device such as 'because' to link the idea to its cause."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shake Out the Draft",
      prompt:
        "Writers get stiff! Stand and 'type' fast in the air for 5 seconds, then reach up and stretch like you're placing a star at the top of your paragraph. Roll your wrists and shoulders, shake out your hands, and take three slow breaths before revising.",
      scienceTieIn: "Short movement breaks boost blood flow to the brain, which can help you spot weak transitions and sharpen your controlling idea when you return to edit.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What was hardest about turning research into a cohesive, evidence-based explainer — finding solid evidence, organizing around a controlling idea, or connecting ideas with transitions? Write one concrete thing you'll do better next time.",
      badge: { id: "g7-winter-evidence-explainer", name: "Evidence Explainer", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
