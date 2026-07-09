// Grade 6 Science — Winter Expedition, Week 3 (Forces & Motion), Day 1.
// Topic: forces (push/pull, gravity, friction) and why ice is slippery
// (low friction). Part of the Winter Expedition: energy, space, and the
// physics of a frozen world.

export const winterG6ScienceW3D1 = {
  id: "g6.winter.sci.w3.d1",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Science",
  topic: "Forces: push, pull, gravity, and friction on ice",
  topicTag: "forces-friction",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS2-2", "NGSS.MS-PS2-4"],
  hook: "Step onto a frozen pond and you feel it instantly — your feet want to slide out from under you. Today you find out what a FORCE really is, and why ice turns a simple walk into a slippery adventure.",
  miniLesson: [
    "A force is a push or a pull. Every time something speeds up, slows down, or changes direction, a force acted on it.",
    "Gravity is the pull that draws objects toward Earth — it's why a snowball falls and why you have weight standing on the ice.",
    "Friction is a force that resists sliding when two surfaces rub. Rough surfaces have high friction (grip); smooth, slick ice has LOW friction, so things slide easily."
  ],
  workedExample: {
    prompt: "A hockey puck slides across smooth ice and slowly stops. What force slowed it down, and would it stop faster on rough concrete?",
    steps: [
      "The puck was moving, then it slowed — so a force acted against its motion.",
      "That force is friction between the puck and the ice.",
      "Ice is very smooth, so it has LOW friction — the puck slides a long way.",
      "Rough concrete has HIGH friction, so the same puck would stop much faster there."
    ],
    answer: "Friction slowed the puck; on rough concrete (higher friction) it would stop faster."
  },
  items: [
    {
      id: "g6.winter.sci.w3.d1.q1",
      type: "multiple_choice",
      stem: "What is a FORCE?",
      choices: [
        "A type of energy stored in food",
        "The speed of an object",
        "A push or a pull that can change how something moves",
        "The weight of the air"
      ],
      answerIndex: 2,
      explanation: "A force is any push or pull. It can make an object speed up, slow down, or change direction.",
      hintLadder: [
        "Think about what you do to open a door or slide a box.",
        "It is described as a push or a ____.",
        "A force is a push or a pull."
      ]
    },
    {
      id: "g6.winter.sci.w3.d1.q2",
      type: "multiple_choice",
      stem: "Why is it so easy to slip and slide on ice compared to a rough sidewalk?",
      choices: [
        "Ice is smooth, so there is very LOW friction between your feet and the surface",
        "Ice has more gravity than a sidewalk",
        "There is no gravity on ice",
        "Ice pushes you sideways on purpose"
      ],
      answerIndex: 0,
      explanation: "Smooth ice has low friction, so there is little force gripping your feet — that lets you slide.",
      hintLadder: [
        "Friction is the force that grips two surfaces together.",
        "Is ice smooth or rough compared to a sidewalk?",
        "Smooth = low friction = easy sliding."
      ],
      misconceptionsTargeted: ["ice-has-no-gravity"]
    },
    {
      id: "g6.winter.sci.w3.d1.q3",
      type: "multiple_choice",
      stem: "A snowball falls off a rooftop toward the ground. Which force pulls it down?",
      choices: ["Friction", "Gravity", "A push from the wind only", "Magnetism"],
      answerIndex: 1,
      explanation: "Gravity is the force that pulls objects toward Earth, so the snowball falls downward.",
      hintLadder: [
        "What force always pulls objects toward the center of Earth?",
        "It is why things fall when you drop them.",
        "That force is gravity."
      ]
    },
    {
      id: "g6.winter.sci.w3.d1.q4",
      type: "short_answer",
      stem: "Ice skaters put on skates with thin metal blades. Explain how the amount of friction helps them glide, and why walking in regular boots on the same ice is harder to control.",
      rubric: {
        level3: "Explains that the smooth blade on smooth ice creates very low friction so the skater glides, AND notes that low friction also makes stopping/control harder (or that boots offer slightly more grip but still slip), with clear reasoning.",
        level2: "Mentions low friction and gliding but does not address control/stopping, or reasoning is incomplete.",
        level1: "Does not connect friction to gliding or control."
      },
      exemplar: "The thin, smooth blade on smooth ice makes very low friction, so a skater glides forward easily. But low friction also means little grip, so it is hard to stop or change direction quickly — that is why controlling any movement on ice, even in boots, takes practice.",
      hintLadder: [
        "How much friction is there between smooth metal and smooth ice?",
        "Low friction makes gliding easy — but what does it do to stopping?",
        "Connect low friction to BOTH easy sliding and hard stopping."
      ]
    },
    {
      id: "g6.winter.sci.w3.d1.q5",
      type: "short_answer",
      stem: "Give one everyday example of a helpful force and one example of friction being useful, and explain each in a sentence.",
      rubric: {
        level3: "Gives a correct example of a force (push/pull) AND a correct example of USEFUL friction (e.g., shoe grip, brakes), with a clear explanation of each.",
        level2: "Gives both examples but one explanation is vague or slightly off.",
        level1: "Misidentifies a force or friction, or gives no explanation."
      },
      exemplar: "Helpful force: pushing a stalled sled to get it moving — my push is a force. Useful friction: the rubber soles of my winter boots grip the sidewalk so I do not slip; that grip is friction doing a helpful job.",
      hintLadder: [
        "A force is any push or pull you use.",
        "Friction is useful when you WANT grip — like shoes or brakes.",
        "Give one example of each and explain in a sentence."
      ]
    }
  ],
  reflectionPrompt: "The next time you walk outside in winter, notice where you have grip and where you might slip. What surfaces had high friction, and which had low?",
  misconceptionBank: [
    {
      id: "ice-has-no-gravity",
      label: "Thinks slipping on ice means gravity is weaker or gone",
      description: "Confuses low friction with a change in gravity, assuming you slide because gravity is different on ice.",
      coachMove: "Point out that gravity is the same everywhere on Earth's surface — what changed is FRICTION. Ice is smooth, so there is less grip, not less gravity."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Mystery of the Sliding Mug",
      prompt:
        "You slide a mug across a smooth kitchen counter and it glides far. You slide the same mug across a rough wooden picnic table and it stops quickly. Nothing about the mug changed — so what invisible force made the difference?",
      answer:
        "Friction! The smooth counter has low friction so the mug glides; the rough table has high friction so it grips and stops the mug fast. Ice is like the ultra-smooth counter — very low friction.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Friction Ramp Test",
      challenge:
        "Build a small ramp (a book propped on a stack) and slide the same object down surfaces with different friction — bare ramp, a towel, wax paper or a plastic bag (your 'ice'). Predict, then measure which lets it slide farthest.",
      materials: ["A book or board for a ramp", "A small sliding object (eraser, toy car, ice cube)", "A towel and wax paper or a plastic bag", "Ruler or tape measure"],
      steps: [
        "Prop up a ramp at the same angle for every test.",
        "Predict which surface will let your object slide the FARTHEST and which the shortest.",
        "Slide the object down each surface and measure how far it travels past the ramp.",
        "Rank the surfaces from lowest to highest friction based on your results."
      ],
      deliverable: "A results table ranking each surface by how far the object slid, plus a sentence on which had the lowest friction.",
      choiceBoard: [
        "Run the ramp test and record a measured results table.",
        "Draw a labeled diagram showing the forces (gravity pulling down the ramp, friction resisting) on your sliding object.",
        "Write a short 'science report' predicting and then explaining your friction ranking."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Friction Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.sci.w3.d1.arena1",
          type: "multiple_choice",
          stem: "A sled slides much farther on packed ice than on bare grass. Why?",
          choices: [
            "Grass has stronger gravity than ice",
            "There is no force acting on the sled at all",
            "The sled is heavier on ice",
            "Ice has LOWER friction than grass, so less force resists the sled's motion"
          ],
          answerIndex: 3,
          explanation: "Ice is smooth with low friction, so little force resists the sled — it glides far. Grass is rough with high friction, so it stops the sled sooner.",
          hintLadder: [
            "Which surface is smoother, ice or grass?",
            "Smoother surfaces have lower friction.",
            "Lower friction = less resisting force = the sled slides farther."
          ]
        },
        {
          id: "g6.winter.sci.w3.d1.arena2",
          type: "short_answer",
          stem: "Winter road crews spread sand or grit on icy roads. Using the words FORCE and FRICTION, explain how this helps cars stop safely.",
          rubric: {
            level3: "Explains that sand/grit ADDS friction (a resisting force) between tires and road, giving more grip so cars can slow and stop, clearly using force and friction.",
            level2: "Says it helps cars grip or stop but does not clearly connect it to increasing friction/force.",
            level1: "No clear connection to friction or force."
          },
          exemplar: "Ice has very low friction, so tires slide instead of gripping. Spreading rough sand adds friction — a resisting force between the tires and the road — so the tires grip better and the car can slow down and stop safely.",
          hintLadder: [
            "Is smooth ice high or low friction for tires?",
            "Rough sand makes the surface grippier — what does that do to friction?",
            "More friction = more resisting force = safer stopping."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Glide and Grip",
      prompt:
        "Stand up and pretend you're on ice: take slow, smooth 'skating' glides across the room (low friction, controlled). Then plant your feet and do 5 firm 'grip stomps' as if your boots suddenly caught traction. Repeat the glide-then-grip pattern 3 times.",
      scienceTieIn: "Your muscles create the push forces that move you, and the friction between your feet and the floor is exactly what keeps you from sliding — the same physics a skater balances every second.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Describe one moment today when a force (push, pull, gravity, or friction) changed how something moved. Which force was it, and what did it do?",
      badge: { id: "friction-force-finder", name: "Friction Force Finder", emoji: "🧊" },
      estimatedMinutes: 7
    }
  }
};
