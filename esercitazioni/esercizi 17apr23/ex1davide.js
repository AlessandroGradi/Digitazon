const a1 = [10, 'ciao', true, 20, 'js', 4]
let somma = 0

a1.forEach(function(Elemento) {
    if (typeof Elemento == 'number') {
        somma += Elemento;
    }
})

console.log(`La somma è ${somma}`);