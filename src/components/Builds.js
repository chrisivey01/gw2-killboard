import React from 'react'


const Builds = (props) => {

    let characterNames = props.gears

    return (

        <div>
            Under construction :D
            <div>
            {characterNames.map((eq,i) => {
               return <button className="buttonFont" key={i}>{eq.character_name}</button>
            })}
            </div>
        </div>
    )

}

export default Builds;