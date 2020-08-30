import React from 'react'

const HouseDetails = ({ dispatch, data }) => {

    console.log(data)

    return (
        <div>
            <h1>{data[0].name}</h1>
        </div>
    )
}

export default HouseDetails
