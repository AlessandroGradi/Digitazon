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

//PSEUDOCODICE
//dichiaro l'array nums di numeri interi
//dichiaro una variabile numerica intera target
//creo una funzione putInOrder con in ingresso un array e un numero
//itero sull'array dall'inizio alla fine
    //ad ogni ciclo controllo se nums[i] e' uguale al target
        //se si allora ritornami il valore attuale di i
        //altrimenti itero nuovamente sull'array dall'inizio alla fine
        //ad ogni ciclo controllo se il target e' maggiore di nums[i] e minore di nums[i+1]
        //ritornami i+1

//VERSIONE SENZA CICLI INNESTATI MIGLIORATA DA ALBERTO

let nums = [1,3,5,6]
let target = 2
        
function putInOrder (array, n) {
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i] == target) {
            return i
        }
    }
    for (let i=0; i<nums.length-1; i++){
        if(target>nums[i] && target<nums[i+1]) {
            return i+1
        }
    }
}

console.log(putInOrder(nums, target))
    
    

/*
VERSIONE ORIGINALE MIA
let nums = [1,3,5,6]
let target = 2

function putInOrder (array, n) {
    for (let i=0; i<nums.length; i++) {
        if (nums[i] == target) {
            return i
        }
        else {
            for (let i=0; i<nums.length; i++){
                if(target>nums[i] && target<nums[i+1]) {
                    return i+1
                }
            }
        }
    }
}

console.log(putInOrder(nums, target))
*/




