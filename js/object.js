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
let text = "Visit W3Schools! w3Schools is good for lerner.";
const tex = text.replace(/W3Schools/ig, "Microsoft");

document.getElementById("demo").innerHTML = tex;
console.log(tex);
