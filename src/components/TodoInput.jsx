import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function TodoInput(){
    //useContext = joins the shared Wi-Fi | { addTodo } = from everything shared, I only want addTodo
    const { addTodo } = useContext(TodoContext);
    //useState = this component's own private memory | text = what the user has typed so far
    const [ text, setText ] = useState('');
    //
    function handleSubmit(e){
        e.preventDefault();
        if (text.trim() === ""){
            return;
        }
         addTodo(text)
         setText("")
    }
    return(
        <form onSubmit={handleSubmit}>
            {/* value = the box always shows our state | onChange = runs on every keystroke and saves what was typed */}
            <input value={text} onChange={(e) => setText(e.target.value)}></input>
            <button >Add</button>
        </form>
    )
}