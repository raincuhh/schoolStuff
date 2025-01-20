let money = 7000;

document.addEventListener("DOMContentLoaded", () => {
	updateMoneyDisplay(money);
	document.getElementById("takeOut").addEventListener("click", () => {
		takeout();
	});
});

function updateMoneyDisplay(num) {
	document.getElementById("moneyDisplay").textContent = num;
}

function takeout() {
	const takeout100 = document.getElementById("takeout100");
	const takeout200 = document.getElementById("takeout200");
	const takeout500 = document.getElementById("takeout500");
	const takeout1000 = document.getElementById("takeout1000");

	if (takeout100.checked && money >= 100) {
		money -= 100;
	} else if (takeout200.checked && money >= 200) {
		money -= 200;
	} else if (takeout500.checked && money >= 500) {
		money -= 500;
	} else if (takeout1000.checked && money >= 1000) {
		money -= 1000;
	} else {
		alert("Insufficient funds or no option selected.");
		return;
	}
	updateMoneyDisplay(money);
}
