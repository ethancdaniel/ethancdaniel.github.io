if (document.readyState === 'loading') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', () => {
		init();
	});
}

function init() {
	//Initialize navbar elements
	//const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	const navLinks = document.querySelectorAll("a[href^='#");

	navLinks.forEach( link => {
		link.onclick = function () {
			let ref = "#" + link.href.split('#')[1];
			if (1==0) {
				window.scrollTo(0, document.querySelector(ref).offsetTop);
				
			} else {
				window.scroll({
					left: 0,
					top: document.querySelector(ref.offsetTop)
				});
			}
		};
	});
	//Initialize work experience elements
	let descriptionButtons = document.getElementsByClassName("work-btn");
	Array.prototype.forEach.call(descriptionButtons, element => {
		element.onclick = function() {toggleButtons(element.tabIndex)};
	});

	// Navbar scrolling, initialize prevpos to high number so that navbar shows
	var prevPos = 999;
	window.onscroll = function() {
		var currentPos = window.pageYOffset;
		if (prevPos > currentPos) {
			document.getElementsByTagName("nav")[0].className = "nav-visible";
		} else {
			document.getElementsByTagName("nav")[0].className = "nav-invisible";
		}
		prevPos = currentPos;
	}
}

function toggleButtons(index) {
	let descriptionDivs = document.getElementsByClassName("work-description");
	for (let i = 0; i < descriptionDivs.length; i++) {
		let description = descriptionDivs[i];
		if (i == index) {
			description.style.display = "block";
		} else {
			description.style.display = "none";
		}
	}

	let indicator = document.getElementsByClassName("indicator")[0];
	let nameButtons = document.getElementsByClassName("work-btn");
	
	switch (index) {
		case 0:
			indicator.className = "indicator zeroth-elem";
			break;
		case 1:
			indicator.className = "indicator first-elem";
			break;
		case 2:
			indicator.className = "indicator second-elem";
			break;
		case 3:
			indicator.className = "indicator third-elem";
			break;
	}

	Array.prototype.forEach.call(nameButtons, element => {
		if (element.tabIndex === index) {
			element.className = "work-btn work-btn-selected";
		} else {
			element.className = "work-btn work-btn-not-selected";
		}
	});
}