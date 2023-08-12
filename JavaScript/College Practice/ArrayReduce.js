let array=[1,2,3,4,5,6,7,8,9,10] // -> 55
let count =0;

const res=array.reduce((accumulator, currentValue)=>{
    count++;
    return accumulator + currentValue
});

// accumulator =1 | currentValue=2
// accumulator =3 | currentValue=3
// ....
// ..45 | 10
console.log(count);
console.log(res);