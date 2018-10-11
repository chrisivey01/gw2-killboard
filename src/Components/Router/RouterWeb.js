import React, {Component} from 'react'
import WvwKills from '../KillLeaderboard/WvwKills'
import WeeklyKill from '../WeeklyKill/WeeklyKill'
import Discord from '../DiscordEmbed/Discord'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class RouterWeb extends Component {
    constructor(props) {
        super(props)

    }

    render()
    {
        return (
            <Router>
                <div>
                    <ul className="weeklyAndTop">
                        <li onClick={this.props.loadWeeklyData}>
                            <Link to="/weekly">Weekly Leaderboard</Link>
                        </li>
                        <li onClick={this.props.loadMasterData}>
                            <Link to="/top">Top Leaderboard</Link>
                        </li>
                    </ul>

                    <hr/>

                    <Route exact path='/weekly' render={(props) =>
                        (<WeeklyKill {...props} data={this.props.weeklyData}/>
                        )}/>

                    <Route exact path='/top' render={(props) =>
                        (<WvwKills {...props} totalData={this.props.totalData}/>
                        )}/>

                    <Route exact path='/' component={Discord}/>
                </div>
            </Router>
        )
    }

}

export default RouterWeb;