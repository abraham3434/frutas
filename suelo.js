class Suelo {
  constructor(x,y,v,h);
{
let options = {
  isStatic:true
};
this.body = Bodies.rectangule (x,y,w,h,options);
this.w = w;
this.h = h;
World.add(world,this.body );
  }
show() {
 let pos = this.body.position;
 Push();
 rectMode(CENTER);
 noStroke();
 fill(148,127,146);
 rect(pos.x,pos.y,this.w,this.h);
 pop();   
  }
}


