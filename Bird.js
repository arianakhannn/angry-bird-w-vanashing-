class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");

this.trajectory=[]


  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  if( this.body.position.x>220 && this.body.speed>5){
   
var position=[this.body.position.x,this.body.position.y]
this.trajectory.push(position)
  }









for (var i in this.trajectory) {
image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1])
}








    super.display();
  }
}
