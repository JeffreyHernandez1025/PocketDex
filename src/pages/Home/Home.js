import { Link } from "react-router-dom";
import styled from "styled-components";
import PokemonEntry from "../../components/PokemonEntry/pokemonEntry"
import useAllPokemon from "../../hooks/useAllPokemon";
const NavigationContainer = styled.div`
justify-content: space-evenly;
display: flex;
flex-direction: row;
background-color: blue;
height: 100px;
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
margin-bottom: 5px;
`;

const TeamHeader = styled.h1`
text-align: center;
`;

const TeamContainer = styled.div`
text-align: center;
`;

const TeamDiv = styled.div`
display: flex;
text-align: center;
flex-direction: column;

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
    const { allPokemon, teamPokemon } = useAllPokemon();
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
            <TeamContainer>
                <TeamHeader>Team</TeamHeader>
                <TeamDiv>

                </TeamDiv>
            </TeamContainer>
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
                        teamPokemon={teamPokemon}
                    />
                ))}
            </PageWrapper>
        </div>

    )
}