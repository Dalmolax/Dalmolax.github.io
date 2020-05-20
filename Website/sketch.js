//Lesson: Create a nested loop, making a cool pattern with it. Maybe try to animate?
var offs = 0;
var offs2 = 0;
var offs3 = 0;
var offs4 = 0;
var chn = 0;

function setup() {
    createCanvas(600, 950);
    background(0);
}

function draw() {
    background(0);
    for (let cx = 0; cx <= 11; cx += PI / 6) {
        //fill(127, cx * 30, 127);
        for (let cy = 65; cy <= 600; cy += 35) {
            //fill(cx * 10 + offs2, cy / 3 + offs3, 255 - cx * 10 + offs4);
            if (cy % 2 === 0) {
                chn = -1;
                fill(255 - cx * 15 + offs4, 255 - cy / 3 + offs3, 255 - cy / 3 + offs2);
            } else {
                chn = 1;
                fill(cx * 15 + offs4, cy / 3 + offs3, 255 - cy / 3 + offs2);
            }
            ellipse(width / 2 + cos(cx + offs * chn) * cy, height / 2 + sin(cx + offs * chn) * cy, height / 30);
        }
    }
    offs = millis() / 2000;
    offs2 = sin(millis() / 2000) * 30;
    offs3 = sin(millis() / 1900) * 30;
    offs4 = sin(millis() / 1800) * 30;
}
