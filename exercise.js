const testArray4 = [2, 4, 7, -9, 1000, 45, 2, 12, 333, -1000, 123, 34]; 

const testArray5 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu']; 

const testArray6 = [true, 'pippo', 204, 'verde', 3000, 100, false];


function filtering (array, filterFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = filterFunction(element);
        if (newElement){
        newArray.push(element)
        }
    }
    return newArray;
}


function mapping (array, mappingFunction) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = mappingFunction(element);
        newArray.push(newElement)
    }
    return newArray;
}







///filtrare testArray4 in modo che rimangano solo numeri positivi

function onlyPositive (number){
    if (number%2===0){
        return true
    } else {
        return false
    }
}

console.log(filtering(testArray4, onlyPositive))


/// filtrare testArray4 in modo che rimangano solo numeri divisibili per 3

function onlyDivisibleFor3 (number){
    if (number%3===0){
        return true
    } else {
        return false
    }
}

console.log(filtering(testArray4, onlyDivisibleFor3));


/// filtrare testArray4 in modo che rimangano solo numeri divisibili per 3 e 4

function onlyDivsibleFor3And4 (number) {
    if (number%3===0 || number%4===0){
        return true
    } else {
        return false
    }
}

console.log(filtering(testArray4, onlyDivsibleFor3And4));


/// filtrare testArray5 in modo che rimangano solo le stringhe più corte di 6 lettere 

function onlyStringMoreSixLetter (string) {
    if (string.length < 6){
        return true
    } else {
        return false
    }
}

console.log(filtering(testArray5, onlyStringMoreSixLetter));


/// filtrare testArray5 in modo che rimangano solo le stringhe che contengono la lettera 'n' 

function onlyStringWithLetterN(string) {
    if (string.includes('n')) {
        return true
    } else {
        return false
    }
}

console.log(filtering(testArray5, onlyStringWithLetterN));


/// filtrare testArray6 in modo che rimangano solo i numeri 

function onlyNumber (element){
    if (typeof element === 'number') {
        return true
    } else {
        return false
    }
}

console.log(filtering(testArray6, onlyNumber))


/// mappare testArray4 dividendo tutti i numeri per 3

function divideFor3 (number){
    return number/3;
}

console.log(mapping(testArray4, divideFor3));


/// mappare testArray4 facendo la radice quadrata di tutti i numeri

function squareNumber (number) {
    return Math.sqrt(number);
}

console.log(mapping(testArray4, squareNumber));


/// mappare testArray4 sommando 1 solo ai numeri dispari 

function plusOneOnlyOdd (number){
    if (number%2!==0){
        return number+1
    } else {
        return number
    }
}

console.log(mapping(testArray4, plusOneOnlyOdd));


/// mappare testArray5 rendendo maiuscole la prima e l'ultima lettera di ogni parola

function firstAndLastLetterUpperCase (string) {
    return string.charAt(0).toUpperCase() + string.substring(1, string.length -1) + string.charAt(string.length -1).toUpperCase()
}

console.log(mapping(testArray5, firstAndLastLetterUpperCase));


/// mappare testArray5 aggiungendo in fondo ad ogni stringa la lunghezza della stessa

function stringLength (string){
    return string + string.length
}

console.log(mapping(testArray5, stringLength))