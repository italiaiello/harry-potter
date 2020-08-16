import React, { useReducer } from 'react'
import Menu from '../../components/Menu/Menu';
import Characters from '../Characters/Characters';
import Houses from '../Houses/Houses';
import { useDataFetch } from '../../hooks/useDataFetch';

export const ACTIONS = {
    CHANGE_ROUTE: 'change-route',
    SET_URL: 'set-url'
}

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
                return <Characters data={data} />;
            case 'houses':
                return <Houses data={data} />;
            default:
                return <>Invalid route</>
        }
    }

    return (
        <section id="homePage">
            {
                isLoading ?
                <h1>Loading data...</h1>
                :
                loadPage(state.route)
                
            }
        </section>
    )
}

export default MainPage
