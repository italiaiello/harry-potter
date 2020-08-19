import React from 'react'
import { ACTIONS } from '../../pages/MainPage/MainPage'
import { API_KEY } from '../../pages/MainPage/MainPage'

const BackArrow = ({ newRoute, newUrl, dispatch, title }) => {
    return (
        <section className="topbar">
            <div    className="arrowContainer" 
                    
            >
                <div    className="arrow-left option"
                        onClick={() => {
                            dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: {route: newRoute}})
                            dispatch({ type: ACTIONS.SET_URL, payload: {url: `${newUrl}?key=${API_KEY}`}})
                        }}
                >
                </div>
                <p>Back to Menu</p>
            </div>
            <h2>{`${title}`}</h2>
        </section>
    )
}

export default BackArrow
