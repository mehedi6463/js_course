// // // ১. একটি ক্লাসের নকশা তৈরি করা (Blueprint)
// // class Car {
// //   // কনস্ট্রাক্টর দিয়ে অবজেক্টের বৈশিষ্ট্য (Properties) ঠিক করা হয়
// //   constructor(brand, model) {
// //     this.carBrand = brand;
// //     this.carModel = model;
// //   }

// //   // এটি একটি মেথড (Method) বা ক্লাসের নিজস্ব ফাংশন
// //   showDetails() {
// //     console.log("এটি একটি " + this.carBrand + " কোম্পানির " + this.carModel + " মডেলের গাড়ি।");
// //   }
// // }

// // // ২. এই নকশা (Class) ব্যবহার করে বাস্তব অবজেক্ট তৈরি করা
// // let car1 = new Car("Toyota", "Corolla");
// // let car2 = new Car("BMW", "X5");

// // // ৩. অবজেক্টের মেথড কল করা
// // car1.showDetails(); // আউটপুট: এটি একটি Toyota কোম্পানির Corolla মডেলের গাড়ি।
// // car2.showDetails(); // আউটপুট: এটি একটি BMW কোম্পানির X5 মডেলের গাড়ি।

// // class car {
// //     constructor(name, color, year) {
// //         this.name = name;
// //         this.year = year;
// //         this.color = color;
        
// //     }
// //     run(speed){
// //         console.log(this.name + " color is " + this.color + " and speed is " + speed);
// //     }
// // }
// // let BMW = new car('BMW', 'Red', 1999);
// // let Audi = new car('Audi', 'blue', 1990);

// // BMW.run('100 per km');
// // Audi.run('110 per km');


// /* JavaScript Class Inheritance

// .
// .
// .
// .
// .
// */

// //js asyncronus with calback function
// // console.log("--- ঘড়ি চালু হচ্ছে ---");

// // // প্রতি ১ সেকেন্ড পর পর এই অ্যাসিনক্রোনাস কাজটা চলতে থাকবে
// // setInterval(() => {
// //     const time = new Date().toLocaleTimeString();
// //     console.log(`বর্তমান সময়: ${time}`);
// // }, 1000);

// // console.log("ঘড়ি ব্যাকগ্রাউন্ডে চলছে, তুমি এখন চাইলে নিচের অন্য কাজগুলো করতে পারো!");

// // ১. মেইন ফাংশন যা নাম নেবে এবং একটি কলব্যাক ফাংশন নেবে
// // function processUser(name, callback) {
// //     console.log("১. ইউজার প্রসেস করা হচ্ছে...");
// //     callback(name); // এখানে আমরা পাস করা ফাংশনটিকে রান করছি
// // }

// // // ২. আমাদের কলব্যাক ফাংশন (যা শুভেচ্ছা জানাবে)
// // function sayHello(userName) {
// //     console.log(`২. হ্যালো ${userName}! আপনাকে স্বাগতম।`);
// // }

// // // ৩. প্র্যাকটিস রান
// // processUser("Abir", sayHello);

// // ১. মেইন ফাংশন যা ব্যাকগ্রাউন্ডে কাজ করবে
// // function orderFood(foodItem, callback) {
// //     console.log(`১. ${foodItem} অর্ডার নেওয়া হয়েছে। রান্না শুরু হলো...`);

// //     // ধরি রান্না হতে ৩ সেকেন্ড লাগবে (Asynchronous Delay)
// //     setTimeout(() => {
// //         console.log(`২. রান্না শেষ!`);
// //         callback(foodItem); // কাজ শেষ, এবার বেল বাজানো (কলব্যাক রান) হলো
// //     }, 5000);
// // }

// // // ২. আমাদের কলব্যাক ফাংশন (যা ডেলিভারি করবে)
// // function deliverFood(item) {
// //     console.log(`৪. আপনার গরম গরম ${item} টেবিলে হাজির! এনজয় করুন।`);
// // }

