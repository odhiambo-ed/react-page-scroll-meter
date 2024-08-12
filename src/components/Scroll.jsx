import { useState } from 'react'
import './Scroll.css'

function Scroll() {
    const [scrollPercent, setScrollaPercent] = useState(10)
  return (
      <div className="scroll-width">
          <div className="scroll-percent" style={{width: `${scrollPercent}%`}}></div>
    </div>
  )
}

export default Scroll