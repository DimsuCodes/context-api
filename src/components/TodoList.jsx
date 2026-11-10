import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList(){
    //connecting to the wifi and pulling out the todos
    const { todos } = useContext(TodoContext); //connects to the wi-fi and gets the todos

    return (
        <div>
            <ul>
                {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)} {/*so that our todos show on screen */}
            </ul>
        </div>
    )
}