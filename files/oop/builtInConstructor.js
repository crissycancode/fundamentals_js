
const name1  = 'Jeff'; //string literal
let name2 = new String('Jeff'); //string object

// name2.foo = 'bar';
// console.log(name2);
// name2.foo = 'test';
// console.log(name2);


if (name2 === 'Jeff'){
  console.log(typeof name2 + 'Yes');
} else {
  console.log(typeof name2 + 'Yes');
}


const num1 = 5;
const num2 = new Number(5);

if (num1 === 5){
  console.log(typeof num1 + 'Yes');
} else {
  console.log(typeof num1 + 'Yes');
}

if (num2 === 5){
  console.log(typeof num2 + 'Yes');
} else {
  console.log(typeof num2 + 'Yes');
}


const getSum1 = function(x,y){ //function expression or annonymous function
  return x + y;
}

console.log(typeof getSum1);

const getSum2 = new Function('x','y', 'return 1 + 1');

console.log(typeof getSum2);

const john1 = {name: 'John'};
console.log(typeof john1);

const john2 = new Object({name: 'john'});
console.log(typeof john2);

const array1 = [1,2,3,4,5];
console.log(typeof array1);

const array2 = new Array([1,2,3,4,5]);
console.log(typeof array1);