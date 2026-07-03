// Grade 7 ELA/Writing — Fall Expedition, Week 5 (Persuasive Voices), Day 5.
// Topic: revise your multi-paragraph persuasive letter. Week capstone — bring
// claim, reasons, evidence, counterargument, rebuttal, and audience together,
// then revise a full draft with a strong concluding call to action.

export const fallG7ElaW5D5 = {
  id: "g7.fall.ela.w5.d5",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Revise your multi-paragraph persuasive letter",
  topicTag: "revision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.5", "CCSS.ELA-LITERACY.W.7.1.E"],
  hook: "Strong writing isn't written — it's rewritten. Today you revise a multi-paragraph persuasive draft: sharpen the claim, strengthen weak evidence, make sure the counterargument is actually answered, and end with a conclusion that follows from your argument and calls the reader to act.",
  miniLesson: [
    "Revising is different from editing: editing fixes spelling and grammar; revising improves ideas, structure, evidence, and clarity across whole paragraphs.",
    "Check the backbone of a multi-paragraph argument: clear claim → each body paragraph has a reason with real evidence → a counterargument is named AND rebutted → nothing is off-topic.",
    "A Grade 7 conclusion does more than stop: it FOLLOWS FROM the argument (restates the claim in fresh words, reminds the reader of the strongest evidence) and ends with a specific call to action."
  ],
  workedExample: {
    prompt: "A draft ends: 'So that's my opinion. Bye.' Improve it into a conclusion that follows from the argument and calls the reader to act.",
    steps: [
      "A weak ending just stops; a strong one ties back to the evidence and asks for something.",
      "Restate the claim in fresh words and nod to the strongest evidence.",
      "Name the specific, doable action you want — and when.",
      "Result: 'The 22 kids I counted crossing Maple Street every afternoon can't wait. Please approve the lighted crosswalk at next month's town meeting, before winter darkness makes that crossing even more dangerous.'"
    ],
    answer: "The 22 kids I counted crossing Maple Street every afternoon can't wait. Please approve the lighted crosswalk at next month's town meeting, before winter darkness makes that crossing even more dangerous."
  },
  items: [
    {
      id: "g7.fall.ela.w5.d5.q1",
      type: "multiple_choice",
      stem: "What's the difference between REVISING and EDITING a persuasive essay?",
      choices: [
        "They are the same thing",
        "Revising improves ideas, evidence, and structure; editing fixes spelling and grammar",
        "Editing improves the argument; revising fixes commas",
        "Neither one changes the essay"
      ],
      answerIndex: 1,
      explanation: "Revising reworks content, evidence, and organization; editing cleans up mechanics like spelling and punctuation.",
      hintLadder: [
        "One is about ideas and structure, the other about mechanics.",
        "Which one fixes spelling and punctuation?",
        "Revising = ideas/evidence; editing = grammar."
      ]
    },
    {
      id: "g7.fall.ela.w5.d5.q2",
      type: "multiple_choice",
      stem: "While revising, you notice your draft NAMES the opposing view but never answers it. What's the best fix?",
      choices: [
        "Delete the opposing view so no one notices it",
        "Add a rebuttal that concedes what's fair and explains why your claim still holds",
        "Make the opposing view longer and end there",
        "Leave it — naming the other side is enough"
      ],
      answerIndex: 1,
      explanation: "A counterargument left unanswered helps the other side. Revising means adding a rebuttal that responds to it, so your claim survives.",
      hintLadder: [
        "A named counterargument needs a response.",
        "Deleting it hides from the issue; you should answer it.",
        "Add a rebuttal that concedes and then defends."
      ],
      misconceptionsTargeted: ["counter-without-rebuttal"]
    },
    {
      id: "g7.fall.ela.w5.d5.q3",
      type: "multiple_choice",
      stem: "Which is the strongest CONCLUSION for a Grade 7 persuasive letter?",
      choices: [
        "Thanks for reading my letter.",
        "That is all I wanted to say.",
        "Later start times gave the students in the pilot school an extra 30 minutes of sleep and fewer absences — please vote to adopt an 8:30 start at next week's board meeting.",
        "I have a lot of feelings about school."
      ],
      answerIndex: 2,
      explanation: "It restates the claim, nods to the strongest evidence (the pilot results), and ends with a specific, timed call to action — a conclusion that follows from the argument.",
      hintLadder: [
        "A strong conclusion ties back to evidence AND asks for a specific action.",
        "Which option reminds you of the evidence and names an action and time?",
        "The 8:30-start conclusion referencing the pilot results."
      ]
    },
    {
      id: "g7.fall.ela.w5.d5.q4",
      type: "short_answer",
      stem: "Here's a weak body sentence: 'A later start would be good.' Revise it into a full supporting point: make it specific, add evidence, AND connect it back to the claim.",
      rubric: {
        level3: "Rewrites it specifically, adds concrete evidence or a concrete benefit, AND ties the point explicitly back to the claim.",
        level2: "Improves specificity and adds evidence, but doesn't clearly connect back to the claim.",
        level1: "Still vague, no real evidence, or disconnected from the claim."
      },
      exemplar: "A 30-minute later start would give students more sleep — sleep studies show teens who get an extra half hour focus better and miss fewer classes — which is exactly why our school should move first period to 8:30.",
      hintLadder: [
        "What exactly would be 'good,' and by how much?",
        "Add a concrete benefit or fact as evidence.",
        "End by linking it back to your main claim."
      ]
    },
    {
      id: "g7.fall.ela.w5.d5.q5",
      type: "short_answer",
      stem: "Write the final THREE sentences of YOUR persuasive letter: (1) a one-sentence rebuttal that answers the strongest objection, (2) a restatement of your claim tied to your best evidence, and (3) a specific call to action.",
      rubric: {
        level3: "Includes a clear rebuttal that answers the objection, a fresh restatement of the claim linked to strong evidence, AND a specific, doable call to action — three distinct, well-connected sentences.",
        level2: "Has all three elements but one is vague, or two are merged so the argument feels thin.",
        level1: "Missing the rebuttal, the claim restatement, or the call to action."
      },
      exemplar: "Yes, a lighted crosswalk costs money, but that cost is small next to a single child's safety and studies show flashing beacons cut driver non-yielding by more than half. A crosswalk on Maple Street would protect the 22 kids I counted crossing there every afternoon. Please approve it at next month's town meeting, before winter darkness makes the crossing even more dangerous.",
      hintLadder: [
        "Sentence 1: answer your toughest objection (rebuttal).",
        "Sentence 2: restate your claim and nod to your best evidence.",
        "Sentence 3: ask for a specific, doable action."
      ]
    }
  ],
  reflectionPrompt: "Read your finished letter aloud one last time. What single revision this week made it most convincing — sharpening the claim, adding evidence, answering the counterargument, or the call to action?",
  misconceptionBank: [
    {
      id: "longer-is-better",
      label: "Thinks a longer letter is automatically more persuasive",
      description: "Adds extra sentences for length even when they don't support the claim.",
      coachMove: "Have them mark each sentence 'supports the claim?' — cut every 'no.' Tight and focused persuades more."
    },
    {
      id: "counter-without-rebuttal",
      label: "Names the opposing view but never answers it",
      description: "Includes a counterargument to look fair, then leaves it hanging, which actually helps the other side.",
      coachMove: "Ask 'and what do you say back?' Every counterargument needs a rebuttal that concedes what's fair and defends the claim."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Revision Wins?",
      prompt:
        "Your fall letter has a fuzzy main argument, an unanswered counterargument, AND three misspelled words. If you only had time for ONE fix, would you strengthen the argument, answer the counterargument, or fix the spelling — and which actually decides whether you persuade anyone?",
      answer: "Strengthen the argument or answer the counterargument first — those are revising, and they change whether you win the reader. Spelling (editing) matters, but a perfectly spelled letter with a hole in its logic still won't convince.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Before-and-After Argument Upgrade",
      challenge:
        "Take one weak paragraph from your persuasive letter and upgrade it like fall trees trading summer leaves for stronger fall color. Show the 'before' (weak) version and the 'after' (revised) version side by side — and make sure the 'after' adds evidence or answers the counterargument.",
      steps: [
        "Pick one weak or thin paragraph from your draft.",
        "Write the 'before' version on the left.",
        "Revise it: make it specific, add real evidence, or fold in a rebuttal to the counterargument.",
        "Write the 'after' version on the right and label exactly what you strengthened."
      ],
      deliverable: "A before-and-after page showing one paragraph revised, with a note on what changed and why it's more convincing.",
      choiceBoard: [
        "Make a two-column before/after revision chart with your labels.",
        "Draw a 'revision tree' dropping weak words and growing strong evidence.",
        "Record a 40-second clip reading the before and after aloud and naming the upgrade."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Revision Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w5.d5.arena1",
          type: "multiple_choice",
          stem: "A persuasive letter ends: 'Anyway, that's what I think. Bye.' Which revision is the strongest Grade 7 CONCLUSION?",
          choices: [
            "'Thanks for reading my letter.'",
            "'I have lots of feelings about this.'",
            "'A fall recycling program would cut our school's waste — the pilot bins already diverted 200 pounds in one week — so please approve it at next Tuesday's school board meeting.'",
            "'The end.'"
          ],
          answerIndex: 2,
          explanation: "It restates the claim, references the strongest evidence (200 pounds diverted), and ends with a specific, timed call to action — everything a conclusion should do. The others just stop.",
          hintLadder: [
            "A strong conclusion ties back to evidence AND asks for a specific action.",
            "Which option cites real evidence and names an action and time?",
            "The recycling conclusion referencing the 200 pounds and Tuesday's meeting."
          ]
        },
        {
          id: "g7.fall.ela.w5.d5.arena2",
          type: "short_answer",
          stem: "Revise this weak paragraph opener into a full supporting point with evidence AND a link back to the claim: 'A fall festival would be fun.'",
          rubric: {
            level3: "Rewrites it specifically, adds concrete evidence or a number, AND ties the point back to the claim.",
            level2: "Adds specificity and evidence but doesn't clearly connect to the claim.",
            level1: "Still vague with no evidence or link."
          },
          exemplar: "A fall festival would raise money for our library — last year's bake sale alone brought in $400, and a full festival could double that — which is why the school should hold one this October.",
          hintLadder: [
            "What exactly would the festival do, and how much?",
            "Add a concrete benefit or number as evidence.",
            "End by linking it back to your claim."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Falling-Leaf Breath",
      prompt:
        "Imagine a leaf drifting slowly down from a tall fall tree. Breathe in for 4 counts as it lifts on the breeze, and out for 6 slow counts as it settles to the ground. Repeat 5 times.",
      scienceTieIn: "Making your exhale longer than your inhale switches on the body's 'rest' system, calming your mind so you can review your whole argument with fresh eyes.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Read your finished letter aloud one last time. What single revision this week made it the most convincing — sharpening the claim, adding evidence, answering the counterargument, or the call to action — and how do you know?",
      badge: { id: "g7-fall-argument-editor", name: "Argument Editor", emoji: "✏️" },
      estimatedMinutes: 7
    }
  }
};
