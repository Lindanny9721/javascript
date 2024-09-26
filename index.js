const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


const isSum50 = (n1 + n2 + n3 + n4) == 50;

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`The four numbers are valid according to the criteria: ${isUnder25}`)
const isDivisble5 = (n1 % 5) && (n2 % 5) && (n3 % 5) && (n4 % 5);
console.log(`The four numbers are divisible by 5 according to the criteria: ${isDivisble5}`)
const largerThan = n1 > n4;
console.log(`N1 is larger than N4: ${largerThan}`)
const arithmetic = ((n1 - n2) * n3)/n4
console.log(`The arithemetic result is: ${arithmetic}`)
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

console.log(isValid);

let totalDistance = 1500;
let totalGallons = 175/3;
let totalGallonsNeeded1 = 1500 / 30;
let totalGallonsNeeded2 = 1500 / 28;
let totalGallonsNeeded3 = 1500 / 23;
let totalHours1 = 1500 / 55;
let totalHours2 = 1500 / 60;
let totalHours3 = 1500 / 75;
console.log(`It'll take the car going 55 miles a hour a total of ${totalGallonsNeeded1} gallons`);
console.log(`It'll take the car going 60 miles a hour a total of ${totalGallonsNeeded2} gallons`);
console.log(`It'll take the car going 75 miles a hour a total of ${totalGallonsNeeded3} gallons`);
console.log("Everycar would make it beside the car that's going 75 miles a hour");
console.log(`It'll take the car going 55 miles a hour a total of ${totalHours1} hours`)
console.log(`It'll take the car going 60 miles a hour a total of ${totalHours2} hours`)
console.log(`It'll take the car going 75 miles a hour a total of ${totalHours3} hours`)

