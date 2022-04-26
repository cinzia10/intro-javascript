// const arrayOfNumbers = [1, 5, 3, 8, 6];

// //AGGIUNGERE ELEMENTO IN FONDO
// arrayOfNumbers.push(9);

// // AGGIUNGERE ELEMENTO ALL'INIZIO
// arrayOfNumbers.unshift(37);

// // TOGLIERE ELEMENTO IN FONDO
// const element = arrayOfNumbers.pop();

// console.log(element);


// // TOGLIERE ELEMENTO ALL'INIZIO
// const element2 = arrayOfNumbers.shift();

// console.log(element2);


// console.log(arrayOfNumbers);



// // ACCEDERE AD UN ELEMENTO CONOSCENDO LA POSIZIONE

// const elementInPosition2 = arrayOfNumbers[2];
// console.log(elementInPosition2);

// console.log(arrayOfNumbers[0]);



// // SOVRASCRIVERE UN ELEMENTO IN UNA POSIZIONE

// arrayOfNumbers[4] = 666;

// console.log(arrayOfNumbers);



// CICLO FOR CON ARRAY (CICLARE ARRAY)
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//   const element = arrayOfNumbers[i];
//   console.log(element);
// }


// for (const element of arrayOfNumbers) {
//   console.log(element);
// }



// FUNZIONE RICERCA DELL'ELEMENTO MAGGIORE, CON NUMERI POSITIVI
// const arrayOfNumbers = [1, 5, 3, 8, 6];

// function max(array){
//   let selectedElement = 0;

//   for (const element of array) {
//     if (selectedElement < element) {
//       selectedElement = element;
//     }  
//   }
//   return selectedElement;
// }

// console.log(max(arrayOfNumbers));



// FUNZIONE RICERCA DELL'ELEMENTO MAGGIORE, CON NUMERI NEGATIVI
// const arrayOfNumbers = [-11, -5, -3, -8, -6];

// function max(array){
//   let selectedElement = array[0];

//   for (const element of array) {
//     if (selectedElement < element) {
//       selectedElement = element;
//     }  
//   }
//   return selectedElement;
// }

// console.log(max(arrayOfNumbers));

// const arrayOfNumbers = [1, 5, 3, 8, 6];

// function plusOne(array) {
  
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const elementPlusOne = element + 1;
//     newArray.push(elementPlusOne);
//   }
//   return newArray
// }

// console.log(plusOne(arrayOfNumbers));

// function findEvenNumbers(array){
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//       const element = array[i];
//       if (element % 2 === 0) {
//        newArray.push(element) 
//       }
//     }
//     return newArray;
// }

// console.log(findEvenNumbers(arrayOfNumbers));


// function sumAll (array) {
//   let risultato = 0;

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     risultato = risultato + element;
//   }
//   return risultato;
// }


// console.log(sumAll(arrayOfNumbers));