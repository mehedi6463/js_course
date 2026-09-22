//regular expresion...
//search() methood disply index
/*
let text = "Visit W3Schools. W3Schools is a learning website!"; 
let n = text.search(/w3Schools/ig);
document.getElementById("demo").innerHTML = n;
console.log(n);
*/

//match () method
// let text = "Visit W3Schools! w3Schools is good for lerner."; 
// const myArr = text.match(/W3Schools/ig);
// document.getElementById("demo").innerHTML = myArr;

//replace() method
// let text = "Visit W3Schools! w3Schools is good for lerner.";
// const tex = text.replace(/W3Schools/ig, "Microsoft");

// document.getElementById("demo").innerHTML = tex;
// console.log(tex);

//object key / value method
// let person ={
//     name: "mehedi",
//     age: 30,
//     email:"mehedi@gmail.com"
// }
// let keys =Object.keys(person);
// console.log(keys);

// let values =Object.values(person);
// console.log(values);

// let entries =Object.entries(person);
// console.log(entries);

//speard oparator
var person1 ={
    name: "mehedi",
    age: 30,
    email:"mehedi@gmail.com"
}
var person2 ={
    name: "hasan",
    age: 31,
    email:"hasan@gmail.com"
}

console.log({
    ...person1, ...person2,
});