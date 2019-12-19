const mileage = process.argv[2];
const carAge = process.argv[3];
const avgMiles = mileage / carAge;
const maxMileage = 40000;
const milesUntil40k = maxMileage - mileage;

console.log(milesUntil40k);
