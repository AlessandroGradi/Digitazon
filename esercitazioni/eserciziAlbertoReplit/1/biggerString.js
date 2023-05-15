// scrivere una funzione chiamata biggerString che 
// date due stringhe in ingresso
// ritorni la piu' lunga


//creo una funzione biggerString con in ingresso

function biggerString(a, b) {
    if (a.length > b.length) {
        return a
    }
    else {
        return b
    }
}

const a = '2'
const b = 'rana'

console.log(biggerString(a, b))

//---------------------------------------------
// let a = 'acqua';
// let b = 'barile';


// if (a.length > b.length) {
// console.log ('la stringa piu lunga e:' +a)    
// }
// else if (a.length < b.length) {
//     console.log ('La stringa piu lunga e:' +b)
// } 
// else {
//     console.log ('Le stringhe sono uguali')
// }