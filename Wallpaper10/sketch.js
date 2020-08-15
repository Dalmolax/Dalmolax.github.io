//Create a little solar system
let planets = [];
let stars = [];
let earth;
let moon;
let blueStar;
let yellowStar;
let greenStar;
let star1;
let star2;
let star3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    createEarth();
    createMoon();
    createStars();
}

function draw() {
    background(0);
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
        if (this.t == moon) {
            this.x = width / 2 + this.d * sin(millis() / 4000);
            this.y = height / 2 - this.d * cos(millis() / 4000);
        }
        //ellipse(this.x, this.y, this.r);
        image(this.t, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
    }
}
class Star {
    constructor(x, y, r, c, im, ty) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.im = im;
        this.ty = ty;
    }
    show() {
        //nostroke();
        this.i = int(random(0, 300));
        if (this.i == 1) {
            if (this.ty == "white") {
                this.im = star1;
            }
        }
        if (this.i == 2) {
            if (this.ty == "white") {
                this.im = star2;
            }
        }
        if (this.i == 3) {
            if (this.ty == "white") {
                this.im = star3;
            }
        }
        //ellipse(this.x, this.y, this.r); 
        image(this.im, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
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
    for (let i = 0; i < 300; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(1, 5);
        let c = 255;
        let im = star1;
        let ty = "white";
        let p = new Star(x, y, r, c, im, ty);
        stars.push(p);
    }
    for (let i = 0; i < 4; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 30);
        let c = 255;
        let im = blueStar;
        let ty = "blue";
        let p = new Star(x, y, r, c, im, ty);
        stars.push(p);
    }
    for (let i = 0; i < 4; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20, 40);
        let c = 255;
        let im = yellowStar;
        let ty = "yellow";
        let p = new Star(x, y, r, c, im, ty);
        stars.push(p);
    }
    for (let i = 0; i < 4; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 30);
        let c = 255;
        let im = greenStar;
        let ty = "green";
        let p = new Star(x, y, r, c, im, ty);
        stars.push(p);
    }
}

function preload() {
    earth = loadImage("littleEarth.png");
    moon = loadImage("littleMoon.png");
    star1 = loadImage("star1.png");
    star2 = loadImage("star2.png");
    star3 = loadImage("star3.png");
    blueStar = loadImage("blueStar.png");
    yellowStar = loadImage("yellowStar.png");
    greenStar = loadImage("greenStar.png");
}