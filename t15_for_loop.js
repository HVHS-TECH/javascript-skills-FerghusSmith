/*
Name of task: for loop
*/
console.log("Running t15_for_loop.js");

//Variables

/*
Main Code
*/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");



console.log("starting for-loop")

/*
Functions
*/
function start(){
    OUTPUT.innerHTML = "<br>"
    console.log("Cleared start button pre for-loop in function 'start'")
    //for-loop 99 bottles of water on the wall song 
    for (let i = 99; i > 2; i--) {
        OUTPUT.innerHTML += "<p>"+i+" bottles of dihydrogenmonoxide on the wall. "+i+" bottles of dihydrogenmonoxide. Take 1 down, pass it around. "+(i-1)+" bottles of water on the wall.<p>";
    } 
    if(i = 2){
        OUTPUT.innerHTML += "<p>"+i+" bottles of dihydrogenmonoxide on the wall. "+i+" bottles of dihydrogenmonoxide. Take 1 down, pass it around. "+(i-1)+" bottle of water on the wall.<p>";
    }
    if(i = 1){
        OUTPUT.innerHTML += "<p>"+i+" bottle of dihydrogenmonoxide on the wall. "+i+" bottle of dihydrogenmonoxide. Take 1 down, pass it around. "+(i-1)+" bottles of water on the wall.<p>";
    }
}