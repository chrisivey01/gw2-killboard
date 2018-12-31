import React from 'react'
import {Link, Route} from 'react-router-dom'
import ShowGearAndTraits from './ShowGearAndTraits'


const Builds = (props) => {


    let characterNames = props.gears
    return (

        <div>

            <div>
                {characterNames.map((eq, i) => {
                    return <Link to={`/builds/character/${eq.character_name}`}
                                 onClick={() => props.loadGearsForCharacter(eq.character_name)} className="buttonFont"
                                 key={i}>
                        <button>
                        {eq.character_name}
                        </button>
                    </Link>
                })}

            </div>
            <Route path={`/builds/character/${props.character_name}`}
                  exact component={() => <ShowGearAndTraits character_gear={props.character_gear}/>}/>
        </div>
    )
}

export default Builds;