export const textNodes = [
  {
    id: 1,
    title: "Chapter 1: The Beginning",
    text: "You are the Wanderer, and find yourself overwhelmed by a stack of identical CV's. Just when you consider giving up, you feel a strange otherworldly energy. You feel its pull towards the wilderness.",
    img: "./assets/the-ordinary-world.jpg",
    options: [
      {
        text: "Follow the enticing energy.",
        nextText: 2,
      },
      {
        text: "Ignore and continue with the traditional CVs.",
        nextText: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Chapter 2: The Call to Adventure",
    text: "You've discovered a unique portfolio amidst the common CVs, a link that leads to a portal. It's intriguing and enthralling.",
    img: "./assets/the-portal.jpg",
    options: [
      {
        text: "Venture forth into the unusual and start the adventure.",
        nextText: 3,
      },
      {
        text: "Dismiss the adventure, adhering to the conventional recruitment methods.",
        nextText: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Chapter 3: The Refusal of the Call",
    text: "As you hover over the 'start adventure' button, a twinge of apprehension courses through you. It's uncharted territory, deviating from the norm.",
    img: "./assets/start-btn.jpg",
    options: [
      {
        text: "Embrace the fear and uncertainty. Press the button.",
        nextText: 4,
      },
      {
        text: "Decide against it, preferring the familiarity of ordinary CVs.",
        nextText: 1,
      },
    ],
  },
  // Existing node
  {
    id: 4,
    title: "Chapter 3: The Meeting with the Mentor",
    text: "You meet the guide, a sophisticated AI, that provides you an overview of the developer's skills and proficiency levels.",
    img: "./assets/AI.jpg",
    options: [
      {
        text: "Listen attentively to the AI, absorbing every detail.",
        nextText: 41, // New branch starts here
      },
      {
        text: "Polite nodding, but you are more excited about the journey.",
        nextText: 5,
      },
    ],
  },

  // New nodes
  {
    id: 41,
    title: "Chapter 3.1: Deep Dive into Skills",
    text: "The AI takes you on a journey through the developer's skill set. From HTML/CSS basics, to Javascript's asynchronous behavior, React's virtual DOM, and Node.js's event-driven architecture.",
    img: "./assets/skills.jpg",
    options: [
      {
        text: "Ask the AI to explain in more detail.",
        nextText: 42,
      },
      {
        text: "Proceed with the story, skipping the technical deep dive.",
        nextText: 5,
      },
    ],
  },
  {
    id: 42,
    title: "Chapter 3.2: Understanding the Basics",
    text: "The AI starts with the basics, highlighting the developer's understanding of HTML and CSS. You see artifacts of responsive design, flexbox layout, semantic HTML, and CSS Grid.",
    img: "./assets/html.jpg",
    options: [
      {
        text: "Appreciate the solid grounding, and ask for more about Javascript.",
        nextText: 43,
      },
      {
        text: "Continue with the journey, bypassing the technical details.",
        nextText: 5,
      },
    ],
  },
  {
    id: 43,
    title: "Chapter 3.3: Delving into Javascript",
    text: "You're taken into the heart of the developer's proficiency in Javascript. Demonstrations of ES6 syntax, Promises, async/await, and functional programming concepts illustrate the developer's fluency.",
    img: "./assets/js.jpg",
    options: [
      {
        text: "Admire the mastery, and request a look into the developer's React skills.",
        nextText: 44,
      },
      {
        text: "Move along with the journey, eager for the adventure to continue.",
        nextText: 5,
      },
    ],
  },
  {
    id: 44,
    title: "Chapter 3.4: Revealing React Prowess",
    text: "The AI showcases the developer's expertise with React. You see complex components, state management with hooks, and high-performance rendering with virtual DOM.",
    img: "./assets/react.jpg",
    options: [
      {
        text: "Respect the advanced skills, and ask about backend prowess with Node.js.",
        nextText: 45,
      },
      {
        text: "Move forward with the journey, having seen the depth of the developer's skills.",
        nextText: 4,
      },
    ],
  },
  {
    id: 45,
    title: "Chapter 3.5: Unveiling Node.js",
    text: "Lastly, the AI reveals the developer's backend expertise. You see robust APIs built with Express.js, secure authentication practices, and real-time applications with WebSockets.",
    img: "./assets/node.jpg",
    options: [
      {
        text: "Recognize the comprehensive skill set, and continue with the journey.",
        nextText: 5,
      },
    ],
  },

  {
    id: 5,
    title: "Chapter 5: Crossing the Threshold",
    text: "You delve deeper into the adventure, navigating through levels that intricately unfold the developer's proficiency in HTML, CSS, and JavaScript. The challenges mirror the depth of the developer's skills.",
    img: "./assets/delve-deeper.jpg",
    options: [
      {
        text: "Appreciate the elegance of the code solutions.",
        nextText: 6,
      },
      {
        text: "Skim through the challenges, not considering the deeper implications.",
        nextText: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Chapter 6: Tests, Allies, Enemies",
    text: "You face trials and tribulations, presented as intricate coding challenges. Each solution unravels a new facet of the developer's experience, portraying their journey through various projects and roles.",
    img: "./assets/allies.jpg",
    options: [
      {
        text: "Examine the solutions, gaining insight into the developer's problem-solving abilities.",
        nextText: 7,
      },
      {
        text: "Rush through the challenges, eager to reach the end of the adventure.",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    title: "Chapter 7: Approach to The Inmost Cave",
    text: "You near the adventure's climax, a challenge that hints at the developer's knowledge of cutting-edge technologies like React, Node.js, or Angular.",
    img: "./assets/cave.jpg",
    options: [
      {
        text: "Take time to comprehend the code, analyzing the developer's proficiency with modern frameworks.",
        nextText: 8,
      },
      {
        text: "Proceed without stopping to appreciate the details.",
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    title: "Chapter 8: The Ordeal",
    text: "At the crux of the adventure, you encounter a complex challenge that requires a nuanced understanding of full-stack development. The solution to this challenge is a testament to the developer's competency.",
    img: "./assets/ordeal.jpg",
    options: [
      {
        text: "Examine the code in-depth, marveling at the developer's expertise.",
        nextText: 9,
      },
      {
        text: "Move past the challenge, without understanding its significance.",
        nextText: 9,
      },
    ],
  },
  {
    id: 9,
    title: "Chapter 9: The Reward",
    text: "Upon solving the ordeal, you are rewarded with insights into the developer's professional achievements, contributions, and accolades. It's a testament to their journey.",
    img: "./assets/reward.jpg",
    options: [
      {
        text: "Reflect on the developer's achievements, valuing their journey.",
        nextText: 10,
      },
      {
        text: "Continue to the end, not reflecting on the reward.",
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    title: "Chapter 10: The Road Back",
    text: "As you near the end, you traverse back through the adventure, reminiscing about the challenges that showcase the developer's journey from a novice to an expert.",
    img: "./assets/dream.jpg",
    options: [
      {
        text: "Revisit the challenges, appreciating the developer's growth and evolution.",
        nextText: 11,
      },
      {
        text: "Hurry to the adventure's conclusion, not reminiscing on the journey.",
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    title: "Chapter 11: The Resurrection",
    text: "At the adventure's end, you face a final challenge that encapsulates all the developer's skills, signifying their readiness for any professional challenges that lie ahead.",
    img: "./assets/resurrection.jpg",
    options: [
      {
        text: "Reflect on the final challenge, recognizing the developer's readiness.",
        nextText: 12,
      },
      {
        text: "Proceed to the end, without contemplating the significance.",
        nextText: 12,
      },
    ],
  },
  {
    id: 12,
    title: "Chapter 12: Return with the Elixir",
    text: "As you exit the adventure, you carry with you a thorough understanding of the developer's skills, experiences, and their potential for growth. The conventional CV is but a pale comparison.",
    img: "./assets/elixir.jpg",
    options: [
      {
        text: "Acknowledge the value of this unique portfolio approach.",
        nextText: 13,
      },
      {
        text: "Close the adventure, not pondering on the gained insights.",
        nextText: 1,
      },
    ],
  },
  {
    id: 13,
    title: "Epilogue",
    text: "Your adventure concludes, leaving you with a deep understanding of the developer's skills. What will you do next?",
    img: "./assets/epilogue.jpg",
    options: [
      {
        text: "Reach out to the developer for a potential opportunity.",
        nextText: 14,
        action: "link", // This tells the button what type of action to perform
        linkUrl: "https://www.linkedin.com/in/ademiralijagic", // replace with actual LinkedIn URL
      },
      {
        text: "Close the adventure, and continue your search.",
        nextText: 1,
      },
    ],
  },
  {
    id: 14,
    title: "The New Beginning",
    text: "You've decided to embark on a new journey with the developer. Congratulations! The end is a new beginning.",
    img: "./assets/The New Beginning.jpg",
    options: [
      {
        text: "Celebrate the successful recruitment process.",
        nextText: 1,
      },
    ],
  },
];
