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
    OUTPUT.innerHTML = "<form onsubmit='return false;'><label for='formName'>Add items to your shopping list:<br></label><input type='text' id='shoppingField' name='formshopping' placeholder='item' required><input type='submit' onclick=getFormInput()></form>"
}
function getFormInput(){
    const SHOPPING_FIELD = document.getElementById("shoppingField");
    userShops = (SHOPPING_FIELD.value);
    shoppingArray.push(userShops);
    console.log("hi now");
    LIST_OUTPUT.innerHTML = "<p>You have added '"+shoppingArray[shoppingArray.length-1]+"' to the list" + LIST_OUTPUT.innerHTML;
}