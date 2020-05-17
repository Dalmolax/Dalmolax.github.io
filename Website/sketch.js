//Lesson: Create a nested loop, making a cool pattern with it. Maybe try to animate?
var offs = 0;
var offs2 = 0;

function setup() {
    createCanvas(600, 950);
    background(0);
}

function draw() {
    //background(0);
    for (let cx = 0; cx <= 12; cx += PI / 6) {
        //fill(127, cx * 30, 127);
        fill(cx * 15, 0, 255 - cx * 15);
        ellipse(width - cx * 50 - 10, height / 2 + sin(cx + offs) * 550, height / 30);
    }
    for (let cx = 0; cx <= 20; cx += PI / 6) {
        fill(205 - cx * 10, 0, cx * 10);
        //fill(155 - cx * 10, cx * 10, 127);
        ellipse(width / 2 + sin(cx + offs2) * 550, height - cx * 50, height / 30);
    }
    offs = millis() / 2000;
    offs2 = millis() / 2000;
}
