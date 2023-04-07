// Ex 1
// Dato il seguente JSON:
// [
//     {
//         "fullname": "Yoshi", "rate": [4, 5, 4, 6]
//     },
//     {
//         "fullname": "Wario", "rate": [4, 9, 6, 7]
//     },
//     {
//         "fullname": "Toad", "rate": [8, 9, 9, 8]
//     }
// ]
// salvarlo in un template string, parsarlo con l'apposita strategia e 
// stabilire algoritmicamente chi è lo studente migliore e chi è il peggiore.
// ----------------------------------------------------------------------

const jsonString = 
`
[
    {
        "fullname": "Yoshi", "rate": [4, 5, 4, 6]
    },
    {
        "fullname": "Wario", "rate": [4, 9, 6, 7]
    },
    {
        "fullname": "Toad", "rate": [8, 9, 9, 8]
    }
]
`
const jsonObj = JSON.parse(jsonString)
console.log(jsonObj)
console.log(jsonObj[0].rate)

function mediaPiuAlta(a) {
    for(let i=0; i<a.length; i++) {
        for(let j=0;j<a.rate.length;j++) {
            if(a[j] == 0) b++
            else if(a[j] == 1) c++
            if(a[j] == 0) d++
        }
    }
}



// Ex 2
// Creare una funzione parseShape che prende in ingresso un oggetto che abbia questo template:
// { x: number, y: number, name: string }
// e produca un ouput relativo ad area e perimetro, in base al valore della proprietà name che stabilisce il tipo di figura geometrica in uso.
// Richiamare la funzione due volte con:

// const quadrato = {x: 5, x:4, shape: 'square'}
// const rettangolo = {x: 5, x:4, shape: 'rectangle'}
// per stampare area e perimetro di quadrato e rettangolo.
// ----------------------------------------------------------------------




// Ex 3
// creare, a piacere, due letterali oggetto, che descriveranno rispettivamente:
// - uno studente (avrà nome, cognome, età, voti, un metodo per calcolare e stampare la sua media voti, un metodo per stabilire se è maggiorenne o meno)
// - un'automobile (avrà modello, marca, prezzo e tipoMotore. tipoMotore a sua volta avrà cilindrata, tipo (benzina, diesel o elettrico) e cv. L'automobile avrà un metodo printInfo che stampa in modo correttamente formattato e leggibile le sue feature
// richiamare i metodi dei due oggetti per stampare in output i risultati
// [13:15]
// ----------------------------------------------------------------------




// Ex 4
// creare un array di oggetti, che rappresentano le dimensioni dei lati di un rettangolo, e avranno proprietà base e altezza.
// Nell'array inserire 5 oggetti con questo template e valori a piacere.
// Creare una funzione parseRectangles che prende in ingresso un array di oggetti con la struttura descritta e restituisca l'indice del rettangolo con l'area maggiore.
// ----------------------------------------------------------------------




// Ex 5
// creare un array di oggetti, che rappresentano il contenuto di un parola, e avranno proprietà text. 
// Es { text: 'ciao' }, { text: 'javascript' }
// Nell'array inserire 5 oggetti con questo template e valori a piacere.
// Creare una funzione parseStrings che prende in ingresso un array di oggetti con la struttura descritta e restituisca quante stringhe contengono la lettera 'x'.