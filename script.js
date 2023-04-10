//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	getArea(){
		let a=(this.width)*(this.height);
     return a;
	}
}

class Square extends Animal {
	getPerimeter(){
     return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
