import axios from "axios";
import { API_URL } from "../constants";

/**
 * Make api request for all the users' scores
 * @returns
 */
export default function addPokemon(id, name, description, type, region) {
  const url = API_URL + "/add-pokemon-entry";
  return axios.post(url, {
    _id: id, name: name, description: description, type: type, region: region
  });
}