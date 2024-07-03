/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FilterContext = createContext()

export function FiltersProvider ({children}){
    const [filters, setFilters] = useState({
        category:'all',
        minPrice: 0
    })
    return(
        <FilterContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}