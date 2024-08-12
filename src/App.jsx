import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Scroll from './components/Scroll';

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
      <Scroll />
      <div className="container d-flex flex-column pt-4">
        {content && content.length > 0 ? (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {content.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>{error}</p>
        )}
      </div>
    </>
  );
}

export default App