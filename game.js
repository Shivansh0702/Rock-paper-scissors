let body = document.querySelector("body");
let userScore = 0
let compScore = 0

const userScr = document.querySelector("#user-score");
const compScr = document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const reset = document.querySelector("#reset");


const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawgame = () =>{
    msg.innerText = "Draw!!! Play again";
     msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++
        userScr.innerText = userScore;
        msg.innerText = `You WIN!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green"
    }else{
        compScore++
        compScr.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
};

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    // console.log(userChoice, compChoice); 
    if(userChoice === compChoice){
        drawgame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === paper){
            userWin = compChoice === "rock" ? true : false;
        }else{
            userWin = compChoice === "rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

reset.addEventListener("click", () =>{
    userScore = 0;
    compScore = 0;
    userScr.innerText = userScore;
    compScr.innerText = compScore;
})