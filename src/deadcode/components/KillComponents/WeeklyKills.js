
import React, {Component} from 'react'
import '../../App.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



class WeeklyKills extends Component {
    render() {
        let wvwKills = this.props.data

        return (
            <div>
                <BootstrapTable className="fontColor" data={wvwKills} striped search pagination hover>
                    <TableHeaderColumn  width='70px' isKey dataField='rank'>Ranks</TableHeaderColumn>
                    <TableHeaderColumn  width='200px' dataField='account_id'>Account ID</TableHeaderColumn>
                    <TableHeaderColumn  width='200px' dataField='weekly_kill_total'>Weekly Kill Total</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}
    export default WeeklyKills;