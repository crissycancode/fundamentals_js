//Built in Constructor
//string
const name1 = 'Jeff'; //is a string
const name2 = new String('Jeff'); //a constructor that creates an object that is a string
console.log(typeof name1 + name1);
console.log(typeof name2 + name2);
console.log();
//sample only

function SampleConstructor(int, bool, char, str) { 
  // has functions that crates string from other variable types
  this.intx = function() { //property method
    int = int * 3;
    return int;
  }
  this.boolx = function() { //property method
    if (bool === true){
      return bool;
    }
  }
  this.charx = function() { // property method
    char = char.toUpperCase();
    return char;
  }
  this.string = str; // property
}

let x  = new SampleConstructor(7); //first variable
console.log(x.intx());
    x  = new SampleConstructor(null,true); //second variable
console.log(x.boolx());
    x  = new SampleConstructor(null,null,'x');
console.log(x.charx());
// x.intx();
    x.string = 'my day';
console.log(x.string);
