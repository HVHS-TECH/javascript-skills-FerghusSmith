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
    for (let i = 99; i > 2; i--) {
        OUTPUT.innerHTML += "<p>"+i+" bottles of water on the wall. "+i+" bottles of water. Take 1 down, pass it around. "+(i-1)+" bottles of water on the wall.<p>";
    } 
    OUTPUT.innerHTML += "<p>"+i+" bottles of water on the wall. "+i+" bottles of water. Take 1 down, pass it around. "+(i-1)+" bottle of water on the wall.<p>";
    OUTPUT.innerHTML += "<p>"+(i-1)+" bottle of water on the wall. "+(i-1)+" bottle of water. Take 1 down, pass it around. "+(i-2)+" bottles of water on the wall.<p>";
}