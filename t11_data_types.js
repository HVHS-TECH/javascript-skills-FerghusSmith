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
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Your name is "+userName+"</p>";
}