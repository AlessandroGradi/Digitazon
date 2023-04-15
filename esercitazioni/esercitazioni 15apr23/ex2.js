// scrivere una funzione data in ingresso un array e un numero ritorna gl'indici la cui la somma fa quel numero 

// pseudocodice
 
// ALBERTO

// ho una funzione che prende in ingresso un array ARR e un numero N
// creo un primo ciclo che visitera' tutti gli elementi, indice I
//   creo un secondo ciclo che cerchera' il "compagno", partendo una posizione a dx, indice J
//     se il numero puntato da I sommato al numero puntato da J == N
//       allora ritorno [I, J]
// se arrivo qui vuol dire che non ho trovato un compagno e ritorno []

function numbers( arr, n ) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i +1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) == n ) {
                return [i, j]
            }
        }
        
    }
    return []
}
console.log( numbers( [10, 20, 30, 40, 50], 80) );