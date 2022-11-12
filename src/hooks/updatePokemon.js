import { useState } from "react";
import addPokemon from "../api/addPokemon";

export default function updatePokemon() {
    // data for new pokemon
    const [isEditing, setIsEditing] = useState(false);

  function updatePokemon(name, userpokemon, pokemon){
    const pokemonNames = allPokemon.map((pokemon)=>{return pokemon.name})
    console.log(allPokemon)
    const index = pokemonNames.indexOf(name)
    console.log(pokemonNames)
    console.log("the index is " + index)
    if(index !== -1){
      setAllScores([...allPokemon.filter((userpokemon,i)=>{
        if (index === i) {
          userpokemon.name = name;
          userpokemon.description = description;
          userpokemon.type = type;
          userpokemon.region = region; 
        }
        return userpokemon
      })]);
    }
  }

    return{
        addNewPokemon,
        addName,
        setAddName,
        addDesc,
        setAddDesc,
        addType,
        setAddType,
        addRegion,
        setAddRegion,
        updatePokemon,
    }
}