const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

const turnOn = (ev) => {
    if (elem.src === imgOff){  
    elem.src = imgOn;
}
else (){
    elem.src = imgOff;
}
};

// attach function to image's click event:
document.querySelector("#my_image").onclick = turnOn;