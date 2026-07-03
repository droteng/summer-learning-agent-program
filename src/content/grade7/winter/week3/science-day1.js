// Grade 7 Science — Winter Expedition, Week 3 (Forces & Motion), Day 1.
// Grade 7 counterpart of g6.winter.sci.w3.d1. Same topic — forces
// (push/pull, gravity, friction) and why ice is slippery — pitched one
// level up: net force from combining forces, balanced vs. unbalanced
// forces, and reasoning about how friction scales with the load pressing
// two surfaces together. Frozen-world STEM tone, age 12–13.

export const winterG7ScienceW3D1 = {
  id: "g7.winter.sci.w3.d1",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Science",
  topic: "Forces: net force, balanced vs. unbalanced, and friction on ice",
  topicTag: "forces-friction",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS2-2", "NGSS.MS-PS2-4"],
  hook: "On a frozen pond, the tiniest push sends you sliding — but stand on rough asphalt and that same push does almost nothing. This week you stop thinking of forces one at a time and start ADDING them up. Today: net force, why balanced forces cancel, and why low-friction ice lets a small unbalanced force win.",
  miniLesson: [
    "Forces have size and direction, so they combine into a NET force. Two forces pushing the same way add; forces pushing opposite ways subtract. The net force is what actually changes an object's motion.",
    "When forces are BALANCED (net force = 0), motion doesn't change — a still puck stays still, a gliding puck keeps its speed. When forces are UNBALANCED (net force ≠ 0), the object speeds up, slows down, or turns.",
    "Friction is a resisting force that grows with how hard two surfaces press together and how rough they are. Smooth ice presses lightly and grips little, so even a small forward push is UNBALANCED — you accelerate and slide."
  ],
  workedExample: {
    prompt: "A skater pushes a 40-newton puck forward while friction pushes back with 10 newtons. What is the net force on the puck, and is its motion balanced or unbalanced?",
    steps: [
      "List the forces with direction: 40 N forward, 10 N backward (friction).",
      "Forces in opposite directions subtract: 40 − 10 = 30.",
      "Net force = 30 newtons forward — not zero.",
      "A non-zero net force is UNBALANCED, so the puck speeds up in the forward direction."
    ],
    answer: "Net force = 30 N forward; unbalanced, so the puck accelerates forward."
  },
  items: [
    {
      id: "g7.winter.sci.w3.d1.q1",
      type: "multiple_choice",
      stem: "Two kids push a stuck sled from the SAME side, one with 25 N and one with 35 N, while nothing pushes back. What is the net force on the sled?",
      choices: [
        "10 N (you subtract the pushes)",
        "60 N in the direction they are both pushing",
        "0 N, because two forces always cancel",
        "35 N, only the bigger push counts"
      ],
      answerIndex: 1,
      explanation: "Forces in the SAME direction add: 25 + 35 = 60 N. The net force is 60 N in the direction of the pushes.",
      hintLadder: [
        "Are the two pushes in the same direction or opposite directions?",
        "Same direction means you ADD the forces.",
        "25 + 35 = 60 N in the push direction."
      ]
    },
    {
      id: "g7.winter.sci.w3.d1.q2",
      type: "multiple_choice",
      stem: "A puck glides across smooth ice at a steady speed in a straight line. What must be true about the forces on it?",
      choices: [
        "There is a large unbalanced force pushing it forward",
        "The forces are balanced — the net force is about zero, so its motion doesn't change",
        "Gravity has switched off while it slides",
        "Friction is pushing it forward to keep it going"
      ],
      answerIndex: 1,
      explanation: "Steady speed in a straight line means no change in motion, so the net force is about zero — the forces are balanced. On very low-friction ice, there is little to slow it, so it keeps gliding.",
      hintLadder: [
        "Is the puck's motion CHANGING, or staying the same?",
        "No change in motion means the net force is zero.",
        "Zero net force = balanced forces."
      ],
      misconceptionsTargeted: ["motion-needs-constant-force"]
    },
    {
      id: "g7.winter.sci.w3.d1.q3",
      type: "multiple_choice",
      stem: "You load extra bricks onto a sled so it presses much harder on the ground. What happens to the friction force when you try to drag it?",
      choices: [
        "Friction disappears because the sled is heavier",
        "Friction increases, because friction grows as the surfaces press together harder",
        "Friction stays exactly the same regardless of weight",
        "Gravity now pushes the sled sideways"
      ],
      answerIndex: 1,
      explanation: "Friction depends on how hard the surfaces press together. Adding weight presses them harder, so the friction force resisting the drag increases.",
      hintLadder: [
        "What makes two surfaces grip more — pressing lightly or pressing hard?",
        "More weight presses the surfaces together harder.",
        "Harder pressing = more friction."
      ]
    },
    {
      id: "g7.winter.sci.w3.d1.q4",
      type: "short_answer",
      stem: "A hockey puck is pushed forward with 30 N while friction resists with 6 N. Compare this to the SAME puck pushed with 30 N on rough concrete where friction resists with 22 N. Calculate the net force in each case and explain what happens to the puck's motion in each.",
      rubric: {
        level3: "Computes both net forces (ice: 30 − 6 = 24 N forward; concrete: 30 − 22 = 8 N forward) AND explains that both are unbalanced but the ice puck accelerates much more / slides far because its net force is larger, while the concrete puck barely speeds up and stops sooner.",
        level2: "Gets both net forces or the correct comparison but reasoning about the effect on motion is incomplete.",
        level1: "Incorrect net force, or no connection between larger net force and greater change in motion."
      },
      exemplar: "On ice: net force = 30 − 6 = 24 N forward, a large unbalanced force, so the puck accelerates a lot and glides far. On concrete: net force = 30 − 22 = 8 N forward, a much smaller unbalanced force, so the puck barely speeds up and the higher friction stops it quickly. Same push, but more friction leaves a smaller net force and less motion.",
      hintLadder: [
        "Net force = forward push − backward friction, for each surface.",
        "Ice: 30 − 6. Concrete: 30 − 22.",
        "Bigger net force = bigger change in motion; compare 24 N vs 8 N."
      ]
    },
    {
      id: "g7.winter.sci.w3.d1.q5",
      type: "short_answer",
      stem: "Winter road crews spread grit on ice AND tire makers cut deep treads. Using the words NET FORCE, FRICTION, and BALANCED/UNBALANCED, explain how each change helps a car stop safely.",
      rubric: {
        level3: "Explains that grit and treads INCREASE friction between tire and road, giving a larger backward (resisting) force so the braking net force can actually slow the car, correctly using net force and friction and referencing balanced/unbalanced (a car stops when an unbalanced backward net force acts).",
        level2: "Connects grit/treads to more friction and safer stopping but does not clearly use net force or balanced/unbalanced.",
        level1: "No clear link to increasing friction or to net force."
      },
      exemplar: "On smooth ice friction is tiny, so a braking tire can't create much backward force and the car keeps sliding. Grit and deep treads raise the friction between tire and road, giving a larger backward force. That makes the net force on the car an unbalanced backward force, which slows it down and lets it stop safely instead of gliding on.",
      hintLadder: [
        "Braking works by creating a backward FORCE on the car.",
        "Grit and treads change the amount of FRICTION available.",
        "More friction → larger unbalanced backward net force → the car slows and stops."
      ]
    }
  ],
  reflectionPrompt: "Next time you move outside in winter, notice a moment when forces were UNBALANCED (you slipped or lurched) and one when they were BALANCED (you stood steady). What force tipped the balance each time?",
  misconceptionBank: [
    {
      id: "motion-needs-constant-force",
      label: "Thinks a moving object always needs a forward force to keep moving",
      description: "Assumes that because the puck is gliding, something must be continuously pushing it forward, rather than recognizing that with near-zero friction the forces are balanced and motion continues on its own.",
      coachMove: "Point out that on very low-friction ice there is almost nothing to slow the puck, so no forward push is needed — balanced forces (net ≈ 0) let it keep gliding. Force changes motion; it isn't required to maintain it."
    },
    {
      id: "friction-independent-of-load",
      label: "Thinks friction does not depend on how hard surfaces press together",
      description: "Believes friction is fixed by the material alone and ignores that adding weight (pressing harder) increases the friction force.",
      coachMove: "Have them compare dragging an empty box vs. a loaded one on the same floor. Same surfaces, but the loaded box presses harder and is harder to drag — friction grew with the load."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Tug-of-War on Ice",
      prompt:
        "Two teams pull a rope from opposite ends. Team A pulls with 300 N, Team B with 300 N — the flag doesn't move. Then one kid on Team B lets go. What is the net force now, and which way does the rope suddenly move?",
      answer:
        "While both teams pulled 300 N in opposite directions, the forces were BALANCED (net = 0) so nothing moved. When a kid lets go, Team B drops below 300 N, so Team A wins the tug: the net force is now UNBALANCED toward Team A, and the rope jerks that way.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Net Force Ramp Lab",
      challenge:
        "Slide the same object down a ramp across surfaces with different friction (bare ramp, towel, wax paper 'ice'), AND change the object's weight by taping coins to it. Predict and measure how BOTH friction and weight change how far it slides — then reason about the net force.",
      materials: ["A book or board for a ramp", "A small sliding object (eraser, toy car, ice cube)", "A towel and wax paper or a plastic bag", "Coins or washers to add weight", "Ruler or tape measure"],
      steps: [
        "Prop the ramp at the SAME angle for every test so the forward pull of gravity stays constant.",
        "Test each surface once, then add weight and test again; predict each result first.",
        "Measure how far the object slides past the ramp each time and record it in a table.",
        "For each run, write whether MORE or LESS friction resisted, and whether that left a larger or smaller net force pushing the object forward."
      ],
      deliverable: "A results table comparing surface and weight against slide distance, plus 2 sentences explaining which run had the largest net forward force and why.",
      choiceBoard: [
        "Run the full lab and record a measured results table with a net-force note per run.",
        "Draw a labeled force diagram (arrows for gravity's pull, normal support, and friction) for one run and subtract to find the net force.",
        "Write a short lab report predicting, then explaining, how friction AND weight changed the outcome."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Net Force Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w3.d1.arena1",
          type: "numeric",
          stem: "A snowmobile engine pushes forward with 520 N while friction and air resistance push back with a combined 340 N. What is the net force on the snowmobile, in newtons? (Enter the size; it is directed forward.)",
          answer: 180,
          tolerance: 0,
          unit: "N",
          hintLadder: [
            "Forward push and backward resistance are in opposite directions, so subtract.",
            "520 − 340.",
            "520 − 340 = 180 N forward."
          ],
          explanation: "Opposite forces subtract: 520 − 340 = 180 N. The net force is 180 N forward, so the snowmobile speeds up."
        },
        {
          id: "g7.winter.sci.w3.d1.arena2",
          type: "short_answer",
          stem: "A sled sits on ice. You push it with 15 N and your friend pushes from the opposite side with 15 N, and it does not move. Then friction (which was 0 while still) is ignored. Explain WHY it doesn't move using net force, and predict what happens the instant your friend stops pushing.",
          rubric: {
            level3: "Explains the two 15 N pushes are equal and opposite, so net force = 0 (balanced) and motion doesn't change, AND predicts that when the friend stops, the net force becomes an unbalanced 15 N in the pusher's direction, so the sled accelerates that way.",
            level2: "Gets that balanced forces keep it still OR that it moves when the friend stops, but not both clearly.",
            level1: "No use of net force / balanced vs unbalanced reasoning."
          },
          exemplar: "The two 15 N pushes are equal in size but opposite in direction, so they cancel: net force = 0. Balanced forces mean no change in motion, so the sled stays still. The instant your friend stops, only your 15 N remains, so the net force is an unbalanced 15 N in your direction — the sled accelerates away from you.",
          hintLadder: [
            "Equal, opposite forces — what do they add up to?",
            "Net force of zero means balanced: no change in motion.",
            "Remove one push and the remaining force is unbalanced — the sled accelerates that way."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Balanced and Unbalanced",
      prompt:
        "Stand tall and press your palms together hard in front of you — equal pushes, BALANCED, nothing moves (5 seconds). Then push one hand harder so both arms drift to one side — UNBALANCED, motion happens. Repeat the balanced-then-unbalanced pattern 4 times, then shake out your arms.",
      scienceTieIn: "Your pressing palms are two forces meeting: when they're equal the net force is zero and nothing moves; the moment one wins, the unbalanced net force sends your hands sliding — the same rule that governs a puck on ice.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Describe a moment today when forces were balanced (net = 0) and one when they were unbalanced. What was the net force doing to the motion in each case?",
      badge: { id: "g7-winter-net-force-navigator", name: "Net Force Navigator", emoji: "🧊" },
      estimatedMinutes: 7
    }
  }
};
