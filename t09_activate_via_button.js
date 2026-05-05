/*
Name of task: functions with parameters
*/
console.log("Running t07_functions_parameters.js");

//Variables

/*
Main Code
*/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
welcome();
displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("drink", 2.5);
displayProduct("Famous brownie slice", 5);
displayProduct("Famous brownie batch", 100);

/*
Functions
*/
function welcome(){
OUTPUT.innerHTML = "<p>Welcome to the shop</p>"
}
function displayProduct(_name, _price){
OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}
function start(){
    spaceForJavaScriptOutput.innerHTML
}