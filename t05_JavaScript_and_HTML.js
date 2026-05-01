/*
Name of task: JavaSript and HTML
*/
console.log("Running t05_JavaScript_and_HTML.js");

//Variables
let name;
let money;
let age;
let time;
/*
Main Code
*/
const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added By Java Script</h2>";
name = window.prompt("what is your name?");
money = parseInt(window.prompt("how much money do you have?"));
age = parseInt(window.prompt("How old are you"));
time = parseInt(window.prompt("What is the year?"));


console.log("hi " + name);
OUTPUT.innerHTML += "<p>Hi " + name + "</p>";

console.log("you have " + money + " dollars");
OUTPUT.innerHTML += "<p>You have " + money + " dollars</p>";

console.log("as of the year " + time + " you are " + age + " years old");
OUTPUT.innerHTML += "<p>As of the year " + time + " you are " + age + " years old</p>";

console.log("You were born in " + (time - age));
OUTPUT.innerHTML += "<p>You were born in " + (time - age) + "</p>";

console.log("In 10 years you will be " + (age + 10) + " years old");
OUTPUT.innerHTML += "<p>In 10 years you will be " + (age + 10) + " years old</p>";

console.log("You will be 50 in the year " + ((50 - age) + time));
OUTPUT.innerHTML += "<p>You will be 50 in the year " + ((50 - age) + time) + "</p>";

console.log("You will die on average in the year " + ((time - age) + 73));
OUTPUT.innerHTML += "<p>You will die on average in the year " + ((time - age) + 73) + "</p>";

console.log("You will die in " + (73 - age) + " years");
OUTPUT.innerHTML += "<p>You will die in " + (73 - age) + " years</p>";

console.log("If you spend half your money, you will have " + (money / 2));
OUTPUT.innerHTML += "<p>If you spend half your money, you will have " + (money / 2) + " dollars</p>";

console.log("If you won the average lottery, you will have " + (money + 350000));
OUTPUT.innerHTML += "<p>You have " + money + " dollars</p>";

console.log("If you died right now, there would be a " + ((age - 15) / 0.7) + "% chance that you would have passed on your genes");
OUTPUT.innerHTML += "<p>If you died right now, there would be a " + ((age - 15) / 0.7) + "% chance that you would have passed on your genes</p>";

console.log("If you die in 10 years, there would be a " + ((age - 5) / 0.7) + "% chance that you would have passed on your genes");
OUTPUT.innerHTML += "<p>If you die in 10 years, there would be a " + ((age - 5) / 0.7) + "% chance that you would have passed on your genes</p>";

/*
Functions
*/