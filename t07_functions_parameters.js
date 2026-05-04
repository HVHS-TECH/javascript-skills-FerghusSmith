/*
Name of task: functions with parameters
*/
console.log("Running t07_functions_parameters.js");

//Variables

/*
Main Code
*/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added By Java Script</h2>";
displayProduct("Chocolate bar", 4);

/*
Functions
*/
function welcome(){
    OUTPUT.innerHTML += "<p>Welcome to the shop</p>"
}
function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<p>"+_name+": $"+_price"</p>";
}