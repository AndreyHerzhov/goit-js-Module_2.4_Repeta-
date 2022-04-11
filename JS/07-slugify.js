// const title = `Top 10 benefits of React framework`;

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(` `);
// const slug = words.join(`-`);

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug);
// console.log(slug1);

// const slugify = function (string){
//    return string.toLowerCase().split(' ').join('-');
// }



// console.log(slugify(`Top 10 benefits of React framework`));
// console.log(slugify(`Well, we'll put one slug back.`));
// console.log(slugify(`The FBI ERT, they removed a slug from the vehicle.`));


// function calculateTotal (number){
//    let total = 0;

//    for (let i = 0; i <= number; i += 1){
//       console.log(i)
//       total += i;
//    }
//    return total;
// }

// console.log(calculateTotal(2))
// console.log(calculateTotal(3))
// console.log(calculateTotal(7))


// function findLongestWord(string) {
//    // Change code below this line
//    const newString = string.split(' ');
//    // console.log(newString)
//    let longestWord = '';
//    // console.log(longestWord.length)
//    for (let i = 0; i < newString.length; i += 1){
//       if(longestWord.length < newString[i].length){
//          longestWord = newString[i];
         
//       }
      
//      }
   
//   return longestWord;

 
//    // Change code above this line
//  }
 
//  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
//  console.log(findLongestWord("Google do a roll"))
//  console.log(findLongestWord("May the force be with you"))


function filterArray(numbers, value) {
   // Change code below this line
   const newArray = [];
   for (let i = 0; i < numbers.length; i += 1){
      if (numbers[i] > value)
      newArray.push(numbers[i])
   }
    return newArray;

}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));