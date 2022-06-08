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

////////////////////////////////////////////////////////////////////////////////////////

// Str1 = 'Hello Javascript';
// Str2 = 'Hello Javascript. Javascript is very famous';
// Str3 = '  Hi  JS ';

// aa = Str1.length;
// bb = Str1.slice(6, 16);
// cc = Str1.slice(-11, -1);
// dd = Str1.slice(6);
// ee = Str1.replace('Javascript', 'JS');
// ff = Str2.replace('Javascript', 'JS'); //replace only takes first match remaining are ignored.
// gg = Str2.replace(/Javascript/g, 'JS'); //So we can use regular expression /g to change all Javascript. don't use "" with regular expression
// hh = Str2.replace(/JAVASCRIPT/i, 'JS'); //replace is case sensitive to avoid that use /i
// ii = Str2.toUpperCase();
// jj = Str1.toLowerCase();
// kk = Str1.concat(Str2);
// ll = Str1.concat('. Added ', Str2, ' ok perfect'); //Strings are immutable. We can't change it only replace it
// mm = Str3.trim();
// nn = Str1.charAt(0);
// oo = Str1.charCodeAt(0); //returns the unicode of the character at a specified index
// pp = Str1[0];
// Str1[0] = 'k'; //its not an array. its error . we can not get result . because its read only
// qq = Str1[0]; //
// rr = Str1.split(' ');

('use strict');

//////////////////////////////////////////////////////////////////////////

// console.log(`addition result is ${calc(10, 20)}`);

// //declarative function
// function calc(a, b) {
//   return a + b;
// }

// //expression fun
// const calc1 = function (a, b) {
//   return a + b;
// };

// console.log(`addition result is ${calc1(20, 20)}`);

// //arrow fun
// const calc2 = (a, b) => {
//   return a + b;
// };

// console.log(`addition result is ${calc2(30, 20)}`);

// //arrow fun in single line

// const calc3 = (a, b) => a + b;

// console.log(`addition result is ${calc3(30, 30)}`);

///////////////////////////////////////////////////////////////////

//Object//

// let car = {
//   firstName: 'Ford',
//   lastName: 'EcoSport',
//   type: 'SUV',
//   age: 2022 - 2015,
//   features: ['Automatic', 'EcoBoost'],
//   color: 'white',
//   actions: function () {
//     return 'Car Start';
//   },
// }; //name value pairs and only we can use function expression

// let nameKey = 'Name';
// console.log(car);

// console.log(
//   car.firstName + '  ' + car['firstName'] + ' ' + car['last' + nameKey]
// );

// console.log(car.actions()); // object function call

// console.log(car.features[0]); // object Array call

// car.abs = 'yes'; // add values to the object

// car.color = 'black'; //Reassign the value

// car.features[0] = 'manual';

// car.features[car.features.length] = 'Scuff Plate'; //add to array in the object

// console.log(car['actions']()); //Object function call using []

// let ram = {
//   Name: 'Ram',
//   birthYear: 1990,
//   calcAge: function () {
//     console.log(this); //we can get entire object
//     console.log(this.birthYear);
//     this.age = 2020 - this.birthYear; //we can create new property for object
//     return this.age;
//   },
// };

// console.log(ram.calcAge());

///////////////////////////////////////////////////////////////////

// function calcAge1(a, b) {
//   let output = 'Old Output';
//   function calcAge2() {}

//   if (a > 0) {
//     const ss = 'sdfsf';
//     var hh = 'vdfdvf';

//     const val1 = 'Ramu';
//     console.log(val1); //answer is 'Ramu'

//     output = 'New Output';
//   }

//   console.log(hh); // not error block scope not applied for var variables
//   console.log(ss); //error

//   calcAge2(); //not error

//   console.log(output); // answer is 'New Output' but if we create a new output variable inside if block then we will
//   //    get  'Old Output' as result

//   return a + b;
// }

// const val1 = 'Jonas';
// calcAge1(12, 23);
// calcAge2(); //error because function scoped

////////////////////////////////////////////////////////////////////////

////Array Destructuring

// let arr12 = ['Mango', 'Grape', 'Apple'];

// let [x, y, z, a] = arr12;

// console.log(x, y, z, a); // o/p Mango Grape Apple undefined

// ///Switching variable val

// let [first, second] = arr12;

// console.log(first, second); //o/p Mango Grape

// [first, second] = [second, first];

