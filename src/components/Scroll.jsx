import './Scroll.css'

function Scroll() {
  return (
      <div className="scroll-width">
          <div className="scroll-percent" style={{width: `${scrollPercent}%`}}></div>
    </div>
  )
}

export default Scroll