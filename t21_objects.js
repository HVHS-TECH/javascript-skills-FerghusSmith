/*
Name of task: objects
*/
console.log("Running t21_objects.js");

//Variables

/*
Main Code
*/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const LIST_OUTPUT = document.getElementById("listOutput");
const MINIMUM_NAME_LENGTH = 3;
const MINIMUM_NUMBER_LENGTH = 2;
var validName;
var users = [];
var currentUser = 0;
/*
Functions
*/
function start(){
    OUTPUT.innerHTML = "<form onsubmit='return false;'><label for='formName'>Name:<br></label><input type='text' id='nameField' name='formName' placeholder='name'><br><label for='formAge'>Age:<br></label><input type='text' id='ageField' name='formAge' placeholder='age'><br><label for='formMoney'>Money:<br></label><input type='text' id='moneyField' name='formMoney' placeholder='money'><br><input type='submit' onclick=getFormInput()></form>"
    OUTPUT.innerHTML = "<form onsubmit='return false;'><label for='formName'>pull users<br></label><input type='text' id='pullField' name='formPull' placeholder='user ID'><br><input type='submit' onclick=getFormInput()></form>"
}
}
function getFormInput(){
    console.log("running function 'getFormInput'")
    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const MONEY_FIELD = document.getElementById("moneyField");
    //pulling inputs into variables
    userName = (NAME_FIELD.value);
    userAge = Number(AGE_FIELD.value);
    userMoney = Number(MONEY_FIELD.value);
    //validating variables
    validName = isNaN(userName);
    validAge = isNaN(userAge);
    validMoney = isNaN(userMoney);
    console.log("Valid name: "+validName);
    
    if(validName == true && userName.length >= MINIMUM_NAME_LENGTH && validAge == false && validMoney == false){
        console.log("Name valid in if statement");
        LIST_OUTPUT.innerHTML = "<br><p>Your name is "+userName+"</p>";
        LIST_OUTPUT.innerHTML += "<p>You are "+userAge+" years old</p>";
        LIST_OUTPUT.innerHTML += "<p>You have $"+userMoney+"</p>";
        LIST_OUTPUT.innerHTML += "<p>You are user "+currentUser+"</p>";
        currentUser++;
        users.push({
            name: userName,
            age: userAge,
            money: userMoney
        })
    } else {
        LIST_OUTPUT.innerHTML = "<p>errors:</p>"
        findError(validName, userName, validAge, validMoney)
    }
}


function findError(_validName, _userName, _validAge, _validMoney){
    console.log("running function 'findError'")
    if(validName != true){
        console.log("userName invalid in function 'findError'. statement: name is a number");
        LIST_OUTPUT.innerHTML += "<p>Name must not be a number</p>";
    }
    if(userName.length <= MINIMUM_NAME_LENGTH){
        console.log("userName invalid in function 'findError'. statement: name is too short (name length is: "+userName.length+")");
        LIST_OUTPUT.innerHTML += "<p>Name must be at least three letters long</p>";
    }
    if(validAge != false){
        console.log("userAge invalid in function 'findError'. statement: age is a string");
        LIST_OUTPUT.innerHTML += "<p>Age must be a number</p>";
    }
    if(validMoney != false){
        console.log("userMoney invalid in function 'findError'. statement: money is a string");
        LIST_OUTPUT.innerHTML += "<p>Money must be a number</p>";
    }
}