/*
Name of task: validation
*/
console.log("Running t16_arrays_continued.js");

//Variables

/*
Main Code
*/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const LIST_OUTPUT = document.getElementById("listOutput");
let numberArray = [];
/*
Functions
*/
function start(){
    OUTPUT.innerHTML = "<form onsubmit='return false;'><label for='formName'>pick a nuumber:<br></label><input type='number' id='numberField' name='formNumber' placeholder='1-10' min='0' max='10'><input type='submit' onclick=getFormInput()></form>"
}
function getFormInput(){
    const NUMBER_FIELD = document.getElementById("numberField");
    userNumber = Number(NUMBER_FIELD.value);
    
    if(userNumber < 1 || userNumber > 10){
        console.log("userNumber is out of range");
    } else {
        console.log("userNumber = "+userNumber);
    }
}