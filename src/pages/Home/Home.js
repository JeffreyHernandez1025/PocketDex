import { Link } from "react-router-dom";
import styled from "styled-components";

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

export default function Home() {

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
        </div>
    )
}