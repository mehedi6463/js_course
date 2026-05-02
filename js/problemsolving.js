//~prob-1//random number genarate 1 to 6
/*
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min +1)+min);
}
console.log(randomNum(1, 6));
*/

//~prob-2/student name sorted by alphabeticaly
/*
const studentsName=['Mehedi ',' Zibon ',' Hasan ',' Nadim ',' kamal ',' Abdullah '];
let studentSorted = studentsName.toSorted();

document.getElementById('nameSorted').innerHTML=studentSorted;
console.log(studentSorted.toSorted());
*/

//~prob-3/ sorted number accending & descending
/*
const myNumber =[11, 10, 2, 8, 5, 6, 15, 13];

let sortedNumber =myNumber.toSorted(function (a,b) {return  a-b});
console.log(sortedNumber);

let sortedNumber2 =myNumber.toSorted(function (a,b) {return  b-a});
console.log(sortedNumber2);
*/

//~prob-4/ is the year is leapyear
/*
function isLeapYear(year) {
    if((year % 400 === 0) || ((year % 4===0) && (year % 100 !==0))) {
        console.log(`${year} is leap year`);
    }
    else {
        console.log(`${year} is not leap year`);
    }
};
// document.getElementById.('leapyear').innHTML=isLeapYear;
isLeapYear(2027);
*/
//~prob-5 vowel finder
/*
const vowels = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];

function countsVowel(sentence) {
    let count =0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if (vowels.includes(value)) {
            count++;
            console.log(sentence);
        }
    });
    return count;
}
console.log(countsVowel("mehedi hasan"));
console.log(vowels);
*/


//~prob-6/ duplicate value filter
/*
const numbers =[1, 2, 2, 6, 9, 10, 1, 9, 4, 6, 5, 5];
const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index;
});
console.log(duplicates.toSorted(function(a,b){return a-b}));
console.log(duplicates.toSorted(function(a,b){return b-a}));
*/