// // // ৩. প্র্যাকটিস রান
// // orderFood("Burger", deliverFood);
// // console.log("৩. খাবার টেবিলে আসার আগেই আমি ফোনে ফেসবুক স্ক্রল করছি...");

// // Asynchronous Programming
// // setTimeout(myFunction, 2000)
// // function myFunction(){
// // document.getElementById("demo").innerHTML="hi this is the setimeout callback function";
// // }
// // console.log="hello";
// // //callback function pattern
// // function calculator(x,y, oparation){
// //     return oparation (x,y);

// // }
// // //add function
// // function add(x,y) {
// //     return x+y;
    
// // }
// // let result =calculator(4,9, add);
// // console.log=result;
// // document.getElementById("demo").innerHTML = "hi";

// //call back function pattern -payment, enrool ,certificate

// const paymentSuccess= true;
// const marks=70;

// function enroll(callback) {
//     console.log(`Course Enrollment is Processing...`);

//     setTimeout(
//         function () {
//             if (paymentSuccess) {
//                 callback();                
//             }else{
//                 console.log(`Payment Faild..!`);
//             }            
//         }, 2500);
// }

// function course(callback){
//     console.log(`Course on perogrerss`);
//     setTimeout(
//         function() {
//             if (marks >= 70) {
//                callback();
//             }else{
//                 console.log(`Youe not Eliable to get certificate.!`);
//             }     
//         }, 2000 );
// }

// function certificate() {
//     console.log (`Please wait to get your Certificate`);

//     setTimeout(function() {
//         console.log(`Congratulation ...!`);
//     }, 3000);
    
// }

// enroll(function(){
//     course(certificate);
// });

//Promise constructor with asyncronise 
// const payments = true;
// const marks = 90;

// function enroll(){
//     console.log('Course enrollment processing..');

//     const promise = new Promise(function(resolve, reject){
//        setTimeout(function(){
//          if (payments) {
//             resolve();
//         }else{
//             reject('Sorry, Pay for Access..!');
//         }
//        }, 2000);
//     });
//     return promise;
// }

// function progress() {
//     console.log('Enrollment Successfull, Course progress..!');

//     const promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (marks >= 80) {
//                 resolve();
//             }else{
//                 reject('You are not eligible for certificate..!')
//             }
            
//         }, 2500);
        
//     });
//     return promise;
    
// }

// function certificate() {
//     console.log('Preparign your certificate..!');

//     const promise = new Promise(function(resolve){
//         setTimeout(function() {
//             resolve('Claim Your Achivment..!');
//         }, 3000);

//     });
//     return promise;
    
// }

// enroll()
// .then(progress)
// .then(certificate)
// .then((value)=>{
//     console.log(value)
// })
// .catch((err)=>{
//     console.log(err);
// })

const payment = false;
const marks = 90;

function enrollStud(){
    console.log('Enroll is processing');
    
    const promise = new Promise(function(resolve, reject){
        setTimeout(function() {
                if(payment){
                    resolve();
                }else{
                    reject('Payment faild. Please Try Again.');
                }
        }, 1500);
    });
    return promise;
};
function progress(){
    console.log('Enroll Successful.! Course Progress..');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if (marks >= 70) {
                resolve ('');
            }else{
                reject('You are not elegible for certificate..! Try again..!');
            }
        }, 2000);

    });
    return promise;
};
function certificate(){
    console.log('Prepearing Your Certificate..!');

    const promise = new Promise(function(resolve){
        setTimeout(function(){
           resolve('Congratulation..! Claim Your Certificate..!');
        }, 2500);
    });
    return promise;
};


async function course(){
    try {
        await enrollStud();
        await progress();
        const mssg = await certificate();
        console.log(mssg);
    } catch (error) {
        console.log(error);   
    }
}

course();

// console.log('hi');
