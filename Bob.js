class Bob{
    constructor(x,y,r){
        var options={isStatic:true,
        restitution:0.3,
        friction:0.5,
     density:1.2 }

     this.x=x;

this.y=y;
this.r=r;
this.image=loadImage("paper.png");
this.body=Bodies.circle(this.x,this.y,this.r,options)
World.add(world,this.body);
    }
display(){
var paperpos = this.body.position;
this.image;
push();
translate(paperpos.x,paperpos.y);
rectMode(CENTER);
strokeWeight(3);
fill ("white");
ellipse (0,0,40,this.r);
pop ();

}



}

