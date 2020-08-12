//Create a little solar system
let planets = [];
let stars = [];
let earth;
let moon;

function setup() {
    createCanvas(600, 950);
    createEarth();
    createMoon();
    createStars();
    //print(planets);
}

function draw() {
    background(0);
    // fill("#ff8000");
    // stroke("#ffa448");
    // strokeWeight(2);
    // ellipse(width/4, height/4, 40);
    // noFill();
    // stroke(255);
    //ellipse(width/2, height/2, 200*1.2,200);
    for (let i = 0; i < stars.length; i++) {
        stars[i].show();
    }
    for (let i = 0; i < planets.length; i++) {
        planets[i].show();
    }
}

function mouseClicked() {
    setup();
}

class Planet {
    constructor(x, y, r, d, c, t) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.d = d;
        this.c = c;
        this.t = t;
    }
    show() {
        //noStroke();
        fill(this.c);
        this.x = width / 2 + this.d * sin(millis() / 4000);
        this.y = height / 2 - this.d * cos(millis() / 4000);
        //ellipse(this.x, this.y, this.r);
        image(this.t, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
    }
}
class Star {
    constructor(x, y, r, c, hu) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.hu = hu;
    }
    show() {
        noStroke();
        if (this.i < 1000) {
            this.i = this.i + random(0, 30);
        } else {
            this.hu = random(100, 200);
            this.i = 0;
        }
        fill(this.c, this.hu);
        ellipse(this.x, this.y, this.r);
    }
}

function createEarth() {
    let x = width / 2;
    let y = height / 2;
    let r = 120;
    let d = 0;
    let c = "#0080c0";
    let t = earth;
    let p = new Planet(x, y, r, d, c, t);
    planets.push(p);
}

function createMoon() {
    let x = width / 2;
    let y = height / 2;
    let r = 40;
    let d = 150;
    let c = "#c0c0c0";
    let t = moon;
    let p = new Planet(x, y, r, d, c, t);
    planets.push(p);
}

function createStars() {
    for (let i = 0; i < 75; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(1, 5);
        let c = 255;
        let hu = random(0, 255);
        let p = new Star(x, y, r, c, hu);
        stars.push(p);
    }

}

function preload() {
    earth = loadImage("littleEarth.png");
    moon = loadImage("littleMoon.png");
}