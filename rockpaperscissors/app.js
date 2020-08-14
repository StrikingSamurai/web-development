let userScore = 0;
let computerScore = 0;
let timesPlayed = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const timesPlayed_span = document.getElementById("total-times");

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice) {
	userScore++;
	timesPlayed++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "you".fontsize(3).sup();
	const smallCompWord = "computer".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}. You WIN!`;
	timesPlayed_span.innerHTML = timesPlayed;
	userChoice_div.classList.add("green-glow");
	setTimeout(() => userChoice_div.classList.remove("green-glow"), 1000);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	timesPlayed++;
	computerScore_span.innerHTML = computerScore;
	userScore_span.innerHTML = userScore;
	const smallUserWord = "you".fontsize(3).sup();
	const smallCompWord = "computer".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} is beaten by ${convertToWord(computerChoice)} ${smallCompWord}. You LOSE!`;
	timesPlayed_span.innerHTML = timesPlayed;
	document.getElementById(userChoice).classList.add("red-glow");
	setTimeout(() => userChoice_div.classList.remove("red-glow"), 1000);
}

function draw(userChoice, computerChoice) {
	timesPlayed++;
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `You both chose ${convertToWord(userChoice)}. DRAW!`;
	timesPlayed_span.innerHTML = timesPlayed;
	userChoice_div.classList.add("yellow-glow");
	setTimeout(() => userChoice_div.classList.remove("yellow-glow"), 1000);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener("click", function () {
		game("r");
	});

	paper_div.addEventListener("click", function () {
		game("p");
	});

	scissors_div.addEventListener("click", function () {
		game("s");
	});
}

main();
