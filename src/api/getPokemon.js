import axios from 'axios';
import { API_URL } from '../constants';

/**
 * Make api request for all the users' scores
 * @returns 
 */
export default function getPokemon(){
    const url =  API_URL + '/all-pokemon-entries';
    return axios.get(url);
}