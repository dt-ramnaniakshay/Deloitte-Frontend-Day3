// hoisting

/*

hoisting is js mechanisim wher evariables are moved to the top when you compile the program
then code will be executed and values will be assigned on the run time


*/

// var keyword declaration of variable goes on top 

console.log(myVar);
//console.log(myVar2)

var myVar = 10
console.log(myVar);

console.log("------------------");
// let and const keyword it will put all the variablesin TDZ 

//console.log(myLet);
const myLet = 10

// learning => when you are working on project make sure you are creating variables at the top of file, so when somone wants to access it it will throw any error.

// hoisting with functions
// functions are hoisted on top it self 

welcome()

function welcome(){
    console.log("welcome to the App");
}



