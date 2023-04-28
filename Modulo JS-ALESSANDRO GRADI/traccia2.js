// 2 - Oh, non puoi farci niente. Siamo tutti pazzi qui.

//dichiaro una stringa in ingresso phrase

//REQUISITI DI PAZZIA
//dichiaro un array subjects
//dichiaro un array question
//dichiaro un array cth
//dichiaro un array conjugations
//dichiaro una stringa punctuation

//JOLLY PER LA NON PAZZIA
//dichiaro un array jolly

//FUNZIONE
//scrivo una funzione isCrazy con in ingresso una stringa
//dichiaro una variabile crazyornot uguale a "not crazy"
//converto phrase in un array e lo salvo in phrasearr
//e lo salvo nella variabile phrasearr
//itero su phrasearr
    //itero su jolly
        //se aphrasearr[i] e' uguale a jolly[j]
        //allora crazyornot = "not crazy"
//itero su phrasearr
    //se phrasearr[i] e' uguale a cth
    //allora crazyornot= "crazy"
//converto la stringa punctuation nell'array punctationarr
//itero su punctuation
    //se un elemento e' uguale a phrasearr[0]
    //allora crazyornot = "crazy"

const phrase = "la domenica Chtulu:::"

let subjects = ["lui", "lei", "egli", "ella"]
let question = "?!?"
let cth = "Cthulu"
let conjugations = ["are", "ere", "ire"]
let punctuation = ",.!?:;-~"

let jolly = ["church", "mare"]

function isCrazy (string) {
    let crazyornot = "a"
    let phrasearr = phrase.split(" ")
    for (i=0; i<phrasearr.length; i++) 
        for (j=0; j<jolly.length; j++) {
            if (phrasearr[i]==jolly[j]) {
                crazyornot = "not crazy"
            }
        }
    for (i=0; i<phrasearr.length; i++) {
        if(phrasearr[i]==cth) {
            crazyornot = "crazy"
        }
    }
    let punctuationarr = punctuation.split("")
    for (i=0; i<phrasearr.length; i++)
        for (j=0; j<punctuationarr.length; j++) {
            if (phrasearr[i]==punctuationarr[j]) {
                crazyornot = "crazy"
            }
        }
    return crazyornot
}



console.log(isCrazy(phrase))