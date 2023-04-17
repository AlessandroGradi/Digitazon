//data una stringa in ingresso la funzione deve calcolare
//la sottostringa palindroma piu lunga
// es. abba 1abba1 c ''


//PSEUDOCODICE-------------------
//scrivere una stringa
//scrivere una funzione di nome inverti
//scrivo un for che parte dall'ultimo carattere e si avvicina al primo
//ad ogni ciclo inserisce la corrente letterra del ciclo in una nuova stringa


function inverti(a) {
    let b = ''
    for (let i=a.length-1; i>=0; i--) {
    b += a[i] 
    }
    return b
}

function palindroma(a) {
    return a == inverti(a)
}

console.log(palindroma('esse'))