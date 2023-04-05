console.log ("Hello World!");


// PROBLEM 1
let firstName = "John";
console.log (`First Name : ${firstName}`);
let lastName = "Smith";
console.log (`Last Name : ${lastName}`);
let age = "30";
console.log (`Age : ${age}`);
let hobbies = [' Biking ', ' Mountain Climbing ', 'Swimming'];
console.log ("Hobbies:" + hobbies);
const city = "Lincoln";
console.log (`City : ${city}`);
const houseNumber = "32";
console.log (`House Number : ${houseNumber}`);
const state = "Nebraska";
console.log (`State : ${state}`);
const street = "Washington";
console.log (`Street : ${street}`);

function userInformation( firstName, lastName, age ) {
        console.log (`${firstName} ${lastName} is ${age} of age`);
} 

userInformation (firstName, lastName, age);

function hobbiesList (hobbies) {
        console.log (`His hobbies are:${hobbies}`);
}

hobbiesList(hobbies);

const relationshipStatus = {
        isMarried : true
}

console.log(`The value of isMarried  is:` );
console.log (relationshipStatus.isMarried);

// PROBLEM 2

var x = 3;
var  y = 5;

console.log ( x += 3 );
console.log ( y *= 4 );
console.log (x);
console.log (y);
console.log (x <= y);
console.log (x >= y);
console.log ( x !== y );

// PROBLEM 3


// let colorInput = prompt("Enter a color: ");

function checkColor(colorInput) {
  
        switch (colorInput.toLowerCase()) {
        case "black":
                console.log("You have chosen color Black.");
                break;
        case "violet":
                console.log("You have chosen color Violet.");
                break;
        case "pink":
                console.log("You have chosen color Pink.");
                break;
        default:
                message = "Invalid color.";
        }
}

// checkColor(colorInput);

// PROBLEM 4

// let number = prompt ("Enter a number");

function oddEvenNumber ( number ) {
        if ( isNaN (number) || typeof parseInt(number) !== "number") {
                console.log ("Unexpected Input");
        } else if ( number % 2 == 0 ) {
                console.log ("Number is an even number");
        } else {
                console.log ("Number is an odd number");
        } return number;
}

// oddEvenNumber(number);

// PROBLEM 5

for ( let i = 0; i <= 20; i++ ) {
        // console.log (i);
        if ( i % 2 == 0 ) {
                console.log(i);
        }
}

// STRETCH GOALS

// let numberPrompt = prompt ("Enter a number from 0 to 20: ");

function countdownEven (numberPrompt) {
        for ( let k = 20; k >= 0; k--) {
                if ( (numberPrompt <= 20) && ( numberPrompt %2 === 0 ))   {
                        console.log ("Entered number is an even number: " + numberPrompt);
                }  else if ( (numberPrompt >= 20) && (numberPrompt %2 !== 0) ) {
                        console.log ("Please enter a number from 0 - 20.")
                } else if ( numberPrompt %2 !== 0 ){
                        console.log ("Entered number is an odd number")
                } 
        } 

}
// countdownEven(numberPrompt);













