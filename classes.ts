class Vehicle {
  constructor(public color: string) {
    // this.color = color;
  }

  //   color: string;

  //   drive(): void {
  //     console.log("chuga");
  //   }

  protected hong(): void {
    console.log("beep");
  }
}
const vehicle = new Vehicle("pink");
console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("chuga");
//   }

//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// // const vehicle = new Vehicle();
// // vehicle.drive();

// const car = new Car();
// car.drive();
