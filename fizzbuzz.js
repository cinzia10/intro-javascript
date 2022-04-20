//chiedo all'utente di inserire un numero
//se il numero è divisibile per 3, scrivo in console FIZZ
//se il numero è divisibile per 5, scrivo in console BUZZ
//se il numero è divisibile per entrambi, scrivo in console FIZZBUZZ


const numerostringa = prompt("inserisci il numero")
const numero= parseFloat(numerostringa)

const isdiv3 = numero % 3 === 0;
const isdiv5 = numero % 5 === 0;

if (isdiv3 && isdiv5) {
    console.log("FIZZBUZZ")
    
}else if (isdiv3 || isdiv5) {
    if (isdiv3) {
        console.log("FIZZ")
        
    }
    if (isdiv5) {
        console.log("BUZZ")
        
    }
} 