let btn =document.querySelector("#btn");
let guessNum=document.querySelector("#guessNum");
let dis_ans=document.getElementById("container")

function check(){
    if (guessNum.value==""|| null){
        guessNum.nextElementSibling.innerHTML = "<i>Field Required</i>";
        guessNum.style.borderColor = "red";
        return;
    }else if (guessNum.value > 10){
        guessNum.nextElementSibling.innerHTML = "<i>Invalid number choose from 0-10</i>";
        guessNum.style.borderColor = "red"; 
        return;
    }else{
        guessNum.nextElementSibling.innerHTML = "";
        guessNum.style.borderColor = "#dadada";
        decideWinner();    
    }
}

function decideWinner(){
    let computerChoice=Math.floor(Math.random()*11);
    let output;
    if ((Number(guessNum.value))===computerChoice){
        output=`<h3 class="won">You Won</h3>
        <p>Your number is: ${guessNum.value}</p>
        <p>Computer number is: ${computerChoice}</p>`
        dis_ans.innerHTML=output;

    }else{
        output=`<h3 class="lost">You Lost</h3>
        <p>Your number is: ${guessNum.value}</p>
        <p>Computer number is: ${computerChoice}</p>`
        dis_ans.innerHTML=output;
    }
    guessNum.value="";
}

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    check();
})