// console.log(first, second); // o/p Grape Mango

// //destructure nested array

// let arr56 = [2, 3, [7, 8]];
// console.log(arr56); //o/p [2, 3, Array(2)]

// let [i, , j] = arr56; //  select first and last val only
// console.log(i, j); // o/p   2 (2) [7, 8] ,

// let [l, , [m, n]] = arr56; //  separate nested array values to each variables
// console.log(l, m, n); //  2 7 8

//////Destructuring Objects

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// let { name, openingHours, categories } = restaurant; // Object destructuring can be done using object property names.
// //It can't done by using position like array

// console.log(name, openingHours, categories);

let { name: resName, openingHours: openHr = [], menu = 'assd' } = restaurant; //we can customise the variable name and
// if the given property name not contains in the object they give undefined. To avoid that
// we can give a default value like in 'menu' variable
console.log(resName, openHr, menu);

/////////////////////

let aa = 10,
  bb = 20;

let obj223 = { aa: 200, bb: 45, cc: 63 };

// { aa, bb } = obj223;  // we can not do that its an error. We should give a () wraping
({ aa, bb } = obj223);
console.log(aa, bb); //aa = 200 , bb=45

// ////////////////////////////// spread operator////////////////////////////////////

// let arr44 = [1, 2, 3];
// let newArray = [...arr44, 4, 5];
// console.log(...newArray); // o/p 1 2 3 4 5  because expand all elements in the array
// console.log(newArray); //o/p  (5) [1, 2, 3, 4, 5]

// console.log(...restaurant.mainMenu, 'agsda'); // o/p Pizza Pasta Risotto agsda

// // join 2 array

// let newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newMenu);

// //copy an array

// let newMenuCopy = newMenu;
// let newMenuCopy2 = [...newMenu];

// newMenuCopy2[1] = 'sacac';

// console.log(newMenuCopy[1]); //Pasta
// console.log(newMenuCopy2[1]); //sacac   not effecting the original one

// //copy an object

// let jj = { name: 'sdfdfs', age: '45' };
// let kk = jj;
// kk.name = 'mmm';
// console.log(jj.name); // mmm
// console.log(kk.name); // mmm   if we are changing the copied value it also effecting
// //  original one . Because reference type pointing to same address

// /// we can avoid this by using spread operator in object copying

// let jj = { name: 'sdfdfs', age: '45' };
// let kk = { ...jj };
// kk.name = 'mmm';
// console.log(jj.name); // sdfdfs
// console.log(kk.name); // mmm

// // Iterables are array,string,maps, set but not object

// let str1 = 'Jonas';
// let newStr = [...str1, ' ', 's'];
// console.log(newStr); //o/p (7) ['J', 'o', 'n', 'a', 's', ' ', 's']   like this we can expand string

// // console.log(`${...str1} jshsh`)  //its an error. we can't do that because we can use spread
// //                                 // if we want to buid a new array or passing arguments to function

// let demo = {
//   orderPastha: function (ing1, ing2, ing3) {
//     return `Your pastha is ready with ingredient ${ing1} , ${ing2} , ${ing3}`;
//   },
// };

// let ingredient = ['cheese', 'onion', 'pistha'];

// console.log(demo.orderPastha(ingredient[0], ingredient[1], ingredient[2]));

// console.log(demo.orderPastha(...ingredient));

// // o/p of both of them are Your pastha is ready with ingredient cheese , onion , pistha
// // the second method is more convient

// let newRestaurant = { firstName: 'jonas', ...demo, lastName: 'sdsfsd' };
// console.log(newRestaurant); // o/p firstName: "jonas"
// // lastName: "sdsfsd"
// // orderPastha: ƒ (ing1, ing2, ing3)

//////////////////////////////////////////////////////////////////////////

//////// Rest Operator ///////////

// // rest and spread operators using same ... as syntax
// // rest is just opposite of spread operator
// // spread is used to unpack values and rest used to pack values
// // spread also used to concat 2 arrays ..etc

// /// its spread operator because ... in right side
// let arr56 = [1, 2, ...[3, 4]];
// console.log(arr56); //o/p  (4) [1, 2, 3, 4]

// //its rest operator because its in left side
// let [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //o/p   1 2 (3) [3, 4, 5]

