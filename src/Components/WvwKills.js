import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css'


const WvwKills = (props) =>{

    const wvwKills = props.wvwTable
    return(
        <div>
            {wvwKills.length>1 ?
            <BootstrapTable data={wvwKills} striped search pagination hover>
                <TableHeaderColumn  width='70px'isKey dataField='rank'>Ranks</TableHeaderColumn>
                <TableHeaderColumn  width='200px'dataField='account_id'>Account ID</TableHeaderColumn>
                <TableHeaderColumn  width='200px' dataField='wvwkills'>Kill Total</TableHeaderColumn>
            </BootstrapTable>
                : null}
        </div>
    )
}


export default WvwKills;