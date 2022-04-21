class Box {
  constructor(x, y, width, height, img, isStatic) {
    var options = {
      isStatic: isStatic
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = img;

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER); // takes origin(centre  point)as the centre point of the image 
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
