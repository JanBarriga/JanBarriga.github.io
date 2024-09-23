function setup() 
{
  createCanvas(600,400);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol= mic.getLevel();
  let vulls= map(vol,0,1,0,100);
  let vboca= map(vol,0,1,0,300);
  background(127);
  //Cara
  fill(227,192,139);
  ellipse(300,200,250,300);
  //Ull dret
  fill(255);
  ellipse(250,150,50,50);
  fill(84,42,14);
  ellipse(250,150,15,15);
  //Ull esquerre
  fill(255);
  ellipse(350,150,50,50);
  fill(84,42,14);
  ellipse(350,150,15,15);
  //Boca
  fill(200,15,15);
  arc(300,250,100,10+vboca,0,PI,CHORD);
  //Nas
  fill(219,169,116)
  triangle(300,200,300,225,275-vulls,212.5);
}
