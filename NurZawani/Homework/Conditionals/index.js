//import Pluralize from 'pluralize';

// The World Translator
// Write an if statement that writes Hello World in different languages. Store a language in a variable.

// If the language is "English", log "Hello World"
// If the language is "French", log "Bonjour le monde"
// If the language is "Malay", log "Hai dunia" (I think?)
// Add as many others as you wish!

function WorldTranslator (language){
    let english = "Hello World";
    let french = "Bonjour le monde";
    let malay = "Hai dunia";

    if (language === "English") console.log(english);
    else if (language === "French") console.log(french);
    else if (language === "Malay") console.log(malay);
    else console.log("Not exist")
}

//-----------------------------------------------------------
// The Grade Assigner
// Store a testScore in a variable. Give the user a score (either "A", "B", "C", "D", or "F") based on those test results.

function GradeAssigner (){
    let testScore = parseInt(prompt("Enter score"))

    if (testScore >= 80 && testScore <= 100) console.log("A")
    else if (testScore >= 60 && testScore < 80) console.log ("B")
    else if (testScore >= 50 && testScore < 60) console.log ("C")
    else if (testScore >= 40 && testScore < 50) console.log ("D")
    else console.log ("F")
}

//-----------------------------------------------------------

// Air Conditioning
// Store the current temperature, whether the A/C is functional, and what the desired temperature is.

// If the airconditioner is functional and the current temperature is above the the desired temperature:
// Log "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature
// Log "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature
// Log "Fix the A/C whenever you have the chance... It's cool..."
    
function AirCondition (){
    let isACFunctional = prompt("Is the A/C functional?", "Y/N")
    let currTemp = parseInt(prompt("Enter Current Temperature"))
    console.log(isNaN(currTemp))
    if (isNaN(currTemp) === false){
    let desiredTemp = parseInt(prompt ("Enter Desired Temperature"))
    if(isNaN(desiredTemp) === false){
        if (isACFunctional === "Y" && currTemp > desiredTemp) console.log("Turn on the A/C Please")
        else if (isACFunctional === "N" && currTemp > desiredTemp) console.log("Fix the A/C now! It's hot!")
        else if (isACFunctional === "N" && currTemp < desiredTemp) console.log("Fix the A/C whenever you have the chance... It's cool...")
    }


    
}

}

//-----------------------------------------------------------

// You and Your Government
// Write a program that stores a user age and logs a message based on that age.

// Age	Message
// >= 35	'You can vote AND hold any place in government!'
// >= 25	'You can vote AND run for the Senate!'
// >= 18	'You can vote!'
// ELSE	'You can't vote yet'

function Election (){
    let age = parseInt(prompt("Enter your age", "Age"))

 if (age >= 35) console.log("You can vote AND hold any place in government!")
 else if (age >= 25) console.log("You can vote AND run for the Senate!")
 else if (age >= 18) console.log("You can vote!")
 else console.log("You can't vote yet")
}

//-----------------------------------------------------------
// Golf
// Write an if statement that gives a user the nickname of their score, based on par and logs the score's nickname.

// Score	        Nickname
// 1	            "Hole in one"
// <= par - 2	    "Eagle"
// par - 1	        "Birdie
// par	            "Par"
// par + 1	        "Bogey"
// par + 2	        "Double Bogey"
// >= par + 3	    "Not sure"

function Golf() {
    let score = parseInt(prompt("Enter Score","1"))
    if (isNaN(score) === false){
        let par = parseInt(prompt("Enter Par","1"))
        if (isNaN(par) === false){
            if (score === 1) console.log("Hole in one")
            else if (score <= par - 2) console.log("Eagle")
            else if (score == par - 1) console.log("Birdie")
            else if (score == par) console.log("Par")
            else if (score == par + 1) console.log("Bogey")
            else if (score == par + 2) console.log("Double Bogey")
            else if (score >= par + 3) console.log("Not sure")
        }
    }
}

//-----------------------------------------------------------
// Serge Says
// Store a user's message.

// If the user asks a question (e.g. the message ends in ?)
// Log "Sure."
// If the user yells (e.g. the message is in all capitals)
// Log "Woah, chill out!"
// If the user doesn't say anything (e.g. the message is empty OR only spaces)
// Log "Fine. Be that way!"
// Otherwise:
// Log "Whatever."

function Serge (){
    let userMsg = prompt("Enter your message", "User Message")

    if (userMsg.charAt(userMsg.length -1) === "?") console.log("Sure.") 
    else if (userMsg === userMsg.toUpperCase())  console.log("Woah, chill out!")
    else if (userMsg.length === 0) console.log("Fine. Be that way!")
    else console.log("Whatever.")
}

//-----------------------------------------------------------

// The Pluralizer

// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible


