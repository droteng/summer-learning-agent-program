// Grade 6 Science — Winter Expedition, Week 3 (Forces & Motion), Day 3.
// Topic: simple machines (lever, ramp/inclined plane, pulley,
// wheel-and-axle) and mechanical advantage.

export const winterG6ScienceW3D3 = {
  id: "g6.winter.sci.w3.d3",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 3,
  subject: "Science",
  topic: "Simple machines and mechanical advantage",
  topicTag: "simple-machines",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS3-1", "NGSS.MS-ETS1-1"],
  hook: "Dragging a heavy sled of firewood uphill looks impossible — until you use a machine. Today you meet the simple machines that let a small force do a big job, and learn what 'mechanical advantage' really means.",
  miniLesson: [
    "A simple machine is a basic tool that makes work easier by changing the size or direction of a force. Four key ones: the lever, the inclined plane (ramp), the pulley, and the wheel-and-axle.",
    "Machines don't create free energy — they trade force for distance. Using a ramp, you push with LESS force but over a LONGER distance to lift the same load.",
    "Mechanical advantage is how many times a machine multiplies your input force. A machine with a mechanical advantage of 3 lets you lift a load using one-third the force you'd need bare-handed."
  ],
  workedExample: {
    prompt: "A ramp lets you push a 300-newton crate of supplies up onto a truck using only 100 newtons of force. What is the ramp's mechanical advantage?",
    steps: [
      "Mechanical advantage = load force ÷ effort force.",
      "The load (output) is 300 newtons; your effort (input) is 100 newtons.",
      "300 ÷ 100 = 3.",
      "The ramp has a mechanical advantage of 3 — it multiplies your push by 3."
    ],
    answer: "Mechanical advantage = 3"
  },
  items: [
    {
      id: "g6.winter.sci.w3.d3.q1",
      type: "multiple_choice",
      stem: "What is the MAIN reason people use simple machines?",
      choices: [
        "To create brand-new energy out of nothing",
        "To slow everything down",
        "To make objects heavier",
        "To make work easier by changing the size or direction of a force"
      ],
      answerIndex: 3,
      explanation: "Simple machines make work easier by changing how much force you need or the direction you apply it — they don't create energy.",
      hintLadder: [
        "Think about why a ramp or a lever is helpful.",
        "They change how much force you need, or which way you push.",
        "They make work easier by changing a force."
      ],
      misconceptionsTargeted: ["machines-create-energy"]
    },
    {
      id: "g6.winter.sci.w3.d3.q2",
      type: "multiple_choice",
      stem: "You use a long crowbar to pry a frozen manhole cover loose by pushing down on the far end. Which simple machine is the crowbar acting as?",
      choices: ["A pulley", "An inclined plane", "A lever", "A wheel-and-axle"],
      answerIndex: 2,
      explanation: "A crowbar pivots on a fixed point (fulcrum) to multiply your force — that's a lever.",
      hintLadder: [
        "The bar pivots around one fixed point.",
        "That pivot point is called a fulcrum.",
        "A bar that turns on a fulcrum is a lever."
      ]
    },
    {
      id: "g6.winter.sci.w3.d3.q3",
      type: "numeric",
      stem: "A pulley system lets you lift a 240-newton bundle of firewood using only 60 newtons of effort. What is the mechanical advantage? (mechanical advantage = load ÷ effort)",
      answer: 4,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Mechanical advantage = load force ÷ effort force.",
        "Load = 240 N, effort = 60 N.",
        "240 ÷ 60 = 4."
      ],
      explanation: "Mechanical advantage = load ÷ effort = 240 ÷ 60 = 4."
    },
    {
      id: "g6.winter.sci.w3.d3.q4",
      type: "multiple_choice",
      stem: "A snow-shoveler wheels a heavy load using a wheelbarrow. The wheel turning on its rod is an example of which simple machine?",
      choices: [
        "A wheel-and-axle",
        "A lever only",
        "An inclined plane",
        "A pulley"
      ],
      answerIndex: 0,
      explanation: "A wheel fixed to a rod (axle) that turn together is a wheel-and-axle, which makes rolling loads easier.",
      hintLadder: [
        "Look at the wheel and the rod it spins on.",
        "The wheel and its rod turn together.",
        "That combination is the wheel-and-axle."
      ]
    },
    {
      id: "g6.winter.sci.w3.d3.q5",
      type: "short_answer",
      stem: "A ramp lets you move a heavy sled up to a porch using less force than lifting it straight up. Explain the TRADE-OFF: what do you save, and what do you give up?",
      rubric: {
        level3: "Explains that a ramp reduces the force needed BUT requires moving the load over a longer distance, correctly framing it as trading force for distance (machine doesn't reduce total work).",
        level2: "Says the ramp saves force but does not clearly identify that you travel a longer distance in return.",
        level1: "No clear trade-off; may imply the ramp gives 'free' help."
      },
      exemplar: "The ramp lets me push with less force, so it feels easier. But I give up distance — I have to push the sled a longer way up the slope than if I lifted it straight up. The machine trades force for distance; it doesn't do the work for free.",
      hintLadder: [
        "You push with LESS force on a ramp — that's what you save.",
        "But the ramp path is longer than lifting straight up.",
        "State it as a trade: less force, but more distance."
      ]
    }
  ],
  reflectionPrompt: "Look around your home for simple machines — a doorknob, scissors, a ramp, a bottle opener. Which one surprised you as a 'machine'?",
  misconceptionBank: [
    {
      id: "machines-create-energy",
      label: "Thinks simple machines create free energy or reduce total work",
      description: "Assumes a machine lets you do a job with no cost, rather than trading force for distance.",
      coachMove: "Emphasize the trade-off: a ramp cuts the force but adds distance. Total work (force × distance) stays about the same — the machine just makes the force part smaller."
    },
    {
      id: "lever-fulcrum-ignored",
      label: "Forgets a lever needs a fixed pivot (fulcrum)",
      description: "Identifies a bar as a lever without recognizing it must pivot on a fulcrum to multiply force.",
      coachMove: "Point to the pivot point and name it the fulcrum — without a fulcrum, a bar is just a stick, not a lever."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Impossible Lift",
      prompt:
        "A single kid needs to lift a 200-kilogram log onto a woodpile — way too heavy to lift straight up. With no motor and no other people, how could ONE kid still get that log up there using physics?",
      answer:
        "Use a simple machine! A ramp (inclined plane) lets the kid push the log up a slope with far less force, or a lever/pulley multiplies their force. The machine trades force for distance so a small push does a big job.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Simple Machine",
      challenge:
        "Design and build a working simple machine that lifts or moves a small load more easily — a ramp, a lever (ruler on a pencil fulcrum), a pulley (string over a rod), or a wheel-and-axle. Show it makes the job easier.",
      materials: ["Rulers, pencils, string, tape, small books or blocks as loads", "Optional: a spool, cup, or toy wheel"],
      steps: [
        "Pick which simple machine you'll build and what load it will move.",
        "Build it and test lifting the load WITH and WITHOUT the machine.",
        "Notice: is the force easier? Did you have to move the load a longer distance?",
        "Label the parts (fulcrum, ramp surface, pulley, or axle) on your build or a sketch."
      ],
      deliverable: "A built (or clearly sketched) simple machine with labeled parts and a note on how it made the job easier and what the trade-off was.",
      choiceBoard: [
        "Build a real working simple machine and photograph or sketch it.",
        "Draw a labeled diagram of two different simple machines and how each changes a force.",
        "Write an 'inventor's pitch' explaining your machine's mechanical advantage."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Simple Machine Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.sci.w3.d3.arena1",
          type: "numeric",
          stem: "A lever lets a worker lift a 500-newton load of ice blocks using 100 newtons of effort. What is the lever's mechanical advantage? (load ÷ effort)",
          answer: 5,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Mechanical advantage = load force ÷ effort force.",
            "Load = 500 N, effort = 100 N.",
            "500 ÷ 100 = 5."
          ],
          explanation: "Mechanical advantage = 500 ÷ 100 = 5 — the lever multiplies the worker's force by 5."
        },
        {
          id: "g6.winter.sci.w3.d3.arena2",
          type: "short_answer",
          stem: "Two ramps reach the same porch: a short steep ramp and a long gentle ramp. Which one requires LESS force to push a sled up, and why? Use the idea of trading force for distance.",
          rubric: {
            level3: "Chooses the long gentle ramp AND explains it requires less force because the load is spread over a longer distance (greater mechanical advantage), correctly using the force-for-distance trade.",
            level2: "Picks the long ramp but the reasoning about distance/force trade is incomplete.",
            level1: "Picks the wrong ramp or gives no force-distance reasoning."
          },
          exemplar: "The long gentle ramp needs less force. It has a greater mechanical advantage because you spread the lifting over a longer distance, so each push is easier. The steep ramp is shorter but demands more force. You trade a longer path for an easier push.",
          hintLadder: [
            "A gentler slope spreads the climb over a longer distance.",
            "More distance means you can use less force for the same lift.",
            "So which ramp is easier — the long gentle one or the short steep one?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Machine Motions",
      prompt:
        "Act out each simple machine: swing one arm like a LEVER over a fulcrum, walk your fingers up a ramp (INCLINED PLANE), pull a hand-over-hand PULLEY rope, then roll your arms forward like a WHEEL-AND-AXLE. Do the full set twice.",
      scienceTieIn: "Your own body is full of levers — your forearm pivots at the elbow like a lever pivots on a fulcrum, letting your muscles move heavy things.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which simple machine would help most with a chore you actually do? Name the machine, the chore, and how it would change the force you need.",
      badge: { id: "machine-master-mechanic", name: "Machine Master Mechanic", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
