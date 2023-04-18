/* creare una funzione getMaxMinAsArray che prende in ingresso un array di 6 numeri e 
restiuisce un array di 2 numeri: 
il primo, che rappresenta il numero più piccolo del primo array, 
e il secondo che rappresenta il numero più grande del primo array.

Richiamare la funzione getMaxMinAsArray con un array di 6 numeri a piacere, 
salvare l'array restituito dalla funzione e stampare il numero più grande e più piccolo 
con un apposito messaggio */

/*
            creo la mappa m1 con le caratteristiche indicate
            creo la mappa m2 con le caratteristiche indicate
            faccio il primo foreach
            faccio il secondo foreach
            confronto le velocità massime delle due automobili e stampo il modello di quella più veloce
        */
       const m1 = new Map([
         [ 'model', 'Panda' ],
         [ 'maxSpeed', 250 ],
         [ 'price', 1000 ]
       ])

       const m2 = new Map([
         [ 'model', 'Audi' ],
         [ 'maxSpeed', 200 ],
         [ 'price', 5000 ]
       ])

       function fn(value, key) {
        console.log( ${key}: ${value} );
       }

       m1.forEach( fn )
       m2.forEach( fn )

       const maxSpeedM1 = m1.get('maxSpeed')
       const maxSpeedM2 = m2.get('maxSpeed')
       let macchinaPiuVeloce = null

       if( maxSpeedM1 > maxSpeedM2 ) {
        macchinaPiuVeloce = m1
       } 
       else {
        macchinaPiuVeloce = m2
       }

    console.log( 'la macchina piu veloce è: ' + macchinaPiuVeloce.get('model') );