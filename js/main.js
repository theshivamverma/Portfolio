particlesJS.load('particles','js/particles.json');

const c = document.querySelector("#uiux");
f=0
c.addEventListener("click",function(){
    const cl = document.querySelector("#showcase");
    const b = document.querySelector("#blank");
        if(f == 0){
            cl.style.display = "block";
            b.style.display = "none"
            cl.style.display = "flex";
            cl.style.justifyContent = "space-between"
            f = 1;
        }
        else{
            cl.style.display = "none";
            b.style.display = "block"
            f = 0;
        }
})

const modal = document.querySelector("#modalpopup")
const cont = document.querySelector("#cont")

function openmodal(path){
    modal.style.display = "block";
    cont.src = path;
}


const cl = document.querySelector("#cl");
cl.addEventListener("click",function(){
    modal.style.display = "none";
})


window.addEventListener("click",function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})