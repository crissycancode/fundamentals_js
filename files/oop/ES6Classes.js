//ES6 Class
//prototype use call
//when inside class use super
//prototype when used in class is now called a method
//note: what is a constructor

class Person {
  constructor(firstName, lastName, dob){
    this.firstName = firstName; //property
    this.lastName = lastName; //property
    this.birthday = new Date(dob); //property
  }
  computeAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  getsMarried(newLastName){
    this.lastName = newLastName;
  }

  static addNumber(x,y){  //no need to instantiate
    return x + y;
  }
}

console.log('static method:  ' + Person.addNumber(1,1));
let crissy = new Person('crissy', 'aguilar', '02-14-1984');

console.log(crissy);
console.log(crissy.firstName);
console.log(crissy.lastName);
console.log(crissy.birthday);

console.log(crissy.computeAge());
console.log(crissy.getFullName());

crissy.getsMarried('new last name');
console.log(crissy.getFullName());

class Customer extends Person { //subclass/inheritance
  constructor (firstName, lastName, dob ,phone, membership){
    super(firstName, lastName, dob); //call is equivalent of super
    this.phone = phone;
    this.membership = membership;
  }

  getPhone(){
    return `customer name: ${this.firstName} ${this.lastName} \tcustomer phone no.: ${this.phone}`; 
  }

  getMembership(){
    return `customer name: ${this.firstName} ${this.lastName} is a  ${this.membership}`; 
  }
}

crissy = new Customer('crissy', 'aguilar', '02-14-1984', '0917-123-45-67', 'VVIP');
console.log(crissy.getPhone());
console.log(crissy.getMembership());


//turn prototype.js to classes
//turn inheritance.js to extends (call & super)