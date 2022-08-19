# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter and argument are the same, I've heard them used interchangeably as what goes in the parenthesis for a method or function.

Researched answer: A parameter is a variable in the function definition. It is a placeholder and doesn't have a set value. An argument is a set value that is passed during function invocation. So when a function isn't given a specific set of data, what is in the parenthesis is a called a parameter (basically a placeholder). But if the function is passed specified information, then it's called an argument. A good way to visualize a parameter is as default information filled in a search bar prior to you typing stuff in, once you start typing, it's an argument.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map() takes in the array and a parameter for an element, then within the code block, you can write code that affects the element, then that code is iterated over each element, and finally .map() returns a new array with the affected code. If you wanted to keep the information, you would have to assign the new array into a variable.

Researched answer: The .map() method can take in 4 parameters: 
    currentValue - the value of the current element, REQUIRED;
    index - the index of the current element, OPTIONAL;
    arr - the array of the current element, OPTIONAL;
    thisValue - A value passed to the function to be used as its this value, OPTIONAL. Default value undefined. 

3. What is the difference between map and filter?

Your answer: .map() iterates over an array and performs a function prior to returning a new array. .filter() sorts and removes things that do not meet it's parameters prior to returning a new array.

Researched answer: .map() is defined above, so I'll describe the filter method. It's a method that creates a new array filled with elements that pass a test provided by a function. It doesn't change the original array.

4. What is the DOM?

Your answer: Hmm, I don't know, but let's go to the researched answer.

Researched answer: Document Object Model (DOM), is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document. It's separated into 3 different parts, Core DOM, XML DOM, and HTML DOM, which are all standard models for their type. It's the standard for how to get, change, add, or delete elements in their type model. That's a long winded book answer, but it's very simply how things are laid out on a webpage and how to interact with them.

5. What is React? Why would you use it?

Your answer: React is a language created by Facebook which allows you to build websites and applications that can scale from a small number of users to billions of users, all by making code modular. It's language is based on JavaScript and is familiar to anyone experienced with HTML and CSS. Besides in very specific situations, the JSX language operates the same as JavaScript.

Researched answer: React is a free and open-source frontend JavaScript library for building user interfaes based on UI components. It is mained by Meta (formerly Facebook) and a community of individual developers and companies. It's aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React.js is virtual DOM. It is a tree based on JavaScript components created with React that mimics a DOM tree. It does the least amount of DOM manipulation possible in order to keep your React compoenents up to date.

6. STRETCH: What is hoisting in JavaScript?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: An end goal, not a feature, expressed from the user's perspective

2. Spread operator: Copies an array into another array or object

3. React props: It holds key value pairs and allows them to be used from parent to child components, ie App.js > components

4. Conditional rendering: Where it shows in the webpage only if a certain condition is met

5. DOM events: Whenever the user interacts with the webpage
