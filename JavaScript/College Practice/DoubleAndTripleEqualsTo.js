// ==  VS  ===

// let a=//
// let b=//
// console.log(a===b);

// 1. The types of a and b are same -> value, memory
// 2. The types of a and b are different -> type conversion

// let a=[1,2,3]
// let b="1,2,3"
// let c=[1,2,3]
// console.log(a === b);
// //we can't compare them as they are of different types 
// // one is array and another is string
// console.log(a === c);
//even if we have same type we get false because
//js directly refers to the memory both the memory 
//locations of values are different thatswise

// let a=[1,2,3]
// let b=a;

// console.log(b);

let b=0;

if(b != undefined || b!=false){
    console.log('b is defined');
}
else{
    console.log('b is not defined');
}