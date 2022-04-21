// string

console.log('Ciao mondo!');

// alert('Ciao mondo!');

console.log('Ciao Cinzia');

console.log('7')

console.log('Ciao' + 'Andrea')

// number

console.log(7);

console.log('somma', 10 + 5);

console.log('sottrazione', 10 - 5);

console.log('moltiplicazione', 10 * 5);

console.log('divisione', 10 / 5);

console.log('potenza', 5 ** 2);

console.log('modulo', 5 % 2);

// library Math

console.log("Math", Math.round(3.48))

// complicazioni

console.log("Ciao" + 7);

console.log("7" + 7);

console.log(7 + "7");

// boolean

console.log(false);
console.log(true);

// funzione logica NOT

console.log('NOT true', !true);
console.log('NOT false', !false);

// funzione logica AND

console.log('true AND true',true&&true);
console.log('true AND false',true&&false);
console.log('false AND true',false&&true);
console.log('false AND false',false&&false);

// funzione logica OR

console.log('true OR true', true||true);
console.log('true OR false', true||false);
console.log('false OR true', false||true);
console.log('false OR false', false||false);

//funzione logica EQUAL

console.log('true EQUAL true', true===true);
console.log('true EQUAL false', true===false);
console.log('false EQUAL true', false===true);
console.log('false EQUAL false', false===false);

// funzione logica EQUAL altre applicazioni

console.log("Pippo EQUAL Pippo", 'Pippo' === 'Pippo');
console.log("Pippo EQUAL Pluto", 'Pippo' === 'Pluto');

console.log("7 EQUAL 7", 7===7);
console.log("8 EQUAL 2", 8===2);

// operatore di diversità
const brontolone = 5;

const puffetta = 8;

const sonoDiversi = !(brontolone === puffetta);

const sonoDiversi2 = brontolone !== puffetta;

// operatore di maggioranza e minoranza
const minore = brontolone < puffetta;

const maggiore = brontolone > puffetta;

const minoreUguale = brontolone <= puffetta;

const maggioreUguale = brontolone >= puffetta;

// complicazioni

console.log("'7' === 7", '7' === 7);

console.log("'7' == 7", '7'==7);

// undefined
let grandePuffo;

console.log('log di grande puffo', grandePuffo);

// null
let quattrocchi = null;

console.log('log di quattrocchi', quattrocchi);

// NaN
let numeroSbagliato = 'cinque';
let numero = parseInt(numeroSbagliato)

console.log('log di numero sbagliato', numero);

//infinity
const infinitoPositivo = +Infinity;
const infinitoNegativo = -Infinity;

// variabile

 let pippo = 7;

 console.log(pippo);

 console.log(pippo + 3);

 let pluto = 5;

 console.log(pippo + pluto);

 let paperino = 'Ciao';

 console.log(paperino);

 console.log(paperino + pluto);

 pluto = 'mondo';

 console.log(paperino + pluto);

 var paperoga = 12;

 var paperone = 15;

 console.log(paperoga + paperone);

 console.log(paperino + paperoga);

 const topolino = "viva";

 const topolina = "javascript";

 console.log(topolino + topolina);

 //const non può essere riassegnata come let e var

 //topolina = "html";
 //console.log(topolino + topolina)

 
// progetto
const stringa1 = prompt("Inserisci la prima stringa");
const stringa2 = prompt("Inserisci la seconda stringa");

// console.log(stringa1 + stringa2);

alert(stringa1 + stringa2);


// camel case
let laMiaVariabileDiEsempio;

const LA_MIA_IMPORTANTISSIMA_COSTANTE = 3.14;