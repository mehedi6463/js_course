//problem-2-find how many times use "this" word and which is the first time position?

const sentence ="This is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ut, nam lorem alias cum maiores velit aperiam repudiandae ipsa esse impedit soluta porro, magni cumque ratione debitis iusto do lorem dolorum necessitatibus atque? Tempora similique repudiandae aliquid reprehenderit cupiditate consequatur et, placeat tempore officia nam Lorem ipsa maiores nesciunt magnam voluptas distinctio.";

//find length with condition
/*
const matches = sentence.match(/lore1/gi);
const matchFind = matches ? matches.length :"not found"; 
console.log(matchFind);
*/


//find index/position of value
/*let position = sentence.search(/lorem/i)+1;
position = position >= 0 ? position : "not found";
console.log("Text position is" + " " + position);*/

//linearSearch -- search in array
/*
function linearSearch(arr, valu) {
    const arrayLength =arr.length;
    for (i = 0; i < arrayLength; i++) {
        if (arr[i] === valu) {
            return i+1;
        }        
    }
    return 'data not found';    
}
console.log(linearSearch(['a', 'b', 'c', 'd', 'o'], 'o')); 
*/




