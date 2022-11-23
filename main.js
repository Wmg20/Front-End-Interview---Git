/* Loops in js */

// for loop
// this loop will print the value from 1 to 19
// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

// For in loop

let obj = {
  ram: 80,
  shyam: 20,
  ved: 90,
  rohan: 20,
};

for (let a in obj) {
  // here a represent object key
  console.log(a);

  // here obj[a] will print value of the key
  //   console.log(obj[a]);
}

// For of loop - for array an strings only  (bcoz these are iterable)

// for (let a of 'ved') {
//     // it will print v e d
//   console.log(a);
// }

//----------------- While loop--------------------//

// let n = prompt('Enter the value of n');
// n = Number.parseInt(n);
// let i = 0;

// while (i < n) {
//   console.log(i);
//   i++;
// }

// Do while loop

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// const car = ['volvo', '2018', 'ved'];

// console.log(car.length); // calculating length of array
// console.log(car.indexOf('2018')); // finding index of 2018
// console.log(car[0]); // finding value at 0 index

// car.push('12DS');
// car.pop('ved');
// car.shift();
// delete car[0];
// console.log(car);

// const car = { ram: '20', shyam: '10' };

// car.neha = '20';

// console.log(car);
