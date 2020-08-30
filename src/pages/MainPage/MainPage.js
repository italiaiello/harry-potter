import React, { useReducer } from 'react'
import Menu from '../../components/Menu/Menu';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';
import Characters from '../Characters/Characters';
import Houses from '../Houses/Houses';
import Spells from '../../pages/Spells/Spells';
import SortingHat from '../SortingHat/SortingHat';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import HouseDetails from '../HouseDetails/HouseDetails';

import { useDataFetch } from '../../hooks/useDataFetch';

export const ACTIONS = {
    CHANGE_ROUTE: 'change-route',
    SET_URL: 'set-url'
}

export const API_KEY = 'YOUR_API_KEY_HERE'

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_ROUTE:
            return { ...state, route: action.payload.route };
        case ACTIONS.SET_URL:
            return { ...state, url: action.payload.url };
        default:
            return state;
    }
}

const MainPage = () => {

    const [state, dispatch] = useReducer(reducer, { route: 'home', url: '' })

    const { isLoading, data, error } = useDataFetch(state.url)

    if (error) return <>Network error</>

    const loadPage = route => {
        switch(route) {
            case 'home':
                return <Menu data={data} dispatch={dispatch} />;
            case 'characters':
                return <Characters dispatch={dispatch} data={data} />;
            case 'houses':
                return <Houses dispatch={dispatch} data={data} />;
            case 'spells':
                return <Spells dispatch={dispatch} data={data} />;
            case 'sortingHat':
                return <SortingHat dispatch={dispatch} />;
            case 'characterDetails':
                return <CharacterDetails dispatch={dispatch} data={data} />
            case 'houseDetails':
                return <HouseDetails dispatch={dispatch} data={data} />;
            default:
                return <>Invalid route</>
        }
    }

    return (
        <section id="homePage">

            {
                isLoading ?
                <LoadingIcon />
                :
                loadPage(state.route)
            }
        </section>
    )
}

export default MainPage
