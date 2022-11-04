/*
// Answer to problem number 1
console.log("Problem 1:")

function printGreeting(name) {
    return `Hello there, ${name}!`
}

console.log(printGreeting("Slimer")); //=> Hello there, Slimer!


// Answer to problem number 2
console.log("Problem 2:")

function reverseWordOrder(str) {
    let words = str.split(" ")
    let revWords = "";
    for (i=words.length-1;i>=0;i--) {
        revWords += words[i] + " "
    }
    return revWords
}
console.log(reverseWordOrder("Ishmael me Call")); //=> "Call me Ishmael"


// Answer to problem number 3
console.log("Problem 3:")

function calculate(num1, num2, operation) {
    if (operation === "add") {
        // addition
        return num1 + num2
    }
    else if (operation === "sub") {
        // subtraction: num1-num2
        return num1 - num2
    }
    else if (operation === "mult") {
        // multiplication
        return num1 * num2
    }
    else if (operation === "div") {
        // division: num1/num2
        return num1 / num2
    }
    else if (operation === "exp") {
        // exponent: num1^num2
        return Math.pow(num1, num2)
    }
    else {
        return `Invalid operator for ${num1} and ${num2}`
    }
}
console.log(calculate(4, 3, "add")); //=> 7
console.log(calculate(4, 3, "sub")); //=> 1
console.log(calculate(4, 3, "mult")); //=> 12
console.log(calculate(15, 3, "div")); //=> 5
console.log(calculate(4, 3, "exp")); //=> 64
console.log(calculate(4, 3, "root")); //=> invalid

*/
// Answer to problem number 4
//console.log("Problem 4:")

function pandigital(num) {
    // convert number to string, in the likely event it wasn't already one
    let digits = num.toString()
    // set flag for burden of proof
    let present = false
    // friendly reminder of the number we're checking
    console.log("Number is:", digits)
    if(digits == "NaN") {
        console.log("Hey buddy, this isn't a number!")
    }
    // start searching for numbers 1 to n...
    for (i=1;i<=digits.length;i++) {
        // reset the flag to "false" for new search, in case the previous number was found
        present = false
        // start looking from the first digit to the last digit...
        for (j=0;j<digits.length;j++) {
            // friendly reminder of which number we're looking for
            console.log("Is ", i, " present?")
            // if we found the number at this digit, set the flag to "true" and stop looking (go to the next number)
            if (digits[j] == i) {
                present = true
                // friendly note of the index where the number was found
                console.log("at index:", j, present)
                break
            }
            // friendly note that the number wasn't found, before continuing to look
            else {
                console.log("at index:", j, present)
            }
        }
        // was the last number looked for also found? if not, it fails
        if(!present) {
            return "Not pandigital"
            break
        }
    }
    // if we made it this far, all numbers were accounted for
    // (no zeroes can exist in the number, and it must be less than 10 digits long)
    if(present) {
        return "The number is pandigital!"
    }
}
console.log(pandigital(parseInt(prompt("Enter a number less than 10 digits:"))));

/*
// Answer to problem number 5
const userInput = "Input" // prompt("Please enter some input");
function printGreeting2(name) {
    return `Hello, ${name}! You said: \"${userInput}\"`
}
alert(printGreeting2("Slimer"))


// Answer to problem number 6
console.log("Problem 6:")

function grid() {
    for (i=0;i<8;i++) {
        if (i%2 === 0) {
            console.log(" # # # #")
        }
        else {
            console.log("# # # # ")
        }
    }
}
grid();


// Answer to problem number 7
console.log("Problem 7:")

function grid(width, height) {
    for (i=0;i<Math.ceil(height/2);i++) {
        let row = "";
        for (j=0;j<width;j++) {
            if (i%2 === 0) {
                row = row + " #"
            }
            else {
                row = row + "# "
            }
        }
        console.log(row);
    }
}
grid(30, 30);


// Answer to problem number 8
console.log("Problem 8:")

function calculate(num1, num2, operation) {
    if (operation === "add") {
        // addition
        return num1 + num2
    }
    else if (operation === "sub") {
        // subtraction: num1-num2
        return num1 - num2
    }
    else if (operation === "mult") {
        // multiplication
        return num1 * num2
    }
    else if (operation === "div") {
        // division: num1/num2
        return num1 / num2
    }
    else if (operation === "exp") {
        // exponent: num1^num2
        return Math.pow(num1, num2)
    }
    else if (num2 === "sqrt") {
        // exponent: num1^num2
        return Math.sqrt(num1)
    }
    else {
        return `Invalid operator for ${num1} and ${num2}`
    }
}
console.log(calculate(4, 3, "add")); //=> 7
console.log(calculate(4, 3, "sub")); //=> 1
console.log(calculate(4, 3, "mult")); //=> 12
console.log(calculate(15, 3, "div")); //=> 5
console.log(calculate(4, 3, "exp")); //=> 64
console.log(calculate(4, 3, "root")); //=> invalid
console.log(calculate(49, "sqrt")); //=> 4
*/