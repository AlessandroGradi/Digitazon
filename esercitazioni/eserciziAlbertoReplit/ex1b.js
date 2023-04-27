/*
Dato un array ordinato di interi tutti diversi, e un numero target, 
ritornare l'indice al quale il target e' trovato. 
Se non viene trovato ritornare l'indice al quale andrebbe 
inserito per mantenere l'ordine

Esempio
nums = [1,3,5,6], target = 5
2
nums = [1,3,5,6], target = 2
1
*/

//trovare una soluzione con ricerca binaria

//PSEUDOCODICE
//dichiaro l'array nums di numeri interi
//dichiaro una variabile numerica intera target

//scrivo una funzione findOrder con in ingresso un'array e un numero
//

//dichiaro l'array nums di numeri interi
//dichiaro una variabile numerica intera target
//creo una funzione putInOrder con in ingresso un array e un numero
//itero sull'array dalla meta' verso gli estremi <== <== <== <== ==> ==> ==> ==>
    //ad ogni ciclo controllo se nums[i] e' uguale al target
        //se si allora ritornami il valore attuale di i

//ad ogni ciclo controllo se il target e' maggiore di nums[i] e minore di nums[i+1]
//ritornami i+1


function binarySearch(arr,n) {
    
    let end = arr.length-1
    let start = 0 

    while ( start <= end ) {
        let half = Math.floor((end+start)/2)  
        if (n==arr[half]) {
            return half
        }
        if (n>arr[half]){
            start = half+1  //arrotondando per difetto si deve aggiustare il caso in cui ci siano solo due elementi.
        } else {
            end = half-1
        }  
    }
    return -1 
}

console.log(binarySearch([1,2,3,5,6],7));