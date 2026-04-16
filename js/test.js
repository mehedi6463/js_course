function nameMy() {
    document.getElementById('teste').innerHTML='test update';
    
}
// function with parameter
function sleepTime(nam, time) {
    console.log(nam + " is sleeping from " + time);    
}
sleepTime("mahedi", "9pm");
sleepTime("hasan", "12am");

// function with return
function myName(x,y) {
    return x+y;
}
let z=myName(3,6);
console.log(z);

// function
function sayHello() {
  return "Hello World This is JS";
}

let greeting = sayHello();

document.getElementById("demo").innerHTML = greeting;


