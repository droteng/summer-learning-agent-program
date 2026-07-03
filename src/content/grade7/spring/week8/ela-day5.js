// Grade 7 ELA/Writing — Spring Expedition, Week 8 (Spring Showcase), Day 5.
// Topic: showcase presentation — this Grade 7 version pitches ONE LEVEL UP from
// Grade 6: a THESIS-DRIVEN presentation that argues a claim with evidence,
// anticipates a counter-argument, and adapts delivery to the audience — then
// reflects on a full journey of learning. This is the FINAL day of the FINAL
// week of the FINAL Grade 7 season: a graduation from the whole program.

export const springG7ElaW8D5 = {
  id: "g7.spring.ela.w8.d5",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Showcase presentation — argue, deliver, and reflect on the journey",
  topicTag: "showcase-presentation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.SL.7.4", "CCSS.SL.7.3"],
  hook: "This is the moment your whole journey built toward — your Spring Showcase. Today you write a THESIS-DRIVEN presentation that doesn't just show your capstone but ARGUES it: a claim, evidence, an answered counter-argument, and delivery tuned to your audience. Then you look back on how far you've grown across four seasons.",
  miniLesson: [
    "A THESIS-DRIVEN presentation states a claim early, then organizes the middle as EVIDENCE for it — each point advancing the argument, not just listing facts. The audience should always know what you're proving and how each part helps prove it.",
    "ANTICIPATE A COUNTER-ARGUMENT. A Grade 7 presentation is more convincing when you name the strongest objection ('you might think it was just warm weather') and answer it with evidence. Addressing the doubt before the audience raises it builds credibility.",
    "ADAPT DELIVERY TO THE AUDIENCE. Confident delivery — clear voice, eye contact, purposeful pauses — is the baseline. Beyond it, adjust vocabulary and emphasis for who's listening, and close by landing your thesis and honoring the journey behind it."
  ],
  workedExample: {
    prompt: "Write a thesis-driven OPENING for a showcase arguing that growth is built from small daily changes.",
    steps: [
      "Open with something vivid, not 'Um, my project is about...'.",
      "State the arguable thesis right away so the audience knows your claim.",
      "Signal the evidence and the objection you'll address.",
      "Result: 'One seed. Twenty-one days. A whole plant. I'm here to prove that this wasn't a miracle or a lucky week — my daily measurements show growth is built from small changes compounding, and I'll show you why the warm-weather explanation doesn't hold.'"
    ],
    answer: "One seed. Twenty-one days. A whole plant. I'll prove growth is built from small daily changes compounding — and show why 'it was just warm weather' doesn't explain my data."
  },
  items: [
    {
      id: "g7.spring.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "Which opening is the STRONGEST for a THESIS-DRIVEN showcase?",
      choices: [
        "Um, so, this is my project about a plant, I guess.",
        "One seed became a whole plant in three weeks — and I'll prove that steady daily changes, not luck or weather, made it happen.",
        "I didn't have much time, so sorry if it's rough.",
        "My project has some data and pictures in it."
      ],
      answerIndex: 1,
      explanation: "It's vivid AND states an arguable thesis the audience can follow, previewing that evidence will defend the claim — a real thesis-driven hook, not a label or an apology.",
      hintLadder: [
        "A thesis-driven opening states a CLAIM you'll defend.",
        "Which one tells the audience what you're proving?",
        "The seed-to-plant line names a claim and promises evidence."
      ]
    },
    {
      id: "g7.spring.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "Why does ANTICIPATING a counter-argument make your showcase more convincing?",
      choices: [
        "It fills extra time so the talk is longer.",
        "It shows you considered the strongest objection and can answer it with evidence, which builds your credibility.",
        "It confuses the audience so they stop doubting.",
        "It only matters if someone actually interrupts you."
      ],
      answerIndex: 1,
      explanation: "Naming and answering the best objection before the audience raises it signals you've reasoned thoroughly and strengthens your argument, rather than dodging the weak spot.",
      hintLadder: [
        "Think about what happens when you face a doubt head-on.",
        "Does answering the objection make you look more or less prepared?",
        "It builds credibility by showing you can defend the claim against its strongest objection."
      ],
      misconceptionsTargeted: ["counter-argument-shows-weakness"]
    },
    {
      id: "g7.spring.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "A strong CLOSING for a thesis-driven showcase should...",
      choices: [
        "introduce a brand-new piece of evidence you forgot earlier.",
        "restate your thesis as proven, tie it to the renewal theme, and thank the audience.",
        "apologize for anything that went wrong.",
        "trail off quietly and sit down."
      ],
      answerIndex: 1,
      explanation: "A thesis-driven closing lands the argument — reaffirming the now-supported claim and its meaning — without adding new evidence, apologizing, or fading out.",
      hintLadder: [
        "What should the audience be certain of as you finish?",
        "A closing consolidates the ARGUMENT; it doesn't add new evidence.",
        "Restate the proven thesis, tie it to renewal, and thank the audience."
      ]
    },
    {
      id: "g7.spring.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write the CLOSING for your Spring Showcase: restate your THESIS as supported by your evidence, tie it to renewal, AND thank your audience.",
      rubric: {
        level3: "Restates a clear thesis as supported by evidence, connects it memorably to renewal/growth, AND includes a genuine thank-you — no new evidence introduced.",
        level2: "Has a closing but the thesis restatement, the renewal tie, or the thank-you is weak or missing one element.",
        level1: "Flat, adds new evidence, or misses the thesis restatement entirely."
      },
      exemplar: "My daily measurements prove it: this plant didn't spring up by luck — it grew because small, steady changes compounded, day after day. That's the truth of spring, and maybe of learning too. Thank you for watching mine unfold.",
      hintLadder: [
        "State your thesis again — now as PROVEN by your evidence.",
        "Connect it to the bigger renewal idea in a memorable line.",
        "End with a genuine thank-you, no new evidence."
      ]
    },
    {
      id: "g7.spring.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Journey reflection: name ONE skill you strengthened most across the whole program, ONE challenge you overcame, and ONE specific way you'll keep growing after Dr. Spark Academy.",
      rubric: {
        level3: "Specific program-long growth + a genuine challenge overcome + a concrete plan to keep growing — all three present and specific.",
        level2: "Two of the three clearly stated, or all three but one is vague.",
        level1: "Vague, or fewer than two elements."
      },
      exemplar: "Across the program I got far better at building an argument from evidence instead of just opinions. Speaking in front of people used to terrify me, but by this final showcase I could argue a thesis and answer objections calmly. I'll keep growing by joining my school's debate club next year to keep defending ideas with evidence.",
      hintLadder: [
        "Think across all four seasons — which skill grew the most?",
        "What was genuinely hard that you pushed through?",
        "Name a specific, concrete way you'll keep learning after the program."
      ]
    }
  ],
  reflectionPrompt: "You've reached the very last day of your whole journey. Look back at where you started — what's the biggest way you've grown, and what argument or idea are you proudest to have PROVEN to the world today?",
  misconceptionBank: [
    {
      id: "counter-argument-shows-weakness",
      label: "Thinks mentioning a counter-argument weakens the case",
      description: "Avoids naming objections, believing it exposes doubt, when addressing the strongest objection actually strengthens the argument and credibility.",
      coachMove: "Name the best objection out loud, then answer it with evidence. Facing the doubt head-on makes you MORE convincing, not less."
    },
    {
      id: "new-evidence-in-closing",
      label: "Adds new evidence in the closing",
      description: "Introduces fresh data or points at the end instead of landing the now-supported thesis.",
      coachMove: "New evidence belongs in the middle. The closing restates the thesis as proven, ties it to the theme, and thanks the audience."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Show or Prove?",
      prompt:
        "Would you rather open your showcase with 'Here are some plant facts I collected' OR 'I'm going to PROVE that growth is built from small daily changes — and answer anyone who thinks it was just the weather'? Which one makes the audience lean in, and why?",
      answer:
        "The second. It states an arguable thesis and promises to defend it against an objection, so the audience knows what's at stake and leans in. 'Here are some facts' just lists — a thesis-driven opening ARGUES, and that's what wins the room.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Year-in-Bloom Argument Script",
      challenge:
        "Write and rehearse the full script for your thesis-driven Spring Showcase: a hook that states your claim, a middle that walks through your evidence, an anticipated counter-argument you answer, and a closing that lands your thesis AND honors your whole journey of learning.",
      steps: [
        "Write a one-sentence hook that states your arguable thesis and names your renewal theme.",
        "Outline the middle: 3 pieces of evidence, each shown to support the thesis.",
        "Name one counter-argument and write how you'll answer it with evidence.",
        "Write a closing that restates the proven thesis and thanks the audience; then rehearse aloud once, marking your pauses."
      ],
      deliverable: "A full thesis-driven showcase script (hook + claim, 3 evidence points, one answered counter-argument, closing) rehearsed aloud at least once.",
      choiceBoard: [
        "Write the full script and mark where you state the thesis, answer the objection, and pause.",
        "Record a practice run that includes your counter-argument rebuttal.",
        "Make cue cards: thesis hook, 3 evidence points, the objection + answer, and closing."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Showcase Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "Which presentation follows the strongest THESIS-DRIVEN structure?",
          choices: [
            "A pile of facts with no claim tying them together.",
            "A hook that states a claim, a middle of evidence supporting it, an answered counter-argument, and a closing that lands the proven thesis.",
            "A long apology followed by unconnected facts.",
            "A closing that introduces brand-new evidence for the first time."
          ],
          answerIndex: 1,
          explanation: "Claim + supporting evidence + answered objection + landing closing is the complete argument structure; the others lack a claim, misuse the closing, or never build an argument.",
          hintLadder: [
            "A thesis-driven talk makes a CLAIM and defends it.",
            "Look for the choice with a claim, evidence, AND an answered objection.",
            "Only one option argues a thesis from open to close."
          ]
        },
        {
          id: "g7.spring.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a complete opening-and-counter-argument pair for your Spring Showcase: a hook that states your thesis AND one anticipated objection with how you'll answer it using evidence.",
          rubric: {
            level3: "Gives a vivid hook that states an arguable thesis tied to renewal AND names one real objection with an evidence-based answer — both strong.",
            level2: "Has both a thesis hook and a counter-argument but one is weak, vague, or lacks evidence.",
            level1: "Missing the thesis or the counter-argument, or offers no evidence to answer the objection."
          },
          exemplar: "Hook: 'One seed, 21 days, a whole plant — and I'll prove it grew from steady daily changes, not luck.' Counter-argument: 'You might think warm weather did it — but my chart shows growth stayed steady even on the coldest days, so temperature can't be the whole story.'",
          hintLadder: [
            "Open with a vivid hook that states your arguable claim.",
            "Name the strongest objection someone could raise.",
            "Answer it with a specific piece of your evidence."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Proud Bloom Breath",
      prompt:
        "Stand tall like a plant in full bloom. Breathe in for 4 counts thinking of one thing you're proud to have PROVEN this year, hold for 4, and breathe out for 4 releasing any stage-nerves. Repeat 3 times, then reach up like the sun's reaching back to meet you.",
      scienceTieIn: "Slow, steady breathing calms your body's stress response, so you can step up to argue your thesis feeling grounded, proud, and ready.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You did it — the final day of your whole journey at Dr. Spark Academy. Across all four seasons, what's the single biggest way you've grown as a thinker, and what idea do you most want to keep proving to the world next?",
      badge: { id: "g7-spring-journey-showcase-graduate", name: "Journey Showcase Graduate", emoji: "🎓" },
      estimatedMinutes: 7
    }
  }
};
