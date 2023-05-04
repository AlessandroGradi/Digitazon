/*
Scrivere una funzione AND che si comporti come l'and nei booleani 
(&&) e accetti un numero qualsiasi di parametri
AND(true, false)
AND(true)
AND(false)
AND(false, true, true, true, false)
AND(false, true, true, true, false, false, true, true, true, false)
AND(false, true, true, true, false, false, true, true, true, false,
false, true, true, true, false, false, true, true, true, false,false, 
true, true, true, false, false, true, true, true, false,false, true, 
true, true, false, false, true, true, true, false,false, true, true, 
true, false, false, true, true, true, false,false, true, true, true, 
false, false, true, true, true, false)
*/

//pseudocodice
//itero sugli elementi dell'array (...t)
//m

function and(...t) {
    let result = t[0]
    for (let i=1; i<t.length; i++) {
        result = result&&t[i]
    }
    return result
}

console.log(and(true, false))

/*
t + t = t
t + f = f
f + t = f
f + f = f
*/


