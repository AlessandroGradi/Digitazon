// /*
//   Ex 3
// */

// creare l'apposita strategia per rappresentare, tramite oggetto, uno studente. Lo studente avrà:
// idMatricola: 14
// nomeCompleto: Luigi Verdi
// voti: 6, 7, 7

// Stampare in output la stringa tramite apposito algoritmo:

// il terzo voto dello studente con id 14 (Luigi Verdi) è 7


let x = {
    idMatricola: 14,
    nomeCompleto: 'Luigi Verdi',
    voti: [6,7,7]
}
console.log('il terzo voto dello studente con id' + x.idMatricola + x.nomeCompleto + 'e' + x.voti)
