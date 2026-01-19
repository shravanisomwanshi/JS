// Arrays -------------------------------------

// let marks = [ 97 , 87 , 82 , 75 , 64 , 36 ];
// console.log(marks);
// console.log(marks.lenth);

// let heroes = ["ironman","thor","shaktiman","spiderman","antman"];
// console.log(heroes);
// console.log(heroes.length);

// looping over an array-----------------------------

// let heroes = ["ironman","thor","shaktiman","spiderman","antman"];
//  console.log(heroes[0]);
//  console.log(heroes[0]);

// let heroes = ["ironman","thor","shaktiman","spiderman","antman"];
// // for loop
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

// // for of 
// for (let hero of heroes) {
//     console.log(hero);
// }

// let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

// for (let city of cities) {
//     console.log(city.toUpperCase());
// }

// Practice Q1---------------------------------------

// let marks =[85,97,44,37,76,60];

// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


// Practice Q2-------------------------------------

// let items = [250,645,300,900,50];

// let i = 0;
// for (let value of items) {
// let offer = value / 10;
// items[i] = items[i] - offer;
// console.log(`value after offer = ${items[i]}`);
// i++;
// }

// let items = [250,645,300,900,50];

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);

// Array Methods------------------------------------------
// push 
// let fooditems = ["potato","apple","litchi","tomato"];

// fooditems.push("chips","burger","paneer");

// console.log(fooditems);

// pop
// let fooditems = ["potato","apple","litchi","tomato"];

// console.log(fooditems);
// let deleteditem = fooditems.pop();
// console.log(fooditems);
// console.log("deleted",deleteditem);

// tostring
//  let fooditems = ["potato","apple","litchi","tomato"];
//  let marks = [97,86,54,36];
//  console.log(fooditems);
//  console.log(fooditems.toString());
//  console.log(fooditems);

// concat
// let marvelHeroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superman","batman"];
// let indianHeroes = ["shaktiman","krish"];

// let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);
    
// unshift and shift array
// let marvelHeroes = ["thor","spiderman","ironman"];

// let val = marvelHeroes.shift();
// console.log("deleted", val);

// slice and splice method 
// let marvelHeroes = ["thor","spiderman","ironman","superman","batman","shaktiman","krish"];

// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1, 2));


let arr = [1,2,3,4,5,6,7];

// arr.splice(2,2,101,102);

// Add Element
// arr.splice(2,0,101);

// Delete Element
// arr.splice(3,1);

// Replace Element
// arr.splice(3,1,101);

// Practice Q1---------------------------------

let companies = ["Microsoft","Google","Capgemini","Ola","Uber","IBM","Netflix"];

companies.push("Amazon");