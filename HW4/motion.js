let increment = 0.1;
let timeOffset = 0.01;
let stride = 20; 
  
function setup () {
  createCanvas(windowWidth, windowHeight)
  frameRate(60);
  ost.setVolume(0.1);
  ost.play();
}

function preload() {
  soundFormats("mp3");
  ost = loadSound("virtual_1.mp3");
}

function draw() {
  background(0);
  
  let offset = width/10;
  
  let yOffset = 0;
  for (let x = offset; x < width - offset; x += stride) {
    let xOffset = 0;
    for (let y = offset; y < height - offset; y += stride) {
      xOffset += increment;
      push();
      let randomGrey = noise(xOffset, yOffset, timeOffset) * 255
      translate(x, y);
      strokeWeight(8 * noise(xOffset, yOffset, timeOffset));
      stroke(randomGrey);
      noFill();
      let diam = 20;
      let r = noise(xOffset, yOffset, timeOffset);
      let grad = 0;
      if (r > 0.5) {
        grad = PI/3;
      }
      triangle(diam*cos(PI/2 + grad)/2, diam*sin(PI/2 + grad)/2, diam*cos(7*PI/6 + grad)/2, diam*sin(7*PI/6 + grad)/2, diam*cos(11*PI/6 + grad)/2, diam*sin(11*PI/6 + grad)/2);
      pop();
    }
    timeOffset += increment * 0.001;
    yOffset += increment;
  }
}
