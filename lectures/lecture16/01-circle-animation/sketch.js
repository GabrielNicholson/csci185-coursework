const circleData = [
    { x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: "teal" },
    { x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: "hotpink" },
    { x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: "lightblue" },
    { x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: "orange" },
    { x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: "lime" },
    { x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: "purple" }
];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// initialize variables outside of the function:
// let x = 0;
// let y = 0;
// let d = 50;
// let speedX = 3;
// let speedY = 2;
// const ball1 = {
// y: 0,
// x: randomIntFromInterval(200,300),
// // x: Math.random()*200 +300, //MULTIPLY to designate the range, add/subtract to change starting position
// d:Math.random()*100+100, 
// speedX:3,
// speedY:2
// };
// const palette = ["#054a91","#3e7cb1","#81a4cd","#dbe4ee","#f17300"]
// function draw(){
//     let i =0;
//     while(i<100){
//         const color = palette[randomIntFromInterval(0,4)];
//         fill(color);
//     const ball = {
//         y: randomIntFromInterval(0,canvasHeight),
//         x: randomIntFromInterval(0,canvasWidth),

//         d:randomIntFromInterval(2,10), 
//         speedX:3,
//         speedY:2
//         };
//         i++
//         circle(ball.x,ball.y,ball.d)
//     }

// }
const ball = {
    x: 0,
    y: 0,
    d: 50,
    speedX: 3,
    speedY: 2

};


// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
function draw() {
    clear();
    for(let i =0; i<circleData.length; i++  ) { //for loops are a condensed while loop
    // let i = 0;
    // while (i < circleData.length) {
        
        const ball = circleData[i];
        fill(ball.color);
        circle(ball.x, ball.y, ball.d);
        ball.x += ball.speedX;
        ball.y += ball.speedY;
        // ball.d += ball.speedX;
        // i++;
    }
    drawGrid(canvasWidth, canvasHeight);
}
