import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [content, setContent] = useState([]);
  const [error, setError] = useState("")

  async function fetchData() {
    try {
      const url = "https://dummyjson.com/products?limit=150";
      const res = await fetch(url);
      const data = await res.json()
      console.log(data)

       if (data && data.products) {
         setContent(data.products);
       }
    } catch(e) {
      setError(() => e.message)
    }
  }

  useEffect(() => {
      fetchData();
    },[]);

  return (
    <>
      <Nav />
      <div className="container d-flex flex-column pt-4">
        {
          content && content.length > 0 ? 
            content.map((item) => (
              <p key={item.id}>{ item.title }</p>
          ))
            :
            <p>{ error }</p>
        }
      </div>
    </>
  )
}

export default App
