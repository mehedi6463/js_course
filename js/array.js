/* //basic array declaration
const cars=["BMW ","Volvo ","Rols Royal ","Toyota ","Corola"];

document.getElementById("demo").innerHTML=cars.toString();
document.getElementById("demo1").innerHTML=cars.join(" * ");
document.getElementById("demo1").innerHTML=cars.join(" * ");
document.getElementById("demo1").innerHTML=cars.push("Kiwi");
*/


/*// pop methood
document.getElementById("demo1").innerHTML= cars.pop();
let pOp=cars.pop();
console.log(pOp);
*/


// document.getElementById("arrays").innerHTML=car.toString();
// document.getElementById("arrays").innerHTML=car.length;
// console.log(car[2]);

//call last array element 
// console.log(cars.length);

//for loop
// for (i = 0; i < cars.length; i++) {
//     // console.log(cars[i]);
// }


//For loop display
// const fruits=["Apple","Banana","Carrot","Pineaple","Orange"];
// let fuLen= fruits.length;
// let headIng="<h2>This is our fruits list:</h2>"
//  let htmlCode ="<ol>";
//  for (let i = 0; i < fuLen; i++) {
// //   console.log(fruits[i]);
//    htmlCode +="<li>"+ fruits[i] +"</li>";
//  }
//  htmlCode +="</ol>";
// document.getElementById("demo").innerHTML = headIng + htmlCode;


// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruit.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruit[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("arrays").innerHTML = text;

//foreach lopp- recomended fro array
// const fruits=["Apple","Banana","Carrot","Pineaple","Orange", "Srtobery"];
//  fruits.push="Lemon";
// console.log(fruits);

// function fruitFun(params) {
//     htmlCode +="<li>" + params + "</li>";
// }

// let htmlCode="<ul>";
// fruits.forEach(fruitFun);
// htmlCode +="</ul>";

// document.getElementById("demo").innerHTML=htmlCode;

// multiple array join "contact()" also able to add array elements
// const cars=["BMW ","Volvo ","Rols Royal ","Toyota ","Corola"];
// const cars2=["BMW2 ","Volvo2 ","Rols Royal2 ","Toyota2 ","Corola2"];
// const cars3=["BMW3 ","Volvo3 ","Rols Royal3 ","Toyota3 ","Corola3"];

// const myCars = cars.concat(cars2, cars3);
// console.log(myCars);

//sort array elements alphabetically
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML=fruits;

// let fruit = fruits.sort();
// document.getElementById("demo1").innerHTML=fruit;

//revers array elements alphabetically
/*const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
document.getElementById("demo").innerHTML=fruits;

let fruit = fruits.reverse();
document.getElementById("demo1").innerHTML=fruit;*/

//sort with number
// const points=[100, 59, 64, 20, 40, 6, 83,12];
// points.sort(
//     function (a, b) {
//         return a-b; //for asscending
        //return s-a; //for desending
//     }
// );
// console.log(points[points.length-1]);
// document.getElementById("demo").innerHTML=points.join(" / ");

//foreach() inside div
// const cars=["BMW ","Volvo ","Rols Royal ","Toyota ","Corola"];

/* let code="<div>";
cars.forEach(codeFunc);
document.getElementById("demo").innerHTML=code;

function codeFunc(a, r) {
    code +=a + "<br />";
}
code +="</div>";*/

//map() with list item
// const numbers1=[20, 11, 50, 45, 63, 7, 1, 71, 36, 2, 13];
/*let listItem="<ul>";
cars.map(myCars);
document.getElementById("demo").innerHTML=listItem;
function myCars(value) {
    listItem +="<li>"+ value*2 +"</li>";
}
listItem +="</ul>";*/
// const numbers2= numbers1.map(myNumbers);
// function myNumbers(value) {
//     return value * 2;    
// }
// document.getElementById("demo").innerHTML= numbers2;

// filter() with sort
// const numbers1=[20, 11, 50, 45, 63, 7, 1, 71, 36, 2, 13,96];
// const numbers2 = numbers1.filter(myNumbers);

// function myNumbers(value) {
//     return value <= 80;
    
// }
// document.getElementById("demo").innerHTML=numbers2.sort((a,b) => a-b);

//reduce()
// const numbers1=[20, 11, 50, 45, 63, 7, 1, 71, 36, 2, 13,96];
// const numbers2 = numbers1.reduce(myNumbers, 500);

// function myNumbers(total, value) {
//     return total + value;
    
// }
// document.getElementById("demo").innerHTML=numbers2;

// console.log(Math.PI);

//Random number genareted function 
function getRndInteger(min, max) {
  return Math.ceil(Math.random() * (max - min) ) + min;
};
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// };
console.log(getRndInteger(101, 102));
document.getElementById("demo1").innerHTML= getRndInteger(0, 10);
