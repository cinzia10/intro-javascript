// 

const testArray1 = [-6, 2, 5, 137, 9, 12, -123, 1.45, 200000, -23.9];
const testArray2 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];
const testArray3 = [[1, 4, 8, 12],
                    [34, 2.1, -23, 4],
                    [1.1, -2000, 2, 88]];

const stringa = 'ciao';
console.log(stringa.length)


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




function moreThan5Chars(array) {
   
}

console.log(moreThan5Chars(testArray2))

// function firstUpperCase(array) {
//     return array.map(element => {
//         return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
//       });
    
// }
//     console.log(firstUpperCase(testArray2))


function superSumAll(array) {
    

}








function divide(array, divider) {
    
}

console.log(divide(testArray1, 3))/// clone con tutti i valori diviso 3
console.log(divide(testArray1))/// clone con tutti i valori diviso 2



function filterByMax(array, max) {
    
}

console.log(filterByMax(testArray1, 10))/// clone con tutti i valori minore di 10


function reverse(array) {
    
}

console.log(reverse(testArray1)) /// da l'array con i valori invertiti
console.log(reverse(testArray2)) /// da l'array con i valori invertiti



function flatArray(array) {
    
}

console.log(flatArray(testArray3)) /// [1, 4, 8, 12, 34, 2.1, -23, 4, 1.1, -2000, 2, 88]