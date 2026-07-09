// Grade 7 World/Current Affairs — Winter Expedition, Week 7 (Winter Tales),
// Day 5. Grade 7 counterpart: winter folktales and traditions around the world,
// raised to comparing sources and analyzing why similar stories recur across
// cultures (shared human needs vs. borrowed details).

export const winterG7WorldW7D5 = {
  id: "g7.winter.world.w7.d5",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Winter folktales and traditions across cultures",
  topicTag: "world-folktales",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.6.6-8", "CCSS.ELA-LITERACY.RL.7.9"],
  hook: "Across the coldest, darkest weeks of the year, cultures thousands of miles apart tell strikingly similar stories — of light returning, of gathering close, of surviving the dark. Are they copying each other, or answering the same human need? Today you compare tales like a real analyst.",
  miniLesson: [
    "Many winter traditions cluster around the winter SOLSTICE — the shortest day — because every culture in a cold climate faced the same problem: long nights and the fear that the light might not return.",
    "When two cultures share a motif (light, feasting, evergreen plants), historians ask whether it spread by CONTACT (one borrowed from another) or arose INDEPENDENTLY (both answered the same need). Evidence — trade routes, timing, shared words — helps decide.",
    "Comparing SOURCES matters: a firsthand account from inside a culture, a traveler's outside description, and a modern retelling can each carry bias. Reading them side by side gives a fuller, fairer picture than trusting one."
  ],
  workedExample: {
    prompt: "Two distant cultures both light lamps or fires at midwinter. Give one explanation by CONTACT and one by INDEPENDENT origin, and say what evidence would help you decide.",
    steps: [
      "Contact explanation: trade or travel carried the custom from one culture to the other, so the practice spread.",
      "Independent explanation: both cultures faced the same long, dark winter and independently used light to mark hope and gather people.",
      "Evidence for contact: shared specific details, overlapping trade routes, or borrowed words.",
      "Evidence for independent origin: the cultures had no known contact, yet the custom fits each one's own local meaning and materials."
    ],
    answer: "Either spread by contact (needs trade/borrowing evidence) or arose independently from a shared need (light in darkness). The specifics of the shared details and any contact routes decide which is more likely."
  },
  items: [
    {
      id: "g7.winter.world.w7.d5.q1",
      type: "multiple_choice",
      stem: "Why do so many winter traditions center on light (lamps, candles, fires)?",
      choices: [
        "Light is the only thing people had",
        "All winter traditions were invented in one place",
        "Around the solstice the nights are longest, so light became a shared symbol of hope and the sun's return",
        "People disliked the dark for no reason"
      ],
      answerIndex: 2,
      explanation: "The solstice brings the longest nights everywhere in cold climates, so light naturally became a shared symbol of the returning sun and hope.",
      hintLadder: [
        "What happens to daylight around the solstice?",
        "Long nights → what would people wish for?",
        "Light stands for the sun's return and hope."
      ]
    },
    {
      id: "g7.winter.world.w7.d5.q2",
      type: "multiple_choice",
      stem: "Two cultures with no known contact both feast at midwinter. What is the MOST careful conclusion?",
      choices: [
        "One definitely copied the other",
        "Feasting proves they secretly traded",
        "It must be a coincidence with no reason",
        "They may have independently answered the same need — sharing food when supplies and daylight were scarce"
      ],
      answerIndex: 3,
      explanation: "Without contact evidence, the careful conclusion is independent origin from a shared human need, not proof of copying.",
      hintLadder: [
        "Is there evidence they were in contact?",
        "Same need can produce the same custom independently.",
        "Independent origin from a shared need is most careful."
      ],
      misconceptionsTargeted: ["similarity-proves-copying"]
    },
    {
      id: "g7.winter.world.w7.d5.q3",
      type: "multiple_choice",
      stem: "You have three accounts of a winter festival: a member of the culture, a foreign traveler, and a modern blog. What's the best analytic move?",
      choices: [
        "Trust only the blog because it is newest",
        "Read all three side by side and weigh each source's viewpoint and bias",
        "Trust only the traveler because they are an outsider",
        "Pick whichever is shortest"
      ],
      answerIndex: 1,
      explanation: "Comparing sources with different viewpoints — insider, outsider, modern — gives a fuller, fairer picture than trusting any one.",
      hintLadder: [
        "Each source has a viewpoint and possible bias.",
        "Is one automatically right?",
        "Compare all three and weigh their perspectives."
      ]
    },
    {
      id: "g7.winter.world.w7.d5.q4",
      type: "short_answer",
      stem: "Choose two winter traditions you know of from different places. Name one thing they SHARE and one way they DIFFER, then suggest whether the shared part is more likely from contact or independent origin — and why.",
      rubric: {
        level3: "Names two traditions, a real shared feature and a real difference, AND reasons about contact vs. independent origin with some justification.",
        level2: "Names a shared feature and a difference but the contact/independent reasoning is missing or vague.",
        level1: "Only one tradition, or no comparison."
      },
      exemplar: "Lucia processions in Sweden and lantern festivals elsewhere both use light in deep winter but differ in their stories and songs. The shared use of light is likely independent — cold, dark places everywhere would reach for light — while the specific songs are local.",
      hintLadder: [
        "Pick two traditions from different places.",
        "Name one shared feature and one difference.",
        "Decide: shared need (independent) or borrowing (contact)?"
      ]
    },
    {
      id: "g7.winter.world.w7.d5.q5",
      type: "short_answer",
      stem: "Explain, in 2–3 sentences, why studying winter traditions from MANY cultures gives a fuller understanding than studying only your own.",
      rubric: {
        level3: "Explains that comparing cultures reveals shared human needs AND unique local meanings, reducing bias and broadening understanding.",
        level2: "Gives a general benefit of learning about others but without the shared-need/unique-detail insight.",
        level1: "Vague or off-topic."
      },
      exemplar: "Looking at many cultures shows that people everywhere use light and gathering to face the dark — a shared human need — while each culture adds its own stories and foods. Studying only your own would hide both the common thread and how varied the responses are.",
      hintLadder: [
        "What do many cultures reveal that one can't?",
        "Think shared needs + unique local details.",
        "It reduces bias and widens understanding."
      ]
    }
  ],
  stretch: {
    stem: "A traveler's diary calls another culture's winter festival 'strange.' How should a careful reader treat that word?",
    answer: "As a signal of the traveler's outside bias, not a fact about the festival; the reader should seek an insider source to balance the outsider's judgment.",
    explanation: "Loaded words reveal a source's perspective; corroborating with insider accounts corrects for outsider bias."
  },
  reflectionPrompt: "What is one winter tradition in your family or community? What human need — light, warmth, togetherness — do you think it answers?",
  misconceptionBank: [
    {
      id: "similarity-proves-copying",
      label: "Assumes similar customs prove one culture copied another",
      description: "Treats any shared motif as evidence of direct borrowing, ignoring independent origin.",
      coachMove: "Ask for contact evidence (trade, shared words, timing). Without it, similar customs may independently answer the same human need."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Same Story, Far Apart",
      prompt:
        "Cultures that never met still tell winter stories about light beating back the dark. Why might humans thousands of miles apart land on the SAME idea without copying each other?",
      answer:
        "Because they faced the same problem — long, cold, dark nights — and the human mind reaches for light and gathering as hope. Shared needs can produce shared stories with no contact at all; that's called independent origin.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Winter Traditions Compare-Map",
      challenge:
        "Pick two winter traditions from different parts of the world and build a compare-map: what they share, how they differ, and your reasoned guess about whether the shared parts came from contact or a shared need.",
      steps: [
        "Choose two traditions from different regions.",
        "List shared features in the middle, unique features on each side.",
        "Label the shared features 'likely contact' or 'likely independent' with a reason.",
        "Add one question you'd research to test your guess."
      ],
      deliverable: "A compare-map (Venn-style) of two traditions with a reasoned contact-vs-independent note.",
      choiceBoard: [
        "Draw the Venn-style compare-map with labels.",
        "Write a short 'analyst's brief' comparing the two traditions and their likely origins.",
        "Make a two-column illustrated poster: shared human need vs. unique local detail."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Culture Analyst Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.world.w7.d5.arena1",
          type: "multiple_choice",
          stem: "Which finding would be the STRONGEST evidence that one culture borrowed a winter custom from another (contact, not independent origin)?",
          choices: [
            "They share a very specific, unusual detail AND had documented trade between them",
            "Both cultures live in cold climates",
            "Both hold their festival in winter",
            "Both use some kind of light"
          ],
          answerIndex: 0,
          explanation: "A specific, unusual shared detail plus documented contact points to borrowing; broad similarities (cold, winter, light) could arise independently.",
          hintLadder: [
            "General similarities can arise independently.",
            "What makes borrowing likely? Specific detail + contact.",
            "Unusual shared detail plus trade evidence."
          ]
        },
        {
          id: "g7.winter.world.w7.d5.arena2",
          type: "short_answer",
          stem: "You read an outsider's and an insider's account of the same winter festival that disagree. Explain how you'd decide what likely happened.",
          rubric: {
            level3: "Explains weighing each source's perspective/bias, looking for corroboration or a third source, and not simply trusting one.",
            level2: "Says to compare them but without a clear method for deciding.",
            level1: "Picks one source arbitrarily or ignores bias."
          },
          exemplar: "I'd note the outsider may misread meaning while the insider may downplay flaws, then look for a third source or details both agree on. Where they agree is most trustworthy; where they differ, I'd flag it as viewpoint-dependent.",
          hintLadder: [
            "Each account has a built-in perspective.",
            "Look for corroboration or a third source.",
            "Trust the parts that independently agree."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Gather-Close Breathing",
      prompt:
        "Sit tall and imagine a circle of people around a warm winter light. Breathe in for 4 counts, out for 6, five times, picturing the circle each breath. Many cultures gather close in winter — you're feeling why.",
      scienceTieIn: "Longer exhales activate the body's calming system; picturing social connection also eases stress, which is one reason gathering together helps people through the hardest, darkest weeks.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which winter tradition from another culture would you most like to learn more about, and what human need do you think it answers?",
      badge: { id: "g7-winter-tradition-analyst", name: "Tradition Analyst", emoji: "🕯️" },
      estimatedMinutes: 7
    }
  }
};
