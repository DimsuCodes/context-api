import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function TodoList(){
    //connecting to the wifi and pulling out the todos
    const { todos } = useContext(TodoContext); //connects to the wi-fi and gets the todos

    return (
        <div>
            <ul>
                {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)} {/*so that our todos show on screen */}
            </ul>
        </div>
    )
}