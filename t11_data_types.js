/*
Name of task: data types
*/
console.log("Running t11_data_types.js");

//Variables

/*
Main Code
*/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


/*
Functions
*/
function getFormInputAge(){
    const AGE_FIELD = document.getElementById("ageField");
    let userAge = Number(AGE_FIELD.value);
    OUTPUT.innerHTML += "<p>Your age is "+userAge+"</p>";
    OUTPUT.innerHTML += "<p>In 1 year your age will be "+(userAge+1)+"</p>"
}
function getFormInputMoney(){
    const AGE_FIELD = document.getElementById("moneyField");
    let userMoney = Number(AGE_FIELD.value);
    OUTPUT.innerHTML += "<p>You have $"+userMoney+"</p>";
    OUTPUT.innerHTML += "<p>If you gain $1 you will have $"+(userMoney+1)+"</p>"
}