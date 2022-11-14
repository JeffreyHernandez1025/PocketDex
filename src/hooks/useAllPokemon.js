import { useEffect, useState } from "react";
import getPokemon from "../api/getPokemon"
import deletePokemonEntry from "../api/deletePokemonEntry";
import createTeam from "../api/createTeam";

export default function useAllPokemon() {
    const [allPokemon, setAllPokemon] = useState([]);
    const [starterSix, setStarterSix] = useState([])


    useEffect(() => {

        async function fetchData() {
            try {
                const data = await getPokemon()
                setAllPokemon(data.data.payload)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [])

    const deletePokemon = async (id) => {
        try {
          await deletePokemonEntry(id);
          setAllPokemon(allPokemon.filter((pokemon) => pokemon._id !== id));
        } catch (e) {
          console.log(e);
        }
      };

    const teamPokemon = async (id) => {
        try{
            const response = await createTeam(id)
            // check if the new pokemon alread y is in list
            const i = starterSix.map(starter => starter._id).indexOf(response.data.payload._id);

            if(i === -1 && starterSix.length < 6){
                setStarterSix([...starterSix, response.data.payload])
            }
        }catch(e){
            console.log(e)
        }
    }
    function deselectPokemon(id) {
        setStarterSix(starterSix.filter((p) => p._id !== id))
    }

    return{
        allPokemon,
        setAllPokemon,
        deletePokemon,
        teamPokemon,
        starterSix,
        deselectPokemon,
    }
}