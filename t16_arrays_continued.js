/*
Name of task: functions with parameters
*/
console.log("Running t16_arrays_continued.js");

//Variables

/*
Main Code
*/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/*
Functions
*/
function start(){
    OUTPUT_START.innerHTML = "<form onsubmit='return false;'><label for='formName'>shopping list:<br></label><input type='text' id='shoppingField' name='formshopping' placeholder='0-3'><input type='submit' onclick=getFormInput()></form>"
}
function getFormInput(){
    const LIKE_FIELD = document.getElementById("likesField");
    userLikes = Number(LIKE_FIELD.value);
    console.log("userLikes = "+userLikes+" (in getFormInput)")
    console.log("user choice is "+likesArray[userLikes])
    OUTPUT.innerHTML = likesArray[userLikes]+"<br>";
}