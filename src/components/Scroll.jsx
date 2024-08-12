import { useEffect, useState } from 'react'
import './Scroll.css'

function Scroll() {
    const [scrollPercent, setScrollPercent] = useState(10)

    const handleScroll = () => {
        const scrollPosition = document.documentElement.scrollTop
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const percent = (scrollPosition / totalHeight) * 100

        setScrollPercent(percent)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])
    
    console.log(scrollPercent)
  return (
      <div className="scroll-width">
          <div className="scroll-percent" style={{width: `${scrollPercent}%`}}></div>
    </div>
  )
}

export default Scroll