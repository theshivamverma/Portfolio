particlesJS.load('particles','js/particles.json');

const c = document.querySelector("#uiux");
const cl = document.querySelector("#showcase");
const b = document.querySelector("#blank");
const wp = document.querySelector("#webprojects");

var f=0
c.addEventListener("click",function(){
        if(f == 0){
            cl.style.display = "block";
            wp.style.display = "none";
            b.style.display = "none";
            cl.style.display = "flex";
            cl.style.justifyContent = "space-between";
            f = 1;
            f1 = 0;
        }
        else{
            cl.style.display = "none";
            b.style.display = "block";
            f = 0;
        }
})

const w = document.querySelector("#web");
var f1 = 0;
w.addEventListener("click",function(){
        if(f1 == 0){
            wp.style.display = "block";
            cl.style.display = "none";
            b.style.display = "none";
            f1 = 1;
            f = 0;
        }
        else{
            wp.style.display = "none";
            b.style.display = "block";
            f1 = 0;
        }
})

var x = document.querySelectorAll(".websites");

x.forEach(elem => {
    elem.addEventListener("mouseenter", function(){
        elem.innerHTML = `<button id="btn"> Visit Website</button><div id="top"></div>`
        var top = document.querySelector("#top");
        top.style.top = "0%"
    })

    elem.addEventListener("mouseleave", function() {
        elem.innerHTML = ``;
    })
})


const modal = document.querySelector("#modalpopup")
const cont = document.querySelector("#cont")

function openmodal(path){
    modal.style.display = "block";
    cont.src = path;
}


const cls = document.querySelector("#cl");
cls.addEventListener("click",function(){
    modal.style.display = "none";
})


window.addEventListener("click",function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})