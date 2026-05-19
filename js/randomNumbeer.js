//লুডুর কড়ি
function myLudu(min, max) {
  return Math.floor(Math.random()*(max - min +1))+min;
}



//Name sorted by alphabetic
/*
const classStd=["Abdur","Rahim","Mehdi","Hasan","Baten",];
console.log(classStd);
console.log(classStd.toSorted());
document.getElementById('demo').innerHTML=classStd.toSorted();
*/

//Number sorted
/*
const rolNumber=['13','10','9','11','4','8','5','7','3','1','6','12','2',];
console.log(rolNumber);
console.log(rolNumber.sort(function (a, b) {
    return a-b;    
}));
console.log(rolNumber.sort(function (a, b) {
    return b-a;    
}));
*/
//is this leap year
/*
function isLeapYear(year) {
    if ((year % 400===0) || (year % 4===0 && year % 100 !== 0)){
        console.log(`${year} is Leap Year`);
    }
    else console.log(`${year} is not Leap Year`);
}
isLeapYear(2028);
*/
//finds word in string or
/*
const vowels=['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];

function countVowel(sentence) {
    let count = 0;
    const letters =Array.from(sentence);

    letters.forEach(
        function (value) {
            if (vowels.includes(value)) {
                count++;
            }});
    return "Total counted vowel " + count;
}
console.log(countVowel("I Love Bangladesh and im Proud of my country"));
*/



