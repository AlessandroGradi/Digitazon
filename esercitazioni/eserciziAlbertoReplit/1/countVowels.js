// scrivere una funzione chiamata countVowels che 
// data una stringa in ingresso
// ritorni il numero di vocali presenti nella stringa

let word = 'angostura'
let vowels = ['a', 'e', 'i', 'o', 'u']


function countVowels(word) {
    let x = 0
    for (i=0; i<word.length; i++) {
        if (i==vowels[i]) {
            x++
        }
    }
    return x
}

console.log(countVowels(word))

/*
i   x
0




*/