import React from 'react'

const HouseButton = ({ logo, altText }) => {
    return (
        <figure className="houseButton option">
            <img src={logo} alt={altText} />
        </figure>
    )
}

export default HouseButton
