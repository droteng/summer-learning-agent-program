// Grade 6 Media Literacy — Enrichment Day 5.
// Topic: online safety habits.

export const grade6MediaDay5 = {
  id: "g6.media.e.d5",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 5,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Online safety habits",
  topicTag: "online-safety",
  estimatedMinutes: 18,
  standardsRefs: ["ISTE.2b", "CASEL.5"],
  hook: "Safe online use isn't one rule, it's a few habits. Today you lock in four that protect your accounts, your privacy, and your time.",
  miniLesson: [
    "Strong passwords are long phrases ('paper-otter-cloud-7' beats 'Pass123!'). Use a different password for each account; let a password manager remember them.",
    "Personal info is for trusted people only. Address, school, phone, full birthday, full last name — don't share publicly online. Strangers asking for these are red flags.",
    "Strangers online are strangers. Don't agree to meet in person. Tell a parent if anyone asks.",
    "Time matters too. Endless scroll is designed to keep you. Setting a 'when I do X for Y minutes I'm done' rule protects your day."
  ],
  workedExample: {
    prompt:
      "Someone you don't know in a game chat says 'Where do you live? What school do you go to? Send me your real name.' What do you do?",
    steps: [
      "Don't answer the questions.",
      "Block or mute the person.",
      "Tell a parent or trusted adult — they can decide whether to report.",
      "Note: real friends don't push for personal info quickly. This pattern is the warning sign."
    ],
    answer: "Don't share + block + tell an adult."
  },
  items: [
    {
      id: "g6.media.e.d5.q1",
      type: "multiple_choice",
      stem: "Which is a STRONGER password?",
      choices: [
        "Pass123!",
        "abc123",
        "paper-otter-cloud-7",
        "your first name"
      ],
      answerIndex: 2,
      explanation: "Four random unrelated words + a number is much harder to crack than short tricky passwords.",
      hintLadder: [
        "What's harder to guess — short tricky or long phrases?",
        "Length beats complexity.",
        "Long phrase with random words."
      ]
    },
    {
      id: "g6.media.e.d5.q2",
      type: "multiple_choice",
      stem:
        "Which is OK to share publicly online?",
      choices: [
        "Your full home address.",
        "Your favorite book.",
        "Your school's name.",
        "Your full birthday."
      ],
      answerIndex: 1,
      explanation: "A favorite book reveals taste, not identity or location. Address, school, birthday can all be used to find or impersonate you.",
      hintLadder: [
        "Three options reveal identity or location.",
        "One is just taste.",
        "Favorite book."
      ],
      misconceptionsTargeted: ["overshare-school-name"]
    },
    {
      id: "g6.media.e.d5.q3",
      type: "multiple_choice",
      stem:
        "Someone you met online (and have never met in person) asks to meet at a park. Best response:",
      choices: [
        "Go to be polite.",
        "Tell them to come to your house instead.",
        "Go but bring a friend.",
        "Tell a parent or trusted adult and don't go without their involvement."
      ],
      answerIndex: 3,
      explanation: "Online strangers stay strangers. Always involve a trusted adult before any in-person plan.",
      hintLadder: [
        "Is online familiarity the same as knowing someone?",
        "No.",
        "Tell a trusted adult."
      ]
    },
    {
      id: "g6.media.e.d5.q4",
      type: "multiple_choice",
      stem:
        "Apps with 'endless scroll' are designed to:",
      choices: [
        "Keep you scrolling so they can show more ads.",
        "Make sure you have all the information.",
        "Hide content from you.",
        "Save battery."
      ],
      answerIndex: 0,
      explanation: "Engagement is the metric for most apps. Endless scroll exists to maximize time-on-app, which maximizes ad views.",
      hintLadder: [
        "How do these apps make money?",
        "Ads.",
        "More scrolling = more ads."
      ]
    },
    {
      id: "g6.media.e.d5.q5",
      type: "short_answer",
      stem:
        "Write three online-safety habits you'll commit to this week. Be specific — name the habit, when you'll do it, and how you'll know you followed through.",
      rubric: {
        level3: "Three specific habits, each with a trigger time/place and a way to check follow-through.",
        level2: "Three habits but vague.",
        level1: "Generic 'be safe online' statements."
      },
      exemplar:
        "1) Change my game password to a 4-word phrase tonight before bed; check by trying to log in. 2) Whenever someone DMs me asking personal stuff, screenshot and show a parent — set a phone reminder. 3) Stop scrolling at 9 PM; set a phone shutdown timer.",
      hintLadder: [
        "Pick three habits from today's lesson.",
        "Add when each happens.",
        "Add how you'll know you did it."
      ]
    }
  ],
  reflectionPrompt: "This week you built media-literacy reflexes. Which habit will be hardest to keep — and what's your plan?",
  misconceptionBank: [
    {
      id: "overshare-school-name",
      label: "Treats school name as harmless to share",
      description: "Doesn't realize school + first name + photo lets a stranger find you in person.",
      coachMove: "School locates you in space and time. Treat it like address — share only with trusted people, not publicly."
    }
  ]
};
