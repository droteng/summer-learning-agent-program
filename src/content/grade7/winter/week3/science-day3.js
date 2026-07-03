// Grade 7 Science — Winter Expedition, Week 3 (Forces & Motion), Day 3.
// Grade 7 counterpart of g6.winter.sci.w3.d3. Same topic — simple
// machines and mechanical advantage — pitched one level up: work
// (force × distance), the force-for-distance trade quantified, and
// mechanical advantage tied to how work is conserved. Frozen-world
// STEM tone, age 12–13.

export const winterG7ScienceW3D3 = {
  id: "g7.winter.sci.w3.d3",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 3,
  subject: "Science",
  topic: "Simple machines, mechanical advantage, and the work trade-off",
  topicTag: "simple-machines",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS3-1", "NGSS.MS-ETS1-2"],
  hook: "A ramp lets you push a heavy sled of firewood with a fraction of the force — but it never gives you something for nothing. Today you go beyond 'machines make it easier' and prove it with numbers: WORK = force × distance, and why a machine that cuts your force must add distance to keep the work the same.",
  miniLesson: [
    "Work is force times distance: work = force × distance (in newtons × meters = joules). Lifting the same load the same height always takes the same work, no matter which machine you use.",
    "Mechanical advantage = load force ÷ effort force. A machine with mechanical advantage 4 lets you lift a load using one-fourth the force — but because work is conserved, you must apply that smaller force over FOUR times the distance.",
    "That is the trade-off, quantified: a machine multiplies force by dividing distance (or vice versa). Real machines also lose a little energy to friction, so the effort work is always a bit MORE than the useful work out."
  ],
  workedExample: {
    prompt: "A ramp lets you push a 600-newton crate up onto a truck using only 150 newtons of force. Find the ramp's mechanical advantage, and explain the distance trade-off.",
    steps: [
      "Mechanical advantage = load force ÷ effort force = 600 ÷ 150.",
      "600 ÷ 150 = 4, so the ramp's mechanical advantage is 4.",
      "Because work is conserved, cutting the force to 1/4 means the ramp is 4 times as LONG as the straight-up lift height.",
      "You push with 1/4 the force, but over 4 times the distance — the total work stays the same."
    ],
    answer: "Mechanical advantage = 4; you use 1/4 the force over 4 times the distance."
  },
  items: [
    {
      id: "g7.winter.sci.w3.d3.q1",
      type: "numeric",
      stem: "You lift a 40-newton bucket of ice straight up a height of 2 meters. How much WORK do you do, in joules? (work = force × distance)",
      answer: 80,
      tolerance: 0,
      unit: "J",
      hintLadder: [
        "Work = force × distance.",
        "Force = 40 N, distance = 2 m.",
        "40 × 2 = 80 joules."
      ],
      explanation: "Work = force × distance = 40 N × 2 m = 80 joules."
    },
    {
      id: "g7.winter.sci.w3.d3.q2",
      type: "multiple_choice",
      stem: "A machine has a mechanical advantage of 5. Compared with lifting the load straight up, what happens to your EFFORT force and the DISTANCE you must move it?",
      choices: [
        "Both the force and the distance are cut to 1/5",
        "The force is cut to 1/5, but you must move it over 5 times the distance",
        "The force is multiplied by 5 and the distance stays the same",
        "The machine removes the work entirely"
      ],
      answerIndex: 1,
      explanation: "Mechanical advantage 5 means 1/5 the force. Because work (force × distance) is conserved, the smaller force must act over 5 times the distance.",
      hintLadder: [
        "Mechanical advantage tells you how much SMALLER the force is.",
        "Work = force × distance must stay the same.",
        "If force drops to 1/5, distance must grow ×5."
      ],
      misconceptionsTargeted: ["machines-reduce-total-work"]
    },
    {
      id: "g7.winter.sci.w3.d3.q3",
      type: "numeric",
      stem: "A pulley system lets you lift a 720-newton bundle of firewood using only 90 newtons of effort. What is the mechanical advantage? (mechanical advantage = load ÷ effort)",
      answer: 8,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Mechanical advantage = load force ÷ effort force.",
        "Load = 720 N, effort = 90 N.",
        "720 ÷ 90 = 8."
      ],
      explanation: "Mechanical advantage = load ÷ effort = 720 ÷ 90 = 8."
    },
    {
      id: "g7.winter.sci.w3.d3.q4",
      type: "multiple_choice",
      stem: "You do 300 joules of work pushing a sled up a ramp, but only 240 joules of useful work ends up lifting the sled. Where did the missing 60 joules go?",
      choices: [
        "It was destroyed — energy can just disappear",
        "It was lost to friction (turned into heat), which is why real machines aren't 100% efficient",
        "The ramp created extra work out of nothing",
        "It turned into extra mechanical advantage"
      ],
      answerIndex: 1,
      explanation: "Real machines lose some input work to friction, which becomes heat. So the useful work out (240 J) is less than the effort work in (300 J) — the machine is less than 100% efficient.",
      hintLadder: [
        "Energy is never destroyed — so where does 'lost' work go?",
        "Rubbing surfaces turn motion into heat.",
        "The missing 60 J became heat from friction; the machine isn't perfectly efficient."
      ]
    },
    {
      id: "g7.winter.sci.w3.d3.q5",
      type: "short_answer",
      stem: "A long gentle ramp and a short steep ramp both reach the same porch, raising the same sled to the same height. Explain, using WORK = force × distance, why the gentle ramp needs less force even though the total work to lift the sled is the same on both.",
      rubric: {
        level3: "States that lifting the same sled to the same height requires the same WORK on both ramps, AND explains that because work = force × distance, the longer (gentle) ramp spreads that work over a greater distance, so each push needs less force (higher mechanical advantage); the steep ramp is shorter so it demands more force.",
        level2: "Says the gentle ramp needs less force but does not clearly tie it to work = force × distance being constant with distance traded for force.",
        level1: "No correct force-for-distance/work reasoning."
      },
      exemplar: "Both ramps lift the same sled to the same height, so the useful work is the same on each (work = force × distance). The long gentle ramp covers a greater distance, so to keep the work the same the force at each moment can be smaller — that's its higher mechanical advantage. The short steep ramp covers less distance, so the same total work is packed into a bigger force. Same work, but the gentle ramp trades distance for an easier push.",
      hintLadder: [
        "Lifting the same load to the same height takes the same WORK either way.",
        "Work = force × distance — if distance is larger, force can be smaller.",
        "The gentle ramp is longer, so it needs less force per push."
      ]
    }
  ],
  reflectionPrompt: "Find a machine at home (scissors, a bottle opener, a ramp, a doorknob). Estimate: does it give you MORE force at the cost of distance, or more distance at the cost of force?",
  misconceptionBank: [
    {
      id: "machines-reduce-total-work",
      label: "Thinks a simple machine reduces the total work needed",
      description: "Assumes a machine with high mechanical advantage lets you do the whole job with less total work, rather than trading force for distance while total work stays about the same.",
      coachMove: "Anchor on work = force × distance. A ramp cuts force but multiplies distance by the same factor, so the product (the work) is essentially unchanged — the machine reshapes the effort, it doesn't shrink it."
    },
    {
      id: "efficiency-ignored",
      label: "Thinks a real machine puts out exactly as much work as goes in",
      description: "Ignores that friction bleeds off some input work as heat, so useful work out is always a bit less than effort work in.",
      coachMove: "Have them account for the missing joules: energy isn't destroyed, it becomes heat from friction. That's why efficiency is under 100%."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Two-Ramp Puzzle",
      prompt:
        "A worker must get a 200-kilogram log onto a porch. Ramp A is short and steep; Ramp B is long and gentle. Both end at the same porch height. Which ramp lets the worker push with less force — and does either one let them do LESS total work? Explain your reasoning.",
      answer:
        "Ramp B (long, gentle) needs less force, because work = force × distance and the longer path lets the same work happen with a smaller push. But NEITHER ramp reduces the total work to lift the log to that height — the work is the same on both; Ramp B just spreads it over more distance.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Measure the Trade-Off",
      challenge:
        "Build a simple machine (ramp, lever, or pulley) and MEASURE the trade-off. Lift a small weighted load both straight up and with your machine, estimating the force and the distance each way, then compute and compare the work.",
      materials: ["Rulers, pencils, string, tape, small books or blocks as loads", "A ruler or tape to measure distance", "Optional: a spring scale or rubber band to feel the force difference", "Optional: a spool or toy wheel"],
      steps: [
        "Pick your machine and a load; measure the height you need to raise it.",
        "Lift the load straight up and note it takes a bigger force over a short distance (the height).",
        "Lift it with the machine and note the force feels smaller but the distance is longer; measure that distance.",
        "Estimate work = force × distance both ways and compare — they should be close, with the machine's a bit more because of friction."
      ],
      deliverable: "A comparison showing force and distance for both methods, the estimated work for each, and a sentence on why the machine's work is slightly larger.",
      choiceBoard: [
        "Build and measure a real machine and record a force–distance–work comparison table.",
        "Draw labeled diagrams of two machines with force and distance arrows and the work equation for each.",
        "Write an 'engineer's report' explaining your machine's mechanical advantage and where friction stole some work."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Simple Machine Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w3.d3.arena1",
          type: "numeric",
          stem: "A lever lets a worker lift a 900-newton load of ice blocks using 120 newtons of effort. What is the lever's mechanical advantage? (load ÷ effort — the answer may be a decimal.)",
          answer: 7.5,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Mechanical advantage = load force ÷ effort force.",
            "Load = 900 N, effort = 120 N.",
            "900 ÷ 120 = 7.5."
          ],
          explanation: "Mechanical advantage = 900 ÷ 120 = 7.5 — the lever multiplies the worker's force by 7.5."
        },
        {
          id: "g7.winter.sci.w3.d3.arena2",
          type: "short_answer",
          stem: "A ramp is used to raise a 500-newton sled a height of 1.5 meters, and the ramp is 6 meters long. Ignoring friction, find the WORK to lift the sled (work = force × height) and the EFFORT force needed along the 6-meter ramp, then state the mechanical advantage.",
          rubric: {
            level3: "Computes work = 500 × 1.5 = 750 J, then effort force = work ÷ ramp length = 750 ÷ 6 = 125 N, and states mechanical advantage = 500 ÷ 125 = 4 (or 6 ÷ 1.5 = 4), showing the force-for-distance trade.",
            level2: "Gets the work OR the effort force but not the full chain to mechanical advantage, or a minor arithmetic slip.",
            level1: "No correct use of work = force × distance to find the effort force."
          },
          exemplar: "Work to lift = force × height = 500 × 1.5 = 750 joules. That same work is spread over the 6-meter ramp, so effort force = work ÷ distance = 750 ÷ 6 = 125 N. Mechanical advantage = load ÷ effort = 500 ÷ 125 = 4 (which also equals ramp length ÷ height = 6 ÷ 1.5). You push with 125 N instead of 500 N by traveling 6 m instead of 1.5 m.",
          hintLadder: [
            "First find the work to lift straight up: 500 × 1.5.",
            "That work is done over the 6 m ramp, so effort = work ÷ 6.",
            "Mechanical advantage = load ÷ effort (or ramp length ÷ height)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Force-for-Distance",
      prompt:
        "Act out the trade-off: do ONE big 'straight-up' lift with both hands (big force, short distance). Then 'walk it up a ramp' — take 4 small easy lifting motions across a longer imaginary slope (small force, long distance). Repeat the pair 3 times, feeling how the effort spreads out.",
      scienceTieIn: "Your muscles just felt work = force × distance both ways: one hard short push or several gentle long ones do the same job — exactly how a ramp trades force for distance.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Machines trade force for distance but never erase the work. Describe a chore where you'd happily push with less force even if it means moving something a longer way — and name the machine that would help.",
      badge: { id: "g7-winter-work-trade-engineer", name: "Work Trade Engineer", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
