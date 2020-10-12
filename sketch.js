let pie;
let index = 0;
let rndIndex = 0;

function setup() {
    createCanvas(600, 400);
    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    pie = Array.from(getPie());
    frameRate(2);
}

function draw() {
    background('red');
    text(index, width / 2, height / 6);
    text(pie[index], width / 2, height / 4);
    text(frameRate(), width / 2, height / 3);
    text(pie.length, width / 2, height / 2);
    text(randomPie(), width / 2, height / 1.5);
    // text(pie, width / 2, height / 1.5); // reduces frameRate ~ 7 fold
    index++;

    if (index > pie.length) {
        index = 0;
    }

}

function randomPie() {
    let rndPie = (pie[rndIndex + 0] * 100) + (pie[rndIndex + 1] * 10) + (pie[rndIndex + 2] * 1);
    rndIndex += 3;
    if (rndIndex > (pie.length - 3)) {
        rndIndex = 0;
    }
    return rndPie;
}