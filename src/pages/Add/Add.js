import react from 'react'
import { Link } from "react-router-dom";

export default function Add() {

    return(
        <div>
            <h1> this is the add page </h1>
            <div style={{flexDirection: 'column', display: 'flex'}}>
            <Link to='/team'>Team</Link>
            <Link to='/'>Home</Link>
            <Link to='/update-pokemon'>Update Pokemon Entry</Link>
            </div>
        </div>
    )
}