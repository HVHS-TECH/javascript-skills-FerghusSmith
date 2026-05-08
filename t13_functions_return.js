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
    displayProduct("Chocolate bar", 2.5)
    displayProduct("Cookie", 5)
}
function getFormInput(){
    const MONEY_FIELD = document.getElementById("moneyField");
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML = "<p>money: "+userMoney+"</p>"
    
}
function displayProduct(_name, _price){
    OUTPUT_ITEMS.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}
function canBuyItem(_name, _price){
    if (_price >= 4.5){
        OUTPUT.innerHTML += "<p>you CAN buy a "+_name+"</p>"
    } else {
        OUTPUT.innerHTML += "<p>you CAN'T buy a "+_name+" bar</p>"
    }
}