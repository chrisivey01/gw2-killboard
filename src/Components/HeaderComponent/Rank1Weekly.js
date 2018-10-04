import React from 'react'


const Rank1Weekly = (props) => {

    const font = {
        fontSize:'10px'
    }
    return(
        <div>
            <div>
            <label>Top Weekly Killer:</label>{props.topKiller[0].account_id}
            </div>

            <div>
                <label style={font}>This shows current top killer, will soon be weekly.. busy coding it!!</label>
            </div>
        </div>
    )


}

export default Rank1Weekly;