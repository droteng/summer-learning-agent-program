// Grade 5 Summer History / Civics — Week 1 (Explorer Mode), Day 5.
// Grade-5 counterpart of g6.hist.w1.d5 (cause and effect on a timeline),
// pitched down: shorter passages, concrete examples, more scaffolding.

export const summerG5HistoryW1D5 = {
  id: "g5.summer.hist.w1.d5",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "Cause and effect",
  topicTag: "cause-effect",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14.3-5", "C3.D2.His.16.3-5"],
  hook: "One thing leads to another. Today you connect a cause to its effect on a timeline and check which came first.",
  keyTerms: [
    { term: "Cause", definition: "The thing that makes something else happen." },
    { term: "Effect", definition: "What changes because of the cause." },
    { term: "Timeline", definition: "A line that shows events in the order they happened." }
  ],
  miniLesson: [
    "A cause is what made something happen. An effect is what changed because of the cause.",
    "Some causes happen fast (right before), and some build up slowly over time.",
    "Order matters: an effect always comes AFTER its cause on a timeline. The cause comes first."
  ],
  workedExample: {
    prompt: "Use this timeline:\n  - 1773: Colonists dump tea into Boston Harbor to protest taxes.\n  - 1775: The American Revolutionary War begins.\n  - 1776: The colonies declare independence.\nWhat is one cause and one effect of the war beginning in 1775?",
    steps: [
      "Look earlier on the timeline for a cause. The tea protest (1773) comes before 1775.",
      "Pick a cause: colonists were angry about British taxes and protested.",
      "Look later for an effect: the colonies declared independence in 1776.",
      "One cause: anger over taxes and protests. One effect: declaring independence in 1776."
    ],
    answer: "Cause: anger over taxes and the tea protest. Effect: declaring independence in 1776."
  },
  items: [
    {
      id: "g5.summer.hist.w1.d5.q1",
      type: "multiple_choice",
      stem: "Which event came first?",
      choices: [
        "The Declaration of Independence (1776)",
        "The U.S. Civil War (1861)",
        "The U.S. Constitution is signed (1787)",
        "The American Revolution begins (1775)"
      ],
      answerIndex: 3,
      explanation: "1775 is the earliest year listed. Order: 1775, 1776, 1787, 1861.",
      hintLadder: [
        "Compare the years next to each event.",
        "The smallest year comes first.",
        "1775 is the smallest -- that is the Revolution beginning."
      ]
    },
    {
      id: "g5.summer.hist.w1.d5.q2",
      type: "multiple_choice",
      stem: "A village built a new well in 1820. By 1830, more children went to school. What is the most likely cause?",
      choices: [
        "The new well meant children spent less time carrying water, so they had more time for school.",
        "Children liked school more in 1830.",
        "The school was painted a new color.",
        "1830 just happened to be a good year."
      ],
      answerIndex: 0,
      explanation: "The well took time off a daily chore, which freed up time for school. The other choices do not explain the cause.",
      hintLadder: [
        "Which choice connects the well to going to school?",
        "Think about what children did before the well.",
        "Less time carrying water means more time for school."
      ],
      misconceptionsTargeted: ["picks-coincidence-as-cause"]
    },
    {
      id: "g5.summer.hist.w1.d5.q3",
      type: "multiple_choice",
      stem: "Which one is a slow cause that builds up over a long time?",
      choices: [
        "A sudden storm on a Tuesday",
        "Years of little rain slowly drying up a river",
        "A quick rain shower",
        "A bell ringing at the end of class"
      ],
      answerIndex: 1,
      explanation: "Little rain over many years is a slow cause that builds up. The others happen quickly.",
      hintLadder: [
        "A slow cause builds up over time.",
        "Skip the choices that happen in seconds or hours.",
        "Little rain over years is the slow one."
      ]
    },
    {
      id: "g5.summer.hist.w1.d5.q4",
      type: "multiple_choice",
      stem: "Two events happened at the exact same time in two different places. Which is true?",
      choices: [
        "One must have caused the other.",
        "They must both come from the same cause.",
        "Neither one caused the other, because they happened at the same time.",
        "The time does not matter."
      ],
      answerIndex: 2,
      explanation: "An effect must come AFTER its cause. If two things happened at the same time, one could not have caused the other.",
      hintLadder: [
        "On a timeline, where does the effect always go?",
        "If two events share the same moment, neither is first.",
        "Neither caused the other."
      ],
      misconceptionsTargeted: ["confuses-correlation-with-cause"]
    },
    {
      id: "g5.summer.hist.w1.d5.q5",
      type: "short_answer",
      stem: "Pick a small event from your week (a cause). Name one effect that came from it. Use one sentence.",
      rubric: {
        level3: "Names a clear cause, names a clear effect, and the effect comes after and from the cause.",
        level2: "Names a cause and effect but the connection is weak or vague.",
        level1: "Lists two events that are not connected, or repeats the same event twice."
      },
      exemplar: "On Monday I packed my bag the night before, so on Tuesday morning I left earlier and was not in a rush.",
      hintLadder: [
        "Think of something you did first.",
        "What changed because of that?",
        "Use a word like so or because to connect them."
      ]
    }
  ],
  stretch: {
    stem: "Some people say a single event changed everything. Why is that usually too simple?",
    answer: "Big changes almost always have more than one cause -- a fast trigger plus slow build-ups. Saying one event changed everything leaves out the slower causes.",
    explanation: "Historians look for a chain of causes. The famous event usually sits on top of years of smaller causes."
  },
  reflectionPrompt: "Today you connected causes to effects. What is a cause from history you would like to learn more about?",
  misconceptionBank: [
    {
      id: "picks-coincidence-as-cause",
      label: "Picks coincidence as cause",
      description: "Says one thing caused another just because they happened around the same time.",
      coachMove: "Ask: how exactly did the first thing lead to the second? If you cannot tell the story, it might be a coincidence."
    },
    {
      id: "confuses-correlation-with-cause",
      label: "Thinks same time means connected",
      description: "Assumes two events at the same time must be connected when they may not be.",
      coachMove: "Remember: a cause has to come BEFORE its effect on the timeline."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "What Came First?",
      prompt:
        "The streets are wet AND people have umbrellas up. Did the wet streets CAUSE the umbrellas, or did something else cause both? Think it through!",
      answer: "Neither caused the other -- RAIN caused both the wet streets and the umbrellas. One cause can make two things appear together!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Cause-and-Effect Comic",
      challenge:
        "Draw a 4-panel comic that shows a cause-and-effect chain -- one event leads to the next, which leads to the next. It can be about your day, a story, or history.",
      steps: [
        "Pick a starting event (the first cause).",
        "Panel 2: what did it lead to?",
        "Panel 3: what did THAT lead to?",
        "Panel 4: the final effect. Add arrows or so... between panels."
      ],
      deliverable: "A 4-panel cause-and-effect comic with a clear chain of events.",
      choiceBoard: [
        "Draw the 4-panel comic.",
        "Write the chain as a because... so... paragraph.",
        "Make a domino picture with labeled arrows."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cause & Effect Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.hist.w1.d5.arena1",
          type: "multiple_choice",
          stem: "In The river flooded, so the farmers lost their crops, what is the CAUSE?",
          choices: ["The river flooded", "The crops", "The farmers", "The season"],
          answerIndex: 0,
          explanation: "The flood came first and made the crops fail, so it is the cause.",
          hintLadder: [
            "The cause comes first and makes the other thing happen.",
            "What happened before the crops were lost?",
            "The river flooding."
          ]
        },
        {
          id: "g5.summer.hist.w1.d5.arena2",
          type: "short_answer",
          stem: "Write a 3-link cause-and-effect chain about anything (use arrows or led to).",
          rubric: {
            level3: "Three links where each effect leads to the next, clearly connected.",
            level2: "Three links but one connection is weak.",
            level1: "Only one link, or links that do not connect."
          },
          exemplar: "I forgot my water bottle -> I got thirsty at recess -> I could not focus in the next class.",
          hintLadder: [
            "Start with one cause.",
            "What did it lead to?",
            "What did THAT lead to? (three links)"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Domino Drop",
      prompt:
        "Stand up and do a domino wave with your body: wiggle your fingers, then roll your shoulders, then sway, then wiggle your toes -- one flowing into the next. Cause and effect, in motion!",
      scienceTieIn: "Your nerves send signals in a chain from your brain to your muscles -- a real cause-and-effect chain you will learn about in science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of something good that happened to you recently. What chain of causes led to it?",
      badge: { id: "g5-summer-cause-effect-detective", name: "Cause & Effect Detective", emoji: "🕵️" },
      estimatedMinutes: 7
    }
  }
};
