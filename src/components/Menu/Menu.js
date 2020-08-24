import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { API_KEY } from '../../pages/MainPage/MainPage';

const Menu = ({ dispatch }) => {

    return (
        <section id="menuContainer">
            <h2 id="menuHeading">Welcome to the Harry Potter API</h2>
            <h3>Find all the info you need about the series</h3>
            <section id="menu">
                <h4>What would you like to do?</h4>
                <section id="menuItemContainer">
                    <MenuItem dispatch={dispatch} route={'characters'} url={`characters?key=${API_KEY}`} title={'Characters'} />
                    <MenuItem dispatch={dispatch} route={'houses'} url={`houses?key=${API_KEY}`} title={'Houses'} />
                    <MenuItem dispatch={dispatch} route={'spells'} url={`spells?key=${API_KEY}`} title={'Spells'} />
                    <MenuItem dispatch={dispatch} route={'sortingHat'} url={`sortingHat?key=${API_KEY}`} title={'Sorting Hat'} />
                </section>
            </section>
        </section>
    )
}

export default Menu;