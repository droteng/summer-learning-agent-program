// Grade 6 ELA — Week 5, Day 4.
// Topic: research writing — finding and citing reliable sources.

export const grade6ElaWeek5Day4 = {
  id: "g6.ela.w5.d4",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Research writing",
  topicTag: "research-writing",
  estimatedMinutes: 18,
  standardsRefs: ["CCSS.6.W.7", "CCSS.6.W.8"],
  hook: "Inventors and writers both have to back up claims with evidence. Today you spot reliable sources and cite them like a researcher.",
  miniLesson: [
    "Primary source: the original — a scientist's own study, a person's letter, a photo from the event.",
    "Secondary source: someone summarizing or explaining the primary — a textbook, a news article, a Wikipedia page.",
    "Cite sources so your reader can check. A citation names who wrote it, where to find it, and when it was made."
  ],
  workedExample: {
    prompt:
      "You write: 'Sea levels rose 20 cm last century.' Which source is most reliable to cite?",
    steps: [
      "Option A: a NASA climate page citing satellite data.",
      "Option B: a stranger's tweet.",
      "Option C: a blog with no author and no date.",
      "NASA is a primary scientific source with measurements you can trace. Cite that one."
    ],
    answer: "NASA's climate page — primary, authoritative, traceable."
  },
  items: [
    {
      id: "g6.ela.w5.d4.q1",
      type: "multiple_choice",
      stem: "Which is a PRIMARY source about the moon landing?",
      choices: [
        "A history textbook chapter about the 1960s.",
        "Buzz Aldrin's personal mission log from 1969.",
        "A YouTube documentary made in 2020.",
        "A blog post summarizing the textbook."
      ],
      answerIndex: 1,
      explanation: "A personal log written by someone who was there is primary — original, first-hand.",
      hintLadder: [
        "Primary = original, first-hand.",
        "Who was actually there?",
        "Aldrin's log."
      ]
    },
    {
      id: "g6.ela.w5.d4.q2",
      type: "multiple_choice",
      stem: "Which source is LEAST reliable for a science claim?",
      choices: [
        "A peer-reviewed journal article.",
        "An anonymous comment on a video.",
        "A NASA fact sheet.",
        "A textbook from your school."
      ],
      answerIndex: 1,
      explanation: "Anonymous comments can't be checked. The others have known authors and editorial processes.",
      hintLadder: [
        "Which option has no author?",
        "Could you verify the writer?",
        "Anonymous comment is least reliable."
      ]
    },
    {
      id: "g6.ela.w5.d4.q3",
      type: "multiple_choice",
      stem: "A citation should include at least:",
      choices: [
        "The color of the website.",
        "Author (or organization), title, and date.",
        "Whether you liked the source.",
        "Your favorite quote from the source."
      ],
      answerIndex: 1,
      explanation: "Author + title + date is the minimum. With those three, a reader can find the same source.",
      hintLadder: [
        "What does a reader need to find the same source?",
        "Who wrote it, what's it called, when was it made?",
        "Author, title, date."
      ]
    },
    {
      id: "g6.ela.w5.d4.q4",
      type: "multiple_choice",
      stem:
        "You find conflicting claims about the height of Mt. Everest. One source says 8,848 m, another says 8,849 m. Best response:",
      choices: [
        "Pick the one you like more.",
        "Check the dates and source quality — newer measurements may be more accurate.",
        "Average them and don't tell anyone.",
        "Ignore both and guess."
      ],
      answerIndex: 1,
      explanation: "Mt. Everest's measured height has been updated as instruments improved. Check the source quality and date.",
      hintLadder: [
        "When were the measurements taken?",
        "Who measured each?",
        "Newer + more authoritative usually wins."
      ],
      misconceptionsTargeted: ["picks-by-preference"]
    },
    {
      id: "g6.ela.w5.d4.q5",
      type: "short_answer",
      stem:
        "Pick a fact you'd want to research (e.g., 'electric cars and pollution'). Name two reliable sources and one source you would avoid. Explain why for each.",
      rubric: {
        level3: "Two specific reliable sources (named org or publication type) with a reason each, plus one specific unreliable source with a reason.",
        level2: "Two reliable + one unreliable but reasons are vague.",
        level1: "Vague or only one source given."
      },
      exemplar:
        "Reliable: EPA government page on emissions (gov agency with data). Reliable: peer-reviewed transportation journal article (independent review). Avoid: an anonymous forum post (no author, can't verify).",
      hintLadder: [
        "Pick known authoritative organizations.",
        "Name them specifically.",
        "Add an unreliable one with a clear reason it can't be verified."
      ]
    }
  ],
  reflectionPrompt: "Today you sized up sources. Where in your week have you seen a claim that needed better sourcing?",
  misconceptionBank: [
    {
      id: "picks-by-preference",
      label: "Picks sources by personal preference",
      description: "Treats the claim they like as the true one without checking source quality.",
      coachMove: "Separate 'do I like this answer?' from 'is this source trustworthy?' Pick by trust, not preference."
    }
  ]
};
