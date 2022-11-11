import styled from "styled-components";
import { useState } from "react";
import updatePokemonEntry from "../../api/updatePokemonEntry"
const ScoreWrapper = styled.div`
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

const Select = styled.button`


&:hover {
  cursor: pointer;
}
`;

export default function PokemonEntry(props) {
  const [isSelected, setIsSelected] = useState(false)
    return (
        <ScoreWrapper>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.type}</p>
            <p>{props.region}</p>
            <Select onClick={() => {
              console.log("hit selected")
              if(isSelected === false){
                setIsSelected(true)
              } else {
                setIsSelected(false)
              }
            }}> {isSelected === true ? "selected" : "select"} </Select>
        </ScoreWrapper>
    )
}



