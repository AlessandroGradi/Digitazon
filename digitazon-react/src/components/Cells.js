/*
si richiede di creare un componente che sia la versione estremamente 
semplificata di una riga di Excel. 
Si devono creare n input dove n e' una prop, ogni qualvolta un input 
cambia si deve salvare nello stato:
 * il numero totale di celle che hanno un valore al loro interno
 * un array con tutti i valori nelle celle
*/



import { useState } from 'react'

function CreateCells({value}) {
    const [nCells, setNCells] = useState(1)
    return (
        <div value="">
            <input class="cell"></input>
        </div>
    )
}

export default function Cells() {
    return (
        <input class="howmanycells" placeholder="How many cells do you need?"></input>
    )
}





