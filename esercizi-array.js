const testArray1 = [-6, 2, 5, 137, 9, 12, -123, 1.45, 200000, -23.9];
const testArray2 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];
const testArray3 = [[1, 4, 8, 12],
                    [34, 2.1, -23, 4],
                    [1.1, -2000, 2, 88]];

// function min(array){
//     let number = array[0];
//    for (let i= 0; i < array.length; i++) {
//        const element = array[i];
//     if(number > element){
//         number = element;
//     }
//    }
//    return number
 
// }

// console.log(min(testArray1))


// function sumEven(array) {
//     let evenNumber = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//     if(element % 2 === 0){
//         evenNumber = evenNumber + element

//     }
        
//     }
//     return evenNumber;
// }
//     console.log(sumEven(testArray1))




// function moreThan5Chars(array) {
//     const wordWithMoreThan5Char = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const charsElement = element.length
//         if (charsElement > 5) {
//             wordWithMoreThan5Char.push(element)
//         }
//     }
//    return wordWithMoreThan5Char 
// }

// console.log(moreThan5Chars(testArray2))//['giallo', 'arancione', 'magenta']

// function firstUpperCase(array) {
//     return array.map(element => {
//         return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
//       });
    
// }
//     console.log(firstUpperCase(testArray2))


// function superSumAll(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         for (let j = 0; j < element.length; j++) {
//             const number = element[j];
//             sum = number + sum;
//         }
//     }
//     return sum
// }

// console.log(superSumAll(testArray3))






// function divide(array, divider) {
//     const cloneTestArray1 = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (divider) {
//             cloneTestArray1.push(element/divider);
//         } else {
//             cloneTestArray1.push(element/2)
//         }
//     }
//     return cloneTestArray1
// }

// console.log(divide(testArray1, 3))/// clone con tutti i valori diviso 3
// console.log(divide(testArray1))/// clone con tutti i valori diviso 2



// function filterByMax(array, max) {
//     const maxCloneArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element < max) {
//             maxCloneArray.push(element);
//         }
//     }
//     return maxCloneArray
// }

// console.log(filterByMax(testArray1, 10))/// clone con tutti i valori minore di 10


// function reverse(array) {
//     array.reverse();
//     return array;
// }

// console.log(reverse(testArray1)) /// da l'array con i valori invertiti
// console.log(reverse(testArray2)) /// da l'array con i valori invertiti



// function flatArray(array) {
//     const flatArray = [];
//     for (const riga of array) {
//         for (const element of riga) {
//             flatArray.push(element)
//         }
//     }
//     return flatArray    
// }

// console.log(flatArray(testArray3)) /// [1, 4, 8, 12, 34, 2.1, -23, 4, 1.1, -2000, 2, 88]