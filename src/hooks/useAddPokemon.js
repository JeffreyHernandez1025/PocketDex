import { useState } from "react";
import addPokemon from "../api/addPokemon";

export default function useAddPokemon() {
    // data for new pokemon
    const [addPoke, setAddPoke] = useState('');
    const [addName, setAddName] = useState('');
    const [addDesc, setAddDesc] = useState('');
    const [addType, setAddType] = useState('')
    const [addRegion, setAddRegion] = useState('');

    const addNewPokemon = async (pokemon, name, description, type, region) => {
        try{
             await addPokemon(pokemon, name, description, type, region)
        }catch(e){
            console.log(e)
        }
    }

    return{
        addNewPokemon,
        addPoke,
        setAddPoke,
        addName,
        setAddName,
        addDesc,
        setAddDesc,
        addType,
        setAddType,
        addRegion,
        setAddRegion,
    }
}