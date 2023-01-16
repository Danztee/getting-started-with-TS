let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let num: number[] = [1, 2, 3, 4, 5];
let truth: boolean[] = [false, true, false];

// Class
class Car {}
let car: Car = new Car();

// object literals
let point: { x: number; y: string; z: number } = {
  x: 10,
  y: "10",
  z: 12,
};

// annotations around numbers
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) functions that returns any type
const json = "{ 'x': 10, 'y': 10 }";
const coordinates: { x: number; y: number } = JSON.parse(json);
// coordinates.okay;

// 2) when we declare a variable on one line and init. it later
let words = ["red", "blue", "green"];
let foundWord: boolean;

words.forEach((word) => {
  if (word === "green") {
    foundWord = true;
  }
});

// 3) variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numbersAboveZero: number | boolean = false;

numbers.forEach((number) => {
  console.log(number);
  if (number > 0) {
    numbersAboveZero = number;
  }
});
