import { Link } from "react-router-dom";
import styled from "styled-components";
import useAddPokemon from "../../hooks/useAddPokemon";
import pokemonforest from "../../assets/PokemonImages/Vermilion_Forest.png"

const NavigationContainer = styled.div`
justify-content: space-evenly;
display: flex;
flex-direction: row;
background-color: blue;
padding-top: 5px
`;

const NavigationButtons = styled.div`
width: 150px;
height: 50px;
background-color: red;  
border: solid;
border-color: white;
border-width: 2px;
border-radius: 7px;
margin-top: 15px;
display: flex;
justify-content: center;

@media (max-width: 500px){
    width: 100px;
    }
    
`;

const NavHeader = styled.h1`

@media (max-width: 500px){
    font-size: 30px;
}
`

const Header = styled.h1`
text-align: center;

@media (max-width: 500px) {
    font-size: 25px;
}
`;

const Form = styled.form`
background-color: white;
display: flex;
flex-direction: column;
margin-left: 20px;
margin-right: 20px;
margin-top: 10px;
border-radius: 10px;
align-items: center;
width: 400px;
height: 600px;
`;

const Input = styled.div`
padding-bottom: 50px;
`;

const AddContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-image: url(${pokemonforest});
height: 100%;
background-repeat: no-repeat;
padding-bottom: 154px;
`;

const LabelDiv = styled.div`
margin-top: 8px;
border-radius: 5px;
border-width: 1px;
background-color: white;
border-color: grey;
padding: 2px;
`;

export default function Add() {
    // object destructuring
    const {
        addNewPokemon,
        addPoke,
        setAddPoke,
        addName,
        setAddName,
        addDesc,
        setAddDesc,
        addType,
        setAddType,
        addRegion,
        setAddRegion,
    } = useAddPokemon()

    const handleSubmit = event => {
        event.preventDefault();

        setAddPoke('')
        setAddName('')
        setAddDesc('')
        setAddType('')
        setAddRegion('')

        submitAdd()
    }

    function submitAdd(pokemon, name, description, type, region) {
        pokemon = addPoke
        name = addName
        description = addDesc
        type = addType
        region = addRegion

        addNewPokemon(pokemon, name, description, type, region)
    }

    return (
        <div style={{overflow: 'hidden'}}>
            <NavigationContainer>
                <NavigationButtons>
                    <Link
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            textAlign: 'center',
                            flex: 1,
                            borderRadius: 7,
                            paddingTop: 12,
                        }}
                        to='/'>
                        Home
                    </Link>
                </NavigationButtons>
                <NavHeader>PocketDex</NavHeader> 
                <NavigationButtons>
                    <Link
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            textAlign: 'center',
                            flex: 1,
                            borderRadius: 7,
                            paddingTop: 12,
                        }}
                        to='/add'>
                        Add
                    </Link>
                </NavigationButtons>
            </NavigationContainer>
            <AddContainer>
            <Header> Add New Pokemon </Header>
            <Form onSubmit={handleSubmit}>
                <LabelDiv>
                <label> Image URL: </label>
                </LabelDiv>
                <Input> 
                <input 
                id="add_Poke"
                name="add_Poke"
                type="text"
                onChange={event => setAddPoke(event.target.value)}
                value={addPoke}
                />
                </Input>
                <LabelDiv>
                <label>Name:</label>
                </LabelDiv>
                <Input>
            <input
                  id="add_Name"
                  name="add_Name"
                  type="text"
                  onChange={event => setAddName(event.target.value)}
                  value={addName}
                />
                </Input>
                <LabelDiv>
                <label>Description:</label>
                </LabelDiv>
                <Input>
                <textarea
                  id="add_Desc"
                  name="add_Desc"
                  type="text"
                  onChange={event => setAddDesc(event.target.value)}
                  value={addDesc}
                />
                </Input>
                <LabelDiv>
                <label>Type:</label>
                </LabelDiv>
                <Input>
                <input
                  id="add_Type"
                  name="add_Type"
                  type="text"
                  onChange={event => setAddType(event.target.value)}
                  value={addType}
                />
                </Input>
                <LabelDiv>
                <label>Region:</label>
                </LabelDiv>
                <Input>
                <input
                  id="add_Region"
                  name="add_Region"
                  type="text"
                  onChange={event => setAddRegion(event.target.value)}
                  value={addRegion}
                />
                </Input>
                <button style={{width: 100, height: 30}} to='/' type='submit'> Add </button>
            </Form>
            </AddContainer>
            </div>
    )
}