particlesJS.load("particles", "js/particles.json");
particlesJS.load("bio", "js/particles.json");
particlesJS.load("projects", "js/particles.json");

import projects from "./projects.js";

let hcj = document.querySelector("#hcj");
let react = document.querySelector("#react");
let mern = document.querySelector("#mern");

var selected = "hcj";

function displayProjects() {
  let currentSelection = projects[selected];
  document.querySelector(".projects").style.height =
    100 + currentSelection.length * 26 + "vh";

  if (window.matchMedia("screen and (max-width: 768px)").matches) {
    document.querySelector(".projects").style.height =
      100 + currentSelection.length * 30 + "vh";
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
                ? `<a href="${p.source}">
              <button>View Source Code <i class="ri-github-fill"></i></button>
            </a>`
                : ""
            }
          </div>
        </div>`;
  });
}

window.addEventListener("load", function () {
  displayProjects();
});

hcj.addEventListener("click", function () {
  document.querySelector(".project-container").innerHTML = ``;
  selected = "hcj";
  displayProjects();
});

react.addEventListener("click", function () {
  document.querySelector(".project-container").innerHTML = ``;
  selected = "react";
  displayProjects();
});

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


// const c = document.querySelector("#uiux");
// const cl = document.querySelector("#showcase");
// const b = document.querySelector("#blank");
// const wp = document.querySelector("#webprojects");

// var f=0
// c.addEventListener("click",function(){
//         if(f == 0){
//             cl.style.display = "block";
//             wp.style.display = "none";
//             b.style.display = "none";
//             cl.style.display = "flex";
//             cl.style.justifyContent = "space-between";
//             f = 1;
//             f1 = 0;
//         }
//         else{
//             cl.style.display = "none";
//             b.style.display = "block";
//             f = 0;
//         }
// })

// const w = document.querySelector("#web");
// var f1 = 0;
// w.addEventListener("click",function(){
//         if(f1 == 0){
//             wp.style.display = "block";
//             cl.style.display = "none";
//             b.style.display = "none";
//             f1 = 1;
//             f = 0;
//         }
//         else{
//             wp.style.display = "none";
//             b.style.display = "block";
//             f1 = 0;
//         }
// })

// var x = document.querySelectorAll(".static");

// x.forEach((elem, index) => {
//     elem.addEventListener("mouseenter", function(){
//         elem.innerHTML = `<a target="_blank" href="https://project${index + 1}web.netlify.app"><button id="btn"> Visit Website</button></a><div id="top"></div>`
//         var top = document.querySelector("#top");
//         top.style.top = "0%"
//     })

//     console.log(index)

//     elem.addEventListener("mouseleave", function() {
//         elem.innerHTML = ``;
//     })
// })

// var y = document.querySelectorAll(".anim");

// y.forEach((elem, index) => {
//     elem.addEventListener("mouseenter", function(){
//         elem.innerHTML = `<a target="_blank" href="https://shivamwebanim${index + 1}.netlify.app"><button id="btn"> Visit Website</button></a><div id="top"></div>`
//         var top = document.querySelector("#top");
//         top.style.top = "0%"
//     })

//     console.log(index)

//     elem.addEventListener("mouseleave", function() {
//         elem.innerHTML = ``;
//     })
// })

// var z = document.querySelectorAll(".resp");

// z.forEach((elem, index) => {
//     elem.addEventListener("mouseenter", function(){
//         elem.innerHTML = `<a target="_blank" href="https://shivamwebresp${index + 1}.netlify.app"><button id="btn"> Visit Website</button></a><div id="top"></div>`
//         var top = document.querySelector("#top");
//         top.style.top = "0%"
//     })

//     console.log(index)

//     elem.addEventListener("mouseleave", function() {
//         elem.innerHTML = ``;
//     })
// })

// const modal = document.querySelector("#modalpopup")
// const cont = document.querySelector("#cont")

// function openmodal(path){
//     modal.style.display = "block";
//     cont.src = path;
// }

// const cls = document.querySelector("#cl");
// cls.addEventListener("click",function(){
//     modal.style.display = "none";
// })

// window.addEventListener("click",function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// })

// "value": "#1cd0dc",
