// scrivere una funzione chiamata alfabetoStrambo che 
// data una stringa in ingresso
// ritorni una copia della stringa modificata come negli esempi

// ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
// ad esempio con "" ritorna ""
// ad esempio con "ad esempio" ritorna "ad esempioro"
// ad esempio con "funziona solo con vocali alla fine" ritorna 
// "funzionara soloro con vocaliri allara finere"

//scrivo una funzione alfabetoStrambo con una stringa in ingresso
//uso il metodo split con chiave spazio su tutta la stringa str
//itero su tutti gli elementi dell'array arrstr
    //uso il metodo split su ogni stringa
    //se all'indice zero dell'array c'e' una vocale
        //allora la salvo in una variabile lastchar
        //la sostituisco con una 'r'
        //aggiungo la variabile lastchar


let str = "ciao a tutti"
let vowels = ["a", "e", "i", "o", "u"]
function alfabetoStrambo(str) {
    let arrstr = str.split(" ")
    console.log(arrstr)
    for (let i=0; i<str.length-1; i++) {
        let arrstr2 = arrstr[i].split("")
        console.log(arrstr2)
        for (let j=0; j<vowels.length; j++) {
            if (vowels[j]==str[0]) {
                let a= str[0]
                return lastchar
            }
        }
    }
}
console.log(alfabetoStrambo(str))