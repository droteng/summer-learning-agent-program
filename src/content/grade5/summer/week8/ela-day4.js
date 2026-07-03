// Grade 5 Summer ELA/Writing — Week 8 (Capstone Week), Day 4.
// Grade-5 counterpart of g6.ela.w8.d4 (revision + feedback), pitched down one
// level: simpler "re-see" idea, vocab support, concrete before/after examples,
// friendly feedback moves, celebratory capstone tone.

export const summerG5ElaW8D4 = {
  id: "g5.summer.ela.w8.d4",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Revision and feedback",
  topicTag: "capstone-revision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.5", "CCSS.ELA-LITERACY.W.5.4"],
  hook: "Today you make your project BETTER — by cutting what's weak and adding what's missing. Get one piece of real feedback before you wrap!",
  keyTerms: [
    { term: "Revise", definition: "To 're-see' your work — look again with fresh eyes to make it better." },
    { term: "Feedback", definition: "What someone tells you about your work to help you improve it." },
    { term: "Specific", definition: "Exact and clear, like '5,000 people' instead of 'a lot of people.'" }
  ],
  miniLesson: [
    "Revise means 're-see.' Read your Day-3 draft like your audience would. Where do they get lost? Where do they get bored?",
    "Fill your placeholders with the strongest, most specific example you can find. Specific almost always beats general.",
    "Get one piece of feedback. Ask a parent or sibling: 'What's the main thing I'm trying to say? What's confusing?' Then LISTEN — don't argue."
  ],
  workedExample: {
    prompt:
      "Maya's poster has '[fact needed]' in the pollen section. How does she fix it?",
    steps: [
      "Look at her research notes: a bee can carry pollen from flower to flower.",
      "Replace [fact needed] with: 'Bees carry pollen on their legs, and that helps flowers make seeds.'",
      "Add where it came from: 'National Geographic Kids says so.'",
      "Re-read the section. Does the audience now understand what bees do? Yes!"
    ],
    answer: "The placeholder is filled with a specific fact plus a source."
  },
  items: [
    {
      id: "g5.summer.ela.w8.d4.q1",
      type: "multiple_choice",
      stem: "What does the word 'revise' really mean?",
      choices: [
        "Reading it out loud.",
        "Re-seeing — looking at it again with fresh eyes.",
        "Making it longer.",
        "Adding pictures."
      ],
      answerIndex: 1,
      explanation: "Re + vise = see again. The point is fresh eyes, not just tiny edits.",
      hintLadder: [
        "Break the word apart: re + vise.",
        "'Vise' comes from 'vision,' which means seeing.",
        "It means to see again."
      ]
    },
    {
      id: "g5.summer.ela.w8.d4.q2",
      type: "multiple_choice",
      stem: "Which change makes your writing STRONGEST?",
      choices: [
        "Change 'good' to 'great.'",
        "Change 'a lot of people' to 'over 5,000 people' and add where you found it.",
        "Add more describing words.",
        "Make everything bold."
      ],
      answerIndex: 1,
      explanation: "A specific number plus a source turns a plain claim into real evidence.",
      hintLadder: [
        "Which change adds a real fact?",
        "Numbers and sources beat extra words.",
        "'5,000 people' plus a source wins."
      ]
    },
    {
      id: "g5.summer.ela.w8.d4.q3",
      type: "multiple_choice",
      stem: "Your sibling says: 'The middle was confusing.' Your BEST response is:",
      choices: [
        "'You just don't get it.'",
        "'Thanks — can you show me which part got confusing?'",
        "Ignore them.",
        "Say it again the same way, but louder."
      ],
      answerIndex: 1,
      explanation: "Asking a follow-up turns vague feedback into helpful, specific feedback. Arguing shuts the door.",
      hintLadder: [
        "Don't argue — dig for more.",
        "Ask a follow-up question.",
        "Ask them to point to WHERE."
      ],
      misconceptionsTargeted: ["defends-the-draft"]
    },
    {
      id: "g5.summer.ela.w8.d4.q4",
      type: "short_answer",
      stem:
        "When you revise, some things are good to CUT. Name one KIND of sentence that's good to cut, and explain why cutting it makes your project stronger.",
      rubric: {
        level3: "Names a cut-worthy kind of sentence (a repeat, filler, or off-topic line) and explains that cutting it keeps only the parts that do real work.",
        level2: "Names something to cut but the reason is vague.",
        level1: "Says to cut a strong part (like the best fact) or gives no real reason."
      },
      exemplar:
        "A sentence that just repeats the one before it is good to cut. It adds nothing new, so cutting it leaves only the parts that really help the reader.",
      hintLadder: [
        "Cut what adds nothing new.",
        "A repeat or filler line adds nothing new.",
        "Name that kind of sentence and say why cutting it helps."
      ]
    },
    {
      id: "g5.summer.ela.w8.d4.q5",
      type: "short_answer",
      stem:
        "Find ONE weak spot in your Day-3 draft. Write what it is, why it's weak, and how you'll fix it.",
      rubric: {
        level3: "Points to a specific sentence or part, names why it's weak (vague, missing a fact, off-topic), and gives a clear fix.",
        level2: "Names a weak spot but the fix is vague.",
        level1: "Just 'make it better,' with no specific weak spot."
      },
      exemplar:
        "Weak spot: my intro says 'bees are good' — too vague. Why: it doesn't tell the reader anything to picture. Fix: 'Bees carry pollen that helps flowers make seeds and grow.'",
      hintLadder: [
        "Point to one exact sentence.",
        "Say what's weak about it (vague, no fact, repeats).",
        "Write the stronger version."
      ]
    }
  ],
  reflectionPrompt: "Today you got fresh eyes on your work. What one change made your project the most better?",
  misconceptionBank: [
    {
      id: "defends-the-draft",
      label: "Argues instead of asking follow-ups",
      description: "Argues with the person giving feedback instead of asking them to point out the exact problem.",
      coachMove: "Practice saying 'tell me more' before 'but I meant...'. Specific feedback is gold."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Hear It Now or at the Showcase?",
      prompt:
        "Would you rather a family member tells you 'the middle is confusing' TODAY in private, or notices it for the first time DURING your Friday showcase? Why?",
      answer: "Today, in private! Early feedback is a gift — you still have time to fix it before the real audience sees it. Feedback at the showcase is too late to use.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Before-and-After Showcase",
      challenge:
        "Pick the weakest sentence or part in your draft and make it stronger. Then show the BEFORE and the AFTER side by side so the upgrade is easy to see.",
      steps: [
        "Copy your weakest original sentence as the 'before.'",
        "Rewrite it stronger — add a specific number, example, or source.",
        "Put the before and after side by side.",
        "Write one line naming exactly what got better."
      ],
      deliverable: "A before/after pair with a one-line note on what improved.",
      choiceBoard: [
        "Make a two-column before/after poster.",
        "Record a 30-second 'watch this sentence level up' clip.",
        "Color the change and write why it's better."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Revision Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.ela.w8.d4.arena1",
          type: "multiple_choice",
          stem: "Which is the STRONGEST fix for the vague sentence 'A lot of kids like our library'?",
          choices: [
            "Many, many kids really like our library a lot.",
            "Last month, 312 kids checked out books — 40 more than in spring (library log).",
            "Our awesome, amazing library is super popular.",
            "Kids like the library, probably."
          ],
          answerIndex: 1,
          explanation: "It swaps a vague claim for a real number and a source. The others just add more describing words without any facts.",
          hintLadder: [
            "Strong fixes add facts, not extra words.",
            "Look for a real number AND where it came from.",
            "It's the one with 312 kids and the library log."
          ]
        },
        {
          id: "g5.summer.ela.w8.d4.arena2",
          type: "short_answer",
          stem: "Name ONE real weak spot in your draft, explain WHY it's weak, and write the exact fix you'll make.",
          rubric: {
            level3: "Names a specific sentence or part, gives a clear reason it's weak (vague, no fact, repeats, off-topic), AND writes a clear fix.",
            level2: "Names a weak spot but the reason or the fix is vague.",
            level1: "Just 'make it better,' with no specific weak spot or fix."
          },
          exemplar: "Weak spot: my intro says 'bees are good' — too vague. Why: it gives the reader nothing to picture. Fix: 'Bees carry pollen that helps flowers make seeds.'",
          hintLadder: [
            "Point to one exact sentence or part.",
            "Say what's wrong (vague, repeats, no fact).",
            "Write the exact stronger version."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Fresh-Eyes Breathing",
      prompt:
        "Look away from your work, find something far across the room, and breathe slowly — 4 counts in, 4 counts out, five times. Then look back at your draft with fresh eyes.",
      scienceTieIn: "Looking at something far away relaxes the eye muscles tired from close work, and slow breathing calms you so you notice details you skimmed before.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You got fresh eyes on your work today! What one change made your project the most better, and how did the feedback help?",
      badge: { id: "g5-summer-revision-virtuoso", name: "Revision Virtuoso", emoji: "🔧" },
      estimatedMinutes: 7
    }
  }
};
