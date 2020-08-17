import React from 'react'
import { ACTIONS } from '../../pages/MainPage/MainPage';
import { API_KEY } from '../../pages/MainPage/MainPage';

const HouseButton = ({ logo, altText, houseId, dispatch }) => {

    const url = `houses/${houseId}?key=${API_KEY}`

    return (
        <figure 
            className="houseButton" 
            onClick={() => {
                dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: { route: 'houseDetails' } })
                dispatch({ type: ACTIONS.SET_URL, payload: { url: url } })
            }}
        >
            <img src={logo} alt={altText} className="option" />
        </figure>
    )
}

export default HouseButton
