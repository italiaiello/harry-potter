import React from 'react';
import { ACTIONS } from '../MainPage/MainPage';

const Menu = ({ dispatch }) => {

    const apiKey = 'YOUR_API_KEY'

    return (
        <section id="menuContainer">
            <h2>Welcome to the Harry Potter API</h2>
            <h3>Find all the info you need about the series</h3>
            <section id="menu">
                <h4>What would you like to do?</h4>
                <section id="menuItemContainer">
                    <article    
                        className="menuItem option" 
                        onClick={() => {
                            dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: { route: 'houses' } })
                            dispatch({ type: ACTIONS.SET_URL, payload: { url: `characters?key=${apiKey}` } })
                        }}
                    >
                        <h3>Characters</h3>
                    </article>
                    <article    
                        className="menuItem option" 
                        onClick={() => {
                            dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: { route: 'houses' } })
                            dispatch({ type: ACTIONS.SET_URL, payload: { url: `houses?key=${apiKey}` } })
                        }}
                    >
                        <h3>Houses</h3>
                    </article>
                    <article    
                        className="menuItem option" 
                        onClick={() => {
                            dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: { route: 'houses' } })
                            dispatch({ type: ACTIONS.SET_URL, payload: { url: `spells?key=${apiKey}` } })
                        }}
                    >
                        <h3>Spells</h3>
                    </article>
                    <article    
                        className="menuItem option" 
                        onClick={() => {
                            dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: { route: 'houses' } })
                            dispatch({ type: ACTIONS.SET_URL, payload: { url: `sortingHat` } })
                        }}
                    >
                        <h3>Sorting Hat</h3>
                    </article>
                </section>
            </section>
        </section>
    )
}

export default Menu;