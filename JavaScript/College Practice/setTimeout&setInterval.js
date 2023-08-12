console.log("Program starts");
let i=0;
// setTimeout(()=>{
//     document.getElementById('name').innerText = ++i;
// },100);//duration

// setInterval(()=>{
//     document.getElementById('name').innerText="something"
// },2000)


//clear Timeout and clear Interval

// let id = setInterval(()=>{
//     document.getElementById('name').innerText=++i;
//     if(i==100){
//         clearInterval(id);
//     }
// },100);

// console.log(id);
// console.log("Program ends");

let id = setTimeout(()=>{
    document.getElementById('name').innerText=++i;
    if(i==100){
        clearInterval(id);
    }
},5000);

console.log(id);
console.log("Program ends");