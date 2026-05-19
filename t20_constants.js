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
const MINIMUM_LENGTH = 3;
let nameArray = [];
/*
Functions
*/
function start(){
    OUTPUT.innerHTML = "<form onsubmit='return false;'><label for='formName'>Name:<br></label><input type='text' id='nameField' name='formName' placeholder='name'><input type='submit' onclick=getFormInput()></form>"
}
function getFormInput(){
    console.log("running function 'getFormInput'")
    const NAME_FIELD = document.getElementById("nameField");
    userName = (NAME_FIELD.value);
    let validName = isNaN(userName);
    console.log("Valid name: "+validName);
/*  checking if name is valid:
    Name cannot be a number
    Name must be at least three letters long    */
    if(validName == true && userName.length >= MINIMUM_LENGTH){
        console.log("Name valid in if statement");
        LIST_OUTPUT.innerHTML = "<br><p>Your name is "+userName+"</p>";
    } else if(validName != true){
        console.log("Name invalid in if statement: name is a number");
        LIST_OUTPUT.innerHTML = "<br><p>Name must not be a number</p>";
    } else if(userName.length < MINIMUM_LENGTH){
        console.log("Name invalid in if statement: name is too short (name length is: "+userName.length+")");
        LIST_OUTPUT.innerHTML = "<br><p>Name must be at least three letters long</p>";
    }
}