import { useState } from "react";
import addPokemon from "../api/addPokemon";

export default function useAddPokemon() {
    // data for new pokemon
    const [addName, setAddName] = useState('');
    const [addDesc, setAddDesc] = useState('');
    const [addType, setAddType] = useState('')
    const [addRegion, setAddRegion] = useState('');

    const addNewPokemon = async (name, description, type, region) => {
        try{
            const response = await addPokemon(name, description, type, region)
            console.log('successfully added')
            console.log(response)
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