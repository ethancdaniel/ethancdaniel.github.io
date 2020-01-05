function toggleButtons(index) {
	let descriptionDivs = document.getElementsByClassName("work-description");
	for (let i = 0; i < descriptionDivs.length; i++) {
		let description = descriptionDivs[i];
		if (i == index) {
			description.style.display = "block";
			console.log("set " + i + " to visible with index " + index);
		} else {
			description.style.display = "none";
			console.log("set " + i + " to hidden with index " + index);
		}
	}
}