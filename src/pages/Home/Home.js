import react from 'react'
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div>
            <div style={{flexDirection: 'column', display: 'flex'}}>
            <h1> this is the home page </h1>
            <Link to='/team'>Team</Link>
            <Link to='/update-pokemon'>Update</Link>
            <Link to='/add-pokemon'>New Pokemon Entry</Link>
            </div>
        </div>
    )
}