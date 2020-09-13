//PROTOTYPE

//voc: property method, property, prototype, method, polymorphism

//to create a prototype you must have a constructor
// for object literals it is called property method because constructor's property is equalt to function.
//abstraction is when the property method is not inside the constructor

//Person Constructor 
function Person(firstName, lastName, dob){
  this.firstName = firstName; //property
  this.lastName = lastName; //property
  this.birthday = new Date(dob); //property

  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getFullYear() - 1970);
  // };
}

Person.prototype.computeAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
}

//Get full name 
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

//Gets Married 
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;

}

const me = new Person('crissy', 'aguilar', '02-02-1984');
console.log(me.computeAge());

me.getsMarried('mora');
console.log(me.getFullName());

console.log(me.hasOwnProperty('firstName'));
console.log(me.hasOwnProperty('getFullName')); 