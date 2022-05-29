// let val1 = prompt('enter a number');
// let val2 = Number(val1);
// alert(
//   `Your val is in ${typeof val1} I converted into number ${val2}. Now Its type is ${typeof val2}`
// );

// switch (val2) {
//   case 10:
//     alert('ypu got 10');
//     break;
//   case 20:
//     alert('you got 20');
//     break;
//   default:
//     alert('Sry try again');
// }

// val2 = 30;

// alert(`${val1 > val2 ? `${val1} is bigger` : `${val2} is bigger`}`);

// // 0,undefined,null,'',NaN

// alert(Boolean(0));

// alert('hi \n hello "it\'s" a\rll \vright');

Str1 = 'Hello Javascript';
Str2 = 'Hello Javascript. Javascript is very famous';
Str3 = '  Hi  JS ';

aa = Str1.length;
bb = Str1.slice(6, 16);
cc = Str1.slice(-11, -1);
dd = Str1.slice(6);
ee = Str1.replace('Javascript', 'JS');
ff = Str2.replace('Javascript', 'JS'); //replace only takes first match remaining are ignored.
gg = Str2.replace(/Javascript/g, 'JS'); //So we can use regular expression /g to change all Javascript. don't use "" with regular expression
hh = Str2.replace(/JAVASCRIPT/i, 'JS'); //replace is case sensitive to avoid that use /i
ii = Str2.toUpperCase();
jj = Str1.toLowerCase();
kk = Str1.concat(Str2);
ll = Str1.concat('. Added ', Str2, ' ok perfect'); //Strings are immutable. We can't change it only replace it
mm = Str3.trim();
nn = Str1.charAt(0);
oo = Str1.charCodeAt(0); //returns the unicode of the character at a specified index
pp = Str1[0];
Str1[0] = 'k'; //its not an array. its error . we can not get result . because its read only
qq = Str1[0]; //
rr = Str1.split(' ');

('use strict');

console.log(`addition result is ${calc(10, 20)}`);

//declarative function
function calc(a, b) {
  return a + b;
}

//expression fun
const calc1 = function (a, b) {
  return a + b;
};

console.log(`addition result is ${calc1(20, 20)}`);

//arrow fun
const calc2 = (a, b) => {
  return a + b;
};

console.log(`addition result is ${calc2(30, 20)}`);

//arrow fun in single line

const calc3 = (a, b) => a + b;

console.log(`addition result is ${calc3(30, 30)}`);

//Object//

let car = {
  firstName: 'Ford',
  lastName: 'EcoSport',
  type: 'SUV',
  age: 2022 - 2015,
  features: ['Automatic', 'EcoBoost'],
  color: 'white',
  actions: function () {
    return 'Car Start';
  },
}; //name value pairs and only we can use function expression

let nameKey = 'Name';
console.log(car);

console.log(
  car.firstName + '  ' + car['firstName'] + ' ' + car['last' + nameKey]
);

console.log(car.actions()); // object function call

console.log(car.features[0]); // object Array call

car.abs = 'yes'; // add values to the object

car.color = 'black'; //Reassign the value

car.features[0] = 'manual';

car.features[car.features.length] = 'Scuff Plate'; //add to array in the object

console.log(car['actions']()); //Object function call using []

let ram = {
  Name: 'Ram',
  birthYear: 1990,
  calcAge: function () {
    console.log(this); //we can get entire object
    console.log(this.birthYear);
    this.age = 2020 - this.birthYear; //we can create new property for object
    return this.age;
  },
};

console.log(ram.calcAge());

function calcAge1(a, b) {
  let output = 'Old Output';
  function calcAge2() {}

  if (a > 0) {
    const ss = 'sdfsf';
    var hh = 'vdfdvf';

    const val1 = 'Ramu';
    console.log(val1); //answer is 'Ramu'

    output = 'New Output';
  }

  console.log(hh); // not error block scope not applied for var variables
  console.log(ss); //error

  calcAge2(); //not error

  console.log(output); // answer is 'New Output' but if we create a new output variable inside if block then we will
  //    get  'Old Output' as result

  return a + b;
}

const val1 = 'Jonas';
calcAge1(12, 23);
calcAge2(); //error because function scoped
