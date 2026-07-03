// Grade 7 ELA/Writing — Spring Expedition, Week 8 (Spring Showcase), Day 1.
// Topic: plan your renewal-themed capstone — this Grade 7 version pitches ONE
// LEVEL UP from Grade 6: a THESIS-DRIVEN capstone with a driving question,
// audience analysis, and measurable success criteria. This is the opening of
// the final week of the final Grade 7 season — the whole program builds here.

export const springG7ElaW8D1 = {
  id: "g7.spring.ela.w8.d1",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your renewal-themed capstone",
  topicTag: "capstone-planning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.5", "CCSS.W.7.4"],
  hook: "This is the last week of your entire journey at Dr. Spark Academy — and it ends with a capstone you architect. Today you plan it like a real project designer: sharpen a driving question into a thesis, analyze the audience you'll persuade, and define success criteria you can actually measure.",
  miniLesson: [
    "A DRIVING QUESTION becomes a THESIS. Grade 6 narrows scope; you go further: turn 'how a seed becomes a plant' into an arguable claim — 'small daily changes, not a single event, drive a seed's transformation.' A thesis takes a position you can defend with evidence.",
    "AUDIENCE ANALYSIS is more than naming who watches. Ask what they already believe, what might resist your claim, and what evidence will move them. A skeptical adult and a curious younger student need different framing of the SAME thesis.",
    "MEASURABLE SUCCESS CRITERIA are checkable AND tied to evidence quality: not just 'shows a life cycle,' but 'defends the thesis with at least three of my own data points and one counter-argument addressed.' Set them before you build so you can revise against them all week."
  ],
  workedExample: {
    prompt: "Turn a vague idea — 'plants' — into a thesis-driven capstone plan.",
    steps: [
      "Sharpen the driving question: 'What actually drives a bean seed's growth over 3 weeks?'",
      "State a thesis: 'A bean's growth is driven by steady daily conditions compounding, not by any single dramatic moment.'",
      "Analyze the audience: 'My family may think growth is sudden; I'll show gradual data to shift that belief.'",
      "Write 2 measurable criteria: 'defends the thesis with 3+ of my own daily measurements' and 'addresses one alternative explanation.'"
    ],
    answer: "Thesis: steady daily conditions compound to drive growth. Audience: family (expects sudden growth). Criteria: 3+ own measurements defending the thesis + one alternative explanation addressed."
  },
  items: [
    {
      id: "g7.spring.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "Which of these is a THESIS (an arguable claim) rather than just a topic or question?",
      choices: [
        "My capstone is about how caterpillars change.",
        "How does a caterpillar become a butterfly?",
        "Metamorphosis proves that dramatic change is really built from many small, ordered stages — not one sudden leap.",
        "Caterpillars and butterflies are interesting."
      ],
      answerIndex: 2,
      explanation: "A thesis takes a defendable position. The others are a topic, a question, and an opinion with nothing to defend — only the third makes a claim you could argue with evidence.",
      hintLadder: [
        "A thesis is something someone could disagree with and you'd defend.",
        "Which one makes a CLAIM, not just names a subject?",
        "The metamorphosis statement argues a position you can back with evidence."
      ]
    },
    {
      id: "g7.spring.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Why does AUDIENCE ANALYSIS (not just naming the audience) strengthen a Grade 7 capstone?",
      choices: [
        "It doesn't change anything about the project.",
        "It reveals what the audience already believes and might resist, so you can choose evidence that actually shifts them.",
        "It only affects how long the project is.",
        "It matters solely for the final grade."
      ],
      answerIndex: 1,
      explanation: "Analyzing what an audience already thinks — and where they'll push back — lets you select framing and evidence that genuinely persuades, rather than presenting into a vacuum.",
      hintLadder: [
        "Naming the audience is step one; analysis asks what they THINK.",
        "How does knowing their beliefs change your evidence choices?",
        "You pick evidence to shift what they already believe or resist."
      ],
      misconceptionsTargeted: ["audience-is-just-a-label"]
    },
    {
      id: "g7.spring.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "Which is the strongest MEASURABLE success criterion for a thesis-driven capstone?",
      choices: [
        "Make the project really good.",
        "Try my hardest and be creative.",
        "Defends my thesis with at least three of my own data points AND addresses one alternative explanation.",
        "Include lots of pictures."
      ],
      answerIndex: 2,
      explanation: "It's checkable (count the data points, find the counter-argument) AND tied to evidence quality that supports the thesis — the mark of Grade 7 rigor.",
      hintLadder: [
        "A criterion must be something you can COUNT or CHECK.",
        "Which one ties directly to defending a thesis with evidence?",
        "The three-data-points-plus-alternative criterion is measurable and thesis-linked."
      ]
    },
    {
      id: "g7.spring.ela.w8.d1.q4",
      type: "short_answer",
      stem: "Write a one-sentence THESIS for your renewal-themed capstone: state an arguable claim about growth, renewal, or a living system that you could defend with your own evidence.",
      rubric: {
        level3: "States a focused, arguable claim (a position, not just a topic or question) about growth/renewal/life that could be defended with evidence and finished this week.",
        level2: "States a topic or question but not a defendable claim, or the claim is too broad to support.",
        level1: "Off-topic, or so broad or vague it makes no argument at all."
      },
      exemplar: "The sunflower I planted this spring shows that growth is driven by consistent daily light and water compounding over time, not by any single dramatic day.",
      hintLadder: [
        "Start from your driving question, then take a POSITION on it.",
        "Make it something a reasonable person could disagree with.",
        "Say the arguable claim in one clear sentence you could defend with your data."
      ]
    },
    {
      id: "g7.spring.ela.w8.d1.q5",
      type: "short_answer",
      stem: "Analyze your AUDIENCE and write TWO measurable success criteria. Name who they are, ONE thing they likely already believe or might resist, and two checkable, evidence-tied goals.",
      rubric: {
        level3: "Names a specific audience, identifies a belief/resistance to address, AND lists two measurable, evidence-tied success criteria.",
        level2: "Covers the audience with some analysis but one criterion is vague or not measurable, or the belief/resistance is missing.",
        level1: "No clear audience analysis, or criteria that cannot be checked."
      },
      exemplar: "Audience: my family and Grade 7 group. They likely think plants 'just grow' suddenly, so I'll counter that. Criteria: (1) I defend my thesis with at least three of my own daily height measurements in a graph; (2) I address one alternative explanation (like 'it was just warm weather').",
      hintLadder: [
        "Who watches, and what do they already assume about your topic?",
        "Name one belief you'll need to shift or a pushback you'll face.",
        "Write two goals a friend could verify — each tied to your evidence."
      ]
    }
  ],
  reflectionPrompt: "You've learned across four full seasons to reach this final week. What arguable idea about growth or renewal do you most want to PROVE — not just show — in your capstone, and what evidence makes it undeniable?",
  misconceptionBank: [
    {
      id: "audience-is-just-a-label",
      label: "Treats audience as a label, not an analysis",
      description: "Names who will watch but never considers what they believe, resist, or need — so the framing and evidence don't actually persuade.",
      coachMove: "Ask: 'What does this audience already think, and what would make them change their mind?' Choose framing and evidence around that, not just a name."
    },
    {
      id: "topic-mistaken-for-thesis",
      label: "Confuses a topic or question with a thesis",
      description: "Writes 'my project is about plants' or 'how do plants grow?' and thinks that's a claim, so there's nothing to defend.",
      coachMove: "Turn the topic into a sentence someone could argue with: take a position, then ask 'could a reasonable person disagree?' If not, it isn't a thesis yet."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Topic or Thesis?",
      prompt:
        "Would you rather title your capstone 'All About Plants' OR 'Growth Is Built From Small Daily Changes — And My Bean Seed Proves It'? Which one gives you something to DEFEND, lets you go deep, and makes an audience curious — and why?",
      answer:
        "The second. It states an arguable claim you can defend with evidence and go deep on, while 'All About Plants' is a bottomless topic with nothing to argue. A thesis with a defendable position makes a far stronger capstone.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Thesis Blueprint",
      challenge:
        "Design a one-page blueprint for your thesis-driven capstone. Put your arguable thesis at the center, add an audience-analysis box, and list measurable, evidence-tied success criteria as a checklist you'll revise against all week.",
      steps: [
        "Write your arguable thesis in a bubble in the center of the page.",
        "Add an 'audience analysis' box: who they are AND one belief or pushback you'll address.",
        "List 3 measurable success criteria (each countable or checkable) with empty boxes to tick.",
        "Add a spring/renewal decoration so your blueprint feels like a launch."
      ],
      deliverable: "A one-page capstone blueprint: arguable thesis, audience analysis, and a 3-item measurable success checklist.",
      choiceBoard: [
        "Draw the blueprint as a labeled mind-map with the thesis at the hub.",
        "Type it as a project 'contract' with a thesis statement you sign and date.",
        "Record a 60-second pitch that states your thesis and how you'll defend it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Planning Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "A student's capstone plan reads: 'I'll explain how nature works.' What is the BIGGEST weakness for a Grade 7 thesis-driven project?",
          choices: [
            "It is far too specific and narrow.",
            "It states no arguable claim and its scope is limitless — there's nothing to defend and no way to finish.",
            "It names too many measurable criteria.",
            "It analyzes the audience too deeply."
          ],
          answerIndex: 1,
          explanation: "It's both unfocused AND thesis-less: 'how nature works' is limitless and makes no defendable claim. A strong capstone narrows to one arguable position backed by evidence.",
          hintLadder: [
            "Could anyone finish — or ARGUE — a project about all of 'how nature works'?",
            "Two problems overlap: no claim to defend and no boundary.",
            "It states no arguable thesis and its scope is limitless."
          ]
        },
        {
          id: "g7.spring.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Take this weak plan — 'a project about growing' — and rewrite it as a strong Grade 7 capstone plan with an arguable thesis, a brief audience analysis, and one measurable success criterion.",
          rubric: {
            level3: "Produces an arguable thesis, an audience analysis with a belief/resistance, AND one measurable success criterion — all three clearly present.",
            level2: "Improves the plan but one of the three parts is missing, vague, or not actually arguable/measurable.",
            level1: "Still broad or non-arguable, or missing audience analysis and criteria."
          },
          exemplar: "Thesis: my radish seeds prove that sprouting is a chain of small ordered stages, not one sudden event. Audience: my family, who think sprouts 'just appear' overnight. Success criterion: I document all four sprouting stages with a dated photo and one measurement each.",
          hintLadder: [
            "First turn 'growing' into an arguable claim you could defend.",
            "Then name the audience and one thing they'll assume or resist.",
            "Add one goal a friend could count or check by looking."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow From a Seed",
      prompt:
        "Curl up small like a seed. Slowly 'sprout' — rise up, unfold your arms like leaves reaching for the sun, and stand tall and proud. Then shrink back to a seed. Repeat 4 times, standing a little taller each round as your thesis 'takes root.'",
      scienceTieIn: "Stretching upward lengthens your spine and boosts blood flow to your brain — a real burst of energy and focus, just like a seedling reaching for spring light.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "This is the final week of your whole journey of learning. What arguable renewal-themed claim did you choose to defend in your capstone, and why does proving it matter to YOU?",
      badge: { id: "g7-spring-capstone-strategist", name: "Capstone Strategist", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
