//regular expresion...
//search() methood disply index
/*
let text = "Visit W3Schools. W3Schools is a learning website!"; 
let n = text.search(/w3Schools/ig);
document.getElementById("demo").innerHTML = n;
console.log(n);
*/

//match () method
// let text = "Visit W3Schools! w3Schools is good for lerner."; 
// const myArr = text.match(/W3Schools/ig);
// document.getElementById("demo").innerHTML = myArr;

//replace() method
// let text = "Visit W3Schools! w3Schools is good for lerner.";
// const tex = text.replace(/W3Schools/ig, "Microsoft");

// document.getElementById("demo").innerHTML = tex;
// console.log(tex);

//object key / value method
// let person ={
//     name: "mehedi",
//     age: 30,
//     email:"mehedi@gmail.com"
// }
// let keys =Object.keys(person);
// console.log(keys);

// let values =Object.values(person);
// console.log(values);

// let entries =Object.entries(person);
// console.log(entries);

//speard oparator
// var person1 ={
//     name: "mehedi",
//     age: 30,
//     email:"mehedi@gmail.com"
// }
// var person2 ={
//     name: "hasan",
//     age: 31,
//     email:"hasan@gmail.com"
// }

// console.log({
//     ...person1, ...person2,
// });

//rest oparator (...params)

// function nameParam(...params) {
//     console.log(params);    
// }
// nameParam("mehedi", "hasan", "shawon");

//object destructuring 
// const person ={
//     id: 101,
//     fname: "Mehedi",
//     age: 30,
//     education:{
//         degree1: "Masters in Science and Engineering",
//         degree2: "Bachelor in Science and Engineering",

//     }

// };
// const {id: Serial, fname: firstName, age} = person;
// const {fname: firstName} = person;
// const {age} = person;

// console.log(`ID: ${Serial}`);
// console.log(`First Name: ${firstName}`);
// console.log(`Your age: ${age}`);

// nested object

// const {education:{degree2: BSc}, education:{degree1: MSc ={}}, age} = person;
// console.log(`Hons: ${BSc}`);
// console.log(`Hons: ${MSc}`);
// console.log(`Hons: ${age}`);

//array destructuring 
let numbers = [1, 2, 3,[50, 60], 4, 5];
// let [a, ,b, x,c] = numbers;
// console.log(a+b-c+x);


// nested array destructuring
let [, , , [z,y]] = numbers;
console.log(z,y);

// swipe value between two varriable 
[z, y] =[y, z];
console.log(z,y);


// export..import 
import loopPage, {newArray} from "./forLoop.js";

console.log(loopPage);
console.log(newArray[1]);
