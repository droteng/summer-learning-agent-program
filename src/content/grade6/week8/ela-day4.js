// Grade 6 ELA — Week 8, Day 4.
// Topic: revision + feedback.

export const grade6ElaWeek8Day4 = {
  id: "g6.ela.w8.d4",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Revision and feedback",
  topicTag: "capstone-revision",
  estimatedMinutes: 20,
  standardsRefs: ["CCSS.6.W.5"],
  hook: "Today you make it better — by cutting what's weak and adding what's missing. Get one piece of real feedback before you wrap.",
  miniLesson: [
    "Revise = re-see. Read your Day-3 draft from the audience's view. Where do they get lost? Where do they get bored?",
    "Fill placeholders with the strongest specific example you can. Specific beats general almost every time.",
    "Get one piece of feedback. Ask a parent or sibling: 'What's the main thing I'm trying to say? What's confusing?' Listen — don't defend."
  ],
  workedExample: {
    prompt:
      "Maya's draft has '[example needed]' in the baking soda section. How does she fix it?",
    steps: [
      "Look at her research notes: doubling baking soda from 1 tsp to 2 tsp doesn't always work — it can make a cake collapse.",
      "Replace [example needed] with: 'When you double a cake recipe, you don't double the baking soda — too much makes it rise then collapse.'",
      "Add one specific source: 'King Arthur's baking guide explains this.'",
      "Reread the section. Does the audience now understand why doubling fails?"
    ],
    answer: "Placeholder filled with a specific example + a source."
  },
  items: [
    {
      id: "g6.ela.w8.d4.q1",
      type: "multiple_choice",
      stem: "What does revision MEAN, literally?",
      choices: [
        "Reading aloud.",
        "Re-seeing — looking again from a fresh angle.",
        "Making longer.",
        "Adding pictures."
      ],
      answerIndex: 1,
      explanation: "Re-vision = see again. The point is fresh eyes, not just edits.",
      hintLadder: [
        "Break it down: re + vision.",
        "Vision = seeing.",
        "Re-seeing."
      ]
    },
    {
      id: "g6.ela.w8.d4.q2",
      type: "multiple_choice",
      stem: "Which revision is STRONGEST?",
      choices: [
        "Change 'good' to 'great'.",
        "Replace 'a lot of people' with 'over 5,000 people' and add a source.",
        "Add more adjectives.",
        "Make everything bold."
      ],
      answerIndex: 1,
      explanation: "Specific number + source moves the writing from claim to evidence.",
      hintLadder: [
        "Which revision adds evidence?",
        "Numbers + sources beat adjectives.",
        "5,000 + source wins."
      ]
    },
    {
      id: "g6.ela.w8.d4.q3",
      type: "multiple_choice",
      stem:
        "Your sibling says: 'The middle was confusing.' Your best response is:",
      choices: [
        "'You just don't get it.'",
        "'Thanks — can you point to the sentence where it went sideways?'",
        "Ignore them.",
        "Re-explain it the same way, louder."
      ],
      answerIndex: 1,
      explanation: "Asking a follow-up turns vague feedback into specific feedback. Defending shuts the loop.",
      hintLadder: [
        "Don't defend — dig.",
        "Ask a follow-up question.",
        "Point me to where."
      ],
      misconceptionsTargeted: ["defends-the-draft"]
    },
    {
      id: "g6.ela.w8.d4.q4",
      type: "multiple_choice",
      stem: "Which is GOOD to CUT during revision?",
      choices: [
        "The strongest specific example.",
        "A sentence that repeats what the previous sentence said.",
        "The clearest evidence.",
        "The opening hook."
      ],
      answerIndex: 1,
      explanation: "Cut repeats and filler. Keep the things that earn their place.",
      hintLadder: [
        "Cut what adds nothing.",
        "Repeats add nothing.",
        "Cut the repeat."
      ]
    },
    {
      id: "g6.ela.w8.d4.q5",
      type: "short_answer",
      stem:
        "Find ONE specific weakness in your Day-3 draft. Write what it is, why it's weak, and how you'll fix it.",
      rubric: {
        level3: "Identifies a specific sentence/section, names a specific weakness (vague, missing evidence, off-topic), and proposes a concrete fix.",
        level2: "Identifies a weakness but the fix is vague.",
        level1: "Generic 'make it better' or no specific weakness."
      },
      exemplar:
        "Weakness: my intro says 'cooking uses lots of math' — too vague. Why: doesn't give the audience anything to picture. Fix: replace with 'Every time you double a pancake recipe, you're solving a ratio problem.'",
      hintLadder: [
        "Point to a specific sentence.",
        "Name what's weak about it (vague, missing evidence, repeats).",
        "Write the fix."
      ]
    }
  ],
  reflectionPrompt: "Today you got fresh eyes on your work. What's the single change that improved it most?",
  misconceptionBank: [
    {
      id: "defends-the-draft",
      label: "Defends instead of asking follow-ups",
      description: "Argues with the feedback giver instead of digging for the specific problem.",
      coachMove: "Train yourself to say 'tell me more' before 'but I meant...'. Specific feedback is gold."
    }
  ]
};
