/*
Name of task: functions with parameters
*/
console.log("Running t07_functions_parameters.js");

//Variables

/*
Main Code
*/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const OUTPUT_START = document.getElementById("spaceForJavaScriptOutputStart");

/*
Functions
*/
function start(){
    OUTPUT_START.innerHTML = "<form onsubmit='return false;'><label for='formName'>Money:</label><input type='text' id='moneyField' name='formMoney' placeholder='Money:'><input type='submit' onclick=getFormInput()></form>"
    displayProduct("Chocolate bar", 4.5)
}
function getFormInput(){
    const MONEY_FIELD = document.getElementById("moneyField");
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML = "<p>money:"+userMoney+"</p>"
    if (userMoney >= 4.5){
        OUTPUT.innerHTML += "<p>you CAN buy a chocolate bar</p>"
    } else {
        OUTPUT.innerHTML += "<p>you CAN'T buy a chocolate bar</p>"
    }
}
function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}