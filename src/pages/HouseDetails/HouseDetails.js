import React from 'react'
import BackArrow from '../../components/BackArrow/BackArrow'

const HouseDetails = ({ dispatch, data }) => {

    if (data === null) return <>No data</>

    console.log(data)



    return (
        <section className="detailsContainer">
            <BackArrow newRoute={'home'} newUrl={'characters'} dispatch={dispatch} />
            <article className={`details ${data[0].name}`}>
                <h2>{data[0].name}</h2>
                <article>
                    <p>{`Founder: ${data[0].founder}`}</p>
                    <p>{`Mascot: ${data[0].mascot}`}</p>
                    <p>{`Head of House: ${data[0].headOfHouse}`}</p>
                    <p>{`House Ghost: ${data[0].houseGhost}`}</p>
                    <p>{`Values: ${data[0].values.join(', ')}`}</p>
                </article>
            </article>
        </section>
    )
}

export default HouseDetails
