/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
    {
      quote: "Be thankful for what you have, you'll end up having more. If you concentrate on what you don't have, you will never have enough.",
      source: "-Oprah Winfrey",
      year: 2011,
      cite: "Oprah Life Class"
    },
    {
      quote: "Here's the problem. Most people are thinkin about what they don't want, and they're wondering why it shows up over and over again.",
      source: "-John Assuaraf"
    },
    {
      quote: " What ever the mind can concieve it can achieve.",
      source: "-W. Clement Stone"
    },
    {
      quote: "The Law of Attraction states that whatever you focus on, think about, read aboutm and talk about intensly, you're going to attravt more of into your life.",
      source: "-Jack Canfield"
    },
    {
      quote: " I am the master of my own destiny, so I choose greatness and nothing less.",
      source:"-Chiare Gizzi"
    }
  ];
  
  
  
  
  /***
    Create the `getRandomQuote` function to:
     - Create a variable to store a random number 
     - Cse the random number to `return` a random quote object from the `quotes` array.
  ***/
  function getRandomQuote (){
    var randomNumber = quotes [Math.floor( Math.random() * quotes.length)];
    return randomNumber;
  }
  
  
  /***
    Create the `printQuote` function to: 
     - Call the `getRandomQuote` function and assign it to a variable.
     - Create a variable for the HTML string and set it equal to an empty string.
     - Use the HTML template in the instructions or the markup in the index.html file, AND 
       the random quote vairable to build your HTML string.
     - Add the quote and source section to the HTML string.
     - Use an if statement to check for the citation property before adding it to the HTML string.
     - Use an if statement to check for the year property before adding it to the HTML string.
     - Don't forget to close that final `p` tag.
     - Set the `innerHTML` of the `quote-box` div to the HTML string. 
  ***/
  function printQuote () {
    var randomQuote = getRandomQuote();
    var chosenQuote;
    var chosenSource;
    var chosenCite;
    var chosenYear;
    var outputQuote = document.getElementsByClassName('quote');
    var outputYear = document.getElementsByClassName('year');
    var outputCite = document.getElementsByClassName('citation');
    var outputSource = document.getElementsByClassName('source');
    for(var key in randomQuote){
        if ( randomQuote.hasOwnProperty("year") || randomQuote.hasOwnProperty("cite") === true) {
            chosenYear = randomQuote.year;
            chosenCite = randomQuote.cite;
            chosenQuote = randomQuote.quote;
            chosenSource = randomQuote.source;
            outputCite[0].innerHTML = chosenCite;
            outputYear[0].innerHTML = chosenYear;
            outputQuote[0].innerHTML = chosenQuote;
            outputSource[0].innerHTML = chosenSource;
        } else {
            chosenQuote = randomQuote.quote;
            chosenSource = randomQuote.source;
            outputQuote[0].innerHTML = chosenQuote;
            outputSource[0].innerHTML = chosenSource;
        }
    }
}

  
  /***
    When the "Show another quote" button is clicked, the event listener 
    below will be triggered, and it will call, or "invoke", the `printQuote` 
    function. So do not make any changes to the line of code below this 
    comment.
  ***/
  
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  
  
  // Remember to delete the comments that came with this file, and replace them with your own code comments.