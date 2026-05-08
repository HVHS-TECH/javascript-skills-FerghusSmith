/*
Name of task: functions with parameters
*/
console.log("Running t07_functions_parameters.js");

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
    if (userAge < 100){
        OUTPUT.innerHTML = "<p>You are practically a baby. goo goo ga ga</p>"
    } else if (userAge == 100){
        OUTPUT.innerHTML = "<p>You are a good age</p>"
    } else {
        OUTPUT.innerHTML = "<p>You probably look like you came back out of your grave</p>"
    }
}
function getFormInputMoney(){
    const AGE_FIELD = document.getElementById("moneyField");
    let userMoney = Number(AGE_FIELD.value);

}