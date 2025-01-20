const fsButton = document.getElementById("fullscreen-toggle");
const showDagensButton = document.getElementById("show-dagens");
const removeDagensButton = document.getElementById("remove-dagens");

const dagensBox = document.getElementById("dagens-box");
let dagensBoxHidden = true;

const optionsBox = document.getElementById("options-box");
let optionsBoxHidden = false;

function getCurrentDay() {
	const day = new Date().getDay();

	switch (day) {
		case 1:
			return "mandag";
		case 2:
			return "tirsdag";
		case 3:
			return "onsdag";
		case 4:
			return "torsdag";
		case 5:
			return "fredag";
		case 6:
			return "lørdag";
		case 7:
			return "søndag";
	}
}

console.log("the day is: ", getCurrentDay());

let dayToDagens = {
	mandag: {
		dag: "mandag",
		path: "./images/bilde1.jpg",
		navn: "Spagetti bolognese",
		pris: "50",
	},
	tirsdag: {
		dag: "tirsdag",
		path: "./images/bilde2.jpg",
		navn: "Lasagne",
		pris: "45",
	},
	onsdag: {
		dag: "onsdag",
		path: "./images/bilde3.jpg",
		navn: "Pizza",
		pris: "40",
	},
	torsdag: {
		dag: "torsdag",
		path: "./images/bilde4.jpg",
		navn: "Wiener & Potetstappe",
		pris: "40",
	},
	fredag: {
		dag: "fredag",
		path: "./images/bilde5.jpg",
		navn: "Hamburger",
		pris: "45",
	},
	lørdag: {},
	søndag: {},
};

function fetchDagens(day) {
	return dayToDagens[day];
}

const dagensDayEl = document.getElementById("dagens-day");
const dagensImgEl = document.getElementById("dagens-img");
const dagensNameEl = document.getElementById("dagens-name");
const dagensPriceEl = document.getElementById("dagens-price");

function processDagens() {
	const dagensData = fetchDagens(getCurrentDay());
	// console.log(dagensData);

	dagensDayEl.textContent = dagensData.dag;
	dagensImgEl.src = dagensData.path;
	dagensNameEl.textContent = dagensData.navn;
	dagensPriceEl.textContent = dagensData.pris + " kr";
}

function init() {
	// fullscreen toggle
	fsButton.addEventListener("click", () => {
		if (!optionsBoxHidden) {
			optionsBoxHidden = !optionsBoxHidden;
			fsButton.textContent = "vis";
			optionsBox.style.display = "none";
		} else {
			optionsBoxHidden = !optionsBoxHidden;
			fsButton.textContent = "hjem";
			optionsBox.style.display = "flex";
		}
	});

	//dagens toggle
	showDagensButton.addEventListener("click", () => {
		if (dagensBoxHidden) {
			dagensBox.style.display = "block";
			showDagensButton.textContent = "hjem dagens";
			dagensBoxHidden = !dagensBoxHidden;
			processDagens();
		} else {
			dagensBox.style.display = "none";
			showDagensButton.textContent = "vis dagens";
			dagensBoxHidden = !dagensBoxHidden;
		}
	});

	//dagens remove toggle
	removeDagensButton.addEventListener("click", () => {
		dagensImgEl.style.display = "none";

		document.getElementById("about-dagens").style.display = "none";

		let newEl = document.createElement("div");
		newEl.textContent = "ingen ny dagens idag";
		dagensBox.appendChild(newEl);
		newEl.style.justifyContent = "center";
		newEl.style.display = "flex";
		newEl.style.width = "100%";
	});
}

document.addEventListener("DOMContentLoaded", () => {
	init();
});
