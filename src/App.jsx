import { useContext } from "react";
import FilterButtons from "./components/FilterButtons";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeContext } from "./context/ThemeContext";

export default function App(){
    //connect to the theme Wi-Fi to read the current theme word
    const { theme } = useContext(ThemeContext);

    return(
        //className becomes "app light" or "app dark", and index.css colors each one
        <div className={`app ${theme}`}>
            <h1>Todo App</h1>
            <ThemeToggleButton />
            <TodoInput/>
            <FilterButtons />
            <TodoList/>
        </div>
    )
}
