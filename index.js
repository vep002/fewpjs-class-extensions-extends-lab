// Your code here
class Polygon {
    constructor(...side){
        this.side= side;
    }

    get countSides () {
        return this.side.length
    }

    get perimeter () {
        this.side.reduce((a,b) => {
            return a+b
        },0)
    }
}

class Triangle extends Polygon{
    get isValid () {
        this.side.forEach(element => {
            //???
        });
    }
}

class Square extends Polygon {
    get isValid () {

    }

    get area () {
        this.side*this.side
    }
}