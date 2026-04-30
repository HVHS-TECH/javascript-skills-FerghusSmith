/*
Name of task: variables
*/
console.log("Running t01_introduction.js");

//Variables
let name;
let money;
let age;
let time;
/*
Main Code
*/

name = window.prompt("what is your name?");
money = parseInt(window.prompt("how much money do you have?"));
age = parseInt(window.prompt("How old are you"));
time = parseInt(window.prompt("What is the year?"));


console.log("hi " + name);
console.log("you have " + money + " dollars");
console.log("as of the year " + time + " you are " + age + " years old");
console.log("You were born in " + (time - age));
console.log("In 10 years you will be " + (age + 10) + " years old");
console.log("You will be 50 in the year " + ((50 - age) + time));
console.log("You will die on average in the year " + ((time - age) + 73));
console.log("You will die in " + ((73 - age)) + " years");
console.log("If you spend half your money, you wil have " + (money / 2));
console.log("If you won the average lottery, you will have " + (money + 350000));
/*
Functions
*/