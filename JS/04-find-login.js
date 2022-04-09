const logins = [`m4ngoDodg`, `k1widab3st`,`aj4xth3m4n`, `poly1scute`, ];
// const loginTofind = `poly1scute`;


// const message = logins.includes(loginTofind)
// ?  `Пользователь ${loginTofind} найден `
// :  `Пользователь ${loginTofind} не найден `;

// console.log(message);

// const findLogin = function (allLogins, loginTofind){
//     //  console.log(allLogins);
//     //  console.log(loginTofind);
//     //  let message = `Пользователь ${loginTofind} не найден `;

//      for (const login of allLogins){
//             if (login === loginTofind){
//                 return `Пользователь ${loginTofind} найден `; // return для выхода из функции
//             }
//      }
//      return `Пользователь ${loginTofind} не найден `;
// }


const findLogin = function (allLogins, loginTofind){
    return allLogins.includes(loginTofind)            // includes - это матод массива
    ? `Пользователь ${loginTofind}  найден `
    : `Пользователь ${loginTofind} не найден `;
}

console.log(findLogin(logins, `avocodr2da`));
console.log(findLogin(logins, `k1widab3st`));
console.log(findLogin(logins, `jam4al`));
console.log(findLogin(logins, `poly1scute`));