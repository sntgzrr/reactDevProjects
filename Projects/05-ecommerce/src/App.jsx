import { useState } from 'react'
import './App.css'
import { Products } from './components/Products.jsx'
import { products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.jsx'

function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts} = useFilters()
  
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts}></Products>
      {IS_DEVELOPMENT && <Footer filters={filters}></Footer>}
    </>
  )
}

export default App
