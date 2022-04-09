

const logItems = function (items){
    for (const item of items){
        console.table(item);
    }
}

// получила массив и залогировала ее в консоль. Не все функции что-то возвращают во внешний код.

logItems([`Mango`, `Kiwi`, `Poly`, `Ajax`]);
logItems([1,2,3,4,5]);
logItems([`клавиатура`,`наушники`,`часы`]);