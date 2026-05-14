/*
Name of task: functions with parameters
*/
console.log("Running t07_functions_parameters.js");

//Variables

/*
Main Code
*/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");



console.log("starting for-loop")

/*
Functions
*/
function start(){
    OUTPUT.innerHTML = "<br>"
    console.log("Cleared start button pre for-loop in function 'start'")
    for (let i = 99; i > 0; i--) {
        OUTPUT.innerHTML += "The number is " + i + "<br>";
    }    
}