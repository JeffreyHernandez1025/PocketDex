import { Link } from "react-router-dom";
import styled from "styled-components";
import PokemonEntry from "../../components/PokemonEntry/pokemonEntry"
import useAllPokemon from "../../hooks/useAllPokemon";
const NavigationContainer = styled.div`
justify-content: space-evenly;
display: flex;
flex-direction: row;
background-color: blue;
padding-top: 5px
`;

const NavigationButtons = styled.div`
background-color: red;
border: solid;
border-color: white;
border-width: 2px;
border-radius: 7px;
margin-bottom: 5px;
`;

const Header = styled.h1`
text-align: center;
`;

const PageWrapper = styled.div`
  width: 100vw;
  position: absolute;
  top: 100;
  left: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
    const { allPokemon } = useAllPokemon();
    return (
        <div>
            <NavigationContainer>
                <NavigationButtons>
                    <Link
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 5,
                            paddingBottom: 5,
                        }}
                        to='/'>
                        Home
                    </Link>
                </NavigationButtons>
                <NavigationButtons>
                    <Link
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 5,
                            paddingBottom: 5,
                        }}
                        to='/team'>
                        Team
                    </Link>
                </NavigationButtons>
                <NavigationButtons>
                    <Link 
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}
                    to='/update-pokemon'>
                        Update
                        </Link>
                </NavigationButtons>
                <NavigationButtons>
                    <Link 
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}
                    to='/add-pokemon'>
                        Add
                        </Link>
                </NavigationButtons>
            </NavigationContainer>
       
        <Header> Pokemon </Header> 
        <PageWrapper>
        {allPokemon.map((pokemon, i) => (
          <PokemonEntry
            _id={pokemon._id}
            name={pokemon.name}
            description={pokemon.description}
            type={pokemon.type}
            region={pokemon.region}
            key={i}
          />
        ))}
      </PageWrapper>
        </div>

    )
}