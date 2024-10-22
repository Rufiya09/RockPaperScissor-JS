let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#userscore");
const compScore = document.querySelector("#compscore");

const gencompchoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    // generate random index to pick a choice
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userScore.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScore.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    // generate comp choice
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;

        if (userchoice === "rock") {
            userwin = (compchoice === "scissor");
        } else if (userchoice === "paper") {
            userwin = (compchoice === "rock");
        } else if (userchoice === "scissor") {
            userwin = (compchoice === "paper");
        }

        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
