/*
Name of task: functions with parameters
*/
console.log("Running t16_arrays_continued.js");

//Variables

/*
Main Code
*/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
let shoppingArray = [];
/*
Functions 
*/
function start(){
    OUTPUT.innerHTML = "<form onsubmit='return false;'><label for='formName'>possible outcomes: Mince, Fizzy drink, Carrot and Milk<br></label><input type='text' id='shoppingField' name='formshopping' placeholder='0-3'><input type='submit' onclick=getFormInput()></form>"
}
function getFormInput(){
    const SHOPPING_FIELD = document.getElementById("shoppingField");
    const LIST_OUTPUT = document.getElementById("listOutput");
    userShops = (SHOPPING_FIELD.value);
    shoppingArray.push(userShops)

    LIST_OUTPUT.innerHTML = shoppingArray;
}