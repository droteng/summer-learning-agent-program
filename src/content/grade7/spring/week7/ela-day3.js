// Grade 7 ELA/Writing — Spring Expedition, Week 7 (Voices for the Earth),
// Day 3. Topic: revising a persuasive piece to Grade 7 rigor — building a full
// counterargument AND rebuttal, sharpening word choice, and closing with a
// call to action.

export const springG7ElaW7D3 = {
  id: "g7.spring.ela.w7.d3",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Revise a persuasive piece: counterargument + rebuttal, word choice, call to action",
  topicTag: "persuasive-revision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1.A", "CCSS.ELA-LITERACY.W.7.5"],
  hook: "You have a defensible claim and credible evidence. Now you make it undeniable. A Grade 7 argument does not just mention the other side — it fully states the opponent's best objection (the counterargument) and then defeats it with a rebuttal. Today you revise your piece into a voice for the Earth that answers its critics and moves readers to act.",
  miniLesson: [
    "A counterargument is the opponent's BEST objection, stated fairly and completely. A rebuttal is your answer that shows why the objection is wrong, overstated, or outweighed. Together they follow a pattern: 'Some argue X. However, the evidence shows Y, which means X does not hold.'",
    "A weak rebuttal just repeats your claim louder. A strong rebuttal uses evidence or logic to actually dismantle the objection — conceding any true part, then explaining why your claim still wins overall.",
    "Precision powers persuasion. Replace vague words with exact, vivid ones ('bad for animals' becomes 'lethal to migrating songbirds'), and end with a specific call to action that tells readers exactly what to do and why it matters now."
  ],
  workedExample: {
    prompt: "Revise this weak paragraph into a full counterargument + rebuttal with sharp word choice: 'Some people don't like the plastic ban but they're wrong. Plastic is bad.'",
    steps: [
      "State the opponent's BEST objection fairly: 'Some argue that a plastic-bag ban is inconvenient and hurts small stores that rely on cheap bags.'",
      "Concede the true part: 'It is true the switch takes some adjustment.'",
      "Rebut with evidence and logic: 'However, cities that banned bags saw stores adapt within months, while plastic litter in local waterways dropped sharply.'",
      "Sharpen word choice and close: 'The brief inconvenience is a small price for rivers no longer choked with plastic. Bring a reusable bag this week and ask your store to make the switch.'"
    ],
    answer: "Some argue a plastic-bag ban is inconvenient and hurts small stores. It is true the switch takes adjustment — however, banned-bag cities saw stores adapt within months while waterway litter dropped sharply, so the brief inconvenience is worth rivers no longer choked with plastic. Bring a reusable bag this week and ask your store to make the switch."
  },
  items: [
    {
      id: "g7.spring.ela.w7.d3.q1",
      type: "multiple_choice",
      stem: "Which passage correctly pairs a COUNTERARGUMENT with a strong REBUTTAL?",
      choices: [
        "Recycling is good. Everyone should recycle. Recycling helps.",
        "Some argue recycling is too expensive for the city. However, studies show recycling programs create jobs and cut landfill costs, so they often save money over time.",
        "People who dislike recycling are just lazy and wrong.",
        "Recycling is important because it is important to recycle."
      ],
      answerIndex: 1,
      explanation: "It states the opponent's real objection (too expensive) and then answers it with evidence (jobs, lower landfill costs) — a genuine counterargument followed by a rebuttal. The others only repeat the claim or attack the opponent.",
      hintLadder: [
        "A counterargument states the OTHER side; a rebuttal answers it with reasons.",
        "Which passage names the objection AND defeats it with evidence?",
        "The recycling-cost passage does both."
      ]
    },
    {
      id: "g7.spring.ela.w7.d3.q2",
      type: "multiple_choice",
      stem: "What makes a REBUTTAL strong rather than weak?",
      choices: [
        "It repeats the original claim in a louder voice.",
        "It uses evidence or logic to show why the objection is wrong or outweighed, sometimes conceding any true part first.",
        "It insults the people who disagree.",
        "It ignores the objection and changes the subject."
      ],
      answerIndex: 1,
      explanation: "A strong rebuttal actually dismantles the objection with evidence or reasoning — and often concedes a true part — instead of merely restating the claim or attacking the opponent.",
      hintLadder: [
        "Does repeating your claim answer the objection?",
        "What tool actually defeats an objection — evidence and logic.",
        "A strong rebuttal may concede a bit, then outweigh the objection."
      ],
      misconceptionsTargeted: ["rebuttal-is-repeat"]
    },
    {
      id: "g7.spring.ela.w7.d3.q3",
      type: "multiple_choice",
      stem: "Which sentence uses the SHARPEST, most persuasive word choice?",
      choices: [
        "Pollution is kind of bad for the water and stuff.",
        "Oil spills smother coastlines, poison shellfish beds, and choke seabirds in slicks of black tar.",
        "The water gets messed up when there are spills.",
        "Spills are not very good for the ocean."
      ],
      answerIndex: 1,
      explanation: "Precise, vivid verbs ('smother,' 'poison,' 'choke') and concrete nouns make the writing forceful and convincing. The others are vague and flat.",
      hintLadder: [
        "Look for exact, powerful verbs and concrete nouns.",
        "Which sentence paints a vivid, specific picture?",
        "'Smother,' 'poison,' and 'choke' are far sharper than 'kind of bad.'"
      ]
    },
    {
      id: "g7.spring.ela.w7.d3.q4",
      type: "short_answer",
      stem: "Write a full counterargument AND rebuttal for an environmental claim you care about. State the opponent's best objection fairly, then answer it with evidence or logic.",
      rubric: {
        level3: "States a realistic, fairly worded objection (counterargument) AND provides a rebuttal that uses evidence or logic to defeat or outweigh it, ideally conceding any true part.",
        level2: "Includes both an objection and a response, but the objection is a straw man OR the rebuttal just restates the claim without really answering.",
        level1: "Gives only a claim, or an objection with no real rebuttal."
      },
      exemplar: "Some argue that banning gas leaf blowers on campus is unfair to the grounds crew who rely on them. It is true electric blowers cost more up front — however, they are quieter, produce no fumes near classrooms, and cost less to run over time, so the crew keeps its tool while students breathe cleaner air.",
      hintLadder: [
        "State the opponent's STRONGEST objection, fairly worded.",
        "Concede anything true about it, then answer with evidence or logic.",
        "Make sure the rebuttal actually defeats the objection, not just repeats your claim."
      ]
    },
    {
      id: "g7.spring.ela.w7.d3.q5",
      type: "short_answer",
      stem: "Explain the difference between simply MENTIONING a counterargument and truly REBUTTING it. Why does a rebuttal make your piece more convincing?",
      rubric: {
        level3: "Distinguishes mentioning (naming the objection) from rebutting (answering it with evidence/logic) AND explains that a rebuttal removes the opponent's strongest reason to disagree, building credibility and closing the argument.",
        level2: "Distinguishes the two but the explanation of why it convinces is thin or vague.",
        level1: "Treats mentioning and rebutting as the same, or gives no clear reason it convinces."
      },
      exemplar: "Mentioning a counterargument just names what the other side thinks; rebutting it uses evidence or logic to show why that objection does not hold. A rebuttal is more convincing because it takes away the reader's strongest reason to disagree and shows I am not afraid of the other side, which builds trust.",
      hintLadder: [
        "Naming an objection is easy — what does REBUTTING add?",
        "What happens to a reader's doubt once you defeat their objection?",
        "Connect rebuttal to removing the opponent's best reason and building trust."
      ]
    }
  ],
  reflectionPrompt: "Read your piece out loud. Does your rebuttal truly DEFEAT the objection, or does it just repeat your claim? Circle two vague words to sharpen, and rewrite your rebuttal so it leaves the opponent nothing to say back.",
  misconceptionBank: [
    {
      id: "rebuttal-is-repeat",
      label: "Thinks restating the claim counts as a rebuttal",
      description: "Believes that answering an objection just means saying the claim again more firmly, instead of using evidence or logic to defeat the objection.",
      coachMove: "Ask: 'You said your claim again — but WHY is the objection wrong or outweighed? Give the evidence or reasoning that beats it.'"
    },
    {
      id: "straw-man",
      label: "Rebuts a weak, unfair version of the objection",
      description: "States a flimsy version of the opposing view that is easy to knock down, which does not convince a real skeptic.",
      coachMove: "Push for fairness: 'State the objection so well that even your opponent would agree it is fair — THEN defeat it.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Dodge It or Defeat It?",
      prompt:
        "Two ways to handle an opponent's objection in your Earth speech: (A) 'Some people disagree, but they're wrong, and my point still stands.' (B) 'Some say tree-planting is too slow to matter — but new fast-growing native saplings can shade a street within five years, and shade cuts summer cooling costs.' Which one actually DEFEATS the objection, and what makes the other one weak?",
      answer: "(B) defeats the objection — it states the real concern (too slow) and answers it with specific evidence (fast-growing saplings, cooling benefit). (A) just dismisses the other side without answering, so a skeptic is left unconvinced.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Rebuttal Rally Speech",
      challenge:
        "Revise the environmental piece you have been building into a short rally speech that lands a full counterargument + rebuttal. State your opponent's best objection out loud, defeat it with evidence, sharpen your words, and close with a call to action that moves the crowd.",
      steps: [
        "Read your draft aloud and circle 3 vague words to replace with precise, powerful ones.",
        "Write the opponent's STRONGEST objection, fairly — then a rebuttal that uses evidence or logic to defeat it.",
        "Concede any true part of the objection so your rebuttal sounds fair, not defensive.",
        "End with a specific call to action, and practice delivering the counterargument-rebuttal turn with confidence."
      ],
      deliverable: "A revised rally speech featuring sharper word choice, a fully stated counterargument with a strong rebuttal, and a clear call to action.",
      choiceBoard: [
        "Perform your rally speech aloud, pausing for effect on the rebuttal.",
        "Write a persuasive open letter to a leader that states and defeats the top objection.",
        "Record a 60-second video where you voice the opponent, then defeat them."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Rebuttal Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w7.d3.arena1",
          type: "multiple_choice",
          stem: "Which passage is the STRONGEST counterargument + rebuttal — fairly stating the objection and truly defeating it?",
          choices: [
            "Some people are against solar panels, but they just don't get it, so ignore them.",
            "Some argue that rooftop solar panels are too expensive to install. It is true the upfront cost is real — however, rebates and lower electric bills usually pay the panels off within several years, after which the energy is nearly free and clean.",
            "Solar panels are good. Solar panels are the future. Get solar panels.",
            "People who dislike solar panels are the problem, honestly."
          ],
          answerIndex: 1,
          explanation: "It states the real objection (expensive), concedes the true part (upfront cost), then rebuts with evidence (rebates, savings, payback) — a fair counterargument fully defeated. The others dismiss, repeat, or attack.",
          hintLadder: [
            "Which passage states the objection fairly AND answers it with evidence?",
            "Look for a concession followed by a 'however' with real reasons.",
            "The solar-cost passage both concedes and rebuts."
          ]
        },
        {
          id: "g7.spring.ela.w7.d3.arena2",
          type: "short_answer",
          stem: "Revise this weak ending into a strong one with a real rebuttal AND a call to action: 'Some people say clean-ups don't help, but whatever, litter is bad, so pick it up I guess.'",
          rubric: {
            level3: "Rewrites with a fairly stated objection, a rebuttal that uses evidence or logic to defeat it, sharper word choice, AND a specific call to action.",
            level2: "Improves some elements (rebuttal OR word choice OR call to action) but not all three clearly.",
            level1: "Stays vague, dismissive, or just restates the original."
          },
          exemplar: "Some argue that neighborhood clean-ups barely dent the litter problem. It is true one clean-up cannot fix everything — but towns with monthly clean-ups report far cleaner parks and fewer storm drains clogged with trash. Join this Saturday's clean-up, bring one friend, and help our green spaces breathe again.",
          hintLadder: [
            "State the objection ('clean-ups don't help') fairly, then defeat it with evidence.",
            "Swap vague words like 'whatever' and 'I guess' for precise, forceful ones.",
            "End with a specific action readers can take now."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Block & Counter",
      prompt:
        "Imagine an objection flying toward you. Raise both hands to 'block' it as you say the opponent's point, then push forward with a firm sweep as you deliver your rebuttal out loud. Reset to a strong stance and repeat 4 times, projecting your voice more each round.",
      scienceTieIn: "Purposeful, confident movement paired with your voice can lower nervousness and steady your delivery — helpful whenever you have to face and answer a challenge to your ideas in real time.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write the single sentence in your revised piece where you DEFEAT the opponent's best objection. Explain why that rebuttal would leave a skeptic with nothing to argue back.",
      badge: { id: "g7-spring-rebuttal-rallier", name: "Rebuttal Rallier", emoji: "📣" },
      estimatedMinutes: 7
    }
  }
};
