// let x=5;
// let y =12;
// let z= x+y;
// document.getElementById("demo33").innerHTML=z;
// //check NAN(Not a Number)
// let strGkl= 'b' + 'a' + +'a' + 'a';
// console.log(strGkl.toUpperCase());

//while loop...
// let i = 10;
// let text="";
/*
while(i<10){
    text +="while number is " + i +" / ";
    i++;
    
};
console.log(text);
*/

// do while loop...
/*
do{
    text +="do while number is " + i +" / ";
    i++;
}
while (i < 10);
console.log(text);
*/


//Set Method ...
// const mySet = new Set(['a','b', 'c', 'd']);
// console.log(mySet);

// set with foreach loop
/*
let text ="";
mySet.forEach(
    function (value){
        text += value + " ";
    }
);
console.log(text);
*/

//JavaScript Map method...you can use keys in map for any kind of datatype

//map declearation way 1
/*
const fruits =new Map([
    ["Mango", 50],
    ["Orange", 60],
    ["Apple", 100],
    ["Banana", 40]
]);
*/

//map declearation way 2 using set ();
/*
const fruits =new Map();
fruits.set("Mango", 60);
fruits.set("Orange", 80);
fruits.set("Apple", 90);
fruits.set("Banana", 30);

*/
//console.log(fruits);


//bigint data type...
/*
let x = BigInt("1234567890123456789012345345678239345067867867867867867867867876868678768");

document.getElementById("demo").innerHTML =  x;
document.getElementById("demo1").innerHTML = typeof x; 

let y = 1234567890123456;
document.getElementById("demo2").innerHTML =  y;
*/
<<<<<<< HEAD
// const fruits = ['Apple', 'Banana', 'Cherry',1];
// let [x, y, z, c] = fruits;

// console.log(c);
=======
// Destructuring:..
// Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// Destructuring
// let {firstName, lastName, age} = person;

// Display Primitive Values
// document.getElementById("demo").innerHTML =
// firstName + " " + lastName +" "+ age;
// Destructuring:..
// Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// Destructuring
//let {firstName, lastName, age} = person;

// Display Primitive Values
//document.getElementById("demo").innerHTML =
//firstName + " " + lastName +" "+ age;

//regular expression...
//match method without flag like-i=incasesensitive ,g=global
/*let text = "Visit W3Schools!"; 
const myArr = text.match(/W3Schools/);
document.getElementById("demo").innerHTML = myArr;*/

//replace()
/*
let text = document.getElementById("demo").innerHTML;
text = text.replace(/Microsoft/, "W3Schools");
document.getElementById("demo").innerHTML = text;
*/
//
// let str ="Hello";
// if (0>5) {
//     str ="Peter";
// }
// console.log(str);

// let test =1;
//  test==2;

// console.log(test);

// let babyAge =1;
// let isBirthDay =true;

// if (isBirthDay) {
//     let babyAge=2;
// }
// console.log(babyAge);
>>>>>>> e491512b44b8496eb9107d3f5d26f3f31cf47280
