import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [content, setContent] = useState([]);

  

  return (
    <>
      <Nav />
      <div className="container d-flex flex-column align-items-center pt-4">
        <p>Jesus</p>
      </div>
    </>
  )
}

export default App
