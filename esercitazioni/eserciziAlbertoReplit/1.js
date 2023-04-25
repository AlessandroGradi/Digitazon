//dati 2 num interi a e b stampare in console a se il primo e' maggiore e stampare b se il secondo e' maggiore

//pseudocodice
//dare valori numerici ad a e b
//se a maggiore di b stampare a
// altrimenti stampa b

let a=12
let b=14

if (a>b) {
    console.log ('a')
} else {
    console.log ('b')
} 

// scrivere una funzione chiamata stringConcat che 
// date due stringhe 
// ritorni una stringa risultato della concatenazione 
// delle due, con in mezzo il simbolo #

// ad esempio per "link" e "query" ritorna "link#query"

//pseudocodice
//dichiaro la variabile str1
//dichiaro la variabile str2
//scrivo una funzione stringConcat con all ingresso le 2 stringhe
//sommo str1 a # a str2
//stampare il risultato della somma

let str1='ciao'
let str2='tutti'
function stringConcat(str1,str2) {
    return str1+'#'+str2
}

console.log (stringConcat(str1,str2))


//dato un array words scrivi una funzione rev che mi stampa l array in senso contrario

//pseudocodice
//dichiarare la variabile words
//scrivere una funzione rev con all ingrsso words
//stampare il risultato della funzione

let words=['casa','pane','sdraio']

function rev(words) {
    let words2=[]
    for (let i=words.length-1; i>=0 ; i-- )  { 
        words2.push(words[i])
    }
    words2 = words
    return words
}


console.log (rev(words)) 

