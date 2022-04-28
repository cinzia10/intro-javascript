const testArray4 = [2, 4, 7, -9, 1000, 45, 2, 12, 333, -1000, 123, 34]; 

const testArray5 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu']; 

const testArray6 = [true, 'pippo', 204, 'verde', 3000, 100, false];




/// ESERCIZIO 1
///filtrare testArray4 in modo che rimangano solo numeri positivi
/// RISULTATO: [ 2, 4, 7, 1000, 45, 2, 12, 333, 123, 34 ]

// // SOLUZIONE 1
// function filteringPositives(array) {
    
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 
//         const isPositive = element > 0; 
//         if (isPositive) {
//             newArray.push(element); 
//         }
//     } 
//     return newArray;
// } 
// console.log(filteringPositives(testArray4));

// // SOLUZIONE 2
// function onlyPositive (number){
//     if (number > 0){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(testArray4.filter(onlyPositive))

// // SOLUZIONE 3
// console.log(testArray4.filter((number)=>number>0));






/// ESERCIZIO 2
/// filtrare testArray4 in modo che rimangano solo numeri divisibili per 3
/// RISULTATO: [ -9, 45, 12, 333, 123 ]

// // SOLUZIONE 1
// function onlyDivisibleFor3(array) {
    
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 
//         const isDivisibilePer3 = element % 3 === 0; 
//         if (isDivisibilePer3) {
//             newArray.push(element); 

//         }
//     } 
//     return newArray;
// } 
// console.log(onlyDivisibleFor3(testArray4));

// // SOLUZIONE 2
// function onlyDivisibleFor3 (number){
//     if (number%3===0){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(testArray4.filter(onlyDivisibleFor3));

// // SOLUZIONE 3
// console.log(testArray4.filter((number)=>number%3===0));






/// ESERCIZIO 3
// /// filtrare testArray4 in modo che rimangano solo numeri divisibili per 3 e 4
/// RISULTATO: [ 4, -9, 1000, 45, 12, 333, -1000, 123 ]

// // SOLUZIONE 1
// function onlyDivsibleFor3And4(array) {
    
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 
//         const isDivisibilePer3 = element % 3 === 0;
//         const isDivisibilePer4 = element % 4 === 0;
//         if (isDivisibilePer3) {
//             newArray.push(element); 
//         } else if (isDivisibilePer4) {
//             newArray.push(element)
//         }
//     } 
//     return newArray;
// } 
// console.log(onlyDivsibleFor3And4(testArray4));

// // SOLUZIONE 2
// function onlyDivsibleFor3And4 (number) {
//     if (number%3===0 || number%4===0){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(testArray4.filter(onlyDivsibleFor3And4));

// // SOLUZIONE 3
// console.log(testArray4.filter((number)=>(number%3===0)||(number%4===0));






/// ESERCIZIO 4
/// filtrare testArray5 in modo che rimangano solo le stringhe più corte di 6 lettere
/// RISULTATO: [ "rosso", "verde", "blu" ]

// // SOLUZIONE 1
// function onlyStringMoreSixLetter(array) {
    
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 
//         const shorterThan6 = element.length > 6; 
//         if (shorterThan6) {
//             newArray.push(element); 

//         }
//     } 
//     return newArray;
// } 
// console.log(onlyStringMoreSixLetter(testArray5));

// // SOLUZIONE 2
// function onlyStringMoreSixLetter (string) {
//     if (string.length > 6){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(testArray5.filter(onlyStringMoreSixLetter));

// // SOLUZIONE 3
// console.log(testArray5.filter((stringa) => stringa.length > 6));






/// ESERCIZIO 5
/// filtrare testArray5 in modo che rimangano solo le stringhe che contengono la lettera 'n'
/// RISULTATO: [ "arancione", "magenta" ]

// // SOLUZIONE 1
// function onlyStringWithLetterN(array) {
    
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 
//         const containsN = element.includes ("n"); 
//         if (containsN) {
//             newArray.push(element); 

//         }
//     } 
//     return newArray;
// } 
// console.log(onlyStringWithLetterN(testArray5));

// // SOLUZIONE 2
// function onlyStringWithLetterN(string) {
//     if (string.includes('n')) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(testArray5.filter(onlyStringWithLetterN));

// // SOLUZIONE 3
// console.log(testArray5.filter((stringa) => stringa.includes ("n")));






/// ESERCIZIO 6
/// filtrare testArray6 in modo che rimangano solo i numeri
/// RISULTATO: [ 204, 3000, 100 ]

// // SOLUZIONE 1
// function onlyNumbers(array) {
    
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 
//         const elementTypeNumber = typeof element === 'number'; 
//         if (elementTypeNumber) {
//             newArray.push(element); 

//         }
//     } 
//     return newArray;
// } 
// console.log(onlyNumbers(testArray6));

