//Lesson: Make a drawing, maybe a landscape
function setup() {
    createCanvas(800, 450);
    noStroke();
    sunColor = color(255);
    fadesunColor = color(255);
    fadesunColor.setAlpha(75);
    fadesunColor2 = color(255);
    fadesunColor2.setAlpha(35);
    mountainColor = color('#007869');
}

function draw() {
    background('#9ae3e9');
    //arvores
    //triangle(width, height, width/2, height, (width/1.33) * (1 + sin(millis()/1000)/100), height/3);
    fill(sunColor);
    ellipse(width / 4, height / 3, 100);
    fill(fadesunColor);
    ellipse(width / 4, height / 3, 150);
    fill(fadesunColor2);
    ellipse(width / 4, height / 3, 200);
    fill(mountainColor);
    triangle(width, height, width / 2, height, width / 1.33, height / 3);
    triangle(width / 1.3, height, width / 3, height, width / 1.7, height / 2.7);
    fill('#6ec370');
    ellipse(width / 2, height / 1.1, width * 1.1, height / 1.7);
    fill('#519b50');
    ellipse(width / 2, height / 1.1, width * 1.1, height / 2);

}