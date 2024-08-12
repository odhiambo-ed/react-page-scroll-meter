import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [content, setContent] = useState([]);

  

  return (
    <>
      <Nav />
      <div className="container d-flex flex-column pt-4">
        <p className='text-start'>Jesus</p>
      </div>
    </>
  )
}

export default App
