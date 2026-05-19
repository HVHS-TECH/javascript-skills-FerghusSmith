/*
Name of task: functions
*/
console.log("Running t06_functions.js");

//Variables
/*
Main Code
*/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added By Java Script</h2>";
welcome();

/*
Functions
*/
function welcome(){
    OUTPUT.innerHTML += "<p>Welcome to the shop</p>"
}