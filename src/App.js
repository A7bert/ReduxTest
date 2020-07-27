import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types'

import {fetchCharacters} from './actions/characters';
import { connect } from 'react-redux';

import { Wrapper, List, Card } from './app-styled-components'

const App = (fetchCharacters, location) => {
    const url = 'https://the-one-api.herokuapp.com/v1/character';
    const bearer = 'Bearer b4AKrWalYCXD2_apCYlK'; 

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getData();
        fetchCharacters();
      }, []);

    const getData = async () => {
        const response = await fetch(url, {
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setCharacters(data.docs);
    }

    return (
        <Wrapper>
            <h1>Lord of Ring - Characters</h1>
            <List>
                {
                    characters.map(character => (
                        <Card key={character._id}>
                            <h2>{character.name}</h2>
                            <p>Years: {character.birth} - {character.death}</p>
                            <p>Gender: {character.gender}</p>
                            <p>Race: {character.race}</p>
                            <p>Realm: {character.realm}</p>
                        </Card>
                    ))
                }
            </List>
        </Wrapper>
    )
};

App.propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    location: PropTypes.any
};

export default connect(
    ({routing}) => ({location: routing.location}),
    {fetchCharacters}
  )(App);
