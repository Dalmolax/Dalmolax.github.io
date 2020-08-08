//Create a little galaxy
let planets = [];

function setup() {
    createCanvas(600, 950);
    let x = width / 2;
    let y = height / 2;
    let r = 50;
    let m = 1;
    let c = "#ff9b6a"
    let p = new Planet(x, y, r, m, c);
    planets.push(p);
    print(planets);
}

function draw() {
    background(0);
    for (let i = 0; i < planets.length; i++) {
        planets[i].show();
    }

}

class Planet {
    constructor(x, y, r, m, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.m = m;
        this.c = c;
    }
    show() {
        noStroke();
        fill(this.c);
        ellipse(this.x, this.y, this.r);
    }
}
