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

const game = () => {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		const playerChoice = playerSelection();
		const computerChoice = getComputerSelection();

		const roundWinner = playRound(playerChoice, computerChoice);
		if (roundWinner === RoundPlayers.computer) {
			computerScore = computerScore + 1;
			console.log(
				`${roundWinner} win, ${computerChoice} win against ${playerChoice}`
			);
		} else if (roundWinner === RoundPlayers.player) {
			playerScore += 1;
			console.log(
				`${roundWinner} win, ${playerChoice} win against ${computerChoice}`
			);
		} else {
			console.log("It is a TIE!");
		}
		console.log({ playerScore, computerScore });
	}
};

game();
