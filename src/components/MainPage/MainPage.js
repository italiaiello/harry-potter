import React, { useReducer } from 'react'
import Menu from '../Menu/Menu';
import { useDataFetch } from '../../hooks/useDataFetch';
import Characters from '../Characters/Characters';

export const ACTIONS = {
    CHANGE_ROUTE: 'change-route',
    SET_DATA: 'set-data',
    SET_URL: 'set-url'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_ROUTE:
            return { route: action.payload.route };
        case ACTIONS.SET_DATA:
            return { data: action.payload.data };
        case ACTIONS.SET_URL:
            return { url: action.payload.url };
        default:
            return state;
    }
}

const MainPage = () => {

    const [state, dispatch] = useReducer(reducer, { route: 'home', data: {}, url: '' })

    const { isLoading, data, error } = useDataFetch(state.url)

    if (error) return <>Network error</>

    return (
        <section id="homePage">
            {
                isLoading ?
                <h1>Loading data...</h1>
                :
                (
                    state.route === 'home' ?
                    <Menu data={data} dispatch={dispatch} />
                    :
                    <Characters data={data} />
                )

            }
        </section>
    )
}

export default MainPage
