//движение танка
//стрельба в разработке

let position;
let velocity;
let acceleration;
let angle = 0;
//let velocityBullet = 40;
let velocityLimit = 10;
//let xStride = 0;
//let yStride = 0;
let tankSize = 80; //задаем размер танка
//let state = '';
let x = 0;
let y = 0;
let bulletAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  position = createVector(width/2, height/2); 
  velocity = createVector(0, 0);
  acceleration = createVector(0, 0);
}

function draw() {
  background(10);
  push();
  checkKey(); //меняет угол и направление передвижения в зависимости от нажатой кнопки (ВВЕРХ, ВНИЗ, ВПРАВО, ВЛЕВО)
  update(); //применяет вектор скорости на объект
  display(); //рисует танк
  checkEdges(); //не дает танку выезжать за границы
  pop();
  
  
//  checkShoot();
//  if (state == 'shoot' && velocity.x > 0) {
//    push();
//    x = position.x;
//    y = position.y;
//    bulletAngle = angle;
//    translate (x, y);
//    rotate (bulletAngle);
//    ellipse(xStride, yStride, tankSize/4, tankSize/4);
//    xStride += velocity;
//  }
}

function checkKey() {
  if (keyIsDown(UP_ARROW)) { 
    thrust = createVector(0, -0.3);
    velocity.x = 0; //не дает танку дрифтовать
    applyThrust(thrust);
    angle = 3*PI/2;
  } 
  else if (keyIsDown(DOWN_ARROW)) { 
    thrust = createVector(0, 0.3);
    velocity.x = 0;
    applyThrust(thrust);
    angle = PI/2;
  } 
  else if (keyIsDown(RIGHT_ARROW)) { 
    thrust = createVector(0.3, 0);
    velocity.y = 0;
    applyThrust(thrust);
    angle = 0;
  } 
  else if (keyIsDown(LEFT_ARROW)) { 
    thrust = createVector(-0.3, 0);
    velocity.y = 0;
    applyThrust(thrust);
    angle = PI;
  } 
  else {
    stop();
  }
}

function applyThrust(thrust) {
    acceleration.add(thrust);
}

function update() {
  velocity.add(acceleration);
  velocity.limit(velocityLimit);
  position.add(velocity);
  acceleration.mult(0);
}

function stop() {
  velocity.mult(0.5);
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

//function checkShoot() {
//  if (keyCode === 32) {
//    state = 'shoot';
//  }
//}

