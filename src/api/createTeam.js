import axios from "axios";
import { API_URL } from "../constants";

export default function createTeam(id) {
const url = API_URL + "/get-selected-id"
return axios.post(url, {
    data: {
    _id: id
}
})

}