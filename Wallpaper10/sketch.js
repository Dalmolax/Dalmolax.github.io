//Create a little galaxy
let planets = [];
let stars = [];
let comets = [];
let animation = [];
let earth;
let moon;
let blueStar;
let greenStar;
let star1;
let star2;
let star3;
let cometdata;
let cometsheet;
let chk = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    createComet();
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
    for (let i = 0; i < comets.length; i++) {
        comets[i].show();
        comets[i].animate();
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
class Sprite {
    constructor(animation, x, y, speed) {
        this.x = x;
        this.y = y;
        this.animation = animation;
        this.w = this.animation[0].width;
        this.len = this.animation.length;
        this.speed = speed;
        this.i = 0;
        this.ii = 900;
    }
    show() {
        let i = floor(this.i) % this.len;
        image(this.animation[i], this.x, this.y);
    }
    animate() {
        //this.rnd = int(random(0, 30));
        //this.ii = 0;
        if (this.ii < this.len * 5) {
            this.i += this.speed;
            this.ii += 1;
        } else {
            this.rnd = int(random(0, 3000));
            if (this.rnd == 1) {
                this.ii = 0;
            }
        }
        //this.i += this.speed;
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
    for (let i = 0; i < random(3, 8); i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        let c = 255;
        let im = blueStar;
        let ty = "blue";
        let p = new Star(x, y, r, c, im, ty);
        stars.push(p);
    }
    for (let i = 0; i < random(3, 8); i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        let c = 255;
        let im = yellowStar;
        let ty = "yellow";
        let p = new Star(x, y, r, c, im, ty);
        stars.push(p);
    }
}

function createComet() {
    if (chk == 0) {
        let frames = cometdata.frames;
        for (let i = 0; i < frames.length; i++) {
            let pos = frames[i].frame;
            let img = cometsheet.get(pos.x, pos.y, pos.w, pos.h);
            animation.push(img);
        }
        chk = 1;
    }
    for (let i = 0; i < random(10, 20); i++) {
        let p = new Sprite(animation, random(width), random(height), 0.2);
        comets.push(p)
    }
}

function preload() {
    earth = loadImage("resources/littleEarth.png");
    moon = loadImage("resources/littleMoon.png");
    star1 = loadImage("resources/star1.png");
    star2 = loadImage("resources/star2.png");
    star3 = loadImage("resources/star3.png");
    blueStar = loadImage("resources/blueStar.png");
    yellowStar = loadImage("resources/yellowStar.png");
    cometdata = loadJSON("resources/comet.json");
    cometsheet = loadImage("resources/comet.png");
}