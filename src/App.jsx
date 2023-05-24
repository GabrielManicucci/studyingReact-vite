
import { useState } from 'react'
import './App.css'
import Content from './components/content'

function App() {
  const [number, setNumber] = useState(0)

  function addNumber() {
    setNumber(number + 1)
  }

  return (
    <div className='root'>
      <Content number={number} setNumber={addNumber} /> 
      <Content number={number} setNumber={addNumber} /> 
    </div>
  )
}

export default App
