// function formformValided() {
//   const form = document.forms['frm1'];
//   const valuee = form['fname'].value;
  
//   if (valuee == " ") {
//     alert('name is requried');
//     return false;
//   }
  
// }

//animation js
// function myAnimation() {
//   const animate = document.getElementById('red');
//   let pos = 0;

//   let timeOut = setInterval(frame, 10);

//   function frame() {
//     if (pos < 350) {
//       pos++;
//       animate.style.top = pos + 'px';
//       animate.style.left = pos + 'px';
//     }else{
//       clearInterval(timeOut);
//     }
    
//   }
// }

//JS Event single click event
// let myButton = document.querySelector('#button');
//  myButton.onclick = function () {
//     myButton.innerHTML="This is my First click";
//     }

//JS Dubble click events
// const button = document.getElementById('button');
// let clickTimer = null;

// // Single Click Handler
// button.addEventListener('click', function () {
//     // আগের কোনো টাইমার থাকলে তা ক্লিয়ার করবে যাতে ডাবল ক্লিক হলে সিঙ্গেল ক্লিক রান না হয়
//     clearTimeout(clickTimer);

//     // ২০০-৩০০ মিলিসেকেন্ড অপেক্ষা করবে ডাবল ক্লিক হচ্ছে কিনা দেখার জন্য
//     clickTimer = setTimeout(() => {
//       button.innerHTML = "Done";
//     }, 50); // 250ms delay
// });

// // Double Click Handler
// button.addEventListener('dblclick', function () {
//     // ডাবল ক্লিক হওয়া মাত্রই সিঙ্গেল ক্লিকের টাইমার থামিয়ে দেবে
//     clearTimeout(clickTimer);

//     button.innerHTML = "close!";
// });

//onmouse over change text
// let buttonText = document.querySelector('#button');
// buttonText.onclick = function () {    
//     buttonText.innerHTML="Hi Mehedi";
// } 


// function butonTxt() {
//     document.getElementById('button').innerHTML="HI Hasan";
// }


//add event listener
// document.getElementById('button').addEventListener("mouseover" , 
//     function(){
//         alert("hi..................");
//     }
// );

//addEventlistener with function parameter

let p = 7;
let q = 7;

document.getElementById("button").addEventListener("click", function() {
  myFunction(p, q);
});

function myFunction(a, b) {
  document.getElementById("button").innerHTML = a * b;
}