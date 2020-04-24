  let r=32;// i use it to change colors easily
  let b=109;
  let c=211;
  let g=100;
  let d=191;
function setup() {
 createCanvas(400, 400);
 strokeWeight(3);
 frameRate(60);  
}
function draw() {
/* if the mouse isn't pressed it looks like the shape follows the mouse */ 
/* if the mouse is pressed it looks like mouse creates drawing*/
  if(mouseIsPressed)
  {
  stroke(g,r,c);
  fill(c,b,r);
  } else
  {
  stroke(b,d,g);
  fill(d,c,r);
  background(r,g,b);/* every time program does this the background is refreshed*/
  }
  ellipse(mouseX,mouseY,30,30);/*it can be replaced with other shape*/
/*triangle(mouseX,mouseY,mouseX+15,mouseY-15,mouseX+30,mouseY);*/
//rect(mouseX,mouseY,30,30);*/
//text("GOOD MORNING Y'ALL!!!",mouseX,mouseY);
//point(mouseX,mouseY);
}