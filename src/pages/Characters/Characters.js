import React from 'react';
import CharacterSelection from '../../components/CharacterSelection/CharacterSelection';

const Characters = ({ dispatch, data }) => {

    console.log(data)

    let humans;
    let creatures;

    if (data) {
        humans = (data.filter(datum => datum.species === 'human'))
        creatures = (data.filter(datum => datum.species !== 'human'))
    }

    return (
        <section id="characters">
            <h1>Characters</h1>
            <CharacterSelection title={'Humans'} characterData={humans} dispatch={dispatch} />
            <CharacterSelection title={'Creatures'} characterData={creatures} dispatch={dispatch} />
        </section>
    )
}

export default Characters