// let obj1 = {
//   menu1: ['mango', 'apple', 'banana'],
//   menu2: ['biriyani', 'porotta', 'chapathi'],
//   openingHours: {
//     sat: {
//       open: '7.00 am',
//       close: '11.00 pm',
//     },
//     fri: {
//       open: '11.00 am',
//       close: '10.00 pm',
//     },
//     wed: {
//       open: '11.00 am',
//       close: '10.00 pm',
//     },
//   },
// };

// let [mango, , banana, ...remains] = [...obj1.menu1, ...obj1.menu2];
// console.log(mango, banana, remains); // o/p mango banana (3) ['biriyani', 'porotta', 'chapathi']
// // we are skipping a value so also they are skipping it and combines remainings

//  let [mangoo, , bananaa, ...remainss, bread] = [...obj1.menu1, ...obj1.menu2]; //error
// // This is error because A rest element must be last

// // we can use same with objects
// let { sat, ...weekdays } = obj1.openingHours;
// console.log(sat, weekdays); // {open: '7.00 am', close: '11.00 pm'}close: "11.00 pm"open: "7.00 am"[[Prototype]]: Object {fri: {…}, wed: {…}}

// // rest with functions

// const add = function (...numbers) {
//   // here number is rest operator. they pack all separate elements
//   console.log(numbers);
// };

// add(2, 3);
// add(5, 6, 7);

/////for of loop////////

// let arr84 = ['biriyani', 'grape', 'orange'];

// for (let item of arr84) {
//   console.log(item);
// }
// //  o/p
// // biriyani
// // grape
// // orange

// for (let item of arr84.entries()) {
//   console.log(item);
// }

// // each row coming as an array

// //  o/p
// // (2) [0, 'biriyani']
// // (2) [1, 'grape']
// // (2) [2, 'orange']

// for (let item of arr84.entries()) {
//   // we will get the index by using entries
//   console.log(`${item[0] + 1}:${item[1]}`);
// }

// // o/p
// // 1:biriyani
// // 2:grape
// // 3:orange

// for (let [a, b] of arr84.entries()) {
//   //using destructure array concept
//   console.log(`${a + 1}:${b}`);
// }

// // o/p
// // 1:biriyani
// // 2:grape
// // 3:orange

/// object literals/////

// let days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// let openingHours = {
//   sat: {
//     open: '7.00 am',
//     close: '11.00 pm',
//   },
//   [days[4]]: {
//     // we can name inside the object like this. custome names
//     open: '11.00 am',
//     close: '10.00 pm',
//   },
//   [`hi ${days[1]}`]: {
//     // o/p hi tues :   also use string template for custome naming
//     open: '11.00 am',
//     close: '10.00 pm',
//   },
// };

// console.log(openingHours);

// let obj1 = {
//   menu1: ['mango', 'apple', 'banana'],
//   menu2: ['biriyani', 'porotta', 'chapathi'],
//   openingHours, //you can add an object from outside to another object like this

//   order: function () {
//     console.log('test 1');
//   },

//   order1() {
//     // you can define function inside an object also like this. Avoid : and function keyword
//     // ES2020 addition
//     console.log('test 2');
//   },
// };

// console.log(obj1);

/// Function Default Parameter

// const booking = function (planeNo, passangerNo = 1, rate = 400 * passangerNo) {
//   // From ES6 we can give default parameter like this. if we not passing value it take
//   // default value.

//   // ES5 method to avoid undefiend
//   // passangerNo = passangerNo || 1; //here we use short circuit method
//   // rate = rate || 400 * passangerNo; // if the value is falsy value use default val

//   let details = {
//     planeNo,
//     passangerNo,
//     rate,
//   };

//   console.log(details); //o/p {planeNo: 'DF457', passangerNo: 2, rate: 800}
// };

// booking('DF457', 2);

//// call back functions or higher order function

// const removeSpace = function (str) {
//   return str.replace(/ /g, ''); //using this regEx we can remove all space
// };

// const upperFirstWord = function (str) {
//   let [firstWord, ...others] = str.split(' '); //rest operator
//   return [firstWord.toUpperCase(), ...others].join(' '); //spread operator for concat and
//   // join is used to convert array to string. Using join(' ') we can add space b/n each word
// };

// // higher order fun
// const transform = function (str, fn) {
//   console.log('transformed string :' + fn(str)); //o/p transformed string :JAVASCRIPT is famous
//   console.log(fn.name); //o/p upperFirstWord . We got functon name
// };

