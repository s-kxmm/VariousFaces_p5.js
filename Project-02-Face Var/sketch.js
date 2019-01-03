//Sophia S Kim 
//Section C 1:30 
//sophiaki@andrew.cmu.edu
//Project-02-Face Variable

var eyeSize1 = 50; 
var eyeSize2 = 30; 
var faceWidth = 250;
var faceHeight = 275; 
var eyebrow1 = 238; 
var eyebrow2 = 372;
var mouthWidth = 135; 
var mouthHeight = 15; 
var earWidth = 25;
var earHeight = 55;
var faceColor = 46;
var earColor = 73;
var eyeColor = 47;
var eyebrowColorLX = 95;
var eyebrowColorRX = 94; 
var mouthColor = 213; 


function setup() {
	createCanvas(640, 480); /// width,height
}

function draw() {
	noStroke(); 
	background(142, 223, 88); ///background reference to RGB (R,G,B)

	var earLocation = (height/2)-20; // varible - ear location 

    fill(37, earColor, 255); 
    rect((width/2)-(faceWidth*0.57), earLocation, earWidth, earHeight); //left ear 

    fill(37, earColor, 255); 
    rect((width/2)+(faceWidth*0.47), earLocation, earWidth, earHeight); //right ear 

	fill(255, 253, faceColor); //skin color
	ellipse(width/2, height/2, faceWidth, faceHeight); //head shape

	var eyeLX = (width/2) - (faceWidth*0.27); // varible - left eye location 
    var eyeRX = (width/2) + (faceWidth*0.27); // variable - right eye location 

    fill(255, 164, eyeColor); 
    ellipse(eyeLX, (height/2), eyeSize1, eyeSize1); //left eye 

    fill(255, 164, eyeColor);
    ellipse(eyeRX, (height/2), eyeSize2, eyeSize2); //right eye

    fill(89, eyebrowColorLX, 233);
    triangle(eyebrow1, (height/2)-30, eyebrow1+15, (height/2)-45, eyebrow1+30, 
    	(height/2)-30); 
    	//left eyebrow

    fill(194, eyebrowColorRX, 215);
    triangle(eyebrow2, (height/2)-30, eyebrow2+15, (height/2)-70, eyebrow2+30, 
    	(height/2)-30); 
    	//right eyebrow

    var mouthLocation = (height/2)+45 // variable for mouth location

    fill(255, 124, mouthColor);
    rect(eyeLX, mouthLocation, mouthWidth, mouthHeight); //mouth 
 }

function mousePressed() {
	// when the mouse is clicked on, random values within specified ranged are rearranged. 
	eyeSize1 = random(25, 60);
	eyeSize2 = random(10,50);
	faceWidth = random(200, 300);
	faceHeight = random(250,300);
	eyebrow1 = random(225, 260);
	eyebrow2 = random(360, 385);
	mouthWidth = random(130, 140);
	mouthHeight = random(13, 17); 
	earWidth = random(22, 28);
	earHeight = random(53, 57);
	faceColor = random(0, 300);
	earColor = random(45, 200);
	eyeColor = random(25, 150);
	eyebrowColorLX = random(15, 200);
	eyebrowColorRX = random(25, 150); 
	mouthColor = random(140, 330);
} 

