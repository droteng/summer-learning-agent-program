// Grade 5 Media Literacy — Enrichment Day 5.
// Topic: staying safe online.

export const grade5MediaDay5 = {
  id: "g5.media.e.d5",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 5,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Staying safe online",
  topicTag: "online-safety",
  estimatedMinutes: 17,
  standardsRefs: ["ISTE.2b", "AASL.I.C"],
  hook: "Being online can be fun, but there are a few important rules that keep you safe. Today you learn how to protect your private info, be kind, and know when to tell a trusted adult.",
  miniLesson: [
    "Keep private info private. Your full name, home address, school, phone number, and passwords are for you and your family — not for strangers online.",
    "Be kind in messages. If it would hurt to hear it in person, it hurts online too. Words you send can be saved and shared.",
    "Tell a trusted adult. If something online is scary, mean, or a stranger asks to meet or asks for private info, tell a parent or another trusted adult right away. It's never your fault for telling."
  ],
  workedExample: {
    prompt:
      "In an online game, a player you don't know says, 'What's your home address? Let's meet up!' What should you do?",
    steps: [
      "Notice the danger: a stranger is asking for private info and to meet.",
      "Do not share your address or agree to meet — that private info is not for strangers.",
      "Stop the chat and don't keep talking to them.",
      "Tell a trusted adult right away so they can help you handle it."
    ],
    answer: "Don't share anything, stop the chat, and tell a trusted adult."
  },
  items: [
    {
      id: "g5.media.e.d5.q1",
      type: "multiple_choice",
      stem: "Which of these is PRIVATE information you should not share with strangers online?",
      choices: [
        "Your favorite color.",
        "Your home address.",
        "The name of a cartoon you like.",
        "Your favorite ice cream flavor."
      ],
      answerIndex: 1,
      explanation: "Your home address could let a stranger find you, so it's private. A favorite color, cartoon, or flavor can't be used to find you.",
      hintLadder: [
        "Which one could help a stranger find where you live?",
        "Think about what tells someone your location.",
        "Your home address is private."
      ]
    },
    {
      id: "g5.media.e.d5.q2",
      type: "multiple_choice",
      stem: "A stranger online keeps asking for your full name, school, and a photo. What is the BEST thing to do?",
      choices: [
        "Don't share it, stop chatting, and tell a trusted adult.",
        "Share it so they stop asking.",
        "Give a little bit so they like you.",
        "Send the photo but not your name."
      ],
      answerIndex: 0,
      explanation: "A stranger asking for private info is a warning sign. The safe move is to share nothing, stop the chat, and tell a trusted adult.",
      hintLadder: [
        "Should you give private info to a stranger?",
        "The safe answer shares nothing.",
        "Don't share, stop, and tell a trusted adult."
      ]
    },
    {
      id: "g5.media.e.d5.q3",
      type: "multiple_choice",
      stem: "Before you send a message to someone, what is a kind question to ask yourself?",
      choices: [
        "Will this get a lot of likes?",
        "Is this the fastest thing to type?",
        "Does it use fancy words?",
        "Would this hurt if someone said it to me?"
      ],
      answerIndex: 3,
      explanation: "Asking 'would this hurt me?' helps you be kind. Messages can be saved and shared, so kindness matters online too.",
      hintLadder: [
        "Think about how the other person would feel.",
        "Would you want to hear these words?",
        "Ask if it would hurt if someone said it to you."
      ],
      misconceptionsTargeted: ["online-words-dont-count"]
    },
    {
      id: "g5.media.e.d5.q4",
      type: "numeric",
      stem: "A stranger online asks you for 5 things: your last name, your home address, your school name, your password, and your favorite color. How many of these 5 should you keep private and NOT share?",
      answer: 4,
      tolerance: 0,
      unit: "things",
      explanation: "Your last name, home address, school name, and password are all private — that's 4. Your favorite color is safe to share, so 4 of the 5 should be kept private.",
      hintLadder: [
        "Which of these could help a stranger find you or get into your account?",
        "Last name, address, school, and password are all private.",
        "That's 4 things to keep private."
      ]
    },
    {
      id: "g5.media.e.d5.q5",
      type: "short_answer",
      stem: "Something online makes you feel scared or uncomfortable. Write two things you would do, and name who you would tell.",
      rubric: {
        level3: "Two clear safe actions (like not replying, not sharing info, stopping the chat, or saving/showing the message) AND names a trusted adult to tell.",
        level2: "One safe action and names a trusted adult, or two actions but no adult named.",
        level1: "Vague, or doesn't mention telling a trusted adult."
      },
      exemplar:
        "First I would stop replying and not share any private info. Then I would show the message to my mom or my teacher so a trusted adult can help me.",
      hintLadder: [
        "Think of a safe action to protect yourself.",
        "Add a second safe action.",
        "Name the trusted adult you would tell."
      ]
    }
  ],
  reflectionPrompt: "Today you learned how to stay safe and kind online. Who is one trusted adult you would go to if something online worried you?",
  misconceptionBank: [
    {
      id: "online-words-dont-count",
      label: "Thinks online words don't hurt like real ones",
      description: "Believes that mean messages online matter less than saying them in person.",
      coachMove: "Explain that words online can hurt just as much, and they can be saved and shared. The same kindness rule applies online and in person."
    }
  ]
};
