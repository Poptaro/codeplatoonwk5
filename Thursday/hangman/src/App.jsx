import { useState, useEffect } from 'react'

import FrontLetter from './components/FrontLetter'
import Win from './components/Win'
import Lost from './components/Lost'

import './App.css'
import GameForm from './components/GameForm'

let guesses = {
  
}



function App() {
  const [word, setWord] = useState('')
  const [game, setGame] = useState([])
  const [displayGuesses, setDisplayGuesses] = useState([])
  const [counter, setCounter] = useState(5)
  const [playing, setPlaying] = useState(true)
  const [win, setWin] = useState(false)
  const [letterGuess, setLetterGuess] = useState('')

  useEffect(() => {
    async function getWord() {
      const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      const data = await response.json()
      const newWord = (data[0].toUpperCase())
      setWord(newWord)
      setGame(new Array(newWord.length).fill('_'))
      console.log(newWord)
    }
    getWord()
  }, [])

  // Check if player has won everytime game updates
  useEffect(() => {
    if(word && game.length > 0) {
      checkWin()
    }
  }, [game])


  
  function updateLetterGuess(newLetter) {
    let temp = displayGuesses
    temp.push(newLetter)
    setDisplayGuesses(temp)
  }

  function checkWin() {
    if(game.join('') == word) {
      console.log('win')
      setPlaying(false)
      setWin(true)
      return
    }
  }
  

  function playerGuess() {
    let letterFound = false

    //guess is not anything else besides A-Z
    if(!/^[A-Z]$/.test(letterGuess)) {
      console.log("Input A-Z")
      setLetterGuess('')
      return
    }

    //guess is not already guessed before
    if(guesses[letterGuess]) {
      console.log(`You already tried ${guesses[letterGuess]}`)
      setLetterGuess('')
      return
    }

    let temp = [...game]
    for(let i=0; i < word.length; i++) {
      if(letterGuess === word[i]) {
        temp[i] = word[i]
        letterFound = true
      }
    }

    //letterFound only becomes true if letterGuess was true
    //ELSE update setGame with proper temp as forloop does not allow state updates
    if(!letterFound) {
      guesses[letterGuess] = letterGuess
      updateLetterGuess(letterGuess)
      setCounter(counter-1)
    } else {
      guesses[letterGuess] = letterGuess
      updateLetterGuess(letterGuess)
      setGame(temp)
    }
    //game ends when counter(tries) becomes 0
    if(counter === 0) {
      setPlaying(false)
    }
    //reset guess box to ''
    setLetterGuess('')
  }
  function submit(event) {
    event.preventDefault()
    playerGuess()
  }

  return (
    <>
      <div className='text-4xl flex justify-center'>
        HangMan
      </div>
      <div>
        
      </div>
      <div className='flex flex-row justify-evenly mt-24'>
        {
          game.map((letter, index) => {
            return <FrontLetter letter={letter} key={index}/>
          })
        }
      </div>

      <div>
        {
          playing
          ?
          <GameForm submit={submit} letterGuess={letterGuess} setLetterGuess={setLetterGuess} counter={counter}/>
          : 
            win
            ?
            <Win />
            :          
            <Lost word={word} />
        }
        <div>
          {
            displayGuesses.map((letter, index) => {
              return (
                <p key={index}>{letter}</p>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
