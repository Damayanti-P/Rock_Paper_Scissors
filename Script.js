let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


//generate computer Score
const GenerateCompChoice=()=>
{
    const options=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    return options[random]
}

//game is draaw
const drawGame=()=>{
    msg.innerText="Game was draw Try Again...";
    msg.style.backgroundColor="rgb(11, 2, 59)"
}

//display for win lose
let showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin){
                userScore++;
                userScorePara.innerText=userScore;
                msg.innerText=`Player WON! :) your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor="green"
            }
            else{
                compScore++;
                compScorePara.innerText=compScore;
                msg.innerText=`Player LOSE :( ${compChoice} beats your ${userChoice}` 
                msg.style.backgroundColor="red"
            }
    }

//decide who wins who loses
const playGame=(userChoice)=>{
 let compChoice=GenerateCompChoice();
 if( userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock" ){
            userWin=compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper")
            {
                userWin=compChoice==="scissors"? false:true;
            }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

// access user Choice
choices.forEach((choice)=>{

choice.addEventListener("click",()=>
{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice)
})
})