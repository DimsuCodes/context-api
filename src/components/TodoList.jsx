import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function TodoList(){

    //connecting the wifi and to pull from out of the todos
    {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}

    return (
        <div>
            <ul>
                
            </ul>
        </div>
    )

}