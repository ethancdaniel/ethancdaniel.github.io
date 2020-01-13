let descriptionButtons = document.getElementsByClassName("work-btn");
	Array.prototype.forEach.call(descriptionButtons, element => {
		element.onclick = function() {toggleButtons(element.tabIndex)};
	});

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