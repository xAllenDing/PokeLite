import axios from "axios";

async function getPokemon (id)
{
    const res = await axios.get("https://pokeapi.co/api/v2/") 
    console.log(res)
}

export default getPokemon