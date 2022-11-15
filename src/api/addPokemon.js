import axios from "axios";
import { API_URL } from "../constants";

/**
 * Make api request for all the users' scores
 * @returns
 */


export default function addPokemon(pokemon, name, description, type, region) {
  const url = API_URL + "/add-pokemon-entry";
  return axios.post(url, {
    pokemon: pokemon,
    name: name, 
    description: description, 
    type: type, 
    region: region
  });
}