let bubbles = [];

function setup() {
    createCanvas(600, 950);
}

function mousePressed() {
    let r = random(10, 50);
    let mx = random(-1, 1);
    let my = random(-1, 1);
    let b = new Bubble(mouseX, mouseY, r, mx, my);
    bubbles.push(b);
}

function draw() {
    background(0);

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r, mx, my) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.mx = mx;
        this.my = my;
    }

    move() {
        this.x = this.x + this.mx * 3 * sin((millis() / 500) * this.mx);
        this.y = this.y + this.my * 3 * cos((millis() / 500) * this.my);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
}
