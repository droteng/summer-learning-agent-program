// Grade 5 Science — Winter Expedition, Week 3 (Forces & Motion), Day 1.
// Grade 5 counterpart of g6.winter.sci.w3.d1, pitched down: whole-number/
// everyday examples, visual models, shorter passages, vocab support.
// Topic: forces (push/pull, gravity, friction) and why ice is slippery.

export const winterG5ScienceW3D1 = {
  id: "g5.winter.sci.w3.d1",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Science",
  topic: "Forces: push, pull, gravity, and friction on ice",
  topicTag: "forces-friction",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-PS2-1", "NGSS.3-PS2-1"],
  hook: "Step onto a frozen pond and WHOA — your feet want to slide right out from under you! Today you learn what a FORCE is (just a push or a pull) and why ice turns a simple walk into a slippery adventure.",
  miniLesson: [
    "A FORCE is a push or a pull. Any time something speeds up, slows down, or changes direction, a force made it happen.",
    "GRAVITY is the pull that draws things down toward Earth. It is why a snowball falls when you drop it and why you feel heavy standing up.",
    "FRICTION is a force that slows down sliding when two surfaces rub. Rough stuff (a sidewalk) has HIGH friction, so it grips. Smooth ice has LOW friction, so things slide easily."
  ],
  workedExample: {
    prompt: "A hockey puck slides across smooth ice and slowly stops. What force slowed it down? Would it stop faster on a rough sidewalk?",
    steps: [
      "The puck was moving, then it slowed down — so a force pushed against its motion.",
      "That force is FRICTION between the puck and the ice.",
      "Ice is smooth, so it has LOW friction — the puck slides a long way.",
      "A rough sidewalk has HIGH friction, so the same puck would stop much faster there."
    ],
    answer: "Friction slowed the puck. On a rough sidewalk (more friction) it would stop faster."
  },
  items: [
    {
      id: "g5.winter.sci.w3.d1.q1",
      type: "multiple_choice",
      stem: "What is a FORCE?",
      choices: [
        "A kind of food energy",
        "The weight of the air",
        "How fast something goes",
        "A push or a pull that can change how something moves"
      ],
      answerIndex: 3,
      explanation: "A force is any push or pull. It can make something speed up, slow down, or change direction.",
      hintLadder: [
        "Think about what you do to open a door or slide a box.",
        "It is a push or a ____.",
        "A force is a push or a pull."
      ]
    },
    {
      id: "g5.winter.sci.w3.d1.q2",
      type: "multiple_choice",
      stem: "Why is it so easy to slip and slide on ice but NOT on a rough sidewalk?",
      choices: [
        "Ice is smooth, so there is very LOW friction between your feet and the ice",
        "Ice has more gravity than a sidewalk",
        "There is no gravity on ice",
        "Ice pushes you sideways on purpose"
      ],
      answerIndex: 0,
      explanation: "Smooth ice has low friction, so there is very little grip on your feet — that lets you slide.",
      hintLadder: [
        "Friction is the force that grips two surfaces together.",
        "Is ice smooth or rough compared to a sidewalk?",
        "Smooth = low friction = easy sliding."
      ],
      misconceptionsTargeted: ["ice-has-no-gravity"]
    },
    {
      id: "g5.winter.sci.w3.d1.q3",
      type: "multiple_choice",
      stem: "A snowball rolls off a roof and drops toward the ground. Which force pulls it down?",
      choices: ["Friction", "A push from the wind only", "Gravity", "Magnetism"],
      answerIndex: 2,
      explanation: "Gravity is the force that pulls things down toward Earth, so the snowball falls.",
      hintLadder: [
        "What force always pulls things down toward Earth?",
        "It is why things fall when you drop them.",
        "That force is gravity."
      ]
    },
    {
      id: "g5.winter.sci.w3.d1.q4",
      type: "short_answer",
      stem: "Ice skates have thin, smooth metal blades. Explain how LOW friction helps a skater glide, and why it is also hard to stop quickly on ice.",
      rubric: {
        level3: "Says the smooth blade on smooth ice makes LOW friction so the skater glides easily, AND notes that low friction also makes stopping hard (little grip). Clear reasoning.",
        level2: "Mentions low friction and gliding but does not explain why stopping is hard.",
        level1: "Does not connect friction to gliding or stopping."
      },
      exemplar: "The smooth blade on smooth ice makes very low friction, so a skater glides forward easily. But low friction also means very little grip, so it is hard to stop or turn fast — that is why skating takes practice.",
      hintLadder: [
        "How much friction is there between smooth metal and smooth ice?",
        "Low friction makes gliding easy — but what does it do to stopping?",
        "Connect low friction to BOTH easy sliding AND hard stopping."
      ]
    },
    {
      id: "g5.winter.sci.w3.d1.q5",
      type: "short_answer",
      stem: "Give one everyday example of a PUSH or PULL (a force), and one example of friction being HELPFUL. Explain each in one sentence.",
      rubric: {
        level3: "Gives a correct push/pull example AND a correct example of USEFUL friction (like shoe grip or brakes), each with a clear one-sentence explanation.",
        level2: "Gives both examples but one explanation is vague or a little off.",
        level1: "Gets a force or friction wrong, or gives no explanation."
      },
      exemplar: "Force: I push a stuck sled to get it moving — my push is a force. Useful friction: the rubber on my winter boots grips the sidewalk so I do not slip; that grip is friction helping me.",
      hintLadder: [
        "A force is any push or pull you do.",
        "Friction is helpful when you WANT grip — like shoes or brakes.",
        "Give one example of each and explain in a sentence."
      ]
    }
  ],
  reflectionPrompt: "Next time you walk outside in winter, notice where you have grip and where you might slip. Which surfaces had HIGH friction, and which had LOW?",
  misconceptionBank: [
    {
      id: "ice-has-no-gravity",
      label: "Thinks slipping on ice means gravity is weaker or gone",
      description: "Mixes up low friction with a change in gravity, thinking you slide because gravity is different on ice.",
      coachMove: "Explain that gravity is the same everywhere on Earth — what changed is FRICTION. Ice is smooth, so there is less grip, not less gravity."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Mystery of the Sliding Mug",
      prompt:
        "You slide a mug across a smooth kitchen counter and it glides far. You slide the same mug across a rough wooden table and it stops fast. The mug did not change — so what invisible force made the difference?",
      answer:
        "Friction! The smooth counter has low friction so the mug glides. The rough table has high friction so it grips and stops the mug fast. Ice is like the super-smooth counter — very low friction.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Friction Ramp Test",
      challenge:
        "Prop a book up to make a ramp. Slide the same object down over different surfaces — the bare ramp, a towel, and wax paper or a plastic bag (your 'ice'). Guess first, then measure which lets it slide the farthest.",
      materials: ["A book or board for a ramp", "A small sliding object (eraser or toy car)", "A towel and wax paper or a plastic bag", "A ruler or tape measure"],
      steps: [
        "Prop the ramp at the SAME height for every test.",
        "Guess which surface will let your object slide the FARTHEST and which the shortest.",
        "Slide the object down each surface and measure how far it travels.",
        "Put the surfaces in order from lowest friction (slid farthest) to highest friction."
      ],
      deliverable: "A simple table ranking each surface by how far the object slid, plus one sentence saying which had the lowest friction.",
      choiceBoard: [
        "Run the ramp test and write down a measured results table.",
        "Draw a labeled picture showing gravity pulling the object down the ramp and friction slowing it.",
        "Write a short 'science report' guessing and then explaining your friction ranking."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Friction Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.sci.w3.d1.arena1",
          type: "multiple_choice",
          stem: "A sled slides much farther on packed ice than on bare grass. Why?",
          choices: [
            "Grass has stronger gravity than ice",
            "Ice has LOWER friction than grass, so less force slows the sled down",
            "The sled is heavier on ice",
            "No force acts on the sled at all"
          ],
          answerIndex: 1,
          explanation: "Ice is smooth with low friction, so little force slows the sled — it glides far. Grass is rough with high friction, so it stops the sled sooner.",
          hintLadder: [
            "Which is smoother, ice or grass?",
            "Smoother surfaces have lower friction.",
            "Lower friction = less slowing force = the sled slides farther."
          ]
        },
        {
          id: "g5.winter.sci.w3.d1.arena2",
          type: "short_answer",
          stem: "Winter road crews spread sand or grit on icy roads. Using the words FORCE and FRICTION, explain how this helps cars stop safely.",
          rubric: {
            level3: "Explains that sand ADDS friction (a slowing force) between tires and road, giving more grip so cars can slow and stop. Clearly uses force and friction.",
            level2: "Says it helps cars grip or stop but does not clearly connect it to more friction/force.",
            level1: "No clear link to friction or force."
          },
          exemplar: "Ice has very low friction, so tires slide instead of gripping. Rough sand adds friction — a slowing force between the tires and the road — so the tires grip better and the car can stop safely.",
          hintLadder: [
            "Is smooth ice high or low friction for tires?",
            "Rough sand makes the road grippier — what does that do to friction?",
            "More friction = more grip = safer stopping."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Glide and Grip",
      prompt:
        "Stand up and pretend you are on ice: take slow, smooth 'skating' glides across the room (low friction). Then plant your feet and do 5 firm 'grip stomps' like your boots suddenly caught. Repeat the glide-then-grip pattern 3 times.",
      scienceTieIn: "Your muscles make the push forces that move you, and the friction between your feet and the floor is exactly what keeps you from sliding — the same physics a skater feels every second.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Describe one moment today when a force (push, pull, gravity, or friction) changed how something moved. Which force was it, and what did it do?",
      badge: { id: "g5-winter-friction-finder", name: "Friction Finder", emoji: "🧊" },
      estimatedMinutes: 7
    }
  }
};
