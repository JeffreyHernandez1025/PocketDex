import { useState } from "react";
import addPokemon from "../api/addPokemonEntry";

export default function useAddPokemon() {
    // data for new pokemon
    const [addName, setAddName] = useState('');
    const [addDesc, setAddDesc] = useState('');
    const [addType, setAddType] = useState('')
    const [addRegion, setAddRegion] = useState('');

    const addNewPokemon = async (name, description, type, region) => {
        try{
            const response = await addPokemon(name, description, type, region)
            console.log(response)
            console.log('successfully added')
        }catch(e){
            console.log(e)
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
    }
}