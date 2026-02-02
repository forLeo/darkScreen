let isLightOn = true;

let movementTimer;


function toggleLight() {
    document.body.removeAttribute("style");
    document.getElementById("toggle").removeAttribute("style");

    if(isLightOn) {
        document.body.classList.add("darkMode")
        document.getElementById("toggle").innerText = "Turn on the light!";
        isLightOn = false;
    } else {
        document.body.classList.remove("darkMode")
        document.getElementById("toggle").innerText = "Turn off the light!";
        isLightOn = true;
    }
}

window.addEventListener('mousemove', () => {
    document.body.classList.add("mouseIsMoving");
    clearTimeout(movementTimer);
    movementTimer = setTimeout(() => {
        document.body.classList.remove("mouseIsMoving");
    }, 2000); 
});