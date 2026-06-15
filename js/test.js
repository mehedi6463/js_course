// function nameMy() {
//     document.getElementById('teste').innerHTML='test update';
    
// }
// function with parameter
// function sleepTime(nam, time) {
//     console.log(nam + " is sleeping from " + time);    
// }
// sleepTime("mahedi", "9pm");
// sleepTime("hasan", "12am");

// function with return
// function myName(x,y) {
//     return x+y;
// }
// let z=myName(3,6);
// console.log(myName(3,8));
// document.getElementById("demo").innerHTML=myName(3,8);

// function
// function sayHello() {
//   return "Hello World This is JS";
// }

// let greeting = sayHello();

// document.getElementById("demo2").innerHTML = greeting;

//object with function
// let car={
//     name:"BMW",
//     model:2026,
//     weight:"1000kg",
//     color:"Black",
//     start: function () {
//         console.log("car has started");
//     },
// };
// console.log(car.name);

//  let text ="asdfg hjklo \"iuytrew\" qzxcvbnnm";
//  document.getElementById("demo").innerHTML =text.length;
//  console.log(text.length);
//  console.log(text);
//  console.log(text);

// function myFunction(a) {
//     let text = 10;
//     return a*text;
//   }

//     console.log(myFunction(2));

// function addFunction(a) {
//     let t = 10;
//     return t += a;   
// }
// console.log(addFunction(5));

//--set method

// --Create a Set
// const letters = new Set(["a","b","c",0, 9]);

// letters.add(11);
// letters.add(13);

//-- List all Elements
// let text = "";
// for (const x of letters) {
//   text += x + "<br>";
// }
// console.log(letters.size);
// document.getElementById("demo").innerHTML = text;

// const myset= new Set(["a","b","c",0, 9]);

// let sets = "";
// for(let s of myset){
//     sets += s + "<br>";
// }
// console.log(sets);
// document.getElementById("demo").innerHTML = sets;

//map() method 
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
let result = "";
for (let n of fruits) {
    result += n + "<br>";
}
document.getElementById("demo").innerHTML = result + "<br>";