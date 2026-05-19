/*
Name of task: conditionals
*/
console.log("Running t12_conditionals.js");

//Variables

/*
Main Code
*/
const OUTPUT_MONEY = document.getElementById("spaceForJavaScriptOutputMoney");
const OUTPUT_AGE = document.getElementById("spaceForJavaScriptOutputAge");


/*
Functions
*/
function getFormInputAge(){
    const AGE_FIELD = document.getElementById("ageField");
    let userAge = Number(AGE_FIELD.value);
    if (userAge < 100){
        OUTPUT_AGE.innerHTML = "<p>You are practically a baby. goo goo ga ga</p>"
    } else if (userAge == 100){
        OUTPUT_AGE.innerHTML = "<p>You are a good age</p>"
    } else {
        OUTPUT_AGE.innerHTML = "<p>You probably look like you came back out of your grave</p>"
    }
}
function getFormInputMoney(){
    const MONEY_FIELD = document.getElementById("moneyField");
    let userMoney = Number(MONEY_FIELD.value);
    if (userMoney <= 1000000){
        OUTPUT_MONEY.innerHTML = "<p>You are broke. You can't even afford an icecream</p>"
    } else if (userMoney > 1000000000){
        OUTPUT_MONEY.innerHTML = "<p>YOU ARE SO GREEDY! GIVE ME SOME MONEY!</p>"
    } else {
        OUTPUT_MONEY.innerHTML = "<p>You can probably buy a house now</p>"
    }
}