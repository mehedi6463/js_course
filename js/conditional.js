//if else condition
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

//switch case

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
        break;
}