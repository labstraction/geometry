

// const point1 = new Point(1, 1);
// const point2 = new Point(4, 5);

// console.log(point1);
// console.log(point2);

// const segment1 = new Segment(point1, point2);

// segment1._length = 12;

// console.log(segment1._length);

// const segment2 = Segment.fromPointsCoordinates(0, 1, 3, 5);


const pointA = new Point(0,0);
const pointB = new Point(0,3);
const pointC = new Point(4,0);

// const triangle1 = new Triangle(pointA, pointB, pointC);

// console.log(triangle1.calculatePerimeter());
// console.log(triangle1.calculateArea());

console.log(Triangle.calculateAreaInsideThreePoints(pointA,pointB,pointC))