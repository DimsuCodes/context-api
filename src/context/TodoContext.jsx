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
    const clearCompleted = () => dispatch({type: "CLEAR_COMPLETED"})
    //payload is a small box holding two things: id = which todo | text = the new words (reducer reads action.payload.id and action.payload.text)
    const editTodo = (id, newText) => dispatch({type: "EDIT_TODO", payload: {id: id, text: newText} })
    const addTodo = (text) =>  dispatch({type: "ADD_TODO", payload: {id: Date.now(), text: text, completed: false}})
    return <TodoContext.Provider value={{ todos, deleteTodo, toggleTodo, clearCompleted, editTodo, addTodo }}>{children}</TodoContext.Provider>;
}

