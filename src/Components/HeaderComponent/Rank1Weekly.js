import React from 'react'


const Rank1Weekly = (props) => {

    return(
        <div>
            <div>
            <label>Top Weekly Killer:</label>{props.topKiller[0].account_id}
            </div>
        </div>
    )


}

export default Rank1Weekly;