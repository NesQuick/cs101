//Mikhail Kiyatkin
//Egypt pattern

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
  }
  
  let colors = [
    //blue
    {r: 4, g: 129, b: 158},
    {r: 32, g: 102, b: 118},
    {r: 1, g: 83, b: 103},
    {r: 56, g: 178, b: 206},
    {r: 96, g: 185, b: 206},
    
    //deep blue
    {r: 20, g: 53, b: 173},
    {r: 44, g: 62, b: 130},
    {r: 7, g: 29, b: 112},
    {r: 72, g: 103, b: 214},
    {r: 110, g: 132, b: 214},
    
    //yellow
    {r: 255, g: 177, b: 0},
    {r: 191, g: 148, b: 48},
    {r: 166, g: 115, b: 0},
    {r: 255, g: 197, b: 64},
    {r: 255, g: 212, b: 115},
    
    //orange
    {r: 255, g: 127, b: 0},
    {r: 191, g: 119, b: 48},
    {r: 166, g: 82, b: 0},
    {r: 255, g: 157, b: 64},
    {r: 255, g: 184, b: 115}
  ]
  
  function draw() {
    
    let angle = 0;
    let angle_inc = 5;
    let diff = min(height, width) * 0.006;
    let radius = min(height, width) / 8;
    let lineSmallStart = min(height, width) / 8;
    let lineSmallEnd = min(height, width) * 2 / 9;
    let lineBigStart = min(height, width) * 7 / 27;
    let lineBigEnd = min(height, width) * 4 / 9;
    let lineBeardEnd = min(height, width) * 7 / 18;
    let lineBeardStart = lineBigEnd - 10 * diff;
    
    let color_0 = colors[Math.round(random(colors.length - 1))]
    let color_1 = colors[Math.round(random(colors.length - 1))]
    let color_2 = colors[Math.round(random(colors.length - 1))]
    let color_3 = colors[Math.round(random(colors.length - 1))]
    
    translate(width/2, height/2);
    
    let x = 0;
    let y = 0;
    
    //center circles
    for (let i = 0; i < 15; i++) {
      push();
      scale(0.3);
      stroke(color_0.r, color_0.g, color_0.b);
      strokeWeight(2);
      noFill();
      ellipse(x, y, radius, radius);
      radius = radius - min(height, width)/200;
      y = y - min(height, width)/400;
      pop();
    }
  
    //middle circle of lines
    for (let i = 0; i < 360 / angle_inc; i++) {
      push();
      scale(0.3);
      stroke(color_1.r, color_1.g, color_1.b);
      strokeWeight(2);
      rotate(radians(angle));
      line(lineSmallStart,0, lineSmallEnd, 0);
      angle += angle_inc;
      pop();
    }
  
  
    //eye of lines
    angle = 0;
  
    for (let i = 0; i < 360 / angle_inc; i++) {
      push();
      scale(0.3);
      stroke(color_2.r, color_2.g, color_2.b);
      strokeWeight(4);
      rotate(radians(angle));
      
      if (i < 90 / angle_inc) {
        line(lineBigStart, 0, lineBigEnd, 0);
        lineBigEnd -= diff;
      }
      else if (i >= 90 / angle_inc && i < 180 / angle_inc || i >= 270 / angle_inc) {
        line(lineBigStart, 0, lineBigEnd, 0);
        lineBigEnd += diff;
      }
      else if (i >= 180 / angle_inc && i < 270 / angle_inc) {
        line(lineBigStart, 0, lineBigEnd, 0);
        lineBigEnd -= diff;
      }
      
      angle += angle_inc;
      pop();
    }
    
    //beard lines (bottom)
    angle = 80;
    
    for (let i = 80 / angle_inc; i >= 80 / angle_inc && i <= 100 / angle_inc; i++) {  
      push();
      scale(0.3);
      strokeWeight(10);
      stroke(color_3.r, color_3.g, color_3.b);
      rotate(radians(angle));
      
      if (i < 90 / angle_inc) {
        line(lineBeardStart, 0, lineBeardEnd, 0);
        lineBeardStart -= diff;
        lineBeardEnd += diff * 1.5;
      }
      else {
        line(lineBeardStart, 0, lineBeardEnd, 0);
        lineBeardStart += diff;
        lineBeardEnd -= diff * 1.5;
      }
      
      angle += angle_inc;
      pop();
    }
      
    //crown
      angle = 240;
    
      for (let i = 240 / angle_inc; i >= 240 / angle_inc && i <= 300 / angle_inc; i++) {
      push();
      scale(0.3);
      strokeWeight(10);
      stroke(color_3.r, color_3.g, color_3.b);
      rotate(radians(angle));
      
      if (i < 270 / angle_inc) {
        line(lineBeardStart, 0, lineBeardEnd, 0);
        lineBeardStart -= diff;
        lineBeardEnd += diff * 1.5;
      }
      else {
        line(lineBeardStart, 0, lineBeardEnd, 0);
        lineBeardStart += diff;
        lineBeardEnd -= diff * 1.5;
      }
        
      angle += angle_inc;
      pop();
    }
    
    //left wing
    let lineStart = width * 2 / 9;
    let lineEnd = width * 3 / 9;
    angle = 0;
  
    for (i = 0; i < 215 / angle_inc; i++) {
      push();
      scale(0.3);
      translate(- 7 * width/9, 0);
      strokeWeight(10);
      stroke(color_3.r, color_3.g, color_3.b);
      rotate(radians(angle));
      diff = min(height, width) * 0.006;
      line(lineStart, 0, lineEnd, 0);
      lineEnd += diff;
      angle += angle_inc;
      pop();
    } 
    
    //right wing
    angle = 330;
    
    for (i = 0; i < 215 / angle_inc; i++) {
      push();
      scale(0.3);
      translate(7 * width/9, 0);
      strokeWeight(10);
      stroke(color_3.r, color_3.g, color_3.b);
      rotate(radians(angle));
      diff = min(height, width) * 0.006;
      line(lineStart, 0, lineEnd, 0);
      lineEnd -= diff;
      angle += angle_inc;
      pop();
    }
  
    noLoop();
  }
  
