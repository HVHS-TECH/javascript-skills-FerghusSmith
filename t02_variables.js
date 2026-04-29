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
money = window.prompt("how much money do you have?");
age = parseInt(window.prompt("How old are you"));
time = window.prompt("What is the date?");


console.log("hi " + name);
console.log("you have " + money + " dollars");
console.log("as of " + time + " you are " + age + " years old");
console.log("in 10 years you will be " + (age + 10) + " years old");
console.log("you were " + (age / 2) + " hald your life ago")
/*
Functions
*/