function setup() {
 createcanvas(480,120
}

function draw() {
  background(204);
 //ocell esquerra
 beginshape();
 vertex(50,120);
  vertex(100,90);
  vertex(110,60);
  vertex(80,20);
  vertex(220,60);
  vertex(160,80);
  vertex(200,90);
  vertex(140,100);
  vertex(130,120);
 endshape();
 fill(0);
 ellipse(155,60,8,8)
 //ocell de la dreta
 beginshape();
 vertex(120,50);
  vertex(90,100);
  vertex(60,110);
  vertex(20,80);
  vertex(60,220);
  vertex(80,160);
  vertex(90,200);
  vertex(100,140);
  vertex(120,130);
 endshape();
 fill(0);
 ellipse(155,60,8,8)
}
