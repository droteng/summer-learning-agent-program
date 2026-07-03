// Grade 7 World/Current Affairs — Summer Program, Week 6 (World Affairs for
// Kids), Day 1. Topic: global issues & multiple perspectives — why people see
// the same issue differently. Project: a kid-friendly explainer about a world issue.

export const summerG7WorldW6D1 = {
  id: "g7.summer.world.w6.d1",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 1,
  subject: "World/Current Affairs",
  topic: "Global issues & multiple perspectives",
  topicTag: "multiple-perspectives",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.6", "CCSS.ELA-LITERACY.RI.7.6"],
  hook: "A drought, a border, a new law — the same world event can look completely different depending on where you stand. This week you build a kid-friendly explainer about a world issue, and it starts today with learning to see an issue from more than one side.",
  miniLesson: [
    "A perspective is the point of view shaped by a person's situation — where they live, their job, their needs, what the issue costs or gives them. It is not the same as a bias; it is a reason someone honestly sees things a certain way.",
    "A stakeholder is anyone affected by an issue. On almost any world issue there are several stakeholders, and each one weighs the same facts differently because the outcome touches their lives differently.",
    "To understand an issue fairly, map the stakeholders first, then ask of each: what do they want, what do they fear, and which facts matter most to them? Only then can you explain the issue without secretly taking one side."
  ],
  workedExample: {
    prompt: "A river runs through two countries. Upstream Country A wants to build a dam for electricity; downstream Country B worries the dam will reduce its water. Map the perspectives.",
    steps: [
      "List the stakeholders: Country A's government and citizens, Country B's farmers, and the environment/wildlife along the river.",
      "Country A's view: the dam brings power and jobs — the key fact for them is energy need.",
      "Country B's view: less water threatens crops and drinking supply — the key fact for them is water flow downstream.",
      "Notice both sides use TRUE facts; they disagree because the outcome affects each one differently. A fair explainer would present both, not just one."
    ],
    answer: "Both countries argue from real needs — energy vs. water — so the disagreement comes from different stakes, not from anyone lying. A fair explainer names both perspectives."
  },
  items: [
    {
      id: "g7.summer.world.w6.d1.q1",
      type: "multiple_choice",
      stem: "What does 'stakeholder' mean when we analyze a world issue?",
      choices: [
        "A person who owns stocks in a company",
        "Anyone who is affected by the issue or its outcome",
        "The reporter who wrote the news story",
        "A person who has no opinion about the issue"
      ],
      answerIndex: 1,
      explanation: "A stakeholder is anyone whose life is touched by the issue, so they have a real interest in how it turns out.",
      hintLadder: [
        "Think about who WINS or LOSES something depending on what happens.",
        "It is broader than just money or investors.",
        "It is anyone affected by the outcome."
      ]
    },
    {
      id: "g7.summer.world.w6.d1.q2",
      type: "multiple_choice",
      stem: "Two people describe the same new city bike-lane law very differently — a shop owner who fears losing parking, and a parent who wants safer streets for kids. What is the BEST explanation for the difference?",
      choices: [
        "One of them must be lying about the facts",
        "The issue affects each of them differently, so different facts matter most to each",
        "Only the parent understands the law",
        "There is no real disagreement at all"
      ],
      answerIndex: 1,
      explanation: "Both can use true facts; their perspectives differ because the outcome touches their lives in different ways.",
      hintLadder: [
        "Does someone have to be lying for two views to differ?",
        "Think about what each person stands to gain or lose.",
        "Different stakes make different facts feel most important."
      ],
      misconceptionsTargeted: ["disagreement-means-lying"]
    },
    {
      id: "g7.summer.world.w6.d1.q3",
      type: "multiple_choice",
      stem: "You are writing a fair explainer about an international fishing dispute. Which step should come FIRST?",
      choices: [
        "Decide which side is right before you research",
        "Map out the stakeholders and what each one wants and fears",
        "Pick the most dramatic quote you can find",
        "Leave out any perspective that disagrees with yours"
      ],
      answerIndex: 1,
      explanation: "Mapping stakeholders first lets you understand every perspective before you explain the issue, keeping it fair.",
      hintLadder: [
        "A FAIR explainer does not start by picking a winner.",
        "What do you need to know before you can explain all sides?",
        "Start by listing who is affected and why."
      ]
    },
    {
      id: "g7.summer.world.w6.d1.q4",
      type: "short_answer",
      stem: "Pick a real or made-up world issue (for example: a plastic-bag ban, a new highway, a fishing limit). Name TWO stakeholders and explain what each one most wants — and why they see the SAME issue differently.",
      rubric: {
        level3: "Names a clear issue and two distinct stakeholders, states what each wants, AND explains that their different situations (stakes) cause them to see the same facts differently.",
        level2: "Names two stakeholders and their wants but the explanation of WHY they differ is thin or missing.",
        level1: "Names fewer than two stakeholders or gives no reasoning about differing perspectives."
      },
      exemplar: "For a plastic-bag ban: a grocery-store owner wants to keep costs low and worries bags cost more, while a beach cleanup volunteer wants less plastic pollution. They see the same ban differently because one is thinking about business costs and the other about ocean wildlife.",
      hintLadder: [
        "Choose an issue where different people are affected in different ways.",
        "Name two people or groups and what each one most cares about.",
        "Explain how their different situations lead to different views."
      ]
    },
    {
      id: "g7.summer.world.w6.d1.q5",
      type: "short_answer",
      stem: "Why is it important for a kid-friendly explainer to include MORE than one perspective, even if the writer has a personal opinion?",
      rubric: {
        level3: "Explains that including multiple perspectives lets readers understand the whole issue and decide for themselves, rather than being handed only the writer's side.",
        level2: "Gives a partial reason (e.g., 'to be fair') without the reader-decides-for-themselves idea.",
        level1: "Restates the question or is unrelated."
      },
      exemplar: "Including more than one perspective gives readers the full picture so they can understand why people disagree and make up their own minds, instead of only getting the writer's opinion dressed up as the whole truth.",
      hintLadder: [
        "What does a reader miss if they only hear one side?",
        "How does showing all sides respect the reader?",
        "Connect it to letting readers decide for themselves."
      ]
    }
  ],
  reflectionPrompt: "Think of an issue you personally have an opinion about. Who is one stakeholder who might honestly see it the OTHER way, and what do they want?",
  misconceptionBank: [
    {
      id: "disagreement-means-lying",
      label: "Assumes disagreement means someone is lying",
      description: "Believes that if two people describe an issue differently, one of them must be spreading false facts.",
      coachMove: "Show that both sides can use TRUE facts and still disagree because the issue affects them differently. Ask: 'What does each person stand to gain or lose?' before deciding anyone is lying."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Whose Side of the Story?",
      prompt:
        "A town wants to turn an empty lot into either (A) a new skate park for teens or (B) a community vegetable garden for families. Pick a side — then name ONE stakeholder who would honestly disagree with you and say what THEY want.",
      answer: "There is no single right answer. A strong response names your pick AND a real stakeholder on the other side (e.g., 'I chose the skate park, but nearby residents might want the garden because it's quieter and grows food'). The point: both sides have honest reasons.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Perspective Map for Your Explainer",
      challenge:
        "Choose the world issue you'll explain this week. Build a 'perspective map': a diagram with the issue in the center and at least THREE stakeholders around it, each with a note on what they want and what they fear.",
      steps: [
        "Write your chosen world issue in the center of the page.",
        "Add at least three stakeholders around it (people, groups, or even the environment).",
        "For each stakeholder, write one thing they WANT and one thing they FEAR.",
        "Draw a line from each stakeholder to the issue and label the key fact they care about most."
      ],
      deliverable: "A perspective map showing your world issue in the center with 3+ stakeholders, each labeled with a want, a fear, and their key fact.",
      choiceBoard: [
        "Draw the perspective map as a labeled diagram or web.",
        "Write it as three short 'in their own words' quotes, one per stakeholder.",
        "Record a 30-second clip playing each stakeholder and stating what they want."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Perspective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.world.w6.d1.arena1",
          type: "multiple_choice",
          stem: "A headline says 'New Dam Will Destroy Downstream Farms.' A fair explainer of the dam dispute should ALSO include which perspective?",
          choices: [
            "Only the views of people who oppose the dam",
            "The upstream community that wants the dam for electricity and jobs",
            "No perspectives at all, just the headline",
            "Only celebrities' opinions about the dam"
          ],
          answerIndex: 1,
          explanation: "The headline gives only the downstream side; a fair explainer must also include the upstream stakeholders who want the dam, so readers see the whole issue.",
          hintLadder: [
            "The headline shows only one stakeholder's side.",
            "Who else is affected by the dam and might want it?",
            "Include the upstream community that benefits from the dam."
          ]
        },
        {
          id: "g7.summer.world.w6.d1.arena2",
          type: "short_answer",
          stem: "Two farmers disagree about a new water-use rule: one grows a thirsty crop upstream, one grows a dry-tolerant crop downstream. Explain how their different SITUATIONS lead them to see the same rule differently — without saying either is lying.",
          rubric: {
            level3: "Explains that the upstream farmer needs lots of water so the rule may hurt them, while the downstream farmer benefits from guaranteed flow — connecting each view to their situation and stating both use true facts.",
            level2: "Describes the two situations but only partly links them to the differing views, or the 'no one is lying' point is missing.",
            level1: "Vague, or claims one farmer must be wrong/lying."
          },
          exemplar: "The upstream farmer needs lots of water for a thirsty crop, so a rule limiting water use feels like a threat. The downstream farmer's dry-tolerant crop still gets enough, and the rule protects the flow reaching them, so they support it. Both are telling the truth — their farms just have different needs.",
          hintLadder: [
            "How much water does each crop need?",
            "How does the rule help or hurt each farmer differently?",
            "Show both can be honest while still disagreeing."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Turn to See All Sides",
      prompt:
        "Stand up and slowly turn a full circle, pausing at 4 points to face a different 'stakeholder' in the room. At each pause, reach out one arm as if greeting them, then breathe in. Finish facing forward with a slow exhale.",
      scienceTieIn: "Physically turning to face different directions is a small brain-and-body reset — the movement boosts blood flow and mirrors the mental habit of turning to consider other points of view.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of an issue you have an opinion about. Write down one stakeholder who might honestly see it the OTHER way and what they most want. Did imagining their side change anything for you?",
      badge: { id: "g7-perspective-mapper", name: "Perspective Mapper", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