// transform('Javascript is famous', upperFirstWord); // we passing a function as parameter

///Function  returning function

// const greet = function (greeting) {
//   return function (name) {
//     return `${greeting} ${name}`;
//   };
// };

// console.log(greet('hey')); //its a function now

// // o/p
// // ƒ (name) {
// //   return `${greeting} ${name}`;
// // }

// let greeterHey = greet('hey'); ////its a function now
// console.log(greeterHey);
// // o/p
// // ƒ (name) {
// //   return `${greeting} ${name}`;
// // }

// console.log(greeterHey('jonas')); //o/p hey jonas

// console.log(greet('hi')('martha')); //o/p hi martha . We can also call like this

// /// using arrow function

// const greetArrow = (greet) => (name) => console.log(`${greet} ${name}`);

// greetArrow('hello')('Arrow'); //o/p  hello Arrow

/// Simple array method

// let arr98 = ['Mango', 'Orange', 'Apple', 'Jack-Fruit', 'Grape'];

// //SLICE

// console.log(arr98.slice(2)); //o/p (3) ['Apple', 'Jack-Fruit', 'Grape']
// console.log(arr98.slice(2, 4)); //o/p (2) ['Apple', 'Jack-Fruit']
// console.log(arr98.slice(-1)); //o/p ['Grape']  last element
// console.log(arr98.slice(1, -2)); //o/p  (2) ['Orange', 'Apple']
// console.log(arr98.slice(-4, -2)); //o/p   (2) ['Orange', 'Apple']
// console.log(arr98.slice(-2, -4)); //o/p not correct. big negative no should be first val
// console.log(arr98.slice()); //o/p (5) ['Mango', 'Orange', 'Apple', 'Jack-Fruit', 'Grape']
// //This is how we can create a copy of array
// console.log([...arr98]); //o/p (5) ['Mango', 'Orange', 'Apple', 'Jack-Fruit', 'Grape']
// //This is how we can also create a copy of array

// // SPLICE - just like slice , but difference is it change original array. ie mutable

// console.log(arr98.splice(-1)); //o/p  ['Grape']
// console.log(arr98); //o/p  (4) ['Mango', 'Orange', 'Apple', 'Jack-Fruit']
// // ie actually they delete last element ie array change
// console.log(arr98.splice(0, 2)); //o/p (2) ['Mango', 'Orange'] ie the first val is
// // starting index and second val is howmany item delete from that position
// console.log(arr98); //o/p  (2) ['Apple', 'Jack-Fruit']

// //REVERSE
// // it is a mutate method. it changes the original array

// let arr99 = ['a', 'b', 'c', 'd', 'e'];
// let arr100 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr100.reverse()); //o/p (5) ['f', 'g', 'h', 'i', 'j']
// console.log(arr100); //o/p 5) ['f', 'g', 'h', 'i', 'j']   ie array changes

// //CONCAT
// //it is immutable method. it doesn't change original array

// console.log(arr99.concat(arr100)); //o/p (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log(arr100); //o/p  (5) ['f', 'g', 'h', 'i', 'j']  ie array not change
// console.log([arr99, ...arr100]);
// // o/p
// // 0: (5) ['a', 'b', 'c', 'd', 'e']
// // 1: "f"
// // 2: "g"
// // 3: "h"
// // 4: "i"
// // 5: "j"
// console.log([...arr99, ...arr100]); //o/p (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// //JOIN
// //to convert an array to string
// //immutable

// console.log(arr100.join()); //o/p   f,g,h,i,j
// console.log(arr100); //o/p  (5) ['f', 'g', 'h', 'i', 'j']
// console.log(arr100.join('-')); //o/p  f-g-h-i-j

/// array at method

// let arr68 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr68.at(2)); // o/p  c
// //same as arr68[2]

// // One application is last element of an array
// //We can find it by several methods

// console.log(arr68[arr68.length - 1]); //o/p  e
// console.log(arr68.slice(-1)); //o/p   ['e'] , its an array
// console.log(arr68.slice(-1)[0]); //o/p  e , to extract element from array use this
// console.log(arr68.at(-1)); //o/p  e

// // also applicable for string

// console.log('jonas'.at(0)); //o/p   j

///Set
// //collection of unique values.
// //set also iterable

// const orderSet = new Set(['pasta', 'burger', 'cheese', 'pasta', 'cheese']);

