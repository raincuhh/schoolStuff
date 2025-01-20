document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("submit")?.addEventListener("click", () => {
		const inputValue = document.getElementById("inputThing");
		const num = parseInt(inputValue.value, 10);
		if (!isNaN(num)) {
			convertNumberToHoursMinutesSeconds(num);
		} else {
			alert("Please enter a valid number!");
		}
	});
});

function convertNumberToHoursMinutesSeconds(num) {
	const hours = Math.floor(num / 3600);
	const minutes = Math.floor((num % 3600) / 60);
	const seconds = num % 60;

	const calculatedValueElement = document.getElementById("calculatedValue");
	calculatedValueElement.textContent = "hours: " + hours + ", minutes: " + minutes + ", seconds: " + seconds;
}
