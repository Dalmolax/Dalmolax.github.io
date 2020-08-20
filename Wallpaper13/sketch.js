//Yin Yang
let r = 0;
let vari = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    r = 200;
}

function draw() {
    background(0);
    vari = millis() / 1000;
    translate(width / 2, height / 2);
    rotate(vari);
    fill(255);
    arc(0, 0, r, r, PI / 2, PI + PI / 2);
    fill(0);
    arc(0, 0, r, r, PI + PI / 2, TWO_PI + PI / 2);
    noStroke();
    ellipse(0, r / 4, r / 2);
    fill(255);
    ellipse(0, -r / 4, r / 2);
    fill(0);
    ellipse(0, -r / 4, r / 8);
    fill(255);
    ellipse(0, r / 4, r / 8);
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(0, 0, r);
}