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



const vocaleScelta = prompt('Ciao, scegli una vocale!');

const isA = vocaleScelta === 'a';
const isE = vocaleScelta === 'e';
const isI = vocaleScelta === 'i';
const isO = vocaleScelta === 'o';
const isU = vocaleScelta === 'u';

// if (isA) {
//     console.log('A come Alce');
// } else if (isE) {
//     console.log('E come Elefante');
// } else if (isI) {
//     console.log('I come Istrice');
// } else if (isO) {
//     console.log('O come Orso');
// } else if (isU) {
//     console.log('U come Upupa');
// } else {
//     console.log('Non è una vocale');
// }

switch (vocaleScelta) {
    case 'a':
        console.log('A come Alce');
        break;
    case 'e':
        console.log('E come Elefante');
        break;
    case 'i':
        console.log('I come Istrice');
        break;
    case 'o':
        console.log('O come Orso');
        break;
    case 'u':
        console.log('U come Upupa');
        break;
    default:
        console.log('Non è una vocale');
        break;
}