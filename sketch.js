let button;
let buttonTwo;
let buttonThree;
let buttonFour;
let buttonFive;
let buttonSix;
let noiseOffset = 0.0;
let strokeWidth = 5;


function setup() {
  createCanvas(700, 400);
  background(200);
  button = createButton('Happy');
  button.position(300, 650);
  button.mousePressed(changeYellow);
  
  buttonTwo = createButton('Sad');
  buttonTwo.position(360, 650);
  buttonTwo.mousePressed(changeBlue);
  
  buttonThree = createButton('Angry');
  buttonThree.position(410, 650);
  buttonThree.mousePressed(changeRed);
  
  buttonFive = createButton('Neutral');
  buttonFive.position(235, 650);
  buttonFive.mousePressed(changeNeutral);
  
  buttonSix = createButton('Tired');
  buttonSix.position(470, 650);
  buttonSix.mousePressed(changeTired);
   

  
}



function draw() { 
  if (keyIsPressed == true){
    if (key == 's') {
      squares();
    } else if (key == 'c'){
      oval();
    } else if (key == 'a'){
      alph();
    } else if (key == 'l'){
      sketch();
    } else if (key == 'd'){
      saveCanvas ('fileName', 'png');
    }
  }
}



function changeYellow (){
  let yellow = color(255,195,11);
  background (yellow);
  fill (200, 214, 247);
  squares();
   }


function changeBlue(){
  let blue = color(95, 140, 217);
  background (blue);
  fill (184, 193, 214);
  squares();
}

function changeRed(){
  let red = color(247, 87, 87);
  background (red);
  fill (37, 89, 43);
  squares();
}

function changeNeutral(){
  let neutral = color(255, 254, 237);
  background (neutral);
  fill (207, 189, 147);
  squares();
}

function changeTired(){
  let tired = color(2, 18, 46);
  background (tired);
  fill (77, 45, 112);
  squares();
}



//sfunction keyPressed() {
//if (key == 's') {
 //   squares();
 //}
//}



function squares(){
  stroke(0);
 if (mouseIsPressed === true) {
  rect(mouseX, mouseY, pmouseX, pmouseY) 
  }
 }

function oval(){
  stroke(0);
 if (mouseIsPressed === true) {
  circle(mouseX, mouseY, pmouseX, pmouseY) 
  }
 }

function alph(){
 if (mouseIsPressed === true) {
strokeWeight(strokeWidth);
  
  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 10;
  
  
  stroke(map(mouseX, 0, 600,0,225,true))
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
   line(mouseX,mouseY,pmouseX,pmouseY);
 }
}
   
 function sketch(){
  stroke(10);
 if (mouseIsPressed === true) {
  line(mouseX, mouseY, pmouseX, pmouseY) 
  }
 }

