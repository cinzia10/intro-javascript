const testArray4 = [2, 4, 7, -9, 1000, 45, 2, 12, 333, -1000, 123, 34]; 

const testArray5 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu']; 

const testArray6 = [true, 'pippo', 204, 'verde', 3000, 100, false];





///filtrare testArray4 in modo che rimangano solo numeri positivi

// SOLUZIONE 1
function filteringPositives(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const isPositive = element > 0; 
        if (isPositive) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(filteringPositives(testArray4));

// SOLUZIONE 2
console.log(testArray4.filter((number)=>number>0));







/// filtrare testArray4 in modo che rimangano solo numeri divisibili per 3

// SOLUZIONE 1
function filteringPositives(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const isDivisibilePer3 = element % 3 === 0; 
        if (isDivisibilePer3) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(filteringPositives(testArray4));

// SOLUZIONE 2
console.log(testArray4.filter((number)=>number%3===0));







/// filtrare testArray4 in modo che rimangano solo numeri divisibili per 3 e 4

// SOLUZIONE 1
function filteringPositives(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const isDivisibilePer3 = element % 3 === 0;
        const isDivisibilePer4 = element % 4 === 0;
        if (isDivisibilePer3) {
            newArray.push(element); 
        } else if (isDivisibilePer4) {
            newArray.push(element)
        }
    } 
    return newArray;
} 
console.log(filteringPositives(testArray4));

// SOLUZIONE 2
console.log(testArray4.filter((number)=>number%3===0||number%4===0));







/// filtrare testArray5 in modo che rimangano solo le stringhe più corte di 6 lettere 

// SOLUZIONE 1
function moreThan6Chars(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const shorterThan6 = element.length < 6; 
        if (shorterThan6) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(moreThan6Chars(testArray5));

// SOLUZIONE 2
console.log(testArray5.filter((stringa) => stringa.length < 6));







/// filtrare testArray5 in modo che rimangano solo le stringhe che contengono la lettera 'n' 

// SOLUZIONE 1
function containsOnlyN(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const containsN = element.includes ("n"); 
        if (containsN) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(containsOnlyN(testArray5));

// SOLUZIONE 2
console.log(testArray5.filter((stringa) => stringa.includes ("n")));







/// filtrare testArray6 in modo che rimangano solo i numeri 

// SOLUZIONE 1
function onlyNumbers(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const elementTypeNumber = typeof element === 'number'; 
        if (elementTypeNumber) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(onlyNumbers(testArray6));

// SOLUZIONE 2
console.log(testArray6.filter((element) => typeof element === 'number'));







/// mappare testArray4 dividendo tutti i numeri per 3

// SOLUZIONE 1
function mapDiv3(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const elementPer3 = element/3; 
        newArray.push(elementPer3); 

        }
    return newArray;
} 
console.log(mapDiv3(testArray4));

// SOLUZIONE 2
console.log(testArray4.map((number) => number / 3));







/// mappare testArray4 facendo la radice quadrata di tutti i numeri

// SOLUZIONE 1
function mapDiv3(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const elementSquare = Math.sqrt(element); 
        newArray.push(elementSquare); 

        }
    return newArray;
} 
console.log(mapDiv3(testArray4));

// SOLUZIONE 2
console.log(testArray4.map((number) => Math.sqrt(number)));







/// mappare testArray4 sommando 1 solo ai numeri dispari 

// SOLUZIONE 1
function mapOddPlus1(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        if (element % 2 !== 0) {
            const oddPlus1 = element + 1; 
            newArray.push(oddPlus1); 
        } else { 
         newArray.push(element);
        }

        }
    return newArray;
} 
console.log(mapOddPlus1(testArray4));

// SOLUZIONE 2






/// mappare testArray5 rendendo maiuscole la prima e l'ultima lettera di ogni parola

// SOLUZIONE 1
function firstAndLastLetterUpperCase (array) {
    const newArray =[];
    for (const string of array) {
        const firstLetterUpperCase = string[0];
        const lastLetterUpperCase = string[string.length -1];
        const newString = firstLetterUpperCase.toUpperCase() + string.substring(1, string.length -1) + lastLetterUpperCase.toUpperCase();
        newArray.push(newString);
    }
    return newArray
}

console.log(firstAndLastLetterUpperCase(testArray5));

// SOLUZIONE 2
console.log(testArray5.map((string)=> string.charAt(0).toUpperCase()+string.substring(1, string.length -1)+string.charAt(string.length -1).toUpperCase()))






/// mappare testArray5 aggiungendo in fondo ad ogni stringa la lunghezza della stessa

function stringPlusLengthNumber (array) {
    const newArray = [];
    for (const string of array) {
        const lengthString = string.length;
        const stringPlusLength = string + lengthString
        newArray.push(stringPlusLength);
    }
    return newArray
}

console.log(stringPlusLengthNumber(testArray5));

// SOLUZIONE 2
console.log(testArray5.map((string)=>string+string.length))








