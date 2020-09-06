let sz;

function setup() {
    createCanvas(960, 540);
    noStroke();
    sz = 74;
    imageMode(CENTER);
    frameRate(10);
}

function draw() {
    translate(width / 2, height / 2);
    background(0);
    for (let i = 0; i < 14; i++) {
        for (let ii = 0; ii < 8; ii++) {
            image(base, -width / 2 + i * sz, -height / 2 + ii * sz, sz, sz);
            if (i < 10 && i >= 4) {
                if (ii < 6 && ii >= 2) {
                    image(simpleLeaves, -width / 2 + i * sz, -height / 2 + ii * sz, sz, sz);
                }
            }
        }
    }
}

function preload() {
    base = loadImage("resources/grassTiles1.png");
    simpleLeaves = loadImage("resources/grassTiles2.png");
    lushLeaves = loadImage("resources/grassTiles3.png");
    flowers1 = loadImage("resources/grassTiles4.png");
    flowers2 = loadImage("resources/grassTiles5.png");
}