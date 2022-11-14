import { Link } from "react-router-dom";
import styled from "styled-components";
import useAddPokemon from "../../hooks/useAddPokemon";

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

`;

const Header = styled.h1`
text-align: center;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
background-color: blue;
margin-left: 20px;
margin-right: 20px;
border: solid;
border-color: red;
border-radius: 10px;
`;
const Input = styled.div`
padding-bottom: 50px;
`;

export default function Add() {
    // object destructuring
    const {
        addNewPokemon,
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

        setAddName('')
        setAddDesc('')
        setAddType('')
        setAddRegion('')

        submitAdd()
    }

    function submitAdd(name, description, type, region) {
        name = addName
        description = addDesc
        type = addType
        region = addRegion

        addNewPokemon(name, description, type, region)
    }

    return (
        <div>
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
                <h1>PocketDex</h1> 
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
            <Header> Add New Pokemon </Header>
            <Form onSubmit={handleSubmit}>
                <label>name:</label>
                <Input>
            <input
                  id="add_Name"
                  name="add_Name"
                  type="text"
                  onChange={event => setAddName(event.target.value)}
                  value={addName}
                />
                </Input>
                <label>description:</label>
                <Input>
                <textarea
                  id="add_Desc"
                  name="add_Desc"
                  type="text"
                  onChange={event => setAddDesc(event.target.value)}
                  value={addDesc}
                />
                </Input>
                <label>type:</label>
                <Input>
                <input
                  id="add_Type"
                  name="add_Type"
                  type="text"
                  onChange={event => setAddType(event.target.value)}
                  value={addType}
                />
                </Input>
                <label>region:</label>
                <Input>
                <input
                  id="add_Region"
                  name="add_Region"
                  type="text"
                  onChange={event => setAddRegion(event.target.value)}
                  value={addRegion}
                />
                </Input>
                <button type='submit'> Add </button>
            </Form>
        </div>
    )
}