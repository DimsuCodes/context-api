

function todoReducer(state, action){

    switch(action.type){
        case "ADD_TODO": 
             return [...state, action.payload]; //todo array;
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "TOGGLE_TODO":
            return state;
        case "EDIT_TODO":
            return state;
        case "CLEAR_COMPLETED":
            return state.filter((todo) => !todo.completed);
        default: return state;
    }

    
}