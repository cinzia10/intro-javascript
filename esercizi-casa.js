//scrivere un ciclo for che scriva a console i numeri da 10 a 50

// for (let i = 10; i <= 50; i++) {
//     console.log('Il valore di i: ' + i)
// }


//scrivere un ciclo for che scriva a console i numeri pari da 8 a 128

// for (let i = 8; i < 130; i++) {
//     if (i % 2 ===0) {
//         console.log('Il valore di i: ' + i);
//     }
// }


//scrivere un ciclo for che scriva a console i numeri da 100 a 0

// for (let i = 100; i >= 0; i--) {
//     console.log(i) 
// }


//scrivere un ciclo for che sommi i numeri da 0 a 100

// let result = 0;

// for (let i = 0; i < 101; i++) {
//     result = result + i;
//     console.log(result)
// }


//ripetere gli stessi esercizi con il ciclo while e do...while

// ESERCIZIO 1

// let number = 10;

// while (number < 51) {
//     console.log(number);
//     number = number + 1;
// }


// do {
//     console.log(number);
//     number = number + 1;
// } while (number < 51);



// ESERICIZIO 2

// let numero = 8;

// while (numero < 130) {
//     if (numero % 2 === 0) {
//         console.log(numero)
//     }
//     numero = numero + 1;
// }


// do {
//     if (numero % 2 === 0) {
//         console.log(numero)
//     }
//     numero = numero + 1;
// } while (numero < 130);



// ESERCIZIO 3

// let numero = 100;

// while (numero >= 0) {
//     console.log(numero);
//     numero = numero - 1;
// }


// do {
//     console.log(numero);
//     numero = numero - 1;
// } while (numero >= 0);



// ESERCIZIO 4

// let number = 0;
// let result = 0;

// while (number < 101) {
//     console.log(result, ' + ', number, '= ' , result);
//     number = number + 1;
//     result = result + number;
// }


// do {
//     console.log(result, ' + ', number,' = ', result);
//     number = number + 1;
//     result = result + number;
// } while (number <= 100);



//scivere un ciclo while che si interrompa quando l'utente scrive 'esci'
//nella finestra di dialogo


// let i = 0;
// const exit = 'esci';

// while (prompt('scrivi esci per uscire dal ciclo') !== exit) {
//     console.log('scrivi esci per uscire dal ciclo ' + i);
//     i++;
// }


// while (prompt('scrivi "esci" per uscire dal ciclo') !== 'esci') {}


// while (true) {
//     let exit = prompt('scrivi esci per uscire');
//     if (exit === 'esci') {
//         break
//     }
// }

