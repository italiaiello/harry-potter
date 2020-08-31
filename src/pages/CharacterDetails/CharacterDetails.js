import React from 'react'
import BackArrow from '../../components/BackArrow/BackArrow'

const CharacterDetails = ({ data, dispatch }) => {


    // Grabbing character's alliances from data object
    let alliances = []
    if (typeof data === 'object') {
        alliances = Object.keys(data)
                            .filter(key => data[key] === true)
                            .map(key => {
                                const separatedString = key.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
                                const capitalisedFirstLetter = key.charAt(0).toUpperCase()
                                return `${capitalisedFirstLetter}${separatedString.substring(1)}`
                            })
                            .join(', ')

        if (!alliances.length) {
            alliances = ['None']
        }
    }

    return (
        <section className="detailsContainer">
            <BackArrow newRoute={'home'} newUrl={'characters'} dispatch={dispatch} />
            <article className={`details ${data.house}`}>
                <h2>{data.name}</h2>
                <article>
                    <p>{`Alliances: ${alliances}`}</p>
                    <p>{`Blood Status: ${data.bloodStatus}`}</p>
                    <p>{`House: ${data.house !== undefined ? data.house : 'Unknown'}`}</p>
                    <p>{`Species: ${data.species}`}</p>
                </article>

            </article>
        </section>
    )
}

export default CharacterDetails
