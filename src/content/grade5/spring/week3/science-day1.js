// Grade 5 Science — Spring Expedition, Week 3 (Life Cycles), Day 1.
// Topic: animal life cycles and metamorphosis — complete vs. incomplete.
// Grade 5 counterpart of springG6ScienceW3D1: same topic, pitched down with
// shorter passages, vocab support, and more scaffolding.

export const springG5ScienceW3D1 = {
  id: "g5.spring.sci.w3.d1",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Science",
  topic: "Animal life cycles and metamorphosis",
  topicTag: "animal-life-cycles",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.3-LS1-1", "NGSS.4-LS1-1"],
  hook: "A caterpillar and a butterfly are the SAME animal! A tadpole and a frog look totally different too. Today you will map how animals change as they grow up.",
  miniLesson: [
    "A LIFE CYCLE is all the stages an animal goes through as it grows — from a baby to a grown-up that can have its own babies.",
    "In COMPLETE metamorphosis there are 4 stages that look very different: egg → larva → pupa → adult. A butterfly goes egg → caterpillar → chrysalis → butterfly.",
    "In INCOMPLETE metamorphosis there are only 3 stages: egg → nymph → adult. The nymph looks like a tiny adult and just gets bigger — like a grasshopper. (Vocab: nymph = a young bug that already looks like the adult.)"
  ],
  workedExample: {
    prompt: "Put a butterfly's life cycle in order: chrysalis, adult butterfly, egg, caterpillar.",
    steps: [
      "Every life cycle starts with the egg.",
      "The egg hatches into a caterpillar (the larva) that eats and grows.",
      "The caterpillar makes a chrysalis (the pupa) where it changes.",
      "The chrysalis opens into the adult butterfly, which lays eggs to start again. Order: egg → caterpillar → chrysalis → butterfly."
    ],
    answer: "egg → caterpillar → chrysalis → butterfly"
  },
  items: [
    {
      id: "g5.spring.sci.w3.d1.q1",
      type: "multiple_choice",
      stem: "Which list shows the 4 stages of COMPLETE metamorphosis?",
      choices: [
        "Egg → nymph → adult",
        "Seed → sprout → adult",
        "Egg → larva → pupa → adult",
        "Larva → adult → egg"
      ],
      answerIndex: 2,
      explanation: "Complete metamorphosis has 4 stages — egg, larva, pupa, adult — like a butterfly.",
      hintLadder: [
        "Complete metamorphosis has FOUR stages, not three.",
        "One stage is the resting 'pupa' (chrysalis) stage.",
        "Think butterfly: egg → caterpillar → chrysalis → adult."
      ]
    },
    {
      id: "g5.spring.sci.w3.d1.q2",
      type: "multiple_choice",
      stem: "A grasshopper hatches as a nymph that looks like a tiny adult, then just gets bigger. This is an example of...",
      choices: [
        "Complete metamorphosis",
        "Incomplete metamorphosis",
        "Photosynthesis",
        "Pollination"
      ],
      answerIndex: 1,
      explanation: "In incomplete metamorphosis the young (nymph) already looks like the adult and just grows — there is no pupa stage.",
      hintLadder: [
        "Did the grasshopper have a pupa (resting) stage? No.",
        "The nymph already looks like a small adult.",
        "That 3-stage pattern is INcomplete metamorphosis."
      ],
      misconceptionsTargeted: ["metamorphosis-means-growth"]
    },
    {
      id: "g5.spring.sci.w3.d1.q3",
      type: "multiple_choice",
      stem: "A frog starts as a tadpole with a tail and gills, then grows legs and lungs to become an adult frog. What does this show?",
      choices: [
        "The tadpole and frog are different animals",
        "The frog never changes after it hatches",
        "Frogs skip the egg stage",
        "The frog changes its body a lot as it grows — this is metamorphosis"
      ],
      answerIndex: 3,
      explanation: "The tadpole and frog are the same animal at different life-cycle stages. The big body change is called metamorphosis.",
      hintLadder: [
        "A tadpole and a frog are the SAME animal.",
        "What is the big body change between them called?",
        "That transformation is metamorphosis."
      ]
    },
    {
      id: "g5.spring.sci.w3.d1.q4",
      type: "short_answer",
      stem: "Name ONE way complete and incomplete metamorphosis are different. Give one example animal for each. (Sentence frame: 'Complete metamorphosis has ___. An example is ___. Incomplete metamorphosis has ___. An example is ___.')",
      rubric: {
        level3: "Names a clear difference (complete has a pupa stage / 4 stages and very different young; incomplete has 3 stages and a nymph that looks like a small adult) AND gives a correct example of each.",
        level2: "States a difference but one example is missing or wrong.",
        level1: "No clear difference or wrong examples."
      },
      exemplar: "Complete metamorphosis has a pupa stage, and the young looks nothing like the adult. An example is a butterfly. Incomplete metamorphosis has no pupa, and the nymph looks like a small adult. An example is a grasshopper.",
      hintLadder: [
        "Count the stages: one has 4, the other has 3.",
        "One has a pupa (resting) stage; the other does not.",
        "Pick a butterfly for one and a grasshopper for the other."
      ]
    },
    {
      id: "g5.spring.sci.w3.d1.q5",
      type: "short_answer",
      stem: "Why is the ADULT stage important for keeping a life cycle going? (Hint: think about what an adult can do that a baby cannot.)",
      rubric: {
        level3: "Explains that only the adult can reproduce (lay eggs / have young), which starts the cycle over for the next generation.",
        level2: "Mentions having babies/eggs but doesn't connect it to starting the cycle again.",
        level1: "No mention of reproduction or restarting the cycle."
      },
      exemplar: "The adult is the only stage that can have young. Adults lay eggs, and those eggs grow into the next babies. That is how the life cycle keeps going in a loop.",
      hintLadder: [
        "What can an adult do that a larva or nymph cannot?",
        "Think about how a NEW life cycle gets started.",
        "Connect laying eggs to the next generation."
      ]
    }
  ],
  reflectionPrompt: "Think of an animal you saw this spring — a bird, a bug, or a frog. What life-cycle stage was it in, and what stage comes next?",
  misconceptionBank: [
    {
      id: "metamorphosis-means-growth",
      label: "Thinks any growing = metamorphosis",
      description: "Thinks that just getting bigger (like a nymph does) is the same as the big body change of metamorphosis.",
      coachMove: "Compare a growing kitten (just gets bigger) with a caterpillar becoming a butterfly (whole new body). Only the second is a big metamorphosis change."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Same Animal, New Body",
      prompt:
        "I crawl on many legs and munch on leaves all day. I wrap myself up tight, then fly the world away. I am one animal at two different stages — what am I, and what are those two stages called?",
      answer:
        "A butterfly! The stages are the caterpillar (larva) that munches leaves and the adult butterfly that flies — with the chrysalis (pupa) in between.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Metamorphosis Wheel",
      challenge:
        "Make a life-cycle wheel for an animal that changes. Draw every stage in order in a circle with arrows, so the cycle loops back to the start. Then label it 'complete' or 'incomplete' metamorphosis.",
      materials: ["Paper & markers", "OR a drawing app"],
      steps: [
        "Pick an animal: butterfly, frog, ladybug, or grasshopper.",
        "Draw each stage in a circle, in the right order.",
        "Add arrows showing the cycle loops from adult back to egg.",
        "Label it 'complete' or 'incomplete' metamorphosis and tell why."
      ],
      deliverable: "A circular life-cycle diagram with every stage labeled and arrows looping back to the start.",
      choiceBoard: [
        "Draw the metamorphosis wheel with labeled stages.",
        "Make a 4-panel flipbook that 'animates' the change.",
        "Write a short diary from the animal at each stage of its life."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Metamorphosis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.sci.w3.d1.arena1",
          type: "multiple_choice",
          stem: "A dragonfly hatches from an egg as a water nymph, gets bigger, then becomes a winged adult — with NO pupa stage. Which kind of life cycle is this?",
          choices: [
            "Incomplete metamorphosis",
            "Complete metamorphosis",
            "No metamorphosis at all",
            "Plant sprouting"
          ],
          answerIndex: 0,
          explanation: "No pupa stage and a nymph that grows into the adult means this is incomplete metamorphosis.",
          hintLadder: [
            "Was there a pupa (resting) stage? No.",
            "The nymph grows into the adult.",
            "Three stages with no pupa = incomplete metamorphosis."
          ]
        },
        {
          id: "g5.spring.sci.w3.d1.arena2",
          type: "short_answer",
          stem: "A caterpillar and a butterfly look totally different, but they are the SAME animal. Explain how this can be true using the idea of a life cycle.",
          rubric: {
            level3: "Explains they are the same animal at different STAGES of one life cycle, and that inside the chrysalis (pupa) it changes from a caterpillar into the adult butterfly.",
            level2: "Says they are the same animal at different stages but doesn't explain the change.",
            level1: "Treats them as different animals or gives no life-cycle reason."
          },
          exemplar: "They are one animal at two stages of its life cycle. The caterpillar eats and grows, then inside the chrysalis its body changes into the adult butterfly. Different bodies, but the same animal.",
          hintLadder: [
            "Are they two animals, or one animal at two times?",
            "What happens inside the chrysalis?",
            "Name the change and the two stages it connects."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Metamorphosis Stretch",
      prompt:
        "Act out a life cycle: curl up tiny like an egg, wiggle low like a caterpillar (5 wiggles), fold up still like a chrysalis and breathe slowly (5 seconds), then spread your arms and 'fly' like a butterfly. Do it twice.",
      scienceTieIn: "Curling up and stretching out through the stages is like how a real animal's body changes during metamorphosis — and moving sends fresh oxygen to your brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you could watch one animal go through its whole life cycle in fast-forward, which would you pick and why? Which stage would surprise you most?",
      badge: { id: "g5-spring-metamorphosis-mapper", name: "Metamorphosis Mapper", emoji: "🦋" },
      estimatedMinutes: 7
    }
  }
};
