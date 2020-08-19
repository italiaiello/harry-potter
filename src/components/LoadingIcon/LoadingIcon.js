import React from 'react'
import LoadingBars from '../../assets/animated/loading.svg'

const LoadingIcon = () => {
    return (
        <section className="loadingIconContainer">
            <figure className="loadingIcon">
                <img src={LoadingBars} alt="Loading bars" />
            </figure>
        </section>
    )
}

export default LoadingIcon
