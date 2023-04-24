// scrivere una funzione chiamata countVowels che 
// data una stringa in ingresso
// ritorni il numero di vocali presenti nella stringa

let word = 'angostura'
let vowels = ['a', 'e', 'i', 'o', 'u']


function countVowels(word, vowels) {
    let x = 0
    for (i=0; i<word.length; i++) {
        for (z=0; z<vowels.length; z++)
            if (word[i]==vowels[z]) {
                x++
            }
    }
    return x
}

console.log(countVowels(word, vowels))

/*
i   x
0




*/