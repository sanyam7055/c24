class Ground {
    constructor(x,y,width,height)
    {
        var options = {
            isStatic: true 
       
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width ;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var position1 = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(position1.x,position1.y,this.width,this.height);
        
    }
}