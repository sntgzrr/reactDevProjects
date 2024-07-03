/* eslint-disable react/prop-types */
import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters (){
    const { filters, setFilters } = useFilters()

    const minPriceFilterMinId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterMinId}>Precio a partir de:</label>
                <input 
                type="range" 
                id={minPriceFilterMinId}
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}/>
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}