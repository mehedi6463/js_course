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
const timeout =document.getElementById("p7")
const intervel =document.getElementById("p8")

let timeoutText;
let intervelText;

// function setTimier() {
//     timeoutText = setTimeout(() => {
//         timeout.innerHTML="5 seconds over.!";        
//     }, 5000);
// }

// function stopTimier() {
//    clearTimeout(timeoutText);
// }

function startIntervel() {
    intervelText = setIntervel(function(){
        intervel.innerHTML= new Date().toLocaleTimeString();        
    }, 1000);
}

function stopIntervel() {
   clearInterval(intervelText);
}
