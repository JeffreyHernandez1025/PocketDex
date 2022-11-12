import createTeam from "../api/createTeam";
import { useState } from "react";

export default function useCreateTeam() {
    const [selectedId, setSelectedId] = useState("");
    const [selectedPokemon, setSelectedPokemon] = useState([])
    
    const teamPokemon = async (id) => {
        try{
            const response = await createTeam(id)
            console.log("added to team successfully")
            console.log(response.data.payload)
            setSelectedPokemon(response.data.payload)
            console.log(selectedPokemon)
        }catch(e){
            console.log(e)
        }
    }
    return{
        teamPokemon,

        selectedId,
        setSelectedId,
        
    }
}