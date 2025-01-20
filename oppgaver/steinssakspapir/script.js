document.addEventListener("DOMContentLoaded", () => {
	const playerScoreEl = document.getElementById("player-score");
	const aiScoreEl = document.getElementById("ai-score");
	const aiChoiceEl = document.getElementById("ai-valg").querySelector("img");

	const choices = ["stein", "saks", "papir"];
	const images = {
		stein: "./images/maskin_stein.png",
		saks: "./images/maskin_saks.png",
		papir: "./images/maskin_papir.png",
		unknown: "./images/maskin_ukjent.png",
	};

	let playerScore = 0;
	let aiScore = 0;

	const updateScoreboard = () => {
		playerScoreEl.textContent = playerScore;
		aiScoreEl.textContent = aiScore;
	};

	const getAiChoice = () => {
		const idx = Math.floor(Math.random() * choices.length);
		return choices[idx];
	};

	const checkWinCondition = (playerChoice, aiChoice) => {
		if (playerChoice === aiChoice) return "tie";
		if (
			(playerChoice === "stein" && aiChoice === "saks") ||
			(playerChoice === "saks" && aiChoice === "papir") ||
			(playerChoice === "papir" && aiChoice === "stein")
		) {
			return "player";
		}
		return "ai";
	};

	const handleChoice = (playerChoice) => {
		if (playerScore >= 5 || aiScore >= 5) return;

		const aiChoice = getAiChoice();
		aiChoiceEl.src = images[aiChoice];

		const winner = checkWinCondition(playerChoice, aiChoice);
		if (winner === "player") {
			playerScore++;
		} else if (winner === "ai") {
			aiScore++;
		}

		updateScoreboard();

		if (playerScore === 5) {
			setTimeout(() => {
				alert("Du vant.");
				window.location.reload();
			}, 100);
		} else if (aiScore === 5) {
			setTimeout(() => {
				alert("Ai vant.");
				window.location.reload();
			}, 100);
		}
	};

	document.getElementById("stein").onmouseover = () => handleChoice("stein");
	document.getElementById("saks").onmouseover = () => handleChoice("saks");
	document.getElementById("papir").onmouseover = () => handleChoice("papir");

	aiChoiceEl.src = images.unknown;
	updateScoreboard();
});
