import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { API_KEY } from '../../pages/MainPage/MainPage'
import { ACTIONS } from '../../pages/MainPage/MainPage'

const CharacterSelection = ({ title, characterData, dispatch }) => {

    const [showCharacters, setShowCharacters] = useState(false)
    const [filteredCharacters, setFilteredCharacters] = useState(characterData)

    const toggleCharacters = () => {
        setShowCharacters(!showCharacters)
        setFilteredCharacters(characterData)
    }

    return (
        <section className={showCharacters ? 'expandable open' : 'expandable collapse'}>
            <article className="dropdown">
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
                                <p 
                                    key={i} 
                                    className="species option"
                                    onClick={() => {
                                        dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: { route: `characterDetails` } })
                                        dispatch({ type: ACTIONS.SET_URL, payload: { url: `characters/${character._id}?key=${API_KEY}` } })
                                    }}
                                >
                                    {character.name}
                                </p>
                            ))
                        }
                    </div>
                </article>
            }
        </section>
    )
}

export default CharacterSelection
