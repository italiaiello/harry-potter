import React from 'react';
import CharacterSelection from '../CharacterSelection/CharacterSelection';

const Characters = ({ data }) => {

    let humans;
    let creatures;

    if (data) {
        humans = (data.filter(datum => datum.species === 'human'))
        creatures = (data.filter(datum => datum.species !== 'human'))
    }

    return (
        <section id="characters">
            <h1>Characters</h1>
            <CharacterSelection title={'Humans'} characterData={humans} />
            <CharacterSelection title={'Creatures'} characterData={creatures} />
        </section>
    )
}

export default Characters

