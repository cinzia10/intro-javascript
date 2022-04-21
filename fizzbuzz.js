//chiedo all'utente di inserire un numero
//se il numero è Divisibile per 3, scrivo in console FIZZ
//se il numero è Divisibile per 5, scrivo in console BUZZ
//se il numero è Divisibile per entrambi, scrivo in console FIZZBUZZ


const numeroStringa = prompt('Inserire un numero')

const numero= parseFloat(numeroStringa)

const isDiv3 = numero % 3 === 0;

const isDiv5 = numero % 5 === 0;


//primo esempio
// if (isDiv3 && isDiv5) {
//     console.log('FIZZBUZZ')
// }else if (isDiv3 || isDiv5) {
//     if (isDiv3) {
//         console.log('FIZZ')  
//     }
//     if (isDiv5) {
//         console.log('BUZZ')
//     }
// } 


//secondo esempio
// const isDiv3and5 = numero % 15 === 0;

// if (isDiv3and5) {
//     console.log('FIZZBUZZ')
    
// } else  if (isDiv3) {
//     console.log('FIZZ')
// } else if (isDiv5) {
//     console.log('BUZZ')
// }


//primo esempio fatto in classe
// if (isDiv3 && isDiv5) {
//     console.log('FIZZBUZZ');
// } else if (isDiv3) {
//     console.log('FIZZ');
// } else if (isDiv5) {
//     console.log('BUZZ');
// }


//secondo esempio fatto in classe
// if (numero % 3 === 0 && numero % 5 === 0) {
//     console.log('FIZZBUZZ');
// } else if (numero % 3 === 0) {
//     console.log('FIZZ');
// } else if (numero % 5 === 0) {
//     console.log('BUZZ');
// }

//terzo esempio fatto in classe
let result = '';

if (isDiv3) {
    result = result + 'FIZZ'
};

if (isDiv5) {
    result = result + 'BUZZ'
};

console.log(result);