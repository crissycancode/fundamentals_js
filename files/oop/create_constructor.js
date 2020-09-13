// encapsulation
// abstraction
// inheritance - can inherit property and method of a constructor 
// polymorphysm

const person = {
  name: 'cris'
}

//console.log(person.name);

//person constructor 
//creating constructor function the first letter must be uppercase

function Student(name, age = 0) {// function ConstructorName (variable, variable)
  this.name = name; // thisConstructor.property = variable 
  this.age = age; // thisConstructor.property = variable
  this.floor = function(){
    return 'floor';
  };
  //console.log(this);
}

let x = new Student('bob',37); //const variable =  new Constructor(value, value);
    x = new Student('bob'); //const variable =  new Constructor(value, value);

Math.floor();
x.floor();

//sample of constructor and this keyword
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

}

const cris  = new Person('cris', 'february-02-1984');
console.log(cris.name());
console.log(cris.birthday());
console.log(cris.calculateAge());
