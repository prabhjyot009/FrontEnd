const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const quesEl=document.getElementById("ques");

const inputEl=document.getElementById("solution");

const scoreEl =document.getElementById("score");


let score= JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}
scoreEl.innerText=`score: ${score}`;
quesEl.innerText=`What is ${num1} mutiply by ${num2}`;
const correctAns=num1*num2;

const formEl=document.getElementById("form")
formEl.addEventListener("submit",()=>{
    const userAns= +inputEl.value//+ is add to convert string to number;
    if(userAns === correctAns){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
    
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}