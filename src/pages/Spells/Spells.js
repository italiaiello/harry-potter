import React from 'react'
import SpellSelection from '../../components/SpellSelection/SpellSelection'
import BackArrow from '../../components/BackArrow/BackArrow'

const Spells = ({ data, dispatch }) => {

    if (data === null) return <>No data</>
    
    console.log(data)


    const spellObject = {}
    data.forEach(item => {
        if (spellObject[`${item.type}`] === undefined) {
            spellObject[`${item.type}`] = [item]
        } else {
            spellObject[`${item.type}`].push(item)
        }
    })

    console.log(spellObject)

    const spellObjectKeys = Object.keys(spellObject)

    return (
        <div className="spellsContainer container">
            <BackArrow title="Spells" newUrl={'characters'} newRoute={'home'} dispatch={dispatch} />
            <section className="spells container-section">
            {
                spellObjectKeys.map((key, index) => (
                    <SpellSelection title={key} spellData={spellObject[key]} />
                ))
            }
            </section>
        </div>
    )
}

export default Spells
