// scrivere una funzione chiamata stringConcat che 
// date due stringhe 
// ritorni una stringa risultato della concatenazione 
// delle due, con in mezzo il simbolo #

// ad esempio per "link" e "query" ritorna "link#query"

// dichiaro due variabili stringhe
// scrivo la funzione stringConcat
// nella funzione entrano due stringhe
// sommo le stringhe
// dalla funzione deve uscire il risultato della somma
// richiamo la funzione stampando in console

const str1 = 'pappa'
const str2 = 'gallo'

function stringConcat (str1, str2) {  
    return str1 + '#' + str2;
}

console.log(stringConcat(str1, str2))

