// scrivere una funzione chiamata addUpFromNumber che 
// dato un numero positivo in input
// ritorni la somma di tutti i numeri da 1 fino al numero passato

// ad esempio: con 4 ritornerebbe 1 + 2 + 3 + 4 = 10

// scrivo una funzione addUpFromNumber con in ingresso un numero n
// se il numero e' maggiore di 0..
    // itero su ogni numero intero da n fino a 1
        // sommo ad n se stesso meno 1
    // ritorno n
// se il numero e' uguale a 0
    // ritorno 0
// altrimenti ritorno 'only positive numbers allowed'

n = 4
function addUpFromNumber(n) {
    if (n>0) {
        for (let i=n; i>0; i--) {
            
        }
        return n
    }
    if (n==0) {
        return 0
    }
    else {
        return 'only positive numbers allowed'
    }
}

console.log(addUpFromNumber(n))