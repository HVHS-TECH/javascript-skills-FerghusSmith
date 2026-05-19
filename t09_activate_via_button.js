/*
Name of task:activate via button
*/
console.log("Running t09_activate_via_button.js");

//Variables

/*
Main Code
*/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


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
    welcome();
    displayProduct("Chocolate bar", 4);
    displayProduct("Chips", 3);
    displayProduct("drink", 2.5);
    displayProduct("Famous brownie slice", 5);
    displayProduct("Famous brownie batch", 100);
}