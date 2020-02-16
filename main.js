let buttonWidths = [];
$(document).ready(function() {
  //Initialize navbar elements
  //const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  const navLinks = document.querySelectorAll("a[href^='#");

  navLinks.forEach(link => {
    link.onclick = function() {
      let ref = "#" + link.href.split("#")[1];
      if (1 == 0) {
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
    element.onclick = function() {
      toggleButtons(element.tabIndex);
    };
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
  };

  //Initialize hamburger menu
  var hamburgerMenu = document.querySelector(".hamburger");
  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("is-active");
  });

  //Indicator for experience section
  let firstButton = document.getElementById("work-experience-0");
  $(".indicator").width(firstButton.offsetWidth);

  let nameButtons = document.getElementsByClassName("work-btn");
  // Array that stores all button widths in experience section
  for (let i = 0; i < 4; i++) {
    buttonWidths.push(nameButtons[i].offsetWidth);
  }
  console.log(buttonWidths);
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

  let nameButtons = document.getElementsByClassName("work-btn");
  console.log("Previous left value" + $(".indicator").width());
  $(".indicator").width(buttonWidths[index]);
  console.log("New left value" + $(".indicator").width());

  let sumOffset = 0;
  for (let i = 0; i < index; i++) {
    sumOffset += buttonWidths[i];
  }

  $(".indicator").css("left", sumOffset);

  let indicator = document.getElementsByClassName("indicator")[0];

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
