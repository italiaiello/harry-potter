import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'

const SpellSelection = ({ title, spellData }) => {

    console.log(spellData)

    const [showSpells, setShowSpells] = useState(false)
    const [filteredSpells, setFilteredSpells] = useState(spellData)

    const toggleSpells = () => {
        setShowSpells(!showSpells)
        setFilteredSpells(spellData)
    }

    return (
        <section className={showSpells ? 'expandable open' : 'expandable collapse'}>
            <article className="dropdown">
                <p>{title}</p>
                <button onClick={ toggleSpells }>{showSpells ? 'Hide' : 'Show'}</button>
            </article>
            {
                showSpells &&
                <article className="speciesContainer">
                    <SearchBar data={spellData} setData={setFilteredSpells}  />
                    <div>
                        {
                            filteredSpells.map((spell, i) => (
                                <p 
                                    key={i} 
                                    className={`species spell`}
                                >
                                    <span className="boldText">{spell.spell}</span>
                                    <br /><br />
                                    {spell.effect}
                                </p>
                            ))
                        }
                    </div>
                </article>
            }
        </section>
    )
}

export default SpellSelection