// console.log(orderSet); //o/p   Set(3) {'pasta', 'burger', 'cheese'}
// //it automatically avoid repeated values. its in object format

// console.log(new Set('Jonasss')); //o/p  Set(5) {'J', 'o', 'n', 'a', 's'}
// //we can also use with strings. Avoid all repeat characters in the string

// console.log(orderSet.size); // o/p  3

// console.log(orderSet.has('burger')); //o/p  true  , similar to include method in array
// console.log(orderSet.has('bread ')); //o/p  false

// orderSet.add('maggi');
// orderSet.add('maggi');

// console.log(orderSet); //o/p Set(4) {'pasta', 'burger', 'cheese', 'maggi'}
// orderSet.delete('cheese');
// console.log(orderSet); //o/p   Set(3) {'pasta', 'burger', 'maggi'}

// console.log([...orderSet]); //o/p  (3) ['pasta', 'burger', 'maggi']  , convert object to array

// for (const item of orderSet) {
//   console.log(item);
// }

// //o/p
// // pasta
// // burger
// // maggi

// orderSet.clear(); //delete all items in set
// console.log(orderSet); //o/p  Set(0) {size: 0}

///forEach iteration

// let arr55 = ['diary milk', 'milky bar', 'mango byte'];

// arr55.forEach(function (item, index) {
//   //its a call back function. The first argument is array value on each iteration, second
//   //arguments is index
//   console.log(index, item);
// });

// // o/p
// // 0 diary milk
// // 1 milky bar
// // 2 mango byte

///map
// //It loops over array and generate a new array

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsArray = movements.map(function (item, i) {
//   return item * 2;
// });

// console.log(movementsArray); //(8) [400, 900, -800, 6000, -1300, -260, 140, 2600]

// //same using arrow fun
// const movementsArrayArrow = movements.map((item, i) => item * 2);

// //if we are doing same thing with for of

// let movementsArrayForOf = [];
// for (const item of movements) {
//   movementsArrayForOf.push(item * 2);
// }

// let y = movements.forEach((item, i) => item * 2);
// console.log(y); //o/p  undefined
// //forEach also not generate any array by default

///filter
// //filter array method used to filter the result like get all positive number in to a new array
// //it checks the condition we given

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// let y = movements.filter((item) => item > 0);
// console.log(y); //o/p (5) [200, 450, 3000, 70, 1300]
// //it contains only filtered value ie only positive values

// let z = movements.map((item) => item > 0);
// console.log(z); //o/p  (8) [true, true, false, true, false, false, true, true]
// // When we are trying to achieve same using map then we got only boolean result not filtered

///Creating Date

// let currentDate = new Date();

// console.log(currentDate); //o/p  Thu Jun 09 2022 00:25:07 GMT+0530 (India Standard Time)

// console.log(new Date(2020, 13, 10, 10, 25)); //o/p  Wed Feb 10 2021 10:25:00 GMT+0530 (India Standard Time)
// //first val year, 2nd val month, 3rd val day, hour , minute , sec ...so on the order keeps
// // months are 0 based ie 10 means november
// //also there is a auto correction method ie if we put 33 on day section remaing days added to next month

// console.log(new Date('december,20,2003')); //o/p Sat Dec 20 2003 00:00:00 GMT+0530 (India Standard Time)

// console.log(currentDate.getFullYear()); //o/p  2022
// console.log(currentDate.getMonth()); //o/p  5
// console.log(currentDate.getDate()); //o/p  9
// console.log(currentDate.getDay()); //o/p  4 means week day ie thurday on number
// console.log(currentDate.getHours()); //o/p  0
// console.log(currentDate.getMinutes()); //o/p  25
// console.log(currentDate.getSeconds()); //o/p  07

// console.log(currentDate.toISOString()); //o/p  2022-06-08T19:15:31.327Z formated
// console.log(currentDate.getTime()); //o/p  1654715765390  it gets current time stamp value

// console.log(new Date(1654715765390)); //o/p Thu Jun 09 2022 00:46:05 GMT+0530 (India Standard Time)
// //if we give unique time stamp value they provide curresponding date

// // we got current time stamp through both of this ways
// console.log(new Date().getTime()); // 1654716147954
// console.log(Date.now()); //1654716147954

// currentDate.setFullYear(2036);
// console.log(currentDate); //Mon Jun 09 2036 00:54:25 GMT+0530 (India Standard Time)
// //we can change any value like this set method
