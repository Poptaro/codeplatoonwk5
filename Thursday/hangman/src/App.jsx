import { useState, useEffect } from 'react'

import Man from './components/Man'
import Win from './components/Win'
import Lost from './components/Lost'
import GameForm from './components/GameForm'
import GameLetters from './components/GameLetters'
import GameLettersGuesses from './components/GameLettersGuesses'

import './App.css'

let guesses = {}

export default function App() {
  const [word, setWord] = useState('')
  const [game, setGame] = useState([])

  const [displayGuesses, setDisplayGuesses] = useState([])
  const [counter, setCounter] = useState(5)
  const [playing, setPlaying] = useState(true)
  const [win, setWin] = useState(false)
  const [letterGuess, setLetterGuess] = useState('')
  const [trigger, setTrigger] = useState(0)

  function resetGame(){
    setDisplayGuesses([])
    setCounter(5)
    setPlaying(true)
    setWin(false)
    setLetterGuess('')
    setTrigger((prev) => prev+1)
    guesses = {}
    console.log('clicked reset')
  }

  useEffect(() => {
    async function getWord() {
      const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      const data = await response.json()
      const newWord = (data[0].toUpperCase())
      console.log(newWord)

      setWord(newWord)
      let temp = new Array(newWord.length).fill('_')
      setGame(temp)

    }
    getWord()
  }, [trigger])

  // Check if player has won everytime game updates
  useEffect(() => {
    if(word && game.length > 0) {
      checkWin()
    }
  }, [game])

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

    function updateLetterGuess(newLetter) {
      let temp = displayGuesses
      temp.push(newLetter)
      setDisplayGuesses(temp)
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
      <div className='text-6xl flex justify-center'>
        HangMan
      </div>
      <Man counter={counter} win={win}/>
      <div>
      <GameLetters game={game}/>
        {
          playing
          ?
          <GameForm submit={submit} letterGuess={letterGuess} setLetterGuess={setLetterGuess} counter={counter}/>
          :
            win
            ?
            <Win resetGame={resetGame}/>
            :          
            <Lost word={word} resetGame={resetGame} />
        }
        <GameLettersGuesses displayGuesses={displayGuesses}/>
      </div>
    </>
  )
}
