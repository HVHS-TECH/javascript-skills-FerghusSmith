/*
Name of task: functions with parameters
*/
console.log("Running t07_functions_parameters.js");

//Variables

/*
Main Code
*/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/*
Functions
*/
function start(){
    OUTPUT.innerHTML = "<br>"
    console.log("Cleared start button pre for-loop in function 'start'")
    console.log("starting for-loop in function 'start'")
    for(let i=99; i=0; i--){
        OUTPUT.innerHTML += "<p>"+i+" bottles of milk on the wall. "+i+" bottles of milk. Take 1 down, pass it around, "+(i-1)+" bottles of milk on the wall</p><br>"
    }
}