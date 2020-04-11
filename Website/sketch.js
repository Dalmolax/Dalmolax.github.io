//Lesson: Make a lot of variables with your circle
//That change with time
var circ = {
    x: 0,
    y: 0,
    diameter: 50
};
// var circleX = 0;
// var circleY = 0;
var col = {
    red: 255,
    green: 255,
    blue: 255
};
// var RB = 255;
// var GB = 255;
// var BB = 255;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    fill(col.red, col.green, col.blue);
    ellipse(circ.x, circ.y, circ.diameter);
    circ.x = 300 + 250 * sin(millis() / 2000);
    circ.y = 200 + 150 * sin(2 * millis() / 2000);
    col.red = 127 + 127 * sin(millis() / 900);
    col.green = 127 + 127 * sin(millis() / 800);
    col.blue = 127 + 127 * sin(millis() / 700);
}