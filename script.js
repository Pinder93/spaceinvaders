var c = document.getElementById("spaceInvaders");
var ctx = c.getContext("2d");

var bunkerImg = new Image();
bunkerImg.src = 'img/bunker.png';

var alienImg = new Image();
alienImg.src = 'img/space-alien.png';

const coordinates = {
    x: 140,
    y: 135
}

function drawRectangle() {
    ctx.beginPath();
    ctx.rect(coordinates.x, coordinates.y, 15, 3);
    ctx.stroke();
    ctx.fillStyle="white";
    ctx.fill();
}

function drawBunker() {
    ctx.beginPath();
    ctx.arc(50, 120, 8, 0, 3 * Math.PI, true);
    ctx.moveTo(40, 120);
    ctx.lineTo(30, 120);
    ctx.lineTo(30, 105);
    ctx.lineTo(70, 105);
    ctx.lineTo(70, 120);
    ctx.fill();
    ctx.fillStyle="white";

    ctx.beginPath();
    ctx.arc(120, 120, 8, 0, 3 * Math.PI, true);
    ctx.moveTo(100, 120);
    ctx.lineTo(100, 120);
    ctx.lineTo(100, 105);
    ctx.lineTo(140, 105);
    ctx.lineTo(140, 120);
    ctx.fill();
    ctx.fillStyle="white";

    ctx.beginPath();
    ctx.arc(190, 120, 8, 0, 3 * Math.PI, true);
    ctx.moveTo(170, 120);
    ctx.lineTo(170, 120);
    ctx.lineTo(170, 105);
    ctx.lineTo(210, 105);
    ctx.lineTo(210, 120);
    ctx.fill();
    ctx.fillStyle="white";

    ctx.beginPath();
    ctx.arc(260, 120, 8, 0, 3 * Math.PI, true);
    ctx.moveTo(240, 120);
    ctx.lineTo(240, 120);
    ctx.lineTo(240, 105);
    ctx.lineTo(280, 105);
    ctx.lineTo(280, 120);
    ctx.fill();
    ctx.fillStyle="white";
}

var aliens = [
    {x:100, y:20},
    {x:100, y:30},
    {x:100, y:40},
    {x:100, y:50},
    {x:100, y:60},
    {x:135, y:20},
    {x:135, y:30},
    {x:135, y:40},
    {x:135, y:50},
    {x:135, y:60},
    {x:170, y:20},
    {x:170, y:30},
    {x:170, y:40},
    {x:170, y:50},
    {x:170, y:60},
    {x:205, y:20},
    {x:205, y:30},
    {x:205, y:40},
    {x:205, y:50},
    {x:205, y:60},
    {x:70, y:20},
    {x:70, y:30},
    {x:70, y:40},
    {x:70, y:50},
    {x:70, y:60},
    {x:40, y:20},
    {x:40, y:30},
    {x:40, y:40},
    {x:40, y:50},
    {x:40, y:60}
];

const drawAliens = () => {
    console.log("draw aliens");
    for (i=0;i<aliens.length;i++) {
        console.log(i);
        ctx.drawImage(alienImg, aliens[i].x, aliens[i].y, 20, 10);
    }
}

window.onload = function() {
    drawRectangle();
    drawBunker();
    drawAliens();
};

function moveLeft() {
    if (coordinates.x == 0){
        return false;
    } else {
        coordinates.x -= 5;
    }
}

function moveRight() {
    if (coordinates.x == 280) {
        return false;
    } else {
        coordinates.x += 5;
    }
}

const moveRectangle = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 37) {
        ctx.clearRect(0, 0, c.width, c.height);
        moveLeft();
        drawRectangle();
        drawBunker();
        drawAliens(); 
    } else if (e.keyCode === 39) {
        ctx.clearRect(0, 0, c.width, c.height);
        moveRight();
        drawRectangle(); 
        drawBunker();
        drawAliens();
    }
}

document.addEventListener('keydown', moveRectangle);


