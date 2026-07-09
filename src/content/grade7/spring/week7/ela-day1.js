// Grade 7 ELA/Writing — Spring Expedition, Week 7 (Voices for the Earth),
// Day 1. Topic: making a precise claim about an environmental issue and
// acknowledging the opposing view — the foundation of a Grade 7 argument that
// runs claim + counterargument + rebuttal.

export const springG7ElaW7D1 = {
  id: "g7.spring.ela.w7.d1",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Make a precise, defensible claim and acknowledge the opposing view",
  topicTag: "persuasive-environmental-claim",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1", "CCSS.ELA-LITERACY.W.7.1.A"],
  hook: "Spring is the season of renewal, and every real argument for the planet begins with more than an opinion — it begins with a precise, defensible claim. In Grade 7 your claim does extra work: it takes a clear position, and it already signals that you know a reasonable person could disagree. Today you learn to write a claim sharp enough to defend against the other side.",
  miniLesson: [
    "A claim is a debatable position, but a Grade 7 claim is also PRECISE: it names the specific issue, the specific action, and often WHO should act. Compare 'we should reduce plastic' with 'our district should replace cafeteria plastic trays with washable trays by next fall.' The second is arguable AND defensible.",
    "A defensible claim anticipates the opposition. Before you write, ask: what is the single strongest objection someone could raise? If you cannot name one, your claim is probably too obvious to argue — or too vague to defend.",
    "Precision and scope matter. A claim that is too broad ('end pollution everywhere') cannot be supported in a short piece; a claim that is too narrow may not matter to your reader. Aim for a claim that is specific enough to prove and important enough to care about."
  ],
  workedExample: {
    prompt: "Turn this weak topic into a precise, defensible Grade 7 claim, and name the strongest objection to it: 'litter.'",
    steps: [
      "Name the specific issue and the specific action: reducing litter through a required monthly clean-up.",
      "Add WHO should act and a scope you can defend: our middle school, once a month, at the nearby park.",
      "Draft the claim: 'Our middle school should require each grade to run one park clean-up a month to cut litter in our community.'",
      "Name the strongest objection so you can defend it later: 'Some argue clean-ups pull students out of class time' — a real objection you will answer in your rebuttal."
    ],
    answer: "Claim: 'Our middle school should require each grade to run one park clean-up a month to cut litter in our community.' Strongest objection to anticipate: it takes time away from class — which you can answer by scheduling clean-ups during existing advisory periods."
  },
  items: [
    {
      id: "g7.spring.ela.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which sentence is the most PRECISE and DEFENSIBLE Grade 7 claim about an environmental issue?",
      choices: [
        "The environment matters to everyone.",
        "Pollution is a serious global problem.",
        "People should care more about nature.",
        "Our city council should require new downtown buildings to include rooftop gardens to reduce summer heat."
      ],
      answerIndex: 3,
      explanation: "It names a specific actor (city council), a specific action (require rooftop gardens on new buildings), and a specific purpose (reduce heat) — precise, arguable, and defensible. The others are vague statements almost no one would dispute.",
      hintLadder: [
        "A defensible claim names WHO should do WHAT, and WHY.",
        "Which option could a reasonable person actually argue against?",
        "The rooftop-gardens claim is specific enough to prove and dispute."
      ]
    },
    {
      id: "g7.spring.ela.w7.d1.q2",
      type: "multiple_choice",
      stem: "Why does a strong Grade 7 claim need you to anticipate the OPPOSING view before you even finish writing it?",
      choices: [
        "So you can leave the opposing view out of your essay entirely.",
        "Because the opposing view replaces your claim.",
        "Because a claim you cannot argue against is either too obvious or too vague, and knowing the objection helps you make the claim sharp and defensible.",
        "Because teachers require exactly three objections."
      ],
      answerIndex: 2,
      explanation: "If no reasonable objection exists, the claim is not really arguable. Knowing the strongest objection lets you sharpen your claim and plan your defense — a step beyond simply stating a position.",
      hintLadder: [
        "What does it mean if NO one could object to your claim?",
        "How does knowing the objection change how you word the claim?",
        "Anticipating the other side makes the claim more defensible, not weaker."
      ],
      misconceptionsTargeted: ["obvious-equals-strong"]
    },
    {
      id: "g7.spring.ela.w7.d1.q3",
      type: "multiple_choice",
      stem: "A student writes: 'Our town should protect the wetland by the river instead of paving it for parking.' Which revision makes the claim MORE defensible without losing its position?",
      choices: [
        "Our town should permanently zone the riverside wetland as protected habitat rather than approve the proposed parking lot, because the wetland filters stormwater and shelters native species.",
        "Wetlands are nice places to visit.",
        "Somebody should really do something about that wetland.",
        "Parking lots are usually bad."
      ],
      answerIndex: 0,
      explanation: "It keeps the position but adds a defensible scope (permanent zoning), the specific alternative it opposes (the proposed lot), and the reasons that make it arguable — exactly what a Grade 7 claim needs.",
      hintLadder: [
        "A more defensible claim adds specifics you can back up.",
        "Which option keeps the position AND gives reasons to defend it?",
        "The zoning-and-reasons version is the strongest."
      ]
    },
    {
      id: "g7.spring.ela.w7.d1.q4",
      type: "short_answer",
      stem: "Write a precise, defensible claim about an environmental issue you care about. Then name the single strongest objection a reasonable person could raise against it.",
      rubric: {
        level3: "States a precise, arguable claim (specific issue, action, and ideally actor) AND names a realistic, strong opposing objection that the writer would need to answer.",
        level2: "Gives a workable claim but it is somewhat vague, OR names an objection that is weak or not clearly opposed to the claim.",
        level1: "States a fact or vague feeling, or gives no real objection."
      },
      exemplar: "Claim: Our district should ban single-use plastic water bottles at school events and provide refill stations instead. Strongest objection: refill stations cost money to install and maintain, which some families and staff would say the budget cannot spare.",
      hintLadder: [
        "Make your claim name a specific action AND who should take it.",
        "Now imagine the smartest person who disagrees with you.",
        "Write the strongest objection they would raise, not the weakest."
      ]
    },
    {
      id: "g7.spring.ela.w7.d1.q5",
      type: "short_answer",
      stem: "Explain the difference between a claim that is merely ARGUABLE and one that is also DEFENSIBLE. Use one environmental example to show the difference.",
      rubric: {
        level3: "Clearly distinguishes arguable (someone could disagree) from defensible (specific and supportable enough that YOU can actually defend it against objections) AND gives one environmental example showing the upgrade.",
        level2: "Distinguishes the two ideas but the example is thin, or the distinction blurs 'defensible' back into 'arguable.'",
        level1: "Treats the two as the same or gives no clear example."
      },
      exemplar: "An arguable claim just takes a side someone could dispute, like 'we should use less plastic.' A defensible claim is specific enough that I can back it up and answer objections, like 'our school should switch to washable trays because they cut cafeteria waste and pay for themselves within two years.' The second one I can actually defend with reasons.",
      hintLadder: [
        "Arguable means someone COULD disagree — is that enough to win?",
        "Defensible means you can actually hold your ground with support.",
        "Show one environmental claim before and after you make it defensible."
      ]
    }
  ],
  reflectionPrompt: "Look at your claim and its strongest objection side by side. Does your claim still feel worth defending now that you have seen the best argument against it? Save both — you will build a full claim + counterargument + rebuttal piece around them this week.",
  misconceptionBank: [
    {
      id: "obvious-equals-strong",
      label: "Thinks an obvious statement is a strong claim",
      description: "Believes that a statement everyone agrees with (like 'the environment matters') is a strong claim, missing that a real claim must be arguable AND specific enough to defend.",
      coachMove: "Ask: 'Who is the smartest person who would DISAGREE with this, and what would they say?' If no one would disagree, the claim is too obvious to argue."
    },
    {
      id: "vague-scope",
      label: "Writes a claim too broad to defend",
      description: "Makes claims like 'end all pollution' that cannot be supported in a short piece, so the argument collapses under its own scope.",
      coachMove: "Shrink the scope: 'What is one specific place, action, and actor you could actually prove something about?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Defensible or Just Debatable?",
      prompt:
        "Two spring claims: (A) 'People should respect nature more.' (B) 'Our school should replace the gas-powered leaf blowers with electric ones to cut noise and fumes near classrooms.' Which one could you actually DEFEND against a smart opponent, and what makes the other one too weak to argue?",
      answer: "(B) is defensible — it is specific, and you can support it with facts about noise, fumes, and cost, and answer objections. (A) is so broad that almost everyone already agrees, so there is nothing to defend and no objection to answer.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Claim vs. Counter Debate Card",
      challenge:
        "Design a two-sided 'debate card' for an environmental issue you care about. One side states your precise, defensible claim as a bold headline; the flip side names the strongest objection an opponent would raise — the objection you will spend this week learning to defeat.",
      steps: [
        "Choose an environmental issue you genuinely want to argue this spring.",
        "On the front, write ONE precise, defensible claim (specific issue + action + who should act).",
        "On the back, write the single STRONGEST objection a smart opponent would raise.",
        "Design the card so the claim and the objection face off — colors, icons, or a divider line."
      ],
      deliverable: "A two-sided debate card: a bold defensible claim on the front, the strongest opposing objection on the back.",
      choiceBoard: [
        "Make a physical flip card with claim on one side, objection on the other.",
        "Design a digital slide that flips between claim and counterargument.",
        "Draw a comic panel where two characters state the claim and the objection to each other."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Defensible Claim Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w7.d1.arena1",
          type: "multiple_choice",
          stem: "Which claim is BOTH precise and defensible — sharp enough to argue against a strong opponent?",
          choices: [
            "Clean air is good for people.",
            "Our county should require diesel delivery trucks to switch off their engines while parked at schools to cut the exhaust students breathe.",
            "I think trucks are noisy.",
            "The air could be cleaner."
          ],
          answerIndex: 1,
          explanation: "It names a specific actor (the county), a specific action (an anti-idling rule at schools), and a purpose (reduce exhaust students breathe) — precise, arguable, and defensible. The others are facts or vague preferences.",
          hintLadder: [
            "Look for a claim that names WHO, WHAT, and WHY.",
            "Which one could a smart opponent still argue against with cost or practicality?",
            "The anti-idling claim is the precise, defensible one."
          ]
        },
        {
          id: "g7.spring.ela.w7.d1.arena2",
          type: "short_answer",
          stem: "Take this weak topic — 'clean water' — and turn it into a precise, defensible claim. Then write the single strongest objection an opponent could raise against it.",
          rubric: {
            level3: "Produces a precise, defensible claim about clean water (specific action and actor, arguable) AND names a realistic strong objection an opponent would raise.",
            level2: "Gives a claim OR an objection clearly, but the other is vague or missing.",
            level1: "States a fact or feeling, or gives no real objection."
          },
          exemplar: "Claim: Our town should require the old downtown water pipes to be replaced within five years to eliminate lead in drinking water. Strongest objection: replacing all the pipes is expensive and would raise water bills, which some residents would strongly oppose.",
          hintLadder: [
            "Name a specific water action and who should take it.",
            "Now think like the smartest person who would push back.",
            "Write their strongest objection, not their weakest."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Stand Your Ground",
      prompt:
        "Plant your feet shoulder-width apart like you are holding your position in a debate. Say your claim out loud, then take a slow step forward as you name the objection — showing you can face it, not flee it. Step back to center and repeat 4 times, steadier each round.",
      scienceTieIn: "Grounded, deliberate movement paired with speaking can lower stress hormones and steady your voice — the same steadiness that helps you hold your position when someone challenges your argument.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write your defensible claim in one bold sentence, and beneath it the strongest objection you will have to defeat. Which one feels harder to win — and why? You will build a full claim + counterargument + rebuttal piece around this all week.",
      badge: { id: "g7-spring-defensible-claim-champion", name: "Defensible Claim Champion", emoji: "🌍" },
      estimatedMinutes: 7
    }
  }
};
