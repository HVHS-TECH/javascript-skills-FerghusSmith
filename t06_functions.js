/*
Name of task: functions
*/
console.log("Running t05_JavaScript_and_HTML.js");

//Variables
/*
Main Code
*/
const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added By Java Script</h2>";
welcome();

/*
Functions
*/
function welcome(){
    OUTPUT.innerHTML += "<p>Welcome to the shop</p>"
}