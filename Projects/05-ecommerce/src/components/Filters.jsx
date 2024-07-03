/* eslint-disable react/prop-types */
import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters (){
    const { setFilters } = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterMinId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) =>{
        setMinPrice(event.target.value)
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
                onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
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