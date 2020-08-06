let squares = [];
var tim = 0;
var COLORS = ['#69D2E7', '#27DBD8', '#50E46C', '#3386FF', '#FA69FA', '#FF4E50', '#F9D423'];

function setup() {
    createCanvas(1920, 1080);
    for (let i = 0; i < 65; i++) {
        for (let ii = 0; ii < 40; ii++) {
            let w = 28;
            let h = 28;
            let s = new Square(i * 30 + 3, ii * 30 + 2, w, h);
            squares.push(s);
        }
    }
}

function mouseDragged() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].contains(mouseX, mouseY)) {
            squares[i].randomColor();
        }
    }
}

function mouseClicked() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].contains(mouseX, mouseY)) {
            squares[i].randomColor();
        }
    }
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    // for (let i = 0; i < squares.length; i++) {
    //     if (squares[i].contains(mouseX, mouseY)) {
    //         //squares[i].changeColor(255);
    //     } else {
    //         //squares[i].changeColor(0);
    //     }
    // }
    //Horizontal Lines
    for (let i = 0; i < 40; i++) {
        line(0, i * 30 + 1, width, i * 30 + 1);
    }
    //Vertical Lines
    for (let i = 0; i < 65; i++) {
        line(i * 30 + 2, 0, i * 30 + 2, height);
    }
    for (let i = 0; i < squares.length; i++) {
        squares[i].show();
        squares[i].move();
    }
}
class Square {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = 0;
    }
    randomColor() {
        this.color = random(COLORS);
    }
    clearColor() {
        this.color = 0;
    }
    changeColor(col) {
        this.color = col;
    }
    move() {

    }
    contains(px, py) {
        let d = dist(px, py, this.x + this.w / 2, this.y + this.w / 2);
        if (d < this.w / 2 + 1) {
            return true;
        } else {
            return false;
        }
    }
    colorEquals(ce) {

        if (ce) {

        }
    }
    show() {
        noStroke();
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
}

function keyPressed() {
    if (key == 'r' || key == 'R') {
        for (let i = 0; i < squares.length; i++) {
            squares[i].clearColor();
        }
    }
    if (key == 'f' || key == 'F') {
        for (let i = 0; i < squares.length; i++) {
            squares[i].randomColor();
        }
    }
}
