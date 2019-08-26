
var quotes = [
    {
      quote: "Be thankful for what you have, you'll end up having more. If you concentrate on what you don't have, you will never have enough.",
      source: "-Oprah Winfrey",
      year: 2011,
      cite: "Oprah Life Class"
    },
    {
      quote: "Here's the problem. Most people are thinking about what they don't want, and they're wondering why it shows up over and over again.",
      source: "-John Assuaraf"
    },
    {
      quote: " What ever the mind can concieve it can achieve.",
      source: "-W. Clement Stone"
    },
    {
      quote: "The Law of Attraction states that whatever you focus on, think about, read about and talk about intensly, you're going to attract more of into your life.",
      source: "-Jack Canfield"
    },
    {
      quote: " I am the master of my own destiny, so I choose greatness and nothing less.",
      source:"-Chiare Gizzi"
    }
  ];
  
  
  
  
  /*
    This getRandomQuote function returns a random object out of the Quote array randomly and retruns it to the function
  */
  function getRandomQuote (){
    var randomNumber = quotes [Math.floor( Math.random() * quotes.length)];
    return randomNumber;
  }
  
  
  /*
    A print quote function that
    -Creates a randomQuote variable and stores the getRandomQuote function
    -creates a divQuote variable and stores the a get elemtentByID method for the quote-box ID
    -creates an html variable that holds an empty string
    -buildes up the html variable with a string and the appropriate randomQuote property
    -Adds new string to divQuote and changes innerHtml
    -uses if statement to check randomQuote object for cite and year properties and updates divQuote innerHTML as need be

  */
  function printQuote () {
    var randomQuote = getRandomQuote();
    var divQuote = document.getElementById('quote-box');
    var html = '';
    html += '<p class="quote">' + randomQuote.quote + '</p>'
    html += '<p class="source">' + randomQuote.source;
    divQuote.innerHTML = html;
      if(randomQuote.hasOwnProperty('cite')){
        html += '<span class="citation">' + randomQuote.cite + '</span>';
        divQuote.innerHTML = html;
      } if (randomQuote.hasOwnProperty('year')) {
        html += '<span class="year">' + randomQuote.year + '</span>';
        divQuote.innerHTML = html
      } else {
        divQuote.innerHTML = html + '</p>';
      }
  }
  
  /***
    When the "Show another quote" button is clicked, the event listener 
    below will be triggered, and it will call, or "invoke", the `printQuote` 
    function. So do not make any changes to the line of code below this 
    comment.
  ***/
  
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  
