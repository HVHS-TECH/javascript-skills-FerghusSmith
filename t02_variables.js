/*
Name of task: variables
*/
console.log("Running t01_introduction.js");

//Variables
let money = "20";
let age = "12";
let time = "now";
/*
Main Code
*/
console.log("hi ");
console.log("you have $" + money + " dollars");
console.log("as of " + time + " you are " + age + " years old");
/*
Functions
*/


const prompt = require('prompt-sync')();
const name = prompt('What is your name? ');

javascript
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is your name? ', name => {
  console.log(`Hello ${name}!`);
  readline.close();
});

