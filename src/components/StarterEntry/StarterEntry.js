import styled from "styled-components";

const PokemonWrapper = styled.div`
  background-color: blue;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  width: 300px;
  height: 250px;
  margin-right: 50px;
  margin-left: 50px;
  opacity: 0.75;
  transition: all ease-in-out 300ms;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  p {
    margin: 0;
  }

  &:hover {
    cursor: default;
    opacity: 1;
  }
`;
const Pokemon = styled.img`
height: 200px;

`;

export default function StarterEntry(props) {

  return (
    <PokemonWrapper>
      <Pokemon src={props.pokemon} />
    </PokemonWrapper>
  )
}



