/*
Meno semplice: scrivere un componente che rappresenti 
una TODO list prendendo 
gli elementi della lista da questo endpoint: 
https://jsonplaceholder.typicode.com/todos
Ogni componente deve avere una checkbox, se la checkbox 
viene flaggata il componente 
finisce in fondo alla lista e diventa piu' opaco
*/
import { useState, useEffect } from 'react'

export default function ToDoList() {
    const [quotes, setQuotes] = useEffect()

    useEffect(() => {
        async function fetchQuotes() {
            let res = await fetch('https://jsonplaceholder.typicode.com/todos')
            let json = await res.json()
            console.log(json)
            setQuotes(json)
        }
        fetchQuotes()
    }, [])

    return (
        <>
        {
            quotes.map((el) => (<ol>
                                    <li>{el.title}<input type="checkbox"></input></li>
                                </ol>))
        }
        </>
    )
}