import React from 'react'
import { ACTIONS } from '../../pages/MainPage/MainPage';

const MenuItem = ({dispatch, route, url, title}) => {

    return (
        <article    
            className="menuItem option" 
            onClick={() => {
                dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: { route: route } })
                dispatch({ type: ACTIONS.SET_URL, payload: { url: url } })
            }}
        >
            <h3>{title}</h3>
        </article>
    )
}

export default MenuItem
