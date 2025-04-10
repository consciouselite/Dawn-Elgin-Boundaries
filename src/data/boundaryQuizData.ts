import { Question, PersonalityType } from '../types';

// Quiz title and subtitle
export const quizTitle = "This Quiz Exposes Your Hidden Boundary Blocks (And Why You Keep Saying 'Yes' When You Mean 'Hell No') [QUIZ]";
export const quizSubtitle = "Look, let's get real about your boundaries in the next 60 seconds. No BS, just truth bombs about why you're probably exhausted right now.";

export const boundaryQuestions: Question[] = [
  {
    id: 1,
    text: "{firstName}, it's 10 PM and your phone lights up with a \"quick work question.\" You:",
    options: [
      { text: "Answer immediately (cause what else is new?)", score: 1, icon: "😩" },
      { text: "Feel guilty but peek at the message anyway", score: 2, icon: "😬" },
      { text: "Glance at it but wait till morning to respond", score: 3, icon: "🤔" },
      { text: "Already have that bad boy on Do Not Disturb", score: 4, icon: "😌" },
      { text: "What phone? After 6 PM, I'm off the grid", score: 5, icon: "💅" }
    ]
  },
  {
    id: 2,
    text: "Your friend dumps their relationship drama on you (again) right when you're trying to work:",
    options: [
      { text: "\"Nope, not your therapist. But here's a good one's number\"", score: 1, icon: "🎯" },
      { text: "\"Can we talk later? I'm on deadline\"", score: 2, icon: "💪" },
      { text: "Give them 10 minutes then make an excuse", score: 3, icon: "🕐" },
      { text: "Listen while secretly checking emails", score: 4, icon: "😅" },
      { text: "Settle in for a therapy session... goodbye productivity", score: 5, icon: "🎭" }
    ],
    reverseScoring: true
  },
  {
    id: 3,
    text: "The weekend arrives and your calendar looks like a game of Tetris. {firstName}, you typically:",
    options: [
      { text: "Power through! Sleep is for the weak!", score: 1, icon: "⚡" },
      { text: "Try to do everything but secretly panic", score: 2, icon: "😰" },
      { text: "Cancel a few things (with elaborate excuses)", score: 3, icon: "🤫" },
      { text: "Keep one day completely free, non-negotiable", score: 4, icon: "🧘‍♀️" },
      { text: "Already blocked out ME time in permanent marker", score: 5, icon: "💅" }
    ]
  },
  {
    id: 4,
    text: "Someone asks for a favor you really don't want to do:",
    options: [
      { text: "\"Nope!\" (with zero guilt)", score: 1, icon: "✨" },
      { text: "\"Sorry, I can't this time\" (no excuse needed)", score: 2, icon: "🚫" },
      { text: "\"Let me check my calendar...\" (hoping to find a conflict)", score: 3, icon: "📆" },
      { text: "Make up an excuse that sounds believable", score: 4, icon: "😅" },
      { text: "\"Sure!\" (while dying inside)", score: 5, icon: "😭" }
    ],
    reverseScoring: true
  },
  {
    id: 5,
    text: "{firstName}, your family has opinions about your life choices. You:",
    options: [
      { text: "Change your plans to keep the peace", score: 1, icon: "🥺" },
      { text: "Defend your choices (but doubt yourself later)", score: 2, icon: "😟" },
      { text: "Listen politely but do your own thing anyway", score: 3, icon: "😌" },
      { text: "\"Thanks for the input\" (then ignore it completely)", score: 4, icon: "😎" },
      { text: "\"My life, my rules - let's talk about something else\"", score: 5, icon: "💁‍♀️" }
    ]
  },
  {
    id: 6,
    text: "Your coworker constantly interrupts your focus time:",
    options: [
      { text: "Straight up told them to book time on your calendar", score: 1, icon: "📅" },
      { text: "Have set \"do not disturb\" hours everyone knows about", score: 2, icon: "🚦" },
      { text: "Sometimes say you're in the middle of something", score: 3, icon: "💭" },
      { text: "Try to look busy with headphones in (they still interrupt)", score: 4, icon: "🎧" },
      { text: "Welp, guess I'm not getting anything done today", score: 5, icon: "🤷‍♀️" }
    ],
    reverseScoring: true
  },
  {
    id: 7,
    text: "Saturday night = Netflix and chill, but your friend wants you to go out:",
    options: [
      { text: "Goodbye, comfy pants... hello, forced fun", score: 1, icon: "😩" },
      { text: "Try to negotiate a shorter outing", score: 2, icon: "🤝" },
      { text: "\"Maybe next time\" (but they keep asking)", score: 3, icon: "🤔" },
      { text: "\"Thanks, but I'm recharging tonight\"", score: 4, icon: "🔋" },
      { text: "Already told them Saturdays are your sacred solo time", score: 5, icon: "👑" }
    ]
  },
  {
    id: 8,
    text: "Your inbox is exploding with \"urgent\" requests. You:",
    options: [
      { text: "Check emails twice a day, period. Deal with it.", score: 1, icon: "😎" },
      { text: "Have an auto-reply about response times", score: 2, icon: "⏰" },
      { text: "Sort by actual urgency (some can wait)", score: 3, icon: "📋" },
      { text: "Feel overwhelmed but try to handle them all", score: 4, icon: "😫" },
      { text: "Drop everything to respond NOW", score: 5, icon: "🏃‍♀️" }
    ],
    reverseScoring: true
  },
  {
    id: 9,
    text: "A friend keeps crossing your boundaries. Time to:",
    options: [
      { text: "Silently seethe but do nothing different", score: 1, icon: "😤" },
      { text: "Drop hints that you're not happy", score: 2, icon: "🤫" },
      { text: "Have a gentle \"maybe we could...\" chat", score: 3, icon: "💭" },
      { text: "Clear conversation about what needs to change", score: 4, icon: "🗣️" },
      { text: "Set consequences and stick to them like glue", score: 5, icon: "💪" }
    ]
  }
];

