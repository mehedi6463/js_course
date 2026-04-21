function nameMy() {
    document.getElementById('teste').innerHTML = 'test update';

}
// function with parameter
function sleepTime(nam, time) {
    console.log(nam + " is sleeping from " + time);
}
sleepTime("mahedi", "9pm");
sleepTime("hasan", "12am");

// function with return
function myName(x, y) {
    return x + y;
}
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

<<<<<<< HEAD
 let text ="asdfg hjklo \"iuytrew\" qzxcvbnnm";
//    document.getElementById("demo").innerHTML =text.length;
 console.log(text.length);
 console.log(text);

=======
//onclick event
>>>>>>> 8327562f2fd2d0b9d681235b8110c348e3bc9e44

function displayDate() {
    document.getElementById("demo000").innerHTML = Date();

}
//using varriavle in 
let userName = "Mehedi";
let PassWord = "123errfd@$";

document.getElementById('demo22').innerHTML = `Welcom to our team. Your ID: ${userName}, and Password: ${PassWord}.`;

//using html tags with for loop
// let header="This is a header";
// let tags=["1st", '2nd', `3rd`];

// let htMl = `<h2> ${header}</h2> <ul>`;

// for (const x of tags){
//     htMl +=`<li>${x}</li>`;
    
// }
// htMl +=`</ul>`;
// document.getElementById("demo3").innerHTML= header;

let header = "Template Strings";
// let tags = ["template strings", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;

// for (const x of tags) {
//   html += `<li>${x}</li>`;
// }

// html += `</ul>`;
document.getElementById("demo").innerHTML = `${header}`;
