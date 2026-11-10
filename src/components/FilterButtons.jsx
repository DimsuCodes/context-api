import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export default function FilterButtons() {
    //connect to the filter Wi-Fi and grab the function that changes the filter word
    const { setFilter } = useContext(FilterContext);

    return (
        <div>
            {/* each button changes the filter word when clicked */}
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
    )
}