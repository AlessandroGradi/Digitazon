// scrivere una funzione chiamata countUndefinedKeys che 
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null


// creo un oggetto obj
// creo un contatore x
// creo una funzione chiamata countUndefinedKeys con in ingresso obj
// itero sull'oggetto
    // se il valore della chiave e' uguale a undefined || null...
        // aggiungo +1 ad x ad ogni ciclo

const obj = {1:"flour", 2:"sugar", 3:"", 4:"salt", 5:undefined, 6:"0", 7:null}

function countUndefinedKeys(obj) {
    let x = 0
    for (let i=0; i<obj.length; i++) {
        if (object.keys(obj) == null || object.keys(obj) == undefined) {
            x++
        }
    }
return x
}

console.log(countUndefinedKeys(obj))