const quotes = [
  {
      quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
      author: "Kent Beck",
  },
  {
      quote: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
  },
  {
      quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      author: "Bill Gates",
  },
  {
      quote: "There are 2 hard things in computer science: cache invalidation, naming things, and off-by-1 errors.",
      author: "Leon Bambrick",
  },
  {
      quote: "Nine people can't make a baby in a month.",
      author: "Fred Brooks",
  },
  {
      quote: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
      author: "Edsger Dijkstra",
  },
  {
      quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
  },
  {
      quote: "Walking on water and developing software from a specification are easy if both are frozen.",
      author: "Edward V Berard",
  },
  {
      quote: "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
      author: "Unknown",
  },
  {
      quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      author: "Rick Osborne",
  },
  {
      quote: "In theory, there is no difference between theory and practice. But, in practice, there is.",
      author: "Jan L. A. van de Snepscheut",
  },
  {
      quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      author: "Bill Gates",
  }
]

console.log(quotes)

// first-child나 last-child를 활용해 자식요소 태그를 선택할 수 있다.
// Math.random()은 0.0 ~ 1.0 사이의 난수를 반환한다.
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;