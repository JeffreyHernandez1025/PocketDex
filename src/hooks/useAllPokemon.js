import { useEffect, useState } from "react";
import getPokemon from "../api/getPokemon"
import deletePokemonEntry from "../api/deletePokemonEntry";
import createTeam from "../api/createTeam";

export default function useAllPokemon() {
    const [allPokemon, setAllPokemon] = useState([]);
    const [isDeleting, setIsDeleting] = useState([]);
    const [starterSix, setStarterSix] = useState([])

    useEffect(() => {
        console.log("test")

        async function fetchData() {
            try {
                const data = await getPokemon()
                console.log("success")
                console.log(data)
                setAllPokemon(data.data.payload)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [])

    const deletePokemons = async (id) => {
        try {
          setIsDeleting(true);
          await deletePokemonEntry(id);
          setAllPokemon(allPokemon.filter((pokemon) => pokemon._id !== id));
          console.log("success, we delete the score");
          setIsDeleting(false);
        } catch (e) {
          console.log(e);
          setIsDeleting(false);
        }
      };

    const teamPokemon = async (id) => {
        try{
            const response = await createTeam(id)
            console.log("added to team successfully")
            console.log(response.data.payload)
            setStarterSix([...starterSix, {}])
            console.log('help')
            console.log([...starterSix, response.data.payload])
        }catch(e){
            console.log(e)
        }
    }

    return{
        allPokemon,
        deletePokemons,
        isDeleting,
        teamPokemon
    }
}