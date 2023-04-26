// scrivere una funzione chiamata sum che 
// dato un array di numeri in ingresso
// ritorni la somma dei numeri contenuti nell'array -->

//sommo ogni numero a quello successivo

let arr = [1, 2, 3, 4]
let s = arr[0]
function sum(arr) {
    for (i=0; i<arr.length; i++) {
        s += arr[++i]
    }
    return s
}

console.log(sum(arr))