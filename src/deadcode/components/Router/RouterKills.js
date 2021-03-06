import React, {Component} from 'react'
import TotalKills from '../KillComponents/TotalKills'
import WeeklyKills from '../KillComponents/WeeklyKills'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


class RouterKills extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Router>
                <div className="routes">
                    <div className="routesContainer">
                        <Link className="boards" onClick={this.props.loadWeeklyData} to="/weekly">Weekly
                            Leaderboard</Link>
                        <Link className="boards" onClick={this.props.loadMasterData} to="/top">Top Leaderboard</Link>
                    </div>

                    <hr/>

                    <Route exact path='/weekly' render={(props) =>
                        (<WeeklyKills {...props} data={this.props.weeklyData}/>
                        )}/>


                    <Route exact path='/top' render={(props) =>
                        (<TotalKills {...props} totalData={this.props.totalData}/>
                        )}/>
                </div>
            </Router>
        )
    }

}

export default RouterKills;