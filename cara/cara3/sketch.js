function setup() 
{
  createCanvas(600,400);
  mic=new p5.AudioIn();
  mic.start();
  
}

function draw() {
  //data mic
  let vol= mic.getLevel();
  let vulls= map(vol,0,1,0,100);
  let vboca= map(vol,0,1,0,300);
  //mosca
  let ales = 10*random(10);
  let ales2 = 10*random(10);
  //tracking
  let pupilY = map(mouseY,0,400,135,160);
  let pupilX1 = map(mouseX,0,600,235,260);
  let pupilX2 = map(mouseX,0,600,335,360);
  //color boca
  let colorboca1 = (90-40*sin(frameCount*0,001));
  let c11 = 10*random(100);
  let c1 = map(colorboca1,-1,1,0,c11)
  //color ulls
  let CPR = map(mouseX,0,600,0,255)
  let CPG = map(mouseY,0,400,0,255)
  let cpb1 = tan(frameCount*0,01)
  let CPB = map(cpb1,0,1,0,255)
  
  background(255,255,255);
  //Cara   
  fill(227,192,139);
  ellipse(300,200,250,300);
  //Ull dret
  fill(255);
  ellipse(250,150,50,50);
  //pupila dret
  fill(127.5+CPR,42+CPG,14+CPB)
  ellipse(pupilX1,pupilY,15,15);
  //Ull esquerre
  fill(255);
  ellipse(350,150,50,50);
  //pupila esquerra
  fill(127.5+CPR,42+CPG,14+CPB)
  ellipse(pupilX2,pupilY,15,15);
  //Boca
  fill(127.5+c1,15,15);
  arc(300,250,100,10+vboca,0,PI,CHORD);
  //Nas
  fill(219,169,116)
  triangle(300,200,300,225,275-vulls,212.5);
  //mosca
  fill(0,0,0);
  ellipse(50+ales2,50+ales,15,40);
  fill(255,255,255);
  ellipse(65+ales2,50+ales,15,65);
  ellipse(35+ales2,50+ales,15,65);
}
