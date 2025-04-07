let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
	const choices = ["stein", "saks", "papir"];
	const computerChoice = choices[Math.floor(Math.random() * choices.length)];
	let result = "";

	if (playerChoice === computerChoice) {
		result = "Uavgjort! Begge valgte " + playerChoice;
	} else if (
		(playerChoice === "stein" && computerChoice === "saks") ||
		(playerChoice === "saks" && computerChoice === "papir") ||
		(playerChoice === "papir" && computerChoice === "stein")
	) {
		result = "Du vinner! " + playerChoice + " slår " + computerChoice;
		playerScore++;
	} else {
		result = "Du taper! " + computerChoice + " slår " + playerChoice;
		computerScore++;
	}
	document.getElementById("result").textContent = result;
	document.getElementById("playerScore").textContent = "spiller poeng: " + playerScore;
	document.getElementById("computerScore").textContent = "ai poeng: " + computerScore;
}

function restartGame() {
	playerScore = 0;
	computerScore = 0;
	document.getElementById("playerScore").textContent = playerScore;
	document.getElementById("computerScore").textContent = computerScore;
	document.getElementById("playerChoice").textContent = "-";
	document.getElementById("computerChoice").textContent = "-";
	document.getElementById("result").textContent = "-";
}

let navnn = "bob";
let ald = 17;

console.log("jeg er: " + ald + " år gammel, og heter " + navnn);
console.log(`Hei, ${navnn}!`); // skriver ut Hei, bob!

let navn = "Emma"; // String (ord, alfabetet)
let alder = 17; // Number (tall)
let erElev = true; // Boolean (sann eller falsk)

function logHelloWorld() {
	console.log("hei verden!!!");
}

function hall(params) {}

let randomTall = Math.random();
console.log(randomTall); // 0 til 1
let nedrundet = Math.floor(3.9);
console.log(nedrundet); // 3
let opprundet = Math.ceil(3.1);
console.log(opprundet); // 4
let avrundet = Math.round(3.5);
console.log(avrundet); // 4
let maxVerdi = Math.max(1, 5, 10, 3);
let minVerdi = Math.min(1, 5, 10, 3);
console.log(maxVerdi); // 10
console.log(minVerdi); // 1

let valg = Math.floor(Math.random() * 3); // 0, 1, eller 2
let valgTekst = "";

if (valg === 0) {
	valgTekst = "stein";
} else if (valg === 1) {
	valgTekst = "saks";
} else {
	valgTekst = "papir";
}
console.log(valgTekst);

let x = 15;
if (x > 20) {
	console.log("x er større enn 20");
} else if (x > 10) {
	console.log("x er større enn 10, men mindre enn eller lik 20");
} else {
	console.log("x er mindre enn eller lik 10");
}

function filter(arr, grense) {
	return arr.filter((e) => e > grense);
}

function filter2(arr, grense) {
	if ((arr.length = 0)) return [];
	let newArr = [];

	arr.forEach((num) => {
		if (num > grense) {
			newArr.push(num);
		}
	});

	return newArr;
}

console.log(filter2([1, 4, 7, 2, 8, 9], 5));

function adder(tall1, tall2) {
	return tall1 + tall2;
}

console.log(adder(1, 9)); // skriver ut 10 i consollen.

function doble(tall) {
	return tall * 2;
}

let resultat = doble(6); // resultat = 12
console.log(resultat); // skriver ut 12 I consollen.

thinggg = "wadwadwa";

var thinggg;

// En array med forskjellige verdier
const items = ["Eple", "Banan", "Appelsin", "Druer", "Jordbær"];

// Hente et element ved indeks
console.log("Første element:", items[0]);

// Legge til et nytt element i slutten
items.push("Mango");
console.log("Etter push:", items);

// Fjerne siste element
items.pop();
console.log("Etter pop:", items);

// Velge et tilfeldig element
const randomItem = items[Math.floor(Math.random() * items.length)];
console.log("Tilfeldig valg:", randomItem);

// Løkke gjennom arrayen
items.forEach((item, index) => {
	console.log(`Element ${index}: ${item}`);
});

for (let index = 0; index < array.length; index++) {
	const element = array[index];
}
