// const numbers = [51,18,13,24,7,85,19];
// let smallestNumber = numbers[0];

// for (const number of numbers){
//     if(number < smallestNumber){
//         smallestNumber = number;
//     }
// }
// console.log(`smallestNumber`, smallestNumber);


const findSmallestNumber = function (numbers){ // numbers - это параметр
    let smallestNumber = numbers[0]; // предположили, что первое число самое маленькое

    for (const number of numbers){      // тело функции
        if(number < smallestNumber){
            smallestNumber = number;
        }
    }
    return smallestNumber; // это возврат во внешний код
}


console.log(findSmallestNumber([3,8,12,-2,15])); // это аргумент 
console.log(findSmallestNumber([100,54,8,12,47]));
console.log(findSmallestNumber([7,21,84,15,4]));