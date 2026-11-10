import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { FilterContext } from '../context/FilterContext'
import TodoItem from './TodoItem'

export default function TodoList(){
    //connecting to the wifi and pulling out the todos
    const { todos } = useContext(TodoContext); //connects to the wi-fi and gets the todos
    //connects to the filter wi-fi and gets the filter word ("all", "active" or "completed")
    const { filter } = useContext(FilterContext);

    //keep only the todos that match the filter word
    const visibleTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed; //not done yet
        if (filter === "completed") return todo.completed; //done
        return true; //"all" keeps everything
    });

    return (
        <div>
            <ul>
                {visibleTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)} {/*so that our todos show on screen */}
            </ul>
        </div>
    )
}