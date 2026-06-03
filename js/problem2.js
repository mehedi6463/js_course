//problem-2-find how many times use "this" word and which is the first time position?

// const sentence ="This is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ut, nam lorem alias cum maiores velit aperiam repudiandae ipsa esse impedit soluta porro, magni cumque ratione debitis iusto do lorem dolorum necessitatibus atque? Tempora similique repudiandae aliquid reprehenderit cupiditate consequatur et, placeat tempore officia nam Lorem ipsa maiores nesciunt magnam voluptas distinctio.";

//find length with condition
/*
const matches = sentence.match(/lore1/gi);
const matchFind = matches ? matches.length :"not found"; 
console.log(matchFind);
*/


//find index/position of value
/*let position = sentence.search(/lorem/i)+1;
position = position >= 0 ? position : "not found";
console.log("Text position is" + " " + position);*/

//linearSearch -- search in array
/*
function linearSearch(arr, valu) {
    const arrayLength =arr.length;
    for (i = 0; i < arrayLength; i++) {
        if (arr[i] === valu) {
            return i+1;
        }        
    }
    return 'data not found';    
}
console.log(linearSearch(['a', 'b', 'c', 'd', 'o'], 'o')); 
*/

// লিনিয়ার সার্চ: এক এক করে চেক করা

// const ticketNum=[3, 4, 7, 9, 1, 5, 6, 8, 2];
// const luckyNum= 1;
// let foundIndex = false;
// let aryLnth = ticketNum.length;

// for (x = 0; x < aryLnth; x++) {
//     if (ticketNum[x] === luckyNum) {
//         console.log("found at position" + " " + (x));
//         foundIndex = true;
//         break;
//     }    
// }
// if (foundIndex) {
//         console.log("not found");
// }

// let groceryList = ["ডাল", "তেল", "আলু", "পেঁয়াজ"];
// let itemToFind = "চাল";

// function checkGroceryList(list, item) {
//     for (let i = 0; i < list.length; i++) {
//         // প্রতিটা আইটেম চেক করা হচ্ছে
//         if (list[i] === item) {
//             return `হ্যাঁ, তালিকায় ${itemToFind} আছে!`; 
//         }
//     }
//     return `না, তালিকায় ${itemToFind} নেই।`;
// }

// console.log(checkGroceryList(groceryList, itemToFind));
// আউটপুট: হ্যাঁ, তালিকায় চাল আছে!


// const classone = ["Mehedi", "Hasan", "Shawon", "Muhammad"];
// const studentname = "Hasan";

// function studentOne(one, name) {
//     let arrayLength = classone.length;
//     for (let index = 0; index < arrayLength; index++) {
//         if(one[index] === name) {
//         return "Student is" + " " + `${studentname}`;
//     }
    
// }
// return `${studentname} not found`;
// }
// console.log(studentOne(classone, studentname));

//find largest string in array
// const longName = ["Mehedi Hassan", "Hasan", "Shawon", "Muhammad Ali"];

// function longestName(names) {
//     let longestWord = '';

//     for (name of names){
//         if(name.length > longestWord.length) {
//             longestWord = name;
//         }
//     }
//     return [longestWord, names.indexOf(longestWord)];
// }
// console.log(longestName(longName));

//find a digit that can divided by 3, and 5,  are both between the number 1-100;
// function fizzBuzz(number){
//     for (let i = 1; i <= number; i++) {
//         if(i % 15 === 0){
//             console.log(`${i} is Fizz Buzz`);
//         }else if(i % 5 === 0){
//             console.log(`${i} is Buzz`);
//         }else if(i % 3 ===0){
//             console.log(`${i} is Fizz`);
//         }else{
//             console.log(`${i} is not Fizz Buzz`);
//         }
        
//     }
// }
// fizzBuzz(450);

//remove false value in array
//false, null, undefine, '', 0, NaN is false value in js
// const car =['BMW', '', 0, ' Volvo', NaN, undefined, ' RR', true];
// const tureArray = car.filter(
//     function (el) {
//         if(el){
//             return true;
//         }else{
//             return false;
//         }
        
//     }
// );
// const tureArray = car.filter(Boolean);
// console.log(tureArray);
// document.getElementById("demo").innerHTML=tureArray;

//find false valu from object
// const obj ={
//     a: "lws",
//     b: undefined,
//     c: "Learn JS",
//     d: false,
//     e: "apple",
//     g: 40,
//     h: NaN,
//     j: "thanks for learn"
// };

// const trueObject = function (obj) {
//     for (let i in obj) {
//         if(!obj[i]){
//             delete obj[i];
//         }
//     } 
//     return obj;
// };
// console.log(trueObject(obj));

// const cup = {
//     type: "Coffee",
//     color: "black",
//     status: "full",
//     energy: 10,
//     motivation: function() {
//         if (this.energy === 100) {
//             return 'ready to coding';
//         }else{
//             return 'need refill energy';
//         }
//     }
// };

// console.log(cup.motivation());

//constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     };

// };

// const person1 = new Person("Mehedi", 30);
// const person2 = new Person("Hasan", 25);

// console.log(person1.greet());
// console.log(person2.greet());


// ১. শুধু বেসিক প্রোপার্টিগুলো কনস্ট্রাক্টরে রাখবো
function Student(name, age) {
  this.name = name;
  this.age = age;
}

// ২. কমন মেথড বা ফাংশনটি স্টুডেন্টের prototype-এ যোগ করে দেবো
Student.prototype.school = function() {
  console.log(this.name + " studies at ABC School.");
};

// ৩. এখন অবজেক্ট তৈরি করি
let student1 = new Student("Rahim", 15);
let student2 = new Student("Karim", 16);

// ৪. রান করে দেখি
student1.school(); // আউটপুট: Rahim studies at ABC School.
student2.school(); // আউটপুট: Karim studies at ABC School.