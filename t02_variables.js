/*
Name of task: variables
*/
console.log("Running t01_introduction.js");

//Variables
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
Main Code
*/
console.log("Hello World");
rl.question('who are you?'), (answer) => {
    console.log("you are " + answer);
    rl.close;
}
/*
Functions
*/

