// object.create

const personPrototype = {
  greeting: function(){ //method : value
    return `hello there ${this.firstName} ${this.lastName}`
  },
  getMarried: function(newLastName){
    this.lastName = newLastName
  }
}; //object literal

const crissy = Object.create(personPrototype);

crissy.firstName = 'crissy';
crissy.lastName = 'aguilar';
crissy.getMarried('mora');

const jem = Object.create(personPrototype, {
  firstName: {value: 'john'},
  lastName: {value: 'mora'},
  age: {value: 32}
});

console.log(crissy.greeting());
console.log(jem.greeting());