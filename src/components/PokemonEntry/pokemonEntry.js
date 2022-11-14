import styled from "styled-components";
import { useState } from "react";

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
    cursor: default;
    opacity: 1;
  }
`;

const Select = styled.button`


&:hover {
  cursor: pointer;
}
`;

export default function PokemonEntry(props) {
  const [selected, setSelected] = useState(false)

  function inTeam(id) {
    props.teamPokemon(id)
  }

  function outTeam(id) {

    props.deselectPokemon(id)
  }

  const handleSubmit = event => {
    console.log('handleSubmit ran')
    window.location.reload()

    props.setPokeId('')
    props.setPokeName('')
    props.setPokeDesc('')
    props.setPokeType('')
    props.setPokeRegion('')

    submitEdit()
    props.setIsUpdating(false)
  }

  function submitEdit(id, name, description, type, region) {
    id = props.pokeId
    name = props.pokeName
    description = props.pokeDesc
    type = props.pokeType
    region = props.pokeRegion

    props.pokeEdit(id, name, description, type, region)
  }

  return (
    <PokemonWrapper>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.type}</p>
      <p>{props.region}</p>
      {props.isUpdating === true ? null :
        <Select onClick={() => {
          if (selected === false && props.starterSix.length < 6) {
            inTeam(props._id)
            setSelected(true)
          } else if (selected === true) {
            outTeam(props._id)
            setSelected(false)
          }
        }}> {selected === false ? "select" : "deselect"} </Select>}
      {props.isUpdating === true ? null :
        <button onClick={() => {

          const id = props._id
          props.setAllPokemon(props.allPokemon.filter((pokemon) => pokemon._id === id))

          props.setPokeId(props._id)
          props.setPokeName(props.name)
          props.setPokeDesc(props.description)
          props.setPokeType(props.type)
          props.setPokeRegion(props.region)

          props.setIsUpdating(true)
        }} > update </button>}
      {props.isUpdating === true ?
        <form onSubmit={handleSubmit}>
          <input
            id="poke_Name"
            name="poke_Name"
            type="text"
            onChange={event => props.setPokeId(event.target.value)}
            value={props.pokeName}
          />
          <textarea
            id="poke_Desc"
            name="poke_Desc"
            type="text"
            onChange={event => props.setPokeDesc(event.target.value)}
            value={props.pokeDesc}
          />
          <input
            id="poke_Type"
            name="poke_Type"
            type="text"
            onChange={event => props.setPokeType(event.target.value)}
            value={props.pokeType}
          />
          <input
            id="poke_Region"
            name="poke_Region"
            type="text"
            onChange={event => props.setPokeRegion(event.target.value)}
            value={props.pokeRegion}
          />
          <button type="submit"> Done </button>
        </form> : null}
      {props.isUpdating === true ? null :
        <button onClick={() => {
          props.deletePokemon(props._id)
        }}> delete </button>}
    </PokemonWrapper>
  )
}



