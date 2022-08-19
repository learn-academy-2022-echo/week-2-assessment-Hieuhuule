// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: An array of every character.
// b) Verify and explain: My guess was correct, the .split() method operates on an string and breaks up every character according the the parameter, in this case ("").


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))


// a) Your answer: `Hello, LEARN Student!`
// b) Verify and explain: undefined. The function did not have an explicit return statement.


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: correct. map iterates over the original array and returns a new array and then multiplied every element inside of it by 2, the new array is then assigned to the variable multipliedByTwo


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: correct. filter returns an array containing every number that is not evenly divisible by 2.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: correct. It uses dot and bracket notation to tunnel down to the language key of myCodingSkills and then accessed the first item of the array located there.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: it will create a copy of the Learn class and assign it to the learnStudent variable with "George" as the value of the key student.
// b) Verify and explain: correct. A class is a blueprint for objects. By calling new on the class name and providing it with an argument that matches it's constructor, you create a new unique instance of that class.
