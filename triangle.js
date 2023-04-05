class Triangle{

    constructor(pointA, pointB, pointC){

        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;

        this.segmentAB = new Segment(this.pointA, this.pointB);
        this.segmentBC = new Segment(this.pointB, this.pointC);
        this.segmentCA = new Segment(this.pointC, this.pointA);

    }


    calculatePerimeter(){
        return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;
    }

    calculateSemiPerimeter(){
        return this.calculatePerimeter() / 2;
    }

    calculateArea(){

        const semiPerimenterMinusSegmentAB = this.calculateSemiPerimeter() - this.segmentAB.length;
        const semiPerimenterMinusSegmentBC = this.calculateSemiPerimeter() - this.segmentBC.length;
        const semiPerimenterMinusSegmentCA = this.calculateSemiPerimeter() - this.segmentCA.length;
        
        const product = this.calculateSemiPerimeter() * 
                        semiPerimenterMinusSegmentAB * 
                        semiPerimenterMinusSegmentBC *
                        semiPerimenterMinusSegmentCA;

        const area = Math.sqrt(product);
        return area;

    }

    static calculateAreaInsideThreePoints(point1, point2, point3){
        const distance12 = Triangle.calculateDistanceBetweenTwoPoints(point1, point2);
        const distance23 = Triangle.calculateDistanceBetweenTwoPoints(point2, point3);
        const distance31 = Triangle.calculateDistanceBetweenTwoPoints(point3, point1);

        const perimeter = distance12 + distance23 + distance31;

        const semiPerimeter = perimeter / 2;

        const semiPerimenterMinusDistance12 = semiPerimeter - distance12;
        const semiPerimenterMinusDistance23 = semiPerimeter - distance23;
        const semiPerimenterMinusDistance31 = semiPerimeter - distance31;

        const product = semiPerimeter * 
                        semiPerimenterMinusDistance12 * 
                        semiPerimenterMinusDistance23 *
                        semiPerimenterMinusDistance31;

        const area = Math.sqrt(product);
        return area;
    }

    // static calculateDistanceBetweenTwoPoints(point1, point2){
    //     const deltaX = point1.x - point2.x;
    //     const deltaY = point1.y - point2.y;
    //     const squareDX = deltaX ** 2;
    //     const squareDY = deltaY ** 2;
    //     const squareSum = squareDX + squareDY;
    //     const length = Math.sqrt(squareSum);
    //     return length;
    // }

}

// class Triangle2{

//     constructor(pointA, pointB, pointC){
//         this.segmentAB = new Segment(pointA, pointB);
//         this.segmentBC = new Segment(pointB, pointC);
//         this.segmentCA = new Segment(pointC, pointA);
//     }
    
//     get pointA(){
//         return this.segmentAB.pointA;
//     }

//     get pointB(){
//         return this.segmentAB.pointB;
//     }

//     get pointC(){
//         return this.segmentBC.pointC;
//     }


// }


// class Triangle3{

//     constructor(pointA, pointB, pointC){
//         this.pointA = pointA;
//         this.pointB = pointB;
//         this.pointC = pointC;
//     }
    
//     get segmentAB(){
//         return new Segment(this.pointA, this.pointB);
//     }

//     get segmentBC(){
//         return new Segment(this.pointB, this.pointC);
//     }

//     get segmentCA(){
//         return new Segment(this.pointC, this.pointA);
//     }


// }