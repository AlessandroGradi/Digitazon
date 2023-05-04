// Scrivere una funzione che prende in ingresso un oggetto, 
// si devono stampare
// solo i valori relativi a quelle chiavi
//  * "chiave1"
//  * "chiave2"
// a prescindere da quante ce ne siano nell'oggetto.
// Non si possono utilizzare if, non si puo' utilizzare l'operatore 
// punto (.) cercate di utilizzare lo spread operator

function print({chiave1, chiave2}) {
    console.log(chiave1, chiave2)
  }
  
  function print2(obj) {
    let { chiave1, chiave2 } = obj
    console.log(chiave1, chiave2)
  }
  
  print({chiave1: 1, chiave2: 2, chiave3: 3, chiave4: 4})
  print2({chiave1: 1, chiave2: 2, chiave3: 3, chiave4: 4})
  
  
  
  import {MyQualcosa} from './qualcosa'
  
  
  let a = 0
  function qualcosa(a, b, c) {
    
  }


/*
let obj = {
    1: "a", 
    2: "b",
    3: "c",
    4: "d"
}
function printValues(obj) {
    let {...key} = obj
    return key
}

console.log(printValues(obj))
*/