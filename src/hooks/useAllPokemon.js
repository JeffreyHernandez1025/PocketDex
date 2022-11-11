import { useEffect, useState } from "react";
import getPokemon from "../api/getPokemon"

export default function useAllPokemon() {
    const [allPokemon, setAllPokemon] = useState([]);
    const [isDeleting, setIsDeleting] = useState([]);

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
    
    return{
        allPokemon,
    }
}