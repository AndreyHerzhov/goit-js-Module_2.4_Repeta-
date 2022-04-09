// const string = `sqWeasWdasS`;

// 

// console.log(letters)

// 
    
//     invertedString += isEqual 
//     ? letter.toUpperCase
//     : letter.toLowerCase;
// }

// console.log(`invertedString:`, invertedString)



// 70 % кода - это имена переменных //


// --------- инверсия строки ---------- //

const changeCase = function (string){
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters){
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase 
         ? letter.toUpperCase()
         : letter.toLowerCase();
    }

    return invertedString;
};

console.log(changeCase(`qweWQE`));
console.log(changeCase(`qweASdaWQE`));
console.log(changeCase(`qwZczeWQE`));