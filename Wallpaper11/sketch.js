//Make a living landscape, with day and night cycles
let stars = [];

function setup() {
    noStroke();
    createCanvas(600, 950);
    createSun();
    createMoon();
}

function draw() {
    background(0);
    for (let i = 0; i < stars.length; i++) {
        stars[i].show();
    }
    fill("#008000");
    rect(0, height / 1.50, width, height);
    fill("#008080");
    triangle(100, height / 1.50, 140, height / 1.50, 120, height / 1.70);

}

class Star {
    constructor(x, y, r, c, t) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.t = t;
    }
    show() {
        if (this.t == "sun") {
            this.x = width / 2 + 200 * sin(millis() / 10000);
            this.y = height / 1.5 - 500 * cos(millis() / 10000);
        } if (this.t == "moon") {
            this.x = width / 2 - 200 * sin(millis() / 10000);
            this.y = height / 1.5 + 550 * cos(millis() / 10000);
        }
        fill(this.c);
        ellipse(this.x, this.y, this.r);
    }
}

function createSun() {
    let x = width / 2;
    let y = height / 2;
    let r = 100;
    let c = "#ffff00";
    let t = "sun";
    let p = new Star(x, y, r, c, t);
    stars.push(p);
}

function createMoon() {
    let x = width / 2;
    let y = height / 2;
    let r = 80;
    let c = 127;
    let t = "moon";
    let p = new Star(x, y, r, c, t);
    stars.push(p);
}