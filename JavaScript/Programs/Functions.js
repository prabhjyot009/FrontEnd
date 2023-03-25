/*function mfunction(a,b){
    console.log(a+b);
}
//calling the function
mfunction(1,2);
*/
function mFunction(x, y) {
    let result = x + y;
    return result;
}
let value = mFunction(5, 5);

console.log(value);

//Closures:

function mFunction() {
    console.log("Hello");

    function mfunction() {
        console.log("Say goodmorning");
    }
    return mfunction();  //we can also return a value inside another function
}
mFunction();



