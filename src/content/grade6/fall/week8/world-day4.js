// Grade 6 World/Current Affairs — Fall Expedition, Week 8 (Harvest Showcase),
// Day 4. Topic: presenting to an audience — clarity, credibility, and honesty.

export const fallG6WorldW8D4 = {
  id: "g6.fall.world.w8.d4",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Present with clarity and credibility",
  topicTag: "presenting-credibility",
  estimatedMinutes: 17,
  standardsRefs: ["CCSS.SL.6.4", "CCSS.SL.6.3"],
  hook: "A showcase is your moment to inform an audience honestly. Today you sharpen the skills that make a presenter believable: clear claims, real evidence, and honest data.",
  miniLesson: [
    "Credibility comes from backing claims with real evidence and naming your sources — the same honesty you practiced in persuasion week.",
    "Speak to your audience: define terms, give examples they can picture, and avoid jargon dumps.",
    "Be honest about limits: 'I surveyed 30 students' is more trustworthy than a vague 'everyone agrees.'"
  ],
  workedExample: {
    prompt: "A presenter says 'Studies prove our idea is best.' How could they make it more credible?",
    steps: [
      "'Studies prove' is vague — which studies?",
      "Name the source or the data: 'A survey of 50 classmates found 80% preferred it.'",
      "Add the limit honestly: 'though that's just our class.'",
      "Specific + sourced + honest = credible."
    ],
    answer: "Name the actual evidence and its source, and be honest about its limits."
  },
  items: [
    {
      id: "g6.fall.world.w8.d4.q1",
      type: "multiple_choice",
      stem: "Which statement is most CREDIBLE in a presentation?",
      choices: [
        "Everyone knows this is true.",
        "In our survey of 40 students, 30 chose the fall menu.",
        "Trust me, it's the best.",
        "Studies prove it, probably."
      ],
      answerIndex: 1,
      explanation: "Specific numbers and a named group make a claim trustworthy and checkable.",
      hintLadder: [
        "Which has real, checkable evidence?",
        "Look for specific numbers and a source.",
        "The survey of 40 students."
      ]
    },
    {
      id: "g6.fall.world.w8.d4.q2",
      type: "multiple_choice",
      stem: "Why should you define a tricky term during a presentation?",
      choices: [
        "To use up time",
        "So the whole audience can follow, not just experts",
        "To sound smart",
        "You shouldn't — keep it confusing"
      ],
      answerIndex: 1,
      explanation: "Defining terms keeps everyone included and able to follow your point.",
      hintLadder: [
        "Who might not know the word?",
        "What helps them keep up?",
        "Define it for the whole audience."
      ]
    },
    {
      id: "g6.fall.world.w8.d4.q3",
      type: "multiple_choice",
      stem: "Being HONEST about the limits of your data (like a small sample) makes you...",
      choices: [
        "look weak and should be hidden",
        "more trustworthy to the audience",
        "wrong about everything",
        "unable to present"
      ],
      answerIndex: 1,
      explanation: "Acknowledging limits builds trust — audiences respect honesty over overclaiming.",
      hintLadder: [
        "How do you feel about someone who admits limits?",
        "Honesty vs. overclaiming — which earns trust?",
        "Admitting limits builds credibility."
      ],
      misconceptionsTargeted: ["hiding-limits-looks-stronger"]
    },
    {
      id: "g6.fall.world.w8.d4.q4",
      type: "short_answer",
      stem: "Rewrite this overclaim to be credible and honest: 'Our project proves everyone should recycle more.'",
      rubric: {
        level3: "Tones the claim to what the evidence supports AND adds specific, honest backing or a limit.",
        level2: "Softer claim OR added evidence, not both.",
        level1: "Still an unsupported overclaim."
      },
      exemplar: "Our survey of 45 neighbors showed most would recycle more if there were bins on every block — a small but clear sign that better access could help.",
      hintLadder: [
        "Does the data really cover 'everyone'?",
        "Scale the claim to your evidence.",
        "Add the specific finding and a limit."
      ]
    },
    {
      id: "g6.fall.world.w8.d4.q5",
      type: "short_answer",
      stem: "Name one thing you'll do in YOUR showcase to make your presentation credible and clear for the audience.",
      rubric: {
        level3: "Names a specific, relevant credibility/clarity practice (cite evidence, define terms, admit limits, give examples) tied to their showcase.",
        level2: "Names a practice but vaguely.",
        level1: "Off-topic or no real practice."
      },
      exemplar: "When I show my food-web diagram, I'll define 'keystone species' with the sea-otter example so everyone understands why it matters.",
      hintLadder: [
        "Pick one habit: cite, define, give an example, or admit a limit.",
        "Tie it to your actual showcase content.",
        "Be specific about what you'll do."
      ]
    }
  ],
  reflectionPrompt: "You've learned to spot persuasion tricks and to present honestly. How will you make sure YOUR showcase informs rather than just impresses?",
  misconceptionBank: [
    {
      id: "hiding-limits-looks-stronger",
      label: "Thinks hiding weaknesses makes you more convincing",
      description: "Believes admitting a small sample or limit damages credibility.",
      coachMove: "Show that audiences trust presenters who are upfront; overclaiming backfires when questioned."
    }
  ]
};
