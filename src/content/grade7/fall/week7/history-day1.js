// Grade 7 History/Civics — Fall Expedition, Week 7 (Cause & Effect in
// History), Day 1. Topic: multi-causal cause-and-effect chains — grade-7 depth
// (distinguishing necessary vs. contributing causes, weighting multiple causes).

export const fallG7HistoryW7D1 = {
  id: "g7.fall.hist.w7.d1",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 1,
  subject: "History/Civics",
  topic: "Multi-causal cause-and-effect chains in history",
  topicTag: "cause-effect-chains",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14.6-8", "C3.D2.His.15.6-8"],
  hook: "History is rarely a single tidy chain — most events sit at the crossing of SEVERAL causes at once. Today you learn to trace those chains and weigh which causes mattered most.",
  miniLesson: [
    "A necessary cause is one the event could NOT have happened without; a contributing cause made it more likely or more severe but wasn't strictly required.",
    "Chains branch: an effect can have multiple causes feeding into it, and can itself trigger multiple further effects.",
    "Historians weigh causes by asking: remove this cause — does the event still happen? If not, it was likely necessary; if it happens but differently, it was contributing."
  ],
  workedExample: {
    prompt: "The Dust Bowl (1930s) had several causes. Sort them into necessary vs. contributing and build the chain.",
    steps: [
      "List causes: severe multi-year drought; plowing that stripped native grasses; economic pressure to over-farm.",
      "Test each: without the drought, no dust storms at all → necessary cause.",
      "Without the plowing, drought alone would have caused far less blowing soil → strong contributing cause.",
      "Chain: drought + stripped soil → exposed topsoil → wind lifted it into dust storms → farms failed → mass migration west."
    ],
    answer: "Necessary: drought. Contributing: soil-stripping farming + economic over-farming. Together they chained into dust storms → failed farms → migration."
  },
  items: [
    {
      id: "g7.fall.hist.w7.d1.q1",
      type: "multiple_choice",
      stem: "A 'necessary cause' of an event is one that...",
      choices: [
        "the event could not have happened without",
        "made the event slightly more likely",
        "happened at the same time as the event",
        "was written about most often"
      ],
      answerIndex: 0,
      explanation: "A necessary cause is required: remove it and the event does not happen at all.",
      hintLadder: [
        "Try the removal test.",
        "If you delete this cause, does the event still occur?",
        "A necessary cause is one the event cannot happen without."
      ]
    },
    {
      id: "g7.fall.hist.w7.d1.q2",
      type: "multiple_choice",
      stem: "In the chain 'Poor harvests + rising taxes → widespread hunger → protests → the government fell,' the event with MULTIPLE causes feeding into it is...",
      choices: [
        "the government falling",
        "the protests",
        "widespread hunger",
        "rising taxes"
      ],
      answerIndex: 2,
      explanation: "'Widespread hunger' has two arrows into it — poor harvests AND rising taxes — so it is the multi-causal node.",
      hintLadder: [
        "Look for the event with two different causes named before it.",
        "Which effect follows from both the harvests AND the taxes?",
        "Widespread hunger sits at the crossing of both causes."
      ]
    },
    {
      id: "g7.fall.hist.w7.d1.q3",
      type: "multiple_choice",
      stem: "Why is 'single-cause thinking' a weakness when analyzing a historical event?",
      choices: [
        "It takes too long to explain one cause",
        "Because every event has exactly one cause",
        "Because historians never agree on any cause",
        "It ignores how several causes usually combine, so it distorts why the event happened"
      ],
      answerIndex: 3,
      explanation: "Most events are multi-causal; naming one cause hides how several factors combined, giving an incomplete and often misleading picture.",
      hintLadder: [
        "Think about the Dust Bowl example.",
        "Would 'just the drought' fully explain it?",
        "Single-cause thinking hides the combination of factors."
      ],
      misconceptionsTargeted: ["single-cause-thinking"]
    },
    {
      id: "g7.fall.hist.w7.d1.q4",
      type: "short_answer",
      stem: "Pick a historical event you have studied. Name ONE necessary cause and ONE contributing cause, and explain how you decided which was which using the removal test.",
      rubric: {
        level3: "Names a real event, correctly labels one necessary and one contributing cause, AND applies the removal test to justify the labels.",
        level2: "Names two causes and labels them but the removal-test reasoning is thin or partly off.",
        level1: "Only one cause, mislabels them, or no removal-test reasoning."
      },
      exemplar: "For World War I, the alliance system was a contributing cause and the assassination of Archduke Franz Ferdinand was closer to a necessary trigger. Removal test: without the assassination the specific July 1914 crisis doesn't ignite, so it was necessary to THAT war starting when it did; without the alliances a conflict could still have begun but wouldn't have spread so fast, so alliances contributed.",
      hintLadder: [
        "Choose an event with more than one cause.",
        "For each cause, ask: if I remove it, does the event still happen?",
        "Label the 'can't happen without it' cause necessary; the rest contributing."
      ]
    },
    {
      id: "g7.fall.hist.w7.d1.q5",
      type: "short_answer",
      stem: "Build a BRANCHING cause-and-effect chain (not just a straight line) for a topic you know: include at least one event that has two causes OR leads to two effects, and label each link.",
      rubric: {
        level3: "A logically connected chain with at least one genuine branch (two causes into one event OR two effects out of one event), each link explained.",
        level2: "A chain with a branch but one connection is weak or one link is unexplained.",
        level1: "A straight single-line chain with no branch, or links that don't connect causally."
      },
      exemplar: "Cheap printing + rising literacy → more people read pamphlets → ideas spread fast, which led to BOTH (a) religious reform movements AND (b) new demands for schools. Two causes feed the reading boom, and that boom branches into two different effects.",
      hintLadder: [
        "Start with an event that had more than one cause.",
        "Draw two arrows INTO it, or two arrows OUT of it.",
        "Write the 'why' on each link so it reads as an explanation."
      ]
    }
  ],
  reflectionPrompt: "Think of a decision or event in your own week that had more than one cause. Which cause was truly necessary, and which just made it more likely?",
  misconceptionBank: [
    {
      id: "single-cause-thinking",
      label: "Assumes every event has just one cause",
      description: "Looks for a single reason when most historical events result from several interacting causes.",
      coachMove: "Ask 'what else contributed?' and run the removal test on each cause until the necessary vs. contributing distinction is clear."
    },
    {
      id: "necessary-equals-only",
      label: "Thinks a necessary cause is the ONLY cause",
      description: "Confuses 'the event couldn't happen without it' with 'this alone caused it.'",
      coachMove: "Point out that a necessary cause often still needs contributing causes present to produce the full effect."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather: Necessary or Contributing?",
      prompt:
        "Would you rather be the ONE necessary cause an event couldn't happen without, or one of SEVERAL contributing causes that together made it far bigger? Pick one and defend which really shapes history more.",
      answer:
        "There's no wrong pick! A necessary cause is the on/off switch — remove it and nothing happens. Contributing causes are the volume dial — they decide how big or fast the event grows. Real history usually needs both.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Multi-Cause Web",
      challenge:
        "Take a real historical event and build a cause WEB (not a straight line) that shows at least two causes feeding into it, labeling each as necessary or contributing.",
      steps: [
        "Pick an event and write it in a center box.",
        "Draw 2-3 arrows INTO it, one per cause, from labeled boxes.",
        "Tag each incoming cause 'necessary' or 'contributing' and write why.",
        "Add one arrow OUT of the event to a downstream effect, so the web shows cause AND consequence."
      ],
      deliverable: "A cause web with 2+ labeled causes (each tagged necessary/contributing) and at least one downstream effect.",
      choiceBoard: [
        "Draw it as an autumn leaf whose veins are the causes feeding one stem.",
        "Build it digitally with connected shapes and colored tags.",
        "Record a 45-second narration walking through each cause and its tag."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Multi-Cause Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.hist.w7.d1.arena1",
          type: "multiple_choice",
          stem: "A historian writes: 'Without the failed harvest there would have been no famine, but the export policy made the famine far deadlier.' In this analysis, the export policy is best described as a...",
          choices: [
            "necessary cause of the famine",
            "contributing cause that worsened the effect",
            "cause that happened after the famine",
            "cause with no real impact"
          ],
          answerIndex: 1,
          explanation: "The famine could still occur without the export policy (the failed harvest is necessary), but the policy made it deadlier — that is a contributing cause.",
          hintLadder: [
            "Which cause could the famine NOT happen without? That one is necessary.",
            "The export policy 'made it far deadlier' — did the famine need it to exist?",
            "It worsened the effect without being required, so it is contributing."
          ]
        },
        {
          id: "g7.fall.hist.w7.d1.arena2",
          type: "short_answer",
          stem: "Choose a real historical event with several causes. Rank its causes from most to least important, and defend your #1 choice using the removal test.",
          rubric: {
            level3: "Names a real event, ranks at least three causes, AND defends the #1 cause with an explicit removal-test argument.",
            level2: "Ranks causes but the defense of #1 is thin or doesn't use the removal test.",
            level1: "Lists causes without ranking or reasoning."
          },
          exemplar: "For the American Revolution I rank: (1) colonial resentment of taxation without representation, (2) Enlightenment ideas about self-rule, (3) the cost of British wars. #1 wins the removal test: strip away the sense that taxes were imposed without consent and the other factors lose their spark — colonists needed a concrete grievance to rally around.",
          hintLadder: [
            "Pick an event you've studied with three or more causes.",
            "Order them by how much each mattered.",
            "For your #1, argue what would change if you removed it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: The Converging Wave",
      prompt:
        "Two 'causes' converge into one effect: sweep your right arm inward, then your left arm inward so they meet at your chest (the effect), then push both hands forward (the consequence). Repeat 4 times, faster each round.",
      scienceTieIn: "Coordinating two limbs to arrive at the same point trains bilateral motor control — your brain is literally merging two input streams into one action, just like a multi-causal chain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Trace a branching chain from your own week: pick one event, name two causes that fed into it, and one effect it later produced.",
      badge: { id: "g7-fall-multi-cause-mapper", name: "Multi-Cause Mapper", emoji: "🕸️" },
      estimatedMinutes: 7
    }
  }
};
