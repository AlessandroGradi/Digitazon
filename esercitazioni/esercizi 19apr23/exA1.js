// Scrivere una funzione che dato in ingresso un numero, ritorni il fattoriale di quel numero.

//determino una variabile x a cui assegno un valore numerico
//scrivo una funzione di nome fatt con in ingresso la variabile x
//creo un array con un numero di indici pari al valore di x
//ciclo sulla lunghezza dell'array dalla sua fine con i-- fino a 1.

// qualcosa..
//vorrei fare questo ma non so come:

//se stesso per se stesso
//se stesso-1 per se stesso-2
//se stesso-2 per se stesso-3
//etcc..
//fino a che se stesso non e' 1 compreso.

//------------------------

let fatt = (n) => {
    let result = 0
    let mul = 1
    for (let i=1; i < n; i++) {
        mul = mul * i;
        result = mul * n
    }
    return result
};

console.log(fatt(170));