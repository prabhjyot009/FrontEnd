//in innerHTML we are allow to do html scripting
//where as innerTEXT only outputs it as text format

const btn = document.getElementById("button");
const output= document.querySelector(".output");
console.log(btn);
btn.addEventListener("click", function () {
    const cost=document.querySelector("input");
    console.log(cost.value*0.15);
    let tip=(cost.value*0.15).toFixed(2);
    let temp=`<h1>You should tip $${tip} on $${cost.value}</h1>`;
    output.innerHTML=temp;
})