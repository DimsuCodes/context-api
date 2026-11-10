import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { FilterContext } from "./context/FilterContext";

export default function App(){
    return(
        <div>
            <h1>Todo App</h1>
            <TodoInput/>
            <TodoList/>
            <FilterContext/>
        </div>
    )
}