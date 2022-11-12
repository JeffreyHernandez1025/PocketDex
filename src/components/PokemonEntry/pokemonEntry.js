import styled from "styled-components";
import useCreateTeam from "../../hooks/useCreateTeam";
import { useState } from "react";
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

const Selecting = styled.button`
margin-left: 10px;
margin-right: 10px;

&:hover {
  cursor: pointer;
}
`;

export default function PokemonEntry(props) {
  const [isSelected, setIsSelected] = useState(false)

  const { 
    teamPokemon,
    selectedId,
    setSelectedId, } = useCreateTeam()

    function inTeam(id){
      id = selectedId
      console.log(selectedId)

      teamPokemon(id)
      }

    return (
        <ScoreWrapper>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.type}</p>
            <p>{props.region}</p>
            <Selecting onClick={() => {
              console.log("hit selected")
                setIsSelected(true)
                setSelectedId(props._id)
                console.log(selectedId)
                inTeam()
            }}> select </Selecting>
            <Selecting onClick={() => {
              console.log('deselect hit')
              setIsSelected(false)
            }}> deselect </Selecting>
        </ScoreWrapper>
    )
}



