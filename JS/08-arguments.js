// Псевдомассив - коллекция, со свойством length и возможностью обратиться к элементу по индексу, 
// но отсутствием большинства методов для работы с массивом.

// const fn = function (){
//     // console.log(arguments);
//     const args = Array.from(arguments);  // создание массива из псевдомассива
//     console.log(args);

//     for (const argument of arguments){
//         // console.log(argument);
//     }
// }

// fn(1,2,3,4,5,6,7);



// const fn = function (...args){ // ...args создание настоящего массива (современный синтаксис) 
//                                // и ставитсья в конце
    
//     console.log(args);

// }
// fn(1,2,3,4,5,6,7)


// const fn = function (a,b,c, ...args){ // ...args создание настоящего массива (современный синтаксис) 
//     // и ставитсья в конце

//     // console.log(`${a} ${b} ${c}`);
//     console.log(`${a} ${b} ${c}`, args);

// };

// fn(`Hello`,1,2,3,4,5,6,7)
// fn(`Good bay`,1,2,3,4,5,6,7)
// fn(`Ok`,1,2,3,4,5,6,7)


// const add = function(...args) {
//     // console.log(a,b,c,d,e,f)
//     // console.log(args) 

//     let total = 0;

//     for (const arg of args){
//         total += arg;
//     }

//     return total;
// }

// console.log(add(1,2,3,4,5));
// console.log(add(1,2,3,4,5,6,7,8,9,10));


// const filterNumber = function (array, ...args) {
//     // console.log(`array:`, array);
//     // console.log(`args:`, args);

//     const  uniqueElement = [];

//     for (const element of array){
//         // console.log(element);

//         if(args.includes(element)){
//             uniqueElement.push(element);
//             // return element;
//         }
//     }
//         return uniqueElement;
// }

// console.log(filterNumber([1,2,3,4,5],10,15,2,3,8));
// console.log(filterNumber([10,15,25,30],23,30,18,15));
// console.log(filterNumber([100,200,300,400,500],7,12,200,64));




