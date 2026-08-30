let myWind;

// select div id
// const width =document.getElementById('p1');
// const height =document.getElementById('p2');

// width.innerHTML = "inner window width is :" + window.innerWidth;
// height.innerHTML = "inner window height is :" + window.innerHeight;

// function openWind() {
//     myWind = window.open("https://jsoneditoronline.org");
    
// }

// function closeWind() {
//     myWind.close();
// }

//select for showing massage
// const clickFor =document.getElementById("p3");
// const clickProm =document.getElementById("p4");

// //popup alert box
// function windAlert() {
//     alert('Window Alert is working');
// }

// function windConfirm() {
//     let txt;
//     if (confirm("Press ok for confirm")) {
//         txt = "Done..!";
//     }else{
//         txt = "Cancled..!";
//     }
//     clickFor.innerHTML=txt;
    
// }

// function windPrompt() {
//     let person = prompt("enter your name:" , "Jhon");
//     let txt;

//     if (person === null || person === "") {
//         txt = "No input";
//     }else{
//         txt ="Hello Mr." + person + " welcome";
//     }
//     clickProm.innerHTML= txt ;
    
// }

//timing events
// const timeout =document.getElementById("p7")
// const intervel =document.getElementById("p7");
// const cookies =document.getElementById("p7");

// let timeoutText;
// let intervelText;

// function setTimier() {
//    timeoutText = setTimeout(() => {
//    timeout.innerHTML="5 seconds over.!";        
//  }, 5000);
// }

// function stopTimier() {
//   clearTimeout(timeoutText);
// }

// function startIntervel() {
//     intervelText = setInterval(function(){
//         intervel.innerHTML= new Date().toLocaleTimeString();        
//     }, 1000);
// }

// function stopIntervel() {
//    clearInterval(intervelText);
// }

// function showTime() {
// setInterval(showTime, 1000);
//   const date = new Date();
//   myDisplayer(date.toLocaleTimeString());
// }

// Function to display any text
// function myDisplayer(text) {
//   let demo = document.getElementById("p7"); 
//   demo.innerHTML = text;
// }

// cookies is store info from user browser

// ১. কুকি সেভ বা তৈরি করার ফাংশন
// function saveName() {
//     let user = document.getElementById("nameInput").value;
//     if (user === "") {
//         alert("দয়া করে একটি নাম লিখুন!");
//         return;
//     }
//     // 'username' নামে কুকি তৈরি (মেয়াদ ৭ দিন)
//     let d = new Date();
//     d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
//     document.cookie = "username=" + user + "; expires=" + d.toUTCString() + "; path=/";
    
//     document.getElementById("result").innerText = "কুকি সেভ হয়েছে!";
// }

// // ২. কুকি পড়ে দেখানোর ফাংশন
// function showName() {
//     let allCookies = document.cookie;
//     if (allCookies === "") {
//         document.getElementById("result").innerText = "কোনো কুকি পাওয়া যায়নি!";
//     } else {
//         document.getElementById("result").innerText = "জমাকৃত কুকি: " + allCookies;
//     }
// }

// // ৩. কুকি মুছে ফেলার ফাংশন
// function deleteName() {
//     // অতীত তারিখ সেট করে কুকি ডিলিট করা
//     document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     document.getElementById("result").innerText = "কুকি মুছে ফেলা হয়েছে!";
// }

// **form validation

// const inputValue =document.getElementById("id01");
// inputValue.style.width="110px" ;
// inputValue.style.border="solid red 2px" ;
    
// function validaTion() {
// const inputValue =document.getElementById("id01");

    //**default validation condition**
    // if (!inputValue.checkValidity()) {
    //     document.getElementById("result").innerHTML= inputValue.validationMessage;}
    //     else{
    //         document.getElementById("result").innerHTML= "Data Submited";
    //     }

    //Custion validation condition 
//     if (inputValue.validity.rangeOverflow) {
//         inputValue.setCustomValidity("Number Should below or equal 500");
        
//     }else if(inputValue.validity.rangeUnderflow){
//         inputValue.setCustomValidity("Number Should above or equal 100");

//     }else if(inputValue.validity.valueMissing){
//         inputValue.setCustomValidity("Enter the Number please..!");

//     }
    

//     if (!inputValue.checkValidity()) {
//         document.getElementById("result").innerHTML= inputValue.validationMessage;
//     }
    
// }

//worker object
// let w;

// function startWorker() {
//     if (typeof Worker !== "undefined") {
//         // worker available

//         // if w worker is not already defined
//         if (typeof w == "undefined") {
//             // create a new worker called 'w'
//             w = new Worker("worker.js");
//         }

//         // listening for worker events/messages
//         w.onmessage = function (event) {
//             document.getElementById("demo009").innerHTML = event.data;
//         };
//     } else {
//         alert("Your browser does not support web worker!");
//     }
// }

// function stopWorker() {
//     if (typeof Worker !== "undefined") {
//         w.terminate();
//         w = undefined;
//     } else {
//         alert("Your browser does not support web worker!");
//     }
// }

//fetch data
const display =document.getElementById('p9');

//fatching data to promising way in fatch api
// function fatchData() {
//     fetch("http://127.0.0.1:5500/data.txt")
//     .then((res)=> res.text())
//     .then((data)=>{
//         display.innerText =data;
//     });    
    
// }

//fatching data with asyc -await 
// async function fatchData() {
//     const result = await fetch("http://127.0.0.1:5500/data.txt");
//     const data = await result.text();

//     display.innerText= data;
    
// }


// Geoloaction API
function  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, showError);
        
    }else{
        display.innerHTML="Location not avilable";
    }    
}

function showPosition(position) {
   display.innerHTML="Latitude:" + position.coords.latitude + "<br> Longitude" + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            display.innerHTML='PERMISSION DENIED';
            break;
        case error.POSITION_UNAVAILABLE:
            display.innerHTML='POSITION UNAVAILABLE';
            break;
        case error.TIMEOUT:
            display.innerHTML='TIMEOUT';
            break;
        case error.UNKNOWN_ERROR:
            display.innerHTML='UNKNOWN ERROR';
            break;
    }
}

