// TRACCIA---------------------------------------------------------
// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve stampare una scacchiera di lato l
// contenente '#' e ' ', opportunamente alternati


// ASTRAZIONE--------------------------------------------------------
// per stampare una riga:
// ricevo inungresso l, che e' la lunghezza della riga
// inizio col cancelletto e lo memorizzo in RIGA
// ULTIMO e' true
// ciclo da 0 a 1 escluso
// metto dentro RIGA un cerchio se l'ultimo era un cancelletto
// oppure metto dentro RIGA un cancelletto se l'ultimo era una riga
// inverto ULTIMO
// fine


//CODICE ALBERTO-----------------------------------------------------------

function row(l) {
    let toggle = false
    let riga = ' '
    for (let i=0; i<l; i++) {
        if (toggle) {
            riga += 'o'
        } else {
            riga += '#'
        }
        toggle=!toggle
    }
    return riga
}

// disegnare la scacchiera
// utilizzo row chiamandolo l volte
// detto in altro modo: 
// ciclo l volte e ad ogni iterazione chiamo row passandogli l e stamopo il risultato

function chessboard(l) {
    let toggle= false
    for (let i=0; i<l; i++) {
        console.log(row(l, toggle))
        toggle = !toggle
    }
}

console.log(row(5))
console.log ('-----------------------------')
console.log(chessboard(5))




// CODICE FILIPPO------------------------------------------------------------
// function chessboard(l) {
//     if (typeof l != 'number') console.log('la variabile in ingresso non è un numero')
//     for (i = 0; i < l; i++) {
//         let row = ''
//         for (j = 0; j < l; j++) {
//             if (i % 2 == j % 2) row += '#'
//             if (i % 2 != j % 2) row += ' '
//         }
//         console.log(row)
//         }
//     }

// let l = '8'
// chessboard(l)