export const boundaryProfiles: PersonalityType[] = [
  {
    type: "Boundary Beginner",
    description: "{firstName}, real talk? Your boundaries are about as solid as a chocolate teapot right now. But hey, I've been there - saying yes when you're screaming no inside, putting everyone else first until you're running on fumes. Look, the fact that you're even taking this quiz means you're ready for a change. And here's the thing - you can totally turn this ship around faster than you think. People who start where you are? They often see the biggest transformations in just a few weeks once they learn the right techniques. Time to stop being everyone's emotional support human and start being your own best friend.",
    scoreRange: { min: 9, max: 20 },
    image: "https://images.unsplash.com/photo-1523803326055-13a0ed2ba465?w=800&auto=format&fit=crop",
    tips: [
      "Practice saying 'no' to one small request each day",
      "Schedule 15 minutes of guilt-free 'me time' daily",
      "Let calls go to voicemail after work hours",
      "Create a boundary affirmation and repeat it daily"
    ]
  },
  {
    type: "Boundary Builder",
    description: "{firstName}, you're like a boundary apprentice - you've got the basic tools, but you're still building those muscles. Sometimes you set boundaries like a boss, other times you fold faster than a lawn chair in a hurricane. But guess what? That inconsistency is actually a sign you're growing. You're in this sweet spot where you're starting to value your time and energy - now it's just about backing that up with action. The cool thing? People at your level usually only need a few solid techniques to start seeing major shifts in how others respect their boundaries. Ready to level up?",
    scoreRange: { min: 21, max: 32 },
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
    tips: [
      "Create a 'boundary script' for common difficult situations",
      "Identify your top 3 boundary triggers and plan responses",
      "Practice pausing before saying 'yes' to requests",
      "Set specific 'unavailable hours' and stick to them"
    ]
  },
  {
    type: "Boundary Protector",
    description: "Damn, {firstName}! You've got some serious boundary game going on. You're not afraid to say no (most of the time), and you've got your priorities straight. Your friends probably come to you for advice because you seem to have your shit together. But let's be real - there are still those moments when your boundaries get wobbly, especially with certain people or situations. The good news? You're literally THIS close to having boundaries of steel. Most people at your level just need a few advanced moves to handle those tricky situations that still trip you up.",
    scoreRange: { min: 33, max: 44 },
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop",
    tips: [
      "Focus on consistency with your strongest boundaries",
      "Address the specific relationships where your boundaries weaken",
      "Create clearer consequences for boundary violations",
      "Share your boundary successes to reinforce your progress"
    ]
  },
  {
    type: "Boundary Master",
    description: "Holy boundaries, {firstName}! You're out here setting limits like a freaking Jedi Master. Your \"no\" game is strong, your time is protected, and you probably have more energy than most because you're not letting everyone drain your battery. But the really cool part? You've figured out how to have strong boundaries while still being compassionate - that's some next-level stuff right there. People could learn a lot from you about how to stay true to yourself while still maintaining relationships. The only question is: ready to help others learn your secrets?",
    scoreRange: { min: 45, max: 45 },
    image: "https://images.unsplash.com/photo-1506126279646-a697353d3166?w=800&auto=format&fit=crop",
    tips: [
      "Mentor others in boundary-setting techniques",
      "Find ways to strengthen your mental/emotional resilience further",
      "Explore how your boundaries connect to your core values",
      "Formalize your boundary system to share with others"
    ]
  }
]; 