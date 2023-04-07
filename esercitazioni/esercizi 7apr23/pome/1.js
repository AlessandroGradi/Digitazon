// Ex 1
// --------------------------------------------------------------------
// creare una funzione formatDate che, presi in ingresso un numero, una stringa e un numero, stampi una data formattata.
// Il primo numero rappresenta l'anno, la stringa il nome del mese e il secondo numero il giorno.
// es: formatDate(2023, 'maggio', 17)   stampa "17-05-2023"

function formatDate(year, month, day) {
    const array = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'settembre', 'ottobre', 'novembre', 'dicembre']
    if(typeof month === 'string') {
        for(let i = 0; i < array.length; i++) {
            if(month == array[i]) month = '0' + (i + 1)
        }
    }
    console.log(year + '-' + month + '-' + day)
}
formatDate(2023, 'maggio', 17)



// Ex 2
// --------------------------------------------------------------------
// creare una funzione cmpDate che prende in ingresso 2 stringhe che rappresentano 2 date formattate nel formato americano visto 
// a lezione.
// La funzione estrapola l'anno da entrambe le date e restituisce 1 se il primo anno è maggiore del secondo, 
// -1 viceversa e 0 se sono pari.
// Chiamare la funzione 3 volte con valori a piacere.



// Ex 3
// --------------------------------------------------------------------
// creare una funzione getDateDay che prende in ingresso una data formattata nel formato americano visto a lezione e restituisce il giorno della settimana relativo, in parola.
// Chiamare la funzione con 3 date a piacere.
// es: getDateDay('2023-05-17')  -> 'mercoledì'

function getDateDay(a) {
    const array = ['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica']
    return array[a.getDay() - 1]
}
const date = new Date("2023-05-17")
console.log(getDateDay(date))


// Ex 4
// --------------------------------------------------------------------
// dato il seguente JSON:

// [
//     {
//         "name": "mario",
//         "active": true,
//         "feat": {
//             "role": "protagonist"
//         }
//     },
//     {
//         "name": "luigi",
//         "active": true,
//         "feat": {
//             "role": "protagonist"
//         }
//     },
//     {
//         "name": "wario",
//         "active": false,
//         "feat": {
//             "role": "antagonist"
//         }
//     },
//     {
//         "name": "yoshi",
//         "active": false,
//         "feat": {
//             "role": "protagonist"
//         }
//     }
// ]
// creare una funzione getInfo che, preso in ingresso l'array di oggetti ottenuto dal JSON, mi dice:
// - quanti protagonisti ci sono nell'array
// - quanti protagonisti attivi ci sono nell'array
// - quanti antagonisti ci sono nell'array
// Ex 5
// --------------------------------------------------------------------
// creare uno script a piacere in cui si dimostra l'uso di:
// - array di array
// - array di oggetti
// - mappe
// - set
// - funzione che accetta una funzione
// - this