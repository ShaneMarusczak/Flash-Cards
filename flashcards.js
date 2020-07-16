"use strict";
(() => {
	const [flipCard] = document.getElementsByClassName("flip-card");
	const [innerFlipCard] = document.getElementsByClassName("flip-card-inner");
	flipCard.addEventListener("click", () => {
		if (innerFlipCard.classList.contains("flip-card-flip")) {
			innerFlipCard.classList.remove("flip-card-flip");
		} else {
			innerFlipCard.classList.add("flip-card-flip");
		}
	});
})();
