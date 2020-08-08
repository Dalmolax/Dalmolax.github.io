//Lesson: Create a random painting
//Use color gradient, different shapes and sizes
var rnc = {
    x1: 0,
    x2: 255,
    y1: 0,
    y2: 255,
    z1: 0,
    z2: 255
};
var pt = {
    x: 100,
    y: 50
};
var col = {
    r: 255,
    g: 0,
    b: 0
};

function setup() {
    //createCanvas(600, 1000);
    createCanvas(windowWidth, windowHeight);
    //createCanvas(1600, 900);
    background(0);
    noStroke();
}

function mousePressed() {
    col.b = random(0, 255);
    col.g = random(0, 255);
    col.r = random(0, 255);
    background(col.b, col.g, col.r);
    rnc.x1 = random(0, 255);
    rnc.x2 = random(0, 255);
    rnc.y1 = random(0, 255);
    rnc.y2 = random(0, 255);
    rnc.z1 = random(0, 255);
    rnc.z2 = random(0, 255);
}

function draw() {
    pt.x = random(0, width);
    pt.y = random(0, height);
    col.b = map(pt.x, 0, width, rnc.x1, rnc.x2);
    col.g = map(pt.y, 0, height, rnc.y1, rnc.y2);
    col.r = map(pt.x, 0, height, rnc.z1, rnc.z2);
    fill(col.r, col.g, col.b);
    ellipse(pt.x, pt.y, width / 10);
}