function SinglePlural (){

    const vowel = ['a','e','i','o','u']
    let noun = prompt("Enter noun")
    let num = parseInt(prompt("Enter number"))
    let lastCharacter = noun.charAt(noun.length - 1)
    let lastTwoCharacter = noun.substring(noun.length - 2)
    let isVowel = false

    for (let i = 0; i < vowel.length -1; i++){
        if (noun.charAt(noun.length - 2) == vowel[i]){
            isVowel = true
            }                
    }

   // console.log(lastTwoCharacter)
    if (num == 1) console.log(noun)
    else{ //handle plural

        //Nouns ending in s, x, z, ch, or sh => adding es

        if (lastCharacter == "s" || lastCharacter == "x" || lastCharacter == "z" || lastCharacter == "o" ||
            lastTwoCharacter == "ch" || lastTwoCharacter == "sh" || lastTwoCharacter == "us" ||
            lastTwoCharacter == "is" || lastTwoCharacter == "ex"){

            if (lastCharacter == "o") //check if preceded by a consonant
            {
                if (isVowel == false) console.log(noun + "es"); 
                else console.log(noun + "s");
             }
               //Nouns ending in us are made plural by changing the us to i.
            else if (lastTwoCharacter == "us"){
            console.log(noun.substring(0,noun.length - 2) + "i");
            }
            //Nouns ending in is are made plural by changing the is to es.
            else if (lastTwoCharacter == "is"){
                console.log(noun.substring(0,noun.length - 2) + "es");
            }
            //Nouns ending in ex are made plural by changing the is to es.
            else if (lastTwoCharacter == "ex"){
                console.log(noun.substring(0,noun.length - 2) + "ices");
            }
            else console.log(noun + "es"); 
            }

        //Nouns that end in y
        else if (lastCharacter == "y"){

            //check if preceed by a consonant
           if (isVowel == false) console.log(noun.substring(0,noun.length - 1) + "ies");
           else console.log(noun + "s");

        }
        //Nouns that end in f or fe
        else if (lastCharacter == "f" || lastTwoCharacter == "fe"){

            if (lastCharacter == "f"){
                console.log(noun.substring(0,noun.length - 1) + "ves");
            }
            else if (lastTwoCharacter == "fe"){
                console.log(noun.substring(0,noun.length - 2) + "ves");
            }
        }
        //Nouns ending in ix
        else if (lastTwoCharacter == "ix"){
            console.log(noun.substring(0,noun.length - 2) + "ices");
        }
        //Nouns ending in eau
        else if (noun.substring(noun.length - 3) == "eau"){
            console.log(noun.substring(0,noun.length - 3) + "eaux");
        }
         //Nouns ending in ouse
         else if (noun.substring(noun.length - 4) == "ouse"){
            console.log(noun.substring(0,noun.length - 4) + "ice");
        }
     
    }

}

//-----------------------------------------------------------
// The Rest
// Implement a Rock, Paper, Scissors single game
// Implement a Rock, Paper, Scissors best of three game
// Anything else you can think of!

function Game() {
    const playerOptions = ['rock','paper','scissors']
    let player1Option
    let computerOption = Math.floor(Math.random()*3);

    let player1 = prompt("Player 1 - Enter you choice", "rock/paper/scissors")

    for (let i = 0; i < playerOptions.length; i++){
        if (player1 === playerOptions[i]) player1Option = i
      }

      console.log("Player 2 option: " + playerOptions[computerOption])

      if (player1Option == computerOption) console.log("Draw")
    
      if (player1Option == 0 && computerOption == 1) console.log("Player 2 won")
      if (player1Option == 0 && computerOption == 2) console.log("Player 1 won")

      if (player1Option == 1 && computerOption == 0) console.log("Player 1 won")
      if (player1Option == 1 && computerOption == 2) console.log("Player 2 won")

      if (player1Option == 2 && computerOption == 0) console.log("Player 2 won")
      if (player1Option == 2 && computerOption == 1) console.log("Player 1 won")

}

function MultipleGame() {
    let numOfGame = parseInt(prompt("Enter number of game"))
    const playerOptions = ['rock','paper','scissors']
    let player1Option
    let playerWin = 0
    let computerWin = 0
    let draw = 0

 
    for (let j = 0; j <= numOfGame - 1 ; j++){
        let computerOption = Math.floor(Math.random()*3);
        let player1 = prompt("Player 1 - Enter you choice", "rock/paper/scissors")

        for (let i = 0; i < playerOptions.length; i++){
            if (player1 === playerOptions[i]) player1Option = i
          }
    
          console.log("Computer option: " + playerOptions[computerOption])
    
          if (player1Option == computerOption) {console.log("Draw"); draw++}
        
          if (player1Option == 0 && computerOption == 1) {console.log("Computer won"); computerWin++}
          if (player1Option == 0 && computerOption == 2) {console.log("Player 1 won"); playerWin++}
    
          if (player1Option == 1 && computerOption == 0) {console.log("Player 1 won"); playerWin++}
          if (player1Option == 1 && computerOption == 2) {console.log("Computer won"); computerWin++}
    
          if (player1Option == 2 && computerOption == 0) {console.log("Computer won"); computerWin++}
          if (player1Option == 2 && computerOption == 1) {console.log("Player 1 won"); playerWin++}
    
    }
    console.log("Player won: " + playerWin + ", Computer won: " + computerWin + ", Draw: " + draw)


   
}
