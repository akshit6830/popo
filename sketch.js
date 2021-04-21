var iman, ifruit, ifruit2;
var life = 3;

function preload() {
	ifruit = loadImage("apple-.png");
	ifruit2 = loadImage("banana-.png");
	ifruit3= loadImage("t.png");
	iman = loadImage("man.png");
	road = loadImage("road.png");
}

var fruit, fruit2, man, speed, score;
function setup() {
	createCanvas(500, 700);

	score = 0;
	speed = 10;

	man = createSprite(200, width + 100, 20, 20);

	fruit = createSprite(200, -10, 20, 20);
	fruit.velocityY = 10;

	fruit2 = createSprite(200, -80, 20, 20);
	fruit2.velocityY = 10;

	fruit3 = createSprite(200, -150, 20, 20);
	fruit3.velocityY = 10;


	man.addImage(iman);
	fruit.addImage(ifruit)
	fruit2.addImage(ifruit2);
	fruit3.addImage(ifruit3);
	fruit.scale = 2;
	fruit2.scale = 2;
	fruit3.scale = 2;


	man.scale = 2;
}


function draw() {
	background(road);
	if (life <= 0) {
		textSize(30);
		stroke("blue");
		fill("blue");
		text("YOU LOST !!", width / 2 - 70, height / 2);
		text("Press SPACE", width / 2 - 70, height / 2 + 50);
		
	}
	else {

		if (keyDown("right")) {
			man.x = man.x + speed;
		}
		if (keyDown("left")) {
			man.x = man.x - speed;
		}

		if (fruit.y > height) {
			fruit.x = Math.floor(Math.random() * width);
			fruit.y = -10;

		}
		if (fruit2.y > height) {
			fruit2.x = Math.floor(Math.random() * width);
			fruit2.y = -80;
		}
		if (fruit3.y > height) {
			fruit3.x = Math.floor(Math.random() * width);
			fruit3.y = -80;
		}

		if (fruit.collide(man)) {
			score += 1;
			fruit.x = Math.floor(Math.random() * width);
			fruit.y = -10;
			fruit.velocityY = 10;
		}

		if (fruit3.collide(man)) {
			life -=1 ;
			fruit3.x = Math.floor(Math.random() * width);
			fruit3.y = -10;
			fruit3.velocityY = 10;
		}

		if (fruit2.collide(man)) {
			score += 1;
			fruit2.x = Math.floor(Math.random() * width);
			fruit2.y = -80;
			fruit2.velocityY = 10;
		}

		textSize(30);
		stroke("blue");
		fill("blue");
		text("score" + score, 10, 26);
		text("life" + life, 10, 56);

		drawSprites();
	}

}

function keyPressed(){
	if (keyCode == 32 ){
		life = 3 ;
		score = 0 ;

	}
}