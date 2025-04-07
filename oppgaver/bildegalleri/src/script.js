document.addEventListener("DOMContentLoaded", () => {
	let nextButtonEl = document.getElementById("nextButton");
	let prevButtonEl = document.getElementById("prevButton");
	let countPreviewEl = document.getElementById("countPreview");
	let currentImageEl = document.getElementById("currentImage");

	const bilder = ["bilde1.jpg", "bilde2.jpg", "bilde3.jpg"];

	let idx = 0;

	nextButtonEl.addEventListener("click", next);
	prevButtonEl.addEventListener("click", prev);

	currentImageEl.src = "img/" + bilder[idx];
	countPreviewEl.textContent = "1" + "/" + bilder.length;

	function next() {
		idx = (idx + 1) % bilder.length;
		updateGallery();
	}

	function prev() {
		idx = (idx - 1 + bilder.length) % bilder.length;
		updateGallery();
	}

	function updateGallery() {
		currentImageEl.src = "img/" + bilder[idx];
		countPreviewEl.textContent = idx + 1 + "/" + bilder.length;
	}

	setInterval(() => {
		next();
	}, 3 * 1000);
});
