import React from 'react'

const SearchBar = ({ title, data, setData }) => {

    
    const onSearchChange = (e) => {
        const filteredData = data.filter(datum => datum.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setData(filteredData)
    }

    return (
        <article>
            <input className="searchBar" type="text" placeholder={`Search...`} onChange={onSearchChange} />
        </article>
    )
}

export default SearchBar
