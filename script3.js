// ciclo WHILE

// let counter = 10;

// while (counter < 10) {
//     console.log('sono nel ciclo while al giro ' + counter);
//     counter = counter + 1;
// }


// const vocaleSegreta = 'u';

// while (true) {
//     const vocaleScelta = prompt('Prova a indovinare la vocale segreta');
//     const isVocaleSceltaUgualeVocaleSegreta = vocaleScelta === vocaleSegreta;
    
//     if (isVocaleSceltaUgualeVocaleSegreta) {
//         console.log('Bravo!');
//         break;
//     } else {
//         console.log('Riprova!')
//     }
// }



// ciclo DO..WHILE

// let counter1 = 10;

// do {
//     console.log('sono nel ciclo do..while al giro ' + counter1);
//     counter1 = counter1 + 1;
// } while (counter1 < 10);



// ciclo FOR

// for (let i = 0; i < 10; i++) {
//     console.log('sono nel ciclo for al giro ' + i)
    
// }

// for (let counter = 0; counter < 10; counter = counter + 1) {
//     console.log('sono nel ciclo for al giro ' + counter);
    
// }


// let pippo = 6;

// if (pippo < 10) {
//     console.log('ciao' + pippo)
// }

// if (pippo < 10) {
//     let pluto = 10;
//     if (pluto > 5) {
//         console.log(pluto);
//         let paperino = 20;
//     }
//     console.log(paperino);
// };


// cicli nei cicli

for (let riga = 1; riga < 4; riga++) {
    // console.log('Sto leggendo la riga: ' + riga);
    for (let colonna = 1; colonna < 4; colonna++) {
        // console.log('Sto leggendo la colonna: ' + colonna);
        console.log('Sto leggendo la cella: ' + riga + ', ' + colonna);
        
    }
}


// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//         for (let k = 0; k < 4; k++) {
//         }
//     }
    
// }