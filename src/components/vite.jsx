import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function TemplateVite() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        border: '2px'
      }}>
        <button onClick={() => setCount(count + 1)}>
        add
        </button>

        <button onClick={() => setCount(count - 1)}>
        remove
        </button>

        <div className='number'>
          {count}
        </div>   
      </div>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
  )
}