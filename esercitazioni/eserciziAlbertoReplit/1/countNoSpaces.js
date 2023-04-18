// scrivere una funzione chiamata countNoSpaces che 
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi

const string = 'cammello'
let x = 0

function countNoSpaces(string) {
    for (let i=0; i<=string; i++) {
    let x = x++
    }
    return x
}

console.log(countNoSpaces())