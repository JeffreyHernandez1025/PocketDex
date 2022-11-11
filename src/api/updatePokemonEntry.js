import axios from "axios";
import { API_URL } from "../constants";

/**
 * Make api request for all the users' scores
 * @returns
 */
export default function updatePokemon(id, name, description, type, region) {
  const url = API_URL + "/update-pokemon-entry";
  return axios.put(url, {
    _id: id, name: name, description: description, type: type, region: region
  });
}