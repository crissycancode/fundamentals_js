//function expression is function inside the variable
//anonymous function has no name and cannot be called.
//function declaration has a name and can be called.
//one line function doesnt need curly braces
//single parameters does not need parenthesis


// const sayHello = function(){
//   console.log('hello');
// }

//FUNCTION EXPRESSION
const feHello = () => {
  console.log('hello');
}

feHello();

//ONE LINE FUNCTION
const olfHello = () => console.log('hello');
olfHello();

//ONE LINE FUNCTION WITH RETURN
// const retHello = () =>  {
//   return 'hello';
// }

const retHello = () =>  'Hello';
console.log(retHello());

//ONE LINE RETURN OBJECT
const retObjHello = () => ({message: 'hello'});
console.log(retObjHello());

//SINGLE PARAMETER
const paramHello = name =>  console.log(name);
paramHello('crissy');

//MULTIPLE PARAMETERS
const paramHello2 = (name, age) =>  console.log(name + ' ' + age);
paramHello2('crissy', 36);

//USING MAP
const users = ['nathan', 'john', 'william'];

//map using function
const nameLength = users.map(function(name) {
  return `${name} hello, your name lenght is ${name.length}`;
});
console.log(nameLength);

//map using arrow 
const nameLength2 = users.map((name)=> {
  return `${name} hello, your name lenght is ${name.length}`;
});
console.log(nameLength2);

//map on one line function
const nameLength3 = users.map((name) =>`${name} hello, your name lenght is ${name.length}`);
console.log(nameLength3);

//Arrow Function with No Param
const noParam = _ => ({msg: 'hello'});
console.log(noParam());


//change all easy HTTP to arrow function