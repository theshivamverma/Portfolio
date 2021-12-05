particlesJS.load("particles", "js/particles.json");

 if (window.matchMedia("screen and (max-width: 800px)").matches) {
   document.querySelector("nav").classList.add("active");
 }

if (window.matchMedia("screen and (max-width: 500px)").matches) {
  document.querySelector(".intro__heading").innerHTML = `
  Hello 👋, I am <br>
            <span class="highlight highlight--name">Shivam Verma </span>`;
  document.querySelector("nav").classList.add("active");
}

if (window.matchMedia("screen and (max-width: 400px)").matches) {
  document.querySelector(".intro__heading").innerHTML = `
   Hello 👋, I am <br>
            <span class="highlight highlight--name">Shivam Verma </span>`;
  document.querySelector(
    ".intro__subheading"
  ).innerHTML = `I am a <span class="highlight">Full Stack Developer</span>`;
  document.querySelector("nav").classList.add("active");
}


if (!window.matchMedia("screen and (max-width: 800px)").matches) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 450) {
      if (!document.querySelector("nav").classList.contains("active")) {
        document.querySelector("nav").classList.toggle("active");
      }
    } else if (window.scrollY <= 0) {
      if (document.querySelector("nav").classList.contains("active")) {
        document.querySelector("nav").classList.toggle("active");
      }
    }
  });
}


import projects from "./projects.js";

let hcj = document.querySelector("#hcj");
let react = document.querySelector("#react");
let mern = document.querySelector("#mern");
let selectedCategory = document.querySelector(".category-selected");

var selected = "hcj";

function displayProjects() {
  let currentSelection = projects[selected];
  document.querySelector(".projects").style.height =
    100 + currentSelection.length * 36 + "vh";

  if (window.matchMedia("screen and (max-width: 768px)").matches) {
    document.querySelector(".projects").style.height =
      100 + currentSelection.length * 32 + "vh";
  }
  if (window.matchMedia("screen and (max-width: 500px)").matches) {
    document.querySelector(".projects").style.height =
      100 + currentSelection.length * 62 + "vh";
  }

   if (window.matchMedia("screen and (max-width: 400px)").matches) {
     document.querySelector(".projects").style.height =
       100 + currentSelection.length * 69 + "vh";
   }
  currentSelection.forEach(function (p) {
    let labelstring = p.labels.map(function (l) {
      return `<span class="label ${l}">${l}</span>`;
    });
    document.querySelector(".project-container").innerHTML =
      document.querySelector(".project-container").innerHTML +
      `<div class="project">
          <img class="project-image" src="${p.img}" alt="">
          <div class="project-desc">
            <p>${p.desc}</p>
            ${labelstring.join(" ")}
            <a href="${p.livelink}" target="_blank">
              <button>Visit Live Project<i class="ri-window-fill"></i></button>
            </a>
            ${
              p.source !== undefined
                ? `<a href="${p.source}" target="_blank">
              <button>View Source Code <i class="ri-github-fill"></i></button>
            </a>`
                : ""
            }
          </div>
        </div>`;
  });

  if (selected == "hcj") {
    selectedCategory.textContent = `HTML, CSS & JS Projects`;
  } else if (selected == "react") {
    selectedCategory.textContent = `React Projects`;
  }
}

// window.addEventListener("load", function () {
//   displayProjects();
// });

// hcj.addEventListener("click", function () {
//   document.querySelector(".project-container").innerHTML = ``;
//   selected = "hcj";
//   displayProjects();
// });

// react.addEventListener("click", function () {
//   document.querySelector(".project-container").innerHTML = ``;
//   selected = "react";
//   displayProjects();
// });

document.querySelectorAll(".menu__toggle").forEach(function (x) {
  x.addEventListener("click", function () {
    document.querySelector(".links").classList.toggle("active");
  });
});

document.querySelectorAll(".links__link").forEach(function (x) {
  x.addEventListener("click", function () {
    document.querySelector(".links").classList.toggle("active");
  });
});









