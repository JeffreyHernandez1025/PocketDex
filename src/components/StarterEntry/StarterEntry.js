import styled from "styled-components";

const PokemonWrapper = styled.div`
  background-color: blue;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  text-align: center;
  width: 275px;
  height: 310px;
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
const Pokemon = styled.img`
height: 200px;

`;

export default function StarterEntry(props) {

  return (
    <PokemonWrapper>
      <Pokemon src={props.pokemon} />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.type}</p>
      <p>{props.region}</p>
    </PokemonWrapper>
  )
}



