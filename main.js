require("dotenv").config();
const express = require("express");
const app = express();

app.listen(process.env.PORT, () =>
  console.log(
    `Node01-Deploy-FullStack app listening on port ${process.env.PORT}`
  )
);

app.get("/", getRequestHandler);

function getRequestHandler(req, res) {
  res.send("Welcome to Backend Developement with NodeJS and ExpressJS !!!");
}

app.get("/helloworld", (req, res) =>
  res.send("<h1>Hello World!, this is dev.maverick</h1>")
);

app.get("/getRandomQuote", (req, res) => {
  const randomNum = Math.floor((Math.random() * 100) % 25) + 1;
  for (const quote of quotes) {
    if (quote.quoteId === randomNum) {
      res.send(quote);
      return;
    }
  }
});

const quotes = [
  {
    quoteId: 1,
    author: "Carl Sagan",
    message: "Somewhere, something incredible is waiting to be known.",
  },
  {
    quoteId: 2,
    author: "Alan Turing",
    message: "Those who can imagine anything, can create the impossible.",
  },
  {
    quoteId: 3,
    author: "Nikola Tesla",
    message: "The present is theirs; the future is for which I really worked.",
  },
  {
    quoteId: 4,
    author: "Grace Hopper",
    message: "The most dangerous phrase is: We’ve always done it this way.",
  },
  { quoteId: 5, author: "Steve Jobs", message: "Stay hungry. Stay foolish." },
  {
    quoteId: 6,
    author: "Marie Curie",
    message: "Nothing in life is to be feared, it is only to be understood.",
  },
  {
    quoteId: 7,
    author: "Richard Feynman",
    message:
      "I would rather have questions that can’t be answered than answers that can’t be questioned.",
  },
  {
    quoteId: 8,
    author: "Isaac Newton",
    message:
      "If I have seen further, it is by standing on the shoulders of giants.",
  },
  {
    quoteId: 9,
    author: "Blaise Pascal",
    message:
      "All of humanity's problems stem from man's inability to sit quietly in a room alone.",
  },
  {
    quoteId: 10,
    author: "Confucius",
    message: "It does not matter how slowly you go so long as you do not stop.",
  },
  {
    quoteId: 11,
    author: "Albert Einstein",
    message: "Imagination is more important than knowledge.",
  },
  {
    quoteId: 12,
    author: "Leonardo da Vinci",
    message: "Learning never exhausts the mind.",
  },
  {
    quoteId: 13,
    author: "James Clear",
    message:
      "You do not rise to the level of your goals. You fall to the level of your systems.",
  },
  {
    quoteId: 14,
    author: "Socrates",
    message: "The only true wisdom is in knowing you know nothing.",
  },
  {
    quoteId: 15,
    author: "Marcus Aurelius",
    message: "You have power over your mind — not outside events.",
  },
  {
    quoteId: 16,
    author: "Sun Tzu",
    message: "In the midst of chaos, there is also opportunity.",
  },
  {
    quoteId: 17,
    author: "Bruce Lee",
    message:
      "Adapt what is useful, reject what is useless, and add what is specifically your own.",
  },
  {
    quoteId: 18,
    author: "Naval Ravikant",
    message: "Play long-term games with long-term people.",
  },
  {
    quoteId: 19,
    author: "Abraham Lincoln",
    message: "Whatever you are, be a good one.",
  },
  {
    quoteId: 20,
    author: "Thomas Edison",
    message:
      "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
  },
  {
    quoteId: 21,
    author: "Katherine Johnson",
    message: "We will always have STEM with us.",
  },
  {
    quoteId: 22,
    author: "Elon Musk",
    message:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    quoteId: 23,
    author: "Rumi",
    message: "Where there is ruin, there is hope for a treasure.",
  },
  {
    quoteId: 24,
    author: "Maya Angelou",
    message: "Try to be a rainbow in someone’s cloud.",
  },
  {
    quoteId: 25,
    author: "George Orwell",
    message: "In a time of deceit, telling the truth is a revolutionary act.",
  },
];
