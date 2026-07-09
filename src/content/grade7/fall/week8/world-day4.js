// Grade 7 World/Current Affairs — Fall Expedition, Week 8 (Harvest Showcase),
// Day 4. Topic: present with clarity and credibility (Grade 7: evaluating
// source quality, distinguishing correlation from causation, anticipating
// counter-questions).

export const fallG7WorldW8D4 = {
  id: "g7.fall.world.w8.d4",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Present with clarity and credibility",
  topicTag: "presenting-credibility",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.SL.7.3", "C3.D3.1.6-8"],
  hook: "A capstone showcase is your moment to inform an audience honestly AND to withstand hard questions. Today you sharpen the Grade 7 skills that make a presenter credible: judging source quality, separating correlation from causation, and anticipating the counter-question before it's asked.",
  miniLesson: [
    "Not all evidence is equal: weigh the SOURCE — who made it, how recent, how large the sample, and whether they had a reason to slant it.",
    "Correlation is not causation: two things moving together may share a hidden cause; a credible presenter says 'linked to,' not 'proves,' unless they can show the mechanism.",
    "Anticipate the counter-question: name the strongest objection to your claim and address it yourself — this disarms critics and builds trust."
  ],
  workedExample: {
    prompt: "A slide says 'Towns with more libraries have higher test scores, so libraries cause higher scores.' Make it credible.",
    steps: [
      "Spot the leap: this is correlation, not proven causation.",
      "Name a hidden variable: wealthier towns may fund both libraries AND schools.",
      "Soften and source honestly: 'Library access is LINKED to higher scores in this dataset, though income may drive both.'",
      "Anticipate the counter-question: 'You might ask if it's really income — that's exactly why we can't claim libraries alone cause it.'"
    ],
    answer: "Downgrade 'proves' to 'linked to,' name the hidden variable, and address the obvious objection yourself."
  },
  items: [
    {
      id: "g7.fall.world.w8.d4.q1",
      type: "multiple_choice",
      stem: "Two claims cite evidence. Which SOURCE is more credible for a showcase?",
      choices: [
        "A post from an account selling the product, with no data",
        "'A lot of people online say so'",
        "A recent study of 2,000 randomly chosen students by an independent researcher",
        "One friend's strong opinion"
      ],
      answerIndex: 2,
      explanation: "Credibility rises with a large, random sample, independence (no conflict of interest), and recency — the independent 2,000-student study wins.",
      hintLadder: [
        "Who has a reason to slant the evidence?",
        "Look for a large sample and independence.",
        "The independent study of 2,000 students is strongest."
      ]
    },
    {
      id: "g7.fall.world.w8.d4.q2",
      type: "multiple_choice",
      stem: "'Ice cream sales and pool drownings both rise in the same months, so ice cream causes drownings.' What's the flaw?",
      choices: [
        "The numbers are made up",
        "There is no flaw",
        "Ice cream is unhealthy",
        "It confuses correlation with causation — a hidden cause (hot weather) drives both"
      ],
      answerIndex: 3,
      explanation: "Both rise because of a third variable, summer heat. Moving together (correlation) is not the same as one causing the other.",
      hintLadder: [
        "Does one really cause the other?",
        "What third thing rises in the same months?",
        "Hot weather drives both — correlation, not causation."
      ],
      misconceptionsTargeted: ["correlation-is-causation"]
    },
    {
      id: "g7.fall.world.w8.d4.q3",
      type: "multiple_choice",
      stem: "Why does anticipating the strongest COUNTER-QUESTION make a presenter more credible?",
      choices: [
        "It fills extra time",
        "Addressing the best objection yourself shows honesty and thorough thinking, which builds trust",
        "It hides the weakness so no one notices",
        "It lets you avoid evidence"
      ],
      answerIndex: 1,
      explanation: "Naming and answering the strongest objection signals you've thought it through and aren't hiding anything — that earns the audience's trust.",
      hintLadder: [
        "How do you feel about someone who faces objections head-on?",
        "Does dodging or addressing the objection build trust?",
        "Addressing the strongest counter-question builds credibility."
      ]
    },
    {
      id: "g7.fall.world.w8.d4.q4",
      type: "short_answer",
      stem: "Rewrite this overclaim to be credible: 'Our data proves more screen time causes worse grades.' Fix the causation leap AND name the counter-question you'd address.",
      rubric: {
        level3: "Downgrades 'causes/proves' to a linked/correlational claim, names a plausible hidden variable OR limit, AND states a counter-question the presenter would answer.",
        level2: "Softens the claim OR addresses a counter-question, but not both.",
        level1: "Still an unsupported causal overclaim."
      },
      exemplar: "In our survey, students with more evening screen time tended to report lower grades — the two are linked, but we can't say screen time CAUSES it, since students who are up late may also sleep less. You might ask whether sleep is the real driver, and honestly, it might be.",
      hintLadder: [
        "Change 'causes/proves' to 'is linked to.'",
        "Name a hidden variable (like sleep).",
        "State the objection you'd answer out loud."
      ]
    },
    {
      id: "g7.fall.world.w8.d4.q5",
      type: "short_answer",
      stem: "Name one specific thing you'll do in YOUR showcase to be credible under questioning — evaluate a source, avoid a causation leap, OR pre-answer an objection — and tie it to your actual content.",
      rubric: {
        level3: "Names a specific, relevant credibility practice (source quality, correlation-vs-causation, or pre-answered counter-question) clearly tied to their showcase content.",
        level2: "Names a practice but vaguely or loosely tied to their content.",
        level1: "Off-topic or no real practice."
      },
      exemplar: "When I present my survey stat, I'll say up front, 'This is only our grade, so it may not hold for the whole school' — pre-answering the obvious 'is your sample big enough?' question before anyone asks it.",
      hintLadder: [
        "Pick one: judge a source, avoid a causation leap, or pre-answer an objection.",
        "Tie it to a real piece of your showcase.",
        "Say exactly what you'll do or say."
      ]
    }
  ],
  reflectionPrompt: "You've learned to judge sources and separate correlation from causation. When you scroll the news or social media, what's one claim you now pause on because it confuses 'linked to' with 'causes'?",
  misconceptionBank: [
    {
      id: "correlation-is-causation",
      label: "Treats correlation as proof of causation",
      description: "Assumes that because two things move together, one must cause the other.",
      coachMove: "Ask 'could a third thing cause both?' — the ice-cream-and-drownings example makes the hidden variable obvious."
    },
    {
      id: "all-sources-equal",
      label: "Treats every source as equally trustworthy",
      description: "Cites a biased or tiny source with the same confidence as a large, independent one.",
      coachMove: "Have them rate sources on sample size, independence, and recency before quoting any of them."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Claim Survives a Hard Question?",
      prompt:
        "Would you rather present 'Our data PROVES libraries cause higher test scores' or 'Library access is LINKED to higher scores, though wealthier towns may fund both'? Imagine a skeptic in the audience — which claim survives the follow-up question, and why?",
      answer:
        "The second. It says 'linked to,' not 'proves,' and it names the hidden variable (wealth) before a skeptic can. The first collapses the moment someone asks 'couldn't income cause both?' — anticipating that question is what makes you credible.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Skeptic-Proof Slide",
      challenge:
        "Write three overclaiming 'showcase lines' (like 'Our data proves X causes Y!'), then give each a skeptic-proof makeover: rate the source, fix any causation leap, and add the counter-question you'd answer.",
      steps: [
        "Write 3 confident overclaims a presenter might make.",
        "For each, judge the source (sample size, independence, recency).",
        "Fix any correlation-as-causation leap — change 'causes' to 'linked to' and name a hidden variable.",
        "Add one line pre-answering the strongest objection to each claim."
      ],
      deliverable: "A before/after sheet: 3 overclaims rewritten as sourced, causation-honest, skeptic-proof lines.",
      choiceBoard: [
        "Make a before/after 'skeptic-proof' makeover sheet.",
        "Make a 'source trust meter' ranking 4 sources from weak to strong with reasons.",
        "Write a 60-second mini-speech that states a claim, its limit, and pre-answers one objection."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Credibility Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.world.w8.d4.arena1",
          type: "multiple_choice",
          stem: "A presenter wants to be credible AND causation-honest. Which line is best?",
          choices: [
            "In our study of 300 students, those taking music lessons scored higher — though families who afford lessons may also afford tutoring, so it's a link, not proof of cause.",
            "Our data proves music lessons make kids smarter.",
            "Everyone knows music makes you smarter.",
            "Studies prove it, I'm pretty sure."
          ],
          answerIndex: 0,
          explanation: "It gives a real sample, says 'link, not proof,' names a hidden variable (family resources), and pre-answers the objection — the full credibility package.",
          hintLadder: [
            "Which line avoids claiming cause without proof?",
            "Which also names a hidden variable and its source?",
            "The 300-student 'link, not proof' line does it all."
          ]
        },
        {
          id: "g7.fall.world.w8.d4.arena2",
          type: "short_answer",
          stem: "A classmate's slide says 'Our project proves that eating breakfast causes better grades.' Rewrite it to fix the causation leap and pre-answer the strongest objection.",
          rubric: {
            level3: "Downgrades to a correlational claim, names a plausible hidden variable, AND pre-answers a counter-question, tied to a realistic project sample.",
            level2: "Fixes the causation leap OR pre-answers an objection, but not both.",
            level1: "Still an unsupported causal overclaim."
          },
          exemplar: "In our class survey, students who ate breakfast tended to report better grades — the two are linked, but we can't prove breakfast causes it, since families with steady morning routines may support studying too. You might ask if it's really the routine, not the food — and that's a fair question.",
          hintLadder: [
            "Change 'causes/proves' to 'linked to.'",
            "Name a hidden variable (like home routine).",
            "Add the objection you'd answer out loud."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Presenter's Power Pose",
      prompt:
        "Stand tall, roll your shoulders back, and hold a confident power pose for 15 seconds while breathing slowly. Picture a tough question coming — and picture yourself answering it calmly. Then shake out and smile.",
      scienceTieIn: "Standing tall and breathing slowly can lower your body's stress signals, helping you stay calm and think clearly when a hard question comes.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's the strongest COUNTER-QUESTION someone could ask about your showcase — and how will you pre-answer it so the audience trusts you more?",
      badge: { id: "g7-fall-skeptic-proof-presenter", name: "Skeptic-Proof Presenter", emoji: "🎤" },
      estimatedMinutes: 7
    }
  }
};
