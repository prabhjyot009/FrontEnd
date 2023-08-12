let i=100;
let j=0;

try{
    //document.getElementById('abc').innerText='100'
    if(j==0){
        throw "j cannot be zero"
    }
    console.log(i/j);
}catch(err){
    console.log(err);
}
console.log('nice little statement');
//what if e will not have this try catch block:

// if(j==0){
//     throw "j cannot be zero";
// }
// console.log(i/j);