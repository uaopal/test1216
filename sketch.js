
let windowwidth, windowheight;
let stars=[];
let factor=100;
let speedSlider;
function setup() {
  createCanvas(width, height);
  speedSlider=createSlider(0,20,5,0.1);
  for(let i=0;i<500;i++){
    stars[i] =createVector(
      random(-width*factor,width*factor),
      random(-height*factor,height*factor),
      random(10,400)    ); 
    stars[i].pz=stars[i].z;
}
}

function draw() {
  background(0);

  fill(255);
  noStroke();
  translate(width/2, height/2);
  for(let star of stars){
    let x=star.x/star.z;
    let y=star.y/star.z;
    let px=star.x/star.pz;
    let py=star.y/star.pz;
    let d=map(star.z,0,400,1,10);
    //textSize(d*5);
    //text("*",x,y);
    circle(x,y,d);       
    line(x,y,px,py);
    star.pz=star.z;
    stroke(255);

    star.z -=speedSlider.value();
    if (star.z<1) {
        star.x=random(-width*factor,width*factor);
        star.y=random(-height*factor,height*factor);
        star.z=400;
        star.pz=400;
        }     
  }

 


}
