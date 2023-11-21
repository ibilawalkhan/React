import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>CHai our react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add value
      </button>
      <br />
      <button onClick={removeValue}>
        Remove value
      </button>
    </>
  )
}

export default App
