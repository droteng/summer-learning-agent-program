// Grade 5 Science — Winter Expedition, Week 3 (Forces & Motion), Day 3.
// Grade 5 counterpart of g6.winter.sci.w3.d3, pitched down: simpler
// whole-number mechanical advantage, everyday examples, more scaffolding.
// Topic: simple machines (lever, ramp, pulley, wheel-and-axle) and how they
// make work easier.

export const winterG5ScienceW3D3 = {
  id: "g5.winter.sci.w3.d3",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 3,
  subject: "Science",
  topic: "Simple machines and mechanical advantage",
  topicTag: "simple-machines",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.3-5-ETS1-1", "NGSS.3-5-ETS1-2"],
  hook: "Dragging a heavy sled of firewood uphill looks impossible — until you use a machine! Today you meet the simple machines that let a small push do a big job, and you find out what 'mechanical advantage' means.",
  miniLesson: [
    "A SIMPLE MACHINE is a basic tool that makes work easier by changing how much force you need or which way you push. Four big ones: the LEVER, the RAMP (inclined plane), the PULLEY, and the WHEEL-AND-AXLE.",
    "Machines do not make free energy. They trade FORCE for DISTANCE. On a ramp you push with LESS force, but you push over a LONGER path.",
    "MECHANICAL ADVANTAGE is how many times a machine multiplies your push. A mechanical advantage of 3 means you lift a load using only one-third of the force."
  ],
  workedExample: {
    prompt: "A ramp lets you push a 200-newton crate up onto a truck using only 100 newtons of force. What is the ramp's mechanical advantage?",
    steps: [
      "Use the rule: mechanical advantage = load ÷ effort.",
      "The load (what you lift) is 200 newtons. Your effort (your push) is 100 newtons.",
      "200 ÷ 100 = 2.",
      "The ramp's mechanical advantage is 2 — it doubles your push."
    ],
    answer: "Mechanical advantage = 2"
  },
  items: [
    {
      id: "g5.winter.sci.w3.d3.q1",
      type: "multiple_choice",
      stem: "What is the MAIN reason people use simple machines?",
      choices: [
        "To make brand-new energy out of nothing",
        "To make objects heavier",
        "To make work easier by changing how much force you need or which way you push",
        "To slow everything down"
      ],
      answerIndex: 2,
      explanation: "Simple machines make work easier by changing the force you need or the direction you push — they do not make energy.",
      hintLadder: [
        "Think about why a ramp or a lever is helpful.",
        "They change how hard you push, or which way.",
        "They make work easier by changing a force."
      ],
      misconceptionsTargeted: ["machines-create-energy"]
    },
    {
      id: "g5.winter.sci.w3.d3.q2",
      type: "multiple_choice",
      stem: "You use a long metal bar to pry up a frozen manhole cover by pushing down on the far end. It balances on one point. Which simple machine is this?",
      choices: ["A pulley", "A lever", "A ramp", "A wheel-and-axle"],
      answerIndex: 1,
      explanation: "A bar that turns on one fixed point (the fulcrum) to multiply your push is a lever.",
      hintLadder: [
        "The bar turns around one fixed point.",
        "That point is called a fulcrum.",
        "A bar that turns on a fulcrum is a lever."
      ]
    },
    {
      id: "g5.winter.sci.w3.d3.q3",
      type: "numeric",
      stem: "A pulley lets you lift a 120-newton bundle of firewood using only 40 newtons of effort. What is the mechanical advantage? (mechanical advantage = load ÷ effort)",
      answer: 3,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Mechanical advantage = load ÷ effort.",
        "Load = 120 N, effort = 40 N.",
        "120 ÷ 40 = 3."
      ],
      explanation: "Mechanical advantage = load ÷ effort = 120 ÷ 40 = 3."
    },
    {
      id: "g5.winter.sci.w3.d3.q4",
      type: "multiple_choice",
      stem: "A person moves a heavy load in a wheelbarrow. The wheel turning on its rod is an example of which simple machine?",
      choices: [
        "A ramp",
        "A lever only",
        "A pulley",
        "A wheel-and-axle"
      ],
      answerIndex: 3,
      explanation: "A wheel joined to a rod (axle) so they turn together is a wheel-and-axle, which makes rolling a load easier.",
      hintLadder: [
        "Look at the wheel and the rod it spins on.",
        "The wheel and its rod turn together.",
        "That combo is the wheel-and-axle."
      ]
    },
    {
      id: "g5.winter.sci.w3.d3.q5",
      type: "short_answer",
      stem: "A ramp lets you move a heavy sled up to a porch using less force than lifting it straight up. Explain the TRADE-OFF: what do you save, and what do you give up?",
      rubric: {
        level3: "Explains the ramp needs LESS force BUT you push the load over a LONGER distance — clearly stating it trades force for distance (the machine is not free help).",
        level2: "Says the ramp saves force but does not clearly say you travel a longer distance.",
        level1: "No clear trade-off; may think the ramp gives free help."
      },
      exemplar: "The ramp lets me push with less force, so it feels easier. But I give up distance — I have to push the sled a longer way up the slope instead of lifting it straight up. The machine trades force for distance; it does not do the work for free.",
      hintLadder: [
        "You push with LESS force on a ramp — that is what you save.",
        "But the ramp path is longer than lifting straight up.",
        "Say it as a trade: less force, but more distance."
      ]
    }
  ],
  reflectionPrompt: "Look around your home for simple machines — a doorknob, scissors, a ramp, a bottle opener. Which one surprised you as a 'machine'?",
  misconceptionBank: [
    {
      id: "machines-create-energy",
      label: "Thinks simple machines make free energy or less total work",
      description: "Thinks a machine lets you do a job with no cost, instead of trading force for distance.",
      coachMove: "Show the trade-off: a ramp cuts the force but adds distance. Total work stays about the same — the machine just makes the force part smaller."
    },
    {
      id: "lever-fulcrum-ignored",
      label: "Forgets a lever needs a fixed pivot (fulcrum)",
      description: "Calls a bar a lever without seeing it must turn on a fulcrum to multiply force.",
      coachMove: "Point to the pivot point and name it the fulcrum — without a fulcrum, a bar is just a stick, not a lever."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Impossible Lift",
      prompt:
        "A single kid needs to get a super-heavy log up onto a woodpile — way too heavy to lift straight up. With no motor and nobody to help, how could ONE kid still get that log up there using science?",
      answer:
        "Use a simple machine! A ramp lets the kid push the log up a slope with far less force, or a lever or pulley multiplies the kid's push. The machine trades force for distance so a small push does a big job.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Simple Machine",
      challenge:
        "Design and build a working simple machine that lifts or moves a small load more easily — a ramp, a lever (ruler on a pencil fulcrum), a pulley (string over a rod), or a wheel-and-axle. Show that it makes the job easier.",
      materials: ["Rulers, pencils, string, tape, small books or blocks as loads", "Optional: a spool, cup, or toy wheel"],
      steps: [
        "Pick which simple machine you will build and what load it will move.",
        "Build it and test lifting the load WITH and WITHOUT the machine.",
        "Notice: is the push easier? Did you have to move the load a longer distance?",
        "Label the parts (fulcrum, ramp surface, pulley, or axle) on your build or a sketch."
      ],
      deliverable: "A built (or clearly sketched) simple machine with labeled parts and a note on how it made the job easier and what the trade-off was.",
      choiceBoard: [
        "Build a real working simple machine and photograph or sketch it.",
        "Draw a labeled picture of two different simple machines and how each changes a force.",
        "Write an 'inventor's pitch' explaining how your machine makes work easier."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Simple Machine Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.sci.w3.d3.arena1",
          type: "numeric",
          stem: "A lever lets a worker lift a 300-newton load of ice blocks using 100 newtons of effort. What is the lever's mechanical advantage? (load ÷ effort)",
          answer: 3,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Mechanical advantage = load ÷ effort.",
            "Load = 300 N, effort = 100 N.",
            "300 ÷ 100 = 3."
          ],
          explanation: "Mechanical advantage = 300 ÷ 100 = 3 — the lever multiplies the worker's force by 3."
        },
        {
          id: "g5.winter.sci.w3.d3.arena2",
          type: "short_answer",
          stem: "Two ramps reach the same porch: a short steep ramp and a long gentle ramp. Which one needs LESS force to push a sled up, and why? Use the idea of trading force for distance.",
          rubric: {
            level3: "Picks the long gentle ramp AND explains it needs less force because you spread the lifting over a longer distance, using the force-for-distance trade.",
            level2: "Picks the long ramp but the reasoning about distance/force is incomplete.",
            level1: "Picks the wrong ramp or gives no force-distance reasoning."
          },
          exemplar: "The long gentle ramp needs less force. You spread the lifting over a longer distance, so each push is easier. The steep ramp is shorter but needs more force. You trade a longer path for an easier push.",
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
        "Act out each simple machine: swing one arm like a LEVER over a fulcrum, walk your fingers up a RAMP, pull a hand-over-hand PULLEY rope, then roll your arms forward like a WHEEL-AND-AXLE. Do the whole set twice.",
      scienceTieIn: "Your own body is full of levers — your forearm turns at the elbow like a lever turns on a fulcrum, letting your muscles move heavy things.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which simple machine would help most with a chore you actually do? Name the machine, the chore, and how it would change the force you need.",
      badge: { id: "g5-winter-machine-mechanic", name: "Machine Mechanic", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
