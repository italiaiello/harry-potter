import React, {useState} from 'react'
import Gryffindor from '../../assets/images/gryffindor.png'
import Hufflepuff from '../../assets/images/hufflepuff.png'
import Slytherin from '../../assets/images/slytherin.png'
import Ravenclaw from '../../assets/images/ravenclaw.png'
import Hat from '../../assets/images/sortingHat.png'
import BackArrow from '../../components/BackArrow/BackArrow'

const SortingHat = ({ dispatch }) => {

    const houses = [Gryffindor, Hufflepuff, Slytherin, Ravenclaw];

    const [index, setIndex] = useState(-1)
    
    const getRandomIndex = () => {
        setIndex(Math.round(Math.random() * 3))
    }

    const resetIndex = () => {
        setIndex(-1)
    }

    return (
        <section id="sortingHatContainer">
            <div className="heading">
                <BackArrow newRoute={'home'} title="Sorting Hat" newUrl={'characters'} dispatch={dispatch} />
                <h3>Which house are you most suited to?</h3>
            </div>
            <article id="sortingHat">
                {
                    <figure id="sortingHatResult">
                        {
                            index < 0 ?
                            <img src={Hat} alt="Sorting hat" />
                            :
                            <img src={houses[index]} alt="Crest of randomly selected house" />
                        }
                    </figure>
                }
                {
                    index < 0 ?
                    <button className="sortingHatButton option" onClick={getRandomIndex}>Find House</button>
                    :
                    <button className="sortingHatButton option" onClick={resetIndex}>Have Another Go</button>
                }
            </article>
        </section>
    )
}

export default SortingHat
