const cars = ["bmw", "toyota", "lexus"];
const dates = [new Date()];

const carsByMake = [["f150"], ["corolla"], ["ford"]];

const car = cars[0];

cars.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates = [new Date(), "2030-10-10"];

// importantDates.push(444);
