function letTest() {
  let x = 31;
  if (true) {
    let x = 71;
    console.log(x); // will say 71
  }
  console.log(x); // will say 31
}

// please be careful of the scope of the 2 let variables above.


const myVariable = 1;

// myVariable = 2; // syntax error will occur.

// const is immutable, therefore cannot be changed. It's value is constant

// Please be advised that it does not mean that it's value cant be changed.


const myObject = {};

myObject.myProperty = 1;

console.log(myObject.myProperty)
// it will be one. In this case it will read 1.

console.log(myObject)
// it will come out as key value pair.

letTest()

// function Polygon(height, width) {
//   this.height = height;
//   this.width = width;
// }

// this.area = this.calcArea();

// Polygon.prototype.calcArea = () => {
//   return this.height * this.width;
// };
//
// const rectangle = new Polygon(10, 5);
//
// console.log(rectangle.area);

// function Square(sideLength) {
//   Polygon.call(this, sideLength, sideLength);
// }
//
// Square.prototype = new Polygon();
//
// const square = new Square(5);
//
// // Polygon { height: 5, width: 5, area: 25}
//
// console.log(square);
//
//
// square.constructor;
//
// Square.prototype.constructor = Square;
//
// const square2 = new Square(6);
//
// square2.constructor
//
// console.log(square2)


class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const rectangle = new Polygon(10,5);

console.log(rectangle.area);


class Square extends Polygon {
  constructor(sideLength){
    super(sideLength, sideLength)
  }
}

const mySquare = new Square(5);

// Square { height: 5, width: 5 }
mySquare;

mySquare.constructor;

mySquare.area


const greet = (greeting, person) => {
  return greeting + ', ' + person + '!';
};

console.log(greet('Hello', "Marv"));


var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// Please check the difference in the implmentation between the two.
var a2 = a.map(function(s){return s.length});

// this is a fat arrow function implementation.
var a3 = a.map(s => s.length);

// Fat arrows also have implicit returns -- the following are equivalent.
var a3 = a.map(s => s.length);
var a4 = a.map(s => {
  return s.length;
});

// Please also be advised that when an arrow function only accepts one argument, parentheses are optional
var a3 = a.map(s => s.length);

var a3 = a.map((s) => s.length);



// Please be advised that when there are two or more arguments, you must have parenthesis


var evens = [1, 2, 3, 4].reduce((memo, i) => {
  if (i % 2 === 0) {
    memo.push(i)
  }
  return memo;
}, []);


const promise = new Promise((resolve, reject) => {
  return someIntenseTask().then(result => {
    if (result.success) {
      return resolve(result)
    }

    return reject(result.error)
  })
})

promise.then(result => {
  return doSomething(result);
}).catch(error => handleError(error))
