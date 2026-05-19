/*
Name of task: arrays 1
*/
console.log("Running t14_arrays_1.js");

//Variables

/*
Main Code
*/
const OUTPUT_START = document.getElementById("spaceForJavaScriptOutputStart");
const OUTPUT_ITEMS = document.getElementById("spaceForJavaScriptOutputStart");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
let likesArray = ["you hate chocolate", "You don't mind chocolate", "you like chocolate", "You love chocolte"];
/*
Functions
*/
function start(){
    OUTPUT_START.innerHTML = "<form onsubmit='return false;'><label for='formName'>Rate chocolate from 0-3<br></label><input type='text' id='likesField' name='formLikes' placeholder='0-3'><input type='submit' onclick=getFormInput()></form>"
}
function getFormInput(){
    const LIKE_FIELD = document.getElementById("likesField");
    userLikes = Number(LIKE_FIELD.value);
    console.log("userLikes = "+userLikes+" (in getFormInput)")
    console.log("user choice is "+likesArray[userLikes])
    OUTPUT.innerHTML = likesArray[userLikes]+"<br>";
}
