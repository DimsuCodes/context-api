import { createContext, useReducer, useEffect, useCallback, useMemo } from 'react'
export const TodoContext = createContext() //created channel


//the reducer
//the helper function
function todoReducer(state, action){

    switch(action.type){
        case "ADD_TODO": 
             return [...state, action.payload]; //todo array;
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "TOGGLE_TODO":
            return state.map((todo) => todo.id === action.payload ? {...todo, completed : !todo.completed}: todo);
        case "EDIT_TODO":
            return state.map((todo) => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo);
        case "CLEAR_COMPLETED":
            return state.filter((todo) => !todo.completed);
        default: return state;
    }


}
//DISCLAIMER: the localStorage code, useMemo and useCallback in this provider were written by Claude (AI)
//rehydrate: when the app opens, load saved todos from localStorage (or start with an empty list)
function loadTodos(){
    try {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    } catch {
        return []; //if the saved data is broken, start fresh instead of crashing
    }
}

export function TodoProvider({children}){
    //3rd input runs loadTodos once, so the starting toy box comes from localStorage
    const [todos, dispatch] = useReducer(todoReducer, [], loadTodos);

    //persist: every time todos change, save them to localStorage (it only stores strings, so JSON.stringify)
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    //useCallback = keep the same function each render instead of making a new one
                                        //type: "DELETE_TODO" = says what job to do | payload:id = says which todo
    const deleteTodo = useCallback((id) => dispatch({ type: "DELETE_TODO", payload: id }), []);
    const toggleTodo = useCallback((id) => dispatch ({type: "TOGGLE_TODO", payload: id}), []);
    const clearCompleted = useCallback(() => dispatch({type: "CLEAR_COMPLETED"}), [])
    //payload is a small box holding two things: id = which todo | text = the new words (reducer reads action.payload.id and action.payload.text)
    const editTodo = useCallback((id, newText) => dispatch({type: "EDIT_TODO", payload: {id: id, text: newText} }), [])
    const addTodo = useCallback((text) =>  dispatch({type: "ADD_TODO", payload: {id: Date.now(), text: text, completed: false}}), [])

    //useMemo = only build a new value object when todos change, so components don't re-render for no reason
    const value = useMemo(
        () => ({ todos, deleteTodo, toggleTodo, clearCompleted, editTodo, addTodo }),
        [todos, deleteTodo, toggleTodo, clearCompleted, editTodo, addTodo]
    );

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

