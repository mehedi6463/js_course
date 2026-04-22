//basic array declaration 
const cars=["BMW","Volvo","Rols Royal","Toyota","Corola"];

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
const fruits=["Apple","Banana","Carrot","Pineaple","Orange", "Srtobery"];
// fruits.push="Lemon";
console.log(fruits);

function fruitFun(params) {
    htmlCode +="<li>" + params + "</li>";
}

let htmlCode="<ul>";
fruits.forEach(fruitFun);
htmlCode +="</ul>";

document.getElementById("demo").innerHTML=htmlCode;


