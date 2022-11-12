import { useEffect, useState } from "react";

export default function deletePokemon() {
  const [isDeleting, setIsDeleting] = useState(false);

  // makes api req to delete
  const deletePokemons = async (id) => {
    try {
      setIsDeleting(true);
      await deletePokemon(id);
      setAllPokemon(allPokemon.filter((pokemon) => pokemon._id !== id));
      console.log("success, we delete the score");
      setIsDeleting(false);
    } catch (e) {
      console.log(e);
      setIsDeleting(false);
    }
  };

  return {
    deletePokemons,
    isDeleting,
  };
}