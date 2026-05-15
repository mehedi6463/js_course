//Basic this keyword code...
/*const person ={
    fName:"Mehedi",
    lName:"Hasan",
    age: 32,
    banglaDeshi: true,
    fullName: function() {
        return this.fName + " " + this.lName;
        
    }
};
console.log(person.fullName());*/



// Create a person Object
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

// Create a person1 Object
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// Create a person2 Object
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// let name = person.fullName.call(person2); 
// document.getElementById("demo").innerHTML = name;

//js class...
// class Car {
//     constructor(n, y, c) {
//         this.name = n;
//         this.year =y;
//         this.color =c;
//     }
// }
// const myCar1 =new Car("Audi", 2010, "red");
// const myCar2 =new Car("BMW", 2011, "black");

// console.log(myCar1.name +" - "+ myCar1.color +" - "+myCar1.year);
// console.log(myCar2.name +" - "+ myCar1.color +" - "+myCar1.year);
