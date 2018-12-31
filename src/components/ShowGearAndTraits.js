import React from 'react'

const ShowGearAndTraits = (props) => {
    let results = props.character_gear
    delete results.uid;


    return (
        <div>
            <ul>
                {Object.values(results).map((eq, i) => {
                       return <li>{eq}</li>
                    }
                )}
            </ul>
        </div>

    )


}

export default ShowGearAndTraits;