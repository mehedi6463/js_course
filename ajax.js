// const getButton = document.getElementById("get");
// const sendButton = document.getElementById("send");
// getButton.addEventListener("click", getData);
// getButton.addEventListener("click", sendData);


// function sendRequest(methood, url, data) {
//     const promise =new Promise((resolve, reject)=>{
//     const xhr = new XMLHttpRequest();

//     xhr.onload = function () {
        // for single way
        // console.log(this.response.id);
        // console.log(JSON.parse(this.responseText).id);
        // const valu = JSON.parse(this.responseText);
        // const valu = this.response.id;
        // const valu2 = this.response.title;
        // document.getElementById("demo").innerHTML=`${valu}. ${valu2}`;
        
        //dynamic way        
        //error handle condition
//         if(this.status >= 400){
//             reject (`There was an error, check status ${this.status} text is ${this.statusText}`);
//         }else{
//         resolve(this.response);
//         }
//     };
//     xhr.onerror = function () {
//         reject("Error Detect");
//     };

//     xhr.open(methood, url);
//     xhr.responseType = "json";
//     xhr.send(data);
//     });
//     return promise;  
// }

// function getData() {
//     // const xhr = new XMLHttpRequest();

//     // xhr.onload = function () {
//     //     // console.log(this.response.id);
//     //     // console.log(JSON.parse(this.responseText).id);
//     //     // const valu = JSON.parse(this.responseText);
//     //     const valu = this.response.id;
//     //     const valu2 = this.response.title;
//     //     document.getElementById("demo").innerHTML=`${valu}. ${valu2}`;
        
//     // }
//     // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

//     // xhr.responseType = "json";
//     // xhr.send();
//     sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
//     .then((responsData)=>{
//       console.log(responsData);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

// function sendData() {
//     sendRequest(
//         "POST",
//         "https://jsonplaceholder.typicode.com/pots",
//         JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1, 
//     })
//     ).then((responsData)=>{
//       console.log(responsData);

//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    
// }

//tagged templete literals *its a function ,its take two parameter string & value*
//modifire function
// function modifire(strings, ...values) {
//     const mod = strings.reduce((prev, crnt)=>{
//         return prev + crnt + (values.length ? "Mr." + values.shift() : '');
//     }, '');
//     return mod;
// }

// let p1 = "Mehedi";
// let p2 = "Hasan";

// console.log(modifire`Player name ${p1} and ${p2} from pabna`);

//set() with iterable *without object*
let a =[1,3,5,4,6,7];
let b =[1,2,4,7,8];

// let uniqe = new Set([...a, ...b]);
// console.log(uniqe);

// let common = new Set([...a].filter(x => b.includes(x)));
// console.log(common);

// let uncommon = new Set([...a].filter(x => !b.includes(x)));
// console.log(uncommon);


//weakSet() is only for object without itarable
const ws = new WeakSet();

class MyClass {
    constructor() {
        ws.add(this);
        
    }
    /** show name  */
    name() {
        if (!ws.has(this)) {
            throw new Error("Access Denai");
            
        }else{
            return "This is Method from a Class";
        }
    }
}
const mc = new MyClass();
console.log(mc.name());

// console.log(MyClass.prototype.name());




