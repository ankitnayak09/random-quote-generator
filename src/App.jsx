import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState(null)
  // const [bgColor, setBgColor] = useState("")

  function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
    document.body.style.backgroundColor = generateRandomColor()
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="App">
      <div className="quote-card">
        <h3 className='quote'>"{!quote ? " " : quote.content}"</h3>
        {/* <h4 style={{ fontStyle: 'italic' }}>{quote}</h4> */}
        <button onClick={() => getQuote()}>Another Quote</button>
      </div>
    </div>
  )
}

export default App
