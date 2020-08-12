import React from 'react'

const SearchBar = ({ title, data, setData }) => {

    
    const onSearchChange = (e) => {
        console.log(e.target.value)
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
