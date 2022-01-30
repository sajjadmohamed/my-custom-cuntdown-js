// Wrap every letter in a span
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime
	.timeline({loop: true})
	.add({
		targets: ".ml2 .letter",
		scale: [4, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 950,
		delay: (el, i) => 70 * i,
	})
	.add({
		targets: ".ml2",
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 100000,
	});

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime
	.timeline({loop: true})
	.add({
		targets: ".ml1 .letter",
		scale: [0.3, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 600,
		delay: (el, i) => 70 * (i + 1),
	})
	.add({
		targets: ".ml1 .line",
		scaleX: [0, 1],
		opacity: [0.5, 1],
		easing: "easeOutExpo",
		duration: 700,
		offset: "-=875",
		delay: (el, i, l) => 80 * (l - i),
	})
	.add({
		targets: ".ml1",
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 10000,
	});

// Wrap every letter in a span
var textWrapper = document.querySelector(".complete-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime
	.timeline({loop: true})
	.add({
		targets: ".complete-title .letter",
		opacity: [0, 1],
		easing: "easeInOutQuad",
		duration: 1000,
		delay: (el, i) => 150 * (i + 1),
	})
	.add({
		targets: ".complete-title",
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 10000,
	});
