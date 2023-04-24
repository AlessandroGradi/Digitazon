// scrivere una funzione chiamata even che 
// dato un array di numeri in ingresso
// ritorni un array che contiene solo i numeri pari

//dichiaro un array n di numeri interi
//dichiaro un array vuoto npari
//scrivo una funzione even con in ingresso 
//itero sugli elementi di arr
//se il numero corrispondente all'indice diviso per due da resto 0
    //allora aggiungo il numero all'array npari

let n = [1, 4, 56, 34, 67, 193, 1220, 6, 7]

function even(n) {
    let npari = []
    for (i=0; i<n.length; i++) {
        if (n[i]%2==0) {
            npari.push(n[i])
        } 
    }
    return npari
}

console.log(even(n))