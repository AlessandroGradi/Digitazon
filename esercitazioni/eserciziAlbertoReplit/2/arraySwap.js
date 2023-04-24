// scrivere una funzione chiamata arraySwap che 
// dato un array di interi
// ritorni un nuovo array dove, partendo da 0, il valore alla posizione i
// e il valore alla posizione i + 1 sono invertiti di posizione

// ad esempio: con [5, 6] ritornerebbe [6, 5]
// ad esempio: con [1, 2, 3, 4] ritornerebbe [2, 1, 4, 3]
// ad esempio: con [7, 8, 9] ritornerebbe [8, 7, 9] perche' il 9 non puo'
// essere scambiato con niente siccome l'array e' terminato

//PSEUDOCODICE
// creo un array arr contenente n interi
// creo una funzione arrSwap con in ingresso arr
// creo un array subarr vuoto
// trasformo in array subarr i primi due elementi dell'array arr
// trasformo subarr in reverse
// ritorno il primo elemento di subarr al posto del primo elemento di arr
// ritorno il secondo elemento di subarr al posto del secondo elemento di arr
// stampo la funzione

let arr = [1, 2, 3, 4, 5]

function arrSwap(arr) {
    let subarr = []
    subarr.push(arr[0], arr[1])
    subarr = subarr.reverse()
    return arr[0]=subarr[0], arr[1]=subarr[1]
}

arrSwap(arr)
console.log(arr)

// perche' se tolgo linea 30 e 31 e stampo console.log(arrSwap(arr)) non funziona???