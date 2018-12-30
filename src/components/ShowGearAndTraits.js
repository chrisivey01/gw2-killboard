import React from 'react'

const ShowGearAndTraits = (props) => {
    let characterGears = this.props.gears

    return (
        <div>
            <ul>
                {characterGears.map((eq, i) => {
                       return <li></li>
                    }
                )}
            </ul>
        </div>

    )


}

export default ShowGearAndTraits;