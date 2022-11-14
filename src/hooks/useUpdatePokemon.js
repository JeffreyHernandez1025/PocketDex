import { useState } from "react";
import updatePokemon from "../api/updatePokemon";

export default function useUpdatePokemon() {
  const [pokeId, setPokeId] = useState('')
  const [pokeName, setPokeName] = useState('')
  const [pokeDesc, setPokeDesc] = useState('')
  const [pokeType, setPokeType] = useState('')
  const [pokeRegion, setPokeRegion] = useState('')

  const [isUpdating, setIsUpdating] = useState(false)

  const pokeEdit = async (id, name, description, type, region) => {
    try{
      const response = await updatePokemon(id, name, description, type, region)
      console.log(response)
      console.log('successfully updated')
    }catch(e){
      console.log(e)
    }
  }
  
  return{
    pokeEdit,
    pokeId,
    setPokeId,
    pokeName,
    setPokeName,
    pokeDesc,
    setPokeDesc,
    pokeType,
    setPokeType,
    pokeRegion,
    setPokeRegion,
    isUpdating,
    setIsUpdating
  }
}