import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 50))
  const [numVis, setNumVis] = useState(false)
  const [guessMessage, setGuessMessage] = useState("Guess a number")
  const [guess, setGuess] = useState('')

  function handleClick() {
    if(parseInt(guess) > number) {
      setGuessMessage("Guess is too High")
    } else if(parseInt(guess) < number) {
      setGuessMessage("Guess is too LOW")
    } else if(parseInt(guess) === number) {
      setGuessMessage("CORRECT. Number has been reset to play again.")
      setNumVis(false)
      setNumber(Math.floor(Math.random() * 50))
    }
  }

  function handleVis() {
    setNumVis(!numVis)
  }
  return (
    <>
      <div>
        <h3>Let's play a guessing game</h3>
        {numVis 
          ? <h2 onClick={() => handleVis()}>Current answer: {number}</h2>
          : <h2 onClick={() => handleVis()}>Click me to reveal answer</h2>
        }
      </div>
      <div>
        {guessMessage}
      </div>
      <div>
        <input
          type='number'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={() => handleClick()}>
          Submit
        </button>
      </div>
    </>
  )
}

export default App
