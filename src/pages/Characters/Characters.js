import React from 'react';
import CharacterSelection from '../../components/CharacterSelection/CharacterSelection';
import BackArrow from '../../components/BackArrow/BackArrow';

const Characters = ({ dispatch, data }) => {

    console.log(data)

    let humans;
    let creatures;

    if (data) {
        humans = (data.filter(datum => datum.species === 'human'))
        creatures = (data.filter(datum => datum.species !== 'human'))
    }

    return (
        <section className="characters container">
            <BackArrow title="Characters" newUrl={'characters'} newRoute={'home'} dispatch={dispatch} />
            <section className="container-section">
                <CharacterSelection title={'Humans'} characterData={humans} dispatch={dispatch} />
                <CharacterSelection title={'Creatures'} characterData={creatures} dispatch={dispatch} />
            </section>
        </section>
    )
}

export default Characters

