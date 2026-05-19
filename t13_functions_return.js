/*
Name of task: functions return
*/
console.log("Running t13_functions_return.js");

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
    let change;
    OUTPUT.innerHTML = "<p>money: "+userMoney+"</p>"
    canBuyItem("Chocolate Bar", 2.5, userMoney)
    canBuyItem("cookie", 5, userMoney)
}
function displayProduct(_name, _price){
    OUTPUT_ITEMS.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}
function canBuyItem(_name, _price, _money){
    if (_money >= _price){
        change = _money - _price;
        OUTPUT.innerHTML += "<p>you CAN buy a "+_name+"</p>"
        OUTPUT.innerHTML += "<p>You will get $"+change+" change</p>"
        return change
    } else {
        OUTPUT.innerHTML += "<p>you CAN'T buy a "+_name+"</p>"
    }
}