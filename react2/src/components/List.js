/*
 scrivere un componente che data una frase inserita dall'utente 
 in un input text la stampi come lista puntata sotto di esso.
 */

 import { useState, useEffect } from 'react'


 export function SimplerTodoList() {
   const [todo, setTodo] = useState('')
   const [todos, setTodos] = useState([])
 
   function onButtonClick() {
     // const newTodos = Array.from(todos)
     // const newTodos = todos.slice()
     const newTodos = [...todos]
     newTodos.push(todo)
     setTodos(newTodos)
   }
 
   function onLiClick(i) {
     const newTodos = [...todos]
     newTodos.splice(i, 1)
     setTodos(newTodos)
   }
 
   return (
     <div className="container">
       <h2>Simpler todo list</h2>
       <div>
         <input
           type="text"
           value={todo}
           onChange={(e) => setTodo(e.target.value)}
         />
         <button onClick={onButtonClick}>Add</button>
         <ol>
           {
             todos.map((t, i) =>
               <li onClick={() => onLiClick(i)} key={i}>{t}</li>)
           }
         </ol>
       </div>
     </div>
   )
 }

 /*
import { useState } from "react"

export default function List() {
    const [ phrase, setPhrase ] = useState("")
    const [ word, setWord] = useState("")

    function handleClick() {
        let phrasearr = phrase.split(" ")
        for (let i=0; i<phrase.length; i++) {
            setWord = phrase[i]
            return word
        }
    }

    return (
        <div className="container">
            <h1>From phrase to list:</h1>
            <input 
                placeholder="Write here" 
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}></input>
            <button onClick={handleClick}>Convert</button>
            <ol>
                <li></li>
            </ol>
        </div>
    )
}
*/