const RoundPlayers = {
	computer: "COMPUTER",
	player: "PLAYER",
};

const getComputerSelection = () => {
	const choices = ["rock", "paper", "scissors"];

	const randomChoice = Math.floor(Math.random(choices.length) * 3);
	return choices[randomChoice].toLocaleLowerCase();
};

const playerSelection = () => {
	const playerChoice = prompt("Choice rock, paper or scissors");

	return playerChoice.toLocaleLowerCase();
};

const playRound = (player, computer) => {
	if (player === "rock" && computer === "rock") return "Tie!";
	if (player === "paper" && computer === "paper") return "Tie!";
	if (player === "scissors" && computer === "scissors") return "Tie!";

	if (player === "rock" && computer === "paper") {
		return RoundPlayers.computer;
	} else if (player === "rock" && computer === "scissors") {
		return RoundPlayers.player;
	}

	if (player === "paper" && computer === "rock") {
		return RoundPlayers.player;
	} else if (player === "paper" && computer === "scissors") {
		return RoundPlayers.computer;
	}

	if (player === "scissors" && computer === "paper") {
		return RoundPlayers.player;
	} else if (player === "scissors" && computer === "rock") {
		return RoundPlayers.computer;
	}
};

const checkFinalWinner = (playerScore, computerScore) => {
	if (playerScore >= 5) {
		return "PLAYER WINS THE TOURNAMENT";
	} else if (computerScore >= 5) {
		return "COMPUTER WINS THE TOURNAMENT";
	} else if (playerScore >= 5 && computerScore >= 5) {
		return "THE TOURNAMENT IS A TIE!!";
	} else {
		return;
	}
};

const game = () => {
	let playerScore = 0;
	let computerScore = 0;

	const winnerSquare = document.getElementById("winner-square");
	const scoreSquare = document.getElementById("score-square");
	scoreSquare.innerHTML = `PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;

	document.getElementById("btn-rock").addEventListener("click", () => {
		const computerChoice = getComputerSelection();
		const roundWinner = playRound("rock", computerChoice);

		if ((playerScore >= 5) | (computerScore >= 5)) {
			winnerSquare.innerHTML = checkFinalWinner(
				playerScore,
				computerScore
			);
		} else {
			if (roundWinner === RoundPlayers.computer) {
				computerScore = computerScore + 1;
				scoreSquare.innerHTML = `PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;
				winnerSquare.innerHTML = `${roundWinner} win, ${computerChoice} win against ROCK`;
			} else if (roundWinner === RoundPlayers.player) {
				playerScore += 1;
				scoreSquare.innerHTML = `PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;
				winnerSquare.innerHTML = `${roundWinner} win, ROCK win against ${computerChoice}`;
			} else {
				winnerSquare.innerHTML = "It is a TIE!";
			}
		}
	});

	document.getElementById("btn-paper").addEventListener("click", () => {
		const computerChoice = getComputerSelection();
		const roundWinner = playRound("paper", computerChoice);

		if ((playerScore >= 5) | (computerScore >= 5)) {
			winnerSquare.innerHTML = checkFinalWinner(
				playerScore,
				computerScore
			);
		} else {
			if (roundWinner === RoundPlayers.computer) {
				computerScore = computerScore + 1;
				scoreSquare.innerHTML = `PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;

				winnerSquare.innerHTML = `${roundWinner} win, ${computerChoice} win against PAPER`;
			} else if (roundWinner === RoundPlayers.player) {
				playerScore += 1;
				scoreSquare.innerHTML = `PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;

				winnerSquare.innerHTML = `${roundWinner} win, PAPER win against ${computerChoice}`;
			} else {
				winnerSquare.innerHTML = "It is a TIE!";
			}
		}
	});

	document.getElementById("btn-scissors").addEventListener("click", () => {
		const computerChoice = getComputerSelection();
		const roundWinner = playRound("scissors", computerChoice);
		if ((playerScore >= 5) | (computerScore >= 5)) {
			winnerSquare.innerHTML = checkFinalWinner(
				playerScore,
				computerScore
			);
		} else {
			if (roundWinner === RoundPlayers.computer) {
				computerScore = computerScore + 1;
				scoreSquare.innerHTML = `PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;

				winnerSquare.innerHTML = `${roundWinner} win, ${computerChoice} win against SCISSORS`;
			} else if (roundWinner === RoundPlayers.player) {
				playerScore += 1;
				scoreSquare.innerHTML = `PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;

				winnerSquare.innerHTML = `${roundWinner} win, SCISSORS    win against ${computerChoice}`;
			} else {
				winnerSquare.innerHTML = "It is a TIE!";
			}
		}
	});
};

game();
