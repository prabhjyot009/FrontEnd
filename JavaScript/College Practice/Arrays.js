//  let obj={
//     0:'Hello',
//     1:'World'
//  };

//  let arr=["Hello","World"];
//  console.log(obj[0],obj[1]);
//  console.log(arr[0],arr[1]);

//  console.log(obj.length);
//  console.log(arr.length);

let arr=["Hello","World"];

// arr[2]="!!";
// arr[100]='??'
// console.log(arr);
// console.log(arr[2]);

arr["myKey"]="!!";//never use this approach you gonna all the performance optimizations.
console.log(arr);