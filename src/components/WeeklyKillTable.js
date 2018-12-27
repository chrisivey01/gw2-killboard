import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const WeeklyKillTable = (props) => {
    let wvwKills = props.weeklyKills

    return(
        <div>
            <BootstrapTable className="fontColor" data={wvwKills} search pagination hover>
                <TableHeaderColumn width='70px' isKey dataField='rank'>Ranks</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='account_id'>Account ID</TableHeaderColumn>
                <TableHeaderColumn width='200px' dataField='weekly_kill_total'>Kill Total</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default WeeklyKillTable;
