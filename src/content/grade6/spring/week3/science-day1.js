// Grade 6 Science — Spring Expedition, Week 3 (Life Cycles), Day 1.
// Topic: animal life cycles and metamorphosis — complete vs. incomplete.

export const springG6ScienceW3D1 = {
  id: "g6.spring.sci.w3.d1",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Science",
  topic: "Animal life cycles and metamorphosis",
  topicTag: "animal-life-cycles",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-4", "NGSS.MS-LS3-2"],
  hook: "A caterpillar and a butterfly are the SAME animal — but a tadpole and a frog don't look anything alike either. Today you map how animals transform as they grow, and why some change completely while others just get bigger.",
  miniLesson: [
    "A life cycle is the series of stages an animal passes through from birth to adulthood, when it can reproduce and start the cycle again.",
    "COMPLETE metamorphosis has four very different stages: egg → larva → pupa → adult. A butterfly goes egg → caterpillar → chrysalis → butterfly.",
    "INCOMPLETE metamorphosis has three stages: egg → nymph → adult. The nymph looks like a small version of the adult and just molts and grows — like a grasshopper."
  ],
  workedExample: {
    prompt: "Put a butterfly's life cycle in order: chrysalis (pupa), adult butterfly, egg, caterpillar (larva).",
    steps: [
      "Every life cycle starts with the egg.",
      "The egg hatches into a larva — the caterpillar that eats and grows.",
      "The larva forms a pupa — the chrysalis where it transforms.",
      "The pupa becomes the adult butterfly, which lays eggs to start again. Order: egg → caterpillar → chrysalis → butterfly."
    ],
    answer: "egg → caterpillar (larva) → chrysalis (pupa) → butterfly (adult)"
  },
  items: [
    {
      id: "g6.spring.sci.w3.d1.q1",
      type: "multiple_choice",
      stem: "Which set of stages describes COMPLETE metamorphosis?",
      choices: [
        "Egg → nymph → adult",
        "Egg → larva → pupa → adult",
        "Seed → sprout → adult",
        "Larva → adult → egg"
      ],
      answerIndex: 1,
      explanation: "Complete metamorphosis has four distinct stages — egg, larva, pupa, adult — like a butterfly.",
      hintLadder: [
        "Complete metamorphosis has FOUR stages, not three.",
        "One of the stages is the resting 'pupa' stage.",
        "Think butterfly: egg → caterpillar → chrysalis → adult."
      ]
    },
    {
      id: "g6.spring.sci.w3.d1.q2",
      type: "multiple_choice",
      stem: "A grasshopper hatches as a nymph that looks like a tiny adult, then molts and grows bigger. This is an example of...",
      choices: [
        "Complete metamorphosis",
        "Incomplete metamorphosis",
        "Photosynthesis",
        "Pollination"
      ],
      answerIndex: 1,
      explanation: "In incomplete metamorphosis the young (nymph) already resembles the adult and just grows — there is no pupa stage.",
      hintLadder: [
        "Did the grasshopper have a pupa (resting) stage? No.",
        "The nymph already looks like a small adult.",
        "That three-stage pattern is INcomplete metamorphosis."
      ],
      misconceptionsTargeted: ["metamorphosis-means-growth"]
    },
    {
      id: "g6.spring.sci.w3.d1.q3",
      type: "multiple_choice",
      stem: "A frog begins life as a tadpole with a tail and gills, then grows legs and lungs to become an adult frog. What does this show?",
      choices: [
        "The tadpole and frog are different species",
        "The frog undergoes metamorphosis — a big body change between stages",
        "Frogs skip the egg stage",
        "The frog never changes after hatching"
      ],
      answerIndex: 1,
      explanation: "The tadpole and frog are the same animal at different life-cycle stages; the dramatic body change is metamorphosis.",
      hintLadder: [
        "A tadpole and a frog are the SAME animal.",
        "What is the big body change between the two called?",
        "That transformation is metamorphosis."
      ]
    },
    {
      id: "g6.spring.sci.w3.d1.q4",
      type: "short_answer",
      stem: "Explain ONE key difference between complete and incomplete metamorphosis. Give an example animal for each.",
      rubric: {
        level3: "Names a clear difference (complete has a pupa stage / 4 stages and very different young; incomplete has 3 stages and nymph resembles adult) AND gives a correct example of each.",
        level2: "States a difference but one example is missing or mismatched.",
        level1: "No clear difference or incorrect examples."
      },
      exemplar: "Complete metamorphosis has a pupa stage and the young looks nothing like the adult — a butterfly (caterpillar → chrysalis → butterfly). Incomplete metamorphosis has no pupa and the nymph looks like a small adult — a grasshopper.",
      hintLadder: [
        "Count the stages: one has 4, the other has 3.",
        "One has a pupa (resting) stage; the other does not.",
        "Pick a butterfly for one and a grasshopper or cricket for the other."
      ]
    },
    {
      id: "g6.spring.sci.w3.d1.q5",
      type: "short_answer",
      stem: "Why is the adult stage important for continuing an animal's life cycle?",
      rubric: {
        level3: "Explains that only the adult can reproduce (lay eggs / have young), which starts the cycle over for the next generation.",
        level2: "Mentions reproduction but doesn't connect it to restarting the cycle.",
        level1: "No mention of reproduction or restarting the cycle."
      },
      exemplar: "The adult is the stage that can reproduce. Adults lay eggs (or have young), which grow into the next generation — that's what keeps the life cycle going in a loop.",
      hintLadder: [
        "What can an adult do that a larva or nymph cannot?",
        "Think about how a NEW life cycle gets started.",
        "Connect reproduction to the next generation."
      ]
    }
  ],
  reflectionPrompt: "Think of an animal you've seen this spring — a bird, a bug, a frog. What life-cycle stage was it in, and what stage comes next?",
  misconceptionBank: [
    {
      id: "metamorphosis-means-growth",
      label: "Thinks any growing = metamorphosis",
      description: "Assumes that simply getting bigger (as a nymph does) is the same as the dramatic body change of metamorphosis.",
      coachMove: "Compare a growing kitten (just gets bigger) with a caterpillar becoming a butterfly (whole new body). Only the second is metamorphosis; incomplete metamorphosis is in between."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Same Animal, New Body",
      prompt:
        "I crawl on many legs and munch on leaves all day. I wrap myself up tight, then fly the world away. I am one animal at two very different stages — what am I, and what are those two stages called?",
      answer:
        "A butterfly! The stages are the caterpillar (larva) that munches leaves and the adult butterfly that flies — with the chrysalis (pupa) in between.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Metamorphosis Wheel",
      challenge:
        "Build a spinning life-cycle wheel for an animal that transforms. Show every stage in order with arrows, so the cycle loops back to the start. Label whether it's complete or incomplete metamorphosis.",
      materials: ["Paper & markers, a paper fastener OR just drawn arrows", "OR a drawing app"],
      steps: [
        "Choose an animal: butterfly, frog, ladybug, dragonfly, or grasshopper.",
        "Draw each stage in a circle, in the correct order.",
        "Add arrows showing the cycle loops from adult back to egg.",
        "Label it 'complete' or 'incomplete' metamorphosis and explain why."
      ],
      deliverable: "A circular life-cycle diagram with every stage labeled and arrows looping back to the start.",
      choiceBoard: [
        "Draw the spinning metamorphosis wheel with labeled stages.",
        "Make a 4-panel flipbook that 'animates' the transformation.",
        "Write a first-person diary from the animal at each stage of its life."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Metamorphosis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.sci.w3.d1.arena1",
          type: "multiple_choice",
          stem: "A dragonfly hatches from an egg as a water-dwelling nymph, molts several times, then becomes a winged adult — with no pupa stage. Which type of life cycle is this?",
          choices: [
            "Complete metamorphosis",
            "Incomplete metamorphosis",
            "No metamorphosis at all",
            "Plant germination"
          ],
          answerIndex: 1,
          explanation: "No pupa stage and a nymph that grows into the adult form means this is incomplete metamorphosis.",
          hintLadder: [
            "Was there a pupa (resting) stage? No.",
            "The nymph molts and grows into the adult.",
            "Three stages with no pupa = incomplete metamorphosis."
          ]
        },
        {
          id: "g6.spring.sci.w3.d1.arena2",
          type: "short_answer",
          stem: "A caterpillar and a butterfly look completely different, yet they are the same organism. Explain how this is possible using the idea of a life cycle.",
          rubric: {
            level3: "Explains that they are the same animal at different STAGES of one life cycle, and that metamorphosis (a body-reorganizing change in the pupa) transforms the larva into the adult.",
            level2: "Says they are the same animal at different stages but doesn't explain the transformation.",
            level1: "Treats them as different animals or gives no life-cycle reasoning."
          },
          exemplar: "They are one animal at two stages of its life cycle. The caterpillar (larva) eats and grows, then inside the chrysalis (pupa) its body is reorganized through metamorphosis into the adult butterfly. Different bodies, same organism.",
          hintLadder: [
            "Are they two animals, or one animal at two points in time?",
            "What happens inside the chrysalis?",
            "Name the transformation and the stages it connects."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Metamorphosis Stretch",
      prompt:
        "Act out a life cycle: curl up tiny like an egg, wiggle low like a caterpillar (5 wiggles), fold up still like a chrysalis and breathe slowly (5 sec), then spread your arms and 'fly' like a butterfly. Repeat twice.",
      scienceTieIn: "Curling up and stretching out through the stages mirrors how a real animal's body reorganizes during metamorphosis — and the movement gets fresh oxygen to your brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you could watch one animal go through its entire life cycle in fast-forward, which would you pick and why? Which stage would surprise you most?",
      badge: { id: "metamorphosis-master", name: "Metamorphosis Master", emoji: "🦋" },
      estimatedMinutes: 7
    }
  }
};
