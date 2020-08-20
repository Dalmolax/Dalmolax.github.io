let r = 0;
let vari = 0;

function setup() {
    createCanvas(600, 950);
    r = 200;
}

function draw() {
    background(0);
    vari = vari + millis() / 10000;
    translate(width / 2, height / 2);
    rotate(vari);
    stroke(255);
    noFill();
    strokeWeight(3);
    //ellipse(width / 2, height / 2, r);
    ellipse(0, 0, r);
    curveTightness(-1);
    //curve(width, height / 2 - r / 2, width / 2, height / 2 - r / 2, width / 2, height / 2 + r / 2, 0, height / 2 + r / 2)
    curve(width / 2, 0 - r / 2, 0, 0 - r / 2, 0, 0 + r / 2, -width / 2, 0 + r / 2)

}