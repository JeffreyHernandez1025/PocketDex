import axios from "axios";
import { API_URL } from "../constants";

/**
 * Make api request for all the users' scores
 * @returns
 */
export default function deletePokemonEntry(id) {
  const url = API_URL + "/delete-pokemon-entry";
  return axios.delete(url, {
    data: {
      _id: id,
    },
  });
}