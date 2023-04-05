// Ex 1
// creare la funzione diffArray che prende in ingresso due array.
// Gli array dovranno contenere da 3 a 8 numeri.
// All'interno della funzione trovare il numero più grande del primo array 
// e il numero più piccolo del secondo array.
// La funzione restituisce la differenza tra il primo numero e il secondo. 
// Stampare il risultato in output.
// ---------------------------------------------------------------

// function diffArray(a, b) {

// } 

// const a = [2, 5, 11]
// const b = [3, 6, 12]


function diffArray(a1,a2){
    if(a1.length <= 8 && a2.length <= 8 && a1.length >= 3 && a2.length >= 3){
        let a1Big = a1[0]
        let a2Small = a2[0]
        for(i=1;i<a1.length;i++){
            if(a1[i]>a1Big) a1Big = a1[i]
        }
        for(i=1;i<a2.length;i++){
            if(a1[i]<a2Small) a2Small = a2[i]
        }
        diff = a1Big - a2Small
        return 'la differenza é ' + diff
    }
    else return 'gli array in entrata non soddisfano i requisiti'
}

const array1 = [2, 5, 11]
const array2 = [3, 6, 12]

console.log(diffArray(array1,array2))
console.log('----------------------------')


// Ex 2
// creare la funzione countVowels che prende in ingresso una stringa, 
// e restituisce una mappa che avrà per chiavi tutte le vocali alfabetiche 
// e per rispettivi valori il numero di occorrenze di ogni vocale nella stringa
// es 'ciao a tutti'   produce  { a => 2, e => 0, i => 2, o => 1, u => 1 }
// ---------------------------------------------------------------

function countVowels(string) {
    if (typeof string == 'string') {
        let a = 0, e = 0, i = 0, o = 0, u = 0
        for (i = 0; i < string.length; i++) {
            if (string[i] == 'a') a++
            if (string[i] == 'e') e++
            if (string[i] == 'i') i++
            if (string[i] == 'o') o++
            if (string[i] == 'u') u++
        }
        let vowels = new Map([
            ['a', a],
            ['e', e],
            ['i', i],
            ['o', o],
            ['u', u]
        ])
        return vowels
    }
    else return 'la variabile in ingresso non é una stringa'
}

let s1 = 'ciao a tutti'
let s2 = 10

console.log(countVowels(s1))
console.log(countVowels(s2))
console.log('----------------------------')

// Ex 3
// creare la funzione invertCase che prende in ingresso una stringa.
// Se la stringa è in lower case, restituisce la stringa in upper case.
// Se la stringa è in uppe rcase restituisce la stringa in lower case.
// Assumere che sia in una forma o l'altra.
// ---------------------------------------------------------------

function invertCase(a) {
    if(a.toUpperCase() != a && a.toLowerCase() != a) return false
    if(a.toUpperCase() == a) a = a.toLowerCase()
    else if(a.toLowerCase() == a) a = a.toUpperCase()
    console.log(a)
}
stringa = 'ciao a tutti'
stringa2 = 'CANE' 
invertCase(stringa)
invertCase(stringa2)
console.log('----------------------------')
// Ex 4
// creare una mappa che rappresenta 5 stili CSS a piacere e stamparla in output.
// Creare la funzione showCSS che prende in ingresso la precedente mappa e stampa tutti i suoi elementi.
// ---------------------------------------------------------------

{
    function showCSS(a) {
        for(let x of a.entries()) {
            console.log(x)
        }
    }
}
const m = new Map()
m.set()
m.set()
m.set()
m.set()
m.set()
showCSS(m)
console.log('----------------------------')

// Ex 5
// creare una funzione cmpArr che prende in ingresso 2 array e restituisce:
// 1 se il primo ha dimensioni maggiori del secondo
// -1 se il secondo ha dimensioni maggiori del primo
// 0 se hanno dimensioni uguali
// Testare in output il comportamento di tutte e 3 le casistiche.
// ---------------------------------------------------------------

