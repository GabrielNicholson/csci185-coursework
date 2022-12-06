
let size = 25;

let bubbles = []


// let placement = randomIntFromInterval(50, 1500);
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight * 5;

function spawn() {

    const bubble = {

        x: randomIntFromInterval(0, canvasWidth),
        y: randomIntFromInterval(550, canvasHeight),
        size: randomIntFromInterval(12, 20),
        alive: true,
        speed: Math.random() / 2,
    

    };

    bubbles.push(bubble);

}

function setup() {

    createCanvas(canvasWidth, canvasHeight);




    // drawGrid(canvasWidth, canvasHeight);
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let counter = 0;

const fish1 = {
    x: 100,
    y: randomIntFromInterval(100, 200),
    width: randomIntFromInterval(50, 75),
    height: randomIntFromInterval(30, 40),
    speed: 2,
    
};
const fish2 = {
    x: 1500,
    y: randomIntFromInterval(100, 200),
    width: randomIntFromInterval(50, 75),
    height: randomIntFromInterval(30, 40),
    speed: -2,
    
};
function draw() {
    clear();
    
    fish1.x += fish1.speed;
    fish2.x += fish2.speed;
    // drawBubbles(100, 150, 25, "#d4fef9", "lightblue");
    drawFish2(fish2.x, fish2.y, fish2.width, fish2.height, "grey", "red");
    drawFish(fish1.x, fish1.y, fish1.width, fish1.height, "grey", "lightgrey");
    drawFish2(fish2.x + 60, fish2.y+350, fish2.width-6, fish2.height-8, "grey", "lightgrey");
    drawFish2(fish2.x , fish2.y+650, fish2.width-6, fish2.height-8, "grey", "lightgrey");
    drawFish(fish1.x- 100, fish1.y+500, fish1.width-3, fish1.height+5, "grey", "red");
    drawFish(fish1.x+ 100, fish1.y+900, fish1.width-3, fish1.height+5, "grey", "lightgrey");
    drawFish2(fish2.x - 160, fish2.y+250, fish2.width-6, fish2.height-8, "grey", "red");
    drawFish2(fish2.x + 20, fish2.y+770, fish2.width-6, fish2.height-8, "grey", "lightgrey");
    drawFish(fish1.x- 150, fish1.y+320, fish1.width-3, fish1.height+5, "grey", "red");
    drawFish(fish1.x+ 70, fish1.y+1100, fish1.width-3, fish1.height+5, "grey", "red");
    drawFish(fish1.x- 100, fish1.y+820, fish1.width-3, fish1.height+5, "grey", "red");
    drawFish2(fish2.x + 200, fish2.y+1250, fish2.width-6, fish2.height-8, "grey", "lightgrey");
    drawFish2(fish2.x - 160, fish2.y+790, fish2.width-6, fish2.height-8, "grey", "red");
    drawFish(fish1.x- 100, fish1.y+1420, fish1.width-3, fish1.height+5, "grey", "lightgrey");
    drawFish(fish1.x- 24, fish1.y+100, fish1.width-3, fish1.height+5, "grey", "red");
    drawFish(fish1.x- 24, fish1.y+2000, fish1.width+70, fish1.height+50, "grey", "lightgrey");
    drawFish(fish1.x- 240, fish1.y+3000, fish1.width+48, fish1.height+44, "grey", "red");
    drawFish2(fish2.x - 69, fish2.y+ 2400, fish2.width+55, fish2.height+39, "grey", "lightgrey");
    drawFish2(fish2.x +50 , fish2.y+ 3200, fish2.width+55, fish2.height+39, "grey", "lightgrey");

    if (fish1.x > canvasWidth + 300) {
        fish1.x = -300
    }
    if (fish2.x < -300) {
        fish2.x = canvasWidth + 300
    }
    size = size + .1;

    counter++;


    if (counter % 50 == 0) {
        spawn();

    }
    for (let i = 0; i < bubbles.length; i++) {


        const bubble = bubbles[i];
        if (bubble.alive) {
            drawBubbles(bubble.x, bubble.y, bubble.size, "#d4fef9", 'lightblue');
            bubble.y -= bubble.speed;

        }

    }

}

function drawFish(centerX, centerY, width, height, fillColor, fillColor2) {

    let finBase = centerX - width / 3
    let finTipX = centerX - width/1.1
    let finTipY = centerY - height / 2.2
    let finBaseY = centerY + height / 2.2
    let eyes = centerX + height / 2
    let eyeSize = width / 10




    fill(fillColor2)
    triangle(finBase, centerY, finTipX, finTipY, finTipX, finBaseY)
    fill(fillColor)
    ellipse(centerX, centerY, width, height, fillColor)
    fill("black")
    circle(eyes, centerY, eyeSize)
}

function drawFish2(centerX, centerY, width, height, fillColor, fillColor2) {

    let finBase = centerX + width / 3
    let finTipX = centerX + width
    let finTipY = centerY - height / 2
    let finBaseY = centerY + height / 2
    let eyes = centerX - height / 2
    let eyeSize = width / 10




    fill(fillColor2)
    triangle(finBase, centerY, finTipX, finTipY, finTipX, finBaseY)
    fill(fillColor)
    ellipse(centerX, centerY, width, height, fillColor)
    fill("black")
    circle(eyes, centerY, eyeSize)
}

function drawBubbles(centerX, centerY, size, fillColor, fillColor2) {

    let shine = centerX + size / 6
    let shimmer = centerY - size / 6


    fill(fillColor)
    circle(centerX, centerY, size)
    fill(fillColor2)
    circle(shine, shimmer, size / 3)
}


function mouseClicked() {

    for (let i = 0; i < bubbles.length; i++) {

        const bubble = bubbles[i];

        let d = dist(bubble.x, bubble.y, mouseX, mouseY);
        if (d < bubble.size) {
            bubble.alive = false;


        }
    }
}
