// scrivere una funzione chiamata countVowels che 
// data una stringa in ingresso
// ritorni il numero di vocali presenti nella stringa

let word = "po po po"
let vowels = ['a', 'e', 'i', 'o', 'u']


function countVowels(word, vowels) {
    let count = 0
    for (i=0; i<word.length; i++) {
        for (z=0; z<vowels.length; z++)
            if (word[i]==vowels[z]) {
                count++
            }
    }
    return count
}

console.log(countVowels(word, vowels))

/*
i   x
0




*/