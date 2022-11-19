import { Link } from "react-router-dom";
import styled from "styled-components";
import PokemonEntry from "../../components/PokemonEntry/pokemonEntry"
import StarterEntry from "../../components/StarterEntry/StarterEntry";
import useAllPokemon from "../../hooks/useAllPokemon";
import useUpdatePokemon from "../../hooks/useUpdatePokemon";
import PlaySound from "../../components/PlaySound/PlaySound";
import Sound from 'react-sound';
import PokemonTheme from "../../assets/fonts/PokemonAudio/PokemonTheme.mp3"
import React from 'react'





const NavigationContainer = styled.div`
justify-content: space-evenly;
display: flex;
flex-direction: row;
background-color: blue;
height: 100px;
padding-top: 5px;
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
    font-size: 30px
}
`;

const TeamHeader = styled.h1`
text-align: center;

@media (max-width: 500px) {
    font-size: 25px;
}
`;

const TeamContainer = styled.div`
top: 100;
left: 0px;
align-items: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
flex: 1;
justify-content: center;

`;

const Header = styled.h1`
text-align: center;

@media (max-width: 500px) {
    font-size: 25px;
}
`;

const PageWrapper = styled.div`
  width: 100%;
  top: 100;
  left: 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export default function Home() {
    const { 
        allPokemon, 
        teamPokemon, 
        starterSix, 
        deselectPokemon, 
        setAllPokemon,
        deletePokemon,
    } = useAllPokemon();
    const { 
        pokeId, 
        setPokeId, 
        pokeEdit, 
        isUpdating, 
        setIsUpdating, 
        pokeName, 
        setPokeName, 
        pokeDesc,
        setPokeDesc,
        pokeType,
        setPokeType,
        pokeRegion,
        setPokeRegion
    } = useUpdatePokemon()

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
            <TeamHeader>Team</TeamHeader>
            <TeamContainer>
                {starterSix.map((starter, i) => (
                    <StarterEntry
                        _id={starter._id}
                        pokemon={starter.pokemon}
                        name={starter.name}
                        description={starter.description}
                        type={starter.type}
                        region={starter.region}
                        key={i}
                    />
                ))}
            </TeamContainer>
            <Header> Pokemon </Header>
            <PageWrapper>
                <PlaySound/>
                {allPokemon.map((pokemon, i) => (
                    <div>
                    <PokemonEntry
                        _id={pokemon._id}
                        pokemon={pokemon.pokemon}
                        name={pokemon.name}
                        description={pokemon.description}
                        type={pokemon.type}
                        region={pokemon.region}
                        allPokemon={allPokemon}
                        setAllPokemon={setAllPokemon}
                        teamPokemon={teamPokemon}
                        deselectPokemon={deselectPokemon}
                        starterSix={starterSix}
                        pokeId={pokeId}
                        setPokeId={setPokeId}
                        pokeEdit={pokeEdit}
                        isUpdating={isUpdating}
                        setIsUpdating={setIsUpdating}
                        pokeName={pokeName}
                        setPokeName={setPokeName}
                        pokeDesc={pokeDesc}
                        setPokeDesc={setPokeDesc}
                        pokeType={pokeType}
                        setPokeType={setPokeType}
                        pokeRegion={pokeRegion}
                        setPokeRegion={setPokeRegion}
                        deletePokemon={deletePokemon}
                        key={i}
                    />
                    </div>
                ))}
            </PageWrapper>
        </div>

    )
}