// The Age Calculator

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
// Bonus: Get the current year with JavaScript

//-----------------------------------------------------------
function AgeCalculator (){
const date = new Date();
let currentYear = date.getFullYear();
let birthYear = 1990;
let age1 = currentYear - parseInt(birthYear);
let age2 = age1 - 1;

console.log("They are either " + age1 + " or " + age2)
}

//-----------------------------------------------------------

// The Lifetime Supply Calculator

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat in total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// Bonus: Get the details with prompt

function lifeTimeSupplyCalculator() {
let ageNow = parseInt(prompt("Enter your age","Age"));
     if (isNaN(ageNow) === false) { 
         let ageMax = parseInt(prompt("Enter the maximum age","Maximum Age"));
         if (isNaN(ageMax) === false) { 
            let amountInOneDay = parseInt(prompt("Enter the amount you would eat","Amount to eat"));
            if (isNaN(ageMax) === false) { 
                let totalAmount = (ageMax - ageNow) * (amountInOneDay * 365)
                console.log("You will need " + totalAmount + " to last you until the ripe old age of " + ageMax);
            }
         }

       
        
    }
}

//-----------------------------------------------------------

// The Geometrizer
// Calculate the properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

function Geometrizer(){
let rad = 10;
let circumference = ((2) * (Math. PI) * (rad));
let area = rad * Math.pow(rad,2);

console.log("The circumference is " + circumference);
console.log("The area is " + area);
}
 
//-----------------------------------------------------------

// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store the temperature (in celsius) into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function TemperatureConverter(){
let tempCelcius = 34;
let celciusToFahrenheit = tempCelcius * 9 / 5 + 32;
console.log(tempCelcius + "°C is " + celciusToFahrenheit + "°F");

let temFahrenheit = 100
let fahrenheitToCelcius = (temFahrenheit - 32) * 5 / 9;
console.log(temFahrenheit + "°F is " + fahrenheitToCelcius + "°C");
}
