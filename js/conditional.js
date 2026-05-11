// //if else condition...
// // let age =3;

// // if (age > 18) {
// //     console.log("You are Adult");  
// // }else if (age ==18 &&  ){
// //     console.log("Adult age");
// // }else if(age>18 && age<30)
// // console.log("Matured age");
// // else{
// //     console.log("You are Child");
// // }

// //switch case using date object...
// /*
// let day;
// let data= new Date().getDay();

// switch (data) {
//     case 0:
//         day="Sunday";        
//         break;
//     case 1:
//         day="Monday";        
//         break;
//     case 2:
//         day="Tuesday";        
//         break;
//     case 3:
//         day="Wednesday";        
//         break;
//     case 4:
//         day="Thursday";        
//         break;
//     case 5:
//         day="FriDay";        
//         break;
//     case 6:
//         day="Saturday";        
//         break;

//     default:
//         day="NOT FOUND";
//         break;
// }
// document.getElementById("demo").innerHTML="Day is " + day;
// */

// //for loop in array with alphabetically sorted...
// // let cars=['BMW', "Rolls-Royce", "Lamborghini", "Corolla", "Saab", "Volvo", "Ford"];
// //for loop in array with alphabetic sorted...
// // let cars=['BMW', "Rols Royals", "Lamborgini", "Corola", "Saab", "Volvo", "Ford"];

// // for (let i = 0; i < cars.length; i++) {
// //     let carSorted =cars.toSorted();
// //     console.log(carSorted[i]);
// // for (let i = 0; i < cars.length; i++) {
// //     let carSorted =cars.toSorted();
// //     console.log(carSorted[i]);

// // }
// // console.log("its done...");

// //For loop
// /*
// const cars =["BMW", "Audi", "Volvo", "Rolls-Royce"];
// let text ="";

// for(i=0; i<cars.length; i++){
// let carSort=cars.toSorted();
// text += carSort[i]+"<br>";
// }

// document.getElementById("demo").innerHTML=text;
// */

// //For in loop with object... recommended for OBJECT
// /*
// const person = {fname:"Mehedi",lname: "Hasan", age:30};
// let text ="";

// for(let x in person){
// //console.log(x);
// text += person[x] + " " ;
// }
// document.getElementById("demo").innerHTML=text;
// */

//for loop in array with alphabetic sorted...
// let cars=['BMW', "Rols Royals", "Lamborgini", "Corola", "Saab", "Volvo", "Ford"];

// for (let i = 0; i < cars.length; i++) {
//     let carSorted =cars.toSorted();
//     console.log(carSorted[i]);
    
// }
// console.log("its done...");

//For loop
/*
const cars =["BMW", "Audi", "Volvo", "Rols Royals"];
let text ="";

for(i=0; i<cars.length; i++){
let carSort=cars.toSorted();
text += carSort[i]+"<br>";
}

document.getElementById("demo").innerHTML=text;
*/

//For in loop with object... recomanded for OBJECT
/*
const person = {fname:"Mehedi",lname:"Hasan", age:30};
let text ="";

for(let x in person){
//console.log(x);
text += person[x] + " " ;
}
document.getElementById("demo").innerHTML=text;
*/

//For in loop with array... for in loop is not recomanded for array
/*
const number =[2, 5, 7, 1, 6, 3, 9, 4];

let text ="";
for (let x in number){
    let numSort=number.toSorted();
    console.log(numSort[x]);
}
*/

//For OF loop with array... recomanded for array
/*
const number =[2, 5, 7, 1, 6, 3, 9, 4];
for (let x of number){
    console.log(x);
}
*/
// //For in loop with array... for in loop is not recommended for array
// /*
// const number =[2, 5, 7, 1, 6, 3, 9, 4];

// let text ="";
// for (let x in number){
//     let numSort=number.toSorted();
//     console.log(numSort[x]);
// }
// */

// //For OF loop with array... recommended for array
// /*
// const number =[2, 5, 7, 1, 6, 3, 9, 4];
// for (let x of number){
//     console.log(x);
// }
// */
// console.log("its done...");
