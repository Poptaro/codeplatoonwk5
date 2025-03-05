


export default function PokemonCard({ pokemonData }) {
  if(!pokemonData) {
    return (
      <>
        <p className="text-xl h-24">Pokemon image card placeholder</p>
      </>
    )
  }
  return (
    <>
      <img
        src={pokemonData.sprites.front_default}
        alt="pokemon image"
        className="h-24"
      />
    </>
  )
}