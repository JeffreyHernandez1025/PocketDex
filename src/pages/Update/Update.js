import react from 'react'
import { Link } from "react-router-dom";

export default function Update() {

    return(
        <div>
            <h1> this is the update page </h1>
            <div style={{flexDirection: 'column', display: 'flex'}}>
            <Link to='/team'>Team</Link>
            <Link to='/'>Home</Link>
            <Link to='/add-pokemon'>New Pokemon Entry</Link>
            </div>
        </div>
    )
}