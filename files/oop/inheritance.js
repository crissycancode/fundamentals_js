//inheritance
//prototype inheritance

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function(){
  return  `hello ${this.firstName} ${this.lastName}!`;
}

const per1 = new Person('crissy', 'aguilar');
const per2 = new Person('jem', 'mora');

console.log(per1.greeting());
console.log(per2.greeting());

//customer constructor

function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName); //call is equivalent of super
  this.phone = phone;
  this.membership = membership
}

Customer.prototype = Object.create(Person.prototype); //1. call the constructor
Customer.prototype.constructor = Customer;//2. make the prototype return 

const cust1 = new Customer('crissy', 'aguilar', '12345', 'VVIP');
const cust2 = new Customer('jem', 'mora', '45466', 'VVIP');
console.log(cust1);
console.log(cust2);


//inherit the person prototype methods note: check extends and super definition

console.log('greeting: ');
console.log(cust1.greeting());


