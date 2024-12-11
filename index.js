// Question no 1

function calculateDifference (a, b){
   return a - b;
}
console.log(calculateDifference(5, 2));

// Question no 2

function isOdd(n) {
    if (n & 1 == 1) {
    return "true";
    }
    return "false";
}
console. log(isOdd(12));

// question no 3

function findMin (arr){
  let smallest = points[0];
  for(let i= 1; i < points.length; i++){
    if(points[i] < smallest){
      smallest = points[i];
    }
  }
  return smallest;
}
  const points = [40, 100, 2, 5, 25, 10];
  console.log(findMin(points))

// question no 4

function filterEvenNumbers(number){
  return console.log(number.filter(num => num % 2 ===0));
} 
filterEvenNumbers([40, 100, 1, 5, 25, 10]);


// question no 5

const numbers = [40, 100, 1, 5, 25, 10];

numbers.sort(sortArrayDescending);
console.log(numbers);

function sortArrayDescending (a, b){
  return b - a;
}

// question no 6

function lowercaseFirstLetter (){
    const lowerCase = "I love Bangladesh";
    const firstLetter =lowerCase.toLocaleLowerCase();
    console.log(firstLetter);
}
lowercaseFirstLetter ();

// question no 7

function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
const array = [10, 40, 30, 40, 50];
console.log(findAverage(array));

// question no 8

function isLeapYear(year){
if (year % 4 === 0 && year % 100 !== 0){
  return true;
} else if (year % 400 === 0){
  return true;
} else {
  return false;
}
} 
let year = 2028;

if(isLeapYear(year)==true){
  console.log(true);
}else{
  console.log(false);
}

// const numbers = [40, 100, 1, 5, 25, 10];

// numbers.sort(sortArrayDescending);
// console.log(numbers);

// function sortArrayDescending (a, b){
//   return b - a;
// }




