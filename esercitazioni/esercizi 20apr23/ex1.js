/*
Ex 1

Utilizzando un'apposita strategia e utilizzando il ciclo WHILE, 
stampare i numeri da 20 a 15 (scalando) omettendo il numero 19
*/

/*
const a = 20
const b = 15

for (i<=a-1; i>=b; i--) {
    return i
}

console.log(i)
*/

let i = 20
while (i>=15) {
    if (i!=19) {
        console.log(i);
    }
    i--
}