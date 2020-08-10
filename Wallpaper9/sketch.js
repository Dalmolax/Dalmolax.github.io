//Create a little solar system
let planets = [];

function setup() {
    createCanvas(600, 950);
    createEarth();
    createMoon();
    //print(planets);
}

function draw() {
    background(0);
    fill("#ff8000");
    stroke("#ffa448");
    strokeWeight(2);
    ellipse(width/4, height/4, 40);
    noFill();
    stroke(255);
    //ellipse(width/2, height/2, 200*1.2,200);
    for (let i = 0; i < planets.length; i++) {
        planets[i].show();
    }
}

class Planet {
    constructor(x, y, r, d, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.d = d;
        this.c = c;
    }
    show() {
        noStroke();
        fill(this.c);
        ellipse(this.x, this.y, this.r);
        this.x = width / 2 + this.d * sin(millis() / 2000);
        this.y = height / 2 - this.d * cos(millis() / 2000);
    }
}

function createEarth() {
    let x = width / 2;
    let y = height / 2;
    let r = 80;
    let d = 0;
    let c = "#0080c0";
    let p = new Planet(x, y, r, d, c);
    planets.push(p);
}

function createMoon() {
    let x = width / 2;
    let y = height / 2;
    let r = 25;
    let d = 125;
    let c = "#c0c0c0";
    let p = new Planet(x, y, r, d, c);
    planets.push(p);
}