import { useState, useEffect } from "react"
import axios from "axios"

//pokemon url: https://pokeapi.co/api/v2/pokemon
//random cat gif: https://cataas.com/cat/gif
//harry potter: http://hp-api.herokuapp.com/api/characters/1

const Fetching = () => {

  const [ count, setCount ] = useState(0)
  const [ pokemons, setPokemons ] = useState([])
  const [ char, setChar ] = useState({})

  //steps for fetching data:
  //1. Write an async function
  //2. Make a request to axios
  //3. Call the function inside useEffect 
  //4. Check the response
  //5. Put it in local state

  //this response is an array
  const getPokemons = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    // console.log("response", response)
    setPokemons(response.data.results)
  }

  //this response is an object
  const getOneCharacter = async () => {
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/got/characters/1")
    console.log("response", response)
    setChar(response.data)
  }

  //takes two arguments: function and empty array
  useEffect(() => { 
    getPokemons()
    getOneCharacter()
  }, []) //no []: always runs, with []: runs once, with [variable]: runs whenever the variable changes


  return (
    <div>
      <h2>Fetching Data</h2>  
      {char.name}  {/* displaying an object */}
      <p>Current count: {count} <button onClick={() => setCount(count + 1)}>+ 1</button></p>
      {!pokemons ? "Loading" : pokemons.map(pokemon => <h3>{pokemon.name}</h3>) }
    </div>
  )
}

export default Fetching