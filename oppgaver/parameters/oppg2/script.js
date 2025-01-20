document.addEventListener("DOMContentLoaded", () => {
	const submitButton = document.getElementById("submit");
	const mobileInput = document.getElementById("phone");
	const fornavnInput = document.getElementById("fornavn");
	const etternavnInput = document.getElementById("etternavn");

	submitButton.addEventListener("click", () => {
		addFormValues(mobileInput.value, fornavnInput.value, etternavnInput.value);
	});
});

function addFormValues(phone, fornavn, etternavn) {
	const list = document.getElementById("list");
	console.log(phone, fornavn, etternavn);
	let el = document.createElement("div");
	el.className = "list-item";
	el.innerHTML = "mobil nummer: " + phone + ", fornavn: " + fornavn + ", etternavn: " + etternavn;
	list.appendChild(el);
}
