//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	getArea(){
     return this.width*this.height;
	}
}

class Square extends Animal {
	getPerimeter(){
     return 4*this.width*this.height;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
