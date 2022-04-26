// TEOREMA DI PITAGORA

// PRIMO TRIANGOLO
// const c1t1 = 4;
// const c2t1 = 3;

// const c1t1Alla2 = c1t1 ** 2;
// const c2t1Alla2 = c2t1 ** 2;

// const sumSquare = c1t1Alla2 + c2t1Alla2;

// const it1 = Math.sqrt(sumSquare);


// console.log(it1)

// SECONDO TRIANGOLO
// const c1t2 = 12;
// const c2t2 = 9;

// const c1t2Alla2 = c1t2 ** 2;
// const c2t2Alla2 = c2t2 ** 2;

// const sumSquare2 = c1t2Alla2 + c2t2Alla2;

// const it2 = Math.sqrt(sumSquare2);


// console.log(it2)


// FUNZIONE PER CALCOLARE IL TEOREMA DI PITAGORA

// function calcoloIpotenusa(cateto1, cateto2) {
//     const cateto1AllaSeconda = cateto1 ** 2;
//     const cateto2AllaSeconda = cateto2 ** 2;
//     const sommaDeiQuadrati = cateto1AllaSeconda + cateto2AllaSeconda;
//     const ipotenusa = Math.sqrt(sommaDeiQuadrati);
//     return ipotenusa;       
// }


// FUNZIONE PER ESERCIZIO FIZZBUZZ PROMPT E CICLO

// function fizzBuzz(numero) {
//     const isDivisibilePerTre = numero % 3 === 0;
//     const isDivisibilePerCinque = numero % 5 === 0;
//     if (isDivisibilePerTre && isDivisibilePerCinque ) {
//         console.log('FIZZBUZZ');
//     } else if (isDivisibilePerTre) {
//         console.log('FIZZ');
//     } else if (isDivisibilePerCinque) {
//         console.log('BUZZ');
//     }
// }

// const numeroInStringa = prompt('Inserisci un numero');
// const numero = parseFloat(numeroInStringa);
// fizzBuzz(numero);

// for (let i = 0; i < 100; i++) {
//     fizzBuzz(i);
// }



// function fizzBuzz(numero) {
//     const isDivisibilePerTre = numero % 3 === 0;
//     const isDivisibilePerCinque = numero % 5 === 0;
//     if (isDivisibilePerTre && isDivisibilePerCinque ) {
//         return 'FIZZBUZZ';
//     } else if (isDivisibilePerTre) {
//         return 'FIZZ';
//     } else if (isDivisibilePerCinque) {
//         return 'BUZZ';
//     } else {
//         return '';
//     }
// }

// const numeroInStringa = prompt('Inserisci un numero');
// const numero = parseFloat(numeroInStringa);
// const result = fizzBuzz(numero);
// console.log(result);

// for (let i = 0; i < 100; i++) {
//     const result = fizzBuzz(i);
//     console.log(result)
// }

//ESERCITAZIONE

// function elaboraDato(dato) {
//     const datoArrotondato = Math.round(dato);
//     const datoArrotondatoAllaSeconda = datoArrotondato ** 2;
//     // let datoDopoSoglia;
//     // if (datoArrotondatoAllaSeconda > 10) {
//     //     datoDopoSoglia = 10;
//     // } else {
//     //     datoDopoSoglia = datoArrotondatoAllaSeconda;
//     // }

//     let datoDopoSoglia = controllaSoglia(datoArrotondatoAllaSeconda);

//     if (datoDopoSoglia > 5) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// function controllaSoglia(numero) {
//     if (numero > 10) {
//         return 10;
//     } else {
//         return numero;
//     }
// }

// const dato1 = 3.4;
// const risultato1 = elaboraDato(dato1)

// console.log(risultato1)

// const dato2 = 1.5;
// const risultato2 = elaboraDato(dato2)

// console.log(risultato2)



// function dividi(dividendo, divisore){

    // console.log('dividendo', dividendo);
    // console.log('divisore', divisore);


    // if (dividendo === undefined) {
    //      return "mi serve il dividendo";
    // }
    // if (divisore === undefined){
    //       return "mi serve il divisore";
    // }
        
    // if (!dividendo) {
    //     return "mi serve il dividendo";
    // }
    // if (!divisore){
    //     return "mi serve il divisore";
    // }
                
    // if (!dividendo) {
    //     return "mi serve il dividendo";
    // }
    // if (!divisore){
    //     divisore = 2;
    // }

    // const quoziente = dividendo / divisore;
    // return quoziente;
// }




// function dividi(dividendo, divisore = 2){
//     if (!dividendo) {
//         return "mi serve il dividendo";
//     }

//     const quoziente = dividendo / divisore;
//     return quoziente;
// }

// const risultato = dividi(8,2)
// console.log('due parametri: ',risultato)
// console.log('----------------------')
// const risultato2 = dividi(8)
// console.log('un parametro: ', risultato2)
// console.log('----------------------')
// const risultato3 = dividi()
// console.log('nessun parametro: ', risultato3)

// dividi(8, 2);
// console.log('----------------------')
// dividi(8)
// console.log('----------------------')
// dividi()


// let numeroInStringa = '52';
// let numero = parseInt(numeroInStringa);
// console.log(numero);



// SINTASSI FUNZIONE STANDARD
// function aggiungiUno(numero){
//     return numero + 1;
// }

// const risultato4 = aggiungiUno(6);
// console.log(risultato4);

// SINTASSI FUNZIONE ANONIMA

// const aggiungiUnoAnonima = function (numero){
//     return numero + 1;
// }

// const risultato5 = aggiungiUnoAnonima(5);
// console.log(risultato5);

// SINTASSI FUNZIONE LAMBDA

// const aggiungiUnoLambda = (numero) => numero + 1;

// const risultato6 = aggiungiUnoLambda(6);
// console.log(risultato6);


// const dividiLambda = (dividendo, divisore) => {
//     const quoziente = dividendo / divisore;
//     return quoziente;
// }