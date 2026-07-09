// Grade 5 Science — Fall Expedition, Week 2 (Ecosystems & Food Webs), Day 5.
// Grade 5 counterpart of g6.fall.sci.w2.d5: keystone species, balance, and what
// happens when a web is disrupted. Capstone day for the week's ecosystem
// diagram. Simpler language and more scaffolding.

export const fallG5ScienceW2D5 = {
  id: "g5.fall.sci.w2.d5",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 5,
  subject: "Science",
  topic: "Keystone species and ecosystem balance",
  topicTag: "keystone-balance",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS2-1", "NGSS.5-ESS3-1"],
  hook: "Some animals hold a whole ecosystem together. Take them away, and the whole web can fall apart. Today you meet keystone species and see what happens when the balance breaks.",
  miniLesson: [
    "A keystone species matters far more than its numbers — like the top stone of an arch that holds the rest in place. (Keystone species = one that holds the web together.)",
    "Example: sea otters eat sea urchins. Without otters, urchins take over and eat all the kelp that many other animals need.",
    "The balance can break when a species is lost, or when an invasive species is added that has no predators to stop it. (Invasive species = a new species that spreads out of control.)"
  ],
  workedExample: {
    prompt: "Explain why removing sea otters can hurt a kelp forest.",
    steps: [
      "Otters eat sea urchins, which keeps the urchin numbers down.",
      "Remove the otters: nothing controls the urchins, so they multiply.",
      "Urchins eat kelp; too many urchins strip the kelp forest bare.",
      "Many animals lose the kelp they need — the web falls apart from one missing link."
    ],
    answer: "No otters → too many urchins → kelp eaten away → many animals lose their home."
  },
  items: [
    {
      id: "g5.fall.sci.w2.d5.q1",
      type: "multiple_choice",
      stem: "A keystone species is one that...",
      choices: [
        "is the biggest animal in the ecosystem",
        "affects its ecosystem far more than its small numbers would suggest",
        "lives the longest",
        "only eats plants"
      ],
      answerIndex: 1,
      explanation: "Keystone species shape their whole ecosystem even though there are often only a few of them.",
      hintLadder: [
        "It's not about size or how many.",
        "Think of the top stone of an arch holding everything up.",
        "Big effect, even with small numbers."
      ]
    },
    {
      id: "g5.fall.sci.w2.d5.q2",
      type: "multiple_choice",
      stem: "Why can an INVASIVE species cause so much damage in a new place?",
      choices: [
        "It is always poisonous",
        "It refuses to eat",
        "It often has no predators there, so its numbers can explode",
        "It makes the sun brighter"
      ],
      answerIndex: 2,
      explanation: "With no predators to stop it, an invasive species can multiply out of control and crowd out the animals that already live there.",
      hintLadder: [
        "What usually keeps a group's numbers in check?",
        "What is missing when a species is somewhere brand new?",
        "No predators → numbers grow out of control."
      ],
      misconceptionsTargeted: ["invasive-means-aggressive"]
    },
    {
      id: "g5.fall.sci.w2.d5.q3",
      type: "multiple_choice",
      stem: "Which action would most likely HELP fix a damaged kelp forest?",
      choices: [
        "Bring back the sea otters that control the urchins",
        "Remove all the kelp",
        "Add more urchins",
        "Pour in more salt water"
      ],
      answerIndex: 0,
      explanation: "Bringing back the keystone predator (otters) lowers the urchin numbers so the kelp can grow again.",
      hintLadder: [
        "What controlled the urchins before?",
        "Bring back the missing keystone.",
        "Bring back the otters."
      ]
    },
    {
      id: "g5.fall.sci.w2.d5.q4",
      type: "short_answer",
      stem: "Pick any ecosystem and describe one change (an animal removed or added) and predict its effect on the web.",
      rubric: {
        level3: "Names a real ecosystem + a specific change AND traces a logical chain of effects through the web.",
        level2: "Names a change but the effect is vague or stops at one step.",
        level1: "No clear change or no reasoning about effects."
      },
      exemplar: "In a pond, if we remove the frogs, the insects they ate (like mosquitoes) would grow in number, and the herons that ate the frogs would have less food and might leave.",
      hintLadder: [
        "Choose an ecosystem you can picture.",
        "Remove or add one animal.",
        "Trace at least two effects through the web."
      ]
    },
    {
      id: "g5.fall.sci.w2.d5.q5",
      type: "short_answer",
      stem: "Capstone check: in your own ecosystem diagram this week, which animal would be the most harmful to lose, and why?",
      rubric: {
        level3: "Names an animal with many connections (a predator or keystone) AND explains how many parts of the web depend on it.",
        level2: "Names an animal but the reasoning is thin.",
        level1: "Names an animal with no reasoning, or misreads the web."
      },
      exemplar: "Losing the hawk in my diagram would matter most, because it keeps the mice and snakes in check. Without it, those animals would grow in number and eat too many plants and insects below them.",
      hintLadder: [
        "Look at your diagram — which animal has the most arrows connected to it?",
        "Predators often hold a web together.",
        "Explain who depends on it."
      ]
    }
  ],
  reflectionPrompt: "Ecosystems stay healthy through balance. Where else in life (a team, a classroom, a family) does removing one 'keystone' role cause big ripples?",
  misconceptionBank: [
    {
      id: "invasive-means-aggressive",
      label: "Thinks 'invasive' means the species is mean or poisonous",
      description: "Assumes the harm comes from being aggressive instead of from growing out of control.",
      coachMove: "Clarify: the damage usually comes from having no predators + fast growth, not from the species being 'mean.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Keystone Riddle",
      prompt:
        "I am rarely the biggest or the most common creature in my home. Yet take me away, and the whole web of life around me can come tumbling down. What kind of species am I?",
      answer:
        "A keystone species! Like the top stone of a stone arch, I hold the whole thing together even though I'm just one piece — think of the sea otter guarding the kelp forest.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Keystone Collapse Comic",
      challenge:
        "Capstone the week: take YOUR ecosystem diagram and tell the story of what happens when its keystone species is removed. Show the chain of effects, step by step, as the web changes.",
      materials: ["Your week's ecosystem diagram, paper & markers OR a device"],
      steps: [
        "Choose the keystone species from your diagram (the one with the most connections).",
        "Panel 1: show the healthy, balanced ecosystem.",
        "Panel 2–3: remove the keystone and show what grows out of control and what shrinks.",
        "Final panel: show the new (often damaged) state of the web."
      ],
      deliverable: "A 3–4 panel comic or storyboard showing a keystone being removed and its ripple effects.",
      choiceBoard: [
        "Draw the collapse as a comic strip.",
        "Write a news report: 'Ecosystem in Trouble After Keystone Vanishes.'",
        "Make a before/after diagram pair with arrows showing what changed."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Keystone Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.sci.w2.d5.arena1",
          type: "multiple_choice",
          stem: "Wolves are removed from a forest. The deer (which wolves hunted) then grow in number. What is the MOST likely next effect?",
          choices: [
            "Nothing changes at all",
            "The deer suddenly disappear",
            "The sun gets brighter",
            "The deer eat so many young trees and plants that the forest thins out"
          ],
          answerIndex: 3,
          explanation: "With no wolves keeping them in check, the deer eat too many plants, so the plants (and animals that need them) decline — a classic keystone-removal ripple.",
          hintLadder: [
            "What kept the deer numbers down before?",
            "More deer means more eating of the plants.",
            "Follow the effect down to the plants."
          ]
        },
        {
          id: "g5.fall.sci.w2.d5.arena2",
          type: "short_answer",
          stem: "An invasive beetle with no local predators arrives in a maple forest in autumn. Explain why it can spread so fast AND name one ripple effect on the food web.",
          rubric: {
            level3: "Explains that no predators means the numbers grow out of control AND names a logical ripple effect (e.g., maples decline, so animals that need maples lose food or shelter).",
            level2: "Explains the fast spread OR gives a ripple effect, but not both clearly.",
            level1: "No clear reasoning about predators or effects."
          },
          exemplar: "With no predators in the new forest, nothing eats the beetles, so their numbers grow fast. They hurt the maple trees, which means squirrels and birds that need the maples lose food and shelter, shaking the whole web.",
          hintLadder: [
            "What normally keeps a group's numbers in check?",
            "What is missing for a brand-new invasive species?",
            "Now follow the damage to one other part of the web."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Balance Pose",
      prompt:
        "Stand on one foot like a keystone holding everything steady. Breathe slowly and hold for 15 seconds, then switch feet. Notice how much focus 'balance' takes — for you and for an ecosystem.",
      scienceTieIn: "Holding a balance pose uses tiny constant fixes from your brain and muscles — just like a healthy ecosystem keeps fixing itself to stay in balance.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a 'keystone' in your own life — a person, habit, or routine that holds a lot together. What would ripple if it disappeared?",
      badge: { id: "g5-fall-keystone-keeper", name: "Keystone Keeper", emoji: "🏛️" },
      estimatedMinutes: 7
    }
  }
};
