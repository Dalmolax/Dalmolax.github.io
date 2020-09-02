let angle = 0;
let frmr = 30;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(30);
}

function draw() {
    background(0);
    ortho(-windowWidth, windowWidth, windowHeight, -windowHeight, 0, 1500);
    rotateX(QUARTER_PI*millis()/1000);
    rotateY(QUARTER_PI*millis()/1000);
    box(windowWidth, windowHeight, (windowHeight+windowWidth)/2)
}