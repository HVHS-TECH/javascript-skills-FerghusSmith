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
    const AGE_FIELD = document.getElementById("ageField");
    let userAge = number(AGE_FIELD.value);
    OUTPUT.innerHTML = "<p>Your age is "+userAge+"</p>";
}