//random number genarate 1 to 6
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min +1)+min);
}
console.log(randomNum(1, 6));