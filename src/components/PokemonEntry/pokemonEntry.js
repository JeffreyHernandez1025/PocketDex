import styled from "styled-components";
import { useState } from "react";

const PokemonWrapper = styled.div`
  background-color:#e8ebd8;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  width: 400px;
  height: 200px;
  margin-bottom: 50px;
  transition: all ease-in-out 300ms;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;

  p {
    margin: 0;
  }

  &:hover {
    cursor: default;
  }

  @media (max-width: 500px) {
    margin-right: 0px;
    margin-left: 0px;
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
border-style: solid;
border-width: 1px

`;

const Buttons = styled.div`
text-align: center;
`;

const PokeInfo = styled.div`
text-align: center;
width: 200px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-left: 25px;
`
const DataType = styled.div`
display: flex;
margin-bottom: 15px;
`
const Form = styled.form`

margin-right: 40px;
display: flex;
flex-direction: column;


`

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
    <div style={{display: props.isUpdating === true ? 'flex' : null, flexDirection: props.isUpdating === true ? 'column-reverse' : null }}>
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
            <Form onSubmit={handleSubmit}>
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
            </Form> 
            : null}
          {props.isUpdating === true ? null :
            <Button onClick={() => {
              props.deletePokemon(props._id)
            }}> delete </Button>}
            </Buttons>
            <div>
    <PokemonWrapper>
      {props.type === 'fire' ? <Pokemon src={props.pokemon} style={{backgroundColor: '#d12121'}} />: null }
      {props.type === 'water' ? <Pokemon src={props.pokemon} style={{backgroundColor: '#3297a8'}} /> : null}
      {props.type === 'grass' ? <Pokemon src={props.pokemon} style={{backgroundColor: '#40a832'}} /> : null}
      <PokeInfo> 
      <DataType>
        <p style={{marginRight: 10}}> Name: </p>
      <p> {props.name} </p>
      </DataType>
      <div style={{marginBottom: 15, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }}>
        <p> Description: </p>
        <div style={{ backgroundColor: 'grey', borderRadius: 10, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}>
      <p style={{ fontSize: 13 }}> {props.description} </p>
      </div>
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
            </div>
  )
}



