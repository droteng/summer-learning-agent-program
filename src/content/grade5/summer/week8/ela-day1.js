// Grade 5 Summer ELA/Writing — Week 8 (Capstone Week), Day 1.
// Grade-5 counterpart of g6.ela.w8.d1 (project scope and criteria), pitched down
// one level: simpler "just right" project sizing, vocab support, concrete
// checklist-style criteria, celebratory capstone tone.

export const summerG5ElaW8D1 = {
  id: "g5.summer.ela.w8.d1",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Project scope and criteria",
  topicTag: "capstone-scope",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.4", "CCSS.ELA-LITERACY.W.5.5"],
  hook: "This is YOUR week! Today you pick a real project you can finish, size it so it fits five days, and write three things it must do.",
  keyTerms: [
    { term: "Project", definition: "The one thing you will make and show your family on Friday." },
    { term: "Scope", definition: "How big your project is — what is IN and what is OUT." },
    { term: "Criteria", definition: "The three checks your project must pass to be 'done.'" }
  ],
  miniLesson: [
    "Pick a project you already enjoyed this summer: a short story, an explainer, a small code game, or a science poster.",
    "Scope means what is IN and what is OUT. Too big means you don't finish. Too small means you don't grow. Aim for 'a little tricky but I can finish it by Friday.'",
    "Criteria are the three checks your project must pass. Three is plenty. They make 'done' something you can see, not just a feeling."
  ],
  workedExample: {
    prompt:
      "Sasha says 'I want to do a science project about the ocean.' How can Sasha make it just the right size?",
    steps: [
      "Pick a smaller topic: 'how trash on the beach hurts crabs.'",
      "Pick a format: a one-page poster with one drawing.",
      "Write three checks: 1) names 2 facts, 2) shows one drawing, 3) ready to show family Friday.",
      "Now Sasha can start — the topic is small, the format is set, and 'done' is easy to check."
    ],
    answer: "A small topic + a format + three checks."
  },
  items: [
    {
      id: "g5.summer.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "Which project is the BEST size for a five-day week?",
      choices: [
        "Make a one-page poster comparing 3 sports and their rules.",
        "Write the whole history of all sports.",
        "Make every kid in school love your sport.",
        "Become a pro athlete."
      ],
      answerIndex: 0,
      explanation: "A one-page poster on 3 sports is small enough to finish and clear enough to show. The others are too big or aren't really projects.",
      hintLadder: [
        "Cross out anything you could never finish by Friday.",
        "Look for the one small, clear thing you could make.",
        "A one-page poster on 3 sports is just right."
      ],
      misconceptionsTargeted: ["over-scopes-the-project"]
    },
    {
      id: "g5.summer.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Which check is the WEAKEST (hardest to test)?",
      choices: [
        "Shows at least 2 facts.",
        "Looks really good.",
        "Has one drawing or chart.",
        "My family can tell me the main idea after one look."
      ],
      answerIndex: 1,
      explanation: "'Looks really good' is a feeling — you can't check it yes or no. The others each have a clear test.",
      hintLadder: [
        "Which one can't you check yes or no?",
        "Skip the ones you CAN check.",
        "'Looks really good' is just a feeling."
      ]
    },
    {
      id: "g5.summer.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "Why do projects need criteria instead of just 'do your best'?",
      choices: [
        "Because it's tradition.",
        "Because criteria make projects harder.",
        "Because teachers like long lists.",
        "So you know when you are done and what 'done' means."
      ],
      answerIndex: 3,
      explanation: "Criteria turn a fuzzy 'done' into a clear 'done' you can check. Without them, a project either drags on or stops too soon.",
      hintLadder: [
        "How do you know when to stop?",
        "Without criteria, when is it finished?",
        "Criteria show you what 'done' means."
      ]
    },
    {
      id: "g5.summer.ela.w8.d1.q4",
      type: "short_answer",
      stem:
        "Maya wants 'a code project.' Write a JUST-RIGHT scope for her five-day week — one small, clear thing she can finish. Say what she'll make.",
      rubric: {
        level3: "Names one small, clear, finishable code project (like 'a quiz game with 5 questions and a score') that still stretches her.",
        level2: "Names a project but it's a little too big or too small, or a bit vague.",
        level1: "Just says 'a code project' with no clear size, or names something impossible to finish."
      },
      exemplar:
        "A quiz game that asks 5 questions and then shows the player's score. It's small enough to finish by Friday but still real coding practice.",
      hintLadder: [
        "Could she finish it in five days?",
        "Make it small AND clear — name the one thing she'll build.",
        "Something like 'a 5-question quiz game that shows a score.'"
      ]
    },
    {
      id: "g5.summer.ela.w8.d1.q5",
      type: "short_answer",
      stem:
        "Pick your capstone project. In 3 short lines write: 1) what you will make, 2) who will see it, 3) three checks it must pass.",
      rubric: {
        level3: "Names a clear thing to make (like 'a one-page poster about...'), a clear audience (like 'my family Friday'), and three checks you can test yes or no.",
        level2: "Has all three lines, but one is a little vague.",
        level1: "Just a topic — no thing to make, no audience, or no checks."
      },
      exemplar:
        "1) A one-page poster about how bees help gardens. 2) Who: my family on Friday. 3) Checks: has 3 bee facts; has one drawing; my little brother can tell me the main idea after one look.",
      hintLadder: [
        "What one thing will you hand over on Friday?",
        "Who will look at it or watch it?",
        "What three things must it pass?"
      ]
    }
  ],
  reflectionPrompt: "This week is your showcase! What is the ONE thing you most want your family to understand about your project?",
  misconceptionBank: [
    {
      id: "over-scopes-the-project",
      label: "Picks a goal too big to finish",
      description: "Chooses something huge like 'write a whole book' for a five-day project, then never gets started.",
      coachMove: "Shrink it! What is one small, finishable slice of the big dream?"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Big Dream or Finished Project?",
      prompt:
        "Would you rather START a giant project you never finish, or FINISH a small project you can show off on Friday? Tell why — and what 'finishable' means to you this week.",
      answer: "A finished small project wins! You can show it, you grew, and 'done' beats 'someday.' Making it smaller turns a big dream into a slice you can really finish.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Pitch Card",
      challenge:
        "Design a one-page 'pitch card' that shows off your capstone like a movie poster: a big title, what you will make, who will see it, and your three checks.",
      steps: [
        "Give your project a fun title and write what you will make in one line.",
        "Name who will see it on Friday.",
        "List your three checks as a little checkbox list.",
        "Add a one-line 'why this matters to me' tag."
      ],
      deliverable: "A pitch card (drawn or typed) with a title, what you'll make, the audience, and 3 checks.",
      choiceBoard: [
        "Make a movie-poster style pitch card.",
        "Record a 20-second 'coming Friday!' trailer for your project.",
        "Draw a scoreboard with your 3 checks as boxes to tick."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Scope Master Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "Which capstone is the BEST size for one five-day camp week?",
          choices: [
            "Write and print a 200-page book.",
            "Talk to every scientist in the country.",
            "Make a one-page poster on one topic with 3 facts and a drawing.",
            "Build a real robot from nothing."
          ],
          answerIndex: 2,
          explanation: "A one-page poster with 3 facts and a drawing is small, finishable in five days, and still a real stretch. The others can't be finished in a week.",
          hintLadder: [
            "Cross out anything you couldn't finish by Friday.",
            "Look for the one that is small AND finishable.",
            "It's the one-page poster with facts and a drawing."
          ]
        },
        {
          id: "g5.summer.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Write the THREE checks a judge could tick off for your capstone. Each must be something you can clearly pass or fail.",
          rubric: {
            level3: "Three checks, each clear and testable (a judge could mark pass or fail), all matching your project.",
            level2: "Three checks, but at least one is a feeling or vague (like 'looks good').",
            level1: "Fewer than three, or none can really be tested."
          },
          exemplar: "1) Names at least 3 facts. 2) Has one drawing that shows the main idea. 3) My family can re-tell the main idea after one look.",
          hintLadder: [
            "A good check can be answered yes or no.",
            "Swap 'looks good' for something you can measure.",
            "Tie all three to YOUR project."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Showcase Power Pose",
      prompt:
        "Stand tall, hands on hips, chin up, and hold a proud 'I've got this!' pose for 30 seconds. Picture your Friday showcase going great.",
      scienceTieIn: "Standing tall and open for half a minute can help lower stress signals and make you feel steadier before a big task.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You just picked your capstone! What is the ONE thing you most want your family to understand by Friday, and why does it matter to you?",
      badge: { id: "g5-summer-capstone-launchpad", name: "Capstone Launchpad", emoji: "🚀" },
      estimatedMinutes: 7
    }
  }
};
