// Grade 7 History/Civics — Summer History Missions, Week 7, Day 1.
// Topic: primary vs. secondary sources & corroboration — cross-checking
// evidence across multiple accounts before trusting a claim.

export const summerG7HistoryW7D1 = {
  id: "g7.summer.hist.w7.d1",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 1,
  subject: "History/Civics",
  topic: "Primary vs. secondary sources & corroboration",
  topicTag: "source-analysis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D3.His.1.7", "CCSS.ELA-LITERACY.RH.6-8.1"],
  hook: "This week you build a History Mission Board — and every good historian starts the same way: not by asking 'what happened?' but 'who is telling me, and can anyone else back them up?' Today you learn to sort the eyewitnesses from the storytellers and to trust a claim only when the evidence agrees.",
  miniLesson: [
    "A primary source was created by someone who witnessed or took part in an event — a diary, a photograph, a letter, a treaty, a speech. A secondary source is made later by someone studying the event — a textbook, a documentary, an encyclopedia entry.",
    "Primary sources put you closest to the moment, but closeness is not the same as truth: a witness can be mistaken, biased, or writing to make themselves look good. Every source has a point of view.",
    "Corroboration means cross-checking a claim against other independent sources. When two or more sources that did NOT copy each other agree, a claim gets stronger; when they conflict, a historian digs deeper instead of picking the one they like."
  ],
  workedExample: {
    prompt: "A soldier's letter says a battle lasted 'three brutal days.' How would you decide whether to trust that detail?",
    steps: [
      "Identify the source type: the letter is a primary source — an eyewitness who was there.",
      "Ask about point of view: a soldier might exaggerate or misjudge time under stress, so the detail is a claim, not yet a fact.",
      "Look for corroboration: check an independent primary source (an officer's log) and a secondary source (a historian's account) for the battle's length.",
      "Judge: if the officer's log and the historian both say three days, the claim is corroborated and trustworthy; if they say one day, investigate the conflict."
    ],
    answer: "Treat the letter as a primary but biased claim, then corroborate it against independent sources — trust the 'three days' only if other accounts that didn't copy the letter agree."
  },
  items: [
    {
      id: "g7.summer.hist.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which of these is a PRIMARY source about a 1963 protest march?",
      choices: [
        "A textbook chapter written in 2020 describing the march",
        "A photograph taken by a marcher on the day of the event",
        "A documentary produced fifty years later",
        "An encyclopedia summary of the civil rights era"
      ],
      answerIndex: 1,
      explanation: "A photograph taken by a participant on the day is a firsthand record from the moment — a primary source. The other three were created later by people studying the event, so they are secondary.",
      hintLadder: [
        "Which one was created AT the event by someone who was there?",
        "Primary means firsthand and from the time; secondary means later study.",
        "The marcher's own photograph is the firsthand record."
      ]
    },
    {
      id: "g7.summer.hist.w7.d1.q2",
      type: "multiple_choice",
      stem: "Two diaries from opposite sides of the same event describe it very differently. What is the BEST historian's move?",
      choices: [
        "Believe whichever diary is older",
        "Pick the account that sounds more exciting",
        "Note that each has a point of view and seek more independent sources to corroborate",
        "Throw out both because they disagree"
      ],
      answerIndex: 2,
      explanation: "Disagreement between biased firsthand accounts is a signal to corroborate — gather more independent evidence — not to guess or discard everything.",
      hintLadder: [
        "Disagreement doesn't mean one is worthless.",
        "What does a historian do when sources conflict?",
        "Cross-check against MORE independent sources."
      ],
      misconceptionsTargeted: ["primary-always-true"]
    },
    {
      id: "g7.summer.hist.w7.d1.q3",
      type: "multiple_choice",
      stem: "Three sources all agree a bridge collapsed in 1907 — but you discover two of them simply copied the first. How much does this corroborate the claim?",
      choices: [
        "Strongly — three sources always beat one",
        "Weakly — copied sources are not independent, so it is really just one account",
        "Not at all — copying makes the event fake",
        "Completely — repetition proves truth"
      ],
      answerIndex: 1,
      explanation: "Corroboration only works when sources are INDEPENDENT. Two copies of the first source add no new evidence, so you effectively have one account, not three.",
      hintLadder: [
        "Does repeating the same story make it more independent?",
        "Corroboration needs sources that did NOT copy each other.",
        "Copies collapse back into a single original account."
      ]
    },
    {
      id: "g7.summer.hist.w7.d1.q4",
      type: "short_answer",
      stem: "Choose any event from your own life (a game, a trip, a family gathering). Name ONE primary source and ONE secondary source a future historian could use to study it, and explain what makes each one primary or secondary.",
      rubric: {
        level3: "Names a plausible primary source AND a plausible secondary source for the same event, and correctly explains what makes each one primary (firsthand/from the time) or secondary (created later by someone studying it).",
        level2: "Names both types but one explanation is thin, or one example is mislabeled.",
        level1: "Names only one type, or confuses which is primary and which is secondary."
      },
      exemplar: "For my birthday party, a primary source would be the photos I took that day, because they were made at the event by someone who was there. A secondary source would be a report my cousin writes next year based on those photos, because it is created later by someone studying what happened.",
      hintLadder: [
        "Primary = made at the event by a participant or witness.",
        "Secondary = made later by someone studying the event.",
        "Pick one of each and explain the timing and the maker."
      ]
    },
    {
      id: "g7.summer.hist.w7.d1.q5",
      type: "short_answer",
      stem: "Explain why 'corroboration' makes a historical claim more trustworthy, and why the sources must be INDEPENDENT for it to count.",
      rubric: {
        level3: "Explains that corroboration means agreement across sources that raises confidence, AND explains that the sources must be independent (not copied from one another) or the agreement adds no new evidence.",
        level2: "Explains corroboration but misses or only hints at the independence requirement.",
        level1: "Restates the term without explaining the reasoning or the independence point."
      },
      exemplar: "Corroboration makes a claim stronger because if several sources report the same thing, it is less likely to be one person's mistake or lie. But the sources must be independent — if they all copied one account, they are really just repeating a single voice, so their agreement proves nothing new.",
      hintLadder: [
        "Why is agreement between witnesses reassuring?",
        "What happens if all the 'witnesses' just copied one report?",
        "Connect independence to whether the agreement adds real evidence."
      ]
    }
  ],
  reflectionPrompt: "Think about a story you've heard secondhand — maybe about a family member or an event before you were born. What primary source could you look for to check whether it really happened that way?",
  misconceptionBank: [
    {
      id: "primary-always-true",
      label: "Assumes primary sources are always true",
      description: "Believes that because a source is firsthand, it must be accurate — ignoring bias, error, and point of view.",
      coachMove: "Distinguish 'closest to the event' from 'correct about the event': ask 'Whose point of view is this, and what might they get wrong or leave out?'"
    },
    {
      id: "more-sources-always-stronger",
      label: "Counts copied sources as independent corroboration",
      description: "Thinks three agreeing sources always beat one, even when two simply copied the first.",
      coachMove: "Trace where each source got its information: 'Did these agree on their own, or did they all copy one original?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Which Voice Was There?",
      prompt:
        "Imagine studying a school fire drill from 1998. You have: (A) a hall-monitor's handwritten log from that morning, and (B) a school-history webpage written last year. Which one was actually THERE, and which one is someone studying it later? Which would you check FIRST — and why can't you fully trust either without a second source?",
      answer:
        "(A) the log is the primary source — written at the event by a witness — so you'd usually check it first. (B) the webpage is secondary. But even the log could be biased or mistaken, so a careful historian corroborates it against another independent source before trusting the details.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Source-Sorting Mission Card",
      challenge:
        "Kick off your History Mission Board by designing one 'Source Detective' mission card. Pick a real or invented historical event, gather (or invent) FOUR sources about it, and sort them by type and trustworthiness.",
      steps: [
        "Choose an event and list four sources about it (letters, photos, textbooks, news clips, diaries...).",
        "Label each source PRIMARY or SECONDARY and jot one point-of-view note for each.",
        "Mark which two sources could CORROBORATE each other — and check they aren't just copies.",
        "Write the card's 'mission': one question a player must answer using the sources."
      ],
      deliverable: "One mission card listing four labeled sources, a corroboration link between two of them, and a challenge question for a future player.",
      choiceBoard: [
        "Draw the mission card with four source icons and labels.",
        "Write it as a 'case file' with a suspect list of sources and your ruling on each.",
        "Record a 45-second 'detective briefing' walking a partner through the sources."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Source Detective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.hist.w7.d1.arena1",
          type: "multiple_choice",
          stem: "You are checking whether a 1912 flood really reached Main Street. Which set of sources gives the STRONGEST corroboration?",
          choices: [
            "One newspaper article and two blogs that both quote that same article",
            "A resident's dated photograph, a city engineer's flood-damage report, and a shopkeeper's insurance claim — all made independently",
            "Three modern documentaries that all cite one historian",
            "A single detailed diary entry read three times"
          ],
          answerIndex: 1,
          explanation: "The photograph, engineer's report, and insurance claim were created independently by different people for different reasons, so their agreement is real corroboration. The other options all trace back to a single original source.",
          hintLadder: [
            "Which set has sources that did NOT copy one another?",
            "Independent + different purposes = stronger corroboration.",
            "Watch for sets that all quote or cite one original."
          ]
        },
        {
          id: "g7.summer.hist.w7.d1.arena2",
          type: "short_answer",
          stem: "A famous general's own memoir claims he won a battle 'single-handedly.' Explain TWO things a historian should do before accepting that claim.",
          rubric: {
            level3: "Names two sound moves, such as (a) consider the general's point of view / motive to look heroic, and (b) corroborate against independent sources like soldiers' accounts, official records, or the opposing side.",
            level2: "Names one solid move clearly and gestures at a second.",
            level1: "Gives no real analytical move or simply accepts or rejects the claim without reasoning."
          },
          exemplar: "First, weigh the general's point of view: a memoir is a primary source, but he has a strong motive to make himself look like a hero. Second, corroborate the claim against independent sources — soldiers' letters, official battle records, and even the enemy's account — to see if anyone else credits him alone.",
          hintLadder: [
            "Whose point of view is a memoir, and what's the motive?",
            "What independent sources could check the boast?",
            "Name one bias check and one corroboration check."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Cross-Check Reach",
      prompt:
        "Stand and 'cross-check' your evidence: reach your right hand across to touch your left shoulder, then left hand to right shoulder, alternating slowly 10 times while you breathe steadily. Finish with two big shoulder rolls.",
      scienceTieIn: "Cross-body movements activate both brain hemispheres at once, which can boost focus and coordination — a quick reset before your next round of careful thinking.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Historians trust a claim more when independent sources agree. Where in everyday life — news, rumors, group chats — could 'corroborate before you believe' protect you from being fooled?",
      badge: { id: "g7-source-detective", name: "Source Detective", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
