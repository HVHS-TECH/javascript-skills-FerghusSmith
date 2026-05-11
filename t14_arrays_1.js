/*
Name of task: functions with parameters
*/
console.log("Running t07_functions_parameters.js");

//Variables

/*
Main Code
*/
const OUTPUT_START = document.getElementById("spaceForJavaScriptOutputStart");
const OUTPUT_ITEMS = document.getElementById("spaceForJavaScriptOutputStart");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
/*
Functions
*/
function start(){
    OUTPUT_START.innerHTML = "<form onsubmit='return false;'><label for='formName'>Money:</label><input type='text' id='moneyField' name='formMoney' placeholder='Money:'><input type='submit' onclick=getFormInput()></form>"
    let chocolateLikes = ["you hate chocolate", "You don't mind chocolate", "you like chocolate", "You love chocolte"];
}
function getFormInput(){
    const LIKE_FIELD = document.getElementById("likeField");
    userLikes = Number(_FIELD.value);
    OUTPUT.innerHTML = "<p>money: "+userMoney+"</p>"
}
