// scrivere una funzione chiamata countNoSpaces che 
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi

//PSEUDOCODICE
//dichiaro una stringa
//creo la funzione countNoSpaces con in ingresso una stringa str
//imposto un contatore x a 0
//itero sugli elementi della stringa dalla posizione 0 fino all'ultimo carattere della stringa
    //se il carattere e' diverso da spazio:
        //modifica la variabile x sommandogli 1
//ritorna x
//stampa la funzione con argomento str

const str = 'sport salto in lungo'

function countNoSpaces(str) {
    let x = 0
    for (let i=0; i<str.length; i++) {
        if (str[i]!=' ') {
            x++
        }
    }
    return x
}

console.log(countNoSpaces(str))
