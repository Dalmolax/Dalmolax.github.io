//Lesson: Create a random painting
//Use color gradient, different shapes and sizes
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
    createCanvas(600, 400);
    background(0);
    noStroke();
}
function mousePressed(){
    background(0);

}

function draw() {
    pt.x = random(0, width);
    pt.y = random(0, height);
    col.b = random(0, 255);
    col.g = random(0, 255);
    col.r = random(0, 255);
    fill(col.r, col.g, col.b);
    ellipse(pt.x, pt.y, 12);
}
