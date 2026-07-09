// Grade 7 Science — Fall Expedition, Week 1 (Back to Basics), Day 2.
// Grade 7 counterpart of g6.fall.sci.w1.d2. Same "observation and evidence"
// topic, raised to Grade 7: comparing two data sources, building longer
// evidence chains, and drawing inferences from data.

export const fallG7ScienceW1D2 = {
  id: "g7.fall.sci.w1.d2",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Science",
  topic: "Reading the season — observation, evidence, and data inference",
  topicTag: "observation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-4", "NGSS.MS-ETS1-1"],
  hook: "Leaves turn, days shorten, animals get busy. Today you sharpen the scientist's core skills at grade-7 level: separating observation from inference, weighing two sources against each other, and drawing a conclusion that data actually supports.",
  miniLesson: [
    "An observation is sensed directly ('the maple's leaves are red'). An inference explains it ('shorter nights triggered the color change'). A conclusion is an inference the evidence collectively supports.",
    "When two sources disagree, compare them: which uses measured data, which covers a longer span, which could be biased? Stronger evidence comes from repeated, measurable observations — not a single anecdote.",
    "Fall color and dormancy are triggered mostly by shortening daylight (photoperiod), which plants sense reliably every year; temperature shifts the shade and timing but is not the main cue. A good claim links the trigger to the observed change with a clear chain of evidence."
  ],
  workedExample: {
    prompt: "Source A logs sunrise/sunset for 30 days and shows daylight dropping steadily. Source B is one gardener's blog saying 'the frost turned my leaves overnight.' Which better supports the claim that daylight drives fall color, and why?",
    steps: [
      "Identify the observations in each: A gives measured daily daylight; B gives a single memory of one night.",
      "Weigh them: A is repeated, measurable, and spans weeks; B is one unmeasured anecdote that could be coincidence.",
      "Build the chain: steadily shrinking daylight (measured) → trees sense photoperiod → chlorophyll breaks down → color appears before frost.",
      "Conclude: Source A better supports the claim because measured, repeated data beats a single anecdote."
    ],
    answer: "Source A — measured, repeated daylight data supports the daylight-trigger claim more strongly than one anecdote about frost."
  },
  items: [
    {
      id: "g7.fall.sci.w1.d2.q1",
      type: "multiple_choice",
      stem: "Two sources describe why a pond froze early. Which is the STRONGER piece of evidence for a scientific claim?",
      choices: [
        "A logger's 14-day table of measured water temperatures showing a steady drop below freezing.",
        "A neighbor says 'ponds always freeze early when geese leave.'",
        "A social-media post predicting a harsh winter.",
        "A story about one very cold morning last year."
      ],
      answerIndex: 0,
      explanation: "The 14-day temperature table is measured, repeated data over time — stronger than a saying, a prediction, or a single memory.",
      hintLadder: [
        "Stronger evidence is measurable and repeated, not a one-time story.",
        "Which option gives numbers gathered over many days?",
        "The measured 14-day temperature table wins."
      ]
    },
    {
      id: "g7.fall.sci.w1.d2.q2",
      type: "multiple_choice",
      stem: "What is the MAIN trigger for leaves changing color in fall, and what is the best evidence for it?",
      choices: [
        "The first frost, because leaves change right after a freeze.",
        "Shortening daylight, because leaves begin changing on a predictable schedule each year even before any frost.",
        "Rain, because wet leaves lose their green.",
        "Animals, because deer strip the color as they feed."
      ],
      answerIndex: 1,
      explanation: "Photoperiod (day length) is the main cue; the strongest evidence is that color change follows a predictable annual schedule and often begins before the first frost.",
      hintLadder: [
        "The trigger is something that changes steadily and predictably every year.",
        "Which cue arrives on schedule even before it gets cold?",
        "Shortening daylight — and leaves changing before frost is the evidence."
      ],
      misconceptionsTargeted: ["cold-causes-leaf-color"]
    },
    {
      id: "g7.fall.sci.w1.d2.q3",
      type: "multiple_choice",
      stem: "A report states: 'Geese flew south on Oct 3 (observed by three loggers), so the geese sensed an incoming storm.' Which part is the weakest link in this evidence chain?",
      choices: [
        "That the geese flew south",
        "That three loggers observed it",
        "That it happened on Oct 3",
        "That the geese 'sensed an incoming storm'"
      ],
      answerIndex: 3,
      explanation: "The sighting is a well-witnessed observation, but 'sensed an incoming storm' is an untested inference about WHY — the weakest, unsupported link.",
      hintLadder: [
        "Which part is directly observed, and which part is a guess about cause?",
        "A chain is only as strong as its least-supported link.",
        "The 'sensed a storm' cause is the untested inference."
      ]
    },
    {
      id: "g7.fall.sci.w1.d2.q4",
      type: "numeric",
      stem: "A daylight log shows the region loses about 2.5 minutes of daylight per day in fall. Based on that rate, about how many fewer minutes of daylight are there after 28 days?",
      answer: 70,
      tolerance: 0,
      unit: "minutes",
      hintLadder: [
        "This is a proportional rate: multiply minutes per day by the number of days.",
        "2.5 minutes/day × 28 days.",
        "2.5 × 28 = 70 minutes."
      ],
      explanation: "At a steady rate of 2.5 min/day, 2.5 × 28 = 70 fewer minutes of daylight after 28 days."
    },
    {
      id: "g7.fall.sci.w1.d2.q5",
      type: "short_answer",
      stem: "Go to a window or step outside. Write ONE measurable observation about fall where you are, then build a two-link evidence chain to a testable conclusion (observation → reasoning → conclusion).",
      rubric: {
        level3: "Gives a clear, measurable observation AND a two-link chain (observation → reasoning → testable conclusion) that stays logically connected.",
        level2: "Gives an observation and a conclusion but the chain has only one link or a gap in the reasoning.",
        level1: "Gives only an observation, or states an opinion/feeling with no reasoning chain."
      },
      exemplar: "Observation: the oak on my street has dropped about a third of its leaves this week. Reasoning: daylight has been shrinking steadily, and less light means the tree slows chlorophyll production and sheds leaves. Conclusion: leaf drop tracks daylight, which I could test by logging fallen leaves against sunset times for two weeks.",
      hintLadder: [
        "Start with something you can measure or count right now.",
        "Add a reasoning step that connects it to a known fall cause.",
        "End with a conclusion you could actually test."
      ]
    }
  ],
  reflectionPrompt: "Think of two sources that once disagreed about a fall or weather fact. Which had stronger evidence, and how could you tell?",
  misconceptionBank: [
    {
      id: "cold-causes-leaf-color",
      label: "Thinks cold alone causes leaves to change",
      description: "Believes temperature is the only trigger and ignores that color often starts before the first frost.",
      coachMove: "Show a daylight log next to a frost date: leaves begin changing before the freeze, so the steady annual cue is photoperiod, not cold alone."
    },
    {
      id: "anecdote-over-data",
      label: "Weighs a vivid anecdote over measured data",
      description: "Treats one memorable story as stronger evidence than repeated measurements.",
      coachMove: "Ask which source is repeated and measurable — a single striking story is not stronger than weeks of logged data."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Weigh the Two Sources",
      prompt:
        "Source A: a 30-day table of measured daily high temperatures. Source B: a friend saying 'this fall feels way colder than last year.' Which source better supports a claim that this fall is colder, and what makes it stronger?",
      answer: "Source A — it's measured and repeated over 30 days, so you can actually compare the numbers. Source B is one person's feeling (an anecdote) that could be biased by memory.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Two-Source Fall Investigation",
      challenge:
        "Become a field scientist for 15 minutes. Gather TWO kinds of evidence about a fall change near you and judge which source better supports a conclusion.",
      steps: [
        "Pick one fall change to investigate (leaf drop, temperature, daylight, or animal activity).",
        "Record Source 1: your own measured or counted observations right now.",
        "Record Source 2: a second source (a weather app, an almanac, a family member's account) about the same thing.",
        "Compare the two in writing and state which better supports your conclusion, and why."
      ],
      deliverable: "A two-source comparison page ending in a conclusion, with a sentence explaining which source was stronger evidence and why.",
      choiceBoard: [
        "Make a side-by-side chart: Source 1 vs Source 2, with a 'stronger evidence' verdict.",
        "Write the investigation as a short nature-detective case file.",
        "Sketch a labeled diagram of the change with data notes from both sources."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Evidence Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.sci.w1.d2.arena1",
          type: "multiple_choice",
          stem: "Two claims are made about early bird migration. Which is best supported by an evidence CHAIN rather than a single observation?",
          choices: [
            "I saw one flock leave, so all birds must be gone.",
            "The birds left because they didn't like our yard.",
            "Daylight shortened steadily (logged), insects declined (counted), and banded birds departed each of the last 3 years on similar dates — so shrinking daylight and food drive the timing.",
            "A blog said birds always leave in October."
          ],
          answerIndex: 2,
          explanation: "Option 2 links measured daylight, counted food supply, and multi-year banding data into a connected chain — far stronger than one sighting, a guess, or an unsourced blog.",
          hintLadder: [
            "Look for the option with several connected, measured links.",
            "Which one uses more than one kind of data over time?",
            "The logged daylight + counted insects + multi-year banding chain is strongest."
          ]
        },
        {
          id: "g7.fall.sci.w1.d2.arena2",
          type: "numeric",
          stem: "A daylight log shows a steady loss of 3 minutes of daylight per day. Based on that rate, how many fewer minutes of daylight are there after 24 days?",
          answer: 72,
          tolerance: 0,
          unit: "minutes",
          hintLadder: [
            "Multiply the daily rate by the number of days (a proportional relationship).",
            "3 minutes/day × 24 days.",
            "3 × 24 = 72 minutes."
          ],
          explanation: "At 3 min/day, 3 × 24 = 72 fewer minutes of daylight after 24 days."
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five-Senses Evidence Scan",
      prompt:
        "Sit still and slowly gather 'sensory data': name one thing you can see, one you can hear, one you can feel, one you can smell, and take one calming breath — noticing which are observations and which tempt you to infer.",
      scienceTieIn: "Slowing down to log each sense lowers your stress response and sharpens attention — the same careful, repeated observation strong scientific evidence depends on.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write one measurable fall observation from today, then one conclusion it supports — and name one thing that would make your evidence even stronger.",
      badge: { id: "g7-fall-evidence-weigher", name: "Evidence Weigher", emoji: "🍁" },
      estimatedMinutes: 7
    }
  }
};
