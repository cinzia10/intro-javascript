// ESERCIZIO 1

// fare un ciclo FOR che parta da 0 e arrivi fino a 100
// ad ogni giro stampare il valore di i,
// stampare FIZZ se i è divisibile per 3, BUZZ se i è divisibile per 5
// e FIZZBUZZ se è divisibile sia per 3 che per 5

// for (let i = 0; i <= 100; i++) {
//     console.log(i)
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i +' FIZZBUZZ')
//     } else if (i % 3 === 0) {
//         console.log(i +' FIZZ')
//     } else if (i % 5 === 0) {
//         console.log(i + ' BUZZ')
//     }
// }




// ESERCIZIO 2

//creare un programma che stampi a console questa consigurazione:
// # # # # 
//  # # # # 
// # # # # 
//  # # # # 
// # # # # 
//  # # # # 
// # # # # 
//  # # # # 

// console.log('# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n')

// const stringaRigaDispari = '# # # # '
// const stringaRigaPari = ' # # # #'

// for (let riga = 1; riga < 9; riga++) {
//     if (riga % 2 !== 0) {
//         console.log(stringaRigaDispari)
//     } else {
//         console.log(stringaRigaPari)
//     }
// }

// for (let r = 0; r < 8; r++) {
//     let rowString = '';
//     for (let c = 0; c < 8; c++) {
//         const isEvenRow = r % 2 === 0;
//         const isEvenColumn = c % 2 === 0;
//         if (isEvenRow && isEvenColumn) {
//             rowString = rowString + '#';
//         } else if (! isEvenRow && ! isEvenColumn){
//             rowString = rowString + '#';
//         } else {
//             rowString = rowString + ' ';
//         }
//     }
//     console.log(rowString)
// }

// for (let r = 0; r < 8; r++) {
//     let rowString = '';
//     for (let c = 0; c < 8; c++) {
//         if (r%2===0 && c%2===0) {
//             rowString = rowString + '#';
//         } else if (r%2===1 && c%2===1){
//             rowString = rowString + '#';
//         } else {
//             rowString = rowString + ' ';
//         }
//     }
//     console.log(rowString)
// }




// ESERCIZIO 3

//creare un programma che stampi a console questa configurazione:
// #
// ## 
// ### 
// #### 
// ##### 
// ######

// let row = 0;

// let stringRow = '#';

// while (row < 7) {
//     console.log(stringRow);
//     row = row + 1;
//     stringRow = stringRow + '#'
// }




// ESERCIZIO 4

//creare un programma che stampi a console questa configurazione:
//     #
//    ### 
//   ##### 
//  ####### 
// #########

