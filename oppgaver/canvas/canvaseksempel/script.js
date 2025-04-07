const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const colors = [
	"#FF5733",
	"#33FF57",
	"#3357FF",
	"#FF33A1",
	"#FFD700",
	"#00CED1",
	"#FF4500",
	"#8A2BE2",
	"#20B2AA",
	"#DC143C",
	"#FF8C00",
	"#32CD32",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

let rand = Math.round(Math.random() * 100);
console.log(rand);

for (let i = 0; i < rand; i++) {
	createRect(
		Math.round(Math.random() * canvas.clientHeight),
		Math.round(Math.random() * canvas.clientWidth),
		Math.round(Math.random() * 200),
		Math.round(Math.random() * 200)
	);
}

function createRect(x, y, w, h) {
	const color = getRandomColor();

	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.stroke();
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.fill();

	setInterval(() => {
		y = y - 60;
	}, 60);
}

start();

function start() {
	setInterval(() => {
		gameloop();
	}, 60);
}

function gameloop() {}
