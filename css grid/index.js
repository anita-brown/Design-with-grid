// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;
// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense)console.log('i win')

// function logger() {
//     console.log('me')
// }
// logger()
// logger()
// logger()
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }
// const juicer= fruitProcessor(5, 0);
// console.log(juicer);
// const num = Number('270');
// console.log(num)\

function calcAge1(birthyear){
    const age = 2021- birthyear;
    return age;
}
const age1= calcAge1(1997);
console.log(age1);  



const calcAge2 = function(birthyear){
    return 2021 - birthyear
}

const age2 = calcAge2(1990)
console.log(age1, age2)
