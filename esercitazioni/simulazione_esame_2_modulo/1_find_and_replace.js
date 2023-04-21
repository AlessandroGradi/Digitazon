/*
1 - Find and replace
Scrivere una funzione che riceva in ingresso tre stringhe:
● la prima sara’ un testo
● la seconda sara’ una parola che andra’ cercata nel testo
● la terza sara’ la parola da sostituire al posto della seconda
La funzione deve quindi produrrei lo stesso effetto che si ottiene quando si fa find and
replace di una parola in un testo.
Si assuma che:
● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi
non ci saranno spazi
● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi
l’algoritmo
● la seconda e la terza parola non necessariamente devono avere lo stesso numero di
caratteri
Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array.
La funzione deve ritornare la nuova stringa aggiornata.
*/

// PSEUDOCODICE

// COSTANTI
// dichiaro una costante text contenente del testo
// dichiaro una costante word contenente una parola (a sua volta contenuta o no in text)
// dichiaro una costante newword contente una parola

const text = "Un uomo entra in un caffe splash!"
const word = "splash!"
const newword = "boom!"

// FUNZIONE FIND
// creo una funzione find con in ingresso la stringa text e la stringa word
// e che mi ritorna o la stringa text o un messaggio
// se il contenuto word e' incluso nel contenitore text allora..
    // ritorno il contenuto word
// altrimenti stampo 'sorry, word not found'

function find(text, word) {
    if(text.includes(word)) {
        return word
    } else {
        return "sorry, word not found"
    }
}   //console.log(find(text, word)) --------OK

// PUNTARE LA STRINGA WORD
// o meglio: 
// convertire la stringa word nell'indice della parola stessa
// all'interno della conversione in array della stringa text

// uso split per convertire la stringa text in un array arrtext
// scrivo una funzione findIndex che prende in ingresso arrtext 
// e che mi ritorna l'indice della parola
// itero sugli elementi dell'array arrtext
// fino a che la parola relativa all'indice non e' uguale a word
// in questo caso ritorno l'indice della parola

const arrtext = text.split(' ');
function findIndex(arrtext) {
    for (i=0; i<arrtext.length; i++) {
        if (arrtext[i] == word) {
            return i
        }
    }
} //console.log(findIndex(arrtext)) --------OK

// TOGLIERE LA STRINGA WORD
// o meglio l'inverso:
// creare un nuovo array senza word

// creo una funzione cut che prende in ingresso arrtext 
// e che mi ritorna un array cuttedtext 
// dichiaro un array vuoto cuttedtext
// itero sugli elementi di arrtext
// li pusho nell'array cuttedtext
// fino a che l'indice meno uno non e' uguale al return della funzione findIndex

// problema1: dovrei creare un secondo ciclo che parte da x e finisce alla fine dell'array
// che pusha gli elementi rimanenti nell'array cuttedtext

let x = findIndex(arrtext)

function cut(arrtext) {
    let cuttedtext = []
    for (i=0; i<arrtext.length; i++) {
        cuttedtext.push(arrtext[i])
        if (i == x-1) {
            break
        }
    }
    return cuttedtext
} // console.log(cut(arrtext)) ------ OK A MEZZO, NON MODULARE.. per ora

// AGGIUNGERE STRINGA NEWWORD
// dichiaro una variabile y per salvare il ritorno della funzione cut ocon in ingresso arrtext
// scrivo una funzione pushString con in ingresso il ritorno della funzione cut
// e che ritorna l'array y

//problema2: come decidere la posizione del push? Dovrebbe essere uguale a x

let y = cut(arrtext)

function pushString(y) {
    y.push(newword)
    return y
}

console.log(pushString(y)) 




