function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
     drawCreature(92, 115, 85, '#5e6976', '#1b324d');
     drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
     drawCreature(433, 227, 99, '#94ba77', '#3f5364');
    drawCreature(200, 300, 200, 'orange', 'black');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

function drawCreature(centerX, centerY, size, fillColor, fillColor2) {

let noseTop=centerY-size/9;
let headY=centerY-size/3;
let bodyY=centerY+size/2.75;
let bodySize=size*1.25;
let armRight=centerX+size/2;
let armY=centerY+size/5;
let limbSize=size*.4;
let armLeft=centerX-size/2;
let legY=centerY+size/1.2;
let legLeft=centerX-size/2.3;
let legRight=centerX+size/2.3;
let ear=centerY-size/1.5;
let earSize=size*.35;
let noseRight=centerX+size/11;
let noseLeft=centerX-size/11;
let eyeLeft=centerX-size/6;
let eyeSize=size*.25;
let eyeRight=centerX+size/6
let eyeY=centerY-size/5

fill(fillColor)
    circle(centerX,bodyY,bodySize) //200,400,250
    fill(fillColor2)
    circle(armRight,armY,limbSize)
    circle(armLeft,armY,limbSize)
    circle(legRight,legY,limbSize)
    circle(legLeft,legY,limbSize)
circle(legRight,ear,earSize)
circle(legLeft,ear,earSize)
    fill(fillColor)
circle(centerX,headY,size)
fill(fillColor2)
circle(eyeLeft,eyeY,eyeSize)
// circle(eyeLeft*.98,eyeY*1.01,eyeSize) these dont work unless the 2ndary color is black :/
// circle(eyeRight*1.02,eyeY*1.01,eyeSize)
circle(eyeRight,eyeY,eyeSize)
triangle(centerX,noseTop,noseLeft,centerY,noseRight,centerY)
fill("white")
circle(eyeRight,eyeY-size/20,eyeSize/3)
circle(eyeLeft,eyeY-size/20,eyeSize/3)
// fill("black")
// circle(eyeRight,eyeY-size/20,eyeSize/10)
// circle(eyeLeft,eyeY-size/20,eyeSize/10)  looks bad


}