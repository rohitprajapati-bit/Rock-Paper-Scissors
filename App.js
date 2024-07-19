let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorPara = document.querySelector("#user-score");
const compScorPara = document.querySelector("#comp-score");

const DrawGame = () => {
    msg.innerText = "Game was Draw .";
    //.innerText = `Game was Draw.  Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Grey";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorPara.innerText = userScore;
        msg.innerText = `You Winnner. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorPara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const genCompChoice = () => {
    const opntion = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return opntion[randIdx];
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if (userChoice === compChoice) {
        DrawGame();

    } else {
        userWin = true;
        if (userChoice === "Rock") {
            //"paper","Scissors"
             userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //"Rock","scissors"
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            // Rock,Paper
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});