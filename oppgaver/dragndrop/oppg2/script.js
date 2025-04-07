const numToLetter = {
	1: "en",
	2: "to",
	3: "tre",
	4: "fire",
	5: "five",
	6: "seks",
	7: "syv",
	8: "åtte",
	9: "ni",
	10: "ti",
};

const init = (numberOfImages = 10) => {
	const getDynamicRandomNumberOfImagesArr = () => {
		let arr = [];
		for (let i = 1; i < numberOfImages + 1; i++) {
			arr.push(i);
		}
		return arr.sort((a, b) => 0.5 - Math.random());
	};

	let randIntArr = getDynamicRandomNumberOfImagesArr();

	const imagesPath = "images/";
	const imagesPrefix = "bilde";
	const imagesSuffix = ".jpg";

	const boxesContainerEl = document.querySelector("#number-boxes");
	const imgBoxesContainerEl = document.querySelector("#img-boxes");

	for (let i = 0; i < numberOfImages; i++) {
		let boxEl = document.createElement("div");
		boxEl.textContent = numToLetter[i + 1];
		boxEl.classList = "number-box";
		boxEl.setAttribute("data-number", i + 1);
		boxesContainerEl.appendChild(boxEl);

		boxEl.addEventListener("dragover", (e) => {
			e.preventDefault();
		});

		boxEl.addEventListener("drop", (e) => {
			e.preventDefault();
			const draggedNumber = e.dataTransfer.getData("text/plain");
			const targetNumber = e.target.getAttribute("data-number");

			const draggedImg = document.querySelector(`[data-number="${draggedNumber}"]`);

			if (draggedNumber === targetNumber) {
				if (!e.target.contains(draggedImg)) {
					e.target.classList.add("correct");
					e.target.appendChild(draggedImg);
				}
			} else {
				if (!e.target.contains(draggedImg)) {
					e.target.classList.add("incorrect");
					e.target.appendChild(draggedImg);
				}
			}
		});

		let imgEl = document.createElement("img");
		let randIndex = Math.floor(Math.random() * randIntArr.length);
		let randInt = randIntArr.splice(randIndex, 1)[0];

		imgEl.src = imagesPath + imagesPrefix + randInt + imagesSuffix;
		imgEl.classList = "img-box";
		imgEl.setAttribute("data-number", randInt);
		imgBoxesContainerEl.appendChild(imgEl);

		imgEl.draggable = true;
		imgEl.addEventListener("dragstart", (e) => {
			e.dataTransfer.setData("text/plain", e.target.getAttribute("data-number"));
		});
	}
};

document.addEventListener("DOMContentLoaded", () => init(10));
