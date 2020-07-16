"use strict";
(() => {
	let currentCardIndex = 0;
	const [flipCard] = document.getElementsByClassName("flip-card");
	const [innerFlipCard] = document.getElementsByClassName("flip-card-inner");
	const studyData = [
		["Numerator", "Top Number Of A Fraction"],
		["Denomonator", "Bottom Number Of A Fraction"]
	];
	const order = [];

	const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

	function setCardData() {
		[document.getElementById("term").innerText] = studyData[order[currentCardIndex]];
		[, document.getElementById("definition").innerText] = studyData[order[currentCardIndex]];
	}

	function generateOrder() {
		if (order.length != studyData.length) {
			let nextNumber = randomIntFromInterval(0, studyData.length - 1);
			while (order.includes(nextNumber)) {
				nextNumber = randomIntFromInterval(0, studyData.length - 1);
			}
			order.push(nextNumber);
			generateOrder();
		}
	}

	function nextCard() {
		if (currentCardIndex < studyData.length - 1) {
			currentCardIndex++;
			setCardData();
		}
	}

	function previousCard() {
		if (currentCardIndex > 0) {
			currentCardIndex--;
			setCardData();
		}
	}

	(() => {
		flipCard.addEventListener("click", () => {
			if (innerFlipCard.classList.contains("flip-card-flip")) {
				innerFlipCard.classList.remove("flip-card-flip");
			} else {
				innerFlipCard.classList.add("flip-card-flip");
			}
		});
		generateOrder();
		setCardData();
		document.getElementById("forwardButton").addEventListener("click", nextCard);
		document.getElementById("backButton").addEventListener("click", previousCard);
	})();
})();
