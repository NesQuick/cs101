
let position;
let velocity;
let angle = 0;
let tankSize = 80; //задаем размер танка

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  position = createVector(width/2, height/2); 
  velocity = createVector(0, 0);
}

function draw() {
  background(10);
  push();
  checkKey(); //меняет угол и направление передвижения в зависимости от нажатой кнопки (ВВЕРХ, ВНИЗ, ВПРАВО, ВЛЕВО)
  update(); //применяет вектор скорости на объект
  display(); //рисует танк
  checkEdges(); //не дает танку выезжать за границы
  pop();
}

function checkKey() {
  if (keyIsDown(UP_ARROW)) { 
    velocity = createVector(0, -10);
    angle = 3*PI/2;
  } 
  else if (keyIsDown(DOWN_ARROW)) { 
    velocity = createVector(0, 10);  
    angle = PI/2;
  } 
  else if (keyIsDown(RIGHT_ARROW)) { 
    velocity = createVector(10, 0); 
    angle = 0;
  } 
  else if (keyIsDown(LEFT_ARROW)) { 
    velocity = createVector(-10, 0);  
    angle = PI;
  } 
  else {
    stop();
  }
}


function update() {
  position.add(velocity);
}

function stop() {
  velocity.mult(0);
}


function display() {
  stroke(0);
  fill(255);
  push();
  translate(position.x, position.y);
  rotate(angle);
  push();
  rect(0, 0, tankSize, tankSize);
  rect(tankSize/2, 0, 3*tankSize/4, tankSize/4);
  ellipse(0, 0, 2*tankSize/3, 2*tankSize/3);
  pop();
  pop();
}


function checkEdges() { 
  if (position.x > width - tankSize/2) {
    position.x = width - tankSize/2;
    velocity.x *= 0;
  }
  else if (position.x < tankSize/2) {
    position.x = tankSize/2;
    velocity.x *= 0;
  }
    if (position.y > height - tankSize/2) {
    position.y = height - tankSize/2;
    velocity.y *= 0;
  }
  else if (position.y < tankSize/2) {
    position.y = tankSize/2;
    velocity.y *= 0;
  }
}
