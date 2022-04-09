// const cart = [54,28,105,70,92,17,120,12,25,90];
// let total = 0;

// for (const value of cart){
//     total += value;
// }

// console.log(`Total:`, total);

// const calculateTotalPrice = function (items) {
//     console.log(items);

// }


// calculateTotalPrice([1,2,3]);               // [1, 2, 3]
// console.log(calculateTotalPrice([1,2,3])); // [1, 2, 3]
//                                            // undefined - возвращает `undefined` если нет  `return`; 
// console.log(calculateTotalPrice([5,10,15,20]));
// console.log(calculateTotalPrice([100,200,300]));



// const calculateTotalPrice = function (items) {
//     console.log(items);
//     return 2;
// }

// calculateTotalPrice([1,2,3]);               // [1, 2, 3]
// console.log(calculateTotalPrice([1,2,3])); // [1, 2, 3]
//                                            // 2 - возвращает `2` если в  `return 2`; 
// console.log(calculateTotalPrice([5,10,15,20]));
// console.log(calculateTotalPrice([100,200,300]));



 
const calculateTotalPrice = function (items) {
    // console.log(items);

    let total = 0;

    for (const item of items){
        total += item;  // надо вернуть переменную total во внешний код.
    }

    return total;
   
}


const r1 = calculateTotalPrice([1,2,3]);
console.log(`Общая сумма покупок ${r1}`);                                  
console.log(calculateTotalPrice([5,10,15,20]));
console.log(calculateTotalPrice([100,200,300]));