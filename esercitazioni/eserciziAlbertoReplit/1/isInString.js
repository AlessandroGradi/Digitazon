// scrivere una funzione chiamata isInString che 
// date due stringhe in ingress
// ritorna true se la seconda stringa e' contenuta nella prima
// false altrimenti

//

/*
let str1 = 's'
let str2 = 'salato'
function isInString(s, t) {
    if (str2.has(str1)) {
        console.log('true')
    } else {
        console.log('false')
    }
}

isInString(str1, str2) */

function isInString(contenitore, contenuto ) {
    if( contenitore.includes(contenuto) ){
      return true
    }else{
      return false
    }
  }
  
  console.log(isInString("salato", "sal"))