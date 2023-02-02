import { useState, useEffect } from 'react'
import './App.css'
import QuoteCard from './QuoteCard';
import Buttons from './Buttons';

function App() {
  const [quote, setQuote] = useState(null)
  // const [bgColor, setBgColor] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  const getQuote = () => {
    setIsLoading(true)
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content)
        setIsLoading(false)
        document.body.style.backgroundColor = generateRandomColor()
      })
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <div className="quote-card">
        <QuoteCard quote={quote} isLoading={isLoading} />
        {/* <h4 style={{ fontStyle: 'italic' }}>{quote}</h4> */}
        <Buttons getQuote={getQuote} />
      </div>
      <footer>Developed By <a href="https://github.com/ankitnayak09" target="_blank">Ankit Nayak</a></footer>
    </div>
  )
}

export default App
