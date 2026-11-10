import FilterButtons from "./components/FilterButtons";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App(){
    return(
        <div>
            <h1>Todo App</h1>
            <TodoInput/>
            <FilterButtons />
            <TodoList/>
        </div>
    )
}