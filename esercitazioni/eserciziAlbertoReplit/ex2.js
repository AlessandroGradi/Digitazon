/*
dati due array ordinati, creare una funzione chiamata merge, 
che prende in ingresso i due array e ne ritorna uno solo, ordinato
*/

//PSEUDOCODICE POSTUMO

function merge(arr1, arr2) {
    let array = []
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        if (arr1[i] <= arr2[j]) {
            array.push(arr1[i])
            i++
        }
        else {
            array.push(arr2[j])
            j++
        }
    }
    return array
}

console.log (merge([1,3,5], [2,4,6,7,8]))

//PSEUDOCODICE
//creo un array arr1 di numeri interi
//creo un array arr2 di numeri interi
//creo un array arrmerged vuoto
//scrivo una funzione merge che prende in ingresso due array
//itero sugli elementi dell'arr1
    //itero sugli elementi dell'arr2 partendo da j uguale ad i
        //se il numero in posizione i e' uguale o minore .. 
        //.. rispetto a quello in posizione j
        //allora pusha arr1[i] in arrmerged
        //altrimenti pusha arr2[j] in arrmerged
    //ritorna arrmerged

/*
let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6, 7, 8]
let arrmerged = []

function merge(arr1, arr2) {
    for (let i=0; i<arr1.length; i++)  {
        for (let j=0; j<arr2.length; j++)
            if (arr1[i]<=arr2[j]) {
                arrmerged.push(arr1[i])
            }
            else {
                arrmerged.push(arr2[j])
            }
    return arrmerged
    }
}

console.log(merge(arr1, arr2))
*/



