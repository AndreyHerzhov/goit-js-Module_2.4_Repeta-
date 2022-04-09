
// Парамертры - перечисление данных которые функция ожидает при вызове. 
// Аргументы - значения для объявленных параметров функции.

// const add = function (x,y) {
//     console.log(x,y)
   
//     const result = x +y;
//     // console.log(`result:`,result)
//     // console.log(`Hallo`)

//     return result;
// }

// const r1 = add(2,3); // Аргументы
// console.log(`r1-`,r1)

// add(33,21); // Аргументы
// add(32,11); // Аргументы
 



// ------------- No return -------- //

// const fn = function () {
//     console.log(1); // 1
//     console.log(2); // 2
//     console.log(3); // 3
//                     // undefined
// }                    

// console.log(fn());  


// ------------- With return -------- //

// const fn = function () {
//     console.log(1);  // 1
//     console.log(2); // 2
//     console.log(3); // 3
//     return `5`;     // 5
// }                    

// console.log(fn());  


// ------------- return stops everithing below -------- //


// const fn = function () {
//     return `That is it`; // `That is it` 
//     console.log(1);  
//     console.log(2); 
//     console.log(3); 
//     return `5`;     
// }                    

// console.log(fn());  



// ------------- 2x-return   -------- //


// const fn = function (value) {
//     if (value > 10){
//         return `Больше 10`;
//     } else {
//         return `Меньшне 10`;
//     }
       
// }                    

// console.log(fn(5));  
// console.log(fn(1000)); 



// ---------- стек вызовов --------- //

const fnA = function() {
    console.log(`Выполняеться функция А`)

    fnB();
};

const fnB = function() {
    console.log(`Выполняеться функция B`)
   

    fnC();
};

const fnC = function() {
    console.log(`Выполняеться функция C`);
    console.log(value)
};

// stake trace 
// 01-basics.js:96 Uncaught ReferenceError: value is not defined
// at fnC (01-basics.js:96:17)
// at fnB (01-basics.js:91:5)
// at fnA (01-basics.js:84:5)
// at 01-basics.js:100:1

// console.log(`Перед вызовом функции fnA`)
fnA();
// console.log(`После вызова функции fnA`)

// fnB();


// fnC();