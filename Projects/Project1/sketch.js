let size = 25;

let bears = []

const palette = ["white", "orange", "yellow", "red", "grey"]

let placement = randomIntFromInterval(50, 1500);
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function spawn() {
    
    const bear = {
       
        x: randomIntFromInterval(300, 1200),
        y: randomIntFromInterval(550, 650),
        size: 25,
        alive: true,
        speed: Math.random() / 10,
        color: palette[randomIntFromInterval(0, 4)]

    } ;
    
    bears.push(bear);
    
}

function setup() {

    createCanvas(canvasWidth, canvasHeight);




    drawGrid(canvasWidth, canvasHeight);
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let counter = 0;



function draw() {
    
    drawBackground(0, 0, canvasWidth, canvasHeight, "lightblue")
    drawBackground(0, 500, canvasWidth, 300, "green");
    drawBamboo(200, 5, 30, canvasHeight, "darkgreen" );
    drawBamboo(250, 50, 35, canvasHeight, "darkgreen" );
    drawBamboo(120, 100, 20, canvasHeight, "darkgreen" );
    drawBamboo(1400, 5, 30, canvasHeight, "darkgreen" );
    drawBamboo(1250, 50, 35, canvasHeight, "darkgreen" );
    drawBamboo(1320, 100, 20, canvasHeight, "darkgreen" );
    drawBamboo(1460, 80, 25, canvasHeight, "darkgreen" );
    
   
    size = size + .1;
   
    counter++;

    
    if (counter % 200 == 0) {
        spawn();
        
    }
    for (let i = 0; i < bears.length; i++) { 
       
        
        const bear = bears[i];
        if(bear.alive){
        drawCreature(bear.x + Math.sin(deltaTime)*3, bear.y, bear.size, bear.color, 'black');
        bear.size += bear.speed;
        
        }
       
    }

}


function drawBackground(centerX, centerY, width, height, fillColor, fillColor2) {
    fill(fillColor)
    rect(centerX, centerY, width, height)
}

function drawBamboo (centerX, centerY,width,height,fillColor,fillColor2){
let rivitHeight= centerY*2.5
let rivitThickness= height/1.6

fill(fillColor)
rect(centerX, centerY,width,height)
rect(centerX,rivitHeight ,width, rivitThickness)

}


function drawCreature(centerX, centerY, size, fillColor, fillColor2) {



    let noseTop = centerY - size / 9;
    let headY = centerY - size / 3;
    let bodyY = centerY + size / 2.75;
    let bodySize = size * 1.25;
    let armRight = centerX + size / 2;
    let armY = centerY + size / 5;
    let limbSize = size * .4;
    let armLeft = centerX - size / 2;
    let legY = centerY + size / 1.2;
    let legLeft = centerX - size / 2.3;
    let legRight = centerX + size / 2.3;
    let ear = centerY - size / 1.5;
    let earSize = size * .35;
    let noseRight = centerX + size / 11;
    let noseLeft = centerX - size / 11;
    let eyeLeft = centerX - size / 6;
    let eyeSize = size * .25;
    let eyeRight = centerX + size / 6
    let eyeY = centerY - size / 5


    fill(fillColor)
    circle(centerX, bodyY, bodySize) 
    fill(fillColor2)
    circle(armRight, armY, limbSize)
    circle(armLeft, armY, limbSize)
    circle(legRight, legY, limbSize)
    circle(legLeft, legY, limbSize)
    circle(legRight, ear, earSize)
    circle(legLeft, ear, earSize)
    fill(fillColor)
    circle(centerX, headY, size)
    fill(fillColor2)
    circle(eyeLeft, eyeY, eyeSize)
    circle(eyeRight, eyeY, eyeSize)
    triangle(centerX, noseTop, noseLeft, centerY, noseRight, centerY)
    fill("white")
    circle(eyeRight, eyeY - size / 20, eyeSize / 3)
    circle(eyeLeft, eyeY - size / 20, eyeSize / 3)


}

function mouseClicked() {
    
    for (let i = 0; i < bears.length; i++) {
        
        const bear = bears[i];
       
        let d = dist(bear.x, bear.y, mouseX, mouseY);
        if (d < bear.size ) {
            bear.alive=false;
            
    
        } 
    }
}
