/*
Ex 2

Creare una funzione makeObj che prende in ingresso due parametri:
una stringa e un numero.
La funzione crea e RESTITUISCE un oggetto con due proprietà: label, 
che avrà come valore il valore passato come primo parametro, e rate, 
che avrà come valore il valore passato come secondo parametro.
Chiamare la funzione makeObj due volte con valori a piacere per creare 
e stampare in output due oggetti con i valori indicati.
*/

function makeObj(stringa, numero) {
    let obj = {
        label:stringa,
        rate:numero
    }
return obj
}

console.log(makeObj('ciao', 10))
console.log(makeObj('cane', 500))