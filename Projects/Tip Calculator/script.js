//in innerHTML we are allow to do html scripting
//where as innerTEXT only outputs it as text format

const btn=document.querySelector("button");
console.log(button);
// console.log(button[0]);

// button.innerHTML="HELLO";
// button[0].innerHTML="HELLO";

//adding an event listener
btn.addEventListener("click",function () {
    console.log("click")
})