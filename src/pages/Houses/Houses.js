import React from 'react'
import HouseButton from '../../components/HouseButton/HouseButton'

import Gryffindor from '../../assets/images/gryffindor.jpg'
import Hufflepuff from '../../assets/images/hufflepuff.jpg'
import Slytherin from '../../assets/images/slytherin.jpg'
import Ravenclaw from '../../assets/images/ravenclaw.jpg'

const Houses = ({ data, dispatch }) => {

    console.log(data)

    return (
        <section id="houses">
            <h1>Houses</h1>
            <article id="houseButtons">
                {
                    data !== null &&
                    <>
                        <HouseButton logo={Gryffindor} altText={'Gryffindor crest'} houseId={data[0]._id} dispatch={dispatch} />
                        <HouseButton logo={Ravenclaw} altText={'Ravenclaw crest'} houseId={data[1]._id} dispatch={dispatch} />
                        <HouseButton logo={Slytherin} altText={'Slytherin crest'} houseId={data[2]._id} dispatch={dispatch} />
                        <HouseButton logo={Hufflepuff} altText={'Hufflepuff crest'} houseId={data[3]._id} dispatch={dispatch} />
                    </>
                }
                
            </article>
        </section>
    )
}

export default Houses