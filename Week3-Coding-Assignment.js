// Coding Step 1:

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Coding Step 1a:
console.log(ages[ages.length-1] - ages[0]);

// Coding Step 1b:
ages.splice(3, 0, 17);
console.log(ages[ages.length-1] - ages[0]);

// Coding Step 1c:
function calculateAverage(inputNumbers) {
    let total = 0;
    for (i = 0; i < inputNumbers.length; i++) {
        total = (inputNumbers[i] + total);
    }
    return (total/inputNumbers.length);
}

console.log(calculateAverage(ages));

// Coding Step 2:
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let wordLength = [];

// Coding Step 2a:
function getLength(word) {
    for (i = 0; i < word.length; i++) {
        wordLength[i] = word[i].length;
    }
    return wordLength;
}

console.log(calculateAverage(getLength(names)));

// Coding Step 2b:
console.log(names.join(" "));

// Coding Step 3:
console.log(names[names.length - 1]);

// Coding Step 4:
console.log(names[0]);

// Coding Step 5:
let names2 = ["Kelly", "Sam", "Kate"];
let nameLengths = [5, 3, 4];

// Coding Step 6:
function calculateTotal(inputNumbers) {
    let total = 0;
    for (i = 0; i < inputNumbers.length; i++) {
        total = (inputNumbers[i] + total);
    }
    return total;
}

console.log(calculateTotal(nameLengths));

// Coding Step 7:
function wordMultiplier(word, n) {
    let wordArray = [];
    while (n > 0) {
        wordArray.push(word);
        n--;
    }
    return wordArray.join("");
}

console.log(wordMultiplier("Hello", 3));

// Coding Step 8:
function buildName(firstName, lastName) {
    return (firstName + " " + lastName);
}

console.log(buildName("Cam", "Emerick"));

// Coding Step 9:
function testTotal(numbers) {
    return (calculateTotal(numbers) > 100);
}

let a101 = [50, 50, 1];
let a100 = [25, 25, 25, 25];
let a99 = [33, 33, 33];

console.log(testTotal(a101));

// Coding Step 10:
// Already done in step 1c, running it here:
let newNumbers = [100, 50, 0];

console.log(calculateAverage(newNumbers));

// Coding Step 11:
let newNumbers2 = [5, 10, 15, 20, 25];
let newNumbers3 = [2, 4, 6, 8, 10, 100];

function compareNumberLists(numList1, numList2) {
    return (calculateAverage(numList1) > calculateAverage(numList2));
}

console.log(compareNumberLists(newNumbers2, newNumbers3));

// Coding Step 12:
function willBuyDrink(isHotOutside, moneyInPocket) {
    return (isHotOutside && (moneyInPocket > 10.50));
}

console.log(willBuyDrink(true, 11));

// Coding Step 13:
// Create a function that returns true if this is the last step of the coding assignment
let currentStep = 13;
let finalStep = 13;

function isHomeworkDone(info1, info2) {
    return (info1 === info2);
}

console.log("This statement is " + isHomeworkDone(currentStep, finalStep) + " - My homework is done!");