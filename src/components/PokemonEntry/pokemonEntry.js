import styled from "styled-components";
import { useState } from "react";
import deletePokemons from "../../hooks/deletePokemon"
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
  const [isSelected, setIsSelected] = useState(false)
  return (
    <PokemonWrapper>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.type}</p>
      <p>{props.region}</p>
      <DeleteButton
        onClick={() => {
          console.log("hit delete");
          props.deletePokemons(props._id);
        }}
      >
        {props.isDeleting === true ? "Is Deleting" : "Delete"}
      </DeleteButton>
      <Select onClick={() => {
        console.log("hit selected")
        if (isSelected === false) {
          setIsSelected(true)
        } else {
          setIsSelected(false)
        }
      }}> {isSelected === true ? "selected" : "select"} </Select>
    </PokemonWrapper>
  )
}



