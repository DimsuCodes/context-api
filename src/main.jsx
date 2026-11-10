import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//TodoProvider is our Wi-Fi router: it holds the todos and the functions that change them
import { TodoProvider } from './context/TodoContext.jsx'
import { FilterProvider } from './context/FilterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrapping App plugs in the Wi-Fi: App and everything inside it can now connect with useContext. App becomes the {children} in TodoProvider */}
    <TodoProvider>
      <FilterProvider> {/* FilterProvider shares the filter word ("all", "active" or "completed") with the whole app */}
        <App />
      </FilterProvider>
    </TodoProvider>
  </StrictMode>,
)
