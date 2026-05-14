/*
Name of task: functions with parameters
*/
console.log("Running t16_arrays_continued.js");

//Variables

/*
Main Code
*/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
let shoppingArray = ["Milk", "Mince", "Carrot", "Fizzy drink"];
/*
Functions
*/
function start(){
    OUTPUT.innerHTML = "<form onsubmit='return false;'><label for='formName'>shopping list:<br></label><input type='text' id='shoppingField' name='formshopping' placeholder='0-3'><input type='submit' onclick=getFormInput()></form>"
}
function getFormInput(){
    const SHOPPING_FIELD = document.getElementById("shoppingField");
    userShops = Number(SHOPPING_FIELD.value);
    OUTPUT.innerHTML = shoppingArray[userShops]+"<br>";
}