const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const totalBreadDisplay = document.getElementById("totalBread");

const ingredientQuantities = {
	gjer: 25,
	vann: 9,
	hveteGrov: 500,
	hvetemel: 1000,
	meier: 50,
	salt: 2,
	sukker: 0.5,
};

const totalBreadTitle = document.getElementById("totalBreadTitle");
const ingGjer = document.getElementById("ingGjer");
const ingVann = document.getElementById("ingVann");
const ingHveteGrov = document.getElementById("ingHveteGrov");
const ingHvetemel = document.getElementById("ingHvetemel");
const ingMeier = document.getElementById("ingMeier");
const ingSalt = document.getElementById("ingSalt");
const ingSukker = document.getElementById("ingSukker");

let totalBread = 3;
let lessThan5BreadSugar = 0.5;
let moreThan5BreadLessThan10BreadSugar = 1;
let MoreThan10BreadSugar = 1.5;

const updateIngredients = () => {
	ingGjer.textContent = `${ingredientQuantities.gjer * totalBread} gr`;
	ingVann.textContent = `${ingredientQuantities.vann * totalBread} dl`;
	ingHveteGrov.textContent = `${ingredientQuantities.hveteGrov * totalBread} gram`;
	ingHvetemel.textContent = `${ingredientQuantities.hvetemel * totalBread} gram`;
	ingMeier.textContent = `${ingredientQuantities.meier * totalBread} gram`;
	ingSalt.textContent = `${ingredientQuantities.salt * totalBread} ts`;

	if (totalBread <= 5) {
		ingSukker.textContent = `${lessThan5BreadSugar} ss`;
	} else if (totalBread > 5 && totalBread <= 10) {
		ingSukker.textContent = `${moreThan5BreadLessThan10BreadSugar} ss`;
	} else {
		ingSukker.textContent = `${MoreThan10BreadSugar} ss`;
	}
};

addButton.addEventListener("click", () => {
	totalBread++;
	totalBreadDisplay.textContent = totalBread;
	updateIngredients();
});

removeButton.addEventListener("click", () => {
	if (totalBread > 1) {
		totalBread--;
		totalBreadDisplay.textContent = totalBread;
		totalBreadTitle.textContent = `oppskrift for ${totalBread} brød`;
		updateIngredients();
	}
});
updateIngredients();
