let pie;
let index = 0;

function setup() {
    createCanvas(600, 400);
    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    pie = Array.from(getPie()); // getPie() in pieDigits.js
    // frameRate(1); // frameRate for testing pieDigits.js
}

function draw() {
    background('red');
    text(index, width / 2, height / 6);
    text(pie[index], width / 2, height / 4);
    text(frameRate(), width / 2, height / 3);
    text(pie.length, width / 2, height / 2);
    text(rndIndex, width / 2, height / 1.5); // rndIndex in pieDigits.js
    text(randomPie(), width / 2, height / 1.2); // randomPie() in pieDigits.js
    // text(pie, width / 2, height / 1.5); // reduces frameRate ~ 7 fold

    index++;

    if (index > pie.length) {
        index = 0;
    }

}