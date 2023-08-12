var myVariable=100;//global scope
var myAge=20;//global scope

//Hoisting in js:

/*var iWant;
console.log(iWant);*/

//global scope iWant:
let iWant ='pizza';
if (myAge==20) {
    let iWant='burger'
    console.log(iWant);
}

//block scope
// if(myAge==21){
//     iWant='pizza'; 
// }
// else{
//     iWant='burger';
// }

// if - else -switch --block scope

console.log(myVariable);
console.log(myAge);
console.log(iWant);