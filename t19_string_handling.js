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
    if(validName = false){
        console.log("Name valid in if statement: false");
        LIST_OUTPUT.innerHTML = "<p>Invalid name. please try again.</p>"
    } else {
        console.log("Name valid in if statement: true");
        LIST_OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
    }
}