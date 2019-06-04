// All Examples Written by Casey Reas and Ben Fry

// unless otherwise stated.

Eye e1, e2, e3, e4, e5;

PImage a;

void setup() 

{
  frameRate(100);

  a = loadImage("images/color.jpg");

  size(2000, 1200);

  background(0);

  smooth();

  noStroke();

  //e1 = new Eye( 650,  316,  100);

  //e2 = new Eye( 750,  385,  80);  

  //e3 = new Eye( 1000, 700, 120);

  //e4 = new Eye(1250,  444,  70); 

  //e5 = new Eye(1400, 520,  100);

}



void draw() 

{

  float pointillize = map(mouseX, 0, width, 10, 100);

  int x = int(random(a.width));

  int y = int(random(a.height));

  color pix = a.get(x, y);

  fill(pix, 126);

  ellipse(x, y, pointillize, pointillize);

  //e1.update(mouseX, mouseY);

  //e2.update(mouseX, mouseY);

  //e3.update(mouseX, mouseY);

  //e4.update(mouseX, mouseY);

  //e5.update(mouseX, mouseY);



  //e1.display();

  //e2.display();

  //e3.display();

  //e4.display();

  //e5.display();
}



class Eye 

{

  int ex, ey;

  int size;

  float angle = 0.0;

  

  Eye(int x, int y, int s) {

    ex = x;

    ey = y;

    size = s;

 }



  void update(int mx, int my) {

    angle = atan2(my-ey, mx-ex);

  }

  

  void display() {

    pushMatrix();

    translate(ex, ey);

    fill(255,126);

    ellipse(0, 0, size, size);

    rotate(angle);

    fill(153,126);

    ellipse(size/4, 0, size/2, size/2);

    popMatrix();

  }

}