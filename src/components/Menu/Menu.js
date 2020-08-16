import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

const Menu = ({ dispatch }) => {

    const apiKey = 'YOUR_API_KEY_HERE'

    return (
        <section id="menuContainer">
            <h2>Welcome to the Harry Potter API</h2>
            <h3>Find all the info you need about the series</h3>
            <section id="menu">
                <h4>What would you like to do?</h4>
                <section id="menuItemContainer">
                    <MenuItem dispatch={dispatch} route={'characters'} url={`characters?key=${apiKey}`} title={'Characters'} />
                    <MenuItem dispatch={dispatch} route={'houses'} url={`houses?key=${apiKey}`} title={'Houses'} />
                    <MenuItem dispatch={dispatch} route={'spells'} url={`spells?key=${apiKey}`} title={'Spells'} />
                    <MenuItem dispatch={dispatch} route={'sortingHat'} url={`sortingHat?key=${apiKey}`} title={'Sorting Hat'} />
                </section>
            </section>
        </section>
    )
}

export default Menu;