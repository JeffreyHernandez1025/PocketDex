import react from 'react'
import { Link } from "react-router-dom";

export default function Team() {

    return(
        <div>
            <h1> this is the team page </h1>
            <div style={{flexDirection: 'column', display: 'flex'}}>
            <Link to='/'>Home</Link>
            <Link to='/update-pokemon'>Update</Link>
            <Link to='/add-pokemon'>New Pokemon Entry</Link>
            </div>
        </div>
    )
}