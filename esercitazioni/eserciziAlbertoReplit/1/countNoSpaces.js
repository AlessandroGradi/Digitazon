// scrivere una funzione chiamata countNoSpaces che 
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi


let x = 0
const string = 'cammello'

function countNoSpaces(string) {
    for (let i=0; i<=string.length; i++) {
        string.push(i)
    }
    return string
}

console.log(countNoSpaces(string))