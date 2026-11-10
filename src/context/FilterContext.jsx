import { createContext, useState } from 'react'
//The channel
export const FilterContext = createContext();
//The router
export function FilterProvider({ children }) {
  const [filter, setFilter] = useState('all'); //filter state can only have all, active, completed.
  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
}