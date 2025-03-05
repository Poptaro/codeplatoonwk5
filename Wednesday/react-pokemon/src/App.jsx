import { useState } from 'react'
import './App.css'
import PokemonCard from './components/pokemonCard'

function App() {

  const [pokemonName, setPokemonName] = useState('')
  const [pokemonData, setPokemonData] = useState('')
  const [extraPokemon, setExtraPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchPokemon(pokemonName = Math.floor(Math.random() * 1025)) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      const data = await response.json()
      return data
    } catch(error) {
      console.log(error)
    }
  }
  async function fetchPokemonByType(type) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
      const data = await response.json()
      return data
    } catch(error) {
      console.log(error)
    }
  }

  async function submit(event) {
    setIsLoading(true)
    event.preventDefault()
    let returner
    if(pokemonName.length == 0) {
      returner = await fetchPokemon()
    } else {
      returner = await fetchPokemon(pokemonName)

    }
    //Main found pokemon
    setPokemonData(returner)
    setPokemonName('')

    //5 extra pokemon of same main type of searched pokemon
    let assist = []
    let type = returner.types[0].type.name
    let newSet = await fetchPokemonByType(type)
    let repeats = {}
    for(let i=0 ;i < 5; i++) {
      let randomPokemonTypeName = newSet.pokemon[Math.floor(Math.random() * newSet.pokemon.length)].pokemon.name
      while(repeats[randomPokemonTypeName]) {
        randomPokemonTypeName = newSet.pokemon[Math.floor(Math.random() * newSet.pokemon.length)].pokemon.name
      }
      repeats[randomPokemonTypeName] = true


      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonTypeName}`)
      const data = await response.json()
      assist.push(data)
    }
    console.log(assist)
    setExtraPokemon(assist)
    setIsLoading(false)
  }

  return (
    <>
      <div>
        <p className="text-5xl">Pokemon sprite generator</p>
      </div>
      <div className="text-3xl flex justify-center">
        { 
          isLoading 
          ? <p className='h-24'>LOADING</p>
          : <PokemonCard pokemonData={pokemonData} />
        }
      </div>
      <div className='flex justify-center'>
        <form onSubmit={submit} className='flex flex-col'>
          <input 
            type='text'
            value={pokemonName}
            onChange={(event) => {
              setPokemonName(event.target.value)
            }}
            className='border-2'
          />
          {
            isLoading
            ?  <p>wait</p>
            :  <button className='border-2 rounded-lg'>Submit</button>
          }
          <span className='pb-8'></span>
        </form>
      </div>
      <div className='flex justify-evenly'>
        {
          extraPokemon.map(pokemon => {
            return <PokemonCard pokemonData={pokemon} key={pokemon.name}/>
          })
        }
      </div>
    </>
  )
}

export default App