// // SOLUZIONE 2
// function onlyNumber (element){
//     if (typeof element === 'number') {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(testArray6.filter(onlyNumber))

// // SOLUZIONE 3
// console.log(testArray6.filter((element) => typeof element === 'number'));






/// ESERCIZIO 7
/// mappare testArray4 dividendo tutti i numeri per 3
/// RISULTATO: [ 0.6666666666666666, 1.3333333333333333, 2.3333333333333335, -3, 333.3333333333333, 15, 0.6666666666666666, 4, 111, -333.3333333333333, 41, 11.333333333333334, 12 ]

// // SOLUZIONE 1
// function divideBy3(array) {
    
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 
//         const elementPer3 = element/3; 
//         newArray.push(elementPer3); 

//         }
//     return newArray;
// } 
// console.log(divideByr3(testArray4));

// // SOLUZIONE 2
// function divideBy3 (number){
//     return number/3;
// }

// console.log(testArray4.map(divideBy3));

// // SOLUZIONE 3
// console.log(testArray4.map((number) => number / 3));






/// ESERCIZIO 8
/// mappare testArray4 facendo la radice quadrata di tutti i numeri /// RISULTATO: [ 1.4142135623730951, 2, 2.6457513110645907, NaN, 31.622776601683793, 6.708203932499369, 1.4142135623730951, 3.4641016151377544, 18.24828759089466, NaN, 11.090536506409418, 12 ]

// // SOLUZIONE 1
// function squareNumber(array) {
    
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 
//         const elementSquare = Math.sqrt(element); 
//         newArray.push(elementSquare); 

//         }
//     return newArray;
// } 
// console.log(squareNumber(testArray4));

// // SOLUZIONE 2
// function squareNumber (number) {
//     return Math.sqrt(number);
// }

// console.log(testArray4.map(squareNumber));

// // SOLUZIONE 3
// console.log(testArray4.map((number) => Math.sqrt(number)));






/// ESERCIZIO 9
/// mappare testArray4 sommando 1 solo ai numeri dispari /// RISULTATO: [ 2, 4, 8, -8, 1000, 46, 2, 12, 334, -1000, 124, 34, 12 ]

// // SOLUZIONE 1
// function plusOneOnlyOdd(array) {
    
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 
//         if (element % 2 !== 0) {
//             const oddPlus1 = element + 1; 
//             newArray.push(oddPlus1); 
//         } else { 
//          newArray.push(element);
//         }

//         }
//     return newArray;
// } 
// console.log(plusOneOnlyOdd(testArray4));

// // SOLUZIONE 2
// function plusOneOnlyOdd (number){
//     if (number%2!==0){
//         return number+1
//     } else {
//         return number
//     }
// }

// console.log(testArray4.map(plusOneOnlyOdd));

// SOLUZIONE 3
// console.log(testArray4.map((number)=> number%2===0?number:number+1))



/// ESERCIZIO 10
/// mappare testArray5 rendendo maiuscole la prima e l'ultima lettera di ogni parola /// RISULTATO: [ "RossO", "VerdE", "GiallO", "ArancionE", "MagentA", "BlU" ]

// // SOLUZIONE 1
// function firstAndLastLetterUpperCase (array) {
//     const newArray =[];
//     for (const string of array) {
//         const firstLetterUpperCase = string[0];
//         const lastLetterUpperCase = string[string.length -1];
//         const newString = firstLetterUpperCase.toUpperCase() + string.substring(1, string.length -1) + lastLetterUpperCase.toUpperCase();
//         newArray.push(newString);
//     }
//     return newArray
// }

// console.log(firstAndLastLetterUpperCase(testArray5));

// // SOLUZIONE 2
// function firstAndLastLetterUpperCase (string) {
//     return string[0].toUpperCase() + string.substring(1, string.length -1) + string[string.length -1].toUpperCase()
// }

// console.log(testArray5.map(firstAndLastLetterUpperCase));

// // SOLUZIONE 3
// console.log(testArray5.map((string)=> string[0].toUpperCase()+string.substring(1, string.length -1)+string.[string.length -1].toUpperCase()))





/// ESERCIZIO 11
/// mappare testArray5 aggiungendo in fondo ad ogni stringa la lunghezza della stessa /// RISULTATO: [ "rosso5", "verde5", "giallo6", "arancione9", "magenta7", "blu3" ]

// // SOLUZIONE 1
// function stringLength (array) {
//     const newArray = [];
//     for (const string of array) {
//         const lengthString = string.length;
//         const stringPlusLength = string + lengthString
//         newArray.push(stringPlusLength);
//     }
//     return newArray
// }

// console.log(stringLength(testArray5));

// // SOLUZIONE 2
// function stringLength (string){
//     return string + string.length
// }

// console.log(testArray5.map(stringLength))

// // SOLUZIONE 3
// console.log(testArray5.map((string)=>string+string.length))








