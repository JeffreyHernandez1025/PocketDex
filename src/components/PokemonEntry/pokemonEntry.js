import styled from "styled-components";
import useCreateTeam from "../../hooks/useCreateTeam";
import { useState } from "react";
import updatePokemonEntry from "../../api/updatePokemonEntry"
const PokemonWrapper = styled.div`
  background-color: blue;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  text-align: center;
  width: 275px;
  height: 70px;
  margin-bottom: 50px;
  opacity: 0.75;
  transition: all ease-in-out 300ms;
  p {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const DeleteButton = styled.button`
  color: #fff;
  background-color: red;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  outline: none;
  border-color: red;
  border-style: solid;
  &:hover {
    cursor: pointer;
  }
`;

const Select = styled.button`


&:hover {
  cursor: pointer;
}
`;

export default function PokemonEntry(props) {

  function inTeam(id) {
 
    console.log(id)

    props.teamPokemon(id)
  }

  return (
    <PokemonWrapper>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.type}</p>
      <p>{props.region}</p>
      <button onClick={() => {
        console.log("hit selected")
        inTeam(props._id)
      }}> select </button>
      <button onClick={() => {
        console.log('deselect hit')
      }}> deselect </button>
    </PokemonWrapper>
  )
}



