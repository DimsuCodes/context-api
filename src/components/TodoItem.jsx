import { useContext } from 'react'
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ todo }) {

    //to connect to the wifi
    const { toggleTodo, deleteTodo } = useContext(TodoContext); //connecting to the wifi to grab the todos

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>


    )
}