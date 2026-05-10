//if else condition...
// let age =3;

// if (age > 18) {
//     console.log("You are Adult");  
// }else if (age ==18 &&  ){
//     console.log("Adult age");
// }else if(age>18 && age<30)
// console.log("Matured age");
// else{
//     console.log("You are Child");
// }

//switch case using date object...
/*
let day;
let data= new Date().getDay();

switch (data) {
    case 0:
        day="Sunday";        
        break;
    case 1:
        day="Monday";        
        break;
    case 2:
        day="Tuesday";        
        break;
    case 3:
        day="Wednesday";        
        break;
    case 4:
        day="Thursday";        
        break;
    case 5:
        day="FriDay";        
        break;
    case 6:
        day="Saturday";        
        break;

    default:
        day="Not Found";
        break;
}
document.getElementById("demo").innerHTML="Today is " + day;
console.log(day);
        day="NOT FOUND";
        break;
}
document.getElementById("demo").innerHTML="Day is " + day;
*/

//for loop in array with alphabetically sorted...
let cars=['BMW', "Rolls-Royce", "Lamborghini", "Corolla", "Saab", "Volvo", "Ford"];

for (let i = 0; i < cars.length; i++) {
    let carSorted =cars.toSorted();
    console.log(carSorted[i]);
    
}
console.log("its done...");
