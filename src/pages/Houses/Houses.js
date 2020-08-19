import React from 'react'
import HouseButton from '../../components/HouseButton/HouseButton'

import Gryffindor from '../../assets/images/gryffindor.png'
import Hufflepuff from '../../assets/images/hufflepuff.png'
import Slytherin from '../../assets/images/slytherin.png'
import Ravenclaw from '../../assets/images/ravenclaw.png'
import BackArrow from '../../components/BackArrow/BackArrow'

const Houses = ({ data, dispatch }) => {

    return (
        <section id="houses">
            <BackArrow newRoute={'home'} newUrl={'characters'} dispatch={dispatch} title={'Houses'} />
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
