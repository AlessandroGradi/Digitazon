//1 - Trova chi spende piu’ e chi spende meno


//SOLUZIONE PARZIALE (per una stringa con un solo reparto)
//dichiaro che la stringa fornita si chiama department1costs
//scrivo una funzione partialSum con una stringa in ingresso
//dichiaro una variabile deptot per accumulare i costi
//dichiaro una variabile arrcosts dove converto la stringa in array
//itero su arrcosts partendo da i=1
//sommo arrcosts[i] a deptot
//ritorno deptot

let department1costs = "Cancelleria 500 40 60"

function partialSum(string) {
    let deptot = 0
    let arrcosts = department1costs.split(" ")
    for (i=1; i<arrcosts.length; i++) {
        parseInt(arrcosts[i])
        deptot += arrcosts[i]
    }
    return deptot
}

console.log(partialSum(department1costs))
