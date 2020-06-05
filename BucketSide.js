class Side{
    constructer(x, y, width, height){
        var options = {
            'isStatic': true,
            'friction': 10,
            'restitution': 0.1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(0,255,0);
        rect(0, 0, this.width, this.height);
        pop();
    }
}