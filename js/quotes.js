const quotes = [
  {
    quote:
      "Most of you are familiar with the virtues of a programmer.  There are three, of course: laziness, impatience, and hubris.",
    author: "Larry Wall",
  },
  {
    quote:
      "That’s the thing about people who think they hate computers.  What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "Don’t worry if it doesn’t work right.  If everything did, you’d be out of a job.",
    author: "Mosher’s Law of Software Engineering",
  },
  {
    quote:
      "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
    author: "Bjarne Stroustrup",
  },
  {
    quote:
      "There is no programming language–no matter how structured–that will prevent programmers from making bad programs.",
    author: "Larry Flon",
  },
  {
    quote: "Good code is its own best documentation.",
    author: "Steve McConnell",
  },
  {
    quote:
      "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
    author: "Eagleson’s Law",
  },
  {
    quote:
      "The first 90% of the code accounts for the first 90% of the development time.  The remaining 10% of the code accounts for the other 90% of the development time.",
    author: "Tom Cargill",
  },
  {
    quote:
      "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote:
      "A computer lets you make more mistakes faster than any invention in human history–with the possible exceptions of handguns and tequila.",
    author: "Mitch Radcliffe",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "Martin Golding",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
