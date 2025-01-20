const bgButton = document.getElementById("bg-button");
const fontSizeButton = document.getElementById("font-button");

let changedBg = false;
let changedFontSize = false;

bgButton.addEventListener("click", () => {
	if (changedBg) {
		document.documentElement.style.setProperty("--bg-color", "rgb(255, 255, 255)");
		changedBg = false;
	} else {
		document.documentElement.style.setProperty("--bg-color", "rgb(100, 100, 100)");
		changedBg = true;
	}
});

fontSizeButton.addEventListener("click", () => {
	if (changedFontSize) {
		document.documentElement.style.setProperty("--font-size", "16px");
		changedFontSize = false;
	} else {
		document.documentElement.style.setProperty("--font-size", "24px");
		changedFontSize = true;
	}
});
