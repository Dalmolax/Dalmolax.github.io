//Lesson : Optimise the circle and create 3 more
var x = 30;
var y = 200;
var xspeed = 0;
var yspeed = 0;
var chnx = 1.5;
var chny = 1.5;
var colx = 255;
var coly = 255;
var colm = 255;
var xn = 0;
var yn = 0;
var rnd = 0;
var rnd1 = 0;
var rnd2 = 0;
function setup() {
    createCanvas(600, 950);
    //createCanvas(windowWidth, windowHeight);
    xspeed = random(5, 10);
    yspeed = random(5, 10);
    //textSize(16);
    background(0);
}
function mouseClicked(){
    rnd = random(0, 255);
    rnd2 = random(0, 255);
    rnd3 = random(0, 255);
    background(rnd,rnd2,rnd3);
}

function draw() {
    //background(0);
    colx = map(xspeed, -15, 15, 20, 255);
    coly = map(yspeed, -15, 15, 20, 255);
    // fill(colm, colx, 0);
    // text("\"Hello", width / 2.4, height / 20);
    // fill(colm, 0, coly);
    // text("There!\"", width / 2, height / 20);
    fill(colm, colx, coly);
    ellipse(x, y, width / 10);
    ellipse(xn, y, width / 10);
    ellipse(x, yn, width / 10);
    ellipse(xn, yn, width / 10);
    xn = width - x;
    x = x + xspeed;
    yn = height - y;
    y = y + yspeed;
    if (xspeed > 15) {
        chnx = random(0.8, 0.9)
    }
    if (xspeed < 10) {
        if (xspeed > 0) {
            chnx = random(1.2, 1.3);
        }
    }
    if (yspeed > 20) {
        chny = random(0.7, 0.9)
    }
    if (yspeed < 10) {
        if (yspeed > 0) {
            chny = random(1.1, 1.3);
        }
    }
    if (x > width - width / 20) {
        print("Off screen!");
        x = width - width / 20;
        xspeed = -1 * xspeed;
        xspeed = xspeed * chnx;
        colm = random(100, 255);
    }
    if (y > height - width / 20) {
        print("Off screen!");
        y = height - width / 20;
        yspeed = -1 * yspeed;
        yspeed = yspeed * chny;
        colm = random(100, 255);
    }
    if (x < width / 20) {
        x = width / 20;
        xspeed = -1 * xspeed;
        xspeed = xspeed * chnx;
        colm = random(100, 255);
    }
    if (y < width / 20) {
        y = width / 20;
        yspeed = -1 * yspeed;
        yspeed = yspeed * chny;
        colm = random(100, 255);
    }
}
