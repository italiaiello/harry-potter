import React from 'react'

const SearchBar = ({ dataType, data, setData }) => {

    
    const onSearchChange = (e) => {
        let filteredData = []
        if (dataType === 'characters') {
            filteredData = data.filter(datum => datum.name.toLowerCase().includes(e.target.value.toLowerCase()))
        } else {
            filteredData = data.filter(datum => {
                const spell = datum.spell.toLowerCase().includes(e.target.value.toLowerCase())
                const effect = datum.effect.toLowerCase().includes(e.target.value.toLowerCase())

                return spell || effect
            })
        }

        setData(filteredData)
    }

    return (
        <article>
            <input className="searchBar" type="text" placeholder={`Search...`} onChange={onSearchChange} />
        </article>
    )
}

export default SearchBar
