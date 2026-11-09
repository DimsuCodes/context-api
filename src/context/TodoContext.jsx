import { createContext, useReducer } from 'react'
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
export function TodoProvider({children}){
    const [todos, dispatch] = useReducer(todoReducer,[]);
                                        //type: "DELETE_TODO" = says what job to do | payload:id = says which todo
    const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });
    const toggleTodo = (id) => dispatch ({type: "TOGGLE_TODO", payload: id});
    return <TodoContext.Provider value={{ todos, deleteTodo, toggleTodo }}>{children}</TodoContext.Provider>;
}