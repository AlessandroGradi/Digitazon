/*
 Ex 2
data la stringa 'Riccardo'
realizzare l'apposita strategia per stampare in output 
l'ultimo carattere maiuscolo concatenato a un underscore 
e al primo carattere minuscolo:

O_r 
*/

//creare la stringa
//

let a = "Riccardo"

let firstLast = a.charAt((a.length)-1).toUpperCase() + '_' + a.charAt(0).toLowerCase()

console.log(firstLast)

