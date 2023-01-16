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
