// 1. Exercise 1
for(let i=0; i<=10; i++) {
  // console.log(i);
}

// 2. Exercise 2

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
// console.log(sum);


function biggestNum(arr) {
  let big = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > big) {
      big = arr[i];
    }
  }

  return big;
}


// Test with this arrays
// console.log(biggestNum([3, 5, 7, 2, 8])) // Output: 8
// console.log(biggestNum([-1, -6, -3, -4, -2])) // Output: -1
// console.log(biggestNum([10])) // Output: 10

let newStr = '';
function reverseString(str) {
  // Write your code here
  for(let i=str.length; i >0; i--) {
    newStr = newStr + str[i-1];
  }
  return newStr;
}



// Test with this strings
//console.log(reverseString("Hello world")) // Output: dlrow olleH
//console.log(reverseString("JavaScript")) // Output: tpircSavaJ
// ===========

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 4; i <= 20; i++) {
//   console.log(i);
// }

// for (let i = 6; i <= 40; i++) {
//   console.log(i);
// }

// Error handling:
// const students = [
//   {name: "Sophea", age: 16},
//   {name: "Makara", age: 20},
//   {name: "Vicheka", age: 18},
//   {name: "Lymeng", age: 16},
//   {name: "Then", age: 18}
// ];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name)
// }


// console.log(2);
// for (let i = 2; i <= 10; i++) {

//   if (i % 2 !== 0) {
//     console.log(i);
//   }

// }

function printPrimes(n) {
  for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}

// Print prime numbers up to 50
// printPrimes(50);

// function isPrime(num) {
//   if (num <= 1) return false; // This line explicitly excludes 1
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;
//   for (let i = 3; i < num; i += 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(17));

// Fibonacci
// let f = 0;
// let s = 1;
// let str = f + "," + s;

// for (let i = 3; i <= 20; i++) {

//   let th = s + f;
//   str = str + ',' + th;

//   f = s;
//   s = th;
// }

// console.log(str);

for (let i = 2; i <= 50; i+= 2) {

  if (i % 2 !== 0) {
    console.log(i);
  }

}