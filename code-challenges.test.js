// ASSESSMENT 2: Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"


// PSUEDO CODE
// describe names the function
// it describes what the function does
// expect gives an expected outcome given a specific parameter
// create a function that takes an object as an arguement
// create a conditional statement within the function to determine if the value assigned to the number key is divisable by 3
// return a string statement if number is divisible by 3 or not

describe("divisibleByThree", () => {
    it("returns a string if divisible by 3 or not", () => {
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three");
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.


const divisibleByThree = (obj) => {
    if (obj.number % 3 === 0) {
        return `${obj.number} is divisible by three`
    } else {
        return `${obj.number} is not divisible by three`
    }
}
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


describe("upCaseFirst", () => {
    it("capitalizes all the strings in the array", () => {
        expect(upCaseFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(upCaseFirst(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// create a function that takes in an array of strings
// use map() to iterate over the array
// each iteration uses toUpperCase() method on first character and concats the remainder of the word, adding .toLowerCase() makes sure the rest of the work is grammatically correct
// map returns the new array with the first letter capitalized

const upCaseFirst = (arr) => {
    return arr.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    })
}

    // This one was a doozy, I couldn't figure it out using what we learned and I had to look for a solution online. I had two major roadblocks on this problem, the first was that I tried tunneling down to the first char and .toUpperCase() it, but I wasn't getting the return I was expecting. I spent a significant amount of time on it before I discovered strings were immutable. The second road block was using slice. We hadn't practiced it at all, so trying to wrap my mind around it was pretty difficult. 

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("voweltest", () => {
    it("logs index of first vowel", () => {
        expect(vowelTest(vowelTester1)).toEqual(1)
        expect(vowelTest(vowelTester2)).toEqual(0)
        expect(vowelTest(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// creates a function that takes a string and returns the index of first vowel
// create a conditional to identify vowels
// create a loop to iterate through the string until it finds a vowel
// return result of using .indexOf on the element

const vowelTest = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "A" || 
            str[i] === "i" || str[i] === "I" ||
            str[i] === "e" || str[i] === "E" ||
            str[i] === "o" || str[i] === "O" ||
            str[i] === "u" || str[i] === "U") {
            return str.indexOf(str[i])
        } 
    }
}