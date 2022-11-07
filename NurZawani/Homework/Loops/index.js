// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, 
//it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

function EvenOdd() {
    for (let i = 0; i <=20; i++){
        if (i % 2 == 0) console.log(i + " is even");
        else console.log(i + " is odd");
     }
}

//-----------------------------------------------------------

// Multiplication Tables

// Write a for loop that will iterate from 1 to 12. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 12.

function Multiplication(){
    for (i = 1; i<= 12; i++){
        console.log(i + " x 9 = " + i * 9)
    }
}

function MultiplicationTable(){
    for (i = 1; i<= 12; i++){
        console.log("Table:" + i + "\n")
        for (j=1; j<=12; j++){
            console.log(j + " x " + i + " = " + j * i)
        }
    }
}


//-----------------------------------------------------------
// The Grade Assigner
// Use the grade assigner code you wrote from the conditionals exercises for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

function GradeAssigner(){
    let scoreFr = 60
    let scoreTo = 100

    for (let testScore = scoreFr; testScore <= scoreTo; testScore++){
        if (testScore >= 80 && testScore <= 100) console.log("A - Score: " + testScore)
        else if (testScore >= 60 && testScore < 80) console.log ("B - Score: " + testScore)
        else if (testScore >= 50 && testScore < 60) console.log ("C - Score: " + testScore)
        else if (testScore >= 40 && testScore < 50) console.log ("D - Score: " + testScore)
        else console.log ("F - Score: " + testScore)
    }
    }

//-----------------------------------------------------------
// Golf

// Using the Golf condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole

function Golf(){
    const par = 5
    
    for (score = 1; score <= 8; score++){
        console.log("Score: " + score + " Par: " + par)
        if (score === 1) console.log("Hole in one")
        else if (score <= par - 2) console.log("Eagle")
        else if (score == par - 1) console.log("Birdie")
        else if (score == par) console.log("Par")
        else if (score == par + 1) console.log("Bogey")
        else if (score == par + 2) console.log("Double Bogey")
        else if (score >= par + 3) console.log("Not sure")
    }
}

// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5
function GolfOne() {

    for (par = 3; par <=5; par++){
        for (score = 1; score <= 8; score++){
            console.log("Score: " + score + " Par: " + par)
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


// Bonus: Generate a random par for each iteration
function GolfThree(){
      
    for (score = 1; score <= 8; score++){
        let par = Math.floor(Math.random()*5);
        console.log("Score: " + score + " Par: " + par)
        if (score === 1) console.log("Hole in one")
        else if (score <= par - 2) console.log("Eagle")
        else if (score == par - 1) console.log("Birdie")
        else if (score == par) console.log("Par")
        else if (score == par + 1) console.log("Bogey")
        else if (score == par + 2) console.log("Double Bogey")
        else if (score >= par + 3) console.log("Not sure")
    }
}

//-----------------------------------------------------------

// 99 Bottles of Beer
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

function lyrics(){

let bottle = 99

console.log("Lyrics of the song 99 Bottles of Beer\n\n")

for (i = bottle ; i >= 1; i--){
    if (i != 1){
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. \nTake one down and pass it around, " + (i - 1) + " bottles of beer on the wall \n\n");
    }
   else{
    console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall \n\n");
   }
}

    console.log("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, " + bottle + " bottles of beer on the wall.")
}
   