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


const operation = prompt("Inserire l'operazione che si vuole eseguire", "puoi inserire: '+', '-', 'x' o ':'");

const isSum = operation === '+';

const isSub = operation === '-';

const isMult = operation === 'x';

const isDiv = operation === ':';

const firstNumberString = prompt("Inserire il primo numero");

const firstNumber = parseFloat(firstNumberString);

const secondNumberString = prompt("Inserire il secondo numero");

const secondNumber = parseFloat(secondNumberString);

if (isSum) {
    const result = firstNumber + secondNumber;
    console.log("Risultato: "+ result)
} else if (isSub) {
    const result = firstNumber - secondNumber;
    console.log("Risultato: "+ result)
} else if (isMult) {
    const result = firstNumber * secondNumber;
    console.log("Risultato: "+ result)
} else if (isDiv) {
    const result = firstNumber / secondNumber;
    console.log("Risultato: "+ result)
} else {
    console.log("Operazione non ammessa")
}