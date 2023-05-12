import { useState } from 'react'

export default function Contatore() {
    const [count, setCount] = useState(0)

}

function Counter() {
    setCount(count+1)
}