// // ১. একটি ক্লাসের নকশা তৈরি করা (Blueprint)
// class Car {
//   // কনস্ট্রাক্টর দিয়ে অবজেক্টের বৈশিষ্ট্য (Properties) ঠিক করা হয়
//   constructor(brand, model) {
//     this.carBrand = brand;
//     this.carModel = model;
//   }

//   // এটি একটি মেথড (Method) বা ক্লাসের নিজস্ব ফাংশন
//   showDetails() {
//     console.log("এটি একটি " + this.carBrand + " কোম্পানির " + this.carModel + " মডেলের গাড়ি।");
//   }
// }

// // ২. এই নকশা (Class) ব্যবহার করে বাস্তব অবজেক্ট তৈরি করা
// let car1 = new Car("Toyota", "Corolla");
// let car2 = new Car("BMW", "X5");

// // ৩. অবজেক্টের মেথড কল করা
// car1.showDetails(); // আউটপুট: এটি একটি Toyota কোম্পানির Corolla মডেলের গাড়ি।
// car2.showDetails(); // আউটপুট: এটি একটি BMW কোম্পানির X5 মডেলের গাড়ি।

class car {
    constructor(name, color, year) {
        this.name = name;
        this.year = year;
        this.color = color;
        
    }
    run(speed){
        console.log(this.name + " color is " + this.color + " and speed is " + speed);
    }
}
let BMW = new car('BMW', 'Red', 1999);
let Audi = new car('Audi', 'blue', 1990);

BMW.run('100 per km');
Audi.run('110 per km');