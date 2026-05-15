/*
Name of task: functions with parameters
*/
console.log("Running t16_arrays_continued.js");

//Variables

/*
Main Code
*/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const LIST_OUTPUT = document.getElementById("listOutput");
let shoppingArray = [];
/*
Functions
*/
function start(){
    OUTPUT.innerHTML = "<form onsubmit='return false;'><label for='formName'>pick a nuumber:<br></label><input type='number' id='numberField' name='formNumber' placeholder='1-10' min='0' max='10'><input type='submit' onclick=getFormInput()></form>"
}
function getFormInput(){
    const SHOPPING_FIELD = document.getElementById("shoppingField");
    userShops = (SHOPPING_FIELD.value);
    shoppingArray.push(userShops);
    console.log("hi now");
    LIST_OUTPUT.innerHTML = "<p>You have added '"+shoppingArray[shoppingArray.length-1]+"' to the list" + LIST_OUTPUT.innerHTML;
}