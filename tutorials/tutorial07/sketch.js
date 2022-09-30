function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 100, "hotpink");
    drawCircle(200, 100, 50, "navy");
    drawCircle(300, 100, 100, "teal");
    drawCircle(400, 100, 50, "hotpink");
    // Exercise 2: 
    drawOval(100, 200, 100, 62.5, "teal");
    drawOval(200, 200, 75, 125, "hotpink");
    drawOval(300, 200, 100, 62.5, "navy");
    drawOval(400, 200, 75, 125, "teal");
    // Exercise 3:
    drawBullseye(100, 300, 100, "green", "red");
    drawBullseye(200, 300, 50, "green", "red");
    drawBullseye(300, 300, 100, "green", "red");
    drawBullseye(400, 300, 50, "green", "red");

    // Exercise 4:
    drawFace(100, 400, 50, "white", "black");
    drawFace(200, 400, 100, "white", "black");
    drawFace(300, 400, 50, "white", "black");
    drawFace(400, 400, 100, "white", "black");

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, size, radius, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, size, radius);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, fillColor, fillColor2) {
    fill(fillColor);
    circle(centerX, centerY, size);
    fill(fillColor2);
    circle(centerX, centerY, size*.75);
    fill(fillColor);
    circle(centerX, centerY, size*.5);
    fill(fillColor2);
    circle(centerX, centerY, size*.25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size,fillColor,fillColor2) {
    fill(fillColor);
    circle(centerX, centerY, size);
    fill(fillColor2);
    let eyedistance = size/8;
    let eyewidth = size * .16;
    let eyeY = centerY-eyedistance;
    let eyeleft = centerX-eyedistance;
    let eyeright = centerX+eyedistance;
    let mouthsize = size/2;
    let mouthY = centerY + size/4;
    let mouthleft = centerX - mouthsize/2;
    let mouthright = centerX + mouthsize/2;

    
    circle(eyeleft, eyeY, eyewidth);
    circle(eyeright, eyeY, eyewidth);
    // line(mouthleft,mouthY,mouthright,mouthY);
    noFill()
    curve(
        mouthleft, mouthY -size,      // control point
        mouthleft, mouthY,
        mouthright, mouthY,
        mouthright, mouthY -size       // control point
    );
}
