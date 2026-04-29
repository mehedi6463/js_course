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


