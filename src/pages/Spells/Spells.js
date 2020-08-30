import React from 'react'
import SpellSelection from '../../components/SpellSelection/SpellSelection'

const Spells = ({ data }) => {

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
        <div>
            <h1>Spells</h1>
            {
                spellObjectKeys.map((key, index) => (
                    <SpellSelection title={key} spellData={spellObject[key]} />
                ))
            }
        </div>
    )
}

export default Spells
