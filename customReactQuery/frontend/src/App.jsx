import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()

  }, [])

  if (error) {
    return <h1>Something went wrong </h1>
  }

  return (
    <div>
      <h2>Number of Products are: {products.length}</h2>
    </div>
  )
}

export default App
