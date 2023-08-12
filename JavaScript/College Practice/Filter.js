let array=[1,3,5,6];

let newArray= array.filter(element=>{
    if(element>2) return true;
    return false;
});
console.log(newArray);