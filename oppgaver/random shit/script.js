let count = 1;
let button = document.getElementById("knapp");
let container = document.getElementById("images");

document.addEventListener("DOMContentLoaded", () => {
	button.addEventListener("click", () => {
		vis();
	});
});

function vis() {
	visBilde(count);
	count++;
}

function visBilde(n) {
	let e = document.createElement("img");
	e.src = "img/bilde" + n + ".jpg";
	e.alt = "bildeawdwadaw" + n;
	container.appendChild(e);
	console.log("");
}
