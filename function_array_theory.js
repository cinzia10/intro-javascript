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


// SINTASSI FUNZIONE DI ORDINE SUPERIORE

// function sum(number1, numeber2) {
//     return number1+numeber2;
// }
// function sub(number1, numeber2) {
//     return number1-numeber2;
// }
// function mult(number1, numeber2) {
//     return number1*numeber2;
// }
// function div(number1, numeber2) {
//     return number1/numeber2;
// }

// function eseguiOperazione(numero1, numero2, operazione) {
//     return operazione(numero1, numero2);
// }
// console.log(eseguiOperazione(5,3,sub))




// function resto(number1, number2) {
//     return number1 % number2
// }

// const restoLambda = (n1, n2) => n1%n2;

// console.log(eseguiOperazione(9,4, (n1,n2)=>n1%n2))




// function somma1(numero) {
//     return numero+1;
// }

// function somma2(numero) {
//     return numero+2;
// }

// function generaSomma(numeroDaSommare) {
//     return (numero) => numero + numeroDaSommare;
// }

// const sommaTre = generaSomma(3);

// console.log(sommaTre(5))


// filtrare tutti gli elementi di Array in modo che rimangano quelli a indice pari

// function filteringFunction3(element, index) {
//     if (index%2===0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(testArray.filter(filteringFunction3))




/// mappare testArray in modo che ad ogni elemento venga sommato (se esiste) il successivo

// const testArray = [2, 4, 7, -9, 1000, 45, 2, 12, 333, -1000, 123, 34];

// function addNext(element, index, array) {
//     const nextIndex = index + 1;
//     if (nextIndex < array.length) {
//         const nextElement = array[nextIndex];
//         const result = element + nextElement;
//         return result;
//     } else {
//         return element;
//     }
// }

// console.log(testArray.map(addNext))

// console.log(testArray.map((e,i,a)=>i+1<a.length?e+a[i+1]:e))

// array    [3, 1, 5]
// index     0  1  2
// element   3
// element      1
// element         5

// array    [4, 6, 9]
// index     0  1  2
// element   4
// element      6
// element         9





