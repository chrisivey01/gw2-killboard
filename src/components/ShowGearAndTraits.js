import React from 'react'

const ShowGearAndTraits = (props) => {
    let characterGears = props.gears

    return (
        <div>
            <ul>
                {characterGears.map((eq, i) => {
                       return <li>{eq}</li>
                    }
                )}
            </ul>
        </div>

    )


}

export default ShowGearAndTraits;