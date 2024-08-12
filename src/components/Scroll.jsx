import { useEffect, useState } from 'react'
import './Scroll.css'

function Scroll() {
    const [scrollPercent, setScrollaPercent] = useState(10)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll())

        return window.removeEventListener('scroll', handleScroll())
    },[])
  return (
      <div className="scroll-width">
          <div className="scroll-percent" style={{width: `${scrollPercent}%`}}></div>
    </div>
  )
}

export default Scroll