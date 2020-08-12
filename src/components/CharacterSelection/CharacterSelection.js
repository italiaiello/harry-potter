import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'

const CharacterSelection = ({ title, characterData }) => {

    const [showCharacters, setShowCharacters] = useState(false)
    const [filteredCharacters, setFilteredCharacters] = useState(characterData)

    const toggleCharacters = () => {
        setShowCharacters(!showCharacters)
        setFilteredCharacters(characterData)
    }

    return (
        <section className={showCharacters ? 'expandable open' : 'expandable collapse'}>
            <article>
                <p>{title}</p>
                <button onClick={ toggleCharacters }>{showCharacters ? 'Close' : 'Open'}</button>
            </article>
            {
                showCharacters &&
                <article className="speciesContainer">
                    <SearchBar data={characterData} setData={setFilteredCharacters}  />
                    <div>
                        {
                            filteredCharacters.map((character, i) => (
                                <p key={i} className="species">{character.name}</p>
                            ))
                        }
                    </div>
                </article>
            }
        </section>
    )
}

export default CharacterSelection
