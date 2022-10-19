function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);



    // fill('red');


    noFill();
let counter=0;
let fillColor;
while (counter<150){
    if (fillColor=="green"){
        fillColor="navy";
    }
    else if (fillColor=="navy"){
        (fillColor="teal");
    }
    else {
        (fillColor="green");
    }
    console.log(fillColor);
    fill(fillColor);
circle(400,0 + counter*15, 10*counter);
circle(200,0 + counter*5, 100/counter*5);
counter++;

}




    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
