import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'

const PokemonWrapper = styled.div`
  background-color: blue;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  width: 175px;
  height: 300px;
  margin-bottom: 50px;
  opacity: 0.75;
  transition: all ease-in-out 300ms;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  p {
    margin: 0;
  }

  &:hover {
    cursor: default;
    opacity: 1;
  }
`;

const Button = styled.button`


&:hover {
  cursor: pointer;
}
`;

const Pokemon = styled.img`
height: 150px;
bottom: 50px;
background-color: white;
border-style: solid;

`;

const Buttons = styled.div`
text-align: center;

`;

const PokeInfo = styled.div`
text-align: center;
`
const DataType = styled.div`
display: flex;
`
const DataName = styled.p`
margin-right: 10px;
`

export default function PokemonEntry(props) {
  const [selected, setSelected] = useState(false)
  const navigate = useNavigate()

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
    <div>
                <Buttons>
          {props.isUpdating === true ? null :
            <Button onClick={() => {
              if (selected === false && props.starterSix.length < 6) {
                inTeam(props._id)
                setSelected(true)
              } else if (selected === true) {
                outTeam(props._id)
                setSelected(false)
              }
            }}> {selected === false ? "select" : "remove"} </Button>}
          {props.isUpdating === true ? null :
            <Button onClick={() => {
    
              const id = props._id
              props.setAllPokemon(props.allPokemon.filter((pokemon) => pokemon._id === id))
    
              props.setPokeId(props._id)
              props.setPokeName(props.name)
              props.setPokeDesc(props.description)
              props.setPokeType(props.type)
              props.setPokeRegion(props.region)
    
              props.setIsUpdating(true)
            }} > update </Button>}
          {props.isUpdating === true ?
            <form onSubmit={handleSubmit}>
              <input
                id="poke_Name"
                name="poke_Name"
                type="text"
                onChange={event => props.setPokeName(event.target.value)}
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
            <Button onClick={() => {
              props.deletePokemon(props._id)
            }}> delete </Button>}
            </Buttons>
    <PokemonWrapper>
      <Pokemon src={props.pokemon} />
      <PokeInfo> 
      <DataType>
        <p style={{marginRight: 10}}> Name: </p>
      <p> {props.name} </p>
      </DataType>
      <div>
        <p> Description: </p>
      <p style={{backgroundColor: 'white', borderRadius: 10,}}> {props.description} </p>
      </div>
      <DataType>
        <p style={{marginRight: 10}}> Type: </p>
      <p> {props.type} </p>
      </DataType>
      <DataType>
        <p style={{marginRight: 10}}> Region: </p>
      <p> {props.region} </p>
      </DataType>
      </PokeInfo>
    </PokemonWrapper>
            </div>
  )
}



