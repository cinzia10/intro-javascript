// //condizionali

// const StringNumber = prompt('inserisci un numero');

// const number = parseFloat(StringNumber);

// const isEven = number % 2 === 0;

// const isOdd = number % 2 === 1;

// // if (isEven) {
// //     console.log('il numero è pari');
// // } else {
// //     console.log('il numero è dispari')
// // }


// if (isEven) {
//     console.log('il numero è pari')
// } else if (isOdd) {
//     console.log('il numero è dispari')
// } else {
//     console.log('il numero non è né pari né dispari')
// }



//progetto calcolatrice


// const operation = prompt("Inserire l'operazione che si vuole eseguire", "puoi inserire: '+', '-', 'x' o ':'");

// const isSum = operation === '+';

// const isSub = operation === '-';

// const isMult = operation === 'x';

// const isDiv = operation === ':';

// const firstNumberString = prompt("Inserire il primo numero");

// const firstNumber = parseFloat(firstNumberString);

// const secondNumberString = prompt("Inserire il secondo numero");

// const secondNumber = parseFloat(secondNumberString);

// if (isSum) {
//     const result = firstNumber + secondNumber;
//     console.log("Risultato: "+ result)
// } else if (isSub) {
//     const result = firstNumber - secondNumber;
//     console.log("Risultato: "+ result)
// } else if (isMult) {
//     const result = firstNumber * secondNumber;
//     console.log("Risultato: "+ result)
// } else if (isDiv) {
//     const result = firstNumber / secondNumber;
//     console.log("Risultato: "+ result)
// } else {
//     console.log("Operazione non ammessa")
// }


// another project

const numero = 12;

const isDivisibilePerDue = numero % 2 === 0;

const isDivisibilePerTre = numero % 3 === 0;

const isDivisibilePerQuattro = numero % 4 === 0;

// if (isDivisibilePerDue) {
//     console.log('il numero è divisibile per due')
// } else if (isDivisibilePerTre) {
//     console.log('il numero è divisibile per tre')
// } else if (isDivisibilePerQuattro) {
//     console.log('il numero è divisibile per quattro')
// } else {
//     console.log('il numero non è divisibile per nessuno dei divisori')
// }


// if (isDivisibilePerDue) {
//     console.log('il numero è divisibile per due')
// }
// if (isDivisibilePerTre) {
//     console.log('il numero è divisibile per tre')
// }
// if (isDivisibilePerQuattro) {
//     console.log('il numero è divisibile per quattro')
// }

// if (isDivisibilePerDue || isDivisibilePerTre || isDivisibilePerQuattro) {
//     if (isDivisibilePerDue) {
//         console.log('il numero è divisibile per due')
//     }
//     if (isDivisibilePerTre) {
//         console.log('il numero è divisibile per tre')
//     }
//     if (isDivisibilePerQuattro) {
//         console.log('il numero è divisibile per quattro')
//     }
// } else {
//     console.log('il numero non è divisibile per nessuno dei divisori')
// }


//chiedo all'utente di inserire un numero
//se il numero è divisibile per 3, scrivo in console FIZZ
//se il numero è divisibile per 5, scrivo in console BUZZ
//se il numero è divisibile per entrambi, scrivo in console FIZZBUZZ

