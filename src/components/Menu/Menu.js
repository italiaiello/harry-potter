import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { API_KEY } from '../../pages/MainPage/MainPage';
import HogwartsLogo from '../../assets/images/hogwartsLogo.jpg';
import Characters from '../../assets/images/characters.jpg';
import Spells from '../../assets/images/spells.jpg';
import SortingHat from '../../assets/images/sortingHatOption.jpg';

const Menu = ({ dispatch }) => {

    return (
        <section id="menuContainer">
            <h1 id="menuHeading">Welcome to the Harry Potter API</h1>
            <h3>Select one of the options below</h3>
            <section id="menu">
                <section id="menuItemContainer">
                    <MenuItem dispatch={dispatch} route={'characters'} url={`characters?key=${API_KEY}`} title={'Characters'} image={Characters}/>
                    <MenuItem dispatch={dispatch} route={'houses'} url={`houses?key=${API_KEY}`} title={'Houses'} image={HogwartsLogo}/>
                    <MenuItem dispatch={dispatch} route={'spells'} url={`spells?key=${API_KEY}`} title={'Spells'} image={Spells} />
                    <MenuItem dispatch={dispatch} route={'sortingHat'} url={`sortingHat?key=${API_KEY}`} title={'Sorting Hat'} image={SortingHat} />
                </section>
            </section>
        </section>
    )
}

export default Menu;